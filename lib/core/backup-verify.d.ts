/** 自检裁决（消费方据此决定退出码 / UI 文案；每个值语义互斥） */
export type BackupVerifyVerdict = 'OK' | 'MISSING' | 'CORRUPT' | 'UNSUPPORTED' | 'VERIFY_ERROR';
/** 单次备份自检结果（无敏感字段：不含任何文件内容或凭据） */
export interface BackupVerifyResult {
    /** 被检对象（调用方传入的路径原样回填，便于批量结果对照） */
    file: string;
    verdict: BackupVerifyVerdict;
    sizeBytes?: number;
    entryCount?: number;
    /** manifest.sections 中声明为 true 的分区（按 manifest 顺序） */
    sections?: string[];
    /** manifest.exportedAt（原样透传，不重新格式化） */
    exportedAt?: string;
    /** 致命问题（中文 / English 并列，CLI 直接打印） */
    errors: string[];
    /** 非致命提示（未纳入校验表的条目、声明分区缺条目等） */
    warnings: string[];
}
/**
 * 只读自检一个备份 ZIP（或整体加密容器 `.dca1`）。
 * 纯 IO 注入式实现：仅用 `node:fs/promises` + 本仓库零 DSH 依赖模块，CLI 离线可跑。
 * 永不抛错（除自检过程异常归一为 `VERIFY_ERROR`），调用方据 `verdict` 决定行为。
 */
export declare function verifyBackupZip(zipPath: string): Promise<BackupVerifyResult>;
