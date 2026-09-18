import type { SectionId } from '../schema/types.ts';
/**
 * 默认离线备份分区（顺序 = 归档内写入顺序，保证产物可复现）。
 * 均属 GUI 侧 portable + 默认包含语义，且不含整文件秘密。
 */
export declare const DEFAULT_BACKUP_SECTIONS: readonly SectionId[];
/**
 * 需**显式选中**才收集的分区（deviceSpecific：文件内容不受控，可能含明文凭据）。
 * 与 GUI 侧 `pluginFiles.defaultIncluded = false` 严格对齐。
 */
export declare const OPT_IN_BACKUP_SECTIONS: readonly SectionId[];
/** 全部可离线收集的分区（默认 ∪ 显式选中） */
export declare const OFFLINE_BACKUP_SECTIONS: readonly SectionId[];
/**
 * 离线**无法**收集的分区（需要 DSH Service 门面读值/权威脱敏）。仅用于报告与参数校验，
 * 绝不写进归档：这些分区的权威形态是 GUI 导出（经 DSH `describe({redactSecrets:true})`
 * 逐字段脱敏 + 可选加密），离线启发式脱敏做不到同等强度。
 */
export declare const OFFLINE_UNAVAILABLE_SECTIONS: readonly SectionId[];
/**
 * 凭据类文件名黑名单（**整文件即秘密**，绝不进备份）。与 `security/vault.ts` 的
 * `DEFAULT_SENSITIVE_RELS` 同语义（此处独立声明，避免 CLI 传递依赖 `security/vault.ts`
 * 而拉入 FileSystemFacade 面）。
 */
export declare const SENSITIVE_FILE_BASENAMES: readonly string[];
/** 文件名是否为凭据类（大小写不敏感；按 basename 判定，防子目录绕过） */
export declare function isSensitiveFileName(relPath: string): boolean;
/** 归档内一个条目（name 为 ZIP 内 posix 相对路径） */
export interface BackupEntry {
    name: string;
    data: Uint8Array;
}
/** 单个分区的收集结果（报告用，无内容） */
export interface SectionCollection {
    sectionId: SectionId;
    label: string;
    /** 实际进归档的条目数 */
    entryCount: number;
    /** 因凭据黑名单 / 保留命名空间 / 非常规文件而排除的数量 */
    excludedCount: number;
    /** 该分区附带的显式风险提示（选中的话输出层必须打印） */
    risk?: string;
}
/** 收集结果（尚未写盘） */
export interface BackupCollection {
    entries: BackupEntry[];
    sections: SectionCollection[];
    warnings: string[];
    /** 实际有内容、需要在 manifest.sections 置 true 的分区 */
    included: SectionId[];
    /** 选中但无内容（未写入）的分区 id */
    empty: SectionId[];
}
/** `--sections` 取值校验：返回选中分区或可读错误（未知 id 一律拒绝并列出合法值） */
export declare function parseSectionsArg(raw: string): {
    ok: true;
    sections: SectionId[];
} | {
    ok: false;
    error: string;
};
/**
 * 收集一次离线备份的全部条目（纯收集，**不写盘**）。
 * `homeDir` 必须为绝对路径；`only` 为空 = 只收集默认分区（显式选中的 opt-in 分区才收集）。
 * 返回的 `entry.name` 一律为已过 `isPathSafe` 的 ZIP 内 posix 相对路径。
 */
export declare function collectBackupEntries(homeDir: string, only?: readonly SectionId[]): Promise<BackupCollection>;
/** 把收集结果归纳成 manifest.sections 布尔表（未收集的分区一律 false，绝不虚报） */
export declare function buildSectionFlags(included: readonly SectionId[]): Record<SectionId, boolean>;
