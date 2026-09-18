/**
 * 配置状态快照（Phase 1 P0-1 / P0-2 的持久化与回放层）。
 *
 * 与既有 `core/backup.ts` 的 `Snapshot` 的分工：
 *  - `Snapshot`（backup.ts）：**导入计划驱动**，只登记「本次导入将写入的目标」的原值，
 *    用于导入失败回滚。它不描述「整体配置在某时刻是什么样」。
 *  - `ConfigSnapshot`（本模块）：**状态驱动**，记录整份配置在某一时刻的分区数据 + 分区指纹，
 *    用于自动快照、撤销/重做、最后正常状态定位。恢复方式是**回放 adapter**
 *    （validate → analyzeImport → applyItem，与导入/Profile 切换同一条管线），
 *    因此天然覆盖 settings 命名空间、patch 行、文件类分区与插件安装。
 *
 * 存储布局：`<dir>/<id>/config-snapshot.json` = `{ meta, data }`。
 * `data` 为各分区的 ExportSection.data；其中的 Uint8Array（文件类分区的字节）
 * 经 `__u8` base64 包封做可逆 JSON 编码（JSON.stringify 会把字节变成 {0:..,1:..}）。
 *
 * 安全：快照 id 严格白名单校验（防穿越）；写入走 atomicWriteFile；分区数据只含
 * `includeSecrets: false` 的导出结果，密钥值从不进入本模块。
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { atomicWriteFile } from '../utils/atomic-write.js';
import { parseJsonSafe } from '../utils/json.js';
import { SECTION_IDS } from '../schema/config.js';
import { CURRENT_SCHEMA_VERSION } from '../schema/versions.js';
import { msgOf, zhMsg } from './messages.js';
import { isValidSnapshotId } from './restore.js';
import { statesEqual } from './config-state.js';
/** 快照文件名（每个快照一个目录） */
export const CONFIG_SNAPSHOT_FILE = 'config-snapshot.json';
/** 可逆 JSON 编码：Uint8Array → { __u8: base64 } */
const U8_KEY = '__u8';
function encodeForJson(value) {
    if (value instanceof Uint8Array)
        return { [U8_KEY]: Buffer.from(value).toString('base64') };
    if (Array.isArray(value))
        return value.map(encodeForJson);
    if (value !== null && typeof value === 'object') {
        const out = {};
        for (const [k, v] of Object.entries(value))
            out[k] = encodeForJson(v);
        return out;
    }
    return value;
}
function decodeFromJson(value) {
    if (Array.isArray(value))
        return value.map(decodeFromJson);
    if (value !== null && typeof value === 'object') {
        const rec = value;
        const keys = Object.keys(rec);
        if (keys.length === 1 && keys[0] === U8_KEY && typeof rec[U8_KEY] === 'string') {
            return new Uint8Array(Buffer.from(rec[U8_KEY], 'base64'));
        }
        const out = {};
        for (const [k, v] of Object.entries(rec))
            out[k] = decodeFromJson(v);
        return out;
    }
    return value;
}
/** 供 undo.ts 使用的最小候选视图 */
export function toUndoCandidate(meta) {
    return {
        id: meta.id,
        createdAt: meta.createdAt,
        kind: meta.kind,
        state: meta.state,
        consumed: meta.consumed,
    };
}
/* ------------------------------------------------------------ 读写 */
function snapshotDir(dir, id) {
    if (!isValidSnapshotId(id))
        throw new Error(`非法配置快照 id: ${JSON.stringify(id)}`);
    const target = path.join(dir, id);
    if (!target.startsWith(path.resolve(dir) + path.sep))
        throw new Error(`配置快照路径越界: ${id}`);
    return target;
}
/** 生成快照 id：时间戳 + 随机短串（可读 + 唯一；与既有 uuid 风格区分开） */
export function makeConfigSnapshotId(now = () => new Date()) {
    const d = now();
    const p = (n, w = 2) => String(n).padStart(w, '0');
    const stamp = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
    const rand = Math.random().toString(36).slice(2, 6).padEnd(4, '0');
    return `${stamp}-${rand}`;
}
/**
 * 写入一个配置快照。返回落盘后的元数据。
 * id 冲突时自动追加后缀重试（同一秒内多次快照）。
 */
