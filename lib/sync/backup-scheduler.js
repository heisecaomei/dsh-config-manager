import { runWithMutationLock, EnvironmentLockUnavailableError, LOCK_BLOCK_MESSAGE, LOCK_BLOCK_BRIEF } from '../utils/env-lock.js';
import { Exporter } from '../core/exporter.js';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';
import { readBackupSchedule, writeBackupSchedule, nextBackupDelayMs } from './backup-schedule-config.js';
import { shouldTriggerStartupRun } from './autosync-scheduler.js';
import { AUTO_BACKUP_PREFIX, pruneAutoBackupsByPolicy } from './backup-files.js';
import { DEFAULT_RETENTION_POLICY } from './retention-policy.js';
export class BackupScheduler {
    syncDir;
    exportsDir;
    host;
    adapters;
    runs;
    msg;
    exporterVersion;
    scanner;
    now;
    readConfig;
    writeConfig;
    retention;
    setTimer;
    clearTimer;
    log;
    mutationLock;
    isBlocked;
    phase3Recovery;
    appendHistoryFn;
    timer;
    stopped = false;
    running = false;
    constructor(opts) {
        this.syncDir = opts.syncDir;
        this.exportsDir = opts.exportsDir;
        this.host = opts.host;
        this.adapters = opts.adapters;
        this.runs = opts.runs;
        this.msg = opts.msg;
        this.exporterVersion = opts.exporterVersion ?? '0.1.0';
        this.scanner = opts.scanner;
        this.now = opts.now ?? (() => new Date());
        this.readConfig = opts.readConfig ?? (() => readBackupSchedule(this.syncDir));
        this.writeConfig = opts.writeConfig ?? ((cfg) => writeBackupSchedule(this.syncDir, cfg));
        // 兼容路径：number（旧 API）= keepLast，分层关闭 → 与既有行为逐字节等价
        this.retention = typeof opts.retention === 'number'
            ? { keepLast: opts.retention, keepMonthly: 0, keepYearly: 0 }
            : (opts.retention ?? DEFAULT_RETENTION_POLICY);
        this.setTimer = opts.setTimer ?? ((fn, ms) => setTimeout(fn, ms));
        this.clearTimer = opts.clearTimer ?? ((t) => clearTimeout(t));
        this.log = opts.log ?? this.host.log;
        this.mutationLock = opts.mutationLock;
        this.isBlocked = opts.isBlocked;
        this.phase3Recovery = opts.phase3Recovery;
        this.appendHistoryFn = opts.appendHistoryFn;
    }
    /** 启动：读配置 → enabled 时排定时器 → 执行一次启动触发备份。 */
    start() {
        if (this.stopped)
            return;
        this.refreshTimer();
        void this.startupRun();
    }
    /** 停止：清定时器、标记不再调度；正在执行的任务允许自然结束。 */
    stop() {
        this.stopped = true;
        if (this.timer !== undefined) {
            this.clearTimer(this.timer);
            this.timer = undefined;
        }
    }
    /** 重新加载配置（配置保存后调用；重排定时器）。 */
    async reload() {
        if (this.stopped)
            return;
        this.refreshTimer();
    }
    refreshTimer() {
        if (this.timer !== undefined) {
            this.clearTimer(this.timer);
            this.timer = undefined;
        }
        void this.readConfig().then((cfg) => {
            if (this.stopped || !cfg.enabled)
                return;
            // P0-⑤：固定间隔档返回 interval ms；custom（每周固定时刻）返回到下一个
            // 触发点的 delay（非法配置 → null 不排期，等待下次 reload/配置修正）。
            const delay = nextBackupDelayMs(cfg, this.now());
            if (delay === null) {
                this.log.warn('定时备份 custom 档缺少有效 customSchedule，暂不排期', { interval: cfg.interval });
                return;
            }
            this.timer = this.setTimer(() => {
                this.timer = undefined;
                if (this.stopped)
                    return;
                void this.runOnce()
                    .catch((err) => {
                    this.log.error('定时备份触发失败', { error: err instanceof Error ? err.message : String(err) });
                })
                    .then(() => {
                    // 本轮结束（成功 / 跳过 / 失败）后重新排定下一次；refreshTimer 重读配置，
                    // 期间若被关闭（enabled=false）则不再排期。
                    if (!this.stopped)
                        this.refreshTimer();
                });
            }, delay);
        }).catch(() => { });
    }
    /** 启动触发备份（受 startupMinIntervalMs 阈值约束）。 */
    async startupRun() {
        try {
            const cfg = await this.readConfig();
            if (!cfg.enabled)
                return;
            if (!shouldTriggerStartupRun(cfg.lastRunAt, cfg.startupMinIntervalMs, this.now().getTime())) {
                this.log.info('定时备份启动触发跳过：距上次运行未达阈值');
                return;
            }
            await this.runOnce();
        }
        catch (err) {
            this.log.error('启动触发备份失败', { error: err instanceof Error ? err.message : String(err) });
        }
    }
    /** 执行一次全量备份（防重：同一时刻至多一个备份任务）。 */
    async runOnce() {
        if (this.running) {
            return { status: 'skipped', skipReason: 'running', consecutiveFailures: 0 };
        }
        const cfg = await this.readConfig();
        if (!cfg.enabled) {
            return { status: 'skipped', skipReason: 'disabled', consecutiveFailures: cfg.consecutiveFailures };
        }
        this.running = true;
        let runId = null;
        try {
            const run = this.runs.register('backup-schedule');
            runId = run.runId;
        }
        catch {
            this.running = false;
            return { status: 'skipped', skipReason: 'conflict', consecutiveFailures: cfg.consecutiveFailures };
        }
        try {
            // Phase 2 锁：定时备份写入 exports 属 GLOBAL mutation（与 Sync push / 手动备份互斥）。
            // 无锁环境（测试）→ 不锁定直接执行；锁被占用 → 返回 failed（destructive 不执行）。
            const result = await runWithMutationLock(this.mutationLock, { op: 'backup-schedule', target: 'exports', isBlocked: this.isBlocked }, async (lockCtx) => {
                const doExport = async () => {
                    const exporter = new Exporter({
                        ctx: this.host,
                        adapters: this.adapters,
                        encryption: null, // 定时备份恒不加密：加密密码仅内存且不能持久化
                        exporterVersion: this.exporterVersion,
                        msg: this.msg,
                        // M1（G-09 接线）：与 HTTP 导出路由 / config_backup 同一个 scanner 实例。
                        // 缺省 undefined → Exporter 落回无 scanText 的默认扫描器（旧行为）。
                        scanner: this.scanner,
                    });
                    // 显式落 exportsDir（与 host 路由同构；Exporter 缺省 outPath 是相对文件名，不落目录）
                    // auto 前缀 = 定时备份产物标识：列表来源 Badge + cache-cleaner 豁免 + 保留策略清理依据
                    const outPath = join(this.exportsDir, `${AUTO_BACKUP_PREFIX}${dateStamp(this.now())}-${randomBytes(3).toString('hex')}.zip`);
                    const { report } = await exporter.export({
                        includeSecrets: false, // 恒不含 secret（与自动同步同语义）
                        outPath,
                    });
                    const backupResult = {
                        status: 'success',
                        zip: report.file.name,
                        sizeBytes: report.file.sizeBytes,
                        sections: report.included.map((s) => s.section),
                        consecutiveFailures: 0,
                    };
                    await this.writeConfig({
                        enabled: cfg.enabled,
                        interval: cfg.interval,
                        // P0-⑤：保留 custom 档的每周时刻（否则保存 custom 档后 runOnce 成功会把它丢掉）
                        ...(cfg.customSchedule !== undefined ? { customSchedule: cfg.customSchedule } : {}),
                        // m-retention：保留用户配置的 GFS 保留策略（同理，不能被运行结果覆盖丢失）
                        ...(cfg.retention !== undefined ? { retention: cfg.retention } : {}),
                        startupMinIntervalMs: cfg.startupMinIntervalMs,
                        consecutiveFailures: 0,
                        lastRunAt: this.now().toISOString(),
                        lastRunStatus: 'success',
                    });
                    this.log.info('定时备份完成', {
                        zip: backupResult.zip,
                        sizeBytes: backupResult.sizeBytes,
                        sections: backupResult.sections,
                    });
                    // 保留策略：按 GFS policy 选出应保留的 auto 前缀产物，其余删除（尽力而为，
                    // 失败仅记日志不阻断——下次成功备份时再清）。
                    // 生效策略优先级：持久化配置 policy（用户在 UI 改的） > 构造注入值（缺省 = 最近 10 个）。
                    try {
                        const effectiveRetention = cfg.retention ?? this.retention;
                        const removed = await pruneAutoBackupsByPolicy(this.exportsDir, effectiveRetention);
                        if (removed.length > 0) {
                            this.log.info('定时备份保留策略清理', { removed, retention: effectiveRetention });
                        }
                    }
                    catch (err) {
                        this.log.warn('定时备份保留策略清理失败', { error: err instanceof Error ? err.message : String(err) });
                    }
                    return backupResult;
                };
                // Phase 3 P0-A：backup export 记 intent journal（声明已接线，关闭 P1 gap）
                if (this.phase3Recovery !== undefined && lockCtx !== null) {
                    return (await this.phase3Recovery.runExternalIntent({
                        operationType: 'backup-schedule', lockCtx,
                        intent: { adapter: 'backup', ref: 'exports', kind: 'Backup' }, fn: doExport,
                    })).result;
                }
                return doExport();
            });
            await this.appendHistory(result);
            return result;
        }
        catch (err) {
            // issue #31：被挡时按分类说真话——**残留锁（持有者已确证死亡）不是「另一项任务进行中」**，
            // 且它重试/重启都不会自愈，必须显式回收。文案与 423 响应、autosync 日志同源
            // （LOCK_BLOCK_MESSAGE），避免同一句指引在多条路径上再次漂移（#27 只接了 autosync，
            // 本路径漏接 → 实测 9 天内 57 次静默跳过，用户无从知道要回收残留锁）。
            if (err instanceof EnvironmentLockUnavailableError) {
                if (err.reason === 'stale') {
                    this.log.warn(`定时备份跳过：${LOCK_BLOCK_MESSAGE.stale}`);
                }
                else {
                    this.log.info(`定时备份跳过：${LOCK_BLOCK_MESSAGE[err.reason]}`);
                }
                const skipped = { status: 'skipped', skipReason: 'mutation-locked', consecutiveFailures: cfg.consecutiveFailures };
                // skipReason 保持稳定的机器 token（客户端据此本地化）；历史摘要用同源**短**文案，
                // 不留裸 token（issue #31 ②：中文前缀 + 英文 token 的历史行）。
                await this.appendHistory(skipped, err.reason);
                return skipped;
            }
            const error = err instanceof Error ? err.message : String(err);
            const result = {
                status: 'failed', error, consecutiveFailures: cfg.consecutiveFailures + 1,
            };
            await this.writeConfig({
                ...cfg,
                lastRunAt: this.now().toISOString(),
                lastRunStatus: 'failed',
                consecutiveFailures: cfg.consecutiveFailures + 1,
                lastRunMessage: error,
            });
            this.log.warn(`定时备份失败（连续 ${cfg.consecutiveFailures + 1} 次）`, { error });
            await this.appendHistory(result);
            return result;
        }
        finally {
            this.running = false;
            if (runId !== null) {
                try {
                    this.runs.finish(runId, { kind: 'backup-schedule' });
                }
                catch {
                    /* 尽力而为 */
                }
            }
        }
    }
    /** Phase 6：定时备份迁移历史（best-effort；失败仅日志，不阻断）。
     *  lockReason：被环境锁挡下时的分类（issue #31）——摘要据此给同源短文案，
     *  而不是把 'mutation-locked' 这个机器 token 原样写进用户可见的历史行。 */
    async appendHistory(result, lockReason) {
        if (this.appendHistoryFn === undefined)
            return;
        try {
            await this.appendHistoryFn({
                kind: 'backup',
                result: result.status,
                sections: result.status === 'success' ? (result.sections ?? []) : [],
                source: 'backup-scheduler',
                summary: result.status === 'success'
                    ? `定时备份完成：${result.zip ?? ''}`
                    : result.status === 'skipped'
                        ? `定时备份跳过：${lockReason !== undefined ? LOCK_BLOCK_BRIEF[lockReason] : (result.skipReason ?? '')}`
                        : '定时备份失败',
                error: result.status === 'failed' ? (result.error ?? undefined) : undefined,
            });
        }
        catch (err) {
            this.log.warn('定时备份迁移历史写入失败（best-effort 忽略）', { error: err instanceof Error ? err.message : String(err) });
        }
    }
}
/** 导出文件时间戳（YYYYMMDD-HHmmss），与 host 路由 dateStamp 同构。 */
function dateStamp(d) {
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
//# sourceMappingURL=backup-scheduler.js.map