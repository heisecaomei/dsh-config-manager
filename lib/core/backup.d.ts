import type { SectionId } from '../schema/types.ts';
import type { ConfigAdapter, HostContext, ImportPlan, Snapshot, SnapshotStatus, SnapshotStore } from './types.ts';
/**
 * plugins 分区中「profile 内文件」的 ref 前缀（issue #35）：`patchFile:<相对 profile 目录的路径>`。
 * 前缀的存在是为了与 patch **行** id（同样落在 plugins 分区的 ref 空间）区分开——
 * 行 id 是任意字符串，无法靠形状判断它是不是一个路径。
 */
export declare const PLUGIN_PATCH_REF_PREFIX = "patchFile:";
/** 解析文件类目标的绝对路径（引擎通用快照与回滚共用） */
export declare function resolveFileTarget(ctx: HostContext, adapter: SectionId, ref: string): string;
/**
 * 文件类目标的 home-relative 相对路径（P2-B，Phase 8）。
 * 供导入逐项指纹（analyzer 经 HostContext.fs.readFile(read rel) 读文件算 sha256）
 * 与 journal step.ref 的 posix 规范化。
 *
 * issue #35：`plugins` 分区的两个文件类 ref（`pnpm-workspace.yaml` 与
 * `patchFile:<profile 相对路径>`）不落在 FILE_BASES 的静态基准上，必须显式给 profile ——
 * 否则产出的是**不存在的** home 相对路径（如 `patchFile:patches/a.patch`），
 * 指纹恒为 null，crash 后 reconcile 无法证明该项是否已应用（保守但可避免的精度损失）。
 */
export declare function resolveFileTargetRel(adapter: SectionId, ref: string, profile?: string): string;
export interface CreateSnapshotOptions {
    ctx: HostContext;
    plan: ImportPlan;
    sourceZip: string;
    store: SnapshotStore;
    adapters: ConfigAdapter[];
    /** Phase 4：operation-bound binding（journal.operationId / environmentFingerprint / ownerInstanceId / operationType） */
    operationId?: string;
    operationType?: string;
    environmentFingerprint?: string;
    ownerInstanceId?: string;
}
/**
 * 生成并落盘快照：只覆盖将被写入的目标。
 * 文件字节经 blobs Map 交给 store.save（SnapshotEntry 契约不含二进制）。
 */
export declare function createSnapshot(opts: CreateSnapshotOptions): Promise<Snapshot>;
/**
 * m-retention：保留策略的**结构形状**（故意在 core 内声明，而非 import sync/retention-policy.ts）。
 *
 * 为什么不用 sync 的类型：架构边界测试（tests/architecture-boundaries.test.ts）硬性禁止
 * `core/ → sync/` 反向依赖——core 是与 DSH 解耦的领域层，只允许 node 内置 / core 内部 /
 * schema / utils / security。sync 侧 `RetentionPolicy` 与本接口结构一致，可直接赋值（结构化类型）。
 * 分层选别算法本体在 `src/sync/retention-policy.ts`（selectPruneCandidatesByPolicy），
 * 由宿主（入口层）经 `FileSnapshotStoreOptions.pruneSelector` 注入——core 只定义契约，不反向依赖。
 */
export interface RetentionPolicyLike {
    /** 最近保留份数 */
    keepLast: number;
    /** 每月保留份数（0 = 关闭） */
    keepMonthly: number;
    /** 每年保留份数（0 = 关闭） */
    keepYearly: number;
}
/** core 侧缺省保留策略：与既有 `SNAPSHOT_RETENTION_LIMIT`（最近 10 个）逐字等价。 */
export declare function defaultRetentionPolicyLike(): RetentionPolicyLike;
/** 快照保留上限：save 落盘后超过该数量则删除最旧快照目录 */
export declare const SNAPSHOT_RETENTION_LIMIT = 10;
/** 纯函数：返回应清理的最旧快照 id（按 createdAt 升序取超限部分；恰好 limit 个 → 空数组）。
 * 参数用最小结构类型，避免引入 restore.ts 的 SnapshotMeta 造成循环 import。 */
export declare function selectPruneCandidates(metas: ReadonlyArray<{
    id: string;
    createdAt: string;
}>, limit?: number): string[];
/**
 * 分层保留选择器契约（core 侧签名；实现由宿主注入，见 sync/retention-policy.ts）。
 * 入参 metas 已剔除 pinned / recovery 引用等豁免项（由 store.prune 完成）。
 */
