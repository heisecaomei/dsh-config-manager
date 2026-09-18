/** 三处被救援模式改写/备份的文件（相对 homeDir 的 posix 路径）。 */
export interface RescuePaths {
    profilePatch: string;
    homePatch: string;
    profilePackageJson: string;
}
/** 三处文件的 homeDir 相对 posix 路径（profile 名按字面拼接，不做清洗）。 */
export declare function rescuePaths(profile: string): RescuePaths;
/**
 * homeDir 归一化（指纹的输入键）。
 *
 * 为什么必须归一化：指纹原先直接哈希调用方传入的**原始字符串**，同一目录换个写法
 * （`C:/x/.dsh` vs `C:\x\.dsh`，或带尾分隔符 / `.` / `..`）就会算出不同指纹，于是
 * `exitRescueMode` 把**自己的**状态判成 stale 并拒绝还原——一个文件都不动，用户只能
 * 手改文件。从插件 UI 进出时两次都原样传 `host.homeDir` 所以看不出来；从 CLI / 脚本
 * 手动进出（各自拼路径）就会踩到。
 *
 * 规则：先 resolve 成绝对规范路径（消掉分隔符混用、`.` / `..`、尾分隔符），
 * win32 下再折叠大小写（该平台路径大小写不敏感）。
 * `platform` 可注入，使 win32 语义在非 win32 的 CI 上也能被验证。
 */
export declare function normalizeHomeDir(homeDir: string, platform?: NodeJS.Platform): string;
/** homeDir|profile 的 sha256 指纹（换机器/重建 home 后用于自动降级失效）。 */
export declare function homeFingerprint(homeDir: string, profile: string): string;
/** bundle 可解析性探测（由宿主注入，core 不做模块解析）。返回 true=可解析。 */
export type BundleResolver = (name: string) => Promise<boolean> | boolean;
export interface SafeBundlesResult {
    kept: string[];
    pruned: {
        name: string;
        reason: string;
    }[];
}
/**
 * 过滤 dsh.profile.bundles：逐个用 resolve() 探测，不可解析的剔除。
 * - 非字符串条目 → pruned，reason='non-string'
 * - resolve 返回 false 或抛错 → pruned，reason='unresolved'
 * - 非数组/缺失 → kept=[], pruned=[], 且 inputWasArray=false
 * 纯函数（async），零 IO。只有严格 `true` 视为可解析（保守：undefined/其他返回值一律剔除）。
 */
export declare function computeSafeBundles(bundles: unknown, resolve: BundleResolver): Promise<SafeBundlesResult & {
    inputWasArray: boolean;
}>;
/** 救援模式下必须保留的 bundle 前缀（DSH 核心；剪掉它们 DSH 自身都起不来）。 */
export declare const RESCUE_KEEP_BUNDLE_PREFIXES: readonly string[];
/**
 * 把「可解析的 bundle 清单」进一步收窄到**救援必需项**：DSH 核心（默认 `@deepseek-ai/*`）
 * 与救援插件自身；其余用户 bundle 一律剔除，reason='rescue-disabled'。
 *
 * 为什么需要它：只中和 patch 层 + 剪掉「不可解析」的 bundle，治的是「patch/插件配置把启动
 * 搞挂了」。bundle 只要能解析就会照旧挂载，所以「插件代码自己把 DSH 搞挂」这一类根本救不了。
 * 收窄 bundle 才是「临时禁用除本插件外的全部用户插件」的实现（退出仍按备份逐字节还原）。
 * 纯函数，零 IO。
 */
export declare function restrictToRescueBundles(kept: readonly string[], selfPackageName: string, keepPrefixes?: readonly string[]): SafeBundlesResult;
export interface RescueState {
    active: true;
    enteredAt: string;
    profile: string;
    /** homeDir+profile 的指纹（换机器/重建 home 后用于自动降级失效） */
    homeFingerprint: string;
    /**
     * 备份文件绝对路径；null = 原件不存在、未产生备份。
     * profilePatch 例外：类型为 string，原件不存在时取 ''（配合 profilePatchWasAbsent=true 判读）。
     */
    backup: {
        profilePatch: string;
        homePatch: string | null;
        profilePackageJson: string | null;
    };
    prunedBundles: {
        name: string;
        reason: string;
    }[];
    /** 进入时 profile patch 是否原本不存在（退出时需删除而非还原） */
    profilePatchWasAbsent: boolean;
}
export type RescueEnterResult = {
    ok: true;
    state: RescueState;
} | {
    ok: false;
    code: 'already-active' | 'backup-failed' | 'package-json-invalid' | 'write-failed';
    message: string;
};
export type RescueExitResult = {
    ok: true;
    restored: string[];
} | {
    ok: false;
    code: 'not-active' | 'backup-missing' | 'restore-failed';
    message: string;
};
export interface RescueStatus {
    active: boolean;
    /** 状态存在但 homeFingerprint 不匹配 → 已自动降级，不激活 */
    stale: boolean;
    state: RescueState | null;
}
/**
 * 救援插件自身的挂载描述。
 * - `packageName` 与 profile package.json 的 `dsh.profile.bundles` 条目比对：
 *   命中 → 本插件由 bundle 层挂载，patch 层不得再插入同 id 行（否则 loader 报重复 id）。
 * - `row` 仅在包不在 bundles 时写入（手工 patch 层挂载的场景）。
 */
export interface RescueSelfMount {
    packageName: string;
    row: {
        id: string;
        name: string;
    };
}
export interface RescueEnterOptions {
    homeDir: string;
    profile: string;
    /** 救援插件自身的挂载描述（宿主传入；决定最小 patch 是否需要显式插入本插件行）。 */
    rescueMount: RescueSelfMount;
    /** 是否同时把 home patch 置空（写 '[]\n'）。缺省 true。 */
    neutralizeHomePatch?: boolean;
    /** bundle 解析器；缺省 = 不裁剪任何 bundle（保守）。 */
    resolveBundle?: BundleResolver;
    /**
     * 是否连同 bundle 一起收窄（缺省 false = 只剪「不可解析」的）。
     * true → 在可解析的基础上再保留 DSH 核心（keepBundlePrefixes）与救援插件自身，
     * 其余用户 bundle 全部剔除——这才是「禁用其它插件」，见 restrictToRescueBundles。
     */
    disableUserBundles?: boolean;
    /** disableUserBundles=true 时的保留前缀（缺省 RESCUE_KEEP_BUNDLE_PREFIXES） */
    keepBundlePrefixes?: readonly string[];
    /** 备份目录（缺省 <homeDir>/dsh-config-manager/transactions/rescue-backups） */
    backupDir?: string;
    now?: () => Date;
}
/** 进入救援模式：备份三处文件 → 裁剪 bundles → 写最小 profile patch → 可能置空 home patch → 写状态文件。 */
export declare function enterRescueMode(opts: RescueEnterOptions): Promise<RescueEnterResult>;
/** 退出救援模式：先校验全部备份存在，再逐个还原；状态文件删除。 */
export declare function exitRescueMode(opts: {
    homeDir: string;
    backupDir?: string;
}): Promise<RescueExitResult>;
/** 读状态；指纹不匹配时返回 { active:false, stale:true, state }。损坏/缺失 → { active:false, stale:false, state:null }。 */
export declare function rescueModeStatus(opts: {
    homeDir: string;
    profile: string;
    backupDir?: string;
}): Promise<RescueStatus>;
