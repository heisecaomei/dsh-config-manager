/**
 * BackupScheduler：宿主后台定时全量备份调度器（P0-3）。
 *
 * 与 AutoSyncScheduler（同步通道自动同步）并列的独立能力：按固定间隔把当前 DSH
 * 完整配置导出为全量备份 ZIP（复用 Exporter 引擎，走 exportsDir）。
 *
 * 生命周期：
 *  - start()：读 backup-schedule.json；enabled 时启动定时器；无条件执行一次
 *    「启动触发备份」（受 startupMinIntervalMs 阈值约束）。
 *  - stop()：清定时器、标记不再调度。
 *  - reload()：重新读配置并重排定时器（配置保存路由调用）。
 *  - runOnce()：立即执行一次全量备份（受 runs.register('backup-schedule') 防重）。
 *
 * 安全不变量（硬约束）：
 *  - 定时备份恒 includeSecrets=false 且不加密——加密密码仅内存且不能持久化，
 *    与自动同步恒不含 secret 同语义；要加密备份请走手动导出。
 *  - 出参只写非敏感摘要（文件名/大小/分区/计数），日志经 redact 兜底。
 *
 * 扩展点（供生态调度层 / 测试注入）：
 *  - 外部调度器（dsh-automation cron、任务看板）可直接调 runOnce() 触发备份，
 *    或复用 P0-1 的 config_backup 模型工具在 agent 会话内驱动。
 */
import type { Logger } from '../utils/logger.ts';
import type { MsgFunc } from '../core/messages.ts';
import type { RunRegistry } from '../core/run-registry.ts';
import type { ConfigAdapter, HostContext, SecretScanner } from '../core/types.ts';
import type { MutationLockPort } from '../utils/env-lock.ts';
import type { BackupScheduleConfig, BackupRunStatus } from './backup-schedule-config.ts';
import type { RetentionPolicy } from './retention-policy.ts';
export interface BackupRunResult {
    status: BackupRunStatus;
    zip?: string;
    sizeBytes?: number;
    sections?: string[];
    skipReason?: string;
    error?: string;
    consecutiveFailures: number;
}
export interface BackupSchedulerOptions {
    /** 同步状态目录（$DSH_HOME/dsh-config-manager/sync；配置存 backup-schedule.json） */
    syncDir: string;
    /** 导出 ZIP 落盘目录（$DSH_HOME/dsh-config-manager/exports） */
    exportsDir: string;
    host: HostContext;
    adapters: ConfigAdapter[];
    runs: RunRegistry;
    msg: MsgFunc;
    /** 插件版本（manifest.exporter.version） */
    exporterVersion?: string;
    /**
     * M1（G-09 接线）：secret 扫描器。必须与 HTTP 导出路由（makeRoutes）、Agent 模型工具
     * config_backup（registerModelTools）共用**同一个实例**（宿主 index.ts 注入的
     * createConfiguredSecretScanner 单一实例），否则三条全量导出路径的扫描档位漂移：
     * 文件类分区（skills/agentPresets/agentInstructions/pluginFiles/sessions/self）的凭据告警
     * 与 redactedHits 统计会不一致。定时备份是**无人值守**路径，用户不会自己发现静默漏扫。
     * 缺省 undefined → Exporter 落回 defaultSecretScanner()（无 scanText）→ 文件类分区不扫描
     * （旧行为；向后兼容既有调用方与测试）。
     */
    scanner?: SecretScanner;
    /** 时间源（测试注入） */
    now?: () => Date;
    /** 注入配置读写（测试可内存实现） */
    readConfig?: () => Promise<BackupScheduleConfig>;
    writeConfig?: (cfg: BackupScheduleConfig) => Promise<void>;
    /** 定时备份产物保留策略（GFS 分层；缺省 = 「保留最近 10 个」，与旧行为等价）。
     *  兼容路径：仍接受 `number`（= 旧 API），内部转成 `{keepLast: n, keepMonthly: 0, keepYearly: 0}`。 */
    retention?: RetentionPolicy | number;
    /** 注入计时器（测试用；缺省 setInterval/clearInterval） */
    setTimer?: (fn: () => void, ms: number) => ReturnType<typeof setTimeout>;
    clearTimer?: (timer: ReturnType<typeof setTimeout>) => void;
    /** 日志（缺省 host.log） */
    log?: Logger;
    /** Phase 2 跨进程环境锁端口（可选注入；缺省无锁环境） */
    mutationLock?: MutationLockPort;
    /** Phase 3 SAFE MODE：注入同步谓词（被挡 → backup skipped），供 runWithMutationLock isBlocked 用。 */
    isBlocked?: () => boolean;
    /**
     * Phase 6：迁移历史追加（best-effort）。定时备份完成后回调，供宿主统一审计史记录。
     * 缺省 = 不记录（不破坏既有调用方）。
     */
    appendHistoryFn?: (entry: {
        kind: 'backup';
        result: 'success' | 'failed' | 'skipped';
        sections: string[];
        source: 'backup-scheduler';
        summary: string;
        error?: string;
    }) => Promise<void>;
    /** Phase 3 recovery（可选注入）：backup export 包 intent journal（P0-A，可选 §20.3）。 */
    phase3Recovery?: {
        runExternalIntent(opts: {
            operationType: string;
            lockCtx: import('../utils/env-lock.ts').MutationLockContext;
            intent: {
                adapter: string;
                ref: string;
                kind: string;
            };
            fn: () => Promise<unknown>;
        }): Promise<{
            operationId: string;
            result: unknown;
        }>;
    };
}
export declare class BackupScheduler {
    private readonly syncDir;
    private readonly exportsDir;
    private readonly host;
    private readonly adapters;
    private readonly runs;
    private readonly msg;
    private readonly exporterVersion;
    private readonly scanner;
    private readonly now;
    private readonly readConfig;
    private readonly writeConfig;
    private readonly retention;
    private readonly setTimer;
    private readonly clearTimer;
    private readonly log;
    private readonly mutationLock;
    private readonly isBlocked;
    private readonly phase3Recovery;
    private readonly appendHistoryFn;
    private timer;
    private stopped;
    private running;
    constructor(opts: BackupSchedulerOptions);
    /** 启动：读配置 → enabled 时排定时器 → 执行一次启动触发备份。 */
    start(): void;
    /** 停止：清定时器、标记不再调度；正在执行的任务允许自然结束。 */
    stop(): void;
    /** 重新加载配置（配置保存后调用；重排定时器）。 */
    reload(): Promise<void>;
    private refreshTimer;
    /** 启动触发备份（受 startupMinIntervalMs 阈值约束）。 */
    private startupRun;
    /** 执行一次全量备份（防重：同一时刻至多一个备份任务）。 */
    runOnce(): Promise<BackupRunResult>;
    /** Phase 6：定时备份迁移历史（best-effort；失败仅日志，不阻断）。
     *  lockReason：被环境锁挡下时的分类（issue #31）——摘要据此给同源短文案，
     *  而不是把 'mutation-locked' 这个机器 token 原样写进用户可见的历史行。 */
    private appendHistory;
}
