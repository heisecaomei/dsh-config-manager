import type { MsgFunc } from './messages.ts';
import type { Manifest } from '../schema/types.ts';
import type { ConfigAdapter, EncryptionProvider, ExportOptions, ExportReport, HostContext, SecretScanner } from './types.ts';
/** m1：每导出一个分区前的进度回调信息（Host 侧 run 状态更新用；section = adapter id） */
export interface SectionProgress {
    section: string;
    /** 当前分区序号（1 起） */
    index: number;
    /** 选中分区总数 */
    total: number;
}
export interface ExporterOptions {
    ctx: HostContext;
    adapters: ConfigAdapter[];
    /** Secret 扫描器；缺省用字段名黑名单剥离（m4 可注入强化版） */
    scanner?: SecretScanner;
    /** 加密提供者（m4 用 node:crypto 实现）；includeSecrets 时必填；提供时备份标记 encrypted=true */
    encryption?: EncryptionProvider | null;
    /** 插件自身版本（manifest.exporter.version） */
    exporterVersion?: string;
    now?: () => Date;
    /** 消息翻译器（缺省 ctx.msg ?? zh） */
    msg?: MsgFunc;
    /** m1：每导出一个分区前调用（真实进度埋点；不传则无埋点） */
    onSection?: (info: SectionProgress) => void;
    /**
     * 插件数据目录（文件级 vault 位于 <vaultDataDir>/vault，缺省 <homeDir>/dsh-config-manager）。
     * includeSecrets=false 时导出会自动刷新 vault；宿主自定义 dataDir 时应注入实际值
     * （HostContext 不携带 dataDir，故经选项注入）。
     */
    vaultDataDir?: string;
}
/** 缺省 SecretScanner：递归黑名单字段剥离（字段名大小写不敏感；二进制/Uint8Array 原样跳过） */
export declare function defaultSecretScanner(): SecretScanner;
/**
 * 单文件扫描字节上限（1 MiB）。超大文件只扫描前 1 MiB：
 * 凭据通常出现在配置/脚本的头部；超过上限的剩余部分放弃扫描，避免单个巨型文件拖垮导出。
 */
export declare const FILE_SECTION_SCAN_MAX_BYTES: number;
/** 一次导出中所有文件类分区的累计扫描字节上限（16 MiB），防「成千上万小文件」拖慢导出 */
export declare const FILE_SECTION_SCAN_TOTAL_BUDGET_BYTES: number;
/** 每个分区最多告警的**不同文件**数（不是 hit 条数）；命中仍全量计入 redactedHits（报告统计通道），超出部分由一条汇总告警兜底，避免「真有凭据的文件被静默淹没」或「截断即静默丢失」 */
export declare const MAX_FILE_SECTION_WARNINGS_PER_SECTION = 5;
export declare class Exporter {
    private readonly ctx;
    private readonly adapters;
    private readonly scanner;
    private readonly encryption;
    private readonly exporterVersion;
    private readonly now;
    private readonly msg;
    private readonly onSection;
    private readonly vaultDataDir;
    constructor(opts: ExporterOptions);
    /**
     * 导出：收集 → 过滤 → checksum → manifest → ZIP。
     * 返回 zipPath（含文件名）、manifest、报告。
     */
    export(options: ExportOptions): Promise<{
        zipPath: string;
        manifest: Manifest;
        report: ExportReport;
    }>;
}
/** 供报告使用：导出器身份（避免与 manifest 常量重复维护） */
export declare const EXPORTER_INFO: {
    name: string;
};
