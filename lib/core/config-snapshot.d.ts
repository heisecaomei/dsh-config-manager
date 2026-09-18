import { msgOf } from './messages.ts';
import type { MsgFunc } from './messages.ts';
import { type ConfigState } from './config-state.ts';
import type { ConfigSnapshotKind, UndoCandidate } from './undo.ts';
import type { ConfigAdapter, ExportSection, HostContext } from './types.ts';
import type { SectionId } from '../schema/types.ts';
/** 快照文件名（每个快照一个目录） */
export declare const CONFIG_SNAPSHOT_FILE = "config-snapshot.json";
/** 快照元数据（落盘部分） */
export interface ConfigSnapshotMeta {
    id: string;
    createdAt: string;
    kind: ConfigSnapshotKind;
    /** 人类可读原因（如 'plugin-change' / 'before-restore:<id>' / 'manual'） */
    reason: string;
    /** 触发源（watcher / route / tool / schedule / undo / baseline） */
    trigger?: string;
    /** 参与采集的分区（升序） */
    sections: SectionId[];
    /** 采集到的配置状态（分区指纹；撤销/重做的内容比对基准） */
    state: ConfigState;
    note?: string;
    tags?: string[];
    pinned?: boolean;
    /** pre-restore：是否已被重做消费 */
    consumed?: boolean;
    /** 被撤销跨过（见 undo.ts steppedIds） */
    stepped?: boolean;
    /** pre-restore：本次撤销的目标快照 id */
    undoOf?: string;
    /** 落盘字节数（快照体积，供 UI 展示与容量告警） */
    totalBytes: number;
}
/** 完整快照（元数据 + 分区数据） */
export interface ConfigSnapshot extends ConfigSnapshotMeta {
    data: Partial<Record<SectionId, unknown>>;
}
/** 供 undo.ts 使用的最小候选视图 */
export declare function toUndoCandidate(meta: ConfigSnapshotMeta): UndoCandidate;
export interface SaveConfigSnapshotOptions {
    dir: string;
    kind: ConfigSnapshotKind;
    reason: string;
    trigger?: string;
    /** 本次采集的各分区导出结果（adapter.export 产出） */
    sections: Map<SectionId, ExportSection>;
    state: ConfigState;
    note?: string;
    tags?: string[];
    now?: () => Date;
    idFactory?: () => string;
    /** 落盘上限（字节；缺省 64 MiB，超出抛错而不是静默截断） */
    maxBytes?: number;
}
/** 生成快照 id：时间戳 + 随机短串（可读 + 唯一；与既有 uuid 风格区分开） */
export declare function makeConfigSnapshotId(now?: () => Date): string;
/**
 * 写入一个配置快照。返回落盘后的元数据。
 * id 冲突时自动追加后缀重试（同一秒内多次快照）。
 */
export declare function saveConfigSnapshot(opts: SaveConfigSnapshotOptions): Promise<ConfigSnapshotMeta>;
/** 读单个快照的元数据；缺失/损坏/非法 id → null（绝不抛）。 */
export declare function readConfigSnapshotMeta(dir: string, id: string): Promise<ConfigSnapshotMeta | null>;
/** 列出全部快照元数据（按 createdAt 倒序；损坏条目跳过，不阻断其余）。 */
export declare function listConfigSnapshots(dir: string): Promise<ConfigSnapshotMeta[]>;
/** 读完整快照（含分区数据）。缺失/损坏抛出。 */
export declare function loadConfigSnapshot(dir: string, id: string): Promise<ConfigSnapshot>;
/** 更新的元数据字段（写入时保留分区数据不变）。 */
export type ConfigSnapshotMetaPatch = Partial<Pick<ConfigSnapshotMeta, 'note' | 'tags' | 'pinned' | 'consumed' | 'stepped' | 'undoOf'>>;
/** 原地更新元数据字段；快照不存在返回 null。 */
export declare function updateConfigSnapshotMeta(dir: string, id: string, patch: ConfigSnapshotMetaPatch): Promise<ConfigSnapshotMeta | null>;
/** 删除单个快照（幂等：不存在视为成功）。 */
export declare function deleteConfigSnapshot(dir: string, id: string): Promise<boolean>;
export interface ConfigSnapshotPruneOptions {
    /** auto / baseline / undo 三类共用的保留份数（缺省 20） */
    keepAuto?: number;
    /** pre-restore 保留份数（缺省 10） */
    keepPreRestore?: number;
    /** manual 保留份数（缺省 Infinity = 永不自动清理） */
    keepManual?: number;
}
/**
 * 保留清理：按 kind 分桶，各自保留最新 N 份，删除更旧的。
 * pinned 快照**一律豁免**（用户显式保留的回滚点不得被自动淘汰）。
 * 返回被删除的快照 id 列表。
 */
export declare function pruneConfigSnapshots(dir: string, opts?: ConfigSnapshotPruneOptions): Promise<string[]>;
export interface RestoreConfigSnapshotOptions {
    dir: string;
    id: string;
    adapters: readonly ConfigAdapter[];
    ctx: HostContext;
    /**
     * 分区应用顺序（缺省 = adapters 传入顺序）。宿主应传入与导入管线一致的顺序
     * （副作用大的 patch/安装最后），避免半途失败留下不一致的中间态。
     */
    applyOrder?: readonly SectionId[];
    /** 只回放这些分区（缺省 = 快照内的全部分区） */
    only?: readonly SectionId[];
    msg?: MsgFunc;
    /** 逐项进度回调（UI 进度条） */
    onItem?: (info: {
        index: number;
        total: number;
        detail: string;
    }) => void;
}
export interface ConfigSnapshotRestoreReport {
    ok: boolean;
    snapshotId: string;
    /** 成功应用的计划项 `${section}:${itemId}` */
    applied: string[];
    /** 跳过（Skip/Warning/MissingSecret 等非破坏性项） */
    skipped: string[];
    failed: {
        item: string;
        reason: string;
    }[];
    /** 校验不通过而整体跳过的分区 */
    invalidSections: {
        section: SectionId;
        reason: string;
    }[];
    needsRestart: boolean;
}
/**
 * 回放一个配置快照：对每个分区 validate → analyzeImport → applyItem。
 * 与导入/Profile 切换共用 adapter 管线，因此行为一致、无第二套写入逻辑。
 * 单项失败不拖垮其余（如实计入 failed），与 rollback.ts 的尽力语义一致。
 */
export declare function restoreConfigSnapshot(opts: RestoreConfigSnapshotOptions): Promise<ConfigSnapshotRestoreReport>;
/** 便捷：两个快照的分区指纹是否等价（供 UI「与当前一致」提示） */
export declare function snapshotsEquivalent(a: ConfigSnapshotMeta, b: ConfigSnapshotMeta): boolean;
/** 供调用方取翻译器（保持与 core 其他模块一致的导出面） */
export declare const configSnapshotMsgOf: typeof msgOf;
