/**
 * Migration History 纯渲染模型（Phase 6，Step 7）：框架无关，node 可测。
 *
 * 职责：把 `MigrationHistoryEntry[]` + 过滤条件映射为 UI 展示所需的纯数据——
 * 结果徽章语义（ok/error/warn）、kind 分类标签、统计、过滤选项、空态判定。
 * **非控制器**：不持有状态、不发起请求；HistoryPanel 只做装配（渲染 + 交互状态），
 * 把本模块纯函数输出绑定到 React 组件。
 *
 * 安全（UI HARD RULES）：本模块绝不把 failed 显示为成功；所有自由文本（summary/error）
 * 由上层在渲染前过 redact()。kind / result / sections 均为枚举常量，无 secret 承载面。
 */
import type { MigrationKind, MigrationResult, StoredMigrationHistoryEntry } from '../core/migration-history.ts';
/** 结果徽章语义（Badge kind 四态中的三态；skipped 归 warn）。 */
export declare function resultBadgeKind(result: MigrationResult): 'ok' | 'error' | 'warn' | 'info';
/** kind 标签（本地化 key 基名；i18n 字典用 `history.kind.<kind>` 渲染）。 */
export type HistoryKindLabelKey = `history.kind.${MigrationKind}`;
export declare function kindLabelKey(kind: MigrationKind): HistoryKindLabelKey;
/** 全量 kind 枚举（UI 过滤下拉用；顺序 = §5 清单顺序）。 */
export declare const HISTORY_KIND_OPTIONS: readonly MigrationKind[];
/** 结果过滤选项。 */
export declare const HISTORY_RESULT_OPTIONS: readonly MigrationResult[];
/** 过滤模型（UI 状态；空 = 不过滤）。 */
export interface HistoryFilter {
    kind?: MigrationKind;
    result?: MigrationResult;
    /** 时间范围：最近 N 条（0 = 全部）。 */
    recent?: number;
    query: string;
}
/** 把 UI 过滤模型转为后端 query 参数（kind/recent 转 kinds/recent 语义）。 */
export declare function filterToQuery(f: HistoryFilter): Record<string, string | undefined>;
/**
 * 客户端侧 kind/result 过滤（与后端 query 的关系）：
 * `filterToQuery` 描述的是**后端** `/history?kind=…&result=…` 的查询契约；HistoryPanel 目前
 * 一次性拉取全量条目（`historyApi.list()` 不带参数），因此分类筛选改由本纯函数在前端收敛。
 * 两者语义一致（kind / result 各自为空即不约束，同时给出时取交集），后端 query 保持可用，
 * 后续若改为服务端过滤可无缝切回 `filterToQuery`。
 *
 * 规则：`undefined` 或 `''` 视为「不过滤」；保持输入顺序（不做排序）。
 */
export declare function filterByKindResult(entries: StoredMigrationHistoryEntry[], kind?: MigrationKind, result?: MigrationResult): StoredMigrationHistoryEntry[];
/**
 * 归纳当前数据里**真实出现过**的 kind（按 HISTORY_KIND_OPTIONS 顺序去重）。
 *
 * 用于过滤下拉：全量枚举 14 类中有大量分类（profile-delete/rename/import、snapshot-prune…）
 * 在本机历史里永远不会出现，把它们列进下拉只会让用户选出「永远为空」的结果。
 * 空数据返回空数组。
 *
 * @param keepSelected 当前选中值：即使数据里已不存在也保留在选项里（位置仍按
 *   HISTORY_KIND_OPTIONS 顺序）——否则用户会看到「下拉里没有自己刚选中的项」的怪状态。
 */
export declare function collectHistoryKinds(entries: StoredMigrationHistoryEntry[], keepSelected?: MigrationKind): MigrationKind[];
/**
 * 归纳当前数据里**真实出现过**的 result（按 HISTORY_RESULT_OPTIONS 顺序去重）。
 * 与 collectHistoryKinds 同语义（「结果」下拉同样不列不存在的项，且保留当前选中值）。
 */
export declare function collectHistoryResults(entries: StoredMigrationHistoryEntry[], keepSelected?: MigrationResult): MigrationResult[];
/** 按 kind + result 分组的渲染模型（卡片列表直接消费）。 */
export interface HistoryGroup {
    kind: MigrationKind;
    kindLabelKey: HistoryKindLabelKey;
    count: number;
    /** 已按时间倒序（新→旧）。 */
    entries: StoredMigrationHistoryEntry[];
}
/** 统计摘要（纯函数；供统计徽章行）。 */
export interface HistorySummary {
    total: number;
    success: number;
    failed: number;
    skipped: number;
}
export declare function summarize(entries: StoredMigrationHistoryEntry[]): HistorySummary;
/**
 * 按 kind 分组（保持 HISTORY_KIND_OPTIONS 顺序），组内按 at 时间倒序。
 * 空组不渲染。纯函数，无 IO。
 */
export declare function groupByKind(entries: StoredMigrationHistoryEntry[]): HistoryGroup[];
/**
 * 最近 N 条过滤（0 = 全部）。按 at 时间倒序取前 N。
 */
export declare function applyRecent(entries: StoredMigrationHistoryEntry[], recent: number): StoredMigrationHistoryEntry[];
/** 客户端侧文本子串过滤（补充后端过滤；按 summary/error/kind 匹配，大小写不敏感）。 */
export declare function filterByText(entries: StoredMigrationHistoryEntry[], query: string): StoredMigrationHistoryEntry[];
/** 空态判定。 */
export declare function isEmpty(entries: StoredMigrationHistoryEntry[]): boolean;
