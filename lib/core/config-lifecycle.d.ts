import { type ConfigState } from './config-state.ts';
import { type ConfigSnapshotMeta, type ConfigSnapshotRestoreReport } from './config-snapshot.ts';
import { type ConfigSnapshotKind } from './undo.ts';
import { type TimerApi, type WatchFactory, type WatcherEvent } from './watcher.ts';
import type { ConfigAdapter, HostContext } from './types.ts';
import type { SectionId } from '../schema/types.ts';
/** 启动关键配置文件（相对 homeDir）——自动快照最需要覆盖的那一批 */
export declare const BOOT_CRITICAL_RELS: readonly string[];
/** profile 下启动关键配置文件（相对 homeDir） */
export declare function profileCriticalRels(profile: string): string[];
/** 需要监听变更的目录（绝对路径；去重） */
export declare function watchDirsFor(homeDir: string, profile: string): string[];
/** 回声候选文件（绝对路径）：我们恢复时会写的配置面文件 */
export declare function echoCandidatePaths(homeDir: string, profile: string): string[];
export interface ConfigLifecycleOptions {
    /** 配置快照根目录（建议 <dataDir>/config-snapshots） */
    dir: string;
    adapters: readonly ConfigAdapter[];
    ctx: HostContext;
    /** profile 名（决定监听目录与 profile 文件集） */
    profile: string;
    /** 分区应用顺序（回放用；建议传与导入管线一致的顺序） */
    applyOrder?: readonly SectionId[];
    /** 自动快照开关（缺省 true） */
    autoEnabled?: boolean;
    /** 防抖窗口（缺省 1500ms） */
    debounceMs?: number;
    /** 保留份数（缺省 auto 20 / pre-restore 10 / manual 不限） */
    keepAuto?: number;
    keepPreRestore?: number;
    /** watch 工厂（缺省由宿主注入真 fs.watch；未注入则自动快照不启动） */
    watchFactory?: WatchFactory;
    /** 定时器注入（透传给 DebouncedWatcher；测试用假定时器即可完整驱动时序） */
    timers?: TimerApi;
    /** 采集时单分区失败回调（不阻断） */
    onSectionError?: (section: SectionId, error: unknown) => void;
    /** 自动快照落盘后的回调（宿主写审计史） */
    onAutoSnapshot?: (meta: ConfigSnapshotMeta) => void;
    /** 诊断日志（默认静默） */
    onWarn?: (message: string, detail?: unknown) => void;
}
export interface LifecycleStatus {
    canUndo: boolean;
    canRedo: boolean;
    total: number;
    /** 最近一次自动快照时间（null = 从未） */
    lastAutoAt: string | null;
    /** 当前是否正在监听文件变更 */
    watching: boolean;
}
export interface UndoOutcome {
    ok: boolean;
    /** 命中目标快照 id（成功时） */
    targetId?: string;
    /** 撤销前落下的「撤销前状态」快照 id（重做的依据） */
    preSnapshotId?: string;
    /** 失败原因（未命中/回放失败） */
    reason?: string;
    report?: ConfigSnapshotRestoreReport;
    /** 被标记为「已跨过」的快照 id */
    stepped?: string[];
}
export interface RedoOutcome {
    ok: boolean;
    targetId?: string;
    reason?: string;
    report?: ConfigSnapshotRestoreReport;
    /** 重做后清除 stepped 标记的快照 id */
    unstepped?: string[];
}
export interface SnapshotRequest {
    kind: ConfigSnapshotKind;
    reason: string;
    trigger?: string;
    note?: string;
    tags?: string[];
    /** 只采集这些分区（缺省全部） */
    only?: readonly SectionId[];
}
/**
 * 配置生命周期服务（宿主单例）。
 * 所有公开方法都不抛：错误转为 `ok:false + reason`，避免拖垮宿主路由。
 */