export async function saveConfigSnapshot(opts) {
    const { dir, kind, reason, sections, state } = opts;
    const now = opts.now ?? (() => new Date());
    const idFactory = opts.idFactory ?? (() => makeConfigSnapshotId(now));
    const maxBytes = opts.maxBytes ?? 64 * 1024 * 1024;
    await fs.mkdir(dir, { recursive: true });
    let id = idFactory();
    for (let attempt = 0; attempt < 50; attempt++) {
        try {
            await fs.access(path.join(dir, id));
            id = `${idFactory()}-${Math.random().toString(36).slice(2, 5)}`;
        }
        catch {
            break; // 不存在 → 可用
        }
    }
    const data = {};
    for (const [sectionId, exported] of sections) {
        data[sectionId] = encodeForJson(exported.data);
    }
    const sectionsList = [...sections.keys()].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    const payload = { meta: null, data };
    const metaBase = {
        id,
        createdAt: now().toISOString(),
        kind,
        reason,
        ...(opts.trigger !== undefined ? { trigger: opts.trigger } : {}),
        sections: sectionsList,
        state,
        ...(opts.note !== undefined ? { note: opts.note } : {}),
        ...(opts.tags !== undefined ? { tags: opts.tags } : {}),
    };
    payload.meta = metaBase;
    const serialized = JSON.stringify(payload, null, 2);
    const bytes = Buffer.byteLength(serialized);
    if (bytes > maxBytes) {
        throw new Error(`配置快照超出上限（${bytes} > ${maxBytes} 字节）；请缩小分区范围后重试`);
    }
    const meta = { ...metaBase, totalBytes: bytes };
    payload.meta = meta;
    const finalText = JSON.stringify(payload, null, 2);
    const target = snapshotDir(dir, id);
    await fs.mkdir(target, { recursive: true });
    await atomicWriteFile(path.join(target, CONFIG_SNAPSHOT_FILE), finalText);
    return meta;
}
/**
 * meta.state 形状校验。
 * 语义：
 *  - 缺失 / undefined → **放行**（旧格式快照，撤销侧会按「无法比对」剔除，
 *    但它仍应出现在列表里可见/可恢复）；
 *  - 存在但不是 `{ sections: [...] }` → 判为损坏并整条丢弃：继续信任它会让
 *    statesEqual/planUndo 拿到形状不对的对象（历史上会直接抛 TypeError，
 *    一条坏文件就能让整个灾备面板 500）。
 */
