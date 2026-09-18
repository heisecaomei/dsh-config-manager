/**
 * 崩溃检测 / 归因 / 「最后正常快照」选择（Phase 1 P0-5）。
 *
 * 背景：宿主启动时先读 `<dir>/boot-state.json`（本模块的 BootState），据此判断
 * 「上次启动是否走到过确认成功」：
 *   - 首次启动（无 boot-state）→ 不判崩溃；
 *   - `prev.ok !== true` → 上次没走到确认成功（进程被杀 / 启动即崩 / dispose 前未标记）→
 *     判崩溃，并按日志尾部签名归因（session 日志损坏 / bundle 声明缺失 / 插件树注册冲突）；
 *   - `prev.ok === true` → 上次正常。
 * 崩溃时给出「建议动作」枚举（advice）与「最近确认正常时刻」（lastGoodAt），宿主据此选择
 * 恢复目标：`selectLastGoodSnapshot()` 在快照列表中挑出 `createdAt <= lastGoodAt` 的最新一个
 * （跳过 `pre-restore` 双保险快照），再由既有恢复通道执行。
 *
 * 生命周期（宿主接线，本模块只提供纯函数与 IO 原语）：
 *   读 prev = readBootState(dir) → alert = computeBootAlert(prev, readCrashLogTail(...))
 *   → writeBootState(dir, beginBoot(pid, prev)) → 30 秒后 / dispose 时
 *   writeBootState(dir, markBootOk(state))。
 *
 * 与竞品 `boot-state.json` 机制的对应关系：同一份持久化字段、同一套日志签名、同样的
 * 「未确认成功即视为崩溃」判定；差别只在本模块**不产出任何用户可见文案**——全部返回
 * 枚举码（crashReason / advice），由宿主按应用语言映射到 `messages.ts`（建议键名形如
 * `crash.advice.restoreLastGood` / `crash.advice.repairSession` / `crash.advice.checkBundles`
 * / `crash.advice.checkPatchTree`，`advice === 'none'` 时无提示）。
 *
 * 纪律：
 *  - 只读读取绝不抛：缺失 / 损坏 / 结构非法一律返回 null；
 *  - 写入 best-effort：失败不抛（boot-state 只是诊断数据，绝不能反过来阻断启动）；
 *  - 写入经 Phase 1 `atomicWriteFile`（目标文件任意时刻要么旧完整、要么新完整）；
 *  - 本模块不执行恢复动作、不改 DSH 配置、不解析快照目录（避免与 restore.ts 循环依赖）；
 *  - 零 DSH 运行时依赖（仅 node 内置 + `../utils`），CLI 离线引擎可复用。
 *
 * 语义决策（两处刻意的「清理」行为，宿主若需展示历史崩溃原因请自行留存 alert）：
 *  - `computeBootAlert`：`crashed === false` 时 `crashReason` 恒为 null —— 健康启动不做崩溃
 *    归因（否则会把正常日志尾部误判成崩溃原因），`lastGoodAt` 另行原样带出；
 *  - `markBootOk`：确认成功时清空 `crashReason`，避免陈旧原因跨成功启动延续、
 *    在「成功 → 崩溃」序列里误传染下一次崩溃的归因。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { atomicWriteFile } from '../utils/atomic-write.js';
import { parseJsonSafe } from '../utils/json.js';
// ---------- 常量 ----------
/** boot-state 文件名（位于 <dir> 之下）。 */
const BOOT_STATE_FILE = 'boot-state.json';
/** 日志尾部默认读取字节数（256 KiB）。 */
const DEFAULT_LOG_TAIL_BYTES = 262144;
/** 候选日志所在子目录（<homeDir>/logs/*.log）。 */
const LOGS_DIR_NAME = 'logs';
/** 主日志文件名（<homeDir>/dsh.log）。 */
const MAIN_LOG_FILE = 'dsh.log';
/** 日志文件后缀（大小写不敏感）。 */
const LOG_SUFFIX = '.log';
/** 快照 kind：恢复前的双保险快照，不作为「最后正常」候选。 */
const PRE_RESTORE_KIND = 'pre-restore';
/** 合法崩溃原因（读盘校验用；与 CrashKind 联合类型保持一一对应）。 */
const CRASH_KINDS = ['session-corrupt', 'bundle-check', 'patch-tree', 'unknown'];
/** 崩溃原因 → 建议动作（crashed=false 时恒为 'none'，不经此表）。 */
const ADVICE_BY_KIND = {
    'session-corrupt': 'repair-session',
    'bundle-check': 'check-bundles',
    'patch-tree': 'check-patch-tree',
    'unknown': 'restore-last-good',
};
// ---------- 日志签名（与竞品 boot-state.json 机制逐字对齐） ----------
/** 会话日志损坏：Zstandard 压缩的 session 日志读不出来（写入被中断）。 */
const SESSION_CORRUPT_RE = /corrupt Zstandard session log/i;
/** bundle 检查失败：profile 未声明 dsh.bundle / bundle 无法解析（插件包元数据被改坏）。 */
const BUNDLE_CHECK_RE = /declares no dsh\.bundle|cannot resolve profile bundle/i;
/** patch 树加载失败：重复注册 / loader 条目重复 / 插件加载失败 / 依赖缺失。 */
const PATCH_TREE_RE = /already registered|duplicate loader entry|failed to load plugin|cannot find (module|package)/i;
// ---------- 崩溃归因 ----------
/** 按日志尾部签名分类崩溃原因；无匹配返回 'unknown'。 */
export function classifyCrashLog(text) {
    if (SESSION_CORRUPT_RE.test(text))
        return 'session-corrupt';
    if (BUNDLE_CHECK_RE.test(text))
        return 'bundle-check';
    if (PATCH_TREE_RE.test(text))
        return 'patch-tree';
    return 'unknown';
}
/**
 * advice 由 crashReason 决定：session-corrupt→repair-session, bundle-check→check-bundles,
 * patch-tree→check-patch-tree, unknown→restore-last-good（crashReason 为 null 时同样
 * 回退 restore-last-good：崩溃但无归因证据，只有「回到最后正常」这一条稳妥动作）。
 * crashed=false 时 advice='none'。
 */
