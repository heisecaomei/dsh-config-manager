/** 代理相关环境变量（大小写兼容后的归一形态） */
export interface ProxyEnv {
    /** http 目标使用的代理（`HTTP_PROXY` / `http_proxy`） */
    httpProxy: string | null;
    /** https 目标使用的代理（`HTTPS_PROXY` / `https_proxy`） */
    httpsProxy: string | null;
    /** 直连白名单（`NO_PROXY` / `no_proxy`） */
    noProxy: string | null;
}
/** 读代理环境变量（纯函数，便于测试注​入任意 env） */
export declare function readProxyEnv(env?: Record<string, string | undefined>): ProxyEnv;
/** 是否配置了任何代理（用于启动日志与「是否需要走代理链路」的判定） */
export declare function isProxyConfigured(env?: ProxyEnv): boolean;
/**
 * 目标是否命中 `NO_PROXY`。
 * 支持：`*`（全直连）、精确主机、`.example.com` 与 `example.com`（含子域）、可选 `:port` 限定。
 */
export declare function matchesNoProxy(host: string, port: string, noProxy: string | null): boolean;
/**
 * 该目标应使用的代理 URL；无需代理（未配置 / 命中 NO_PROXY / 非法）→ null。
 *
 * 选择规则（对齐 undici `EnvHttpProxyAgent` 的直觉语义）：
 *  - `https:` 目标 → `HTTPS_PROXY`，缺省回退 `HTTP_PROXY`；
 *  - `http:` 目标 → `HTTP_PROXY`，缺省回退 `HTTPS_PROXY`。
 */
export declare function proxyUrlFor(target: string | URL, env?: ProxyEnv): string | null;
/** 代理的**脱敏**描述（供日志/报错提示；凭据一律剥离，绝不外泄） */
export declare function describeProxy(proxyUrl: string): string;
/** 单次请求的输入 */
export interface RawRequestOptions {
    method?: string;
    url: string;
    headers?: Record<string, string>;
    body?: Buffer | string | undefined;
    timeoutMs?: number;
    signal?: AbortSignal;
    env?: ProxyEnv;
}
/** 单次请求的响应（始终缓冲完整响应体；插件用到的响应体都是小 JSON/文本） */
export interface RawResponse {
    status: number;
    statusText: string;
    headers: Headers;
    body: Buffer;
}
/**
 * 发起一次 HTTP/1.1 请求（自动：直连 / 经代理 absolute-form / 经代理 CONNECT 隧道）。
 * 不跟随重定向（跟随策略由调用方决定：WebDAV 保方法语义，fetch 按浏览器语义）。
 */
export declare function requestOnce(options: RawRequestOptions): Promise<RawResponse>;
/**
 * 代理感知的 fetch 兼容实现（仅插件自身使用；替代 `globalThis.fetch` 的默认值）。
 *
 * 与浏览器 fetch 的关键语义对齐：自动跟随 301/302/303/307/308（上限 5 跳）；303 且非 GET/HEAD
 * 降级为 GET 并丢弃请求体；**跨源跳转剥离 `authorization`**（token 不转发给第三方域名）；
 * 无响应体状态（204/304 等）不构造 body。
 */
export declare function createProxyAwareFetch(env?: ProxyEnv): typeof fetch;
/**
 * 默认出站 fetcher：**未配置代理时原样返回全局 `fetch`**（保持既有行为零变化）；
 * 配置了代理才切到代理感知实现。
 */
export declare function defaultFetcher(env?: ProxyEnv): typeof fetch;
/** 启动日志用：当前生效的代理描述（已脱敏），未启用 → null */
export declare function activeProxySummary(env?: ProxyEnv): {
    http: string | null;
    https: string | null;
    noProxyEntries: number;
} | null;
