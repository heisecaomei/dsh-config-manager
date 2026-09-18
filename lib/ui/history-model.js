/** 结果徽章语义（Badge kind 四态中的三态；skipped 归 warn）。 */
export function resultBadgeKind(result) {
    if (result === 'success')
        return 'ok';
    if (result === 'failed')
        return 'error';
    return 'warn'; // skipped
}
export function kindLabelKey(kind) {
    return `history.kind.${kind}`;
}
/** 全量 kind 枚举（UI 过滤下拉用；顺序 = §5 清单顺序）。 */
export const HISTORY_KIND_OPTIONS = [
    'import', 'restore', 'rollback',
    'profile-switch', 'profile-delete', 'profile-rename', 'profile-save', 'profile-import',
    'sync-apply', 'autosync', 'recovery',
    'backup', 'snapshot-delete', 'snapshot-prune',
];
/** 结果过滤选项。 */
export const HISTORY_RESULT_OPTIONS = ['success', 'failed', 'skipped'];
/** 把 UI 过滤模型转为后端 query 参数（kind/recent 转 kinds/recent 语义）。 */
export function filterToQuery(f) {
    const q = {};
    if (f.kind !== undefined)
        q['kind'] = f.kind;
    if (f.result !== undefined)
        q['result'] = f.result;
    return q;
}
/**
 * 客户端侧 kind/result 过滤（与后端 query 的关系）：
 * `filterToQuery` 描述的是**后端** `/history?kind=…&result=…` 的查询契约；HistoryPanel 目前
 * 一次性拉取全量条目（`historyApi.list()` 不带参数），因此分类筛选改由本纯函数在前端收敛。
 * 两者语义一致（kind / result 各自为空即不约束，同时给出时取交集），后端 query 保持可用，
 * 后续若改为服务端过滤可无缝切回 `filterToQuery`。
 *
 * 规则：`undefined` 或 `''` 视为「不过滤」；保持输入顺序（不做排序）。
 */
export function filterByKindResult(entries, kind, result) {
    // 归一为 string 比较：运行时 select 的 value 可能是 ''（空 = 全部），类型上不会出现但需兜底
    const wantKind = kind ?? '';
    const wantResult = result ?? '';
    if (wantKind === '' && wantResult === '')
        return entries;
    return entries.filter((e) => {
        if (wantKind !== '' && e.kind !== wantKind)
            return false;
        if (wantResult !== '' && e.result !== wantResult)
            return false;
        return true;
    });
}
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
export function collectHistoryKinds(entries, keepSelected) {
    const present = new Set();
    for (const e of entries)
        present.add(e.kind);
    if (keepSelected !== undefined)
        present.add(keepSelected);
    return HISTORY_KIND_OPTIONS.filter((k) => present.has(k));
}
/**
 * 归纳当前数据里**真实出现过**的 result（按 HISTORY_RESULT_OPTIONS 顺序去重）。
 * 与 collectHistoryKinds 同语义（「结果」下拉同样不列不存在的项，且保留当前选中值）。
 */
export function collectHistoryResults(entries, keepSelected) {
    const present = new Set();
    for (const e of entries)
        present.add(e.result);
    if (keepSelected !== undefined)
        present.add(keepSelected);
    return HISTORY_RESULT_OPTIONS.filter((r) => present.has(r));
}
export function summarize(entries) {
    let success = 0;
    let failed = 0;
    let skipped = 0;
    for (const e of entries) {
        if (e.result === 'success')
            success += 1;
        else if (e.result === 'failed')
            failed += 1;
        else
            skipped += 1;
    }
    return { total: entries.length, success, failed, skipped };
}
/**
 * 按 kind 分组（保持 HISTORY_KIND_OPTIONS 顺序），组内按 at 时间倒序。
 * 空组不渲染。纯函数，无 IO。
 */
export function groupByKind(entries) {
    const byKind = new Map();
    for (const e of entries) {
        const list = byKind.get(e.kind);
        if (list === undefined)
            byKind.set(e.kind, [e]);
        else
            list.push(e);
    }
    const groups = [];
    for (const kind of HISTORY_KIND_OPTIONS) {
        const list = byKind.get(kind);
        if (list === undefined)
            continue;
        list.sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0));
        groups.push({ kind, kindLabelKey: kindLabelKey(kind), count: list.length, entries: list });
    }
    return groups;
}
/**
 * 最近 N 条过滤（0 = 全部）。按 at 时间倒序取前 N。
 */
export function applyRecent(entries, recent) {
    if (recent <= 0)
        return entries;
    const sorted = [...entries].sort((a, b) => (a.at < b.at ? 1 : a.at > b.at ? -1 : 0));
    return sorted.slice(0, recent);
}
/** 客户端侧文本子串过滤（补充后端过滤；按 summary/error/kind 匹配，大小写不敏感）。 */
export function filterByText(entries, query) {
    const q = query.trim().toLowerCase();
    if (q === '')
        return entries;
    return entries.filter((e) => e.kind.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        (e.error ?? '').toLowerCase().includes(q) ||
        e.sections.some((s) => s.toLowerCase().includes(q)));
}
/** 空态判定。 */
export function isEmpty(entries) {
    return entries.length === 0;
}
//# sourceMappingURL=history-model.js.map