export type PruneSelector = (metas: ReadonlyArray<{
    id: string;
    createdAt: string;
}>, policy: RetentionPolicyLike) => string[];
/**
 * core 内置的**兜底**选择器：只按 keepLast 取最旧超限部分（= 既有 FIFO 行为）。
 * 分层（keepMonthly/keepYearly）语义需宿主注入真正的 GFS 实现；未注入时分层字段被忽略，
 * 行为等价于改造前（安全侧：宁可少删，绝不因缺实现而多删）。
 */
export declare const fallbackPruneSelector: PruneSelector;
export interface FileSnapshotStoreOptions {
    /** 快照根目录（宿主决定，如 ~/.dsh/dsh-config-manager/snapshots） */
    dir: string;
    /**
     * Phase 4 F3：可恢复 / 未收敛 journal 引用的 snapshotId 集合提供者。
     * prune 必须豁免这些 snapshot（绝不可删被 recovery 引用的回滚点）。
     * 缺省 = 空集合（不豁免）。宿主注入 JournalStore.listReferencedSnapshotIds。
     */
    referencedSnapshotIds?: () => Promise<Set<string>>;
    /**
     * Phase 6：自动保留清理的迁移历史回调（best-effort）。
     * prune 删除后回调被清 snapshotId 列表；宿主据其写统一审计史（snapshot-prune kind）。
     * 缺省 = 不记录（不改变 prune 行为、不污染核心引擎）。
     */
    onPrune?: (removedIds: string[]) => void;
    /**
     * m-retention：快照保留策略提供者（GFS 分层；可配置）。
     * 缺省 = `SNAPSHOT_RETENTION_LIMIT`（= 既有的「保留最近 10 个」，行为不变）。
     * 每次 prune 时调用（宿主可从 backup-schedule.json 读取最新策略，用户改完即时生效）；
     * 抛错/返回非法值 → 回退缺省策略（绝不因策略读取失败而误删或崩溃）。
     */
    retentionPolicy?: () => RetentionPolicyLike | Promise<RetentionPolicyLike>;
    /**
     * m-retention：分层保留选择器（由宿主注入 sync/retention-policy.ts 的 GFS 实现）。
     * 未注入 → `fallbackPruneSelector`（只按 keepLast，等价既有 FIFO；分层字段被忽略 = 保守少删）。
     */
    pruneSelector?: PruneSelector;
}
/** 文件快照存储：<dir>/<id>/snapshot.json + <dir>/<id>/blobs/* */
export declare class FileSnapshotStore implements SnapshotStore {
    private readonly options;
    constructor(options: FileSnapshotStoreOptions);
    private snapshotDir;
    save(snapshot: Snapshot, blobs?: Map<string, Uint8Array>): Promise<string>;
    /** 保留清理：扫描快照根目录，超限时删除最旧快照目录（损坏/非快照目录跳过；目录缺失容错）。
   *  P1-⑧：置顶（pinned=true）的快照豁免自动清理——用户显式保留的导入前回滚点不得被
   *  自动淘汰，只能手动删除（deleteSnapshot）。
   *  Phase 4 F3：被 active/quarantine 未收敛 journal 引用的 snapshot（recovery 回滚点）
   *  必须豁免——引用提供者（referencedSnapshotIds）返回的 id 绝不自动清理。 */
    private prune;
    load(id: string): Promise<Snapshot>;
    readBlob(id: string, blobPath: string): Promise<Uint8Array>;
    /** 标记快照生命周期状态：重写 <dir>/<id>/snapshot.json（保留其余字段）。 */
    updateStatus(id: string, status: SnapshotStatus): Promise<void>;
}
/**
 * 破坏性内容 hash（稳定，不含 readiness/status）：entries + hostFileBackups + beforePlugins。
 * READY 发布与 status 更新不改变此 hash（B-P1-1 修复）。
 */
export declare function computeMetadataHash(snapshot: Snapshot): string;
export interface SnapshotVerifyResult {
    ok: boolean;
    reason?: string;
}
/**
 * 从磁盘重读并验证快照（F1）：id 合法 + snapshot.json 存在 + manifest 存在 + blob hashes 匹配 +
 * metadataHash 匹配 + 必要 blobs 存在 + 路径安全。不信任内存对象。
 */
export declare function verifySnapshot(snapshotsDir: string, id: string): Promise<SnapshotVerifyResult>;
