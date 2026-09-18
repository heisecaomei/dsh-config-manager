import { parsePackOutput } from './local-plugin-pack.ts';
import type { PackExec, PackLocalPluginsResult } from './local-plugin-pack.ts';
import type { HostContext } from './types.ts';
/**
 * 本地源插件打包钩子签名。
 *
 * 刻意在 core 内**重新声明**该签名（而非从 adapters 反向 import）：架构边界测试
 * （tests/architecture-boundaries.test.ts F7）规定 core 层只允许依赖
 * node 内置 / core 内部 / schema / utils / security —— core → adapters 是违规方向。
 * adapters 侧的 `LocalPluginPackHook` 与这是**结构等价**的，故可直接互赋（TS 结构化类型）。
 * 注意：这里 host ctx 参数只需 HostContext，无需 adapters 的任何类型。
 */
export type LocalPluginPackHook = (plugins: readonly {
    name: string;
    version: string;
    spec?: string;
}[], ctx: Pick<HostContext, 'profile'>) => Promise<PackLocalPluginsResult>;
export interface LocalPluginPackHookOptions {
    /** $DSH_HOME 绝对路径 */
    homeDir: string;
    /** 插件数据目录（临时打包目录建在其下，保证与既有目录生命周期一致） */
    dataDir: string;
    /** 覆盖 exec（测试注入） */
    exec?: PackExec;
}
/**
 * 构造注入给 `PluginsAdapter` 的打包钩子。
 *
 * 临时目录建在 `<dataDir>/tmp/`（与既有 tmp 语义一致），构造时不清扫、用完即删：
 * 单次导出内建一个 `<dataDir>/tmp/local-pack-<random>` 目录，导出结束（无论成败）删除，
 * 避免 tarball 残留在用户磁盘上。
 */
export declare function createLocalPluginPackHook(opts: LocalPluginPackHookOptions): LocalPluginPackHook;
/** 供其他模块复用（避免重复实现 npm 输出解析） */
export { parsePackOutput };
