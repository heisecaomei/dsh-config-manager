import type { SectionId } from '../schema/types.ts';
import type { ConfigAdapter, ExportSection, HostContext } from './types.ts';
/** 单分区状态：内容指纹 + 计数（counts 仅展示，不参与相等性判定） */
export interface SectionState {
    section: SectionId;
    /** 分区内容的稳定 sha256（hex） */
    hash: string;
    /** adapter 自报计数（展示用；不参与相等判定） */
    counts: Record<string, number>;
    /** 文件类分区的文件条数（非文件分区为 0） */
    fileCount: number;
}
/** 一次配置状态采集结果 */
export interface ConfigState {
    /** ISO 时间戳 */
    capturedAt: string;
    /** 按 section 名升序，保证 stateSections/diff 的确定性 */
    sections: SectionState[];
}
/**
 * 稳定序列化：对象键**排序**后输出，保证同一逻辑内容得到同一字符串。
 * 处理 undefined / 函数 → 省略（与 JSON 语义一致）；Date → ISO；Uint8Array → base64 标记。
 * 不追求通用性：只服务本模块的哈希输入（adapter 导出数据 = JSON 安全结构）。
 */
export declare function stableStringify(value: unknown): string;
/**
 * 分区内容指纹。
 * data 走 stableStringify；files（文件类分区）按「相对路径 + 内容 sha256」参与，
 * 使文件重命名/内容变化都能被识别，而不必把字节写进哈希输入。
 */
export declare function hashExportSection(section: Pick<ExportSection, 'data' | 'files'>): string;
export interface CaptureConfigStateOptions {
    /** 仅采集这些分区（缺省 = 全部传入的 adapter） */
    only?: readonly SectionId[];
    /** 单分区采集失败回调（该分区被跳过，不进入 state） */
    onSectionError?: (section: SectionId, error: unknown) => void;
}
/**
 * 由**已导出的**分区结果构建状态（按 section 升序）。
 *
 * 单一事实源：`captureConfigState` 与「先导出再落快照」的快照路径都必须走这里，
 * 否则两条路径的分区口径（hash / counts / fileCount）会悄悄漂移。
 */
export declare function stateFromExports(sections: ReadonlyMap<SectionId, ExportSection>, capturedAt?: string): ConfigState;
/**
 * 采集当前配置状态。分区按 id 升序输出以保证可比性。
 * 单分区失败 → 跳过（记入 onSectionError），不抛出。
 */
export declare function captureConfigState(adapters: readonly ConfigAdapter[], ctx: HostContext, opts?: CaptureConfigStateOptions): Promise<ConfigState>;
/** section → SectionState（便于比较与展示）；state 为 null/损坏时返回空表（不抛）。 */
export declare function stateSections(state: ConfigState | null): Map<SectionId, SectionState>;
/**
 * 两个状态的内容是否完全一致（分区集合 + 每分区 hash）。
 *
 * 全函数：null / undefined / 缺 sections 的损坏状态一律**不抛**——
 * 任一侧不可解析时退化为引用相等（null vs null 为 true，其余为 false）。
 */
export declare function statesEqual(a: ConfigState | null, b: ConfigState | null): boolean;
export interface ConfigStateDiff {
    /** 两侧都有但 hash 不同 */
    changed: SectionId[];
    /** 仅 after 有 */
    added: SectionId[];
    /** 仅 before 有 */
    removed: SectionId[];
    /** 无任何差异 */
    identical: boolean;
}
/** 分区级差异（before → after）。顺序确定（按 section 升序）。 */
export declare function diffStates(before: ConfigState | null, after: ConfigState | null): ConfigStateDiff;
