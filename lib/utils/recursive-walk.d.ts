/** 遍历中跳过的链接（备份必须能说明「哪些内容没进来」） */
export interface SkippedLink {
    /** homeDir 相对路径（链接本身，不是目标） */
    path: string;
    /** loop=指向已遍历目录（自引用/重复）；outside-home=目标越出 homeDir；
     *  broken=断链；unreadable=目标既非文件也非目录（设备/FIFO 等）；too-deep=超过深度上限 */
    reason: 'loop' | 'outside-home' | 'broken' | 'unreadable' | 'too-deep';
}
export interface RecursiveListing {
    /** homeDir 相对、斜杠分隔、已排序的文件路径 */
    paths: string[];
    /** 被跳过的链接（含原因）；空 = 本次遍历无内容缺失 */
    skippedLinks: SkippedLink[];
    /** 成功跟随（内容已收集）的链接数；用于「链接结构不会被还原」的提示 */
    followedLinks: number;
    /** 读取失败的目录（ACL / 竞态删除等）——这些目录下的内容同样没进备份，必须留痕 */
    unreadableDirs: string[];
}
/**
 * 遍历 baseDir 下的所有文件（跟随目录链接）。
 * @param baseDir 绝对路径；不在 homeDir 内则返回空清单（与既有语义一致）
 * @param homeDir 绝对路径；产出相对它，跟随边界也是它
 */
export declare function listRecursiveFollowingLinks(baseDir: string, homeDir: string): Promise<RecursiveListing>;
