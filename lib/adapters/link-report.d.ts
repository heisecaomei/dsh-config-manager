/**
 * 文件类分区的「链接目录」报告（issue #37）。
 *
 * 背景：备份静默跳过 junction/符号链接，用户拿到的仍是「成功」，却少了整块内容。
 * 修复分两步：① `utils/recursive-walk.ts` 跟随链接收集内容；② 本模块把「跟随了什么、
 * 跳过了什么、为什么跳过」变成备份报告里可见的告警 —— 缺了 ②，用户依然无从察觉缺失。
 *
 * 纯函数（除 listFilesDetailed 的 IO 委托外），两个 adapter 共用，避免文案再次漂移。
 */
import type { FileSystemFacade } from '../core/types.ts';
import type { MsgFunc } from '../core/messages.ts';
import type { RecursiveListing } from '../utils/recursive-walk.ts';
/** 取遍历结果：宿主未实现 listRecursiveDetailed（旧版/测试 mock）时回退，行为与旧版一致。 */
export declare function listFilesDetailed(fs: FileSystemFacade, dir: string): Promise<RecursiveListing>;
/** 把遍历结果转成告警行（无链接时返回空数组 —— 不制造噪音）。 */
export declare function linkWarnings(msg: MsgFunc, type: string, listing: RecursiveListing): string[];
