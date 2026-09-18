/** 本地源插件 tarball 在 ZIP 内的存放目录（相对分区前缀之下，如 plugin-files/ 之下） */
export declare const LOCAL_PLUGIN_DIR = "local-plugins";
/** 单插件 tarball 体积上限（超过则跳过并告警，防异常巨大的插件撑爆备份） */
export declare const MAX_LOCAL_TARBALL_BYTES: number;
/** 依赖 spec 的来源类别 */
export type LocalPluginSourceKind = 'link' | 'file' | 'registry' | 'git' | 'other';
/**
 * 分类依赖 spec。
 * - `link:` → 'link'（本地目录）
 * - `file:` → 'file'（本地 tarball / 目录）
 * - `github:` / `gitlab:` / `bitbucket:` / `git+` / `http(s):` → 'git'
 * - 空 / `workspace:` / 版本区间（`^1.2.3`、`~1.2`、`1.2.3`、`latest`、`*`）→ 'registry'
 * - 其余 → 'other'
 */
export declare function classifyPluginSpec(spec: string | undefined): LocalPluginSourceKind;
/** 是否本地源（换机后必然不可达，需打包） */
export declare function isLocalPluginSpec(spec: string | undefined): boolean;
/**
 * 包名 → 归档内安全的文件名片段。
 * `@scope/name` → `@scope__name`（斜杠被替换，**结果绝不含 `/` 或 `\`**）。
 * 其余非法字符（路径分隔符、`:`、空白）一并折叠为 `-`。
 */
export declare function safePackageFileFragment(pkgName: string): string;
/** tarball 在归档内的相对路径（一律 `local-plugins/<fragment>.tgz`，pkgName 已脱离 version） */
export declare function tarballNameFor(pkgName: string, version: string): string;
/**
 * 本地 spec → 绝对路径。
 * - `link:D:/x` / `link:/abs/x` → 绝对路径原样（规范化分隔符）；
 * - `link:./x` / `link:../x` → 相对 profileDir 解析；
 * - `~` 开头 → 相对 homeDir 展开；
 * - 裸路径（无前缀，如 `./plugin`）→ 同样按相对 profileDir 处理。
 *
 * 平台无关：不读 `process.platform`，交给 `path.resolve` / `path.isAbsolute`。
 */
export declare function resolveLocalPluginPath(spec: string, opts: {
    homeDir: string;
    profileDir: string;
}): string;
/**
 * 把不可移植的本地 spec 重写成可移植形式。
 * 幂等：对已是 `file:` 前缀的输入再次调用不改变语义（前缀保留、路径部分原样）。
 */
export declare function rewriteLocalSpec(spec: string, opts: {
    tarballRel: string;
}): string;
/**
 * 判断一个 spec 是否已是「重写后的可移植形式」（`file:local-plugins/...`）。
 * 导入端据此避免二次重写。
 */
export declare function isPackedLocalSpec(spec: string | undefined): boolean;
/** 打包所需的插件最小信息（只依赖 core/types.ts 的 PluginInfo 子集，便于测试构造） */
export interface LocalPluginCandidate {
    name: string;
    version: string;
    spec?: string;
}
/** 命令执行结果（与 child_process 的 execFile 回调对齐；不 import node:child_process） */
export interface PackExecResult {
    stdout: string;
    stderr: string;
    code: number | null;
}
/** 命令执行器签名：`exec(file, args, opts)` → Promise */
export type PackExec = (file: string, args: string[], opts: {
    cwd: string;
    timeoutMs?: number;
}) => Promise<PackExecResult>;
export interface PackLocalPluginsOptions {
    plugins: readonly LocalPluginCandidate[];
    /** $DSH_HOME 绝对路径 */
    homeDir: string;
    /** profile 目录绝对路径（profiles/<name>） */
    profileDir: string;
    /** tarball 临时产物目录（调用方保证存在或由本函数创建） */
    packDir: string;
    /** 命令执行器（注入；生产传 npm pack 的 execFile 包装） */
    exec: PackExec;
    /** 读文件（注入，便于测试）——只在打包成功后调用 */
    readFile: (absPath: string) => Promise<Uint8Array>;
    /** 确保目录存在（注入） */
    mkdir: (absDir: string) => Promise<void>;
    /** 目标平台校验（可选；'win32' 时 npm 是 .cmd 垫片，调用方负责 exec 形态） */
    timeoutMs?: number;
    /** tarball 体积上限（缺省 MAX_LOCAL_TARBALL_BYTES） */
    maxTarballBytes?: number;
    /** 是否把 `npm pack` 的 stderr 作为告警捕获（缺省 true） */
    collectStderr?: boolean;
}
/** 单个本地插件的打包结果 */
export interface PackedLocalPlugin {
    packageName: string;
    version: string;
    /** 归档内相对路径（`local-plugins/<x>.tgz`，正斜杠） */
    relativePath: string;
    /** 重写后的 spec（`file:local-plugins/<x>.tgz`） */
    rewrittenSpec: string;
    data: Uint8Array;
}
export interface PackLocalPluginsResult {
    packed: PackedLocalPlugin[];
    /** packageName → 重写后的 spec */
    rewritten: Record<string, string>;
    /** 非致命告警（跳过原因等；调用方并入分区 warnings） */
    warnings: string[];
}
/**
 * 从 `npm pack --json` 的 stdout 解析出 tarball 文件名。
 * 兼容三种形态：
 *  1. `--json` 数组：`[{"filename":"x.tgz", ...}]` → 取 filename
 *  2. 旧版单对象：`{"filename":"x.tgz"}` → 取 filename
 *  3. 纯文本：末行非空即文件名（兜底）
 * 解析失败返回 null（调用方按文件名约定回退）。
 */
export declare function parsePackOutput(stdout: string, expectedPkg: string, version: string): string | null;
/**
 * 对全部本地源插件执行打包。
 *
 * 行为要点：
 *  - 只处理 `isLocalPluginSpec(spec)` 的插件；非本地源直接跳过（**不产生告警**，属正常）；
 *  - 每个插件独立 try/catch：任一步失败 → 该插件进 warnings，**其余继续**；
 *  - 目录不存在 / 非绝对可达 → 告警跳过（不抛错）；
 *  - 成功产出 `packed`（含字节）与 `rewritten` 映射。
 */
export declare function packLocalPlugins(opts: PackLocalPluginsOptions): Promise<PackLocalPluginsResult>;
/**
 * 判断 spec 是否是「裸本地路径」（无任何前缀，如 `./plugin`、`D:\dev\x`）。
 * 这类 spec 在 DSH profile 中不常见（pnpm 侧通常要求 `link:` / `file:` 前缀），
 * 但一旦出现，同样指向本机路径、换机后不可达。
 *
 * **当前无生产调用点**（`packLocalPlugins` 目前只处理带前缀的 spec）——这是**有意的**
 * 预留扩展点，不是死代码：保留它可让「无前缀裸路径」这一已识别的边界有明确表达，
 * 后续若要在 `packLocalPlugins` 中一并处理，直接复用即可。
 * （若哪天决定不支持该形态，请连同本注释与对应测试一起删除。）
 */
export declare function isBareLocalPath(spec: string | undefined): boolean;
