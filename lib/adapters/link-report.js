/** 跳过原因 → 消息 key（与 SkippedLink.reason 一一对应，穷尽映射） */
const REASON_KEY = {
    loop: 'adapter.linkReason.loop',
    'outside-home': 'adapter.linkReason.outsideHome',
    broken: 'adapter.linkReason.broken',
    unreadable: 'adapter.linkReason.unreadable',
    'too-deep': 'adapter.linkReason.tooDeep',
};
/** 单条原因下最多列出的路径数（其余折叠为计数，避免把报告撑爆） */
const MAX_PATHS_PER_REASON = 5;
/** 取遍历结果：宿主未实现 listRecursiveDetailed（旧版/测试 mock）时回退，行为与旧版一致。 */
export async function listFilesDetailed(fs, dir) {
    if (fs.listRecursiveDetailed !== undefined)
        return fs.listRecursiveDetailed(dir);
    return { paths: await fs.listRecursive(dir), skippedLinks: [], followedLinks: 0, unreadableDirs: [] };
}
/** 把遍历结果转成告警行（无链接时返回空数组 —— 不制造噪音）。 */
export function linkWarnings(msg, type, listing) {
    const out = [];
    if (listing.followedLinks > 0) {
        out.push(msg('adapter.linksFollowed', { type, count: String(listing.followedLinks) }));
    }
    if (listing.skippedLinks.length > 0) {
        const byReason = new Map();
        for (const s of listing.skippedLinks) {
            const arr = byReason.get(s.reason) ?? [];
            arr.push(s.path);
            byReason.set(s.reason, arr);
        }
        const detail = [...byReason.entries()].map(([reason, paths]) => {
            const shown = paths.slice(0, MAX_PATHS_PER_REASON).join(', ');
            const more = paths.length > MAX_PATHS_PER_REASON ? ` (+ ${paths.length - MAX_PATHS_PER_REASON})` : '';
            return `${msg(REASON_KEY[reason])} ${paths.length} 个: ${shown}${more}`;
        }).join('；');
        out.push(msg('adapter.linksSkipped', { type, count: String(listing.skippedLinks.length), detail }));
    }
    if (listing.unreadableDirs.length > 0) {
        const shown = listing.unreadableDirs.slice(0, MAX_PATHS_PER_REASON).join(', ');
        const more = listing.unreadableDirs.length > MAX_PATHS_PER_REASON
            ? ` (+ ${listing.unreadableDirs.length - MAX_PATHS_PER_REASON})` : '';
        out.push(msg('adapter.dirsUnreadable', {
            type, count: String(listing.unreadableDirs.length), detail: `${shown}${more}`,
        }));
    }
    return out;
}
//# sourceMappingURL=link-report.js.map