export function adviceFor(kind, crashed) {
    if (!crashed)
        return 'none';
    if (kind === null)
        return 'restore-last-good';
    // 防御：磁盘上的值理论上已校验，运行时仍可能越界 → 保守回退「恢复最后正常快照」
    return ADVICE_BY_KIND[kind] ?? 'restore-last-good';
}
// ---------- boot-state 读写 ----------
/** 普通对象判定（数组 / null / 原始值均不算）。 */
function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
/** crashReason 是否为合法枚举值。 */
function isCrashKind(value) {
    return typeof value === 'string' && CRASH_KINDS.includes(value);
}
/** 可空字符串字段校验（null 合法；缺失/其它类型非法）。 */
function isNullableString(value) {
    return value === null || typeof value === 'string';
}
/**
 * 结构校验：只有完整且类型正确的对象才算 BootState（不做字段值语义校验 —— 时间戳是否
 * 可解析由消费方决定，避免把「格式怪但可用」的旧数据判死）。
 */
function parseBootState(value) {
    if (!isRecord(value))
        return null;
    const { startedAt, pid, ok, okAt, lastGoodAt, crashReason } = value;
    if (typeof startedAt !== 'string')
        return null;
    if (typeof pid !== 'number' || !Number.isFinite(pid))
        return null;
    if (typeof ok !== 'boolean')
        return null;
    if (!isNullableString(okAt))
        return null;
    if (!isNullableString(lastGoodAt))
        return null;
    if (crashReason !== null && !isCrashKind(crashReason))
        return null;
    return { startedAt, pid, ok, okAt, lastGoodAt, crashReason };
}
/** 只读读取 boot-state；缺失/损坏/非法一律返回 null（绝不抛）。 */
export async function readBootState(dir) {
    try {
        const text = await fs.readFile(path.join(dir, BOOT_STATE_FILE), 'utf8');
        return parseBootState(parseJsonSafe(text));
    }
    catch {
        // 文件缺失 / 非法 JSON / 读权限 → 与「无 boot-state」同义：不判崩溃
        return null;
    }
}
/**
 * 原子写入 boot-state（用 ../utils/atomic-write.ts 的 atomicWriteFile）。失败不抛。
 * 只落盘 BootState 的六个已知字段（避免调用方对象上的额外字段进入持久化文件）。
 */
export async function writeBootState(dir, state) {
    const persisted = {
        startedAt: state.startedAt,
        pid: state.pid,
        ok: state.ok,
        okAt: state.okAt,
        lastGoodAt: state.lastGoodAt,
        crashReason: state.crashReason,
    };
    try {
        await atomicWriteFile(path.join(dir, BOOT_STATE_FILE), `${JSON.stringify(persisted, null, 2)}\n`);
    }
    catch {
        // boot-state 只是诊断数据：写入失败绝不影响启动/恢复主流程
    }
}
// ---------- boot alert ----------
/**
 * 计算本次启动的 boot alert。
 * - prev 为 null（首次启动）→ crashed=false，lastGoodAt=null，crashReason=null，advice='none'；
 * - prev.ok !== true → crashed=true（上次没走到「确认成功」）；
 * - crashReason 优先沿用 prev.crashReason（上次已算过），否则若给了 logTail 就用 classifyCrashLog；
 * - crashed=false 时 crashReason 恒为 null（健康启动不做归因，见文件头「语义决策」）。
 */