function isValidStateField(value) {
    if (value === undefined)
        return true;
    if (value === null || typeof value !== 'object' || Array.isArray(value))
        return false;
    return Array.isArray(value.sections);
}
/** 读单个快照的元数据；缺失/损坏/非法 id → null（绝不抛）。 */
export async function readConfigSnapshotMeta(dir, id) {
    if (!isValidSnapshotId(id))
        return null;
    try {
        const raw = await fs.readFile(path.join(dir, id, CONFIG_SNAPSHOT_FILE), 'utf8');
        const parsed = parseJsonSafe(raw);
        const meta = parsed?.meta;
        if (meta === null || meta === undefined || typeof meta !== 'object')
            return null;
        if (meta.id !== id || typeof meta.createdAt !== 'string' || typeof meta.kind !== 'string')
            return null;
        if (!isValidStateField(meta.state))
            return null;
        return meta;
    }
    catch {
        return null;
    }
}
/** 列出全部快照元数据（按 createdAt 倒序；损坏条目跳过，不阻断其余）。 */
export async function listConfigSnapshots(dir) {
    let entries;
    try {
        entries = await fs.readdir(dir, { withFileTypes: true });
    }
    catch {
        return [];
    }
    const metas = [];
    for (const entry of entries) {
        if (!entry.isDirectory())
            continue;
        const meta = await readConfigSnapshotMeta(dir, entry.name);
        if (meta !== null)
            metas.push(meta);
    }
    metas.sort((a, b) => {
        if (a.createdAt !== b.createdAt)
            return a.createdAt < b.createdAt ? 1 : -1;
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    });
    return metas;
}
/** 读完整快照（含分区数据）。缺失/损坏抛出。 */
export async function loadConfigSnapshot(dir, id) {
    const target = snapshotDir(dir, id);
    const raw = await fs.readFile(path.join(target, CONFIG_SNAPSHOT_FILE), 'utf8');
    const parsed = parseJsonSafe(raw);
    const meta = parsed?.meta;
    if (meta === null || meta === undefined || typeof meta !== 'object' || meta.id !== id) {
        throw new Error(`配置快照 ${id} 的 ${CONFIG_SNAPSHOT_FILE} 不是合法对象`);
    }
    const data = {};
    for (const [k, v] of Object.entries(parsed?.data ?? {})) {
        data[k] = decodeFromJson(v);
    }
    return { ...meta, data };
}
/** 原地更新元数据字段；快照不存在返回 null。 */
export async function updateConfigSnapshotMeta(dir, id, patch) {
    if (!isValidSnapshotId(id))
        return null;
    const target = path.join(dir, id, CONFIG_SNAPSHOT_FILE);
    let raw;
    try {
        raw = await fs.readFile(target, 'utf8');
    }
    catch {
        return null;
    }
    const parsed = parseJsonSafe(raw);
    if (parsed?.meta === null || parsed?.meta === undefined)
        return null;
    const meta = { ...parsed.meta };
    for (const [k, v] of Object.entries(patch)) {
        if (v === undefined)
            continue;
        meta[k] = v;
    }
    await atomicWriteFile(target, JSON.stringify({ meta, data: parsed.data ?? {} }, null, 2));
    return meta;
}
/** 删除单个快照（幂等：不存在视为成功）。 */
export async function deleteConfigSnapshot(dir, id) {
    if (!isValidSnapshotId(id))
        throw new Error(`非法配置快照 id: ${JSON.stringify(id)}`);
    const target = snapshotDir(dir, id);
    try {
        await fs.stat(target);
    }
    catch {
        return false;
    }
    await fs.rm(target, { recursive: true, force: true });
    return true;
}
/**
 * 保留清理：按 kind 分桶，各自保留最新 N 份，删除更旧的。
 * pinned 快照**一律豁免**（用户显式保留的回滚点不得被自动淘汰）。
 * 返回被删除的快照 id 列表。
 */
export async function pruneConfigSnapshots(dir, opts = {}) {
    const keepAuto = opts.keepAuto ?? 20;
    const keepPre = opts.keepPreRestore ?? 10;
    const keepManual = opts.keepManual ?? Number.POSITIVE_INFINITY;
    const metas = (await listConfigSnapshots(dir)).filter((m) => m.pinned !== true);
    const bucket = (kind) => {
        if (kind === 'pre-restore')
            return keepPre;
        if (kind === 'manual')
            return keepManual;
        return keepAuto;
    };
    const grouped = new Map();
    for (const meta of metas) {
        const limit = bucket(meta.kind);
        const list = grouped.get(limit) ?? [];
        list.push(meta);
        grouped.set(limit, list);
    }
    // metas 已按 createdAt 倒序 → 每桶内前 limit 个保留，其余删除
    const removed = [];
    for (const [limit, list] of grouped) {
        if (!Number.isFinite(limit))
            continue;
        for (const meta of list.slice(Math.max(0, limit))) {
            await fs.rm(path.join(dir, meta.id), { recursive: true, force: true });
            removed.push(meta.id);
        }
    }
    return removed;
}
/* ------------------------------------------------------------ 回放恢复 */
/** 构建回放用 manifest（与 profiles/profile-manager.ts 的 buildProfileManifest 同构） */
function buildReplayManifest(ctx) {
    const sections = {};
    for (const id of SECTION_IDS)
        sections[id] = false;
    return {
        schemaVersion: CURRENT_SCHEMA_VERSION,
        exporter: { name: 'DSH Config Manager', version: '0.1.0' },
        source: {
            dshVersion: ctx.dshVersion,
            platform: ctx.platform,
            arch: ctx.arch,
        },
        exportedAt: new Date().toISOString(),
        sections: sections,
        security: { containsSecrets: false, encrypted: false, encryption: null },
    };
}
/** 非破坏性计划项：不调用 applyItem（与导入管线的「可执行 kinds」口径一致） */
const NON_EXECUTABLE_KINDS = new Set(['Skip', 'Warning', 'MissingSecret', 'MissingDependency', 'PathMapping']);
/**
 * 回放一个配置快照：对每个分区 validate → analyzeImport → applyItem。
 * 与导入/Profile 切换共用 adapter 管线，因此行为一致、无第二套写入逻辑。
 * 单项失败不拖垮其余（如实计入 failed），与 rollback.ts 的尽力语义一致。
 */
