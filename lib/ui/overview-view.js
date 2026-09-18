/**
 * Overview 总览页纯渲染模型（2026-09 UX 重构）：框架无关，node 可测。
 *
 * 职责：把各只读 API 的响应（备份文件 / 快照 / 定时备份 / 同步状态 / 迁移历史 /
 * 恢复模式 / 活跃 run）映射为 UI 展示所需的纯数据——指标卡、健康状态、建议、
 * 最近活动。**非控制器**：不持有状态、不发起请求；OverviewPanel 只做装配
 * （渲染 + 交互状态 + 导航），把本模块纯函数输出绑定到 React 组件。
 *
 * 数据形状说明：输入全部是最小结构类型（结构兼容各 API 响应的字段子集），
 * null/undefined = 该数据源尚未加载或加载失败（UI 显示占位，不阻塞整页）。
 *
 * 安全（UI HARD RULES）：所有自由文本（history.summary）由上层在渲染前过
 * redact()；kind / result 均为枚举常量，无 secret 承载面；本模块不输出任何文案，
 * 只输出 i18n key 基名与纯数据（与 history-model.ts 同模式）。
 */
/**
 * 相对时间：now 与 at（ms）差值 → now/min/hour/day；超出 7 天或 at 无效 → null
 * （上层回退绝对日期）。
 */
export function relTime(now, at) {
    if (!Number.isFinite(at) || at <= 0 || now < at)
        return null;
    const diffMs = now - at;
    const MIN = 60_000;
    const HOUR = 60 * MIN;
    const DAY = 24 * HOUR;
    if (diffMs < MIN)
        return { unit: 'now', n: 0 };
    if (diffMs < HOUR)
        return { unit: 'min', n: Math.floor(diffMs / MIN) };
    if (diffMs < DAY)
        return { unit: 'hour', n: Math.floor(diffMs / HOUR) };
    if (diffMs < 7 * DAY)
        return { unit: 'day', n: Math.floor(diffMs / DAY) };
    return null;
}
/** ISO 字符串 → ms（无效返回 null）。 */
export function isoToMs(iso) {
    if (iso === undefined || iso === '')
        return null;
    const t = Date.parse(iso);
    return Number.isFinite(t) ? t : null;
}
/** 最近一次备份（mtime 最大者；空/未加载 → null）。 */
export function latestBackup(backups) {
    if (backups === null || backups.length === 0)
        return null;
    let best = backups[0];
    for (const b of backups)
        if (b.mtimeMs > best.mtimeMs)
            best = b;
    return best;
}
/** 最近一次快照（createdAt 最大者；空/未加载 → null）。 */
export function latestSnapshot(snapshots) {
    if (snapshots === null || snapshots.length === 0)
        return null;
    let best = snapshots[0];
    let bestMs = isoToMs(best.createdAt) ?? 0;
    for (const s of snapshots) {
        const ms = isoToMs(s.createdAt) ?? 0;
        if (ms > bestMs) {
            best = s;
            bestMs = ms;
        }
    }
    return best;
}
/**
 * 构建四张指标卡（备份文件 / 安全快照 / 定时备份 / 远程同步）。
 * 未加载的数据源 value='—' + metaKey=null；metaParams.time 是 ms 数字字符串，
 * 组件层用 relTime 渲染为相对时间文案。
 */