export declare class ConfigLifecycle {
    private readonly opts;
    private readonly echo;
    private watcher;
    private lastAutoAt;
    private flushRunning;
    private disposed;
    /**
     * flush 进行中到达的事件批（见 onAutoFlush）。
     * watcher 在回调前已把事件批从 pending 摘除，若直接丢弃就再也没有定时器补发，
     * 那一次变更将永远不会被快照 —— 撤销会直接跳过它。
     */
    private deferred;
    /**
     * 最近一次回放（撤销/重做）把配置写成的目标状态。
     * 第二层回声防线的兜底：抑制窗口只能挡住**窗口内**的事件，窗口之后才投递的事件
     * （macOS / 网络盘 / 杀毒扫描后重写）只能靠内容判定 —— 若此刻采集到的状态仍等于
     * 刚写回的目标状态，那批事件就是恢复自写的回声，不得产生新快照（否则它比
     * pre-restore 更新，会把重做通道堵死）。真实变更一旦落盘即清空。
     */
    private lastReplayState;
    /** 当前实际建立监听的目录（供 reconcileWatchSet 比对，避免无谓重建） */
    private watchedDirs;
    constructor(options: ConfigLifecycleOptions);
    private warn;
    get dir(): string;
    get isWatching(): boolean;
    /**
     * 采集各分区导出结果 + 分区指纹：**单次遍历**，不重复 export。
     * 单分区失败 → 记入 failed 并跳过（不抛），使调用方能判断这次状态是否可信。
     */
    private captureSections;
    /** 采集当前配置状态（单分区失败跳过，不抛） */
    capture(only?: readonly SectionId[]): Promise<ConfigState>;
    /** 采集并落盘一个配置快照 */
    snapshot(req: SnapshotRequest): Promise<ConfigSnapshotMeta>;
    /**
     * 用一个**已采集**的产物落盘快照。
     * 为什么必须支持传入已采集结果：撤销的 pre-restore 快照必须与「据以挑选目标的
     * 那次采集」是同一份观测 —— 否则二次采集之间用户又改了配置，pre-restore 记下的
     * 就不是「撤销前状态」，重做会把用户没见过的内容写回去。
     */
    private saveSnapshot;
    list(): Promise<ConfigSnapshotMeta[]>;
    prune(): Promise<string[]>;
    status(): Promise<LifecycleStatus>;
    /**
     * 撤销：回退到与当前状态**内容不同**的最新快照。
     * 撤销前先落 `pre-restore` 快照记录当前状态，使重做可逆。
     */
    undo(): Promise<UndoOutcome>;
    /** 重做：回到最近一次未消费的 pre-restore（其后若有新快照则拒绝）。 */
    redo(): Promise<RedoOutcome>;
    /**
     * 回放指定快照（撤销/重做共用）。
     * 全程在监听抑制窗口内，并在结束后登记回声指纹——两道防线都在这里落地。
     */
    replay(id: string): Promise<ConfigSnapshotRestoreReport>;
    /**
     * 登记「刚写回的内容指纹」：恢复动作写完文件后调用。
     * 只登记我们确实会写的配置面文件（存在才登记），避免把无关文件误判为回声而漏拍。
     */
    recordEcho(): Promise<void>;
    /**
     * 事件批是否为「恢复自写的回声」。
     * 判定：批内每个文件都必须已登记**且**内容仍等于登记值；任一文件内容变了、
     * 未登记、或读不到（新增/删除）→ 真实变更。
     */
    isEchoBatch(events: readonly WatcherEvent[]): Promise<boolean>;
    /** 启动自动快照监听（幂等；未注入 watchFactory 或已关闭则空操作） */
    startAutoSnapshot(): void;
    /**
     * 监听集自愈：启动之后才出现的目录（skills / .agent-presets 在全新安装里通常不存在）
     * 在**下一次快照之后**自动纳入监听。
     *
     * 为什么需要它：startAutoSnapshot 每次进程只被调用一次（启动闸门），若只在那里过滤
     * 一次，那两个目录在整个进程生命周期里都不会被监听 —— 与注释里的承诺不符（「注释承诺 >
     * 实际防线」正是本仓库踩过的坑）。放在 flush 之后调用，既不打断进行中的采集，也不会
     * 丢掉排队中的事件批。
     */
    private reconcileWatchSet;
    stopAutoSnapshot(): void;
    /** 释放：停止监听（宿主 dispose 调用） */
    dispose(): void;
    /** 供宿主在路由层复用的抑制包装（例如 Profile 切换时） */
    suppressWhileAsync<T>(fn: () => Promise<T>): Promise<T>;
    /**
     * 防抖到期后的自动快照。
     *
     * 并发保护是「排队」而不是「丢弃」：watcher 在回调前已经把事件批从 pending 摘除，
     * 若这里直接 return，那批事件就再也没有定时器补发 —— 那次变更永远不会被快照，
     * 撤销会直接跳过它（实测：连写 v2、v3 只落了 1 份快照，且 undo 无从回到 v2）。
     */
    private onAutoFlush;
    /** 处理一批事件：回声判定 → 采集 → 落盘。 */
    private flushOnce;
}
