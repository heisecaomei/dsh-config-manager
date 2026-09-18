export interface PatchedDependency {
    /** 依赖名（patchedDependencies 的键） */
    name: string;
    /** 声明的 patch 路径（相对 profile 目录，已去引号；原始写法保留） */
    path: string;
}
export interface ParsePatchedResult {
    declared: PatchedDependency[];
    /** 无法安全改写的形态（如单行 flow 映射）→ 调用方据此告警，绝不猜着改 */
    unsupported: string | null;
}
/** 解析 patchedDependencies 的声明（纯函数；不校验文件是否存在）。 */
export declare function parsePnpmPatchedDependencies(text: string): ParsePatchedResult;
export interface SanitizeResult {
    /** 清理后的文本（无需修改时与入参逐字节相同） */
    text: string;
    declared: PatchedDependency[];
    /** 被移除的条目（目标机没有对应 patch 文件） */
    dropped: PatchedDependency[];
    unsupported: string | null;
}
/**
 * 删除 patchedDependencies 中「目标机不存在对应 patch 文件」的条目。
 * @param available 判断某相对路径（相对 profile 目录）在**导入后**是否存在
 */
export declare function sanitizePnpmWorkspacePatches(text: string, available: (relPath: string) => boolean): SanitizeResult;
