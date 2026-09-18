/** 监听句柄（fs.watch 返回值的结构子集，便于测试伪造） */
export interface WatchHandle {
    close(): void;
}
/** 监听工厂（真实实现注入 fs.watch） */
export type WatchFactory = (dir: string, onEvent: (eventType: string, filename: string | null) => void) => WatchHandle;
/** 定时器注入（测试用假实现驱动时序） */
export interface TimerApi {
    setTimeout(fn: () => void, ms: number): unknown;
    clearTimeout(handle: unknown): void;
}
export interface WatcherEvent {
    /** 事件发生的目录（绝对路径） */
    dir: string;
    /** 文件名（fs.watch 可能给 null） */
    filename: string;
}
export interface DebouncedWatcherOptions {
    /** 要监听的目录（绝对路径；不存在的目录由 watchFactory 抛错，本类记 onError 后跳过） */
    dirs: readonly string[];
    /** 防抖窗口（毫秒） */
    debounceMs: number;
    watchFactory: WatchFactory;
    /** 防抖到期后回调（事件已合并；同一目录同一文件去重） */
    onFlush: (events: WatcherEvent[]) => void;
    /** 监听失败 / 运行时 error 回调（不抛；默认静默） */
    onError?: (dir: string, error: unknown) => void;
    timers?: TimerApi;
}
/** 临时文件 / 编辑器残留：默认忽略，避免「保存一次触发多轮快照」 */
export declare function isIgnorableFileName(name: string): boolean;
/**
 * 防抖监听器：把高频文件事件合并成一次 `onFlush`。
 *
 * 生命周期：`start()` 建立监听；`stop()` 关闭全部监听并清掉待发定时器；
 * `start()` 可在 `stop()` 后重新调用（幂等重建——宿主改配置后需要重建监听集）。
 */
export declare class DebouncedWatcher {
    private readonly options;
    private readonly timers;
    private handles;
    private timer;
    private pending;
    private suppressCount;
    private running;
    constructor(options: DebouncedWatcherOptions);
    get isRunning(): boolean;
    /** 当前抑制深度（>0 表示正在执行会自写文件的操作） */
    get suppressDepth(): number;
    /** 待发事件数（测试与诊断用） */
    get pendingCount(): number;
    start(): void;
    stop(): void;
    /**
     * 进入抑制窗口：期间产生的文件事件**直接丢弃**。
     * 调用方必须在 finally 里 `endSuppress()`，否则自动快照会永久停摆。
     */
    beginSuppress(): void;
    /**
     * 退出抑制窗口：深度归零时**顺带清空待发事件**——那些事件正是被抑制的写操作
     * 自己产生的，若放行会立刻产生一个回声快照（挡住重做）。
     */
    endSuppress(): void;
    /** 同步便捷包装：抑制窗口内执行 fn，异常也保证退出抑制。 */
    suppressWhile<T>(fn: () => T): T;
    /** 异步便捷包装（恢复/回滚等长操作）。 */
    suppressWhileAsync<T>(fn: () => Promise<T>): Promise<T>;
    private onEvent;
    private schedule;
}
/**
 * 回声登记表：记录「我们刚刚写回的内容指纹」，用于识别监听器收到的
 * 「恢复动作自己的写」这一回声。
 *
 * 与 `beginSuppress/endSuppress` 的分工：抑制窗口覆盖**写操作进行中**的事件；
 * 本表覆盖**窗口之后才被投递**的延迟事件（macOS / 网络盘 / 杀毒软件扫描后
 * 重写文件都可能造成事件晚到）。两条防线缺一不可——竞品的注释与 v0.4.6
 * CHANGELOG 都记录了「macOS 延迟投递的回声快照挡住 redo」这一实际事故。
 */
export declare class EchoRegistry {
    private readonly hashes;
    /** 登记一次写回：key 建议 `${scope}:${relPath}`（如 `config:cordis.patch.yml`） */
    record(key: string, hash: string): void;
    /** 是否仍等于我们写回的内容（= 回声，应忽略） */
    isEcho(key: string, hash: string): boolean;
    has(key: string): boolean;
    get size(): number;
    /**
     * 清空。
     * 语义：**真实变更一旦发生就清空整表**——否则后续对同一路径的合法修改
     * 只要恰好等于某次历史写回内容就会被误判为回声而漏拍。
     */
    clear(): void;
}
/**
 * 把事件批按「目录 → 文件名」聚合，便于调用方按关注目录分类。
 * 返回 Map<dir, Set<filename>>（顺序无关，便于集合判定）。
 */
export declare function groupEventsByDir(events: readonly WatcherEvent[]): Map<string, Set<string>>;
/** 事件批里是否包含关注的文件名（跨目录；用于「配置目录里出现了被关注的 basename」判定） */
export declare function hasWatchedBasename(events: readonly WatcherEvent[], watched: ReadonlySet<string>): boolean;