export function buildOverviewMetrics(inputs) {
    const { backups, snapshots, schedule, sync } = inputs;
    // 备份文件：数量 + 最近备份相对时间
    const lastBackupAt = latestBackup(backups)?.mtimeMs ?? null;
    const backupMetric = backups === null
        ? { key: 'backups', kind: 'count', value: '—', metaKey: null, metaParams: {}, metaTone: 'neutral' }
        : {
            key: 'backups',
            kind: 'count',
            value: String(backups.length),
            metaKey: lastBackupAt !== null ? 'meta.lastBackup' : 'meta.noBackup',
            metaParams: lastBackupAt !== null ? { time: String(lastBackupAt) } : {},
            metaTone: 'neutral',
        };
    // 快照：数量 + 最近快照相对时间
    const lastSnapshotMs = isoToMs(latestSnapshot(snapshots)?.createdAt);
    const snapshotMetric = snapshots === null
        ? { key: 'snapshots', kind: 'count', value: '—', metaKey: null, metaParams: {}, metaTone: 'neutral' }
        : {
            key: 'snapshots',
            kind: 'count',
            value: String(snapshots.length),
            metaKey: lastSnapshotMs !== null ? 'meta.lastBackup' : 'meta.noBackup',
            metaParams: lastSnapshotMs !== null ? { time: String(lastSnapshotMs) } : {},
            metaTone: 'neutral',
        };
    // 定时备份：开/关状态 + 上次运行（失败 → warn 附注）
    let scheduleMetric;
    if (schedule === null) {
        scheduleMetric = { key: 'schedule', kind: 'state', value: '', valueKey: undefined, metaKey: null, metaParams: {}, metaTone: 'neutral' };
    }
    else {
        const lastRunMs = isoToMs(schedule.lastRunAt);
        const failed = schedule.lastRunStatus === 'failed';
        scheduleMetric = {
            key: 'schedule',
            kind: 'state',
            value: '',
            valueKey: schedule.enabled ? 'state.on' : 'state.off',
            metaKey: !schedule.enabled
                ? 'meta.scheduleOff'
                : failed
                    ? 'meta.scheduleFail'
                    : lastRunMs !== null
                        ? 'meta.scheduleOn'
                        : 'meta.never',
            metaParams: lastRunMs !== null ? { time: String(lastRunMs) } : {},
            metaTone: schedule.enabled && failed ? 'warn' : 'neutral',
        };
    }
    // 远程同步：已配置/未配置状态 + 上次同步
    let syncMetric;
    if (sync === null) {
        syncMetric = { key: 'sync', kind: 'state', value: '', valueKey: undefined, metaKey: null, metaParams: {}, metaTone: 'neutral' };
    }
    else {
        const lastSyncMs = isoToMs(sync.lastSyncAt);
        syncMetric = {
            key: 'sync',
            kind: 'state',
            value: '',
            valueKey: sync.configured ? 'state.on' : 'state.off',
            metaKey: !sync.configured
                ? 'meta.syncOff'
                : lastSyncMs !== null
                    ? 'meta.syncOn'
                    : 'meta.never',
            metaParams: lastSyncMs !== null ? { time: String(lastSyncMs) } : {},
            metaTone: 'neutral',
        };
    }
    return [backupMetric, snapshotMetric, scheduleMetric, syncMetric];
}
/**
 * 配置健康判定（保守优先级）：
 * 1. SAFE MODE 激活（有未解决恢复事项）→ error（最高优先，需用户处理）；
 * 2. 已加载且备份与快照均为空 → warn「尚无任何备份」（新装机引导场景）；
 * 3. 定时备份开启但上次运行失败 → warn；
 * 4. 其余 → ok。
 * 数据未加载（null）不降级健康状态（避免加载闪红）。
 */
export function overviewHealth(inputs) {
    if (inputs.recoveryRequired === true) {
        return { kind: 'error', textKey: 'health.recovery' };
    }
    if (inputs.backups !== null && inputs.snapshots !== null
        && inputs.backups.length === 0 && inputs.snapshots.length === 0) {
        return { kind: 'warn', textKey: 'health.noBackup' };
    }
    if (inputs.schedule !== null && inputs.schedule.enabled && inputs.schedule.lastRunStatus === 'failed') {
        return { kind: 'warn', textKey: 'health.scheduleFailed' };
    }
    return { kind: 'ok', textKey: 'health.ok' };
}
/**
 * 建议：数据已加载且能力未启用时给出（最多两条，顺序固定：定时备份 → 远程同步）。
 * 已配置/已开启的能力不再提示；SAFE MODE 激活时不叠加建议（error 横幅已是更强信号）。
 */
export function overviewSuggestions(inputs) {
    if (inputs.recoveryRequired === true)
        return [];
    const out = [];
    if (inputs.schedule !== null && !inputs.schedule.enabled) {
        out.push({ id: 'schedule', textKey: 'suggest.schedule' });
    }
    if (inputs.sync !== null && !inputs.sync.configured) {
        out.push({ id: 'sync', textKey: 'suggest.sync' });
    }
    return out;
}
/* ---------------- 最近活动 ---------------- */
/** 已知迁移操作 kind（与 core/migration-history.ts MIGRATION_KINDS 对齐；仅用于 key 归一）。 */
const KNOWN_KINDS = new Set([
    'import', 'restore', 'rollback',
    'profile-switch', 'profile-delete', 'profile-rename', 'profile-save', 'profile-import',
    'sync-apply', 'autosync', 'recovery',
    'backup', 'snapshot-delete', 'snapshot-prune',
]);
/** 最近活动列表：按时间倒序取前 limit 条（kindKey 归一 + 徽章语义映射）。 */
export function overviewActivity(history, limit = 5) {
    if (history === null || history.length === 0)
        return [];
    const sorted = [...history].sort((a, b) => {
        const ma = isoToMs(a.at) ?? 0;
        const mb = isoToMs(b.at) ?? 0;
        return mb - ma;
    });
    return sorted.slice(0, limit).map((e) => ({
        at: e.at,
        badge: e.result === 'success' ? 'ok' : e.result === 'failed' ? 'error' : 'warn',
        kindKey: KNOWN_KINDS.has(e.kind) ? `overview.kind.${e.kind}` : 'overview.kind.other',
        summary: e.summary,
    }));
}
/** 空态判定：备份与快照均已加载且都为空 → 显示「开始保护你的配置」引导。 */
export function overviewEmptyState(inputs) {
    return inputs.backups !== null && inputs.snapshots !== null
        && inputs.backups.length === 0 && inputs.snapshots.length === 0;
}
//# sourceMappingURL=overview-view.js.map