export async function restoreConfigSnapshot(opts) {
    const { dir, id, adapters, ctx } = opts;
    const msg = opts.msg ?? ctx.msg ?? zhMsg;
    const snapshot = await loadConfigSnapshot(dir, id);
    const only = opts.only !== undefined ? new Set(opts.only) : null;
    const sections = new Map();
    for (const [k, v] of Object.entries(snapshot.data)) {
        if (only !== null && !only.has(k))
            continue;
        sections.set(k, v);
    }
    const importCtx = {
        manifest: buildReplayManifest(ctx),
        targetPlatform: ctx.platform,
        target: ctx,
        sections,
        pathMappings: [],
        resolutions: {},
        secretInputs: {},
        log: ctx.log,
        msg,
    };
    const ordered = opts.applyOrder !== undefined
        ? [...adapters].sort((a, b) => {
            const ia = opts.applyOrder.indexOf(a.id);
            const ib = opts.applyOrder.indexOf(b.id);
            return (ia < 0 ? Number.MAX_SAFE_INTEGER : ia) - (ib < 0 ? Number.MAX_SAFE_INTEGER : ib);
        })
        : [...adapters];
    const report = {
        ok: true,
        snapshotId: id,
        applied: [],
        skipped: [],
        failed: [],
        invalidSections: [],
        needsRestart: false,
    };
    for (const adapter of ordered) {
        const data = sections.get(adapter.id);
        if (data === undefined)
            continue;
        let items;
        try {
            const validation = await adapter.validate(data, msg);
            if (!validation.valid) {
                const reason = validation.issues
                    .filter((i) => i.severity === 'error')
                    .map((i) => `${i.path}: ${i.message}`)
                    .join('; ');
                report.invalidSections.push({ section: adapter.id, reason: reason === '' ? 'validation failed' : reason });
                continue;
            }
            items = await adapter.analyzeImport(data, importCtx);
        }
        catch (err) {
            report.invalidSections.push({
                section: adapter.id,
                reason: err instanceof Error ? err.message : String(err),
            });
            continue;
        }
        let index = 0;
        for (const item of items) {
            index += 1;
            opts.onItem?.({ index, total: items.length, detail: `${adapter.id}:${item.id}` });
            if (item.kind === 'Error') {
                report.failed.push({ item: `${adapter.id}:${item.id}`, reason: item.description });
                report.ok = false;
                continue;
            }
            if (NON_EXECUTABLE_KINDS.has(item.kind)) {
                report.skipped.push(`${adapter.id}:${item.id}`);
                continue;
            }
            try {
                const result = await adapter.applyItem(item, importCtx);
                if (result.ok) {
                    report.applied.push(`${adapter.id}:${item.id}`);
                    if (result.needsRestart === true)
                        report.needsRestart = true;
                }
                else if (result.warning === true) {
                    report.skipped.push(`${adapter.id}:${item.id}`);
                }
                else {
                    report.failed.push({
                        item: `${adapter.id}:${item.id}`,
                        reason: result.message ?? 'applyItem 返回失败',
                    });
                    report.ok = false;
                }
            }
            catch (err) {
                report.failed.push({
                    item: `${adapter.id}:${item.id}`,
                    reason: err instanceof Error ? err.message : String(err),
                });
                report.ok = false;
            }
        }
    }
    return report;
}
/** 便捷：两个快照的分区指纹是否等价（供 UI「与当前一致」提示） */
export function snapshotsEquivalent(a, b) {
    return statesEqual(a.state, b.state);
}
/** 供调用方取翻译器（保持与 core 其他模块一致的导出面） */
export const configSnapshotMsgOf = msgOf;
//# sourceMappingURL=config-snapshot.js.map