export function computeBootAlert(prev, logTail) {
    if (prev === null) {
        return { crashed: false, lastGoodAt: null, crashReason: null, advice: 'none' };
    }
    const crashed = prev.ok !== true;
    const lastGoodAt = prev.lastGoodAt ?? null;
    if (!crashed) {
        return { crashed: false, lastGoodAt, crashReason: null, advice: 'none' };
    }
    const hasLog = logTail !== null && logTail.trim() !== '';
    const crashReason = prev.crashReason ?? (hasLog ? classifyCrashLog(logTail) : null);
    return { crashed: true, lastGoodAt, crashReason, advice: adviceFor(crashReason, true) };
}
// ---------- 候选日志与尾部读取 ----------
/** 读单个文件尾部（最多 maxBytes）；不可读/为空返回 null。 */
async function readFileTail(file, maxBytes) {
    let handle = null;
    try {
        handle = await fs.open(file, 'r');
        const { size } = await handle.stat();
        if (size <= 0)
            return null;
        const start = Math.max(0, size - maxBytes);
        const length = size - start;
        const buf = Buffer.alloc(length);
        await handle.read(buf, 0, length, start);
        const text = buf.toString('utf8');
        return text.length > 0 ? text : null;
    }
    catch {
        // 不存在 / 无权限 / 是目录 / 读取竞态 → 该候选不可用，由调用方试下一个
        return null;
    }
    finally {
        if (handle !== null) {
            try {
                await handle.close();
            }
            catch { /* 关闭失败无需处理 */ }
        }
    }
}
/**
 * 从候选日志文件里读尾部（最多 maxBytes，默认 262144），返回第一个非空日志的文本；
 * 无则 null。单个候选不可读（不存在/无权限/是目录）不抛，直接跳到下一个。
 */
export async function readCrashLogTail(candidates, maxBytes = DEFAULT_LOG_TAIL_BYTES) {
    const limit = Math.floor(maxBytes);
    if (!Number.isFinite(limit) || limit <= 0)
        return null;
    for (const candidate of candidates) {
        const text = await readFileTail(candidate, limit);
        if (text !== null)
            return text;
    }
    return null;
}
/** 路径是否为可读常规文件（跟随 symlink；不存在/是目录 → false）。 */
async function isFile(p) {
    try {
        return (await fs.stat(p)).isFile();
    }
    catch {
        return false;
    }
}
/**
 * 列出候选日志路径：`<homeDir>/logs/*.log`（按文件名字典序，稳定可测）与
 * `<homeDir>/dsh.log`（存在才纳入）。`logs` 目录不存在/不可读时返回空数组
 * —— 与「无候选日志」同义（不抛）。
 */
export async function listCandidateLogs(homeDir) {
    const out = [];
    const logsDir = path.join(homeDir, LOGS_DIR_NAME);
    let names;
    try {
        const entries = await fs.readdir(logsDir, { withFileTypes: true });
        names = entries
            .filter((e) => (e.isFile() || e.isSymbolicLink()) && e.name.toLowerCase().endsWith(LOG_SUFFIX))
            .map((e) => e.name)
            .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    }
    catch {
        return [];
    }
    for (const name of names)
        out.push(path.join(logsDir, name));
    const main = path.join(homeDir, MAIN_LOG_FILE);
    if (await isFile(main))
        out.push(main);
    return out;
}
// ---------- 最后正常快照 ----------
/** 时间戳解析（非字符串/空串/不可解析 → null）。 */
function parseTime(value) {
    if (typeof value !== 'string' || value === '')
        return null;
    const ms = Date.parse(value);
    return Number.isNaN(ms) ? null : ms;
}
/**
 * 选「最后正常快照」：在 snapshots 中找 createdAt <= lastGoodAt 的**最新**一个，
 * 跳过 kind==='pre-restore'（恢复前双保险快照，不代表「正常状态」）。
 * lastGoodAt 为 null / 非法 → null；无符合项（含 createdAt 不可解析者）→ null。
 * createdAt 相同时保留数组中靠前者。入参为最小结构类型，刻意不 import restore.ts
 * （快照元信息 → 恢复执行 的依赖方向必须单向，避免循环依赖）。
 */
export function selectLastGoodSnapshot(snapshots, lastGoodAt) {
    const boundary = parseTime(lastGoodAt);
    if (boundary === null)
        return null;
    let best = null;
    let bestTime = Number.NEGATIVE_INFINITY;
    for (const snapshot of snapshots) {
        if (snapshot.kind === PRE_RESTORE_KIND)
            continue;
        const at = parseTime(snapshot.createdAt);
        if (at === null || at > boundary)
            continue;
        if (best === null || at > bestTime) {
            best = snapshot;
            bestTime = at;
        }
    }
    return best;
}
// ---------- 启动生命周期辅助 ----------
/** 启动生命周期辅助：apply 时调用一次，写「正在启动」（ok:false）。 */
export function beginBoot(pid, prev, now = () => new Date()) {
    return {
        startedAt: now().toISOString(),
        pid,
        ok: false,
        okAt: null,
        // 未确认成功前，「最近正常」与「上次崩溃归因」都从上一次状态延续
        lastGoodAt: prev?.lastGoodAt ?? null,
        crashReason: prev?.crashReason ?? null,
    };
}
/**
 * 30 秒后 / dispose 时调用：标记成功并推进 lastGoodAt（ok:true、okAt=lastGoodAt=now）。
 * 同时清空 crashReason：本次启动已确认正常，陈旧归因不得延续到下一次崩溃判定。
 */
export function markBootOk(state, now = () => new Date()) {
    const iso = now().toISOString();
    return { ...state, ok: true, okAt: iso, lastGoodAt: iso, crashReason: null };
}
//# sourceMappingURL=crash-report.js.map