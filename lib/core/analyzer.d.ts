import { type ZipArchive, type ZipSafetyLimits } from '../utils/zip.ts';
import type { Manifest, SectionId } from '../schema/types.ts';
import type { MsgFunc } from './messages.ts';
import { type ConfigAdapter, type ExecutedItem, type HostContext, type ImportAnalysis, type ImportDecisions, type ImportPlan, type ImportResult, type SnapshotStore, type TransactionSnapshotContext } from './types.ts';
export interface AnalyzerOptions {
    ctx: HostContext;
    adapters: ConfigAdapter[];
    snapshotStore: SnapshotStore;
    limits?: ZipSafetyLimits;
    /** 依赖存在性检查器（缺省不检查；m5/宿主可注入 which 类实现） */
    dependencyChecker?: (command: string) => Promise<boolean>;
    /** m4 可注入强化版 ZIP 安全解析 */
    parseZipOverride?: (buf: Uint8Array, limits?: ZipSafetyLimits) => ZipArchive;
    /** 消息翻译器（缺省 ctx.msg ?? zh） */
    msg?: MsgFunc;
}
/** m1：每完成一个计划项的进度回调信息（Host 侧 run 状态更新用） */
export interface PlanItemProgress {
    adapter: SectionId;
    /** 已处理计划项序号（1 起，含 skip/warning 信息项） */
    index: number;
    /** 将实际执行的计划项总数（APPLY_ORDER 内各项合计） */
    total: number;
    /** 该项最终状态（ok/skipped/warning/failed） */
    status?: ExecutedItem['status'];
    /** 当前计划项 id（非敏感） */
    detail?: string;
}
export declare class Analyzer {
    private readonly ctx;
    private readonly adapters;
    private readonly snapshotStore;
    private readonly limits?;
    private readonly dependencyChecker?;
    private readonly parseZipFn;
    private readonly msg;
    /** 会话内 bundle 缓存（zipPath → 解析结果），避免重复解压 */
    private readonly bundleCache;
    constructor(opts: AnalyzerOptions);
    private loadBundle;
    private extractSections;
    private analyzeBundle;
    analyzeImport(zipPath: string): Promise<ImportAnalysis>;
    createImportPlan(zipPath: string, decisions: ImportDecisions): Promise<ImportPlan>;
    executeImportPlan(zipPath: string, plan: ImportPlan, opts?: {
        confirm?: boolean;
        secretInputs?: Record<string, string>;
        decryptedCredentials?: Map<string, string>;
        rollbackOnError?: boolean;
        /** m1：每完成一个计划项调用（真实进度埋点；不传则无埋点） */
        onItem?: (info: PlanItemProgress) => void;
        /** m1：每开始一个计划项调用（供 UI 显示「正在执行项 X」/ 判定跳过按钮；不传则无埋点） */
        onItemStart?: (info: {
            adapter: SectionId;
            index: number;
            total: number;
            detail: string;
        }) => void;
        /** 执行日志回调（逐计划项操作 + 子进程命令行；注入 ImportContext 供适配器调用；不传则无日志） */
        onLog?: (line: string) => void;
        /**
         * Phase 4 生产 journal↔snapshot 绑定（deferred 模式）。
         * 宿主经 runJournaled({ deferredSnapshot:true }) 的 ctx 注入；引擎在快照创建/首 mutation 时绑定，
         * 保证快照 durable+verified 且 journal 已知先于任何写。不传 = 无 journal 绑定（非生产 journaled 路径）。
         */
        snapshotBinding?: TransactionSnapshotContext;
    }): Promise<ImportResult>;
    /** 快照状态标记（M1）：成功→done / 失败回滚→rolled-back。元数据写失败只告警不抛错。 */
    private markSnapshotStatus;
    /**
     * 该计划项是否会产生真实 side effect（需 journal step 追踪）。
     * 排除无副作用的「信息/跳过/错误」项与未采用其导入内容的 Conflict ——
     * 这些不写目标，记录只会保守化 reconcile 而无收益。
     */
    private shouldJournalStep;
    /** 文件类且可指纹 → 返回 home-relative 目标路径（posix）；否则 null（不可指纹外部项）。
     *  profile 必须传入：plugins 分区的 pnpm-workspace.yaml / patch 文件位于
     *  `profiles/<profile>/` 下，缺了它算出的相对路径不存在 → 指纹恒 null（issue #35）。 */
    private static fileRelFor;
    /** 读目标文件算 sha256（home-relative；经 HostContext.fs 使测试 mock 可注入）。失败返回 null。 */
    private fileFp;
    private applyOne;
}
/**
 * G-06：执行 schema 迁移链并把迁移结果重新校验为合法 manifest。
 *
 * `migrateToCurrent` 此前在 `src/` 内零引用（迁移链有定义、有单测、从不执行）；
 * `loadBundle` 只用 isSupported 做判定就直接把旧文档当新格式使用。本函数是迁移链的
 * **真实接线点**：沿链迁移 → 重新校验结果是合法 manifest（不合法则抛明确错误，
 * 绝不把半迁移文档当合法 manifest 继续）→ 每个已应用步骤翻译成用户可见告警。
 *
 * 显式传入 from/target 使「链式迁移真的被执行」可被直接单测：当前
 * `MIN_SUPPORTED_SCHEMA_VERSION = CURRENT_SCHEMA_VERSION = 1`，`needsMigration` 恒假，
 * 因此该分支在真实导入中结构上不可达（loadBundle 仍按 needsMigration 调用本函数）。
 */
export declare function runSchemaMigration(doc: unknown, fromVersion: number, targetVersion: number, msg: MsgFunc): {
    manifest: Manifest;
    warnings: string[];
};
