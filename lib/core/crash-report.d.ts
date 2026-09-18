/** 上次启动结果（持久化到 <dir>/boot-state.json）。 */
export interface BootState {
    /** 本次启动开始时刻（ISO 字符串）。 */
    startedAt: string;
    /** 启动进程 pid。 */
    pid: number;
    /** 本次启动是否已判定成功。 */
    ok: boolean;
    /** 判定成功的时刻；未成功为 null。 */
    okAt: string | null;
    /** 最近一次「确认正常」的时刻（成功启动时推进）。 */
    lastGoodAt: string | null;
    /** 崩溃原因归因；无归因为 null。 */
    crashReason: CrashKind | null;
}
/** 崩溃原因分类（日志尾部签名 → 枚举；无匹配为 unknown）。 */
export type CrashKind = 'session-corrupt' | 'bundle-check' | 'patch-tree' | 'unknown';
/** 本次启动的 boot alert（结构化判定结果，无用户文案）。 */
export interface BootAlert {
    /** 是否判定为「上次启动崩溃」。 */
    crashed: boolean;
    /** 最近一次确认正常的时刻（供「恢复最后正常快照」使用）。 */
    lastGoodAt: string | null;
    /** 崩溃原因；未崩溃或无证据为 null。 */
    crashReason: CrashKind | null;
    /** 建议用户采取的动作，枚举而非文案。 */
    advice: CrashAdvice;
}
/** 建议动作（枚举码；文案由宿主 i18n 决定）。 */
export type CrashAdvice = 'none' | 'restore-last-good' | 'repair-session' | 'check-bundles' | 'check-patch-tree';
/** 按日志尾部签名分类崩溃原因；无匹配返回 'unknown'。 */
export declare function classifyCrashLog(text: string): CrashKind;
/**
 * advice 由 crashReason 决定：session-corrupt→repair-session, bundle-check→check-bundles,
 * patch-tree→check-patch-tree, unknown→restore-last-good（crashReason 为 null 时同样
 * 回退 restore-last-good：崩溃但无归因证据，只有「回到最后正常」这一条稳妥动作）。
 * crashed=false 时 advice='none'。
 */
export declare function adviceFor(kind: CrashKind | null, crashed: boolean): CrashAdvice;
/** 只读读取 boot-state；缺失/损坏/非法一律返回 null（绝不抛）。 */
export declare function readBootState(dir: string): Promise<BootState | null>;
/**
 * 原子写入 boot-state（用 ../utils/atomic-write.ts 的 atomicWriteFile）。失败不抛。
 * 只落盘 BootState 的六个已知字段（避免调用方对象上的额外字段进入持久化文件）。
 */
export declare function writeBootState(dir: string, state: BootState): Promise<void>;
/**
 * 计算本次启动的 boot alert。
 * - prev 为 null（首次启动）→ crashed=false，lastGoodAt=null，crashReason=null，advice='none'；
 * - prev.ok !== true → crashed=true（上次没走到「确认成功」）；
 * - crashReason 优先沿用 prev.crashReason（上次已算过），否则若给了 logTail 就用 classifyCrashLog；
 * - crashed=false 时 crashReason 恒为 null（健康启动不做归因，见文件头「语义决策」）。
 */
export declare function computeBootAlert(prev: BootState | null, logTail: string | null): BootAlert;
/**
 * 从候选日志文件里读尾部（最多 maxBytes，默认 262144），返回第一个非空日志的文本；
 * 无则 null。单个候选不可读（不存在/无权限/是目录）不抛，直接跳到下一个。
 */
export declare function readCrashLogTail(candidates: readonly string[], maxBytes?: number): Promise<string | null>;
/**
 * 列出候选日志路径：`<homeDir>/logs/*.log`（按文件名字典序，稳定可测）与
 * `<homeDir>/dsh.log`（存在才纳入）。`logs` 目录不存在/不可读时返回空数组
 * —— 与「无候选日志」同义（不抛）。
 */
export declare function listCandidateLogs(homeDir: string): Promise<string[]>;
/**
 * 选「最后正常快照」：在 snapshots 中找 createdAt <= lastGoodAt 的**最新**一个，
 * 跳过 kind==='pre-restore'（恢复前双保险快照，不代表「正常状态」）。
 * lastGoodAt 为 null / 非法 → null；无符合项（含 createdAt 不可解析者）→ null。
 * createdAt 相同时保留数组中靠前者。入参为最小结构类型，刻意不 import restore.ts
 * （快照元信息 → 恢复执行 的依赖方向必须单向，避免循环依赖）。
 */
export declare function selectLastGoodSnapshot<T extends {
    id: string;
    createdAt: string;
    kind?: string;
}>(snapshots: readonly T[], lastGoodAt: string | null): T | null;
/** 启动生命周期辅助：apply 时调用一次，写「正在启动」（ok:false）。 */
export declare function beginBoot(pid: number, prev: BootState | null, now?: () => Date): BootState;
/**
 * 30 秒后 / dispose 时调用：标记成功并推进 lastGoodAt（ok:true、okAt=lastGoodAt=now）。
 * 同时清空 crashReason：本次启动已确认正常，陈旧归因不得延续到下一次崩溃判定。
 */
export declare function markBootOk(state: BootState, now?: () => Date): BootState;
