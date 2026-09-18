import type { PackLocalPluginsResult } from '../core/local-plugin-pack.ts';
import type { MsgFunc } from '../core/messages.ts';
import type { PluginEntry, PluginsSection } from '../schema/types.ts';
import type { ApplyResult, ConfigAdapter, ExportOptions, ExportSection, HostContext, ImportContext, PlanItem, ValidationResult } from '../core/types.ts';
export declare const USER_PATCH_FILE = "cordis.patch.yml";
/**
 * 本地源插件打包钩子（由宿主注入，见 src/index.ts createAdapters）。
 * 返回打包结果（含字节与重写后的 spec）；不注入 = 不做本地源打包（保持旧行为）。
 */
export type LocalPluginPackHook = (plugins: PluginEntry[], ctx: HostContext) => Promise<PackLocalPluginsResult>;
/** 本地插件 tarball 解包到 homeDir 内的固定缓存目录（相对 $DSH_HOME）。 */
export declare const LOCAL_TARBALL_CACHE_REL = "dsh-config-manager/local-plugins";
/** 归档内相对路径 → 缓存目录下的安全文件名（拒绝任何路径穿越）。 */
export declare function localTarballCacheName(relativePath: string): string;
/** profile 目录相对 $DSH_HOME 的路径（patches/ 与 pnpm-workspace.yaml 都挂在这里）。 */
export declare const PNPM_PROFILE_DIR: (profile: string | undefined) => string;
/** pnpm-workspace.yaml 相对 $DSH_HOME 的路径（plugins 分区内按「插件安装配置」管理）。 */
export declare const PNPM_WORKSPACE_REL: (profile: string | undefined) => string;
/** 单个 patch 文件随备份迁移的体积上限（issue #35；patch 是纯文本，超过说明放错了东西）。 */
export declare const MAX_PATCH_FILE_BYTES: number;
export declare class PluginsAdapter implements ConfigAdapter<PluginsSection> {
    readonly id: 'plugins';
    readonly displayName = "Plugins";
    readonly defaultIncluded = true;
    readonly portability: 'portable';
    /** 插件自身包名：导出 plugins 分区时不列自己（避免备份里出现「当前正在生成备份的插件」的自引用条目） */
    private readonly selfName;
    /** T1：本地源（link:/file:）插件打包钩子；未注入 = 不打包（保持改造前行为） */
    private readonly localPack;
    constructor(selfName?: string, localPack?: LocalPluginPackHook);
    export(ctx: HostContext, _options: ExportOptions): Promise<ExportSection<PluginsSection>>;
    /**
     * 导入后目标机**可能**存在的 patch 文件集合（相对 profile 目录）——issue #35。
     * = 备份携带的 patchFiles ∪ 目标机本来就有的文件。只用于判定「声明能否被满足」，
     * 不做任何写入（写入在 applyItem 内、且先于 pnpm-workspace.yaml）。
     */
    private patchAvailability;
    analyzeImport(data: PluginsSection, ctx: ImportContext): Promise<PlanItem[]>;
    applyItem(item: PlanItem, ctx: ImportContext): Promise<ApplyResult>;
    validate(data: PluginsSection, msg?: MsgFunc): Promise<ValidationResult>;
}
