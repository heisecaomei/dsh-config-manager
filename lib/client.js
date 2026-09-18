window.__ModuleLoader__.load({
	id: "dsh-config-manager",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp$15 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp$15(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp$15(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp$15(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$15(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp$15({}, "__esModule", { value: true }), mod);
//#endregion
let react = require("react");
react = __toESM(react, 1);
let react_jsx_runtime = require("react/jsx-runtime");
let react_dom = require("react-dom");
react_dom = __toESM(react_dom, 1);
//#region src/ui/i18n.ts
/**
* 客户端展示层（src/ui/*、src/client/common/*）的渲染文案目录（zh 源语言 / en 镜像）。
*
* 与 core 的 messages.ts 分工：本目录负责「客户端纯渲染层」（ReportView / ErrorBanner /
* ProgressBar / sync-view）产生的中文文案；core 侧引擎消息已随 API 数据源翻译。
* 这些纯函数原先直接内嵌中文，现经 UiDict 注入：Client 挂载时按 ctx.locale 提供。
*
* 纪律：
*  - TextKey 类型 = keyof typeof uiZh，en 缺键/多键即编译错误；
*  - {param} 插值，缺参原样保留。
*/
const uiZh = {
	"commonClose": "关闭",
	"commonCancel": "取消",
	"commonRetry": "重试",
	"commonLoading": "加载中…",
	"commonUnknownError": "未知错误",
	"commonNext": "下一步",
	"commonBack": "上一步",
	"commonDone": "完成",
	"export.download": "下载备份文件",
	"export.running": "正在导出…",
	"export.run": "开始导出",
	"export.selectionWarnings": "以下分区为设备相关数据，跨设备导入时可能不适用：",
	"export.included": "已包含",
	"export.excluded": "未包含",
	"export.unknownSection": "未知分区：{id}",
	"export.deviceSpecific": "{label} 为设备相关数据（{portability}），跨设备导入时可能不适用",
	"report.backupCreated": "备份已创建",
	"report.importComplete": "导入完成",
	"report.importFailed": "导入失败",
	"report.tombstonedSkipped": "已按删除记录跳过 {count} 项",
	"report.included": "已包含：",
	"report.excluded": "未包含：",
	"report.security": "安全：",
	"report.apiKeysExcluded": "API 密钥已排除：",
	"report.containsSecrets": "包含密钥：",
	"report.encrypted": "已加密：",
	"report.redacted": "{count} 个敏感字段已脱敏",
	"report.file": "文件：",
	"report.yes": "是",
	"report.yesEncrypted": "是（加密）",
	"report.no": "否",
	"report.importedRestored": "已导入/恢复",
	"report.skipped": "跳过",
	"report.needAttention": "需注意",
	"report.failed": "失败",
	"report.noChanges": "无变更",
	"report.reason": "原因",
	"report.note": "说明",
	"report.unknownReason": "未知原因",
	"report.secrets": "密钥：",
	"report.credentialsNeedEntry": "{count} 个凭据需要补录",
	"report.restartRequired": "重启 DSH 后生效：{detail}",
	"report.restartPluginsMcp": "插件/MCP 更改将在重启 DSH 后生效",
	"report.rollbackFull": "回滚：已完整恢复导入前的配置。",
	"report.rollbackPartial": "回滚部分完成。",
	"report.rollbackManual": "以下项目可能需要人工恢复：",
	"report.restored": "已恢复：{count} 项",
	"error.notMounted": "config-manager 服务未挂载（插件未加载）：请确认 profile 中已安装 dsh-config-manager 并重启 DSH",
	"error.httpInvalidJson": "HTTP {status}: 无效的 JSON 响应",
	"error.fallback": "操作失败",
	"error.downloadFailed": "下载失败：HTTP {status}",
	"error.exportTimeout": "导出超时（{minutes} 分钟）：导出过程未完成，请重试；若反复超时请检查 DSH 状态",
	"error.syncTimeout": "同步请求超时（{minutes} 分钟）：请检查网络与仓库可达性后重试",
	"error.recoveryTimeout": "恢复请求超时（{minutes} 分钟）：恢复过程未完成，请重试；若反复超时请检查 DSH 状态",
	"error.lifecycleTimeout": "灾备请求超时（{minutes} 分钟）：撤销/重做未完成，请重试；若反复超时请检查 DSH 状态",
	"error.settingsConflict.title": "配置已被并发修改",
	"error.settingsConflict.action": "目标 DSH 的该配置在导入期间被其他进程修改，为避免覆盖请重新导出或手动核对后再试。",
	"error.notConfirmed.title": "导入未确认",
	"error.notConfirmed.action": "请在预览页确认导入内容后重试。",
	"error.integrity.title": "备份完整性校验失败",
	"error.integrity.action": "备份文件可能已损坏或被篡改，请重新导出备份后再试。",
	"error.schema.title": "备份格式版本不受支持",
	"error.schema.action": "请升级 DSH Config Manager 或使用相同版本的备份文件。",
	"error.notFound.title": "文件或路径不存在",
	"error.notFound.action": "请检查文件路径是否正确、文件是否已被移动或删除。",
	"error.permission.title": "权限不足",
	"error.permission.action": "请检查目标目录的读写权限后重试。",
	"error.needsRestart.title": "插件安装需要重启生效",
	"error.needsRestart.action": "导入已完成，插件将在重启 DSH 后生效；请在 DSH Desktop 中重启服务。",
	"error.reason": "原因",
	"error.suggestedAction": "建议操作",
	"error.item": "相关项",
	"progress.analyzing": "正在分析配置…",
	"progress.exportingSettings": "正在导出设置…",
	"progress.scanningSecrets": "正在扫描密钥…",
	"progress.exportingPlugins": "正在导出插件…",
	"progress.creatingArchive": "正在创建归档…",
	"progress.calculatingChecksums": "正在核对文件完整性…",
	"progress.exporting": "正在导出配置…",
	"progress.validating": "正在校验备份…",
	"progress.checkingCompatibility": "正在检查兼容性…",
	"progress.creatingSnapshot": "正在创建安全快照…",
	"progress.restoringSettings": "正在恢复设置…",
	"progress.restoringPlugins": "正在恢复插件…",
	"progress.restoringMcp": "正在恢复 MCP…",
	"progress.validatingConfig": "正在校验配置…",
	"progress.rollingBack": "正在回滚…",
	"progress.executing": "正在应用配置（插件安装可能需要较长时间）…",
	"progress.done": "完成",
	"snapshots.createdAt": "创建时间",
	"snapshots.sourceZip": "来源",
	"snapshots.status": "状态",
	"snapshots.entries": "条目",
	"snapshots.plugins": "插件",
	"snapshots.statusPending": "待处理",
	"snapshots.statusDone": "已完成",
	"snapshots.statusRolledback": "已回滚",
	"snapshots.statusUnknown": "未知",
	"snapshots.planTitle": "恢复计划预览",
	"snapshots.confirmRestore": "确认恢复？会先把当前文件备份到一个安全位置，再删除导入期间新增的插件。",
	"snapshots.execute": "执行恢复",
	"snapshots.executing": "正在恢复…",
	"snapshots.restored": "已恢复",
	"snapshots.removedPlugins": "已卸载插件",
	"snapshots.manualHints": "需人工处理",
	"snapshots.failed": "失败",
	"snapshots.skipped": "跳过",
	"snapshots.noActions": "该快照无可恢复动作（或全部跳过）。",
	"snapshots.empty": "暂无快照。导入时会自动创建安全快照。",
	"snapshots.loading": "正在加载快照…",
	"snapshots.selectHint": "选择一个快照预览其恢复计划（只读预览，不会改动任何设置）：",
	"snapshots.reportTitle": "恢复报告",
	"sync.privateRepoHint": "安全要求：同步仓库必须为私有仓库（public 仓库会公开你的配置内容）。认证 token 仅用于仓库访问，绝不写入同步文件、提交内容或日志。",
	"sync.kind.create": "新增",
	"sync.kind.update": "更新",
	"sync.kind.skip": "跳过",
	"sync.kind.conflict": "冲突",
	"sync.kind.install": "安装",
	"sync.kind.missingSecret": "缺密钥",
	"sync.kind.missingDependency": "缺依赖",
	"sync.kind.pathMapping": "路径映射",
	"sync.kind.warning": "警告",
	"sync.kind.error": "错误",
	"sync.severity.error": "错误",
	"sync.severity.warning": "警告",
	"sync.severity.info": "信息",
	"sync.pushLabel": "推送到远端",
	"sync.pullLabel": "拉取差异预览",
	"sync.pushing": "正在推送…",
	"sync.pulling": "正在拉取…",
	"sync.statusLoading": "正在读取同步状态…",
	"sync.statusUnconfigured": "尚未配置同步仓库（请填写仓库地址并推送一次以保存配置）",
	"sync.credConfigured": "凭据已配置",
	"sync.credMissing": "未配置凭据（token 将在首次推送/拉取时写入 DSH credentials）",
	"sync.lastSync": "上次同步：{time}",
	"sync.neverSynced": "尚未同步过",
	"sync.neverSyncedShort": "从未同步",
	"sync.pushFailed": "推送失败",
	"sync.pushOk": "推送成功（快照 {id}）",
	"sync.pushPreviewHeadline": "将推送 {total} 个分区（{changed} 个有变化）",
	"sync.pushPreviewHint": "以上为只读预览，不会写入远端。确认后点击「推送」才真正上传。",
	"sync.pushPreviewEncrypted": "加密快照：载荷将整体加密，各分区相对基线的变化不可比对。",
	"sync.pullFailed": "拉取失败",
	"sync.pullOk": "远端快照 {id} 差异预览：共 {count} 项变更",
	"sync.pullEmpty": "远端快照与本地一致（无变更）",
	"sync.previewHint": "以上为只读差异预览，不会执行导入。当前版本暂不支持一键导入；如需应用远端配置，请使用「导入恢复」向导手动导入导出的备份。",
	"sync.syncTitle": "一键同步",
	"sync.syncButton": "一键同步",
	"sync.syncing": "正在同步…",
	"sync.syncHeadline": "远端快照 {id} 差异确认：共 {count} 项",
	"sync.syncEmpty": "远端快照与本地一致（无变更）",
	"sync.syncFailed": "同步失败",
	"sync.confirmAdopt": "采用远端",
	"sync.confirmSkip": "跳过",
	"sync.confirmRequired": "需要人工决策",
	"sync.needsReviewBadge": "需人工决策",
	"sync.selectSnapshot": "选择历史快照",
	"sync.latestSnapshot": "最新快照",
	"sync.noSnapshots": "远端暂无快照",
	"sync.confirmImport": "确认导入",
	"sync.cancelConfirm": "取消",
	"sync.conflictResolve": "冲突解决",
	"sync.conflictUseLocal": "用本地",
	"sync.conflictUseRemote": "用远端",
	"sync.conflictSkip": "跳过",
	"sync.conflictResolvedLocal": "已选：本地",
	"sync.conflictResolvedRemote": "已选：远端",
	"sync.conflictResolvedSkip": "已选：跳过",
	"sync.importDone": "已导入 {n} 个分区",
	"sync.importSkipped": "已跳过 {n} 项",
	"sync.importFailed": "导入失败（已整体回滚）",
	"sync.rollbackButton": "回滚到应用前",
	"sync.rollingBack": "正在回滚…",
	"sync.rollbackDone": "已回滚到应用前",
	"sync.appliedSections": "已写入",
	"sync.importWarnings": "导入告警",
	"sync.autosyncTitle": "自动同步",
	"sync.autosyncDesc": "开启后，DSH 将按固定间隔自动执行双向同步（拉取合并 + 上传）；DSH 启动时还会触发一次「自动下载合并（不上传）」以保持本地为最新。仅在无冲突且无需人工干预时才自动写入。",
	"sync.autosyncEnabled": "启用自动同步",
	"sync.autosyncInterval": "同步间隔",
	"sync.autosyncIntervalHint": "DSH 启动时自动下载合并不上传。",
	"sync.autosyncNever": "从未运行",
	"sync.autosyncLastRun": "上次运行：{time}",
	"sync.autosyncNextIn": "下次约 {time} 后",
	"sync.autosyncSuccess": "成功",
	"sync.autosyncSkipped": "已跳过",
	"sync.autosyncFailed": "失败",
	"sync.autosyncPartial": "部分成功",
	"sync.autosyncFailCount": "连续失败 {n} 次",
	"sync.autosyncSyncing": "自动同步进行中…",
	"sync.interval.5m": "5 分钟",
	"sync.interval.15m": "15 分钟",
	"sync.interval.30m": "30 分钟",
	"sync.interval.60m": "60 分钟",
	"sync.interval.6h": "6 小时",
	"sync.interval.12h": "12 小时",
	"sync.interval.24h": "24 小时",
	"sync.duration.min": "{n} 分钟",
	"sync.duration.hour": "{n} 小时",
	"sync.duration.day": "{n} 天",
	"sync.hist.autosync": "自动同步",
	"sync.hist.directionPull": "下载",
	"sync.hist.directionPush": "上传",
	"sync.hist.directionBoth": "双向",
	"sync.hist.skipReasonConflict": "冲突项被跳过",
	"sync.hist.skipReasonNoRemote": "远端无快照",
	"sync.hist.skipReasonNotConfigured": "未配置仓库",
	"sync.hist.skipReasonNetwork": "网络问题",
	"sync.hist.conflictedSections": "跳过冲突分区：{sections}",
	"sync.hist.appliedSections": "应用分区：{sections}",
	"sync.hist.failedError": "错误：{error}",
	"sync.hist.notifiedAt": "已通知",
	"sync.github.starting": "正在发起 GitHub 授权…",
	"sync.github.waitingNoCode": "请在浏览器中打开授权页面并完成授权…",
	"sync.github.waiting": "请在浏览器中打开授权页面，输入一次性代码 {code} 完成授权（自动等待确认）。",
	"sync.github.polling": "正在确认 GitHub 授权状态…",
	"sync.github.success": "GitHub 登录成功：token 已安全写入 DSH credentials，可直接推送/拉取。",
	"sync.github.failed": "GitHub 登录失败",
	"sync.github.defaultStatus": "通过 GitHub OAuth 设备码流程登录，token 自动写入 DSH credentials（无需手动输入）。",
	"sync.github.login": "使用 GitHub 登录",
	"sync.github.relogin": "重新登录",
	"sync.github.pollSuccess": "GitHub 登录成功：token 已安全写入 DSH credentials。",
	"sync.github.pollDenied": "GitHub 授权被拒绝（access_denied）。可重新发起登录，或改用下方手动 token 输入。",
	"sync.github.pollExpired": "GitHub 授权已过期（expired_token）。请重新发起登录。",
	"sync.github.pollError": "GitHub OAuth 错误：{detail}",
	"sync.github.unknownError": "未知错误",
	"market.statusLoading": "正在读取市场状态…",
	"market.statusUnconfigured": "尚未添加市场（请输入公开 Git 仓库地址）",
	"market.statusConfigured": "已添加 {count} 个市场",
	"market.supplyUnofficial": "来自公共网络、非官方审核",
	"market.supplySource": "来源仓库：{url}",
	"market.supplyDownloadedAt": "下载时间：{time}",
	"market.supplyAuthor": "作者：{author}",
	"market.supplyProvenanceSource": "作者声明来源：{source}",
	"market.supplyProvenanceNote": "作者自述：{note}",
	"market.detail.sections": "包含分区：{sections}",
	"market.detail.sectionsEmpty": "未声明分区",
	"market.detail.statusValid": "校验通过",
	"market.detail.statusInvalid": "校验未通过",
	"myConfigs.autoField": "系统自动",
	"myConfigs.field.id": "条目 ID",
	"myConfigs.field.author": "作者",
	"myConfigs.field.version": "版本",
	"myConfigs.field.updatedAt": "更新时间",
	"myConfigs.status.notListed": "未收录",
	"myConfigs.status.pendingPr": "PR 待审核",
	"myConfigs.status.listed": "已收录",
	"myConfigs.form.errorName": "名称不能为空",
	"consult.dim.compatibility": "版本/平台兼容性",
	"consult.dim.integrity": "结构完整性",
	"consult.dim.sections": "分区完整性",
	"consult.dim.consistency": "一致性",
	"consult.dim.sensitive": "敏感暴露",
	"consult.dim.migratability": "可迁移性",
	"consult.recommendation.proceed": "建议：可继续",
	"consult.recommendation.review": "建议：需人工确认",
	"consult.recommendation.block": "建议：阻止执行",
	"consult.title": "迁移前咨询",
	"consult.healthScore": "健康评分 {score}",
	"consult.dryRun": "只读分析",
	"consult.reasons": "建议依据",
	"consult.willApply": "将应用",
	"consult.sections": "{count} 个分区",
	"consult.items": "{count} 项",
	"consult.conflicts": "{count} 个冲突",
	"consult.risks": "{count} 个风险",
	"consult.dimensions": "评分维度",
	"consult.loading": "正在生成咨询报告…"
};
const uiEn = {
	"commonClose": "Close",
	"commonCancel": "Cancel",
	"commonRetry": "Retry",
	"commonLoading": "Loading…",
	"commonUnknownError": "Unknown error",
	"commonNext": "Next",
	"commonBack": "Back",
	"commonDone": "Done",
	"export.download": "Download backup file",
	"export.running": "Exporting…",
	"export.run": "Start Export",
	"export.selectionWarnings": "Device-specific sections may not apply on another machine:",
	"export.included": "Included",
	"export.excluded": "Excluded",
	"export.unknownSection": "Unknown section: {id}",
	"export.deviceSpecific": "{label} is device-specific ({portability}) and may not apply on another machine",
	"report.backupCreated": "Backup Created",
	"report.importComplete": "Import Complete",
	"report.importFailed": "Import Failed",
	"report.tombstonedSkipped": "{count} item(s) skipped by deletion records",
	"report.included": "Included:",
	"report.excluded": "Excluded:",
	"report.security": "Security:",
	"report.apiKeysExcluded": "API Keys excluded:",
	"report.containsSecrets": "Contains secrets:",
	"report.encrypted": "Encrypted:",
	"report.redacted": "{count} sensitive field(s) redacted",
	"report.file": "File:",
	"report.yes": "yes",
	"report.yesEncrypted": "yes (encrypted)",
	"report.no": "no",
	"report.importedRestored": "imported/restored",
	"report.skipped": "skipped",
	"report.needAttention": "need attention",
	"report.failed": "failed",
	"report.noChanges": "no changes",
	"report.reason": "Reason",
	"report.note": "Note",
	"report.unknownReason": "Unknown reason",
	"report.secrets": "Secrets:",
	"report.credentialsNeedEntry": "{count} credential(s) need to be entered",
	"report.restartRequired": "Restart DSH to apply: {detail}",
	"report.restartPluginsMcp": "Plugin / MCP changes take effect after restarting DSH",
	"report.rollbackFull": "Rollback: fully restored the pre-import configuration.",
	"report.rollbackPartial": "Rollback partially completed.",
	"report.rollbackManual": "These items may require manual recovery:",
	"report.restored": "Restored: {count} item(s)",
	"error.notMounted": "config-manager service is not mounted (plugin not loaded): make sure dsh-config-manager is installed in the profile and restart DSH",
	"error.httpInvalidJson": "HTTP {status}: invalid JSON response",
	"error.fallback": "Operation failed",
	"error.downloadFailed": "Download failed: HTTP {status}",
	"error.exportTimeout": "Export timed out ({minutes} min): the export did not complete, please retry; if it keeps timing out, check the DSH state",
	"error.syncTimeout": "Sync request timed out ({minutes} min): check network and repository reachability, then retry",
	"error.recoveryTimeout": "Recovery request timed out ({minutes} min): the recovery did not complete, please retry; if it keeps timing out, check the DSH state",
	"error.lifecycleTimeout": "Recovery request timed out ({minutes} min): the undo/redo did not complete, please retry; if it keeps timing out, check the DSH state",
	"error.settingsConflict.title": "Configuration changed concurrently",
	"error.settingsConflict.action": "This configuration on the target DSH was modified by another process during import. To avoid overwriting it, re-export or review it manually, then retry.",
	"error.notConfirmed.title": "Import not confirmed",
	"error.notConfirmed.action": "Confirm the import on the preview page, then retry.",
	"error.integrity.title": "Backup integrity check failed",
	"error.integrity.action": "The backup may be corrupted or tampered with. Re-export the backup, then retry.",
	"error.schema.title": "Backup format version not supported",
	"error.schema.action": "Upgrade DSH Config Manager or use a backup from the same version.",
	"error.notFound.title": "File or path not found",
	"error.notFound.action": "Check that the file path is correct and the file has not been moved or deleted.",
	"error.permission.title": "Permission denied",
	"error.permission.action": "Check read/write permissions on the target directory, then retry.",
	"error.needsRestart.title": "Plugin install requires a restart",
	"error.needsRestart.action": "The import is complete; plugins take effect after restarting DSH. Restart the service in DSH Desktop.",
	"error.reason": "Reason",
	"error.suggestedAction": "Suggested action",
	"error.item": "Item",
	"progress.analyzing": "Analyzing configuration...",
	"progress.exportingSettings": "Exporting settings...",
	"progress.scanningSecrets": "Scanning secrets...",
	"progress.exportingPlugins": "Exporting plugins...",
	"progress.creatingArchive": "Creating archive...",
	"progress.calculatingChecksums": "Verifying file integrity...",
	"progress.exporting": "Exporting configuration...",
	"progress.validating": "Validating backup...",
	"progress.checkingCompatibility": "Checking compatibility...",
	"progress.creatingSnapshot": "Creating safety snapshot...",
	"progress.restoringSettings": "Restoring settings...",
	"progress.restoringPlugins": "Restoring plugins...",
	"progress.restoringMcp": "Restoring MCP...",
	"progress.validatingConfig": "Validating configuration...",
	"progress.rollingBack": "Rolling back...",
	"progress.executing": "Applying configuration (plugin installs may take a while)...",
	"progress.done": "Done",
	"snapshots.createdAt": "Created",
	"snapshots.sourceZip": "Source",
	"snapshots.status": "Status",
	"snapshots.entries": "Entries",
	"snapshots.plugins": "Plugins",
	"snapshots.statusPending": "Pending",
	"snapshots.statusDone": "Done",
	"snapshots.statusRolledback": "Rolled back",
	"snapshots.statusUnknown": "Unknown",
	"snapshots.planTitle": "Restore Plan Preview",
	"snapshots.confirmRestore": "Confirm restore? Current files are first backed up to a safe location, then plugins added during the import are removed.",
	"snapshots.execute": "Restore now",
	"snapshots.executing": "Restoring…",
	"snapshots.restored": "Restored",
	"snapshots.removedPlugins": "Removed plugins",
	"snapshots.manualHints": "Manual action needed",
	"snapshots.failed": "Failed",
	"snapshots.skipped": "Skipped",
	"snapshots.noActions": "No restorable actions for this snapshot (or all skipped).",
	"snapshots.empty": "No snapshots yet. A safety snapshot is created automatically on import.",
	"snapshots.loading": "Loading snapshots…",
	"snapshots.selectHint": "Select a snapshot to preview its restore plan (read-only preview, changes nothing):",
	"snapshots.reportTitle": "Restore Report",
	"sync.privateRepoHint": "Security requirement: the sync repository MUST be private (a public repo would expose your configuration). The auth token is only used for repository access and is never written into sync files, commit content, or logs.",
	"sync.kind.create": "Create",
	"sync.kind.update": "Update",
	"sync.kind.skip": "Skip",
	"sync.kind.conflict": "Conflict",
	"sync.kind.install": "Install",
	"sync.kind.missingSecret": "Secret",
	"sync.kind.missingDependency": "Dependency",
	"sync.kind.pathMapping": "Path",
	"sync.kind.warning": "Warning",
	"sync.kind.error": "Error",
	"sync.severity.error": "Error",
	"sync.severity.warning": "Warning",
	"sync.severity.info": "Info",
	"sync.pushLabel": "Push to remote",
	"sync.pullLabel": "Pull diff preview",
	"sync.pushing": "Pushing…",
	"sync.pulling": "Pulling…",
	"sync.statusLoading": "Reading sync status…",
	"sync.statusUnconfigured": "No sync repository configured (fill in the repository URL and push once to save the config)",
	"sync.credConfigured": "Credential configured",
	"sync.credMissing": "No credential configured (token is written into DSH credentials on first push/pull)",
	"sync.lastSync": "Last sync: {time}",
	"sync.neverSynced": "Never synced yet",
	"sync.neverSyncedShort": "Never synced",
	"sync.pushFailed": "Push failed",
	"sync.pushOk": "Push succeeded (snapshot {id})",
	"sync.pushPreviewHeadline": "Will push {total} section(s) ({changed} changed)",
	"sync.pushPreviewHint": "Read-only preview above — nothing is written to the remote. Click \"Push\" to actually upload.",
	"sync.pushPreviewEncrypted": "Encrypted snapshot: the payload is encrypted as a whole; per-section changes vs the baseline cannot be compared.",
	"sync.pullFailed": "Pull failed",
	"sync.pullOk": "Remote snapshot {id} diff preview: {count} change(s)",
	"sync.pullEmpty": "Remote snapshot matches local (no changes)",
	"sync.previewHint": "Read-only diff preview above; nothing is imported. One-click import is not supported in this version — use the Import wizard to apply a downloaded backup if needed.",
	"sync.syncTitle": "One-Click Sync",
	"sync.syncButton": "One-click sync",
	"sync.syncing": "Syncing…",
	"sync.syncHeadline": "Remote snapshot {id} diff confirm: {count} item(s)",
	"sync.syncEmpty": "Remote snapshot matches local (no changes)",
	"sync.syncFailed": "Sync failed",
	"sync.confirmAdopt": "Adopt remote",
	"sync.confirmSkip": "Skip",
	"sync.confirmRequired": "Needs decision",
	"sync.needsReviewBadge": "Needs decision",
	"sync.selectSnapshot": "Select snapshot",
	"sync.latestSnapshot": "Latest snapshot",
	"sync.noSnapshots": "No remote snapshots",
	"sync.confirmImport": "Confirm import",
	"sync.cancelConfirm": "Cancel",
	"sync.conflictResolve": "Resolve conflict",
	"sync.conflictUseLocal": "Use local",
	"sync.conflictUseRemote": "Use remote",
	"sync.conflictSkip": "Skip",
	"sync.conflictResolvedLocal": "Chosen: local",
	"sync.conflictResolvedRemote": "Chosen: remote",
	"sync.conflictResolvedSkip": "Chosen: skip",
	"sync.importDone": "Imported {n} section(s)",
	"sync.importSkipped": "Skipped {n} item(s)",
	"sync.importFailed": "Import failed (rolled back)",
	"sync.rollbackButton": "Rollback",
	"sync.rollingBack": "Rolling back…",
	"sync.rollbackDone": "Rolled back",
	"sync.appliedSections": "Written",
	"sync.importWarnings": "Import warnings",
	"sync.autosyncTitle": "Auto Sync",
	"sync.autosyncDesc": "When enabled, DSH will run two-way sync (pull merge + push) on a fixed interval; on startup it also triggers a download-merge (no upload) to keep local up to date. Local writes happen only when there are no conflicts or manual-decision items.",
	"sync.autosyncEnabled": "Enable auto sync",
	"sync.autosyncInterval": "Sync interval",
	"sync.autosyncIntervalHint": "Auto download-merge on DSH startup, no upload.",
	"sync.autosyncNever": "Never run",
	"sync.autosyncLastRun": "Last run: {time}",
	"sync.autosyncNextIn": "Next in ~{time}",
	"sync.autosyncSuccess": "Success",
	"sync.autosyncSkipped": "Skipped",
	"sync.autosyncFailed": "Failed",
	"sync.autosyncPartial": "Partial",
	"sync.autosyncFailCount": "{n} consecutive failure(s)",
	"sync.autosyncSyncing": "Auto sync running…",
	"sync.interval.5m": "5 min",
	"sync.interval.15m": "15 min",
	"sync.interval.30m": "30 min",
	"sync.interval.60m": "60 min",
	"sync.interval.6h": "6 hr",
	"sync.interval.12h": "12 hr",
	"sync.interval.24h": "24 hr",
	"sync.duration.min": "{n} min",
	"sync.duration.hour": "{n} hr",
	"sync.duration.day": "{n} day",
	"sync.hist.autosync": "Auto Sync",
	"sync.hist.directionPull": "Pull",
	"sync.hist.directionPush": "Push",
	"sync.hist.directionBoth": "Both",
	"sync.hist.skipReasonConflict": "Conflict items skipped",
	"sync.hist.skipReasonNoRemote": "No remote snapshot",
	"sync.hist.skipReasonNotConfigured": "No repository configured",
	"sync.hist.skipReasonNetwork": "Network issue",
	"sync.hist.conflictedSections": "Skipped conflict sections: {sections}",
	"sync.hist.appliedSections": "Applied sections: {sections}",
	"sync.hist.failedError": "Error: {error}",
	"sync.hist.notifiedAt": "Notified",
	"sync.github.starting": "Starting GitHub a​u​t​h​o​r​i​z​a​t​i​o​n​…",
	"sync.github.waitingNoCode": "Open the authorization page in your browser and complete the flow…",
	"sync.github.waiting": "Open the authorization page in your browser, enter the one-time code {code} to finish (waiting for confirmation).",
	"sync.github.polling": "Confirming GitHub authorization…",
	"sync.github.success": "GitHub sign-in succeeded: token securely written into DSH credentials — you can push/pull now.",
	"sync.github.failed": "GitHub sign-in failed",
	"sync.github.defaultStatus": "Sign in via the GitHub OAuth device flow; the token is written into DSH credentials automatically (no manual entry).",
	"sync.github.login": "Sign in with GitHub",
	"sync.github.relogin": "Sign in again",
	"sync.github.pollSuccess": "GitHub sign-in succeeded: token securely written into DSH credentials.",
	"sync.github.pollDenied": "GitHub authorization was denied (access_denied). You can re-start the sign-in or use manual token entry below.",
	"sync.github.pollExpired": "GitHub authorization expired (expired_token). Please re-start the sign-in.",
	"sync.github.pollError": "GitHub OAuth error: {detail}",
	"sync.github.unknownError": "Unknown error",
	"market.statusLoading": "Reading market status…",
	"market.statusUnconfigured": "No markets added (enter a public Git repository URL)",
	"market.statusConfigured": "{count} market(s) added",
	"market.supplyUnofficial": "From the public network, not officially reviewed",
	"market.supplySource": "Source repo: {url}",
	"market.supplyDownloadedAt": "Downloaded at: {time}",
	"market.supplyAuthor": "Author: {author}",
	"market.supplyProvenanceSource": "Author-declared source: {source}",
	"market.supplyProvenanceNote": "Author note: {note}",
	"market.detail.sections": "Sections: {sections}",
	"market.detail.sectionsEmpty": "No sections declared",
	"market.detail.statusValid": "Verified",
	"market.detail.statusInvalid": "Failed verification",
	"myConfigs.autoField": "Auto",
	"myConfigs.field.id": "Item ID",
	"myConfigs.field.author": "Author",
	"myConfigs.field.version": "Version",
	"myConfigs.field.updatedAt": "Updated",
	"myConfigs.status.notListed": "Not listed",
	"myConfigs.status.pendingPr": "PR pending review",
	"myConfigs.status.listed": "Listed",
	"myConfigs.form.errorName": "Name is required",
	"consult.dim.compatibility": "Version / platform compatibility",
	"consult.dim.integrity": "Structural integrity",
	"consult.dim.sections": "Section integrity",
	"consult.dim.consistency": "Consistency",
	"consult.dim.sensitive": "Sensitive exposure",
	"consult.dim.migratability": "Migratability",
	"consult.recommendation.proceed": "Recommendation: proceed",
	"consult.recommendation.review": "Recommendation: review",
	"consult.recommendation.block": "Recommendation: block",
	"consult.title": "Migration Pre-flight Consultation",
	"consult.healthScore": "Health score {score}",
	"consult.dryRun": "Read-only analysis",
	"consult.reasons": "Recommendation basis",
	"consult.willApply": "Will apply",
	"consult.sections": "{count} section(s)",
	"consult.items": "{count} item(s)",
	"consult.conflicts": "{count} conflict(s)",
	"consult.risks": "{count} risk(s)",
	"consult.dimensions": "Score dimensions",
	"consult.loading": "Generating consultation report…"
};
/** 构造 翻译函数（zh 源 / en 镜像；缺 key 回退）。 */
function makeUiT(lang) {
	const dict = lang === "en" ? uiEn : uiZh;
	const fallback = lang === "en" ? uiZh : void 0;
	return (key, params) => {
		const template = dict[key] ?? fallback?.[key] ?? key;
		if (params === void 0) return template;
		return String(template).replace(/\{(\w+)\}/g, (match, k) => params[k] === void 0 ? match : String(params[k]));
	};
}
/** 缺省 UI 翻译（zh）：未注入的渲染路径行为与改造前完全一致。 */
const zhUiT = makeUiT("zh");
//#endregion
//#region src/client/api.ts
/** 路由族常量（集中管理，与 Host 半的路由前缀保持一致） */
const CONFIG_MANAGER_API = {
	base: "/api/dsh-config-manager",
	status: "/api/dsh-config-manager/status",
	export: "/api/dsh-config-manager/export",
	exportPreview: "/api/dsh-config-manager/export-preview",
	download: "/api/dsh-config-manager/download",
	upload: "/api/dsh-config-manager/upload",
	analyze: "/api/dsh-config-manager/analyze",
	plan: "/api/dsh-config-manager/plan",
	execute: "/api/dsh-config-manager/execute",
	skipExecute: "/api/dsh-config-manager/execute/skip",
	decryptArchive: "/api/dsh-config-manager/decrypt-archive",
	progress: "/api/dsh-config-manager/progress",
	runs: "/api/dsh-config-manager/runs",
	snapshots: "/api/dsh-config-manager/snapshots",
	restore: "/api/dsh-config-manager/restore",
	snapshotDelete: "/api/dsh-config-manager/snapshots/delete",
	snapshotPin: "/api/dsh-config-manager/snapshots/pin",
	backupSchedule: "/api/dsh-config-manager/backup-schedule",
	backupScheduleRun: "/api/dsh-config-manager/backup-schedule/run",
	backupFiles: "/api/dsh-config-manager/backup-files",
	backupFilesDelete: "/api/dsh-config-manager/backup-files/delete",
	consult: "/api/dsh-config-manager/consult",
	profiles: "/api/dsh-config-manager/profiles",
	profilesSave: "/api/dsh-config-manager/profiles/save",
	profilesDelete: "/api/dsh-config-manager/profiles/delete",
	profilesRename: "/api/dsh-config-manager/profiles/rename",
	profilesAnalyzeSwitch: "/api/dsh-config-manager/profiles/analyze-switch",
	profilesExecuteSwitch: "/api/dsh-config-manager/profiles/execute-switch",
	profilesImport: "/api/dsh-config-manager/profiles/import",
	starPrompt: "/api/dsh-config-manager/star-prompt",
	releaseNotesPrompt: "/api/dsh-config-manager/release-notes-prompt"
};
/** 导出请求超时（ms）：与 Host 半 ROUTE_TIMEOUT_MS 对齐，防止宿主卡死时 UI 无限等待 */
const EXPORT_TIMEOUT_MS = 3e5;
/** 携带路由 JSON error 消息的错误类型 */
var ConfigManagerApiError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "ConfigManagerApiError";
	}
};
/** 解析 JSON 响应；非 2xx 时抛出带路由 error 消息的 ConfigManagerApiError */
async function readJson$6(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** query-string 辅助（跳过 undefined/空串，与 dsh-ssh 一致） */
function query(params) {
	const search = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) if (value !== void 0 && value !== "") search.set(key, String(value));
	const text = search.toString();
	return text === "" ? "" : "?" + text;
}
/** 用 Blob URL + <a download> 触发浏览器静默下载到默认下载目录（无需用户手势/另存为对话框）。 */
function triggerBlobDownload(blob, filename) {
	if (typeof document === "undefined" || typeof URL === "undefined") return;
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.style.display = "none";
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
	setTimeout(() => {
		URL.revokeObjectURL(url);
	}, 15e3);
}
/**
* Config Manager 浏览器半的唯一数据入口。
* 同时实现 `ExportPort`（export-flow 用）与 `ImportPort`（import-wizard 用）。
*/
var ConfigManagerApi = class {
	/**
	* 加密备份密码（仅内存，默认 null = 普通备份）。
	* ExportView 在 run 前设置；export 请求体携带给 Host 半做 AES-256-GCM 加密。
	* 绝不写入 manifest / 任何 DSH 配置 / localStorage。
	*/
	exportPassword = null;
	/** 客户端展示层翻译器（zh 源 / en 镜像，见 ui/i18n.ts）。 */
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** 健康/版本检查（主页横幅：插件版本 / DSH 版本 / 平台） */
	async status() {
		return readJson$6(await fetch(CONFIG_MANAGER_API.status), this.t);
	}
	/** Star 引导弹窗状态（进入页面时判定是否展示 / 是否补记首次使用时间）。 */
	async starPromptStatus() {
		return readJson$6(await fetch(CONFIG_MANAGER_API.starPrompt), this.t);
	}
	/** P2-⑫：导出前只读预览（不落盘 ZIP）——「将打包 X 分区 / Y 条目 / 约 Z 大小」。 */
	async exportPreview(only) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.exportPreview, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ only })
		}), this.t);
	}
	/** 保存 Star 引导弹窗状态（局部更新：firstSeenAt / dismissed / clicked）。
	* 纯偏好无 secret；失败由调用方静默降级（本次不弹/不记，下次再判）。 */
	async saveStarPrompt(patch) {
		const body = {};
		if (patch.firstSeenAt !== void 0) body.firstSeenAt = patch.firstSeenAt;
		if (patch.dismissed === true) body.dismissed = true;
		if (patch.clicked === true) body.clicked = true;
		return readJson$6(await fetch(CONFIG_MANAGER_API.starPrompt, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		}), this.t);
	}
	/** 更新内容弹窗状态（进入页面时判定是否展示 / 是否已永不提示）。 */
	async releaseNotesPromptStatus() {
		return readJson$6(await fetch(CONFIG_MANAGER_API.releaseNotesPrompt), this.t);
	}
	/** 保存更新内容弹窗状态（局部更新：lastSeenVersion / dismissed）。 */
	async saveReleaseNotesPrompt(patch) {
		const body = {};
		if (patch.lastSeenVersion !== void 0) body.lastSeenVersion = patch.lastSeenVersion;
		if (patch.dismissed === true) body.dismissed = true;
		return readJson$6(await fetch(CONFIG_MANAGER_API.releaseNotesPrompt, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		}), this.t);
	}
	/** ExportPort.export：调用 Host 侧导出编排（core Exporter）。加密密码随请求体传输（仅内存）。
	* 带 AbortController 超时：宿主若卡死，客户端得到明确错误而不是永远停在进度条。 */
	async export(options) {
		const body = {
			...options,
			password: this.exportPassword ?? void 0
		};
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), EXPORT_TIMEOUT_MS);
		try {
			return await readJson$6(await fetch(CONFIG_MANAGER_API.export, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(body),
				signal: controller.signal
			}), this.t);
		} catch (err) {
			if (controller.signal.aborted) throw new ConfigManagerApiError(this.t("error.exportTimeout", { minutes: String(Math.round(EXPORT_TIMEOUT_MS / 6e4)) }));
			throw err;
		} finally {
			clearTimeout(timer);
		}
	}
	/**
	* 把导出的 ZIP 下载到本机。
	* - 默认（saveDialog 缺省/false）：读取为 Blob 后用 <a download> 触发浏览器
	*   静默下载到「下载」目录，无需用户额外操作（导出完成即可自动调用）；
	* - saveDialog: true：优先 File System Access API 流式落盘（不占整文件内存），
	*   用户可在系统保存对话框中选择位置；不可用/取消时回退 Blob 下载。
	*/
	async download(zipPath, opts, onProgress) {
		const response = await fetch(CONFIG_MANAGER_API.download + query({ path: zipPath }));
		if (!response.ok || response.body === null) {
			const text = await response.text().catch(() => "");
			throw new ConfigManagerApiError(text !== "" ? text : this.t("error.downloadFailed", { status: String(response.status) }));
		}
		const total = Number(response.headers.get("content-length") ?? "0");
		const disposition = response.headers.get("content-disposition") ?? "";
		const filename = /filename="([^"]+)"/.exec(disposition)?.[1] ?? zipPath.split(/[\\/]/).pop() ?? "dsh-config.zip";
		const reader = response.body.getReader();
		const usePicker = opts?.saveDialog === true && typeof window !== "undefined" && window.showSaveFilePicker !== void 0;
		let writable;
		const chunks = [];
		let received = 0;
		if (usePicker) try {
			writable = await (await window.showSaveFilePicker.call(window, { suggestedName: filename })).createWritable();
		} catch {
			writable = void 0;
		}
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			if (writable !== void 0) await writable.write(value);
			else chunks.push(value);
			received += value.length;
			onProgress?.(received, total);
		}
		if (writable !== void 0) {
			await writable.close();
			return {
				blob: void 0,
				filename,
				streamed: true,
				bytes: received
			};
		}
		const blob = new Blob(chunks);
		triggerBlobDownload(blob, filename);
		return {
			blob,
			filename,
			streamed: false,
			bytes: received
		};
	}
	/** 上传用户选择的 ZIP 到 Host 受控临时目录，返回可引用的 zipPath（dsh-ssh 同款原始字节上传） */
	async upload(file) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.upload + query({ name: file.name }), {
			method: "POST",
			body: file
		}), this.t);
	}
	/** ImportPort.analyzeImport：零写入分析（校验/兼容性/差异/路径/秘密检测） */
	async analyzeImport(zipPath) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.analyze, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ zipPath })
		}), this.t);
	}
	/** ImportPort.createImportPlan：用用户决策（冲突/路径映射/策略）生成最终计划（Dry Run 零写入） */
	async createImportPlan(zipPath, decisions) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.plan, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				zipPath,
				decisions
			})
		}), this.t);
	}
	/** ImportPort.decryptArchive：解锁整体加密备份容器 → 明文 ZIP 路径 + 解密覆盖的凭据 ref 名 */
	async decryptArchive(zipPath, password) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.decryptArchive, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				zipPath,
				password
			})
		}), this.t);
	}
	/** ImportPort.executeImportPlan：快照→分阶段 apply→validate→commit/rollback */
	async executeImportPlan(zipPath, plan, opts) {
		const payload = {
			zipPath,
			plan,
			opts: {
				confirm: opts.confirm,
				secretInputs: opts.secretInputs ?? {},
				rollbackOnError: opts.rollbackOnError,
				decryptPassword: opts.decryptPassword
			}
		};
		return readJson$6(await fetch(CONFIG_MANAGER_API.execute, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(payload)
		}), this.t);
	}
	/** m1：查询单个 run 的实时状态（执行中轮询 / 刷新恢复用；404 = 已过保留期或不存在） */
	async progress(runId) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.progress + query({ runId })), this.t);
	}
	/** m1：列出当前活跃（running）的 run（刷新后重新订阅进行中任务的入口） */
	async runs() {
		return readJson$6(await fetch(CONFIG_MANAGER_API.runs), this.t);
	}
	/** 导入中「跳过当前插件」：宿主 abort 当前计划项的中止控制器（kill 子进程 + 清半装状态）。
	* 404 = run 不在执行（已完成/无进行中导入）。 */
	async skipExecute(runId) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.skipExecute, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ runId })
		}), this.t);
	}
	/** 列出全部快照元信息（createdAt 倒序；含 status/条目数/宿主文件数/插件数） */
	async snapshots() {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.snapshots), this.t)).snapshots;
	}
	/** 快照恢复：dryRun=true 只取动作计划（零写入）；false 执行并返回诚实报告 */
	async restoreSnapshot(snapshotId, dryRun) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.restore, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				snapshotId,
				dryRun
			})
		}), this.t);
	}
	/** P1-⑧：手动删除单个快照（危险操作：该导入前回滚点不可恢复；`removed` 为是否实际删除）。 */
	async deleteSnapshot(snapshotId) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.snapshotDelete, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ snapshotId })
		}), this.t);
	}
	/** P1-⑧：置顶/取消置顶快照（置顶快照豁免自动保留清理，只能手动删除）。 */
	async setSnapshotPinned(snapshotId, pinned) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.snapshotPin, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				snapshotId,
				pinned
			})
		}), this.t);
	}
	/** 列出全部 Profile（name/createdAt/updatedAt/sections/fileCount）。 */
	async profilesList() {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.profiles), this.t)).profiles;
	}
	/** 保存当前 DSH 配置为新 Profile（天然不含秘密值）。 */
	async profileSave(name, sections) {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.profilesSave, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				name,
				sections
			})
		}), this.t)).profile;
	}
	/** 删除 Profile（危险操作：该组配置快照不可恢复）。 */
	async profileDelete(name) {
		await readJson$6(await fetch(CONFIG_MANAGER_API.profilesDelete, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ name })
		}), this.t);
	}
	/** 重命名 Profile（目录级移动）。 */
	async profileRename(name, newName) {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.profilesRename, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				name,
				newName
			})
		}), this.t)).profile;
	}
	/** 切换前预览（只读，零写入）：分析切换到该 Profile 会产生的计划项。 */
	async profileAnalyzeSwitch(name) {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.profilesAnalyzeSwitch, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ name })
		}), this.t)).preview;
	}
	/** 执行切换（confirm=true 安全阀；走快照 + 分阶段 apply + 失败回滚；响应含 runId）。 */
	async profileExecuteSwitch(name, opts) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.profilesExecuteSwitch, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				name,
				confirm: true,
				...opts
			})
		}), this.t);
	}
	/** 导入 Profile（content = profile.json 字符串；asName 可选覆盖目标名）。 */
	async profileImport(content, asName) {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.profilesImport, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				content,
				...asName !== void 0 ? { asName } : {}
			})
		}), this.t)).profile;
	}
	/** 读取定时备份配置（enabled / interval / 上次运行状态；无敏感字段）。 */
	async backupSchedule() {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.backupSchedule), this.t)).schedule;
	}
	/** 保存定时备份设置（enabled + interval）；Host 校验后原子写 + 重排调度器。 */
	async saveBackupSchedule(draft) {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.backupSchedule, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(draft)
		}), this.t)).schedule;
	}
	/** 立即执行一次全量备份（复用调度器 runOnce，防重；返回执行结果 + 最新配置）。 */
	async runBackupNow() {
		return readJson$6(await fetch(CONFIG_MANAGER_API.backupScheduleRun, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({})
		}), this.t);
	}
	/** 列出导出目录（exports/*.zip）下的全部备份文件（时间倒序；含来源 auto/manual）。 */
	async listBackupFiles() {
		return (await readJson$6(await fetch(CONFIG_MANAGER_API.backupFiles), this.t)).files;
	}
	/** 删除一个备份文件（危险操作：不可恢复；仅限 exports 目录内 .zip）。 */
	async deleteBackupFile(name) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.backupFilesDelete, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ name })
		}), this.t);
	}
	/** 迁移前咨询（只读健康评分 + 建议）：对 4 种可迁移源生成统一咨询报告。 */
	async consult(input) {
		return readJson$6(await fetch(CONFIG_MANAGER_API.consult, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(input)
		}), this.t);
	}
	/** 「查看备份内容」：对 exports 目录内的备份文件做只读分析（reuse /analyze，零写入）。
	*  返回分析 + 与当前配置的差异计划摘要（"装/导这个备份会动你什么"）。 */
	async inspectBackup(zipPath) {
		return {
			analysis: await this.analyzeImport(zipPath),
			plan: await this.createImportPlan(zipPath, {
				strategy: "merge",
				resolutions: {},
				pathMappings: []
			})
		};
	}
};
//#endregion
//#region src/ui/conflict-view.ts
var ConflictCollector = class {
	plan;
	decisions = /* @__PURE__ */ new Map();
	constructor(plan) {
		this.plan = plan;
	}
	/** 需要用户决策的冲突项（kind === 'Conflict'） */
	get conflicts() {
		return this.plan.items.filter((i) => i.kind === "Conflict");
	}
	/** 设置某项决策；未出现在冲突列表中的 id 忽略并返回 false */
	resolve(itemId, resolution) {
		if (!this.conflicts.some((i) => i.id === itemId)) return false;
		this.decisions.set(itemId, resolution);
		return true;
	}
	/** 批量决策全部冲突项（keepCurrent / useImported）—— P0-③ 批量操作。
	*  返回实际决策的项数（= 当前冲突数）。与逐项 resolve 语义一致：
	*  未出现在冲突列表中的 id 不会进入决策表。 */
	resolveAll(resolution) {
		let applied = 0;
		for (const item of this.conflicts) {
			this.decisions.set(item.id, resolution);
			applied += 1;
		}
		return applied;
	}
	/** 单项当前决策（未决策返回 null） */
	decisionOf(itemId) {
		return this.decisions.get(itemId) ?? null;
	}
	/** 仍未解决（review 或未决策）的冲突项 */
	unresolved() {
		return this.conflicts.filter((i) => {
			const d = this.decisions.get(i.id);
			return d === void 0 || d === "review";
		});
	}
	get hasUnresolved() {
		return this.unresolved().length > 0;
	}
	/** 转 core 决策表（供 createImportPlan / executeImportPlan 使用） */
	toResolutions() {
		const out = {};
		for (const [id, res] of this.decisions) out[id] = res;
		return out;
	}
	/** 构造视图项列表（React 绑定用）：含当前/导入摘要占位 */
	viewItems() {
		return this.conflicts.map((item) => ({
			item,
			currentSummary: item.detail?.split("\n")[0],
			importedSummary: void 0,
			resolution: this.decisionOf(item.id)
		}));
	}
};
//#endregion
//#region src/ui/types.ts
/** Custom Export 分组目录（规范 §1；automation 组 DSH 无对应分区，仅说明） */
const EXPORT_GROUPS = [
	{
		id: "general",
		label: "General"
	},
	{
		id: "ai",
		label: "AI"
	},
	{
		id: "extensions",
		label: "Extensions"
	},
	{
		id: "mcp",
		label: "MCP / Tools"
	},
	{
		id: "customization",
		label: "Customization"
	},
	{
		id: "automation",
		label: "Automation",
		note: "DSH 当前无 Workflows / Commands 配置文件（运行时注册），无迁移内容"
	},
	{
		id: "workspace",
		label: "Workspace"
	},
	{
		id: "ui",
		label: "UI"
	},
	{
		id: "optional",
		label: "Optional Data"
	}
];
/** Quick Export 推荐项 = defaultIncluded 且非 deviceSpecific（设计 §11.1） */
function isQuickRecommended(c) {
	return c.defaultIncluded && c.portability !== "deviceSpecific";
}
//#endregion
//#region src/ui/progress.ts
/** 导出阶段文案（规范 §29 Export 示例） */
const EXPORT_STAGES = [
	"analyzing",
	"exporting-settings",
	"scanning-secrets",
	"exporting-plugins",
	"creating-archive",
	"calculating-checksums",
	"done"
];
/** 导入阶段文案（规范 §29 Import 示例 + 快照/回滚阶段） */
const IMPORT_STAGES$1 = [
	"validating",
	"checking-compatibility",
	"creating-snapshot",
	"restoring-settings",
	"restoring-plugins",
	"restoring-mcp",
	"validating-config",
	"rolling-back",
	"done"
];
/**
* 真实执行阶段（不在 IMPORT_STAGES 序列里，因此 step/total 缺省 → 进度条渲染
* 为不定态动画而非伪造百分比）。execute 是一个单次 HTTP 请求，Host 端串行
* 跑完全部计划项（其中插件安装是 npm 串行，耗时最长）；请求期间没有中间
* 进度事件可回传，旧实现把 restoring-settings / restoring-plugins /
* restoring-mcp / validating-config 在请求前全部预发，导致进度条瞬间跳到
* 78% 后长时间无变化——像卡死。现在统一在请求期间显示 'executing' 不定态，
* 让用户明确知道「仍在执行，请等待」。
*/
const EXECUTING_STAGE = "executing";
const STAGE_KEYS = {
	analyzing: "progress.analyzing",
	"exporting-settings": "progress.exportingSettings",
	"scanning-secrets": "progress.scanningSecrets",
	"exporting-plugins": "progress.exportingPlugins",
	"creating-archive": "progress.creatingArchive",
	"calculating-checksums": "progress.calculatingChecksums",
	exporting: "progress.exporting",
	validating: "progress.validating",
	"checking-compatibility": "progress.checkingCompatibility",
	"creating-snapshot": "progress.creatingSnapshot",
	"restoring-settings": "progress.restoringSettings",
	"restoring-plugins": "progress.restoringPlugins",
	"restoring-mcp": "progress.restoringMcp",
	"validating-config": "progress.validatingConfig",
	"rolling-back": "progress.rollingBack",
	executing: "progress.executing",
	done: "progress.done"
};
/** 阶段 id → 用户可读文案（未知阶段回退 id） */
function stageText(stage, t = zhUiT) {
	const key = STAGE_KEYS[stage];
	return key !== void 0 ? t(key) : stage;
}
/**
* 进度追踪器：按给定阶段序列在回调时附带 step/total 序号。
* 控制器调用 core 前后 emit()，UI 侧渲染进度条/阶段文字。
*/
var ProgressTracker = class {
	listener;
	stages;
	emitted = [];
	constructor(stages, listener) {
		this.stages = stages;
		this.listener = listener;
	}
	/** 发出某阶段事件（可携带 detail）；未在序列中的阶段 step/total 缺省 */
	emit(stage, detail) {
		const idx = this.stages.indexOf(stage);
		const event = {
			stage,
			detail,
			step: idx >= 0 ? idx + 1 : void 0,
			total: idx >= 0 ? this.stages.length : void 0
		};
		this.emitted.push(stage);
		this.listener?.(event);
	}
	/** 已发出阶段的快照（测试与日志用） */
	get events() {
		return [...this.emitted];
	}
};
//#endregion
//#region src/ui/report.ts
function renderExportReport(report, t = zhUiT) {
	const lines = [t("report.backupCreated"), ""];
	lines.push(t("report.included"));
	for (const { section, counts } of report.included) {
		const detail = Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(", ");
		lines.push(`  ✓ ${section}${detail !== "" ? ` (${detail})` : ""}`);
	}
	lines.push("");
	if (report.excluded.length > 0) {
		lines.push(t("report.excluded"));
		for (const s of report.excluded) lines.push(`  ○ ${s}`);
		lines.push("");
	}
	lines.push(t("report.security"));
	lines.push(`  ✓ ${t("report.apiKeysExcluded")} ${report.security.secretsExcluded ? t("report.yes") : t("report.no")}`);
	lines.push(`  ✓ ${t("report.containsSecrets")} ${report.security.containsSecrets ? t("report.yesEncrypted") : t("report.no")}`);
	lines.push(`  ✓ ${t("report.encrypted")} ${report.security.encrypted ? t("report.yes") : t("report.no")}`);
	if (report.security.redactedHits > 0) lines.push(`  ⚠ ${t("report.redacted", { count: String(report.security.redactedHits) })}`);
	lines.push("");
	lines.push(`${t("report.file")} ${report.file.name} (${formatBytes$1(report.file.sizeBytes)})`);
	for (const w of report.warnings) lines.push(`  ⚠ ${w}`);
	return lines.join("\n");
}
/** 从 itemId 前缀推断所属分区（与 adapters id 规则对齐；未知归 'other'） */
function sectionFromItemId(itemId) {
	if (itemId.startsWith("settings:")) return "settings";
	if (itemId.startsWith("ui:")) return "ui";
	if (itemId.startsWith("provider:")) return "providers";
	if (itemId.startsWith("plugin:") || itemId.startsWith("patch:")) return "plugins";
	if (itemId.startsWith("mcp:")) return "mcp";
	if (itemId.startsWith("prompt:")) return "prompts";
	if (itemId.startsWith("workspace:")) return "workspaces";
	if (itemId.startsWith("secret:")) return "credentialsStatus";
	if (itemId.startsWith("skills:")) return "skills";
	if (itemId.startsWith("agentPresets:")) return "agentPresets";
	if (itemId.startsWith("agentInstructions:")) return "agentInstructions";
	if (itemId.startsWith("pluginFiles:")) return "pluginFiles";
	if (itemId.startsWith("sessions:")) return "sessions";
	return "other";
}
/** 按分区聚合执行结果（统计 + 明细） */
function importSectionStats(executed) {
	const bySection = /* @__PURE__ */ new Map();
	for (const e of executed) {
		const section = sectionFromItemId(e.itemId);
		let stat = bySection.get(section);
		if (!stat) {
			stat = {
				section,
				ok: 0,
				skipped: 0,
				warned: 0,
				failed: 0,
				items: []
			};
			bySection.set(section, stat);
		}
		if (e.status === "ok") stat.ok += 1;
		else if (e.status === "skipped") stat.skipped += 1;
		else if (e.status === "warning") stat.warned += 1;
		else stat.failed += 1;
		stat.items.push(e);
	}
	return [...bySection.values()];
}
/** 导入报告渲染（含回滚状态；§22 动作按钮由 suggestedActions 给出） */
function renderImportReport(result, t = zhUiT) {
	const lines = [result.ok ? t("report.importComplete") : t("report.importFailed"), ""];
	if ((result.skippedTombstoned?.length ?? 0) > 0) {
		lines.push(t("report.tombstonedSkipped", { count: String(result.skippedTombstoned.length) }));
		lines.push("");
	}
	const stats = importSectionStats(result.executed);
	for (const s of stats) {
		const parts = [];
		if (s.ok > 0) parts.push(`✓ ${s.ok} ${t("report.importedRestored")}`);
		if (s.skipped > 0) parts.push(`- ${s.skipped} ${t("report.skipped")}`);
		if (s.warned > 0) parts.push(`⚠ ${s.warned} ${t("report.needAttention")}`);
		if (s.failed > 0) parts.push(`✗ ${s.failed} ${t("report.failed")}`);
		lines.push(`${s.section}: ${parts.join(" ") || t("report.noChanges")}`);
		for (const it of s.items) if (it.status === "failed" || it.status === "warning") lines.push(`  ${it.status === "failed" ? t("report.reason") : t("report.note")}: ${it.message ?? t("report.unknownReason")}`);
	}
	if (result.missingSecrets.length > 0) lines.push(`${t("report.secrets")} ⚠ ${t("report.credentialsNeedEntry", { count: String(result.missingSecrets.length) })}`);
	if (result.needsRestart) lines.push(t("report.restartPluginsMcp"));
	for (const w of result.warnings) lines.push(`⚠ ${w}`);
	if (result.rollback) {
		lines.push("");
		lines.push(renderRollbackReport(result.rollback, t));
	}
	return lines.join("\n");
}
/** 结果页动作按钮（§22）。报告已内联展示全部失败/警告项的原因与回滚详情（§23），
* 不再提供空操作的 Fix Issues / View Details 按钮——仅保留「完成」。 */
function suggestedActions(_result) {
	return ["done"];
}
/** 回滚报告渲染（full / partial + 人工恢复清单） */
function renderRollbackReport(rr, t = zhUiT) {
	if (rr.full) return t("report.rollbackFull");
	const lines = [t("report.rollbackPartial")];
	lines.push(t("report.rollbackManual"));
	for (const f of rr.failed) lines.push(`  - ${f.item}: ${f.reason}${f.manualHint ? ` (${f.manualHint})` : ""}`);
	if (rr.restored.length > 0) lines.push(t("report.restored", { count: String(rr.restored.length) }));
	return lines.join("\n");
}
function formatBytes$1(n) {
	if (n < 1024) return `${n} B`;
	if (n < 1048576) return `${(n / 1024).toFixed(1)} KB`;
	return `${(n / 1048576).toFixed(1)} MB`;
}
//#endregion
//#region src/ui/export-flow.ts
/**
* 自定义导出文件名的归一化（P0-④ 体验优化）：无需用户手动输入 `.zip`。
* - trim 首尾空白；空串 → ''（宿主自动命名）；
* - 非空且未以 `.zip` 结尾 → 自动补全 `.zip`（大小写不敏感判定，统一补小写后缀）；
* - 已以 `.zip` 结尾 → 原样返回（含首字符为字母数字的校验由调用方/宿主把关）。
*/
function normalizeExportFileName(raw) {
	const trimmed = raw.trim();
	if (trimmed === "") return "";
	return /\.zip$/i.test(trimmed) ? trimmed : `${trimmed}.zip`;
}
/** 内置分类目录（与 src/adapters/* 的 displayName/defaultIncluded/portability 对齐，研究报告 §2.2） */
const DEFAULT_CATEGORIES = [
	{
		id: "settings",
		label: "Settings",
		description: "DSH 全局设置（namespace 分区，redacted）",
		defaultIncluded: true,
		portability: "portable",
		group: "general"
	},
	{
		id: "providers",
		label: "Providers & Models",
		description: "LLM Provider / Model / 默认模型 / BaseURL",
		defaultIncluded: true,
		portability: "portable",
		group: "ai"
	},
	{
		id: "plugins",
		label: "Plugins",
		description: "已安装插件清单与启用状态（不含二进制）",
		defaultIncluded: true,
		portability: "portable",
		group: "extensions"
	},
	{
		id: "pluginFiles",
		label: "Plugin Files",
		description: "插件自有配置文件（白名单 + plugin-config/ 目录，整文件复制）",
		defaultIncluded: false,
		portability: "deviceSpecific",
		group: "extensions"
	},
	{
		id: "self",
		label: "Plugin Self Config",
		description: "本插件自身配置（同步/自动同步/分区选择/UI 偏好/市场；sync-*.json 等，不含凭据值）",
		defaultIncluded: true,
		portability: "portable",
		group: "extensions"
	},
	{
		id: "mcp",
		label: "MCP Servers",
		description: "MCP 服务器组合配置（需重启生效）",
		defaultIncluded: true,
		portability: "platformSpecific",
		group: "mcp"
	},
	{
		id: "prompts",
		label: "Prompts",
		description: "System Prompt / Plan Mode 提示",
		defaultIncluded: true,
		portability: "portable",
		group: "customization"
	},
	{
		id: "skills",
		label: "Skills",
		description: "用户技能文件（~/.dsh/skills）",
		defaultIncluded: true,
		portability: "portable",
		group: "customization"
	},
	{
		id: "agentPresets",
		label: "Agent Presets",
		description: "Agent 预设（~/.dsh/.agent-presets）",
		defaultIncluded: true,
		portability: "portable",
		group: "customization"
	},
	{
		id: "agentInstructions",
		label: "Agent Instructions",
		description: "全局指令文件（~/.dsh/AGENTS.md，注入每个会话）",
		defaultIncluded: true,
		portability: "portable",
		group: "customization"
	},
	{
		id: "workspaces",
		label: "Workspaces",
		description: "工作区记录（含绝对路径，需路径映射）",
		defaultIncluded: true,
		portability: "platformSpecific",
		group: "workspace"
	},
	{
		id: "ui",
		label: "UI Preferences",
		description: "UI 类 settings namespace（localStorage 项仅说明）",
		defaultIncluded: true,
		portability: "portable",
		group: "ui"
	},
	{
		id: "credentialsStatus",
		label: "Credentials Status",
		description: "凭据状态（configured 标记，永不导出值）",
		defaultIncluded: true,
		portability: "deviceSpecific",
		group: "optional",
		sensitive: true
	},
	{
		id: "sessions",
		label: "Sessions",
		description: "历史会话（默认关闭，含敏感内容）",
		defaultIncluded: false,
		portability: "deviceSpecific",
		group: "optional"
	}
];
var ExportFlow = class {
	categories;
	port;
	onProgress;
	t;
	constructor(opts) {
		this.port = opts.port;
		this.categories = opts.categories ?? DEFAULT_CATEGORIES;
		this.onProgress = opts.onProgress;
		this.t = opts.t ?? zhUiT;
	}
	/** Quick Export 推荐分区（defaultIncluded 且非 deviceSpecific） */
	quickSelection() {
		return this.categories.filter(isQuickRecommended).map((c) => c.id);
	}
	/** 按 §1 分组返回分类目录（Custom Export 树） */
	groupedCatalog() {
		return EXPORT_GROUPS.map((g) => ({
			group: g.id,
			label: g.label,
			note: g.note,
			categories: this.categories.filter((c) => c.group === g.id)
		}));
	}
	/** 校验 Custom 勾选：未知分区 = invalid；deviceSpecific 分区给提示警告（仍可继续） */
	validateSelection(selection) {
		const warnings = [];
		let valid = true;
		const known = new Set(this.categories.map((c) => c.id));
		for (const id of selection) if (!known.has(id)) {
			warnings.push(`未知分区：${id}`);
			valid = false;
		}
		for (const c of this.categories) if (selection.includes(c.id) && c.portability === "deviceSpecific") warnings.push(`${c.label} 为设备相关数据（${c.portability}），跨设备导入时可能不适用`);
		return {
			valid,
			warnings
		};
	}
	/** 执行导出：发进度事件 → 调 core → 渲染 §21 报告 */
	async run(mode, selection, opts = {}) {
		const tracker = new ProgressTracker(EXPORT_STAGES, this.onProgress);
		const only = mode === "quick" ? this.quickSelection() : [...selection];
		if (mode === "quick" && opts.includeSecrets === void 0) opts = {
			...opts,
			includeSecrets: false
		};
		tracker.emit("exporting");
		const result = await this.port.export({
			includeSecrets: opts.includeSecrets ?? false,
			only,
			...opts.fileName !== void 0 && opts.fileName !== "" ? { outPath: opts.fileName } : {},
			...opts.note !== void 0 ? { note: opts.note } : {}
		});
		tracker.emit("done");
		return {
			...result,
			text: renderExportReport(result.report, this.t)
		};
	}
};
//#endregion
//#region src/security/secret-scanner.ts
/**
* 敏感字段名单（规范化名：小写、无分隔符）。
* 覆盖规范 §6 原始清单 + 设计 §7.2 + core logger 名单，并保持克制以防误伤
* （不收录 `key`/`session` 等过宽子串——`sessionIds`/`monkey` 不得中招）。
*/
const DEFAULT_SECRET_FIELD_NAMES = [
	"password",
	"passwd",
	"token",
	"accesstoken",
	"refreshtoken",
	"apikey",
	"secret",
	"credential",
	"authorization",
	"cookie",
	"privatekey",
	"clientsecret",
	"pwd",
	"passphrase",
	"authtoken",
	"sessionkey",
	"apisecret",
	"authheader",
	"bearer",
	"webhooksecret"
];
/** 敏感后缀（规范化后以这些结尾 → 命中；`key` 故意不收，避免 monkey/whiskey 误伤） */
const SENSITIVE_SUFFIXES = [
	"token",
	"secret",
	"password",
	"passwd",
	"credential"
];
/** 敏感前缀（规范化后以这些开头 → 命中；token/secret 等过宽词不收入） */
const SENSITIVE_PREFIXES = [
	"apikey",
	"accesstoken",
	"refreshtoken",
	"authtoken",
	"clientsecret",
	"privatekey",
	"authorization",
	"authheader",
	"webhooksecret",
	"apisecret"
];
/** 规范化字段名：小写 + 去 `_-. ` 分隔符（用于名单匹配） */
function normalizeFieldName(name) {
	return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}
/** 字段名是否命中敏感名单（规范化后精确 / 敏感后缀 / 敏感前缀） */
function isSensitiveFieldName(field, extra = []) {
	const norm = normalizeFieldName(field);
	if (norm === "") return false;
	if ([...DEFAULT_SECRET_FIELD_NAMES, ...extra].includes(norm)) return true;
	if (SENSITIVE_SUFFIXES.some((s) => norm.endsWith(s) && norm.length > s.length)) return true;
	return SENSITIVE_PREFIXES.some((p) => norm.startsWith(p));
}
//#endregion
//#region src/security/redaction.ts
/**
* 日志/文本脱敏（规范 §24 / 设计 §9.8 / core utils/logger.ts 的强化层）。
*
* 与 core logger.redact 的分工：core 版按固定字段名单做子串替换（不感知字段边界）；
* 本模块为强化版，两模式：
*  1. **结构化字段形态**：JSON `"field": "value"` / `field=value` / `field: value`，
*     字段名命中敏感名单（复用 secret-scanner 的 `isSensitiveFieldName`，单一来源防漂移）→ 值替换。
*  2. **值形状模式**：与字段名无关，文本任意位置出现 sk- / JWT / AKIA / GitHub PAT /
*     PEM 私钥 / Bearer / URL query 的敏感参数值 → 替换。
*
* 幂等性：替换产物 `***REDACTED***` 不匹配任何模式，重复 redact 结果不变；
* JSON 行的引号结构保留（输出仍是合法 JSON）。
*/
const REDACTED = "***REDACTED***";
const JSON_FIELD_RE = /"([A-Za-z0-9_.\-]+)"\s*:\s*"([^"]*)"/g;
/** kv 值到空白/逗号/分号/&（& 截断：避免吞掉 URL query 的后续参数） */
const KV_FIELD_RE = /([A-Za-z0-9_.\-]+)\s*=\s*([^\s,;&]+)/g;
/** colon 值允许空格（如 `Authorization: Bearer xyz`），到逗号/分号/右大括号截断 */
const COLON_FIELD_RE = /([A-Za-z0-9_.\-]+)\s*:\s*([^,;}]+)/g;
const VALUE_PATTERNS = [
	{
		name: "openai-key",
		re: /sk-[A-Za-z0-9_-]{8,}/g
	},
	{
		name: "jwt",
		re: /eyJ[A-Za-z0-9_-]{8,}\.eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/g
	},
	{
		name: "aws-access-key",
		re: /AKIA[0-9A-Z]{16}/g
	},
	{
		name: "github-token",
		re: /gh[pousr]_[A-Za-z0-9]{20,}/g
	},
	{
		name: "github-pat",
		re: /github_pat_[A-Za-z0-9_]{20,}/g
	},
	{
		name: "pem-private-key",
		re: /-----BEGIN [A-Za-z0-9 ]*PRIVATE KEY-----/g
	},
	{
		name: "bearer-token",
		re: /Bearer [A-Za-z0-9._~+/=-]{8,}/g
	}
];
/** URL query 中的敏感参数值（保留参数名，只替换值） */
const URL_QUERY_RE = /([?&](?:token|api[_-]?key|key|secret|access[_-]?token|password|auth)=)([^&\s"']+)/gi;
function replaceSensitiveField(text, re, blacklist) {
	return text.replace(re, (match, field, value) => {
		if (!isSensitiveFieldName(field, blacklist)) return match;
		if (value === "") return match;
		const idx = match.lastIndexOf(value);
		return match.slice(0, idx) + REDACTED + match.slice(idx + value.length);
	});
}
/**
* 文本脱敏（幂等）。blacklist 为**附加**规范化字段名（小写无分隔符，如 'clientsecret'）。
* 输出仍保留结构化形态（JSON 行合法）。
*/
function redact(text, blacklist = []) {
	let out = text;
	out = replaceSensitiveField(out, JSON_FIELD_RE, blacklist);
	out = replaceSensitiveField(out, KV_FIELD_RE, blacklist);
	out = replaceSensitiveField(out, COLON_FIELD_RE, blacklist);
	for (const { re } of VALUE_PATTERNS) {
		re.lastIndex = 0;
		out = out.replace(re, REDACTED);
	}
	out = out.replace(URL_QUERY_RE, `$1${REDACTED}`);
	return out;
}
//#endregion
//#region src/ui/errors.ts
/**
* 可操作错误模型（规范 §23，m6-ui）。
*
* 绝不只有 "Something went wrong."：
*  - 解析错误 → Reason + Suggested action（可操作）；
*  - 输出前强制脱敏（redact），Secret 永不进入 UI/日志；
*  - 文案经 UiT 注入（zh 源 / en 镜像，见 i18n.ts）。
*/
function buildErrorRules(t) {
	return [
		{
			match: (m) => /SETTINGS_CONFLICT|revision.*conflict/i.test(m),
			title: t("error.settingsConflict.title"),
			suggestedAction: t("error.settingsConflict.action"),
			retryable: true
		},
		{
			match: (m) => /ImportNotConfirmed|未确认/i.test(m),
			title: t("error.notConfirmed.title"),
			suggestedAction: t("error.notConfirmed.action"),
			retryable: true
		},
		{
			match: (m) => /backup integrity|完整性校验失败|checksum/i.test(m),
			title: t("error.integrity.title"),
			suggestedAction: t("error.integrity.action"),
			retryable: false
		},
		{
			match: (m) => /schema.*(不支持|超出)|无法导入|Unsupported|schemaUnsupported|无法导入/i.test(m),
			title: t("error.schema.title"),
			suggestedAction: t("error.schema.action"),
			retryable: false
		},
		{
			match: (m) => /ENOENT|not found|无法读取|不存在|readFailed/i.test(m),
			title: t("error.notFound.title"),
			suggestedAction: t("error.notFound.action"),
			retryable: true
		},
		{
			match: (m) => /EACCES|permission|权限/i.test(m),
			title: t("error.permission.title"),
			suggestedAction: t("error.permission.action"),
			retryable: true
		},
		{
			match: (m) => /install.*(plugin|插件)|needsRestart|重启/i.test(m),
			title: t("error.needsRestart.title"),
			suggestedAction: t("error.needsRestart.action"),
			retryable: false
		}
	];
}
/** 将任意错误转换为可操作错误（消息已脱敏，不泄漏 Secret） */
function toActionableError(err, opts) {
	const t = opts?.t ?? zhUiT;
	const message = redact(err instanceof Error ? err.message : String(err ?? t("commonUnknownError")));
	const rule = buildErrorRules(t).find((r) => r.match(message));
	return {
		title: rule?.title ?? opts?.fallbackTitle ?? t("error.fallback"),
		reason: message,
		suggestedAction: rule?.suggestedAction,
		item: opts?.item !== void 0 ? redact(opts.item) : void 0,
		retryable: rule?.retryable ?? true
	};
}
/** 格式化为用户可读的多行文本（Reason / Suggested action） */
function formatActionableError(e, t = zhUiT) {
	const lines = [e.title];
	lines.push(`${t("error.reason")}: ${e.reason}`);
	if (e.suggestedAction) lines.push(`${t("error.suggestedAction")}: ${e.suggestedAction}`);
	if (e.item) lines.push(`${t("error.item")}: ${e.item}`);
	return lines.join("\n");
}
//#endregion
//#region src/ui/import-wizard.ts
var ImportWizard = class {
	port;
	onProgress;
	tracker;
	step = "select";
	zipPath = null;
	analysis = null;
	plan = null;
	result = null;
	rollbackOnError;
	errors = [];
	decisions = {
		strategy: "merge",
		resolutions: {},
		pathMappings: []
	};
	secretInputs = {};
	/** 加密备份的解密密码（仅内存，绝不持久化；刷新后要求重输） */
	decryptPassword = "";
	/** 整体加密备份容器是否已解锁（upload 探测到 encrypted 容器后为 false；unlockArchive 成功后为 true） */
	archiveUnlocked = false;
	/**
	* 解锁后的明文 ZIP 路径（仅内存，绝不持久化；指向受控临时目录）。
	* decryptArchive 端点解出明文 ZIP 并返回新 zipPath，后续 analyze/plan/execute 都基于它。
	*/
	unlockedZipPath = null;
	constructor(opts) {
		this.port = opts.port;
		this.onProgress = opts.onProgress;
		this.tracker = new ProgressTracker(IMPORT_STAGES$1, this.onProgress);
		this.rollbackOnError = opts.defaultRollbackOnError ?? true;
	}
	/** 当前状态快照（React 绑定 / 测试断言用） */
	snapshot() {
		return {
			step: this.step,
			zipPath: this.zipPath,
			analysis: this.analysis,
			plan: this.plan,
			result: this.result,
			rollbackOnError: this.rollbackOnError,
			errors: [...this.errors]
		};
	}
	get currentStep() {
		return this.step;
	}
	/**
	* 解析「当前应传给 analyze/plan/execute 的 ZIP 路径」：
	* - 已解锁的整体加密容器 → 用解密后的明文 ZIP 路径；
	* - 否则 → 直接上传/传入的路径。
	*/
	resolvedZipPath() {
		return this.archiveUnlocked && this.unlockedZipPath !== null ? this.unlockedZipPath : this.zipPath;
	}
	/**
	* 设置整体加密备份容器是否为 encrypted（upload 探测结果；仅内存）。
	* 调用方先在解密阶段展示密码输入，成功后调用 unlockArchive。
	* 传入 zipPath 时同步记录容器路径（供 unlockArchive/selectZip 引用，
	* 避免 syncWizard 把 store 中已 patch 的 zipPath 覆盖回 null）。
	*/
	setArchiveEncrypted(encrypted, zipPath) {
		this.archiveUnlocked = !encrypted;
		if (encrypted && zipPath !== void 0) this.zipPath = zipPath;
		this.unlockedZipPath = null;
	}
	/**
	* 解锁整体加密备份容器（只读，零写入）：用备份密码解密上传的容器 → 明文 ZIP。
	* 成功后 archiveUnlocked=true；之后 analyze/plan/execute 基于解密后的 ZIP 路径。
	* 返回明文 ZIP 路径与解密覆盖的凭据 ref 名（导出时容器密码与 secrets.enc 密码
	* 同源，解锁即完成凭据解密验证）——导入全程只需输入这一次密码。
	*/
	async unlockArchive(encryptedPath, password) {
		this.zipPath = encryptedPath;
		const { zipPath, refs } = await this.port.decryptArchive(encryptedPath, password);
		this.unlockedZipPath = zipPath;
		this.archiveUnlocked = true;
		return {
			zipPath,
			refs
		};
	}
	/** 步骤 1-2：选 ZIP → Analyzing → Compatibility（analyzeImport 零写入） */
	async selectZip(path) {
		this.zipPath = path;
		this.step = "analyzing";
		this.tracker.emit("validating");
		this.errors = [];
		try {
			this.analysis = await this.port.analyzeImport(this.resolvedZipPath());
			this.tracker.emit("checking-compatibility");
			if (!this.analysis.valid) {
				this.errors.push(...this.analysis.errors.map((e) => formatActionableError(toActionableError(new Error(e)))));
				throw new Error(this.analysis.errors.join("; ") || "备份分析失败");
			}
			this.step = "compatibility";
			return this.analysis;
		} catch (err) {
			if (this.errors.length === 0) this.errors.push(formatActionableError(toActionableError(err)));
			throw err;
		}
	}
	/** 步骤 3→4：用户确认兼容性后进入 Preview（Dry Run：用当前决策生成计划摘要，零写入） */
	async confirmCompatibility() {
		if (this.analysis === null || this.zipPath === null) throw new Error("尚未完成分析，请先选择备份文件");
		this.plan = await this.port.createImportPlan(this.resolvedZipPath(), this.decisions);
		this.step = "preview";
		return this.plan;
	}
	/** 更新全局冲突策略（merge/replace/skipExisting，规范 §11） */
	setStrategy(strategy) {
		this.decisions = {
			...this.decisions,
			strategy
		};
	}
	/** 设置逐项冲突决策（keepCurrent/useImported/review） */
	setResolutions(resolutions) {
		this.decisions = {
			...this.decisions,
			resolutions
		};
	}
	/** 设置路径映射（§12） */
	setPathMappings(mappings) {
		this.decisions = {
			...this.decisions,
			pathMappings: mappings
		};
	}
	/** 设置秘密补录值（仅内存，绝不持久化） */
	setSecretInputs(inputs) {
		this.secretInputs = inputs;
	}
	/** 设置加密备份的解密密码（仅内存，绝不持久化；导出密码不可复用，无明文存储） */
	setDecryptPassword(password) {
		this.decryptPassword = password;
	}
	/** Preview 摘要（规范 §10 数值化；基于当前 plan 与 analysis） */
	previewSummary() {
		const items = this.plan?.items ?? [];
		const analysis = this.analysis;
		const count = (kinds) => items.filter((i) => kinds.includes(i.kind)).length;
		return {
			willChange: count([
				"Create",
				"Update",
				"Install",
				"Conflict"
			]),
			unchanged: count(["Skip"]),
			settingsUpdates: count(["Create", "Update"]),
			pluginsInstalled: analysis?.pluginSummary.installed ?? 0,
			pluginsToInstall: count(["Install"]),
			mcpAdds: items.filter((i) => i.adapter === "mcp" && i.kind === "Create").length,
			prompts: items.filter((i) => i.adapter === "prompts" && i.kind !== "Skip").length,
			pathMappingsNeeded: analysis?.pathIssues.length ?? 0,
			secretsNeeded: this.plan?.missingSecrets.length ?? analysis?.secretCount ?? 0,
			conflicts: count(["Conflict"]),
			needsRestart: this.plan?.needsRestart ?? false
		};
	}
	/** 冲突项（供 ConflictCollector 使用） */
	conflictItems() {
		return (this.plan?.items ?? []).filter((i) => i.kind === "Conflict");
	}
	/** 设置回滚策略（场景 E 选择；执行前调用） */
	setRollbackOnError(enable) {
		this.rollbackOnError = enable;
	}
	/**
	* 步骤 10-14：确认导入 → 快照 → 执行 → 校验 → 结果。
	* 用最终决策重建计划（与预览一致），显式传 rollbackOnError。
	*/
	async execute(opts) {
		if (this.zipPath === null || this.analysis === null) throw new Error("尚未完成分析，请先选择备份文件");
		if (opts.confirm !== true) throw new Error("导入未确认：必须确认后才允许修改任何数据");
		const rollbackOnError = opts.rollbackOnError ?? this.rollbackOnError;
		this.step = "importing";
		this.tracker.emit("creating-snapshot");
		try {
			this.plan = await this.port.createImportPlan(this.resolvedZipPath(), this.decisions);
			this.tracker.emit(EXECUTING_STAGE);
			this.result = await this.port.executeImportPlan(this.resolvedZipPath(), this.plan, {
				confirm: true,
				secretInputs: this.secretInputs,
				rollbackOnError,
				decryptPassword: this.decryptPassword === "" ? void 0 : this.decryptPassword
			});
			if (!this.result.ok && this.result.rollback) this.tracker.emit("rolling-back");
			this.tracker.emit("done");
			this.step = "result";
			return this.result;
		} catch (err) {
			this.errors.push(formatActionableError(toActionableError(err)));
			throw err;
		}
	}
	/** 可重试项计数：执行失败（failed）或用户跳过（skippedByUser）的项。 */
	retryableCount() {
		return (this.result?.executed ?? []).filter((e) => e.status === "failed" || e.skippedByUser === true).length;
	}
	/** 可重试项 id 集合（与 result.executed 对齐；供 executeRetry 过滤计划）。 */
	retryableIds() {
		return new Set((this.result?.executed ?? []).filter((e) => e.status === "failed" || e.skippedByUser === true).map((e) => e.itemId));
	}
	/**
	* 步骤 10-14（重试版）：只重跑「失败 + 用户跳过」的子集计划（结果页「重试」按钮）。
	* - 复用已解析的最终计划（this.plan，含冲突决策/路径映射），过滤出可重试项；
	* - 仍走 executeImportPlan 全流程：快照 → 子集 apply → 校验 → 结果（幂等）；
	* - 已成功的项不重跑，不重建整体导入；secret 补录值仍沿用仅内存的 secretInputs。
	*/
	async executeRetry(opts) {
		if (this.plan === null || this.result === null) throw new Error("没有可重试的导入结果");
		const retryable = this.retryableIds();
		const subset = this.plan.items.filter((i) => retryable.has(i.id));
		if (subset.length === 0) throw new Error("没有失败或跳过的项需要重试");
		const rollbackOnError = opts.rollbackOnError ?? this.rollbackOnError;
		this.step = "importing";
		this.tracker.emit("creating-snapshot");
		try {
			this.tracker.emit(EXECUTING_STAGE);
			this.result = await this.port.executeImportPlan(this.resolvedZipPath(), {
				...this.plan,
				items: subset
			}, {
				confirm: true,
				secretInputs: this.secretInputs,
				rollbackOnError,
				decryptPassword: this.decryptPassword === "" ? void 0 : this.decryptPassword
			});
			if (!this.result.ok && this.result.rollback) this.tracker.emit("rolling-back");
			this.tracker.emit("done");
			this.step = "result";
			return this.result;
		} catch (err) {
			this.errors.push(formatActionableError(toActionableError(err)));
			throw err;
		}
	}
	/** 重置向导（可复用实例开始新导入） */
	reset() {
		this.step = "select";
		this.zipPath = null;
		this.analysis = null;
		this.plan = null;
		this.result = null;
		this.errors = [];
		this.decisions = {
			strategy: "merge",
			resolutions: {},
			pathMappings: []
		};
		this.secretInputs = {};
		this.decryptPassword = "";
		this.archiveUnlocked = false;
		this.unlockedZipPath = null;
	}
};
//#endregion
//#region src/client/sync/sync-view.ts
/**
* 私有仓库强制提示文案（Settings 区块常驻警示横幅）。
* 安全约束：同步内容为可移植配置，public 仓库会公开配置 → 必须私有；
* token 仅用于认证，绝不写入同步文件/提交内容/日志。
*/
function privateRepoHint(t = zhUiT) {
	return t("sync.privateRepoHint");
}
/** host 目录（SyncSectionInfo[]）→ UI 勾选项（保留 id 顺序）。
*  同步分区必为导出目录（DEFAULT_CATEGORIES）的可移植子集：分组/描述从导出目录
*  补充（单一事实源，与「导出备份·自定义模式」的目录保持一致），未命中 id 兜底。 */
function syncSectionOptions(info) {
	const meta = new Map(DEFAULT_CATEGORIES.map((c) => [c.id, c]));
	return info.map((s) => {
		const cat = meta.get(s.id);
		return {
			id: s.id,
			label: s.displayName,
			description: cat?.description ?? "",
			group: cat?.group ?? "general",
			portability: s.portability,
			defaultIncluded: s.defaultIncluded,
			syncOptIn: s.syncOptIn === true
		};
	});
}
/** 高级模式勾选目录 → 按导出分组（EXPORT_GROUPS）投影：与「导出备份·自定义模式」同构，
*  空分组省略；UI 直接渲染 groupCard。 */
function syncSectionGroups(options) {
	return EXPORT_GROUPS.map((g) => ({
		group: g.id,
		label: g.label,
		...g.note !== void 0 ? { note: g.note } : {},
		items: options.filter((o) => o.group === g.id)
	})).filter((g) => g.items.length > 0);
}
/** 默认（快速导出）模式的推荐同步分区：可移植且默认包含（与 ExportFlow.quickSelection 同口径）。 */
function recommendedSyncSections(info) {
	return info.filter((s) => s.portability === "portable" && s.defaultIncluded).map((s) => s.id);
}
/**
* 用户已勾选的「选择性可同步」分区（workspaces / sessions）。
* 这些分区默认不参与同步，勾选后会把工作区绝对路径 / 会话内容写入远端快照，
* UI 据此展示风险提示横幅（空数组 = 无需提示）。
*/
function selectedOptInSections(options, sections) {
	const chosen = new Set(sections);
	return options.filter((o) => o.syncOptIn && chosen.has(o.id));
}
/** 需要人工决策的 PlanItem 类型（与 SyncEngine.pull 的 needsReview 判定一致）。
* 注意：'Install' 不在此列 —— 插件安装随同步自动采用（product requirement）。 */
const REVIEW_KINDS = /* @__PURE__ */ new Set([
	"Conflict",
	"MissingSecret",
	"MissingDependency",
	"Error"
]);
/** 差异摘要：按 severity 计数 + 需人工决策标记（UI 统计徽章与警示横幅的数据源） */
function summarizePullChanges(changes) {
	let info = 0;
	let warning = 0;
	let error = 0;
	let needsReview = false;
	for (const c of changes) {
		if (c.severity === "error") error += 1;
		else if (c.severity === "warning") warning += 1;
		else info += 1;
		if (REVIEW_KINDS.has(c.kind)) needsReview = true;
	}
	return {
		total: changes.length,
		info,
		warning,
		error,
		needsReview,
		items: [...changes]
	};
}
/** PlanItemKind → 短标签（列表徽章） */
function kindLabel$1(kind, t = zhUiT) {
	switch (kind) {
		case "Create": return t("sync.kind.create");
		case "Update": return t("sync.kind.update");
		case "Skip": return t("sync.kind.skip");
		case "Conflict": return t("sync.kind.conflict");
		case "Install": return t("sync.kind.install");
		case "MissingSecret": return t("sync.kind.missingSecret");
		case "MissingDependency": return t("sync.kind.missingDependency");
		case "PathMapping": return t("sync.kind.pathMapping");
		case "Warning": return t("sync.kind.warning");
		case "Error": return t("sync.kind.error");
		default: return kind;
	}
}
/** severity → 短标签 */
function severityLabel(severity, t = zhUiT) {
	switch (severity) {
		case "error": return t("sync.severity.error");
		case "warning": return t("sync.severity.warning");
		default: return t("sync.severity.info");
	}
}
/** 缺省每通道状态（未配置时各字段默认值）。 */
function defaultChannelSyncState() {
	return {
		syncMode: "default",
		syncSections: [],
		encrypt: false,
		includeSecrets: false,
		encryptPassword: "",
		encryptPasswordConfirm: "",
		decryptPassword: "",
		selectedSnapshotId: "",
		snapshots: [],
		loadingSnapshots: false,
		autosync: null,
		autosyncEnabled: false,
		autosyncInterval: "30m"
	};
}
/** 通道子 tab 列表：git/webdav 两个 tab；busy 时全部禁用（防并发操作切换）。 */
function channelTabModels(active, busy) {
	return ["git", "webdav"].map((channel) => ({
		channel,
		active: channel === active,
		disabled: busy
	}));
}
/** 记住用户最近选择的通道（localStorage key；跨会话保持在用户上次所在栏）。
*  m-self：磁盘持久化（ui-prefs.json）为权威来源（Host 可读、随 self 分区进备份），
*  localStorage 仅保留为 status 响应未带回填时的同步降级通道（升级前遗留数据兼容）。 */
const SYNC_CHANNEL_STORAGE_KEY = "dsh.configManager.syncChannel";
/** 从 localStorage 读用户记住的通道；无/非法 → null（缺省 git，交由配置回填）。
*  浏览器环境走 globalThis.localStorage；node 测试注入 mock storage 或返回 null。 */
function readStoredChannel(storage) {
	const s = storage ?? browserStorage();
	if (s === null) return null;
	try {
		const v = s.getItem(SYNC_CHANNEL_STORAGE_KEY);
		return v === "webdav" || v === "git" ? v : null;
	} catch {
		return null;
	}
}
/** 把用户选择的通道写入 localStorage（记住，跨进入保持）。 */
function writeStoredChannel(channel, storage) {
	const s = storage ?? browserStorage();
	if (s === null) return;
	try {
		s.setItem(SYNC_CHANNEL_STORAGE_KEY, channel);
	} catch {}
}
/** 浏览器 localStorage；非浏览器（node 测试）→ null */
function browserStorage() {
	return globalThis?.localStorage ?? null;
}
/** 内置常见 WebDAV 服务器（预设下拉数据源；第一项为自定义）。 */
const WEBDAV_PRESETS = [
	{
		id: "custom",
		label: "Custom URL",
		url: "",
		hasPlaceholder: false
	},
	{
		id: "jianguoyun",
		label: "坚果云 (Jianguoyun)",
		url: "https://dav.jianguoyun.com/dav/",
		hasPlaceholder: false
	},
	{
		id: "nextcloud",
		label: "Nextcloud",
		url: "https://<server>/remote.php/dav/files/<user>/",
		hasPlaceholder: true
	},
	{
		id: "owncloud",
		label: "ownCloud",
		url: "https://<server>/remote.php/dav/files/<user>/",
		hasPlaceholder: true
	},
	{
		id: "seafile",
		label: "Seafile",
		url: "https://<server>/seafdav/",
		hasPlaceholder: true
	},
	{
		id: "synology",
		label: "Synology NAS (WebDAV)",
		url: "https://<nas-ip>:5006/",
		hasPlaceholder: true
	},
	{
		id: "box",
		label: "Box",
		url: "https://dav.box.com/dav/",
		hasPlaceholder: false
	}
];
/** 默认预设（自定义）对应的 id。 */
const WEBDAV_CUSTOM_PRESET_ID = "custom";
/** 根据预设 id 取 preset；未知 id → 自定义（缺省）。 */
function presetById(id) {
	return WEBDAV_PRESETS.find((p) => p.id === id) ?? WEBDAV_PRESETS[0];
}
/** 从已填 url 反推最接近的预设 id（用于下拉回显；无匹配 → 自定义）。 */
function presetIdForUrl(url) {
	const trimmed = url.trim();
	if (trimmed === "") return WEBDAV_CUSTOM_PRESET_ID;
	for (const p of WEBDAV_PRESETS) if (!p.hasPlaceholder && p.url !== "" && trimmed.toLowerCase().startsWith(p.url.toLowerCase())) return p.id;
	return WEBDAV_CUSTOM_PRESET_ID;
}
/** 活动通道的远端地址是否就绪（git=repoUrl，webdav=webdavUrl）。 */
function computeRemoteReady(channel, gitUrl, webdavUrl) {
	return (channel === "webdav" ? webdavUrl : gitUrl).trim() !== "";
}
/**
* 按钮可用性与文案：
* - 任一操作进行中（busy）→ 两个按钮都禁用（防并发 push/pull）；
* - 活动通道远端地址未就绪（remoteReady=false）→ 禁用（无从同步）；
* - busy 时按钮文案切换为「正在推送/拉取…」（配 Spinner）。
*/
function computeSyncButtons(busy, remoteReady, t = zhUiT) {
	const enabled = busy === null && remoteReady;
	return {
		canPush: enabled,
		canPull: enabled,
		pushLabel: busy === "push" ? t("sync.pushing") : busy === "sync" ? t("sync.syncing") : t("sync.pushLabel"),
		pullLabel: busy === "pull" ? t("sync.pulling") : busy === "sync" ? t("sync.syncing") : t("sync.pullLabel")
	};
}
/** ISO-8601 → 本地可读时间（YYYY-MM-DD HH:mm；非法输入原样返回） */
function formatDateTime$1(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
/** push 报告 → 渲染模型（ok 头部带快照 id；失败显示引擎 message；分区与告警透传） */
function pushReportView(report, t = zhUiT) {
	if (report === null) return null;
	if (!report.ok) return {
		kind: "error",
		headline: report.message ?? t("sync.pushFailed"),
		sections: report.sections,
		warnings: report.warnings
	};
	return {
		kind: "ok",
		headline: t("sync.pushOk", { id: report.snapshotId }),
		sections: report.sections,
		warnings: report.warnings
	};
}
/** push 预览 → 渲染模型（P0-②）：列分区 + 变更计数 + 远端基线提示。 */
function pushPreviewView(preview, t = zhUiT) {
	if (preview === null) return null;
	if (!preview.ok) return {
		ok: false,
		rows: [],
		changedCount: 0,
		remoteSnapshotCount: preview.remoteSnapshotCount,
		encryptedHint: "",
		previewHint: "",
		headline: "",
		error: preview.message ?? t("sync.pushFailed")
	};
	const rows = preview.sections.map((s) => ({
		section: s.section,
		count: s.count,
		changed: s.changed
	}));
	const changedCount = preview.sections.filter((s) => s.changed).length;
	return {
		ok: true,
		rows,
		changedCount,
		remoteSnapshotCount: preview.remoteSnapshotCount,
		encryptedHint: preview.encrypted ? t("sync.pushPreviewEncrypted") : "",
		previewHint: t("sync.pushPreviewHint"),
		headline: t("sync.pushPreviewHeadline", {
			total: String(preview.sections.length),
			changed: String(changedCount)
		}),
		error: null
	};
}
/** pull 报告 → 渲染模型（差异预览；empty = 无变更；error = 拉取失败） */
function pullReportView(report, t = zhUiT) {
	if (report === null) return null;
	if (!report.ok) return {
		kind: "error",
		headline: report.message ?? t("sync.pullFailed"),
		summary: null,
		previewHint: ""
	};
	if (report.changes.length === 0) return {
		kind: "empty",
		headline: report.message ?? t("sync.pullEmpty"),
		summary: null,
		previewHint: ""
	};
	return {
		kind: "ok",
		headline: t("sync.pullOk", {
			id: report.snapshotId,
			count: String(report.changes.length)
		}),
		summary: summarizePullChanges(report.changes),
		previewHint: t("sync.previewHint")
	};
}
/**
* GitHub 登录区块渲染模型（纯函数，node 可测）：
* - idle → 可发起；starting → 请求设备码中；waiting → 展示设备码等待用户在浏览器授权；
* - polling → 轮询 GitHub 中（仍展示代码区块）；success → 完成；error → 可重试。
*/
function computeGithubLoginView(phase, userCode, verificationUri, error, t = zhUiT) {
	const inFlight = phase === "starting" || phase === "waiting" || phase === "polling";
	let statusText;
	switch (phase) {
		case "starting":
			statusText = t("sync.github.starting");
			break;
		case "waiting":
			statusText = userCode === "" ? t("sync.github.waitingNoCode") : t("sync.github.waiting", { code: userCode });
			break;
		case "polling":
			statusText = t("sync.github.polling");
			break;
		case "success":
			statusText = t("sync.github.success");
			break;
		case "error":
			statusText = error ?? t("sync.github.failed");
			break;
		default: statusText = t("sync.github.defaultStatus");
	}
	return {
		phase,
		userCode,
		verificationUri,
		statusText,
		startLabel: phase === "error" ? t("sync.github.relogin") : t("sync.github.login"),
		canStart: phase === "idle" || phase === "error",
		canCancel: inFlight,
		showCode: phase === "waiting" || phase === "polling",
		error
	};
}
/** 轮询终止态 → 用户可读消息（pending 不是终止态，返回空串；成功/拒绝/过期/错误给出明确文案） */
function githubPollMessage(poll, t = zhUiT) {
	switch (poll.status) {
		case "success": return t("sync.github.pollSuccess");
		case "denied": return t("sync.github.pollDenied");
		case "expired": return t("sync.github.pollExpired");
		case "error": return t("sync.github.pollError", { detail: poll.message ?? poll.errorCode ?? t("sync.github.unknownError") });
		default: return "";
	}
}
/** 需要人工决策的 PlanItemKind（与 Host /sync/sync 的 needsReview 判定对齐）。
* 注意：'Install'（安装插件）不在其中 —— 插件安装默认自动采用（defaultAdopt=true）、
* 不逐项展示、无需手动选择（product requirement）。 */
const CONFIRM_REVIEW_KINDS = /* @__PURE__ */ new Set([
	"Conflict",
	"MissingSecret",
	"MissingDependency",
	"Error",
	"PathMapping",
	"Warning"
]);
/**
* issue #35：会**改变工具链行为**的项 —— pnpm-workspace.yaml 本次移除了无法满足的
* patchedDependencies 声明时（宿主会带上 detail）。这类项此前默认自动采用且不展示，
* 用户即使已知风险也无法否决；现在进确认列表（可取消），默认仍采用（sanitize 结果更安全，
* 默认不采用会静默丢掉 allowBuilds / 冷静期配置）。
* 注意：与宿主 src/index.ts 的同名判定必须保持一致（两侧刻意重复，避免跨端 import）。
*/
function isToolchainChangeItem(item) {
	return item.itemId === "plugins:pnpm-workspace" && item.detail !== void 0 && item.detail !== "";
}
/**
* 仅保留需人工决策的项（差异确认列表只渲染这些）。
* 统计（summarizeConfirmItems）仍基于全量 items，不受影响。
* issue #35：除 kind 命中外，**改变工具链行为**的项（pnpm-workspace 剔除声明）也进列表。
*/
function reviewItems(items) {
	return items.filter((it) => CONFIRM_REVIEW_KINDS.has(it.kind) || isToolchainChangeItem(it));
}
/**
* 「全部保留本地」：所有 Conflict 项 → resolution=keepLocal、adopt=false。
* 仅作用于 Conflict 项，非 Conflict 项的 adopt 保持默认。
*/
function keepLocalAll(items) {
	return items.filter((it) => it.kind === "Conflict").map((it) => ({
		itemId: it.itemId,
		resolution: "keepLocal",
		adopt: false
	}));
}
/**
* 「全部采用远端」：所有 Conflict 项 → resolution=useRemote、adopt=true。
* 仅作用于 Conflict 项，非 Conflict 项的 adopt 保持默认。
*/
function useRemoteAll(items) {
	return items.filter((it) => it.kind === "Conflict").map((it) => ({
		itemId: it.itemId,
		resolution: "useRemote",
		adopt: true
	}));
}
/** 差异确认列表摘要（按 severity 计数 + 采用数 + needsReview 徽章数据源）。 */
function summarizeConfirmItems(items) {
	let info = 0;
	let warning = 0;
	let error = 0;
	let adopted = 0;
	let needsReview = false;
	for (const it of items) {
		if (it.severity === "error") error += 1;
		else if (it.severity === "warning") warning += 1;
		else info += 1;
		if (it.adopt) adopted += 1;
		if (CONFIRM_REVIEW_KINDS.has(it.kind)) needsReview = true;
	}
	return {
		total: items.length,
		info,
		warning,
		error,
		adopted,
		needsReview
	};
}
/**
* 收集用户逐项决策 → apply-items 请求体 adoptions[]。
* 仅包含 adopt=true 的项；Conflict 项 adopt=true 且未给 resolution → 抛错（强制先解决）。
* 与导入恢复向导一致：只提供「保留当前 / 使用导入」两项，跳过 = 取消勾选（adopt=false）。
*/
function buildAdoptions(items, adopted, resolutions) {
	const out = [];
	for (const it of items) {
		if (adopted.get(it.itemId) !== true) continue;
		const adoption = {
			itemId: it.itemId,
			adopt: true
		};
		if (it.kind === "Conflict") {
			const resolution = resolutions.get(it.itemId);
			if (resolution === void 0) throw new Error(`冲突项 ${it.itemId} 必须先选择解决方式（保留当前 / 使用导入）`);
			adoption.resolution = resolution;
		}
		out.push(adoption);
	}
	return out;
}
/** AutosyncInterval → ms。 */
function autosyncIntervalMs(interval) {
	switch (interval) {
		case "5m": return 3e5;
		case "15m": return 9e5;
		case "60m": return 36e5;
		case "6h": return 216e5;
		case "12h": return 432e5;
		case "24h": return 864e5;
		default: return 18e5;
	}
}
/** 距下次自动同步剩余 ms（已到期 → 0）。elapsedMs 为 host 计算的「距上次执行已过 ms」。 */
function computeAutosyncCountdown(elapsedMs, intervalMs) {
	if (elapsedMs < 0) return -1;
	return Math.max(0, intervalMs - elapsedMs);
}
/**
* 剩余时长 → 可读文案（向上取整，避免出现「0 分钟」；≤0 视为 1 分钟兜底）。
* 例：4 分钟 →「4 分钟」；90 分钟 →「2 小时」；30 小时 →「2 天」。
*/
function formatIntervalDuration(ms, t = zhUiT) {
	const totalMinutes = Math.max(1, Math.ceil(ms / 6e4));
	if (totalMinutes < 60) return t("sync.duration.min", { n: totalMinutes });
	const totalHours = Math.ceil(totalMinutes / 60);
	if (totalHours < 24) return t("sync.duration.hour", { n: totalHours });
	return t("sync.duration.day", { n: Math.ceil(totalHours / 24) });
}
/** 自动同步状态行的可读文案（未运行 / 上次状态 / 连续失败计数）。 */
function autosyncStatusText(status, t = zhUiT) {
	if (status.lastRunAt === void 0 || status.lastRunAt === "" || status.lastRunStatus === void 0) return t("sync.autosyncNever");
	return `${status.lastRunStatus === "success" ? t("sync.autosyncSuccess") : status.lastRunStatus === "skipped" ? t("sync.autosyncSkipped") : status.lastRunStatus === "partial" ? t("sync.autosyncPartial") : t("sync.autosyncFailed")} · ${t("sync.autosyncLastRun", { time: formatDateTime$1(status.lastRunAt) })}${status.consecutiveFailures > 0 ? ` · ${t("sync.autosyncFailCount", { n: String(status.consecutiveFailures) })}` : ""}`;
}
//#endregion
//#region src/client/run-store.ts
/**
* m2: 模块级 run/UI store —— dsh-config-manager 浏览器半的状态中枢。
*
* 解决的问题（验收 m2-state / m2-refresh / m2-resume）：
*  - 切 tab / 关面板重开：模块级单例存活于当前 JS 上下文，ExportFlow /
*    ImportWizard 控制器实例与 UI 状态**不重建**（m2-state）；
*  - 页面刷新：非敏感状态经 sessionStorage（键 dsh.cfgMgr.state.v1）
*    序列化/反序列化恢复（m2-refresh）；敏感字段
*    password / passwordConfirm / secretInputs **只存在内存**，序列化白名单
*    显式剔除 —— 刷新后自动清空，secrets 阶段要求重输；
*  - 进行中 run：视图挂载时经 GET /runs 找回活跃 runId，轮询 GET /progress
*    直到完成/失败，把 RunState.result 回填到 store（m2-resume）。服务端在
*    刷新/关面板期间继续执行，本 store 只负责重新订阅进度。
*
* 低频面板（Snapshots / Sync / Market / About）同样把非敏感 UI 状态镜像进这里：
*  - ConfigManagerSection 的「当前打开面板」（panel）持久化，刷新后回到原 tab；
*  - SyncSettingsView / MarketPanel / SnapshotsPanel 把自身状态切片（toXxxStoreSlice）
*    镜像进 store —— 模块级单例保证「切 tab 不丢」，sessionStorage 白名单保证
*    「刷新恢复」；同步凭据（token / webdav 密码 / 加密与解密密码）仅内存，
*    由 toPersistedState 硬性剔除，刷新后清空要求重输。
*
* 控制器 rehydrate 说明：ImportWizard 没有公开的 hydrate 入口（m2 约束为只改
* src/client/、不动 src/ui/），刷新恢复需要把持久化的非敏感快照写回控制器
* 私有字段。writeWizardSnapshot() 是唯一的受控访问点：类型层 private 只是
* 编译期约束（运行时是普通属性），所有写入值都来自序列化白名单（已剔除
* 密码/密钥/secretInputs），且只在 load / hydrate / resume-settle 时调用。
*
* 安全约束：
*  - toPersistedState() 用解构白名单剔除敏感字段，即使未来往 LiveState 加字段，
*    未显式放行也不会落入 sessionStorage；
*  - runId 为 32-hex 不可猜标识，可安全持久化（/runs + /progress 的查询键）。
*/
/** sessionStorage 键。 */
const STATE_KEY = "dsh.cfgMgr.state.v1";
/** Custom 模式的初始勾选 = 推荐分区（可再调整） */
function defaultCustomSelection() {
	return DEFAULT_CATEGORIES.filter((c) => c.defaultIncluded).map((c) => c.id);
}
function defaultExportState() {
	return {
		mode: "quick",
		selection: defaultCustomSelection(),
		includeSecrets: false,
		encrypt: false,
		password: "",
		passwordConfirm: "",
		fileName: "",
		note: "",
		running: false,
		progress: null,
		result: null,
		error: null,
		downloaded: false,
		runId: null
	};
}
function defaultImportState() {
	return {
		step: "select",
		zipPath: null,
		selectedFileName: null,
		containerEncrypted: false,
		analysis: null,
		plan: null,
		result: null,
		rollbackOnError: true,
		errors: [],
		phase: "preview",
		conflictStrategy: "merge",
		conflictResolutions: {},
		pathMappings: [],
		secretInputs: {},
		decryptPassword: "",
		decryptRefs: [],
		archiveUnlocked: false,
		uploading: false,
		running: false,
		progress: null,
		error: null,
		runId: null,
		conflictCollector: null,
		skipRequested: false
	};
}
function defaultSyncState() {
	return {
		channel: "git",
		repoUrl: "",
		token: "",
		webdavUrl: "",
		webdavUsername: "",
		webdavPassword: "",
		byChannel: {
			git: defaultChannelSyncState(),
			webdav: defaultChannelSyncState()
		},
		busy: null,
		savingConfig: false,
		pushReport: null,
		pullReport: null,
		pushPreview: {
			preview: null,
			open: false
		},
		confirmSession: null,
		confirmDecisions: null,
		lastRestoreId: null,
		error: null,
		loadError: null
	};
}
function defaultMarketState() {
	return {
		subView: "browse",
		search: "",
		category: "",
		sectionFilter: "",
		source: "all",
		sortKey: "default",
		items: [],
		detail: null,
		approvals: {},
		importResult: null,
		error: null,
		loadError: null,
		myItems: null,
		myItemsError: null,
		myWizard: null,
		myInstall: null,
		myConfirmDeleteId: null
	};
}
function defaultSnapshotsState() {
	return {
		selectedId: null,
		plan: null,
		running: false,
		report: null,
		actionError: null,
		error: null,
		backupDraft: null,
		importBackup: null,
		subTab: "restore"
	};
}
function defaultProfilesState() {
	return {
		profiles: null,
		selectedName: null,
		preview: null,
		switchResult: null,
		error: null,
		loadError: null
	};
}
function defaultRecoveryState() {
	return {
		status: null,
		selectedOperationId: null,
		preview: null,
		verifyResult: null,
		running: false,
		error: null,
		actionError: null
	};
}
function defaultMoreState() {
	return { moreSub: "about" };
}
function defaultState() {
	return {
		v: 1,
		view: "export",
		panel: "overview",
		export: defaultExportState(),
		import: defaultImportState(),
		sync: defaultSyncState(),
		market: defaultMarketState(),
		snapshots: defaultSnapshotsState(),
		profiles: defaultProfilesState(),
		recovery: defaultRecoveryState(),
		more: defaultMoreState()
	};
}
/**
* 从视图状态提取同步切片（结构兼容：传入 SyncUiState 亦可；只保留切片字段，
* github 流程态/loading 等瞬态不进入切片；busy/savingConfig 为「内存切片」瞬态——
* 切 tab 由模块级单例保留，刷新时被 toPersistedState 白名单剔除）。组件每次状态
* 变化后（含异步回调）调用，把非敏感 + 仅内存字段镜像进 store。
* byChannel 的快照数组复制引用（避免跨切片共享可变数组）。
*/
function toSyncStoreSlice(s) {
	return {
		channel: s.channel,
		repoUrl: s.repoUrl,
		token: s.token,
		webdavUrl: s.webdavUrl,
		webdavUsername: s.webdavUsername,
		webdavPassword: s.webdavPassword,
		byChannel: {
			git: {
				...s.byChannel.git,
				snapshots: [...s.byChannel.git.snapshots]
			},
			webdav: {
				...s.byChannel.webdav,
				snapshots: [...s.byChannel.webdav.snapshots]
			}
		},
		busy: s.busy,
		savingConfig: s.savingConfig,
		pushReport: s.pushReport,
		pullReport: s.pullReport,
		pushPreview: s.pushPreview,
		confirmSession: s.confirmSession,
		confirmDecisions: s.confirmDecisions,
		lastRestoreId: s.lastRestoreId,
		error: s.error,
		loadError: s.loadError
	};
}
/** 从市场视图状态提取切片（结构兼容：传入 MarketUiState 亦可）。 */
function toMarketStoreSlice(s) {
	return {
		subView: s.subView,
		search: s.search,
		category: s.category,
		sectionFilter: s.sectionFilter,
		source: s.source,
		sortKey: s.sortKey,
		items: s.items,
		detail: s.detail,
		approvals: s.approvals,
		importResult: s.importResult,
		error: s.error,
		loadError: s.loadError,
		myItems: s.myItems,
		myItemsError: s.myItemsError,
		myWizard: s.myWizard,
		myInstall: s.myInstall,
		myConfirmDeleteId: s.myConfirmDeleteId
	};
}
/** 从快照面板状态提取切片（结构兼容：传入 PanelState 亦可）。 */
function toSnapshotsStoreSlice(s) {
	return {
		selectedId: s.selectedId,
		plan: s.plan,
		running: s.running,
		report: s.report,
		actionError: s.actionError,
		error: s.error,
		backupDraft: s.backupDraft,
		importBackup: s.importBackup,
		subTab: s.subTab
	};
}
/** 从配置档案面板状态提取切片（结构兼容：传入 PanelState 亦可）。 */
function toProfilesStoreSlice(s) {
	return {
		profiles: s.profiles,
		selectedName: s.selectedName,
		preview: s.preview,
		switchResult: s.switchResult,
		error: s.error,
		loadError: s.loadError
	};
}
/**
* 持久化白名单：解构剔除敏感字段（password/passwordConfirm/secretInputs/decryptPassword）
* 与不可序列化的实例字段（conflictCollector），以及同步面板的凭据字段
* （token/webdavPassword/encryptPassword/encryptPasswordConfirm/decryptPassword ——
* 含 byChannel 内每通道的加密/解密密码）与瞬态字段（busy/savingConfig —— 刷新后
* 回复空闲，不把「进行中」状态带到新页面）；导出面板的结果字段（result/downloaded）
* 与进行中/进度（running/progress/runId）同为内存切片瞬态一并剔除（刷新/关闭 DSH
* 后不残留上次导出报告），其余原样落入 sessionStorage。
* 这是 sessionStorage 的唯一写入路径 —— 敏感值在此被硬性隔离。
*/
function toPersistedState(state) {
	const { password: _password, passwordConfirm: _passwordConfirm, result: _result, downloaded: _downloaded, running: _running, progress: _progress, runId: _runId, ...exportRest } = state.export;
	const { secretInputs: _secretInputs, decryptPassword: _decryptPassword, decryptRefs: _decryptRefs, archiveUnlocked: _archiveUnlocked, conflictCollector: _conflictCollector, skipRequested: _skipRequested, ...importRest } = state.import;
	const { token: _token, webdavPassword: _webdavPassword, busy: _busy, savingConfig: _savingConfig, ...syncRest } = state.sync;
	const stripChannelSensitive = (c) => {
		const { encryptPassword: _ep, encryptPasswordConfirm: _epc, decryptPassword: _dp, ...rest } = c;
		return rest;
	};
	return {
		v: 1,
		view: state.view,
		panel: state.panel,
		export: exportRest,
		import: importRest,
		sync: {
			...syncRest,
			byChannel: {
				git: stripChannelSensitive(state.sync.byChannel.git),
				webdav: stripChannelSensitive(state.sync.byChannel.webdav)
			}
		},
		market: state.market,
		snapshots: {
			...state.snapshots,
			running: false,
			importBackup: null
		},
		profiles: {
			profiles: state.profiles.profiles,
			selectedName: state.profiles.selectedName,
			preview: state.profiles.preview,
			switchResult: state.profiles.switchResult,
			error: state.profiles.error,
			loadError: state.profiles.loadError
		},
		recovery: {
			...state.recovery,
			running: false
		},
		more: state.more
	};
}
/** 解析 + 轻量校验持久化状态；损坏/版本不符返回 null（调用方回退默认并清键）。 */
function parsePersistedState(raw) {
	let parsed;
	try {
		parsed = JSON.parse(raw);
	} catch {
		return null;
	}
	if (typeof parsed !== "object" || parsed === null) return null;
	const p = parsed;
	if (p["v"] !== 1) return null;
	const view = p["view"];
	if (view !== "export" && view !== "import") return null;
	const exp = p["export"];
	const imp = p["import"];
	if (typeof exp !== "object" || exp === null || typeof imp !== "object" || imp === null) return null;
	const rawPanel = p["panel"];
	let panel;
	let moreSub = "about";
	let snapshotsSubTab = "restore";
	const viewRaw = view;
	switch (rawPanel) {
		case "overview":
		case "snapshots":
		case "sync":
		case "market":
		case "profiles":
		case "export":
		case "import":
		case "lifecycle":
			panel = rawPanel;
			break;
		case "about":
			panel = "overview";
			moreSub = "about";
			break;
		case "recovery":
			panel = "snapshots";
			snapshotsSubTab = "recovery";
			break;
		case "history":
			panel = "overview";
			moreSub = "history";
			break;
		case "more":
			panel = "overview";
			break;
		case "recovery":
			panel = "snapshots";
			snapshotsSubTab = "recovery";
			break;
		default: panel = viewRaw;
	}
	const mirroredView = panel === "import" ? "import" : panel === "export" ? "export" : viewRaw;
	const sync = isRecord(p["sync"]) ? p["sync"] : defaultSyncState();
	const market = isRecord(p["market"]) ? p["market"] : defaultMarketState();
	const snapshots = isRecord(p["snapshots"]) ? p["snapshots"] : defaultSnapshotsState();
	const profiles = isRecord(p["profiles"]) ? p["profiles"] : defaultProfilesState();
	const recovery = isRecord(p["recovery"]) ? p["recovery"] : defaultRecoveryState();
	const migratedSnapshots = rawPanel === "recovery" ? {
		...snapshots,
		subTab: snapshotsSubTab
	} : snapshots;
	const more = isRecord(p["more"]) ? {
		...defaultMoreState(),
		...p["more"]
	} : { moreSub };
	return {
		v: 1,
		view: mirroredView,
		panel,
		export: exp,
		import: imp,
		sync,
		market,
		snapshots: migratedSnapshots,
		profiles,
		recovery,
		more
	};
}
/** 运行时不变量小工具：值为普通对象。 */
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
* 把 store 的导入快照写回 ImportWizard 控制器私有字段（受控 rehydrate）。
* - 只写非敏感字段；secretInputs / decryptPassword / archiveUnlocked / unlockedZipPath
*   恒置空 —— 刷新后要求重输密码重新解锁容器；
* - 仅在 load / hydrate / resume-settle 时调用，不参与正常交互路径。
*/
function writeWizardSnapshot(wizard, imp) {
	const internals = wizard;
	internals.step = imp.step;
	internals.zipPath = imp.zipPath;
	internals.analysis = imp.analysis;
	internals.plan = imp.plan;
	internals.result = imp.result;
	internals.rollbackOnError = imp.rollbackOnError;
	internals.errors = [...imp.errors];
	internals.decisions = {
		strategy: imp.conflictStrategy,
		resolutions: { ...imp.conflictResolutions },
		pathMappings: imp.pathMappings.map((m) => ({
			...m,
			appliesTo: [...m.appliesTo]
		}))
	};
	internals.secretInputs = {};
	internals.decryptPassword = "";
	internals.archiveUnlocked = false;
	internals.unlockedZipPath = null;
}
/** 由 plan + 已持久化的决策重建 ConflictCollector（刷新恢复用）。 */
function rebuildConflictCollector(plan, resolutions) {
	const collector = new ConflictCollector(plan);
	for (const [id, resolution] of Object.entries(resolutions)) collector.resolve(id, resolution);
	return collector;
}
/**
* RunState → RunProgress（m3 轮询进度回填）。
* - step/total = 内部计数（百分比条按 item/itemTotal 推进）；
* - section/sectionTotal 与 item/itemTotal 单独保留给分区徽章/内部计数徽章；
* - detail = 当前项名（导出时恒为分区名，ProgressBar 侧会去冗余）。
*/
function mapRunProgress(kind, state) {
	return {
		stage: kind === "export" ? "exporting" : "executing",
		detail: state.detail ?? void 0,
		step: state.item ?? void 0,
		total: state.itemTotal ?? void 0,
		section: state.section,
		sectionTotal: state.sectionTotal,
		item: state.item,
		itemTotal: state.itemTotal,
		log: state.log ?? []
	};
}
function defaultStorage() {
	if (typeof window === "undefined") return null;
	try {
		return window.sessionStorage ?? null;
	} catch {
		return null;
	}
}
/**
* 模块级单例 store：控制器实例 + React UI 状态 + sessionStorage 恢复。
* 最小接口：subscribe / getSnapshot / load / save / patch / syncWizard /
* exportFlow / importWizard / resume / stopResume。
*/
var RunStore = class {
	storage;
	pollIntervalMs;
	listeners = /* @__PURE__ */ new Set();
	state;
	exportFlowInst = null;
	importWizardInst = null;
	apiRef = null;
	/** 正在轮询的 runId 集合（stopResume 清空；防重复订阅） */
	polling = /* @__PURE__ */ new Set();
	/** 每个 runId 至多一个挂起的轮询定时器（fire 后由下一次调度覆盖） */
	timers = /* @__PURE__ */ new Map();
	/** 正在「发现进行中 run」的 kind 集合（watchRunning 活动标记；stopRunWatch/stopResume 清空） */
	watchActive = /* @__PURE__ */ new Set();
	constructor(opts = {}) {
		this.storage = opts.storage !== void 0 ? opts.storage : defaultStorage();
		this.pollIntervalMs = opts.pollIntervalMs ?? 1e3;
		this.state = defaultState();
		this.load();
	}
	/**
	* 订阅 store 变化（useSyncExternalStore 的 subscribe）。
	*
	* 必须为箭头函数类字段：React 以裸引用（`runStore.subscribe`）调用它，
	* 无接收者，若为原型方法则 `this` 为 undefined，`this.listeners` 直接崩溃。
	*/
	subscribe = (listener) => {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	};
	/**
	* 当前完整快照（引用稳定：仅在 patch 后替换，适合 useSyncExternalStore）。
	*
	* 必须为箭头函数类字段：React 以裸引用（`runStore.getSnapshot`）调用它，
	* 无接收者，若为原型方法则 `this` 为 undefined，`this.state` 抛 TypeError，
	* 导致整个 settings.section 槽位渲染崩溃（备份与迁移页空白）。
	*/
	getSnapshot = () => this.state;
	notify() {
		for (const listener of this.listeners) listener();
	}
	/** 浅合并补丁并立即持久化（保存走白名单，敏感字段不落盘）。 */
	patch(patchObj) {
		this.state = {
			...this.state,
			view: patchObj.view ?? this.state.view,
			panel: patchObj.panel !== void 0 ? patchObj.panel : this.state.panel,
			export: {
				...this.state.export,
				...patchObj.export
			},
			import: {
				...this.state.import,
				...patchObj.import
			},
			sync: {
				...this.state.sync,
				...patchObj.sync
			},
			market: {
				...this.state.market,
				...patchObj.market
			},
			snapshots: {
				...this.state.snapshots,
				...patchObj.snapshots
			},
			profiles: {
				...this.state.profiles,
				...patchObj.profiles
			},
			recovery: {
				...this.state.recovery,
				...patchObj.recovery
			},
			more: {
				...this.state.more,
				...patchObj.more
			}
		};
		this.notify();
		this.save();
	}
	/** 把 ImportWizard 控制器的 snapshot() 镜像进 store（wizard 动作后调用）。 */
	syncWizard() {
		const wizard = this.importWizardInst;
		if (wizard === null) return;
		const snap = wizard.snapshot();
		this.patch({ import: {
			step: snap.step,
			zipPath: snap.zipPath,
			analysis: snap.analysis,
			plan: snap.plan,
			result: snap.result,
			rollbackOnError: snap.rollbackOnError,
			errors: snap.errors
		} });
	}
	/** 从存储恢复非敏感状态（构造时调用一次；损坏数据回退默认并清键）。 */
	load() {
		if (this.storage === null) return;
		let raw = null;
		try {
			raw = this.storage.getItem(STATE_KEY);
		} catch {
			return;
		}
		if (raw === null || raw === "") {
			this.state = defaultState();
			return;
		}
		const parsed = parsePersistedState(raw);
		if (parsed === null) {
			try {
				this.storage.removeItem(STATE_KEY);
			} catch {}
			this.state = defaultState();
			return;
		}
		this.applyPersisted(parsed);
	}
	/** 把解析后的持久化状态合并进运行时状态；敏感字段强制回到默认（清空）。 */
	applyPersisted(parsed) {
		this.state = {
			v: 1,
			view: parsed.view,
			panel: parsed.panel ?? "overview",
			export: {
				...defaultExportState(),
				...parsed.export,
				password: "",
				passwordConfirm: "",
				result: null,
				downloaded: false,
				running: false,
				progress: null,
				runId: null
			},
			import: {
				...defaultImportState(),
				...parsed.import,
				selectedFileName: parsed.import.selectedFileName ?? null,
				containerEncrypted: parsed.import.containerEncrypted === true,
				secretInputs: {},
				decryptPassword: "",
				decryptRefs: [],
				archiveUnlocked: false,
				conflictCollector: null,
				skipRequested: false
			},
			sync: (() => {
				const legacySync = parsed.sync;
				const legacyGit = typeof legacySync["syncMode"] === "string" || Array.isArray(legacySync["syncSections"]) ? {
					syncMode: legacySync["syncMode"] === "advanced" ? "advanced" : "default",
					syncSections: Array.isArray(legacySync["syncSections"]) ? legacySync["syncSections"] : [],
					encrypt: legacySync["encrypt"] === true,
					includeSecrets: legacySync["includeSecrets"] === true,
					selectedSnapshotId: typeof legacySync["selectedSnapshotId"] === "string" ? legacySync["selectedSnapshotId"] : "",
					snapshots: [],
					autosync: null,
					autosyncEnabled: false,
					autosyncInterval: "30m"
				} : void 0;
				return {
					...defaultSyncState(),
					...parsed.sync,
					token: "",
					webdavPassword: "",
					busy: null,
					savingConfig: false,
					byChannel: {
						git: {
							...defaultChannelSyncState(),
							...legacyGit ?? parsed.sync.byChannel?.git,
							encryptPassword: "",
							encryptPasswordConfirm: "",
							decryptPassword: ""
						},
						webdav: {
							...defaultChannelSyncState(),
							...parsed.sync.byChannel?.webdav,
							encryptPassword: "",
							encryptPasswordConfirm: "",
							decryptPassword: ""
						}
					}
				};
			})(),
			market: {
				...defaultMarketState(),
				...parsed.market
			},
			snapshots: {
				...defaultSnapshotsState(),
				...parsed.snapshots,
				running: false,
				importBackup: null,
				subTab: parsed.snapshots.subTab === "files" ? "files" : parsed.snapshots.subTab === "recovery" ? "recovery" : "restore"
			},
			profiles: {
				...defaultProfilesState(),
				...parsed.profiles
			},
			recovery: {
				...defaultRecoveryState(),
				...parsed.recovery,
				running: false
			},
			more: { moreSub: parsed.more.moreSub === "history" ? "history" : "about" }
		};
		if (this.state.import.containerEncrypted && this.state.import.phase !== "preview" && this.state.import.phase !== "decrypt-archive") this.state.import.phase = "decrypt-archive";
		const missing = this.state.import.plan?.missingSecrets ?? [];
		if (this.state.import.phase === "confirm" && missing.length > 0) this.state.import.phase = "secrets";
		const imp = this.state.import;
		if (imp.phase === "conflicts" && imp.plan !== null) imp.conflictCollector = rebuildConflictCollector(imp.plan, imp.conflictResolutions);
	}
	/** 把非敏感状态写入 sessionStorage（白名单序列化；无存储时为空操作）。 */
	save() {
		if (this.storage === null) return;
		try {
			this.storage.setItem(STATE_KEY, JSON.stringify(toPersistedState(this.state)));
		} catch {}
	}
	/** ExportFlow 控制器实例：懒创建 + 缓存（切 tab/关面板不重建）。 */
	exportFlow(api) {
		if (this.exportFlowInst === null) {
			if (this.apiRef === null) this.apiRef = api;
			this.exportFlowInst = new ExportFlow({
				port: api,
				onProgress: (event) => {
					this.patch({ export: { progress: event } });
				}
			});
		}
		return this.exportFlowInst;
	}
	/** ImportWizard 控制器实例：懒创建 + 缓存；首次创建时从持久化快照 rehydrate。 */
	importWizard(api) {
		if (this.importWizardInst === null) {
			if (this.apiRef === null) this.apiRef = api;
			const wizard = new ImportWizard({
				port: api,
				onProgress: (event) => {
					this.patch({ import: { progress: event } });
				},
				defaultRollbackOnError: true
			});
			writeWizardSnapshot(wizard, this.state.import);
			this.importWizardInst = wizard;
		}
		return this.importWizardInst;
	}
	/**
	* 重新订阅进行中的 run：GET /runs 找回活跃 runId → 轮询 /progress 直到
	* 完成/失败，把 RunState.result 回填 store（导出结果 / 导入结果均可恢复）。
	* 返回是否有 run 被恢复。幂等：同一 runId 不会重复轮询。
	*/
	async resume(api) {
		if (this.apiRef === null) this.apiRef = api;
		let active;
		try {
			active = await api.runs();
		} catch {
			return false;
		}
		let resumed = false;
		const exportRun = active.find((r) => r.kind === "export");
		if (exportRun !== void 0) {
			resumed = true;
			this.patch({ export: {
				running: true,
				runId: exportRun.runId,
				progress: mapRunProgress("export", exportRun)
			} });
			this.pollRun(exportRun.runId, "export");
		} else if (this.state.export.running) this.patch({ export: {
			running: false,
			progress: null,
			runId: null,
			error: "上次导出任务已结束但结果无法恢复，请重新导出"
		} });
		const importRun = active.find((r) => r.kind === "import");
		if (importRun !== void 0) {
			resumed = true;
			this.patch({ import: {
				running: true,
				runId: importRun.runId,
				step: "importing",
				progress: mapRunProgress("import", importRun)
			} });
			this.pollRun(importRun.runId, "import");
		} else if (this.state.import.step === "importing") {
			this.importWizardInst?.reset();
			this.patch({ import: {
				step: "select",
				phase: "preview",
				runId: null,
				running: false,
				progress: null,
				conflictCollector: null,
				selectedFileName: null,
				errors: [],
				error: "上次导入任务已结束或超过保留期，结果无法恢复，请重新导入"
			} });
		}
		const restoreRun = active.find((r) => r.kind === "restore");
		if (restoreRun !== void 0) {
			resumed = true;
			this.patch({ snapshots: {
				running: true,
				actionError: null
			} });
			this.pollRun(restoreRun.runId, "restore");
		} else if (this.state.snapshots.running) this.patch({ snapshots: {
			running: false,
			actionError: "上次恢复任务已结束但结果无法恢复，请重新执行"
		} });
		const recoveryRun = active.find((r) => r.kind === "recovery");
		if (recoveryRun !== void 0) {
			resumed = true;
			this.patch({ recovery: {
				running: true,
				actionError: null
			} });
			this.pollRun(recoveryRun.runId, "recovery");
		} else if (this.state.recovery.running) this.patch({ recovery: {
			running: false,
			actionError: "上次恢复任务已结束但结果无法恢复，请重新执行"
		} });
		return resumed;
	}
	/** 停止全部轮询（视图卸载时调用；服务端执行不受影响，重开面板再 resume）。 */
	stopResume() {
		this.polling.clear();
		this.watchActive.clear();
		for (const timer of this.timers.values()) clearTimeout(timer);
		this.timers.clear();
	}
	/**
	* 本次会话内启动的 run（POST /export 或 /execute 请求进行期间）的实时进度订阅。
	* 请求是同步的、响应到达才知 runId，所以先经 GET /runs 发现进行中的 run（500ms），
	* 发现后转入 /progress 轮询（同一间隔），done/failed 自动停止。
	*
	* 与 m2 resume 的收敛：两者共用 pollRun / polling / timers 同一套轮询器，
	* 只是间隔不同（resume 恢复 1s、本方法实时 500ms）且发现阶段不同
	* （resume 用 /runs 一次性找回 runId；本方法持续 /runs 直到出现活跃 run）。
	* 同一 runId 不会重复轮询（polling 集合防重）。
	*/
	watchRunning(kind, intervalMs) {
		if (this.watchActive.has(kind)) return;
		this.watchActive.add(kind);
		const api = this.apiRef;
		if (api === null) {
			this.watchActive.delete(kind);
			return;
		}
		const interval = intervalMs ?? this.pollIntervalMs;
		const tick = () => {
			if (!this.watchActive.has(kind)) return;
			api.runs().then((active) => {
				if (!this.watchActive.has(kind)) return;
				const run = active.find((r) => r.kind === kind && r.status === "running");
				if (run === void 0) {
					this.scheduleWatch(kind, tick, interval);
					return;
				}
				this.watchActive.delete(kind);
				this.patchProgress(kind, run);
				this.pollRun(run.runId, kind, interval);
			}, () => {
				if (this.watchActive.has(kind)) this.scheduleWatch(kind, tick, interval);
			});
		};
		this.scheduleWatch(kind, tick, interval);
	}
	/** 停止某 kind 的「发现进行中 run」轮询（视图请求结束后调用；/progress 轮询自行结束）。 */
	stopRunWatch(kind) {
		this.watchActive.delete(kind);
	}
	/** 调度下一轮发现；每 kind 只保留一个挂起定时器。 */
	scheduleWatch(kind, tick, intervalMs) {
		const timer = setTimeout(tick, intervalMs);
		this.timers.set(`watch:${kind}`, timer);
	}
	pollRun(runId, kind, intervalMs) {
		if (this.polling.has(runId)) return;
		this.polling.add(runId);
		const api = this.apiRef;
		if (api === null) return;
		const interval = intervalMs ?? this.pollIntervalMs;
		const tick = () => {
			if (!this.polling.has(runId)) return;
			api.progress(runId).then((state) => {
				if (!this.polling.has(runId)) return;
				if (state.status === "running") {
					this.patchProgress(kind, state);
					this.scheduleTick(runId, tick, interval);
				} else {
					this.polling.delete(runId);
					this.applySettled(kind, state);
				}
			}, () => {
				this.polling.delete(runId);
				this.applyGone(kind);
			});
		};
		this.scheduleTick(runId, tick, interval);
	}
	/** 调度下一轮询；每 runId 只保留一个挂起定时器（fire 后由下一次调度覆盖）。 */
	scheduleTick(runId, tick, intervalMs) {
		const timer = setTimeout(tick, intervalMs);
		this.timers.set(runId, timer);
	}
	patchProgress(kind, state) {
		const event = mapRunProgress(kind, state);
		if (kind === "export") this.patch({ export: { progress: event } });
		else if (kind === "restore") this.patch({ snapshots: { running: true } });
		else if (kind === "recovery") this.patch({ recovery: { running: true } });
		else this.patch({ import: {
			progress: event,
			runId: state.runId
		} });
	}
	/** run 完成/失败：把 RunState.result 回填 store（并镜像回控制器）。 */
	applySettled(kind, state) {
		if (kind === "export") {
			const result = state.result;
			if (state.status === "done" && result !== void 0 && typeof result.zipPath === "string") this.patch({ export: {
				running: false,
				progress: {
					stage: "done",
					step: 1,
					total: 1
				},
				result: {
					...result,
					text: renderExportReport(result.report)
				},
				downloaded: false
			} });
			else this.patch({ export: {
				running: false,
				progress: null,
				result: null,
				downloaded: false,
				error: state.error ?? "导出失败（结果不可用）"
			} });
			return;
		}
		if (kind === "restore") {
			const result = state.result;
			if (state.status === "done" && result !== void 0 && typeof result === "object") this.patch({ snapshots: {
				running: false,
				report: result,
				actionError: null
			} });
			else this.patch({ snapshots: {
				running: false,
				actionError: state.error ?? "恢复失败（结果不可用）"
			} });
			return;
		}
		if (kind === "recovery") {
			this.patch({ recovery: {
				running: false,
				actionError: state.error ?? null
			} });
			return;
		}
		const result = state.result;
		if (state.status === "done" && result !== void 0 && typeof result === "object") {
			const wizard = this.importWizardInst;
			if (wizard !== null) writeWizardSnapshot(wizard, {
				...this.state.import,
				step: "result",
				result,
				secretInputs: {},
				decryptPassword: "",
				decryptRefs: [],
				conflictCollector: null
			});
			this.patch({ import: {
				step: "result",
				result,
				running: false,
				progress: {
					stage: "done",
					step: 1,
					total: 1
				},
				error: null
			} });
		} else {
			const wizard = this.importWizardInst;
			if (wizard !== null) {
				const internals = wizard;
				internals.errors = [...internals.errors, state.error ?? "导入失败"];
			}
			this.patch({ import: {
				running: false,
				progress: null,
				error: state.error ?? "导入失败",
				errors: [...this.state.import.errors, state.error ?? "导入失败"]
			} });
		}
	}
	/** run 消失（404/网络错误）：停止轮询并提示不可恢复。 */
	applyGone(kind) {
		if (kind === "export") this.patch({ export: {
			running: false,
			progress: null,
			runId: null,
			error: "任务已结束或超过保留期，进度不可恢复"
		} });
		else if (kind === "restore") this.patch({ snapshots: {
			running: false,
			actionError: "恢复任务已结束或超过保留期，进度不可恢复"
		} });
		else if (kind === "recovery") this.patch({ recovery: {
			running: false,
			actionError: "恢复任务已结束或超过保留期，进度不可恢复"
		} });
		else {
			this.importWizardInst?.reset();
			this.patch({ import: {
				running: false,
				progress: null,
				runId: null,
				step: "select",
				phase: "preview",
				conflictCollector: null,
				selectedFileName: null,
				errors: [],
				error: "任务已结束或超过保留期，进度不可恢复"
			} });
		}
	}
};
/** 模块级单例（浏览器半所有视图共享；构造时自动 load()）。 */
const runStore = new RunStore();
//#endregion
//#region src/sync/retention-policy.ts
/** 缺省策略 = 「保留最近 10 个」——与既有硬编码 FIFO（快照 10 / 定时备份 10）**完全等价**：
*  `keepMonthly=0 / keepYearly=0` 时行为与改造前一致（向后兼容，不改变现有用户行为）。 */
const DEFAULT_RETENTION_POLICY = {
	keepLast: 10,
	keepMonthly: 0,
	keepYearly: 0
};
/** 各层值域（UI 输入 min/max 与 validateRetentionPolicy 同源，避免两处漂移） */
const RETENTION_LIMITS = {
	keepLast: {
		min: 0,
		max: 1e3
	},
	keepMonthly: {
		min: 0,
		max: 120
	},
	keepYearly: {
		min: 0,
		max: 120
	}
};
/**
* 校验保留策略输入（host 侧草稿校验与 UI 共用）。
* 三个字段必须齐备且为整数、落在值域内；**非法一律拒绝并给可读原因**（绝不静默回退，
* 调用方需自行决定是回退缺省还是把错误回给用户）。
*/
function validateRetentionPolicy(raw) {
	if (raw === null || typeof raw !== "object" || Array.isArray(raw)) return {
		ok: false,
		error: "retention must be an object with keepLast/keepMonthly/keepYearly"
	};
	const obj = raw;
	const value = { ...DEFAULT_RETENTION_POLICY };
	const fields = [
		["keepLast", RETENTION_LIMITS.keepLast],
		["keepMonthly", RETENTION_LIMITS.keepMonthly],
		["keepYearly", RETENTION_LIMITS.keepYearly]
	];
	for (const [name, range] of fields) {
		const v = obj[name];
		if (typeof v !== "number" || !Number.isInteger(v)) return {
			ok: false,
			error: `${name} must be an integer`
		};
		if (v < range.min || v > range.max) return {
			ok: false,
			error: `${name} must be between ${range.min} and ${range.max}`
		};
		value[name] = v;
	}
	return {
		ok: true,
		value
	};
}
/** 策略是否含分层（monthly/yearly 任一启用）：调用方据此决定是否走分层路径与提示文案。 */
function hasRetentionTiers(policy) {
	return policy.keepMonthly > 0 || policy.keepYearly > 0;
}
//#endregion
//#region src/ui/backup-schedule.ts
/** 可选的间隔档位（UI 展示顺序 = 由短到长）。 */
const BACKUP_INTERVAL_OPTIONS = [
	"6h",
	"12h",
	"24h",
	"7d",
	"custom"
];
/** 每周星期选项（0-6 → 展示文案由 locale 提供；本层只给值域） */
const WEEKDAY_OPTIONS = [
	{
		value: 0,
		label: "sunday"
	},
	{
		value: 1,
		label: "monday"
	},
	{
		value: 2,
		label: "tuesday"
	},
	{
		value: 3,
		label: "wednesday"
	},
	{
		value: 4,
		label: "thursday"
	},
	{
		value: 5,
		label: "friday"
	},
	{
		value: 6,
		label: "saturday"
	}
];
/** 校验设置输入（host 侧保存路由与组件提交共用；接受 unknown 防御畸形/空 body）。 */
function validateBackupScheduleDraft(draft) {
	if (draft === null || typeof draft !== "object" || Array.isArray(draft)) return {
		ok: false,
		error: "body must be an object with enabled (boolean) and interval"
	};
	const d = draft;
	if (typeof d["enabled"] !== "boolean") return {
		ok: false,
		error: "enabled must be a boolean"
	};
	if (!BACKUP_INTERVAL_OPTIONS.includes(d["interval"])) return {
		ok: false,
		error: "interval must be one of 6h/12h/24h/7d/custom"
	};
	const interval = d["interval"];
	const value = {
		enabled: d["enabled"],
		interval
	};
	if (interval === "custom") {
		const weekly = typeof d["customSchedule"] === "object" && d["customSchedule"] !== null && !Array.isArray(d["customSchedule"]) ? d["customSchedule"] : void 0;
		const dayOfWeek = weekly?.["dayOfWeek"];
		const hour = weekly?.["hour"];
		const minute = weekly?.["minute"];
		if (!Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6 || !Number.isInteger(hour) || hour < 0 || hour > 23 || !Number.isInteger(minute) || minute < 0 || minute > 59) return {
			ok: false,
			error: "customSchedule must include dayOfWeek (0-6), hour (0-23), minute (0-59)"
		};
		value.customSchedule = {
			dayOfWeek,
			hour,
			minute
		};
	}
	if (d["retention"] !== void 0) {
		const parsedRetention = validateRetentionPolicy(d["retention"]);
		if (!parsedRetention.ok) return {
			ok: false,
			error: `retention invalid: ${parsedRetention.error}`
		};
		value.retention = parsedRetention.value;
	}
	return {
		ok: true,
		value
	};
}
/** m-retention：保留策略值域（UI 输入 min/max 直接用；与 validateRetentionPolicy 同源）。 */
const RETENTION_FIELD_LIMITS = RETENTION_LIMITS;
/** m-retention：策略的三层字段顺序（UI 渲染顺序 = 由近及远）。 */
const RETENTION_FIELDS = [
	"keepLast",
	"keepMonthly",
	"keepYearly"
];
/** m-retention：确保拿到完整策略（宿主未返回/字段缺失 → 缺省补齐；绝不产出 undefined 字段）。 */
function normalizeRetentionPolicy(raw) {
	return {
		keepLast: raw?.keepLast ?? DEFAULT_RETENTION_POLICY.keepLast,
		keepMonthly: raw?.keepMonthly ?? DEFAULT_RETENTION_POLICY.keepMonthly,
		keepYearly: raw?.keepYearly ?? DEFAULT_RETENTION_POLICY.keepYearly
	};
}
/** 保留策略相等判定（脏检查用；缺省补齐后再比，避免 undefined 与缺省值的伪差异）。 */
function retentionPolicyEquals(a, b) {
	const x = normalizeRetentionPolicy(a);
	const y = normalizeRetentionPolicy(b);
	return x.keepLast === y.keepLast && x.keepMonthly === y.keepMonthly && x.keepYearly === y.keepYearly;
}
/** 上次运行状态 → Badge kind（success→ok / skipped→info / failed→error / 未知→info）。 */
function backupRunBadgeKind(status) {
	switch (status) {
		case "success": return "ok";
		case "failed": return "error";
		case "skipped": return "info";
		default: return "info";
	}
}
/** 判断草稿相对已保存配置是否有未保存修改（决定「保存设置」按钮可用性）。 */
function backupDraftDirty(draft, saved) {
	if (saved === null) return true;
	if (draft.enabled !== saved.enabled || draft.interval !== saved.interval) return true;
	if (!retentionPolicyEquals(draft.retention, saved.retention)) return true;
	if (draft.interval === "custom") {
		const a = draft.customSchedule;
		const b = saved.customSchedule;
		if (a === void 0 || b === void 0) return a !== b;
		return a.dayOfWeek !== b.dayOfWeek || a.hour !== b.hour || a.minute !== b.minute;
	}
	return false;
}
//#endregion
//#region src/client/common/toast-store.ts
/** 各语义的默认停留时长：成功/普通短、失败/警告长（错误需要更多阅读时间）。 */
const DEFAULT_DURATION_MS = {
	ok: 3200,
	info: 3200,
	warn: 5200,
	error: 6400
};
const EMPTY = { items: [] };
/**
* 全局通知状态机。通常只用下方的 `toast` 单例，测试时可直接 new 一个隔离实例。
*/
var ToastStore = class {
	items = [];
	timers = /* @__PURE__ */ new Map();
	listeners = /* @__PURE__ */ new Set();
	nextId = 1;
	snapshot = EMPTY;
	maxVisible;
	schedule;
	cancel;
	constructor(options = {}) {
		this.maxVisible = options.maxVisible ?? 4;
		this.schedule = options.schedule ?? ((fn, ms) => setTimeout(fn, ms));
		this.cancel = options.cancel ?? ((handle) => {
			clearTimeout(handle);
		});
	}
	subscribe = (listener) => {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	};
	getSnapshot = () => this.snapshot;
	/**
	* 推入一条通知。返回该条 id；空文案返回 0（表示未入队）。
	* 同 kind+text 已在屏时复用原条目并重置计时。
	*/
	push(kind, text, durationMs) {
		const value = text.trim();
		if (value === "") return 0;
		const duration = durationMs ?? DEFAULT_DURATION_MS[kind];
		const existing = this.items.find((t) => t.kind === kind && t.text === value);
		if (existing !== void 0) {
			this.arm(existing.id, duration);
			return existing.id;
		}
		const id = this.nextId++;
		const next = [...this.items, {
			id,
			kind,
			text: value,
			durationMs: duration
		}];
		const overflowCount = Math.max(0, next.length - this.maxVisible);
		for (const stale of next.slice(0, overflowCount)) this.disarm(stale.id);
		this.items = next.slice(overflowCount);
		this.arm(id, duration);
		this.commit();
		return id;
	}
	/** 关闭指定通知（手动关闭 / 计时到期共用）。 */
	dismiss(id) {
		if (!this.items.some((t) => t.id === id)) return;
		this.disarm(id);
		this.items = this.items.filter((t) => t.id !== id);
		this.commit();
	}
	/**
	* 重新计时（悬停暂停用）：取消该条当前计时并按 `durationMs`（缺省沿用原时长）重新排定。
	* 不改变条目位置与内容，因此不产生新快照——避免悬停时触发无谓重渲染。
	*/
	resetTimer(id, durationMs) {
		const item = this.items.find((t) => t.id === id);
		if (item === void 0) return;
		this.arm(id, durationMs ?? item.durationMs);
	}
	/** 暂停自动消失（悬停）：仅取消计时，条目与位置不变。 */
	pauseTimer(id) {
		if (!this.items.some((t) => t.id === id)) return;
		this.disarm(id);
	}
	/** 清空全部通知。 */
	clear() {
		if (this.items.length === 0) return;
		for (const item of this.items) this.disarm(item.id);
		this.items = [];
		this.commit();
	}
	/** 排定 / 重置某条的自动消失计时；durationMs <= 0 表示常驻。 */
	arm(id, durationMs) {
		this.disarm(id);
		if (durationMs <= 0) return;
		this.timers.set(id, this.schedule(() => {
			this.dismiss(id);
		}, durationMs));
	}
	disarm(id) {
		const handle = this.timers.get(id);
		if (handle === void 0) return;
		this.cancel(handle);
		this.timers.delete(id);
	}
	/** 提交新快照并通知订阅者（仅在真正变化时调用）。 */
	commit() {
		this.snapshot = { items: this.items };
		for (const listener of this.listeners) listener();
	}
};
/** 进程级单例（插件内所有页面共用一套通知队列）。 */
const toastStore = new ToastStore();
/**
* 面向业务代码的调用入口。
*
*   toast.ok('已保存配置档案')
*   toast.error(redact(err.message))
*
* 约定：文案在调用前完成 i18n 与 `redact()`（本模块不碰翻译与脱敏）。
*/
const toast = {
	ok: (text, durationMs) => toastStore.push("ok", text, durationMs),
	info: (text, durationMs) => toastStore.push("info", text, durationMs),
	warn: (text, durationMs) => toastStore.push("warn", text, durationMs),
	error: (text, durationMs) => toastStore.push("error", text, durationMs),
	dismiss: (id) => {
		toastStore.dismiss(id);
	},
	clear: () => {
		toastStore.clear();
	}
};
//#endregion
//#region src/client/recovery/recovery-view.ts
/** 把 GET /recovery/status 映射为渲染模型。 */
function toRecoveryView(status) {
	const incidents = status.incidents.map((i) => ({
		operationId: i.operationId,
		operationType: i.operationType,
		state: i.state,
		decision: i.decision,
		snapshotId: i.snapshotId,
		reason: i.reason,
		createdAt: i.createdAt,
		actionable: i.decision !== "needs-attention" && i.snapshotId !== null && i.snapshotId !== "",
		isContinue: i.decision === "rollback-continue"
	}));
	const lock = status.lock !== void 0 && status.lock.attention ? { state: status.lock.state } : null;
	const recoveryRequired = incidents.length > 0 || lock !== null;
	let state = "NORMAL";
	if (recoveryRequired) {
		if (incidents.some((i) => i.state === "RECOVERING")) state = "RECOVERING";
		else if (incidents.some((i) => i.decision === "rollback-continue")) state = "ROLLBACK_CONTINUE";
		else if (incidents.some((i) => i.decision === "rollback-recommended")) state = "ROLLBACK_RECOMMENDED";
		else state = "NEEDS_ATTENTION";
	}
	return {
		state,
		recoveryRequired,
		incidents,
		running: status.running,
		lock
	};
}
/** 把 GET /recovery/:operationId/preview 映射为渲染模型。 */
function toRecoveryPreviewView(p) {
	return {
		operationId: p.operationId,
		operationType: p.operationType,
		state: p.state,
		decision: p.decision,
		snapshotId: p.snapshotId,
		snapshotVerdict: p.snapshotVerdict,
		snapshotMeta: p.snapshotMeta,
		environmentCompatible: p.environmentCompatible,
		reason: p.reason,
		createdAt: p.createdAt,
		actionable: p.decision !== "needs-attention" && p.snapshotId !== null && p.snapshotId !== ""
	};
}
/** verdict → 是否 terminal 成功（MATCH / PARTIAL_MATCH）。 */
function isVerdictSuccess(verdict) {
	return verdict === "MATCH" || verdict === "PARTIAL_MATCH";
}
/** verdict → 是否需人工处理（MISMATCH / VERIFICATION_ERROR）。 */
function isVerdictAttention(verdict) {
	return verdict === "MISMATCH" || verdict === "VERIFICATION_ERROR";
}
/** snapshot verdict → 是否可信（可作 recovery 目标）。 */
function isSnapshotTrusted(verdict) {
	return verdict === "TRUSTED_OPERATION_SNAPSHOT";
}
//#endregion
//#region src/ui/overview-view.ts
/**
* 相对时间：now 与 at（ms）差值 → now/min/hour/day；超出 7 天或 at 无效 → null
* （上层回退绝对日期）。
*/
function relTime(now, at) {
	if (!Number.isFinite(at) || at <= 0 || now < at) return null;
	const diffMs = now - at;
	const MIN = 6e4;
	const HOUR = 60 * MIN;
	const DAY = 24 * HOUR;
	if (diffMs < MIN) return {
		unit: "now",
		n: 0
	};
	if (diffMs < HOUR) return {
		unit: "min",
		n: Math.floor(diffMs / MIN)
	};
	if (diffMs < DAY) return {
		unit: "hour",
		n: Math.floor(diffMs / HOUR)
	};
	if (diffMs < 7 * DAY) return {
		unit: "day",
		n: Math.floor(diffMs / DAY)
	};
	return null;
}
/** ISO 字符串 → ms（无效返回 null）。 */
function isoToMs(iso) {
	if (iso === void 0 || iso === "") return null;
	const t = Date.parse(iso);
	return Number.isFinite(t) ? t : null;
}
/** 最近一次备份（mtime 最大者；空/未加载 → null）。 */
function latestBackup(backups) {
	if (backups === null || backups.length === 0) return null;
	let best = backups[0];
	for (const b of backups) if (b.mtimeMs > best.mtimeMs) best = b;
	return best;
}
/** 最近一次快照（createdAt 最大者；空/未加载 → null）。 */
function latestSnapshot(snapshots) {
	if (snapshots === null || snapshots.length === 0) return null;
	let best = snapshots[0];
	let bestMs = isoToMs(best.createdAt) ?? 0;
	for (const s of snapshots) {
		const ms = isoToMs(s.createdAt) ?? 0;
		if (ms > bestMs) {
			best = s;
			bestMs = ms;
		}
	}
	return best;
}
/**
* 构建四张指标卡（备份文件 / 安全快照 / 定时备份 / 远程同步）。
* 未加载的数据源 value='—' + metaKey=null；metaParams.time 是 ms 数字字符串，
* 组件层用 relTime 渲染为相对时间文案。
*/
function buildOverviewMetrics(inputs) {
	const { backups, snapshots, schedule, sync } = inputs;
	const lastBackupAt = latestBackup(backups)?.mtimeMs ?? null;
	const backupMetric = backups === null ? {
		key: "backups",
		kind: "count",
		value: "—",
		metaKey: null,
		metaParams: {},
		metaTone: "neutral"
	} : {
		key: "backups",
		kind: "count",
		value: String(backups.length),
		metaKey: lastBackupAt !== null ? "meta.lastBackup" : "meta.noBackup",
		metaParams: lastBackupAt !== null ? { time: String(lastBackupAt) } : {},
		metaTone: "neutral"
	};
	const lastSnapshotMs = isoToMs(latestSnapshot(snapshots)?.createdAt);
	const snapshotMetric = snapshots === null ? {
		key: "snapshots",
		kind: "count",
		value: "—",
		metaKey: null,
		metaParams: {},
		metaTone: "neutral"
	} : {
		key: "snapshots",
		kind: "count",
		value: String(snapshots.length),
		metaKey: lastSnapshotMs !== null ? "meta.lastBackup" : "meta.noBackup",
		metaParams: lastSnapshotMs !== null ? { time: String(lastSnapshotMs) } : {},
		metaTone: "neutral"
	};
	let scheduleMetric;
	if (schedule === null) scheduleMetric = {
		key: "schedule",
		kind: "state",
		value: "",
		valueKey: void 0,
		metaKey: null,
		metaParams: {},
		metaTone: "neutral"
	};
	else {
		const lastRunMs = isoToMs(schedule.lastRunAt);
		const failed = schedule.lastRunStatus === "failed";
		scheduleMetric = {
			key: "schedule",
			kind: "state",
			value: "",
			valueKey: schedule.enabled ? "state.on" : "state.off",
			metaKey: !schedule.enabled ? "meta.scheduleOff" : failed ? "meta.scheduleFail" : lastRunMs !== null ? "meta.scheduleOn" : "meta.never",
			metaParams: lastRunMs !== null ? { time: String(lastRunMs) } : {},
			metaTone: schedule.enabled && failed ? "warn" : "neutral"
		};
	}
	let syncMetric;
	if (sync === null) syncMetric = {
		key: "sync",
		kind: "state",
		value: "",
		valueKey: void 0,
		metaKey: null,
		metaParams: {},
		metaTone: "neutral"
	};
	else {
		const lastSyncMs = isoToMs(sync.lastSyncAt);
		syncMetric = {
			key: "sync",
			kind: "state",
			value: "",
			valueKey: sync.configured ? "state.on" : "state.off",
			metaKey: !sync.configured ? "meta.syncOff" : lastSyncMs !== null ? "meta.syncOn" : "meta.never",
			metaParams: lastSyncMs !== null ? { time: String(lastSyncMs) } : {},
			metaTone: "neutral"
		};
	}
	return [
		backupMetric,
		snapshotMetric,
		scheduleMetric,
		syncMetric
	];
}
/**
* 配置健康判定（保守优先级）：
* 1. SAFE MODE 激活（有未解决恢复事项）→ error（最高优先，需用户处理）；
* 2. 已加载且备份与快照均为空 → warn「尚无任何备份」（新装机引导场景）；
* 3. 定时备份开启但上次运行失败 → warn；
* 4. 其余 → ok。
* 数据未加载（null）不降级健康状态（避免加载闪红）。
*/
function overviewHealth(inputs) {
	if (inputs.recoveryRequired === true) return {
		kind: "error",
		textKey: "health.recovery"
	};
	if (inputs.backups !== null && inputs.snapshots !== null && inputs.backups.length === 0 && inputs.snapshots.length === 0) return {
		kind: "warn",
		textKey: "health.noBackup"
	};
	if (inputs.schedule !== null && inputs.schedule.enabled && inputs.schedule.lastRunStatus === "failed") return {
		kind: "warn",
		textKey: "health.scheduleFailed"
	};
	return {
		kind: "ok",
		textKey: "health.ok"
	};
}
/** 已知迁移操作 kind（与 core/migration-history.ts MIGRATION_KINDS 对齐；仅用于 key 归一）。 */
const KNOWN_KINDS = /* @__PURE__ */ new Set([
	"import",
	"restore",
	"rollback",
	"profile-switch",
	"profile-delete",
	"profile-rename",
	"profile-save",
	"profile-import",
	"sync-apply",
	"autosync",
	"recovery",
	"backup",
	"snapshot-delete",
	"snapshot-prune"
]);
/** 最近活动列表：按时间倒序取前 limit 条（kindKey 归一 + 徽章语义映射）。 */
function overviewActivity(history, limit = 5) {
	if (history === null || history.length === 0) return [];
	return [...history].sort((a, b) => {
		const ma = isoToMs(a.at) ?? 0;
		return (isoToMs(b.at) ?? 0) - ma;
	}).slice(0, limit).map((e) => ({
		at: e.at,
		badge: e.result === "success" ? "ok" : e.result === "failed" ? "error" : "warn",
		kindKey: KNOWN_KINDS.has(e.kind) ? `overview.kind.${e.kind}` : "overview.kind.other",
		summary: e.summary
	}));
}
/** 空态判定：备份与快照均已加载且都为空 → 显示「开始保护你的配置」引导。 */
function overviewEmptyState(inputs) {
	return inputs.backups !== null && inputs.snapshots !== null && inputs.backups.length === 0 && inputs.snapshots.length === 0;
}
//#endregion
//#region \0config-manager-css:D:\dsh-config-manager\src\client\config-manager.module.css.js
const css = "._0XjAG_section{height:100%;min-height:0;font-family:var(--dsw-font-family);color:var(--dsw-alias-label-primary);flex-direction:column;font-size:12.5px;line-height:1.5;display:flex;position:relative;overflow:hidden}._0XjAG_section :is(button,a,input,select,textarea,[role=tab]){transition-property:background-color,border-color,color;transition-duration:.12s;transition-timing-function:ease}._0XjAG_section :is(button,a,input,select,textarea,[role=tab]):focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}._0XjAG_mono{font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}._0XjAG_section svg{color:inherit;flex:none}._0XjAG_kbd{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);border-bottom-width:2px;border-radius:4px;padding:0 5px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10.5px;line-height:16px;display:inline-block}._0XjAG_shellNav{flex:none;align-items:center;gap:8px;padding:8px;display:flex}._0XjAG_navStrip{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);scrollbar-width:none;border-radius:8px;flex:auto;align-items:center;gap:2px;min-width:0;padding:2px;display:flex;overflow-x:auto}._0XjAG_navStrip::-webkit-scrollbar{display:none}._0XjAG_navTab{height:24px;font:inherit;color:var(--dsw-alias-label-secondary);cursor:pointer;white-space:nowrap;background:0 0;border:none;border-radius:6px;flex:none;align-items:center;gap:5px;padding:0 10px;font-size:12px;font-weight:500;display:inline-flex;position:relative}._0XjAG_navTab:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}._0XjAG_navTab:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px;border-radius:6px}._0XjAG_navTab[data-active]{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 16%, transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb, var(--dsw-alias-state-business-primary) 45%, transparent);color:var(--dsw-alias-label-primary);font-weight:600}._0XjAG_navDot{background:var(--dsw-alias-state-error-primary);border-radius:50%;flex:none;width:6px;height:6px}._0XjAG_navActions{flex:none;align-items:center;gap:4px;margin-left:4px;display:flex}._0XjAG_navActions ._0XjAG_ghostButton[data-active]{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 55%, transparent);color:var(--dsw-alias-state-business-primary)}._0XjAG_iconBtn{width:26px;height:26px;font:inherit;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-self:center;align-items:center;padding:0;font-size:14px;line-height:1;display:inline-flex}._0XjAG_iconBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}._0XjAG_iconBtn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_iconBtn:disabled{opacity:.45;cursor:default}._0XjAG_iconBtn[data-active]{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 14%, transparent);color:var(--dsw-alias-state-business-primary)}._0XjAG_iconBtn[data-danger]{color:var(--dsw-alias-state-error-primary)}._0XjAG_iconBtn[data-danger]:hover{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);border-color:var(--dsw-alias-state-error-primary);color:var(--dsw-alias-state-error-primary)}._0XjAG_rowDivider{background:var(--dsw-alias-border-l2);flex:none;align-self:center;width:1px;height:14px;margin:0 2px}._0XjAG_shellMain{overscroll-behavior:contain;flex-direction:column;flex:auto;min-height:0;display:flex;overflow-y:auto}._0XjAG_pagePad{flex-direction:column;flex:auto;min-height:0;padding:12px 16px 16px;display:flex}._0XjAG_statusBar{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);height:28px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;border-radius:8px;flex:none;align-items:center;gap:10px;margin:0 8px 8px;padding:0 10px;font-size:11px;display:flex;overflow:hidden}._0XjAG_statusDot{background:var(--dsw-alias-label-tertiary);border-radius:50%;flex:none;width:7px;height:7px;display:inline-block}._0XjAG_statusDot[data-kind=ok]{background:var(--dsw-alias-state-success-primary)}._0XjAG_statusDot[data-kind=info]{background:var(--dsw-alias-state-business-primary)}._0XjAG_statusDot[data-kind=warn]{background:var(--dsw-alias-state-warn-primary)}._0XjAG_statusDot[data-kind=error]{background:var(--dsw-alias-state-error-primary)}._0XjAG_statusDot[data-pulse]{animation:1.2s ease-in-out infinite _0XjAG_statusPulse}@keyframes _0XjAG_statusPulse{0%,to{opacity:1}50%{opacity:.35}}._0XjAG_statusText{text-overflow:ellipsis;overflow:hidden}._0XjAG_statusSpacer{flex:auto}._0XjAG_statusMeta{color:var(--dsw-alias-label-tertiary);flex:none}._0XjAG_primaryButton,._0XjAG_ghostButton,._0XjAG_dangerButton{height:28px;font:inherit;white-space:nowrap;cursor:pointer;user-select:none;border:1px solid #0000;border-radius:6px;justify-content:center;align-items:center;gap:6px;padding:0 12px;font-size:12.5px;font-weight:600;line-height:1;display:inline-flex}._0XjAG_primaryButton{background:var(--dsw-alias-button-info-fill);color:var(--dsw-alias-label-primary-foreground)}._0XjAG_primaryButton:hover:not(:disabled){background:var(--dsw-alias-button-info-hover)}._0XjAG_ghostButton{border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);background:0 0}._0XjAG_ghostButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}._0XjAG_dangerButton{border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);color:var(--dsw-alias-state-error-primary);background:0 0}._0XjAG_dangerButton:hover:not(:disabled){background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);border-color:var(--dsw-alias-state-error-primary)}._0XjAG_primaryButton:focus-visible,._0XjAG_ghostButton:focus-visible,._0XjAG_dangerButton:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_primaryButton:disabled,._0XjAG_ghostButton:disabled,._0XjAG_dangerButton:disabled{opacity:.45;cursor:default}._0XjAG_primaryButton[data-size=sm],._0XjAG_ghostButton[data-size=sm],._0XjAG_dangerButton[data-size=sm]{border-radius:5px;height:24px;padding:0 8px;font-size:11.5px}._0XjAG_input,._0XjAG_select{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-specific-input-major);height:28px;font:inherit;color:var(--dsw-alias-label-primary);box-sizing:border-box;border-radius:6px;padding:0 8px;font-size:12.5px}._0XjAG_field>._0XjAG_input,._0XjAG_field>._0XjAG_select{width:100%}._0XjAG_input::placeholder{color:var(--dsw-alias-label-tertiary)}._0XjAG_input:hover,._0XjAG_select:hover{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 40%, var(--dsw-alias-border-l2))}._0XjAG_input:focus,._0XjAG_select:focus{border-color:var(--dsw-alias-state-business-primary);box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent);outline:none}._0XjAG_input:disabled,._0XjAG_select:disabled{opacity:.5;cursor:default}._0XjAG_select{appearance:none;background-image:linear-gradient(45deg, transparent 50%, var(--dsw-alias-label-secondary) 50%), linear-gradient(135deg, var(--dsw-alias-label-secondary) 50%, transparent 50%);cursor:pointer;background-position:calc(100% - 12px) 12px,calc(100% - 8px) 12px;background-repeat:no-repeat;background-size:4px 4px;padding-right:22px}._0XjAG_input[type=password]{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px}._0XjAG_checkboxRow,._0XjAG_radioLabel{cursor:pointer;color:var(--dsw-alias-label-primary);align-items:flex-start;gap:7px;font-size:12.5px;display:flex}._0XjAG_checkboxRow input,._0XjAG_radioLabel input{width:14px;height:14px;accent-color:var(--dsw-alias-state-business-primary);cursor:pointer;flex:none;margin:2px 0 0}._0XjAG_checkboxRow input:focus-visible,._0XjAG_radioLabel input:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}._0XjAG_badge{white-space:nowrap;border:1px solid var(--dsw-alias-border-l2);height:18px;color:var(--dsw-alias-label-secondary);border-radius:9px;align-items:center;gap:4px;padding:0 7px;font-size:10.5px;font-weight:600;line-height:1;display:inline-flex}._0XjAG_badgeOk{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 14%, transparent);color:var(--dsw-alias-state-success-primary);border-color:#0000}._0XjAG_badgeInfo{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 30%, transparent);color:var(--dsw-alias-label-secondary);background:0 0}._0XjAG_badgeWarn{background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 14%, transparent);color:var(--dsw-alias-state-warn-primary);border-color:#0000}._0XjAG_badgeError{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, transparent);color:var(--dsw-alias-state-error-primary);border-color:#0000}._0XjAG_banner{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);box-sizing:border-box;border-radius:8px;flex-wrap:wrap;align-items:center;gap:6px 10px;width:100%;margin:0 0 10px;padding:8px 12px;font-size:12.5px;display:flex}._0XjAG_banner[data-kind=ok]{border-color:color-mix(in srgb, var(--dsw-alias-state-success-primary) 35%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 9%, transparent)}._0XjAG_banner[data-kind=info]{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 30%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 8%, transparent)}._0XjAG_banner[data-kind=warn]{border-color:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 9%, transparent)}._0XjAG_banner[data-kind=error]{border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent)}._0XjAG_spinnerWrap{vertical-align:middle;align-items:center;gap:7px;display:inline-flex}._0XjAG_spinner{border:2px solid color-mix(in srgb, var(--dsw-alias-state-business-primary) 25%, transparent);border-top-color:var(--dsw-alias-state-business-primary);border-radius:50%;flex:none;width:13px;height:13px;animation:.7s linear infinite _0XjAG_spin;display:inline-block}@keyframes _0XjAG_spin{to{transform:rotate(360deg)}}._0XjAG_spinnerLabel{color:var(--dsw-alias-label-secondary);font-size:12px}._0XjAG_card{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;margin:0 0 10px;padding:12px}._0XjAG_groupLabel{letter-spacing:.02em;color:var(--dsw-alias-label-tertiary);margin-bottom:8px;font-size:11px;font-weight:700;display:block}._0XjAG_groupHeader{align-items:baseline;gap:8px;margin-bottom:10px;display:flex}._0XjAG_groupHeader ._0XjAG_groupLabel{white-space:nowrap;flex:none;margin-bottom:0}._0XjAG_groupNote{color:var(--dsw-alias-label-tertiary);font-size:11px}._0XjAG_groupItems{flex-direction:column;gap:6px;display:flex}._0XjAG_field{flex-direction:column;gap:4px;margin:0 0 10px;display:flex}._0XjAG_fieldLabel{color:var(--dsw-alias-label-secondary);font-size:11.5px;font-weight:600}._0XjAG_hint{color:var(--dsw-alias-label-tertiary);font-size:11.5px;line-height:1.5}._0XjAG_formError{color:var(--dsw-alias-state-error-primary);font-size:11.5px}._0XjAG_sectionTitleBlock{min-width:0}._0XjAG_sectionTitle{color:var(--dsw-alias-label-primary);margin:0;font-size:13px;font-weight:700;line-height:1.4}._0XjAG_sectionSubtitle{color:var(--dsw-alias-label-tertiary);margin:1px 0 0;font-size:11.5px}._0XjAG_empty{border:1px dashed var(--dsw-alias-border-l2);text-align:center;color:var(--dsw-alias-label-tertiary);box-sizing:border-box;border-radius:8px;flex-direction:column;justify-content:center;align-items:center;gap:4px;width:100%;padding:28px 16px;font-size:12px;display:flex}._0XjAG_emptyHero{text-align:center;flex-direction:column;flex:auto;justify-content:center;align-items:center;gap:6px;min-height:320px;display:flex}._0XjAG_emptyHeroSymbol{color:var(--dsw-alias-label-tertiary);opacity:.75;font-size:30px;line-height:1}._0XjAG_emptyHeroTitle{color:var(--dsw-alias-label-primary);font-size:13px;font-weight:700}._0XjAG_emptyHeroBody{max-width:340px;color:var(--dsw-alias-label-tertiary);margin:0 0 6px;font-size:12px;line-height:1.6}._0XjAG_tableWrap{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;margin-bottom:10px;overflow:hidden}._0XjAG_tableFixed th,._0XjAG_tableFixed td{padding-left:12px;padding-right:12px}._0XjAG_tableScroll{max-height:420px;overflow:auto}._0XjAG_dataTable{border-collapse:collapse;width:100%;font-size:12px}._0XjAG_dataTable th,._0XjAG_dataTable td{box-sizing:border-box}._0XjAG_tableFixed{table-layout:fixed}._0XjAG_tableFixed td,._0XjAG_tableFixed th{text-overflow:ellipsis;overflow:hidden}._0XjAG_tableCompact th,._0XjAG_tableCompact td{padding-left:8px;padding-right:8px}._0XjAG_dataTable td._0XjAG_dim{white-space:nowrap}._0XjAG_dataTable th{z-index:1;text-align:left;color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-layer-2);border-bottom:1px solid var(--dsw-alias-border-l1);white-space:nowrap;padding:6px 10px;font-size:11px;font-weight:600;position:sticky;top:0}._0XjAG_dataTable td{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);vertical-align:middle;color:var(--dsw-alias-label-primary);padding:6px 10px}._0XjAG_dataTable tbody tr:last-child td{border-bottom:none}._0XjAG_dataTable tbody tr{transition:background-color .1s ease-out}._0XjAG_dataTable tbody tr:hover{background:var(--dsw-alias-interactive-bg-hover)}._0XjAG_dataTable tbody tr[data-selected]{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 9%, transparent)}._0XjAG_dataTable ._0XjAG_num{text-align:right;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11.5px}._0XjAG_dataTable ._0XjAG_dim{color:var(--dsw-alias-label-secondary)}._0XjAG_dataTable ._0XjAG_cellActions{text-align:right;white-space:nowrap}._0XjAG_dataTable td._0XjAG_cellActions{text-overflow:clip;overflow:visible}._0XjAG_rowActions{align-items:center;gap:3px;display:inline-flex}._0XjAG_cellMain{flex-direction:column;justify-content:center;gap:1px;min-width:0;min-height:30px;display:flex}._0XjAG_cellTitle{text-overflow:ellipsis;white-space:nowrap;font-weight:500;overflow:hidden}._0XjAG_cellMeta{color:var(--dsw-alias-label-tertiary);align-items:center;gap:6px;min-width:0;font-size:11px;display:inline-flex;overflow:hidden}._0XjAG_cellMetaNote{flex:0 auto;align-items:center;gap:3px;min-width:0;display:inline-flex}._0XjAG_cellMetaNoteText{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}._0XjAG_statGrid,._0XjAG_metricGrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:10px;display:grid}._0XjAG_statCard,._0XjAG_metricCard{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;flex-direction:column;gap:2px;min-width:0;padding:10px 12px;display:flex}button._0XjAG_statCard{font:inherit;color:inherit;text-align:left;cursor:pointer;width:100%}button._0XjAG_statCard:hover{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 45%, var(--dsw-alias-border-l1))}button._0XjAG_statCard:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_actionRow ._0XjAG_banner{flex:auto;min-width:0;margin:0}._0XjAG_statValue{color:var(--dsw-alias-label-primary);align-items:baseline;gap:5px;font-size:19px;font-weight:700;line-height:1.2;display:flex}._0XjAG_metricValue{font-size:19px;font-weight:700;line-height:1.2}._0XjAG_statValueSmall{font-size:13px;font-weight:600}._0XjAG_statLabel,._0XjAG_metricLabel{color:var(--dsw-alias-label-tertiary);font-size:11px;font-weight:600}._0XjAG_statMeta,._0XjAG_metricMeta{color:var(--dsw-alias-label-tertiary);text-overflow:ellipsis;white-space:nowrap;font-size:11px;overflow:hidden}._0XjAG_warnText{color:var(--dsw-alias-state-warn-primary)}._0XjAG_kvRow{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);align-items:baseline;gap:10px;min-width:0;padding:5px 0;font-size:12px;display:flex}._0XjAG_kvRow:last-child{border-bottom:none}._0XjAG_kvKey{width:88px;color:var(--dsw-alias-label-tertiary);flex:none;font-size:11.5px}._0XjAG_kvValue{overflow-wrap:anywhere;flex:auto;min-width:0}._0XjAG_kvValue._0XjAG_mono{color:var(--dsw-alias-label-secondary);font-size:11.5px}._0XjAG_segGroup,._0XjAG_modeTabs{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);border-radius:7px;align-items:center;gap:2px;margin:0 0 10px;padding:2px;display:inline-flex}._0XjAG_segItem,._0XjAG_modeTab{height:22px;font:inherit;color:var(--dsw-alias-label-secondary);cursor:pointer;white-space:nowrap;background:0 0;border:none;border-radius:5px;align-items:center;gap:5px;padding:0 9px;font-size:11.5px;font-weight:500;display:inline-flex}._0XjAG_segItem:hover,._0XjAG_modeTab:hover{color:var(--dsw-alias-label-primary)}._0XjAG_segItem:focus-visible,._0XjAG_modeTab:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_segItem[data-active],._0XjAG_modeTab[data-active]{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);box-shadow:0 0 0 1px var(--dsw-alias-border-l1);font-weight:600}._0XjAG_modeHint{color:var(--dsw-alias-label-tertiary);margin:-4px 0 10px;font-size:11.5px}._0XjAG_stepper{scrollbar-width:none;align-items:center;padding:2px 0;display:flex;overflow-x:auto}._0XjAG_stepper::-webkit-scrollbar{display:none}._0XjAG_stepperStep{flex:none;align-items:center;gap:5px;display:inline-flex}._0XjAG_stepperDot{border:1.5px solid var(--dsw-alias-border-l2);width:17px;height:17px;color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-layer-2);border-radius:50%;flex:none;justify-content:center;align-items:center;font-size:9.5px;font-weight:700;display:inline-flex}._0XjAG_stepperDot[data-state=current]{border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary-foreground)}._0XjAG_stepperDot[data-state=done]{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 16%, transparent);color:var(--dsw-alias-state-success-primary);border-color:#0000}._0XjAG_stepperLabel{color:var(--dsw-alias-label-tertiary);white-space:nowrap;font-size:11px}._0XjAG_stepperStep[data-state=current] ._0XjAG_stepperLabel{color:var(--dsw-alias-label-primary);font-weight:600}._0XjAG_stepperStep[data-state=done] ._0XjAG_stepperLabel{color:var(--dsw-alias-label-secondary)}._0XjAG_stepperConnector{background:var(--dsw-alias-border-l2);flex:none;width:14px;height:1.5px;margin:0 5px}._0XjAG_stepperStep[data-state=done] ._0XjAG_stepperConnector{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, transparent)}._0XjAG_progressBlock{margin:0 0 10px}._0XjAG_progressTrack{background:color-mix(in srgb, var(--dsw-alias-border-l1) 80%, transparent);border-radius:3px;height:5px;position:relative;overflow:hidden}._0XjAG_progressBar{background:var(--dsw-alias-state-business-primary);border-radius:3px;transition:width .3s ease-out;position:absolute;inset:0 auto 0 0}._0XjAG_progressBarDone{background:var(--dsw-alias-state-success-primary)}._0XjAG_progressIndeterminate{background:var(--dsw-alias-state-business-primary);border-radius:3px;width:34%;animation:1.15s ease-in-out infinite _0XjAG_indet;position:absolute;top:0;bottom:0}@keyframes _0XjAG_indet{0%{left:-34%}to{left:100%}}._0XjAG_progressMeta{color:var(--dsw-alias-label-secondary);align-items:center;gap:8px;margin-top:5px;font-size:11.5px;display:flex}._0XjAG_progressLabel{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}._0XjAG_progressPercent{color:var(--dsw-alias-label-tertiary);flex:none;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}._0XjAG_progressBadge{color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:4px;font-size:11px;display:inline-flex}._0XjAG_progressBadgeCount{background:color-mix(in srgb, var(--dsw-alias-state-info-primary) 14%, transparent);color:var(--dsw-alias-label-secondary);border-radius:8px;padding:0 5px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}._0XjAG_progressBadgeSection{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}._0XjAG_progressDetail{color:var(--dsw-alias-label-tertiary);margin-top:3px;font-size:11px}._0XjAG_planScroll,._0XjAG_reportScroll,._0XjAG_confirmScroll,._0XjAG_pullScroll,._0XjAG_diffScroll,._0XjAG_historyScroll,._0XjAG_consultScroll{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);border-radius:8px;max-height:380px;overflow:auto}._0XjAG_consultScroll{padding:0 6px}._0XjAG_logScroll{background:var(--dsw-alias-bg-base);max-height:220px;overflow:auto}._0XjAG_dialogMask{z-index:100;background:color-mix(in srgb, var(--dsw-alias-bg-base) 55%, transparent);justify-content:center;align-items:center;display:flex;position:fixed;inset:0}._0XjAG_dialogContentCenter{z-index:101;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}._0XjAG_dialogCard{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);width:min(640px,100vw - 48px,95%);max-width:calc(100vw - 48px);max-height:min(600px,100vh - 64px,92%);box-shadow:0 12px 32px color-mix(in srgb, var(--dsw-alias-bg-base) 40%, transparent);border-radius:10px;flex-direction:column;display:flex}._0XjAG_dialogHeader{color:var(--dsw-alias-label-primary);padding:12px 16px 0;font-size:13px;font-weight:700}._0XjAG_dialogHeaderRow{align-items:center;gap:8px;padding:12px 14px 0;display:flex}._0XjAG_dialogClose{margin-left:auto}._0XjAG_dialogBody{min-height:0;color:var(--dsw-alias-label-secondary);flex:auto;padding:8px 16px 12px;font-size:12.5px;overflow-y:auto}._0XjAG_dialogBodyScroll{max-height:460px;overflow-y:auto}._0XjAG_dialogWide{width:min(720px,100vw - 48px,96%);max-height:min(620px,100vh - 64px,92%)}._0XjAG_dialogFooter{border-top:1px solid var(--dsw-alias-border-l1);justify-content:flex-end;gap:8px;margin:0;padding:10px 16px 14px}._0XjAG_toastViewport{z-index:120;pointer-events:none;flex-direction:column;align-items:flex-end;gap:8px;max-width:calc(100% - 20px);display:flex;position:absolute;bottom:42px;right:10px}._0XjAG_toast{pointer-events:auto;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);width:fit-content;max-width:340px;box-shadow:0 8px 24px color-mix(in srgb, var(--dsw-alias-bg-base) 45%, transparent);color:var(--dsw-alias-label-primary);border-radius:8px;align-items:flex-start;gap:8px;padding:8px 10px;font-size:12px;line-height:1.45;animation:.16s ease-out _0XjAG_toastIn;display:flex}@keyframes _0XjAG_toastIn{0%{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}._0XjAG_toast[data-kind=ok]{border-color:color-mix(in srgb, var(--dsw-alias-state-success-primary) 40%, transparent)}._0XjAG_toast[data-kind=ok] ._0XjAG_toastGlyph{color:var(--dsw-alias-state-success-primary)}._0XjAG_toast[data-kind=info] ._0XjAG_toastGlyph{color:var(--dsw-alias-state-business-primary)}._0XjAG_toast[data-kind=warn]{border-color:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, transparent)}._0XjAG_toast[data-kind=warn] ._0XjAG_toastGlyph{color:var(--dsw-alias-state-warn-primary)}._0XjAG_toast[data-kind=error]{border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent)}._0XjAG_toast[data-kind=error] ._0XjAG_toastGlyph{color:var(--dsw-alias-state-error-primary)}._0XjAG_toastGlyph{flex:none;margin-top:1px;display:inline-flex}._0XjAG_toastText{word-break:break-word;min-width:0}._0XjAG_toast>button{flex:none;width:18px;height:18px;margin-left:2px}._0XjAG_drawerMask{z-index:90;background:color-mix(in srgb, var(--dsw-alias-bg-base) 35%, transparent);position:fixed;inset:0}._0XjAG_drawerPanel{z-index:91;border-left:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);width:400px;max-width:calc(100vw - 64px);box-shadow:-12px 0 32px color-mix(in srgb, var(--dsw-alias-bg-base) 35%, transparent);flex-direction:column;animation:.18s ease-out _0XjAG_drawerIn;display:flex;position:fixed;top:0;bottom:0;right:0}@keyframes _0XjAG_drawerIn{0%{opacity:0;transform:translate(24px)}to{opacity:1;transform:translate(0)}}._0XjAG_drawerHeader{border-bottom:1px solid var(--dsw-alias-border-l1);flex:none;align-items:center;gap:8px;padding:12px 14px;display:flex}._0XjAG_drawerTitle{color:var(--dsw-alias-label-primary);flex:auto;font-size:13px;font-weight:700}._0XjAG_drawerBody{flex:auto;min-height:0;padding:12px 14px;overflow-y:auto}._0XjAG_actionRow{flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 10px;display:flex}._0XjAG_actionRowTop{flex-wrap:wrap;align-items:center;gap:8px;margin:10px 0;display:flex}._0XjAG_tabRow{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);border-radius:7px;flex-wrap:wrap;align-items:center;gap:2px;width:fit-content;margin:10px 0;padding:2px;display:flex}._0XjAG_snapshotPickerHint{margin-top:4px;margin-bottom:10px}._0XjAG_headRow{flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 10px;display:flex}._0XjAG_headRow ._0XjAG_groupLabel{margin-bottom:0}._0XjAG_authorRow{flex-wrap:wrap;align-items:center;gap:8px;margin-top:8px;display:flex}._0XjAG_scheduleFacts{margin-top:8px}._0XjAG_scheduleRow{margin-top:10px}._0XjAG_scheduleNote{margin-top:6px}._0XjAG_authorRow ._0XjAG_groupLabel{margin-bottom:0}._0XjAG_marketFilterGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-bottom:8px;display:grid}._0XjAG_marketFilterSearch{grid-column:1/-1}._0XjAG_marketFilterMeta{flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:8px;display:flex}._0XjAG_pushRight{margin-left:auto}._0XjAG_statStrip{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);scrollbar-width:none;border-radius:8px;align-items:stretch;gap:0;min-height:32px;margin-bottom:10px;display:flex;overflow-x:auto}._0XjAG_statStrip::-webkit-scrollbar{display:none}._0XjAG_statStrip>:last-child{padding-right:12px}._0XjAG_statStrip[data-tone=error]{border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 7%, transparent)}._0XjAG_statStrip[data-tone=warn]{border-color:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 40%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 6%, transparent)}._0XjAG_statHealth{color:var(--dsw-alias-label-primary);white-space:nowrap;flex:none;align-items:center;gap:6px;padding:0 12px;font-size:12px;font-weight:600;display:flex}._0XjAG_statHealthAction{font:inherit;cursor:pointer;text-align:left;background:0 0;border:none;font-size:12px;font-weight:600}._0XjAG_statHealthAction:hover{background:var(--dsw-alias-interactive-bg-hover)}._0XjAG_statHealthAction:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px;border-radius:6px}._0XjAG_statSeg{border:none;border-left:1px solid var(--dsw-alias-border-l1);font:inherit;color:var(--dsw-alias-label-secondary);white-space:nowrap;cursor:pointer;background:0 0;flex:none;align-items:center;gap:6px;padding:0 12px;font-size:11.5px;display:flex}._0XjAG_statSeg>span:first-child{color:var(--dsw-alias-label-tertiary)}._0XjAG_statSeg:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}._0XjAG_statSeg:hover>span:first-child{color:var(--dsw-alias-label-secondary)}._0XjAG_statSeg:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:-2px}._0XjAG_statSeg b{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;font-weight:700}._0XjAG_statSegDim{color:var(--dsw-alias-label-tertiary)}._0XjAG_toolRow{flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:10px;display:flex}._0XjAG_infoGrid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:4px 24px;display:grid}._0XjAG_infoRow{align-items:baseline;gap:8px;min-width:0;padding:2px 0;font-size:12px;display:flex}._0XjAG_infoKey{width:76px;color:var(--dsw-alias-label-tertiary);flex:none;font-size:11.5px}._0XjAG_infoValue{flex:auto;align-items:center;gap:8px;min-width:0;display:inline-flex}._0XjAG_infoValue ._0XjAG_mono{color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;font-size:11px;overflow:hidden}._0XjAG_copyBtn{width:20px;height:20px;font:inherit;color:var(--dsw-alias-label-tertiary);cursor:pointer;background:0 0;border:none;border-radius:4px;flex:none;justify-content:center;align-items:center;padding:0;font-size:11px;line-height:1;display:inline-flex}._0XjAG_copyBtn:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}._0XjAG_copyBtn:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_activityRow ._0XjAG_copyBtn{opacity:0}._0XjAG_activityRow:hover ._0XjAG_copyBtn,._0XjAG_activityRow ._0XjAG_copyBtn:focus-visible{opacity:1}._0XjAG_activityCard{flex-direction:column;min-height:0;margin-bottom:0;display:flex}._0XjAG_activityHeader{align-items:center;gap:8px;margin-bottom:8px;display:flex}._0XjAG_activityTitle{letter-spacing:.02em;color:var(--dsw-alias-label-tertiary);flex:auto;font-size:11px;font-weight:700}._0XjAG_activityRows{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);border-radius:8px;flex:0 auto;min-height:0;overflow-y:auto}._0XjAG_activityFit{max-height:272px}._0XjAG_activityRow{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);grid-template-columns:72px minmax(0,1fr) auto;align-items:center;gap:10px;min-width:0;padding:5px 10px;font-size:11.5px;line-height:1.5;display:grid}._0XjAG_activityRow:last-child{border-bottom:none}._0XjAG_activityTime{color:var(--dsw-alias-label-tertiary);white-space:nowrap;justify-self:end;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10.5px;line-height:1.5}._0XjAG_activityKind{color:var(--dsw-alias-label-tertiary);white-space:nowrap;flex:none;font-size:11px;line-height:1.5}._0XjAG_activitySummary{min-width:0;color:var(--dsw-alias-label-secondary);align-items:center;gap:6px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;line-height:1.5;display:inline-flex}._0XjAG_activitySummaryText{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}._0XjAG_activityBadge{flex:none;justify-content:flex-end;align-items:center;line-height:1.5;display:inline-flex}._0XjAG_activityResultOk{color:var(--dsw-alias-label-tertiary);white-space:nowrap;align-items:center;gap:5px;font-size:11px;line-height:1.5;display:inline-flex}._0XjAG_factGrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:6px 12px;display:grid}._0XjAG_factCell{flex-direction:column;gap:2px;min-width:0;display:flex}._0XjAG_factLabel{color:var(--dsw-alias-label-tertiary);white-space:nowrap;font-size:10.5px}._0XjAG_factValue{color:var(--dsw-alias-label-primary);white-space:nowrap;text-overflow:ellipsis;font-size:12px;font-weight:600;overflow:hidden}._0XjAG_sectionGrid{grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:0 28px;display:grid}._0XjAG_sectionRow{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);grid-template-columns:minmax(0,1fr) auto 56px;align-items:center;gap:10px;min-width:0;padding:4px 0;font-size:11.5px;display:grid}._0XjAG_sectionRow:nth-last-child(-n+2){border-bottom:none}._0XjAG_sectionName{min-width:0;color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;overflow:hidden}._0XjAG_sectionCount{color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums;white-space:nowrap;justify-self:end;font-size:10.5px}._0XjAG_sectionSize{color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums;white-space:nowrap;justify-self:end;font-size:10.5px}._0XjAG_quickActionHint,._0XjAG_todoText{line-break:strict}._0XjAG_activityEmpty{color:var(--dsw-alias-label-tertiary);text-align:center;padding:16px;font-size:11.5px}._0XjAG_ovGrid{grid-template-columns:minmax(0,1fr) 200px;align-items:start;gap:10px;display:grid}._0XjAG_ovMain{min-width:0}._0XjAG_ovSide{flex-direction:column;gap:10px;min-width:0;display:flex}._0XjAG_quickGrid{grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin-bottom:10px;display:grid}._0XjAG_quickAction{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);font:inherit;text-align:left;cursor:pointer;border-radius:7px;flex-direction:column;gap:3px;padding:9px 10px;display:flex}._0XjAG_quickAction:hover:not(:disabled){border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 45%, var(--dsw-alias-border-l2));background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 5%, transparent)}._0XjAG_quickAction:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_quickAction:disabled{opacity:.5;cursor:default}._0XjAG_quickActionSymbol{color:var(--dsw-alias-state-business-primary);font-size:13px;line-height:1}._0XjAG_quickActionTitle{color:var(--dsw-alias-label-primary);align-items:center;gap:5px;font-size:12px;font-weight:600;display:flex}._0XjAG_quickActionHint{color:var(--dsw-alias-label-tertiary);font-size:10.5px;line-height:1.45}._0XjAG_ovActivity{flex-direction:column;display:flex}._0XjAG_ovActivityItem{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);align-items:flex-start;gap:7px;min-width:0;padding:6px 0;font-size:11.5px;display:flex}._0XjAG_ovActivityItem:last-child{border-bottom:none}._0XjAG_ovActivityTime{width:58px;color:var(--dsw-alias-label-tertiary);flex:none;padding-top:1px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10.5px}._0XjAG_ovActivityText{overflow-wrap:anywhere;min-width:0;color:var(--dsw-alias-label-secondary);flex:auto}._0XjAG_todoRow{border:1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 35%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 7%, transparent);border-radius:7px;align-items:center;gap:8px;margin-bottom:6px;padding:7px 10px;font-size:12px;display:flex}._0XjAG_todoRow:last-child{margin-bottom:0}._0XjAG_todoText{min-width:0;color:var(--dsw-alias-label-primary);flex:auto}._0XjAG_snapshotList,._0XjAG_backupFileList{flex-direction:column;gap:6px;margin-bottom:10px;display:flex}._0XjAG_snapshotRow,._0XjAG_backupFileRow{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;padding:9px 12px}._0XjAG_snapshotRow[data-selected],._0XjAG_backupFileRow[data-selected]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 7%, transparent)}._0XjAG_snapshotRowHeader,._0XjAG_backupFileMeta{align-items:center;gap:8px;font-size:12px;display:flex}._0XjAG_snapshotRowMain,._0XjAG_backupFileName{text-overflow:ellipsis;white-space:nowrap;flex:auto;min-width:0;font-weight:500;overflow:hidden}._0XjAG_backupFileNote{color:var(--dsw-alias-label-tertiary);font-size:11px}._0XjAG_reasonList{flex-direction:column;flex-basis:100%;gap:4px;min-width:0;display:flex}._0XjAG_reasonLine{align-items:baseline;gap:6px;min-width:0;display:flex}._0XjAG_reasonLine>span:first-child{overflow-wrap:anywhere;min-width:0}._0XjAG_viewBody{flex-direction:column;flex:auto;min-width:0;min-height:0;display:flex}._0XjAG_fillCard{flex:auto;margin-bottom:0}._0XjAG_fillViewport{flex-direction:column;flex:auto;min-height:0;margin-bottom:0;display:flex}._0XjAG_fillViewport ._0XjAG_tableScroll{flex:auto;max-height:none}._0XjAG_sparseFill{flex-direction:column;flex:auto;justify-content:flex-start;align-items:flex-start;gap:10px;min-height:280px;display:flex}._0XjAG_exportGrid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px 12px;margin-bottom:10px;display:grid}._0XjAG_exportGroup{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;min-width:0;padding:10px 12px}._0XjAG_exportItems{flex-direction:column;gap:4px;display:flex}._0XjAG_exportItem{min-width:0;padding:1px 0}._0XjAG_optionsRow{align-items:center;gap:18px;margin-bottom:4px;display:flex}._0XjAG_groupList{flex-direction:column;gap:8px;margin-bottom:10px;display:flex}._0XjAG_groupCard{margin:0}._0XjAG_categoryItem{flex-wrap:wrap;align-items:baseline;gap:8px;min-width:0;display:flex}._0XjAG_categoryName{color:var(--dsw-alias-label-primary);flex:none;font-weight:500}._0XjAG_categoryDesc{color:var(--dsw-alias-label-tertiary);min-width:0;font-size:11px}._0XjAG_optionsCard{margin:0 0 10px}._0XjAG_optionsHeader{color:var(--dsw-alias-label-tertiary);margin-bottom:8px;font-size:11px;font-weight:700;display:block}._0XjAG_secretFields{background:0 0;border:none;border-radius:0;grid-template-columns:1fr 1fr;gap:0 10px;margin:6px 0 10px;padding:0;display:grid}._0XjAG_warnList{color:var(--dsw-alias-label-secondary);margin:4px 0 0;padding-left:18px;font-size:11.5px}._0XjAG_wizardCard{margin:0 0 10px}._0XjAG_wizardStepperRow{align-items:center;gap:10px;margin-bottom:10px;display:flex}._0XjAG_conflictDetail{margin-top:2px}._0XjAG_conflictList{flex-direction:column;gap:8px;margin-bottom:10px;display:flex}._0XjAG_conflictItem{border:1px solid color-mix(in srgb, var(--dsw-alias-state-warn-primary) 35%, transparent);background:var(--dsw-alias-bg-layer-2);border-radius:8px;padding:10px 12px}._0XjAG_conflictHead{align-items:center;gap:8px;margin-bottom:6px;font-size:12px;display:flex}._0XjAG_conflictId{color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;min-width:0;font-weight:600;overflow:hidden}._0XjAG_conflictOptions{flex-wrap:wrap;gap:4px 14px;margin-top:6px;display:flex}._0XjAG_conflictChoices{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px;display:grid}._0XjAG_choiceCard{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);cursor:pointer;border-radius:7px;align-items:center;gap:7px;padding:8px 10px;font-size:12px;font-weight:500;transition:border-color .12s ease-out,background-color .12s ease-out;display:flex}._0XjAG_choiceCard:hover{border-color:color-mix(in srgb, var(--dsw-alias-state-business-primary) 40%, var(--dsw-alias-border-l2))}._0XjAG_choiceCard:focus-within{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px}._0XjAG_choiceCard[data-selected]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 9%, transparent);color:var(--dsw-alias-label-primary)}._0XjAG_choiceCard input{width:13px;height:13px;accent-color:var(--dsw-alias-state-business-primary);flex:none;margin:0}._0XjAG_choiceTitle{min-width:0}._0XjAG_conflictDetail{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere;white-space:normal;border-radius:6px;padding:8px 10px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px}._0XjAG_conflictPrefix{color:var(--dsw-alias-label-tertiary);margin-bottom:4px}._0XjAG_conflictLine{align-items:baseline;gap:8px;padding:5px 0;display:flex}._0XjAG_conflictLine+._0XjAG_conflictLine{border-top:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent)}._0XjAG_conflictLineLabel{min-width:56px;color:var(--dsw-alias-label-tertiary);flex:none;font-weight:600}._0XjAG_conflictLineValue{overflow-wrap:anywhere;flex:auto;min-width:0}._0XjAG_pathMappingList{flex-direction:column;gap:6px;margin-bottom:10px;display:flex}._0XjAG_pathRow{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:7px;flex-direction:column;align-items:stretch;gap:8px;padding:8px 10px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;display:flex}._0XjAG_pathOld,._0XjAG_pathNew{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);overflow-wrap:anywhere;border-radius:6px;flex-direction:column;flex:auto;width:100%;min-width:0;padding:5px 8px;display:flex}._0XjAG_pathValue{color:var(--dsw-alias-label-secondary);white-space:pre-wrap;overflow-wrap:anywhere;margin:2px 0 0}._0XjAG_pathIssueKind{flex:none}._0XjAG_secretsList{flex-direction:column;display:flex}._0XjAG_snapshotPickerRow{flex-wrap:nowrap;align-items:flex-end;gap:8px;margin-top:10px;display:flex}._0XjAG_snapshotPickerRow ._0XjAG_field{margin-bottom:0}._0XjAG_pickerAction{flex:none;align-items:center;display:inline-flex}._0XjAG_logPanel{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);border-radius:8px;margin-bottom:10px;overflow:hidden}._0XjAG_logHeader{border-bottom:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-layer-2);align-items:center;gap:8px;padding:6px 10px;font-size:11px;font-weight:600;display:flex}._0XjAG_logLine{color:var(--dsw-alias-label-secondary);white-space:pre-wrap;overflow-wrap:anywhere;padding:1px 10px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;line-height:1.6}._0XjAG_logEmpty{color:var(--dsw-alias-label-tertiary);text-align:center;padding:12px;font-size:11px}._0XjAG_logJumpButton{font:inherit;color:var(--dsw-alias-state-business-primary);cursor:pointer;background:0 0;border:none;margin-left:auto;padding:0 4px;font-size:11px}._0XjAG_reportView{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;margin-bottom:10px;overflow:hidden}._0XjAG_reportList{flex-direction:column;display:flex}._0XjAG_reportText{color:var(--dsw-alias-label-secondary);font-size:12px}._0XjAG_reportFooter{border-top:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-base);align-items:center;gap:8px;padding:8px 12px;display:flex}._0XjAG_errorBanner{border:1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, transparent);background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 8%, transparent);border-radius:8px;align-items:flex-start;gap:8px;margin:0 0 10px;padding:9px 12px;font-size:12px;display:flex}._0XjAG_errorTitle{color:var(--dsw-alias-state-error-primary);font-weight:600}._0XjAG_errorLine{overflow-wrap:anywhere;color:var(--dsw-alias-label-secondary)}._0XjAG_errorList{margin:4px 0 0;padding-left:18px;font-size:11.5px}._0XjAG_errorItem{overflow-wrap:anywhere}._0XjAG_errorReason{color:var(--dsw-alias-label-tertiary)}._0XjAG_errorFooter{margin-top:6px}._0XjAG_errorAction{margin-right:8px}._0XjAG_errorActionLabel{color:var(--dsw-alias-state-business-primary)}._0XjAG_inspectGroup{margin-bottom:10px}._0XjAG_kindTag{background:var(--dsw-alias-interactive-bg-hover);height:16px;color:var(--dsw-alias-label-secondary);white-space:nowrap;border-radius:4px;align-items:center;padding:0 6px;font-size:10px;font-weight:600;display:inline-flex}._0XjAG_kindTagOk{background:color-mix(in srgb, var(--dsw-alias-state-success-primary) 13%, transparent);color:var(--dsw-alias-state-success-primary)}._0XjAG_kindTagInfo{background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 13%, transparent);color:var(--dsw-alias-state-business-primary)}._0XjAG_kindTagWarn{background:color-mix(in srgb, var(--dsw-alias-state-warn-primary) 13%, transparent);color:var(--dsw-alias-state-warn-primary)}._0XjAG_kindTagError{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 13%, transparent);color:var(--dsw-alias-state-error-primary)}._0XjAG_nextStepsGroup{margin-bottom:10px}._0XjAG_rollbackBox{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-base);border-radius:7px;margin-bottom:10px;padding:8px 10px}._0XjAG_statRow{flex-wrap:wrap;align-items:center;gap:8px;margin-top:8px;display:flex}._0XjAG_statRow:not(:last-child){margin-bottom:10px}._0XjAG_consultSection{margin-top:10px}._0XjAG_consultSection:first-of-type{margin-top:8px}._0XjAG_consultSection ._0XjAG_statRow{margin-top:0}._0XjAG_hiddenFile{display:none}._0XjAG_cliName,._0XjAG_cliCommand{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px}._0XjAG_cliCommand{color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere}._0XjAG_syncChannelHead{align-items:center;gap:8px;margin-bottom:8px;display:flex}._0XjAG_historyGroup{margin-bottom:12px}._0XjAG_historyRow{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);align-items:flex-start;gap:8px;padding:6px 0;font-size:12px;display:flex}._0XjAG_historyRow:last-child{border-bottom:none}._0XjAG_historyRowMain{flex:auto;min-width:0}._0XjAG_historySummary{overflow-wrap:anywhere;color:var(--dsw-alias-label-secondary)}._0XjAG_historyTime{color:var(--dsw-alias-label-tertiary);flex:none;padding-top:1px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10.5px}._0XjAG_historySections{color:var(--dsw-alias-label-tertiary);font-size:11px}._0XjAG_profileRow{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:8px;margin-bottom:6px;padding:9px 12px}._0XjAG_profileRow[data-selected]{border-color:var(--dsw-alias-state-business-primary);background:color-mix(in srgb, var(--dsw-alias-state-business-primary) 7%, transparent)}._0XjAG_profileRowHeader{align-items:center;gap:8px;font-size:12px;display:flex}._0XjAG_profileRowMain{text-overflow:ellipsis;white-space:nowrap;flex:auto;min-width:0;font-weight:500;overflow:hidden}button._0XjAG_profileRowMain{font:inherit;color:var(--dsw-alias-label-primary);text-align:left;cursor:pointer;background:0 0;border:none;padding:0}button._0XjAG_profileRowMain:hover{color:var(--dsw-alias-state-business-primary)}._0XjAG_aboutLinkRow{flex-wrap:wrap;align-items:center;gap:8px;display:flex}._0XjAG_aboutAuthor{color:var(--dsw-alias-state-business-primary);overflow-wrap:anywhere;font-size:12.5px;font-weight:600;text-decoration:none}._0XjAG_aboutAuthor:hover{text-decoration:underline}._0XjAG_aboutAuthor:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:1px;border-radius:4px}._0XjAG_consultDimension{border-bottom:1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 55%, transparent);padding:6px 0;font-size:12px}._0XjAG_consultDimension:last-child{border-bottom:none}._0XjAG_severityError{color:var(--dsw-alias-state-error-primary);font-weight:600}@media (width<=900px){._0XjAG_ovGrid{grid-template-columns:minmax(0,1fr)}._0XjAG_statGrid,._0XjAG_metricGrid,._0XjAG_quickGrid{grid-template-columns:repeat(2,minmax(0,1fr))}._0XjAG_secretFields{grid-template-columns:1fr}._0XjAG_pagePad{padding:10px 12px 12px}._0XjAG_drawerPanel{width:100vw;max-width:100vw}}";
const tagId = "dsh-config-manager/config-manager.module.css";
if (typeof document !== "undefined" && document.querySelector("style[data-tag=\"dsh-config-manager/config-manager.module.css\"]") === null) {
	const tag = document.createElement("style");
	tag.dataset.plugin = "dsh-config-manager";
	tag.dataset.tag = tagId;
	tag.textContent = css;
	document.head.appendChild(tag);
}
var config_manager_module_css_default = {
	"activityHeader": "_0XjAG_activityHeader",
	"consultDimension": "_0XjAG_consultDimension",
	"authorRow": "_0XjAG_authorRow",
	"wizardCard": "_0XjAG_wizardCard",
	"profileRow": "_0XjAG_profileRow",
	"pushRight": "_0XjAG_pushRight",
	"snapshotRowHeader": "_0XjAG_snapshotRowHeader",
	"statSegDim": "_0XjAG_statSegDim",
	"metricGrid": "_0XjAG_metricGrid",
	"pathMappingList": "_0XjAG_pathMappingList",
	"logPanel": "_0XjAG_logPanel",
	"dialogBodyScroll": "_0XjAG_dialogBodyScroll",
	"section": "_0XjAG_section",
	"errorReason": "_0XjAG_errorReason",
	"planScroll": "_0XjAG_planScroll",
	"reportScroll": "_0XjAG_reportScroll",
	"scheduleFacts": "_0XjAG_scheduleFacts",
	"progressBadge": "_0XjAG_progressBadge",
	"drawerIn": "_0XjAG_drawerIn",
	"stepperStep": "_0XjAG_stepperStep",
	"infoKey": "_0XjAG_infoKey",
	"tableWrap": "_0XjAG_tableWrap",
	"progressBlock": "_0XjAG_progressBlock",
	"metricCard": "_0XjAG_metricCard",
	"ovGrid": "_0XjAG_ovGrid",
	"logEmpty": "_0XjAG_logEmpty",
	"statMeta": "_0XjAG_statMeta",
	"pathNew": "_0XjAG_pathNew",
	"infoValue": "_0XjAG_infoValue",
	"kindTagInfo": "_0XjAG_kindTagInfo",
	"historyTime": "_0XjAG_historyTime",
	"statCard": "_0XjAG_statCard",
	"progressTrack": "_0XjAG_progressTrack",
	"headRow": "_0XjAG_headRow",
	"categoryDesc": "_0XjAG_categoryDesc",
	"dialogBody": "_0XjAG_dialogBody",
	"ovActivityTime": "_0XjAG_ovActivityTime",
	"conflictItem": "_0XjAG_conflictItem",
	"logHeader": "_0XjAG_logHeader",
	"profileRowMain": "_0XjAG_profileRowMain",
	"kindTagError": "_0XjAG_kindTagError",
	"scheduleRow": "_0XjAG_scheduleRow",
	"progressDetail": "_0XjAG_progressDetail",
	"marketFilterGrid": "_0XjAG_marketFilterGrid",
	"factValue": "_0XjAG_factValue",
	"kvKey": "_0XjAG_kvKey",
	"inspectGroup": "_0XjAG_inspectGroup",
	"stepperConnector": "_0XjAG_stepperConnector",
	"confirmScroll": "_0XjAG_confirmScroll",
	"spinnerWrap": "_0XjAG_spinnerWrap",
	"shellNav": "_0XjAG_shellNav",
	"rowActions": "_0XjAG_rowActions",
	"conflictLineLabel": "_0XjAG_conflictLineLabel",
	"toastViewport": "_0XjAG_toastViewport",
	"pullScroll": "_0XjAG_pullScroll",
	"tableScroll": "_0XjAG_tableScroll",
	"kindTagWarn": "_0XjAG_kindTagWarn",
	"segGroup": "_0XjAG_segGroup",
	"activityTime": "_0XjAG_activityTime",
	"sectionName": "_0XjAG_sectionName",
	"errorAction": "_0XjAG_errorAction",
	"errorBanner": "_0XjAG_errorBanner",
	"kvValue": "_0XjAG_kvValue",
	"optionsRow": "_0XjAG_optionsRow",
	"select": "_0XjAG_select",
	"navStrip": "_0XjAG_navStrip",
	"errorItem": "_0XjAG_errorItem",
	"snapshotRowMain": "_0XjAG_snapshotRowMain",
	"groupList": "_0XjAG_groupList",
	"activityKind": "_0XjAG_activityKind",
	"ovMain": "_0XjAG_ovMain",
	"iconBtn": "_0XjAG_iconBtn",
	"optionsHeader": "_0XjAG_optionsHeader",
	"hiddenFile": "_0XjAG_hiddenFile",
	"groupItems": "_0XjAG_groupItems",
	"card": "_0XjAG_card",
	"activityRow": "_0XjAG_activityRow",
	"diffScroll": "_0XjAG_diffScroll",
	"metricMeta": "_0XjAG_metricMeta",
	"quickActionHint": "_0XjAG_quickActionHint",
	"banner": "_0XjAG_banner",
	"backupFileMeta": "_0XjAG_backupFileMeta",
	"kindTag": "_0XjAG_kindTag",
	"cliCommand": "_0XjAG_cliCommand",
	"segItem": "_0XjAG_segItem",
	"quickGrid": "_0XjAG_quickGrid",
	"statRow": "_0XjAG_statRow",
	"dialogContentCenter": "_0XjAG_dialogContentCenter",
	"exportItems": "_0XjAG_exportItems",
	"errorList": "_0XjAG_errorList",
	"pathIssueKind": "_0XjAG_pathIssueKind",
	"cellTitle": "_0XjAG_cellTitle",
	"reportList": "_0XjAG_reportList",
	"groupLabel": "_0XjAG_groupLabel",
	"dialogFooter": "_0XjAG_dialogFooter",
	"shellMain": "_0XjAG_shellMain",
	"toastIn": "_0XjAG_toastIn",
	"secretsList": "_0XjAG_secretsList",
	"reportView": "_0XjAG_reportView",
	"activitySummaryText": "_0XjAG_activitySummaryText",
	"aboutLinkRow": "_0XjAG_aboutLinkRow",
	"emptyHeroBody": "_0XjAG_emptyHeroBody",
	"statusPulse": "_0XjAG_statusPulse",
	"progressPercent": "_0XjAG_progressPercent",
	"quickAction": "_0XjAG_quickAction",
	"dataTable": "_0XjAG_dataTable",
	"dangerButton": "_0XjAG_dangerButton",
	"kbd": "_0XjAG_kbd",
	"navDot": "_0XjAG_navDot",
	"statGrid": "_0XjAG_statGrid",
	"metricLabel": "_0XjAG_metricLabel",
	"dialogCard": "_0XjAG_dialogCard",
	"dialogWide": "_0XjAG_dialogWide",
	"errorFooter": "_0XjAG_errorFooter",
	"nextStepsGroup": "_0XjAG_nextStepsGroup",
	"sectionTitle": "_0XjAG_sectionTitle",
	"dialogHeaderRow": "_0XjAG_dialogHeaderRow",
	"progressBadgeSection": "_0XjAG_progressBadgeSection",
	"sectionTitleBlock": "_0XjAG_sectionTitleBlock",
	"toastGlyph": "_0XjAG_toastGlyph",
	"stepperLabel": "_0XjAG_stepperLabel",
	"activityEmpty": "_0XjAG_activityEmpty",
	"statusText": "_0XjAG_statusText",
	"dim": "_0XjAG_dim",
	"pathOld": "_0XjAG_pathOld",
	"logScroll": "_0XjAG_logScroll",
	"spinnerLabel": "_0XjAG_spinnerLabel",
	"conflictList": "_0XjAG_conflictList",
	"pagePad": "_0XjAG_pagePad",
	"conflictDetail": "_0XjAG_conflictDetail",
	"emptyHero": "_0XjAG_emptyHero",
	"cellMetaNote": "_0XjAG_cellMetaNote",
	"emptyHeroSymbol": "_0XjAG_emptyHeroSymbol",
	"viewBody": "_0XjAG_viewBody",
	"statStrip": "_0XjAG_statStrip",
	"factCell": "_0XjAG_factCell",
	"statusBar": "_0XjAG_statusBar",
	"tableCompact": "_0XjAG_tableCompact",
	"conflictChoices": "_0XjAG_conflictChoices",
	"backupFileRow": "_0XjAG_backupFileRow",
	"toast": "_0XjAG_toast",
	"stepperDot": "_0XjAG_stepperDot",
	"syncChannelHead": "_0XjAG_syncChannelHead",
	"errorLine": "_0XjAG_errorLine",
	"errorTitle": "_0XjAG_errorTitle",
	"categoryName": "_0XjAG_categoryName",
	"marketFilterMeta": "_0XjAG_marketFilterMeta",
	"conflictId": "_0XjAG_conflictId",
	"activityRows": "_0XjAG_activityRows",
	"navTab": "_0XjAG_navTab",
	"ovSide": "_0XjAG_ovSide",
	"snapshotList": "_0XjAG_snapshotList",
	"exportGrid": "_0XjAG_exportGrid",
	"quickActionSymbol": "_0XjAG_quickActionSymbol",
	"cellMetaNoteText": "_0XjAG_cellMetaNoteText",
	"dialogHeader": "_0XjAG_dialogHeader",
	"backupFileNote": "_0XjAG_backupFileNote",
	"exportGroup": "_0XjAG_exportGroup",
	"exportItem": "_0XjAG_exportItem",
	"kvRow": "_0XjAG_kvRow",
	"pathRow": "_0XjAG_pathRow",
	"pathValue": "_0XjAG_pathValue",
	"consultSection": "_0XjAG_consultSection",
	"badgeOk": "_0XjAG_badgeOk",
	"logJumpButton": "_0XjAG_logJumpButton",
	"modeTabs": "_0XjAG_modeTabs",
	"ovActivityItem": "_0XjAG_ovActivityItem",
	"progressBarDone": "_0XjAG_progressBarDone",
	"statHealthAction": "_0XjAG_statHealthAction",
	"choiceTitle": "_0XjAG_choiceTitle",
	"badgeInfo": "_0XjAG_badgeInfo",
	"scheduleNote": "_0XjAG_scheduleNote",
	"fillViewport": "_0XjAG_fillViewport",
	"tableFixed": "_0XjAG_tableFixed",
	"errorActionLabel": "_0XjAG_errorActionLabel",
	"factLabel": "_0XjAG_factLabel",
	"input": "_0XjAG_input",
	"activityResultOk": "_0XjAG_activityResultOk",
	"drawerHeader": "_0XjAG_drawerHeader",
	"historyScroll": "_0XjAG_historyScroll",
	"snapshotRow": "_0XjAG_snapshotRow",
	"reportFooter": "_0XjAG_reportFooter",
	"spinner": "_0XjAG_spinner",
	"aboutAuthor": "_0XjAG_aboutAuthor",
	"profileRowHeader": "_0XjAG_profileRowHeader",
	"formError": "_0XjAG_formError",
	"progressIndeterminate": "_0XjAG_progressIndeterminate",
	"pickerAction": "_0XjAG_pickerAction",
	"drawerTitle": "_0XjAG_drawerTitle",
	"toolRow": "_0XjAG_toolRow",
	"historyRowMain": "_0XjAG_historyRowMain",
	"actionRow": "_0XjAG_actionRow",
	"empty": "_0XjAG_empty",
	"consultScroll": "_0XjAG_consultScroll",
	"conflictPrefix": "_0XjAG_conflictPrefix",
	"quickActionTitle": "_0XjAG_quickActionTitle",
	"ovActivity": "_0XjAG_ovActivity",
	"historySections": "_0XjAG_historySections",
	"groupCard": "_0XjAG_groupCard",
	"fieldLabel": "_0XjAG_fieldLabel",
	"badgeWarn": "_0XjAG_badgeWarn",
	"snapshotPickerHint": "_0XjAG_snapshotPickerHint",
	"conflictOptions": "_0XjAG_conflictOptions",
	"activitySummary": "_0XjAG_activitySummary",
	"sparseFill": "_0XjAG_sparseFill",
	"cellMeta": "_0XjAG_cellMeta",
	"historyGroup": "_0XjAG_historyGroup",
	"statusMeta": "_0XjAG_statusMeta",
	"sectionRow": "_0XjAG_sectionRow",
	"infoRow": "_0XjAG_infoRow",
	"sectionGrid": "_0XjAG_sectionGrid",
	"rollbackBox": "_0XjAG_rollbackBox",
	"groupNote": "_0XjAG_groupNote",
	"dialogMask": "_0XjAG_dialogMask",
	"choiceCard": "_0XjAG_choiceCard",
	"statLabel": "_0XjAG_statLabel",
	"activityTitle": "_0XjAG_activityTitle",
	"activityCard": "_0XjAG_activityCard",
	"stepper": "_0XjAG_stepper",
	"statValue": "_0XjAG_statValue",
	"warnList": "_0XjAG_warnList",
	"hint": "_0XjAG_hint",
	"tabRow": "_0XjAG_tabRow",
	"rowDivider": "_0XjAG_rowDivider",
	"checkboxRow": "_0XjAG_checkboxRow",
	"mono": "_0XjAG_mono",
	"groupHeader": "_0XjAG_groupHeader",
	"statSeg": "_0XjAG_statSeg",
	"cellActions": "_0XjAG_cellActions",
	"sectionCount": "_0XjAG_sectionCount",
	"logLine": "_0XjAG_logLine",
	"progressMeta": "_0XjAG_progressMeta",
	"copyBtn": "_0XjAG_copyBtn",
	"backupFileName": "_0XjAG_backupFileName",
	"drawerBody": "_0XjAG_drawerBody",
	"progressBadgeCount": "_0XjAG_progressBadgeCount",
	"reasonLine": "_0XjAG_reasonLine",
	"progressLabel": "_0XjAG_progressLabel",
	"secretFields": "_0XjAG_secretFields",
	"sectionSize": "_0XjAG_sectionSize",
	"spin": "_0XjAG_spin",
	"categoryItem": "_0XjAG_categoryItem",
	"warnText": "_0XjAG_warnText",
	"fillCard": "_0XjAG_fillCard",
	"historyRow": "_0XjAG_historyRow",
	"navActions": "_0XjAG_navActions",
	"statHealth": "_0XjAG_statHealth",
	"statusSpacer": "_0XjAG_statusSpacer",
	"sectionSubtitle": "_0XjAG_sectionSubtitle",
	"drawerMask": "_0XjAG_drawerMask",
	"backupFileList": "_0XjAG_backupFileList",
	"conflictLine": "_0XjAG_conflictLine",
	"reportText": "_0XjAG_reportText",
	"indet": "_0XjAG_indet",
	"ovActivityText": "_0XjAG_ovActivityText",
	"radioLabel": "_0XjAG_radioLabel",
	"emptyHeroTitle": "_0XjAG_emptyHeroTitle",
	"toastText": "_0XjAG_toastText",
	"marketFilterSearch": "_0XjAG_marketFilterSearch",
	"cellMain": "_0XjAG_cellMain",
	"activityBadge": "_0XjAG_activityBadge",
	"badge": "_0XjAG_badge",
	"optionsCard": "_0XjAG_optionsCard",
	"conflictLineValue": "_0XjAG_conflictLineValue",
	"field": "_0XjAG_field",
	"progressBar": "_0XjAG_progressBar",
	"kindTagOk": "_0XjAG_kindTagOk",
	"severityError": "_0XjAG_severityError",
	"modeTab": "_0XjAG_modeTab",
	"cliName": "_0XjAG_cliName",
	"ghostButton": "_0XjAG_ghostButton",
	"statValueSmall": "_0XjAG_statValueSmall",
	"drawerPanel": "_0XjAG_drawerPanel",
	"badgeError": "_0XjAG_badgeError",
	"metricValue": "_0XjAG_metricValue",
	"actionRowTop": "_0XjAG_actionRowTop",
	"wizardStepperRow": "_0XjAG_wizardStepperRow",
	"reasonList": "_0XjAG_reasonList",
	"todoText": "_0XjAG_todoText",
	"snapshotPickerRow": "_0XjAG_snapshotPickerRow",
	"historySummary": "_0XjAG_historySummary",
	"conflictHead": "_0XjAG_conflictHead",
	"dialogClose": "_0XjAG_dialogClose",
	"statusDot": "_0XjAG_statusDot",
	"primaryButton": "_0XjAG_primaryButton",
	"modeHint": "_0XjAG_modeHint",
	"factGrid": "_0XjAG_factGrid",
	"infoGrid": "_0XjAG_infoGrid",
	"num": "_0XjAG_num",
	"activityFit": "_0XjAG_activityFit",
	"todoRow": "_0XjAG_todoRow"
};
//#endregion
//#region src/client/common/ui.tsx
/**
* 统一按钮（primary=主操作 / ghost=次操作 / danger=危险操作）。
* 带 href 时渲染同款按钮类的外链 <a>；loading=true 时自动禁用并标注 aria-busy。
*/
function Button({ variant = "ghost", size, disabled, loading = false, onClick, children, title, className, href, newTab = true }) {
	const cls = variant === "primary" ? config_manager_module_css_default.primaryButton : variant === "danger" ? config_manager_module_css_default.dangerButton : config_manager_module_css_default.ghostButton;
	const effectiveDisabled = disabled === true || loading;
	const sizeProps = size === "sm" ? { "data-size": "sm" } : {};
	if (href !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
		className: className !== void 0 ? `${cls} ${className}` : cls,
		href,
		target: newTab ? "_blank" : void 0,
		rel: newTab ? "noreferrer" : void 0,
		title,
		"aria-busy": loading || void 0,
		onClick,
		style: { textDecoration: "none" },
		...sizeProps,
		children
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
		type: "button",
		className: className !== void 0 ? `${cls} ${className}` : cls,
		disabled: effectiveDisabled,
		title,
		"aria-busy": loading || void 0,
		onClick,
		...sizeProps,
		children
	});
}
/** 图标按钮（导航条/工具栏图标动作；26px 触达区）。 */
function IconButton({ icon, label, onClick, disabled, active, danger, title }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
		type: "button",
		className: config_manager_module_css_default.iconBtn,
		"aria-label": label,
		title: title ?? label,
		"data-active": active === true ? "" : void 0,
		"data-danger": danger === true ? "" : void 0,
		disabled: disabled === true,
		onClick,
		children: icon
	});
}
/** 状态点（状态栏/行内状态指示）。 */
function StatusDot({ kind = "idle", pulse }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
		className: config_manager_module_css_default.statusDot,
		"data-kind": kind === "idle" ? void 0 : kind,
		"data-pulse": pulse === true ? "" : void 0,
		"aria-hidden": "true"
	});
}
/** 状态徽章（info=业务色 / ok=成功 / warn=警告 / error=错误）。 */
function Badge({ kind = "info", children, title }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
		className: `${config_manager_module_css_default.badge} ${config_manager_module_css_default[`badge${kind[0].toUpperCase()}${kind.slice(1)}`] ?? ""}`,
		title,
		children
	});
}
/** 说明横幅（ok/error/info/warn 四态） */
function Banner({ kind = "info", children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.banner,
		"data-kind": kind,
		children
	});
}
/** 卡片容器（bg-layer-2 + 细边框） */
function Card({ children, className, style }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: className !== void 0 ? `${config_manager_module_css_default.card} ${className}` : config_manager_module_css_default.card,
		style,
		children
	});
}
/** 加载指示（旋转环 + 可选文案） */
function Spinner({ label }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
		className: config_manager_module_css_default.spinnerWrap,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: config_manager_module_css_default.spinner,
			"aria-hidden": "true"
		}), label !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: config_manager_module_css_default.spinnerLabel,
			children: label
		})]
	});
}
/** 表单字段（标签 + 控件 + 说明） */
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
		className: config_manager_module_css_default.field,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.fieldLabel,
				children: label
			}),
			children,
			hint !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.hint,
				children: hint
			})
		]
	});
}
/** 区块标题（页面内二级标题 + 可选副标题） */
function SectionTitle({ title, subtitle }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.sectionTitleBlock,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
			className: config_manager_module_css_default.sectionTitle,
			children: title
		}), subtitle !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
			className: config_manager_module_css_default.sectionSubtitle,
			children: subtitle
		})]
	});
}
/** 空状态占位 */
function Empty({ children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.empty,
		children
	});
}
/** 复选框行（勾选 + 标签） */
function Checkbox({ checked, onChange, label, disabled }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
		className: config_manager_module_css_default.checkboxRow,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked,
			disabled,
			onChange: (event) => {
				onChange(event.target.checked);
			}
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label })]
	});
}
/** 分段控件（页内子视图切换；受控）。 */
function Segmented({ items, active, onChange, ariaLabel }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.segGroup,
		role: "tablist",
		"aria-label": ariaLabel,
		children: items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
			type: "button",
			role: "tab",
			"aria-selected": item.id === active,
			"data-active": item.id === active ? "" : void 0,
			className: config_manager_module_css_default.segItem,
			onClick: () => {
				onChange(item.id);
			},
			children: [item.label, item.count !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
				"aria-hidden": "true",
				children: ["·", item.count]
			})]
		}, item.id))
	});
}
/**
* 向导步骤条（只读指示器，非导航）：紧凑圆点（序号/✓）+ 连接线 + 标签。
* state 由调用方的纯函数模型给出；组件不做任何状态推断。
*/
function Stepper({ steps, ariaLabel }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.stepper,
		role: ariaLabel !== void 0 ? "group" : "list",
		"aria-label": ariaLabel,
		children: steps.map((step, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
			role: "listitem",
			className: config_manager_module_css_default.stepperStep,
			"data-state": step.state,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.stepperDot,
					"data-state": step.state,
					"aria-hidden": "true",
					children: step.state === "done" ? "✓" : i + 1
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.stepperLabel,
					children: step.label
				}),
				i < steps.length - 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.stepperConnector,
					"aria-hidden": "true"
				})
			]
		}, step.key))
	});
}
//#endregion
//#region src/client/common/SectionComposition.tsx
/**
* 分区构成网格：每行「分区名 · 条目数 · 体积」。
*/
function SectionComposition({ sections, t }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.sectionGrid,
		children: sections.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.sectionRow,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.sectionName,
					children: s.section
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.sectionCount,
					children: t("overview.sections.entries", { count: String(s.count) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: `${config_manager_module_css_default.sectionSize} ${config_manager_module_css_default.mono}`,
					children: formatBytes$1(s.sizeBytes)
				})
			]
		}, s.section))
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/context.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const LucideContext = (0, react.createContext)({});
const useLucideContext = () => (0, react.useContext)(LucideContext);
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Icon$1 = (0, react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.mjs
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const createLucideIcon = (iconName, iconNode) => {
	const Component = (0, react.forwardRef)(({ className, ...props }, ref) => (0, react.createElement)(Icon$1, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Clock = createLucideIcon("clock", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6l4 2",
	key: "mmk7yg"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const DatabaseBackup = createLucideIcon("database-backup", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 12a9 3 0 0 0 5 2.69",
		key: "1ui2ym"
	}],
	["path", {
		d: "M21 9.3V5",
		key: "6k6cib"
	}],
	["path", {
		d: "M3 5v14a9 3 0 0 0 6.47 2.88",
		key: "i62tjy"
	}],
	["path", {
		d: "M12 12v4h4",
		key: "1bxaet"
	}],
	["path", {
		d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
		key: "1f4ei9"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const FolderInput = createLucideIcon("folder-input", [
	["path", {
		d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
		key: "fm4g5t"
	}],
	["path", {
		d: "M2 13h10",
		key: "pgb2dq"
	}],
	["path", {
		d: "m9 16 3-3-3-3",
		key: "6m91ic"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const HardDriveDownload = createLucideIcon("hard-drive-download", [
	["path", {
		d: "M12 2v8",
		key: "1q4o3n"
	}],
	["path", {
		d: "m16 6-4 4-4-4",
		key: "6wukr"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		key: "w68u3i"
	}],
	["path", {
		d: "M6 18h.01",
		key: "uhywen"
	}],
	["path", {
		d: "M10 18h.01",
		key: "h775k"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const MessageSquare = createLucideIcon("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const PackageCheck = createLucideIcon("package-check", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "m16 17 2 2 4-4",
		key: "uh5qu3"
	}],
	["path", {
		d: "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",
		key: "kpkbpo"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const RotateCw = createLucideIcon("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Trash = createLucideIcon("trash", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* @license lucide-react v1.41.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
//#endregion
//#region src/client/common/Icon.tsx
/** 语义图标名 → Lucide 组件映射（单一事实来源）。 */
const ICONS = {
	backup: HardDriveDownload,
	export: createLucideIcon("upload", [
		["path", {
			d: "M12 3v12",
			key: "1x0j5s"
		}],
		["path", {
			d: "m17 8-5-5-5 5",
			key: "7q97r8"
		}],
		["path", {
			d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
			key: "ih7n3h"
		}]
	]),
	import: FolderInput,
	sync: RefreshCw,
	refresh: RotateCw,
	activity: Clock,
	clock: Clock,
	about: Info,
	info: Info,
	message: MessageSquare,
	pencil: Pencil,
	close: createLucideIcon("x", [["path", {
		d: "M18 6 6 18",
		key: "1bl5f8"
	}], ["path", {
		d: "m6 6 12 12",
		key: "d8bk6v"
	}]]),
	delete: Trash,
	download: Download,
	inspect: Search,
	view: Eye,
	copy: Copy,
	arrowRight: ArrowRight,
	chevronRight: ChevronRight,
	chevronDown: ChevronDown,
	preview: Eye,
	snapshot: DatabaseBackup,
	ok: PackageCheck,
	check: CircleCheckBig,
	warn: TriangleAlert,
	error: CircleAlert
};
/**
* 统一图标（lucide-react）。颜色继承 currentColor，尺寸/描边集中控制。
*/
function Icon({ name, size = 14, strokeWidth = 1.75, className, style, decorative = true }) {
	const Cmp = ICONS[name];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Cmp, {
		size,
		strokeWidth,
		className,
		style: {
			verticalAlign: "middle",
			flex: "none",
			...style
		},
		"aria-hidden": decorative || void 0,
		focusable: false
	});
}
const BackupIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "backup",
	...p
});
const ExportIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "export",
	...p
});
const ImportIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "import",
	...p
});
const SyncIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "sync",
	...p
});
const RefreshIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "refresh",
	...p
});
const ActivityIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "activity",
	...p
});
const ClockIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "clock",
	...p
});
const AboutIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "about",
	...p
});
const MessageIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "message",
	...p
});
const PencilIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "pencil",
	...p
});
const CloseIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "close",
	...p
});
const DeleteIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "delete",
	...p
});
const DownloadIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "download",
	...p
});
const InspectIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "inspect",
	...p
});
const CopyIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "copy",
	...p
});
const ArrowRightIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "arrowRight",
	...p
});
const ChevronDownIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "chevronDown",
	...p
});
const PreviewIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "preview",
	...p
});
const SnapshotIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "snapshot",
	...p
});
const CheckIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "check",
	...p
});
const WarnIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "warn",
	...p
});
const ErrorIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "error",
	...p
});
const InfoIcon = (p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {
	name: "info",
	...p
});
//#endregion
//#region src/client/overview/OverviewPanel.tsx
/**
* 总览页（Overview —— Workbench 控制中心 v3，2026-09 Full UI Rebuild）。
*
* 布局（564px 画布，纵向流式，无空容器）：
*   1. 状态条（32px）：健康点 + 指标段（名词在前：备份文件 6 / 安全快照 0 /
*      定时备份 已开启 · 下次 03:00 / 远程同步 未配置；段可点击直达对应页）
*   2. 动作工具栏：立即备份（primary）+ 导出/导入 ghost + 右侧「活动 →」入口
*   3. 备份位置卡：路径（mono+copy）/ 体积 / 快照配额 / 间隔·上次 四列网格
*   4. 分区构成卡：export-preview 只读预览的 13 分区条目数+体积（两列网格）
*   5. 最近活动表（fit-content，上限 8 行内滚；类型并入内容列、
*      中段省略保留尾部时间戳、成功=绿点、失败/跳过=徽章）
*
* 数据流：挂载/刷新时对 6 个只读 API 做 Promise.allSettled 并行聚合；全部渲染模型
* 来自 src/ui/overview-view.ts 纯函数（node 单测覆盖），本组件只做装配。
* 安全：历史摘要渲染前 redact()（宿主侧已脱敏，此处仅做 [REDACTED] 可读化显示）。
*/
const initialData = {
	backups: null,
	snapshots: null,
	schedule: null,
	sync: null,
	history: null,
	sections: null
};
/** 指标段点击直达页 —— 落到备份页时必须同时带上精确子视图，
*  否则「备份文件 / 安全快照 / 定时备份」三个指标会全部停在备份页默认子页上。 */
const METRIC_TARGET = {
	backups: {
		panel: "snapshots",
		subTab: "files"
	},
	snapshots: {
		panel: "snapshots",
		subTab: "restore"
	},
	schedule: {
		panel: "snapshots",
		subTab: "schedule"
	},
	sync: { panel: "sync" }
};
/** 相对时间渲染（超 7 天回退绝对日期）。 */
function renderRelTime(ms, t) {
	const rt = relTime(Date.now(), ms);
	if (rt === null) return new Date(ms).toLocaleDateString();
	if (rt.unit === "now") return t("overview.time.now");
	if (rt.unit === "min") return t("overview.time.min", { n: rt.n });
	if (rt.unit === "hour") return t("overview.time.hour", { n: rt.n });
	return t("overview.time.day", { n: rt.n });
}
/** 定时间隔 → 字典文案（与 backupSchedule.interval.* 同源）。 */
function intervalText(interval, t) {
	switch (interval) {
		case "6h": return t("backupSchedule.interval.6h");
		case "12h": return t("backupSchedule.interval.12h");
		case "24h": return t("backupSchedule.interval.24h");
		case "7d": return t("backupSchedule.interval.7d");
		case "custom": return t("backupSchedule.interval.custom");
		default: return String(interval);
	}
}
/** 下次定时备份估算（固定间隔 = 上次 + 间隔；custom = 下个周一时刻近似）。 */
function nextRunText(schedule, t) {
	if (!schedule.enabled) return null;
	const last = schedule.lastRunAt !== void 0 ? Date.parse(schedule.lastRunAt) : NaN;
	const pad = (n) => String(n).padStart(2, "0");
	const fmt = (d) => `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
	const intervalMs = {
		"6h": 216e5,
		"12h": 432e5,
		"24h": 864e5,
		"7d": 6048e5
	};
	if (schedule.interval !== "custom" && Number.isFinite(last)) return fmt(new Date(last + intervalMs[schedule.interval]));
	if (schedule.interval === "custom" && schedule.customSchedule !== void 0) {
		const target = schedule.customSchedule.dayOfWeek;
		const now = /* @__PURE__ */ new Date();
		const delta = (target - now.getDay() + 7) % 7 || 7;
		return fmt(new Date(now.getFullYear(), now.getMonth(), now.getDate() + delta, schedule.customSchedule.hour, schedule.customSchedule.minute));
	}
	return null;
}
/** [REDACTED] 可读化：宿主侧强脱敏 token → 用户可理解的文案（历史条目不可变，仅展示层替换）。 */
function displaySummary(summary, t) {
	const r = redact(summary);
	if (!r.includes("[REDACTED]")) return r;
	const redactedName = t("overview.activity.redacted");
	return r.replaceAll("[REDACTED].zip", redactedName).replaceAll("[REDACTED]", "…");
}
/** 中段省略（路径/文件名：保留头尾，中段 …——尾部时间戳是唯一区分信息）。 */
function midEllipsis$2(s, max) {
	if (s.length <= max) return s;
	const keep = max - 1;
	const head = Math.ceil(keep / 2);
	const tail = keep - head;
	return `${s.slice(0, head)}…${s.slice(-tail)}`;
}
/** 从文件路径取目录（纯字符串；win32 反斜杠与 posix 斜杠都认）。 */
function dirOf(path) {
	const i = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
	return i > 0 ? path.slice(0, i) : path;
}
/**
* 复制文本到剪贴板，并以 Toast 反馈结果。
* （原先完全静默：用户无法确认是否复制成功——被复制的内容在界面上往往只显示截断形态。）
*/
function copyText(text, t) {
	try {
		const pending = navigator.clipboard?.writeText(text);
		if (pending === void 0) {
			toast.warn(t("toast.copyFailed"));
			return;
		}
		pending.then(() => {
			toast.ok(t("toast.copied"));
		}, () => {
			toast.warn(t("toast.copyFailed"));
		});
	} catch {
		toast.warn(t("toast.copyFailed"));
	}
}
/**
* 总览页（控制中心）：状态条 + 动作工具栏 + 备份位置 + 分区构成 + 最近活动。
*/
function OverviewPanel({ api, syncApi, historyApi, t, openActivity }) {
	const store = (0, react.useSyncExternalStore)(runStore.subscribe, runStore.getSnapshot);
	const [data, setData] = (0, react.useState)(initialData);
	const [loading, setLoading] = (0, react.useState)(true);
	const [backupRunning, setBackupRunning] = (0, react.useState)(false);
	/** 卸载后不再 setState（异步回调竞态防护） */
	const aliveRef = (0, react.useRef)(true);
	(0, react.useEffect)(() => () => {
		aliveRef.current = false;
	}, []);
	const load = (0, react.useCallback)(async () => {
		setLoading(true);
		const [backups, snapshots, schedule, sync, history, sections] = await Promise.allSettled([
			api.listBackupFiles(),
			api.snapshots(),
			api.backupSchedule(),
			syncApi.status(),
			historyApi.list({}),
			api.exportPreview(void 0)
		]);
		if (!aliveRef.current) return;
		setData({
			backups: backups.status === "fulfilled" ? backups.value : null,
			snapshots: snapshots.status === "fulfilled" ? snapshots.value : null,
			schedule: schedule.status === "fulfilled" ? schedule.value : null,
			sync: sync.status === "fulfilled" ? sync.value : null,
			history: history.status === "fulfilled" ? history.value : null,
			sections: sections.status === "fulfilled" ? sections.value : null
		});
		setLoading(false);
	}, [
		api,
		syncApi,
		historyApi
	]);
	(0, react.useEffect)(() => {
		load();
	}, [load]);
	/** 立即备份（宿主 RunRegistry 防重；反馈后刷新指标）。
	*  反馈走全局 Toast：备份耗时较长，用户点完很可能已切到别的页面，
	*  写入本组件 state 会随卸载一起丢失（以前就是被 aliveRef 竞态静默吞掉的）。 */
	const runBackupNow = async () => {
		if (backupRunning) return;
		setBackupRunning(true);
		try {
			await api.runBackupNow();
			toast.ok(t("overview.quick.backupDone"));
			if (aliveRef.current) load();
		} catch (err) {
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		} finally {
			if (aliveRef.current) setBackupRunning(false);
		}
	};
	const navPanel = (panel) => {
		if (panel === "export") runStore.patch({
			view: "export",
			panel: "export"
		});
		else if (panel === "import") runStore.patch({
			view: "import",
			panel: "import"
		});
		else runStore.patch({ panel });
	};
	/** 指标段跳转：一次 patch 同时写入 page 与目标子视图（备份页 restore/files/schedule，同步页直达）。 */
	const navMetric = (key) => {
		const target = METRIC_TARGET[key];
		runStore.patch(target.subTab !== void 0 ? {
			panel: target.panel,
			snapshots: { subTab: target.subTab }
		} : { panel: target.panel });
	};
	/** 健康段落点：有待处理恢复事项时直达备份页「事故恢复」子视图。 */
	const navRecovery = () => {
		runStore.patch({
			panel: "snapshots",
			snapshots: { subTab: "recovery" }
		});
	};
	/** 是否存在待处理恢复事项（null = 状态未知；决定健康段是否作为「事故恢复」入口）。 */
	const recoveryRequired = store.recovery.status !== null ? toRecoveryView(store.recovery.status).recoveryRequired === true : null;
	const inputs = {
		now: Date.now(),
		backups: data.backups,
		snapshots: data.snapshots,
		schedule: data.schedule,
		sync: data.sync,
		history: data.history?.entries ?? null,
		recoveryRequired,
		runningCount: 0
	};
	const metrics = buildOverviewMetrics(inputs);
	const health = overviewHealth(inputs);
	const activity = overviewActivity(inputs.history, 30);
	const emptyState = overviewEmptyState(inputs);
	const firstBackup = data.backups !== null && data.backups.length > 0 ? data.backups[0] : null;
	const backupDir = firstBackup !== null ? dirOf(firstBackup.path) : null;
	const totalSize = data.backups !== null ? data.backups.reduce((n, b) => n + b.sizeBytes, 0) : null;
	const scheduleStatus = data.schedule;
	const nextRun = scheduleStatus !== null ? nextRunText(scheduleStatus, t) : null;
	/** 指标段渲染模型（名词在前：label dim + 值 bold；附注仅时间/告警）。 */
	const segModels = metrics.map((m) => {
		const value = m.kind === "state" ? m.valueKey === "state.on" ? t("overview.state.on") : t("overview.state.off") : m.value;
		let dim = null;
		if (m.metaKey === "meta.scheduleFail") dim = renderMetaShort(m.metaKey, m.metaParams["time"] !== void 0 ? Number(m.metaParams["time"]) : null, t);
		else if (m.key === "backups" && m.metaParams["time"] !== void 0) dim = renderRelTime(Number(m.metaParams["time"]), t);
		return {
			key: m.key,
			label: t(METRIC_LABEL[m.key]),
			value,
			dim
		};
	});
	/** 结果渲染：ok = 绿点（降噪）；failed/skipped = 徽章（需要被看见）。 */
	const resultNode = (badge) => badge === "ok" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
		className: config_manager_module_css_default.activityResultOk,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusDot, { kind: "ok" }), t("overview.result.success")]
	}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
		kind: badge,
		children: badge === "error" ? t("overview.result.failed") : t("overview.result.skipped")
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.statStrip,
				"data-tone": health.kind === "ok" ? void 0 : health.kind,
				children: [
					recoveryRequired ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: `${config_manager_module_css_default.statHealth} ${config_manager_module_css_default.statHealthAction}`,
						title: t("overview.health.recoveryAction"),
						onClick: navRecovery,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusDot, { kind: "error" }), t(`overview.${health.textKey}`)]
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
						className: config_manager_module_css_default.statHealth,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusDot, { kind: health.kind === "ok" ? "ok" : health.kind === "warn" ? "warn" : "error" }), t(`overview.${health.textKey}`)]
					}),
					segModels.map((seg) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: config_manager_module_css_default.statSeg,
						onClick: () => {
							navMetric(seg.key);
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: seg.label }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("b", { children: seg.value }),
							seg.dim !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: config_manager_module_css_default.statSegDim,
								children: ["· ", seg.dim]
							})
						]
					}, seg.key)),
					loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.statSeg,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {})
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.toolRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						disabled: backupRunning,
						title: t("overview.quick.backupTitle"),
						onClick: () => {
							runBackupNow();
						},
						children: [
							backupRunning ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BackupIcon, { size: 14 }),
							" ",
							t("overview.quick.backup")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						title: t("overview.quick.exportTitle"),
						onClick: () => {
							navPanel("export");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExportIcon, { size: 14 }),
							" ",
							t("nav.export"),
							" ZIP"
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						title: t("overview.quick.importTitle"),
						onClick: () => {
							navPanel("import");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImportIcon, { size: 14 }),
							" ",
							t("nav.import")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						title: t("overview.quick.syncTitle"),
						onClick: () => {
							navPanel("sync");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SyncIcon, { size: 14 }),
							" ",
							t("overview.quick.sync")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => {
							openActivity?.();
						},
						children: [
							t("overview.nav.activity"),
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ArrowRightIcon, { size: 13 })
						]
					})
				]
			}),
			emptyState ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
				className: `${config_manager_module_css_default.activityCard} ${config_manager_module_css_default.fillCard}`,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("overview.empty.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						style: {
							display: "block",
							marginBottom: 10
						},
						children: t("overview.empty.body")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.toolRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							variant: "primary",
							disabled: backupRunning,
							onClick: () => {
								runBackupNow();
							},
							children: t("overview.quick.backup")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							onClick: () => {
								navPanel("sync");
							},
							children: t("overview.quick.sync")
						})]
					})
				]
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				(backupDir !== null || scheduleStatus !== null) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupHeader,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("overview.location.title")
						})
					}),
					backupDir !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.infoRow,
						style: { marginBottom: 4 },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.infoKey,
							children: t("overview.location.dir")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: config_manager_module_css_default.infoValue,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.mono,
								title: backupDir,
								children: midEllipsis$2(backupDir, 52)
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: config_manager_module_css_default.copyBtn,
								"aria-label": t("overview.activity.copy"),
								title: t("overview.activity.copy"),
								onClick: () => {
									copyText(backupDir, t);
								},
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CopyIcon, { size: 12 })
							})]
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.factGrid,
						children: [
							totalSize !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.factCell,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.factLabel,
									children: t("overview.location.totalSize")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.factValue} ${config_manager_module_css_default.mono}`,
									children: formatBytes$1(totalSize)
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.factCell,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.factLabel,
									children: t("overview.location.retention")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.factValue} ${config_manager_module_css_default.mono}`,
									children: t("overview.location.retentionValue", {
										used: String(data.snapshots?.length ?? 0),
										limit: String(normalizeRetentionPolicy(scheduleStatus?.retention).keepLast)
									})
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.factCell,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.factLabel,
									children: t("overview.location.schedule")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.factValue,
									children: scheduleStatus !== null && scheduleStatus.enabled ? intervalText(scheduleStatus.interval, t) : t("overview.location.scheduleOff")
								})]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.factCell,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.factLabel,
									children: scheduleStatus !== null && scheduleStatus.enabled && nextRun !== null ? t("overview.location.nextRun") : t("overview.location.lastRun")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.factValue} ${config_manager_module_css_default.mono}`,
									children: scheduleStatus !== null && scheduleStatus.enabled && nextRun !== null ? nextRun : scheduleStatus?.lastRunAt !== void 0 ? renderRelTime(Date.parse(scheduleStatus.lastRunAt) || 0, t) : "—"
								})]
							})
						]
					})
				] }),
				data.sections !== null && data.sections.sections.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.groupHeader,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("overview.sections.title")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupNote,
							children: t("overview.sections.hint")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: config_manager_module_css_default.hint,
							children: [
								t("overview.sections.total"),
								" ",
								formatBytes$1(data.sections.totalSizeBytes),
								data.sections.sectionsFailed > 0 && ` · ${t("export.previewSkipped", { count: String(data.sections.sectionsFailed) })}`
							]
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionComposition, {
					sections: data.sections.sections,
					t
				})] }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
					className: config_manager_module_css_default.activityCard,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.activityHeader,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.activityTitle,
							children: t("overview.activity.title")
						})
					}), activity.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.activityEmpty,
						children: t("overview.activity.empty")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: `${config_manager_module_css_default.activityRows} ${config_manager_module_css_default.activityFit}`,
						children: activity.map((item, i) => {
							const atMs = Date.parse(item.at) || 0;
							const kindText = kindLabel(item.kindKey, t);
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.activityRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.activityTime,
										title: atMs > 0 ? new Date(atMs).toLocaleString() : void 0,
										children: renderRelTime(atMs, t)
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.activitySummary,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: config_manager_module_css_default.activityKind,
												children: [kindText, " ·"]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: config_manager_module_css_default.activitySummaryText,
												title: displaySummary(item.summary, t),
												children: displaySummary(item.summary, t)
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: config_manager_module_css_default.copyBtn,
												"aria-label": t("overview.activity.copy"),
												title: t("overview.activity.copy"),
												onClick: () => {
													copyText(item.summary, t);
												},
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CopyIcon, { size: 12 })
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.activityBadge,
										children: resultNode(item.badge)
									})
								]
							}, `${item.at}-${i}`);
						})
					})]
				})
			] })
		]
	});
}
/** 指标段附注完整文案（告警语义保留前缀）。 */
function renderMetaShort(metaKey, timeMs, t) {
	const time = timeMs !== null ? renderRelTime(timeMs, t) : "";
	switch (metaKey) {
		case "meta.lastBackup": return t("overview.meta.lastBackup", { time });
		case "meta.noBackup": return t("overview.meta.noBackup");
		case "meta.scheduleOn": return t("overview.meta.scheduleOn", { time });
		case "meta.scheduleOff": return t("overview.meta.scheduleOff");
		case "meta.scheduleFail": return t("overview.meta.scheduleFail");
		case "meta.syncOn": return t("overview.meta.syncOn", { time });
		case "meta.syncOff": return t("overview.meta.syncOff");
		case "meta.never": return t("overview.meta.never");
	}
}
/** 指标段标签 key 映射（overview-view 的 key → locale key）。 */
const METRIC_LABEL = {
	backups: "overview.metric.backups",
	snapshots: "overview.metric.snapshots",
	schedule: "overview.metric.schedule",
	sync: "overview.metric.sync"
};
/** 活动行 kind key → locale 文案（kindKey 由 overview-view.ts 归一，全部键在字典登记）。 */
function kindLabel(kindKey, t) {
	return t(kindKey);
}
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return /* @__PURE__ */ __name$14(function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
	}, "handleEvent");
}
__name$14(composeEventHandlers, "composeEventHandlers");
function getOwnerWindow(element) {
	if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
	return element?.ownerDocument?.defaultView ?? window;
}
__name$14(getOwnerWindow, "getOwnerWindow");
function getOwnerDocument(element) {
	if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
	return element?.ownerDocument ?? document;
}
__name$14(getOwnerDocument, "getOwnerDocument");
function getActiveElement(node, activeDescendant = false) {
	const { activeElement } = getOwnerDocument(node);
	if (!activeElement?.nodeName) return null;
	if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
	if (activeDescendant) {
		const id = activeElement.getAttribute("aria-activedescendant");
		if (id) {
			const element = getOwnerDocument(activeElement).getElementById(id);
			if (element) return element;
		}
	}
	return activeElement;
}
__name$14(getActiveElement, "getActiveElement");
function isFrame(element) {
	return element.tagName === "IFRAME";
}
__name$14(isFrame, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$13(setRef$1, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$13(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return react.useCallback(composeRefs(...refs), refs);
}
__name$13(useComposedRefs, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createContext2(rootComponentName, defaultContext) {
	const Context = react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$12((props) => {
		const { children, ...context } = props;
		const value = react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$12(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$12(createContext2, "createContext");
// @__NO_SIDE_EFFECTS__
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$12((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$12(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$12(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$12(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$12(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$12(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$12(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$12(composeContextScopes, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var useLayoutEffect2 = globalThis?.document ? react.useLayoutEffect : () => {};
//#endregion
//#region node_modules/@radix-ui/react-id/dist/index.mjs
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
var useReactId = react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$11(useId, "useId");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$10(useEffectEvent, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$9(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$9(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = react.useState(defaultProp);
	const prevValueRef = react.useRef(value);
	const onChangeRef = react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$9(useUncontrolledState, "useUncontrolledState");
function isFunction(value) {
	return typeof value === "function";
}
__name$9(isFunction, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = react.useRef(uncontrolledState);
	react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$9(useControllableStateReducer, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && react.Children.count(children) === 1 && react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$8(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$8((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$8(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$8((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!react.isValidElement(child2)) return null;
		return react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$8(mergeProps, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$8(getElementRef$1, "getElementRef");
function isSlottable(child) {
	return react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$8(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$8(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$8(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$8((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = react[" use ".trim().toString()];
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot(`Primitive.${node}`);
	const Node = react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
function useCallbackRef(callback) {
	const callbackRef = react.useRef(callback);
	react.useEffect(() => {
		callbackRef.current = callback;
	});
	return react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$6(useCallbackRef, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name$5(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = react.useContext(DismissableLayerContext);
	const [node, setNode] = react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = react.useState({});
	const composedRefs = useComposedRefs(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$5(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = react.useContext(DismissableLayerContext);
	const [node, setNode] = react.useState(null);
	react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$5(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$5(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
	const isPointerInsideReactTreeRef = react.useRef(false);
	const isPointerDownOutsideRef = react.useRef(false);
	const interceptedOutsideInteractionEventsRef = react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = react.useRef(() => {});
	react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$5(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$5(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$5(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$5(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$5(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$5(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$5(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef(onFocusOutside);
	const isFocusInsideReactTreeRef = react.useRef(false);
	react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$5((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$5(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$5(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$5(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$5(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name$4(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = react.useState(null);
	const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
	const lastFocusedElementRef = react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, setContainer);
	const focusScope = react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$4(handleFocusIn2, "handleFocusIn");
			__name$4(handleFocusOut2, "handleFocusOut");
			__name$4(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$4(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$4(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$4((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$4(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$4(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$4(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$4(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$4(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$4(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$4(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$4(removeLinks, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name$3(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? react_dom.createPortal(/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
//#endregion
//#region node_modules/@radix-ui/react-presence/dist/index.mjs
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$2(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$2((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef(child));
	return typeof children === "function" || presence.isPresent ? react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = react.useState();
	const stylesRef = react.useRef(null);
	const prevPresentRef = react.useRef(present);
	const prevAnimationNameRef = react.useRef("none");
	const mountAnimationNameRef = react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$2((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$2((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$2(usePresence, "usePresence");
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$2(setRef, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = react.useRef(refs);
	refsRef.current = refs;
	return react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(currentRefs[i], null);
			}
		};
	}, []);
}
__name$2(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$2(getAnimationName, "getAnimationName");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$2(getElementRef, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$1(FocusGuards, "FocusGuards");
function useFocusGuards() {
	react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$1(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$1(createFocusGuard, "createFocusGuard");
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = /* @__PURE__ */ __exportAll({
	__addDisposableResource: () => __addDisposableResource,
	__assign: () => __assign,
	__asyncDelegator: () => __asyncDelegator,
	__asyncGenerator: () => __asyncGenerator,
	__asyncValues: () => __asyncValues,
	__await: () => __await,
	__awaiter: () => __awaiter,
	__classPrivateFieldGet: () => __classPrivateFieldGet,
	__classPrivateFieldIn: () => __classPrivateFieldIn,
	__classPrivateFieldSet: () => __classPrivateFieldSet,
	__createBinding: () => __createBinding,
	__decorate: () => __decorate,
	__disposeResources: () => __disposeResources,
	__esDecorate: () => __esDecorate,
	__exportStar: () => __exportStar,
	__extends: () => __extends,
	__generator: () => __generator,
	__importDefault: () => __importDefault,
	__importStar: () => __importStar,
	__makeTemplateObject: () => __makeTemplateObject,
	__metadata: () => __metadata,
	__param: () => __param,
	__propKey: () => __propKey,
	__read: () => __read,
	__rest: () => __rest,
	__rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
	__runInitializers: () => __runInitializers,
	__setFunctionName: () => __setFunctionName,
	__spread: () => __spread,
	__spreadArray: () => __spreadArray,
	__spreadArrays: () => __spreadArrays,
	__values: () => __values,
	default: () => tslib_es6_default
});
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	function accept(f) {
		if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
		return f;
	}
	var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	var _, done = false;
	for (var i = decorators.length - 1; i >= 0; i--) {
		var context = {};
		for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
		for (var p in contextIn.access) context.access[p] = contextIn.access[p];
		context.addInitializer = function(f) {
			if (done) throw new TypeError("Cannot add initializers after decoration has completed");
			extraInitializers.push(accept(f || null));
		};
		var result = (0, decorators[i])(kind === "accessor" ? {
			get: descriptor.get,
			set: descriptor.set
		} : descriptor[key], context);
		if (kind === "accessor") {
			if (result === void 0) continue;
			if (result === null || typeof result !== "object") throw new TypeError("Object expected");
			if (_ = accept(result.get)) descriptor.get = _;
			if (_ = accept(result.set)) descriptor.set = _;
			if (_ = accept(result.init)) initializers.unshift(_);
		} else if (_ = accept(result)) {
			if (kind === "field") initializers.unshift(_);
			else descriptor[key] = _;
		}
	}
	if (target) Object.defineProperty(target, contextIn.name, descriptor);
	done = true;
}
function __runInitializers(thisArg, initializers, value) {
	var useValue = arguments.length > 2;
	for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	return useValue ? value : void 0;
}
function __propKey(x) {
	return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
	if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	return Object.defineProperty(f, "name", {
		configurable: true,
		value: prefix ? "".concat(prefix, " ", name) : name
	});
}
function __metadata(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __exportStar(m, o) {
	for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
/** @deprecated */
function __spread() {
	for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
	return ar;
}
/** @deprecated */
function __spreadArrays() {
	for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
	return r;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
	return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g = generator.apply(thisArg, _arguments || []), i, q = [];
	return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function awaitReturn(f) {
		return function(v) {
			return Promise.resolve(v).then(f, reject);
		};
	}
	function verb(n, f) {
		if (g[n]) {
			i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([
						n,
						v,
						a,
						b
					]) > 1 || resume(n, v);
				});
			};
			if (f) i[n] = f(i[n]);
		}
	}
	function resume(n, v) {
		try {
			step(g[n](v));
		} catch (e) {
			settle(q[0][3], e);
		}
	}
	function step(r) {
		r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f, v) {
		if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	}
}
function __asyncDelegator(o) {
	var i, p;
	return i = {}, verb("next"), verb("throw", function(e) {
		throw e;
	}), verb("return"), i[Symbol.iterator] = function() {
		return this;
	}, i;
	function verb(n, f) {
		i[n] = o[n] ? function(v) {
			return (p = !p) ? {
				value: __await(o[n](v)),
				done: false
			} : f ? f(v) : v;
		} : f;
	}
}
function __asyncValues(o) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m = o[Symbol.asyncIterator], i;
	return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
		return this;
	}, i);
	function verb(n) {
		i[n] = o[n] && function(v) {
			return new Promise(function(resolve, reject) {
				v = o[n](v), settle(resolve, reject, v.done, v.value);
			});
		};
	}
	function settle(resolve, reject, d, v) {
		Promise.resolve(v).then(function(v) {
			resolve({
				value: v,
				done: d
			});
		}, reject);
	}
}
function __makeTemplateObject(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
	}
	__setModuleDefault(result, mod);
	return result;
}
function __importDefault(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
	if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
	return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
	if (value !== null && value !== void 0) {
		if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
		var dispose, inner;
		if (async) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			dispose = value[Symbol.asyncDispose];
		}
		if (dispose === void 0) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			dispose = value[Symbol.dispose];
			if (async) inner = dispose;
		}
		if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
		if (inner) dispose = function() {
			try {
				inner.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		};
		env.stack.push({
			value,
			dispose,
			async
		});
	} else if (async) env.stack.push({ async: true });
	return value;
}
function __disposeResources(env) {
	function fail(e) {
		env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
		env.hasError = true;
	}
	var r, s = 0;
	function next() {
		while (r = env.stack.pop()) try {
			if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
			if (r.dispose) {
				var result = r.dispose.call(r.value);
				if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
					fail(e);
					return next();
				});
			} else s |= 1;
		} catch (e) {
			fail(e);
		}
		if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
		if (env.hasError) throw env.error;
	}
	return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
	if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
		return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
	});
	return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esmMin((() => {
	extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	__assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	__createBinding = Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	});
	__setModuleDefault = Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	};
	ownKeys = function(o) {
		ownKeys = Object.getOwnPropertyNames || function(o) {
			var ar = [];
			for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
			return ar;
		};
		return ownKeys(o);
	};
	_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
		var e = new Error(message);
		return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};
	tslib_es6_default = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__createBinding,
		__exportStar,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	};
}));
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
	exports.zeroRightClassName = "right-scroll-bar-position";
	exports.fullWidthClassName = "width-before-scroll-bar";
	exports.noScrollbarsClassName = "with-scroll-bars-hidden";
	/**
	* Name of a CSS variable containing the amount of "hidden" scrollbar
	* ! might be undefined ! use will fallback!
	*/
	exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.assignRef = void 0;
	/**
	* Assigns a value for a given ref, no matter of the ref format
	* @param {RefObject} ref - a callback function or ref object
	* @param value - a new value
	*
	* @see https://github.com/theKashey/use-callback-ref#assignref
	* @example
	* const refObject = useRef();
	* const refFn = (ref) => {....}
	*
	* assignRef(refObject, "refValue");
	* assignRef(refFn, "refValue");
	*/
	function assignRef(ref, value) {
		if (typeof ref === "function") ref(value);
		else if (ref) ref.current = value;
		return ref;
	}
	exports.assignRef = assignRef;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useCallbackRef = void 0;
	var react_1$2 = require("react");
	/**
	* creates a MutableRef with ref change callback
	* @param initialValue - initial ref value
	* @param {Function} callback - a callback to run when value changes
	*
	* @example
	* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
	* ref.current = 1;
	* // prints 0 -> 1
	*
	* @see https://reactjs.org/docs/hooks-reference.html#useref
	* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
	* @returns {MutableRefObject}
	*/
	function useCallbackRef(initialValue, callback) {
		var ref = (0, react_1$2.useState)(function() {
			return {
				value: initialValue,
				callback,
				facade: {
					get current() {
						return ref.value;
					},
					set current(value) {
						var last = ref.value;
						if (last !== value) {
							ref.value = value;
							ref.callback(value, last);
						}
					}
				}
			};
		})[0];
		ref.callback = callback;
		return ref.facade;
	}
	exports.useCallbackRef = useCallbackRef;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createCallbackRef = void 0;
	/**
	* creates a Ref object with on change callback
	* @param callback
	* @returns {RefObject}
	*
	* @see {@link useCallbackRef}
	* @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
	*/
	function createCallbackRef(callback) {
		var current = null;
		return {
			get current() {
				return current;
			},
			set current(value) {
				var last = current;
				if (last !== value) {
					current = value;
					callback(value, last);
				}
			}
		};
	}
	exports.createCallbackRef = createCallbackRef;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeRefs = void 0;
	var assignRef_1 = require_assignRef();
	var createRef_1 = require_createRef();
	/**
	* Merges two or more refs together providing a single interface to set their value
	* @param {RefObject|Ref} refs
	* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
	*
	* @see {@link useMergeRefs} to be used in ReactComponents
	* @example
	* const Component = React.forwardRef((props, ref) => {
	*   const ownRef = useRef();
	*   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
	*   return <div ref={domRef}>...</div>
	* }
	*/
	function mergeRefs(refs) {
		return (0, createRef_1.createCallbackRef)(function(newValue) {
			return refs.forEach(function(ref) {
				return (0, assignRef_1.assignRef)(ref, newValue);
			});
		});
	}
	exports.mergeRefs = mergeRefs;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useMergeRefs = void 0;
	var React$8 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports)).__importStar(require("react"));
	var assignRef_1 = require_assignRef();
	var useRef_1 = require_useRef();
	var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React$8.useLayoutEffect : React$8.useEffect;
	var currentValues = /* @__PURE__ */ new WeakMap();
	/**
	* Merges two or more refs together providing a single interface to set their value
	* @param {RefObject|Ref} refs
	* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
	*
	* @see {@link mergeRefs} a version without buit-in memoization
	* @see https://github.com/theKashey/use-callback-ref#usemergerefs
	* @example
	* const Component = React.forwardRef((props, ref) => {
	*   const ownRef = useRef();
	*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
	*   return <div ref={domRef}>...</div>
	* }
	*/
	function useMergeRefs(refs, defaultValue) {
		var callbackRef = (0, useRef_1.useCallbackRef)(defaultValue || null, function(newValue) {
			return refs.forEach(function(ref) {
				return (0, assignRef_1.assignRef)(ref, newValue);
			});
		});
		useIsomorphicLayoutEffect(function() {
			var oldValue = currentValues.get(callbackRef);
			if (oldValue) {
				var prevRefs_1 = new Set(oldValue);
				var nextRefs_1 = new Set(refs);
				var current_1 = callbackRef.current;
				prevRefs_1.forEach(function(ref) {
					if (!nextRefs_1.has(ref)) (0, assignRef_1.assignRef)(ref, null);
				});
				nextRefs_1.forEach(function(ref) {
					if (!prevRefs_1.has(ref)) (0, assignRef_1.assignRef)(ref, current_1);
				});
			}
			currentValues.set(callbackRef, refs);
		}, [refs]);
		return callbackRef;
	}
	exports.useMergeRefs = useMergeRefs;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useTransformRef = void 0;
	var assignRef_1 = require_assignRef();
	var useRef_1 = require_useRef();
	/**
	* Create a _lense_ on Ref, making it possible to transform ref value
	* @param {ReactRef} ref
	* @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
	* @returns {RefObject}
	*
	* @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
	* @example
	*
	* const ResizableWithRef = forwardRef((props, ref) =>
	*  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
	* );
	*/
	function useTransformRef(ref, transformer) {
		return (0, useRef_1.useCallbackRef)(null, function(value) {
			return (0, assignRef_1.assignRef)(ref, transformer(value));
		});
	}
	exports.useTransformRef = useTransformRef;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.transformRef = void 0;
	var assignRef_1 = require_assignRef();
	var createRef_1 = require_createRef();
	/**
	* Transforms one ref to another
	* @example
	* ```tsx
	* const ResizableWithRef = forwardRef((props, ref) =>
	*   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>
	* );
	* ```
	*/
	function transformRef(ref, transformer) {
		return (0, createRef_1.createCallbackRef)(function(value) {
			return (0, assignRef_1.assignRef)(ref, transformer(value));
		});
	}
	exports.transformRef = transformRef;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useRefToCallback = exports.refToCallback = void 0;
	/**
	* Unmemoized version of {@link useRefToCallback}
	* @see {@link useRefToCallback}
	* @param ref
	*/
	function refToCallback(ref) {
		return function(newValue) {
			if (typeof ref === "function") ref(newValue);
			else if (ref) ref.current = newValue;
		};
	}
	exports.refToCallback = refToCallback;
	var nullCallback = function() {
		return null;
	};
	var weakMem = /* @__PURE__ */ new WeakMap();
	var weakMemoize = function(ref) {
		var usedRef = ref || nullCallback;
		var storedRef = weakMem.get(usedRef);
		if (storedRef) return storedRef;
		var cb = refToCallback(usedRef);
		weakMem.set(usedRef, cb);
		return cb;
	};
	/**
	* Transforms a given `ref` into `callback`.
	*
	* To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
	*
	* @param {ReactRef} ref
	* @returns {Function}
	*
	* @see https://github.com/theKashey/use-callback-ref#reftocallback
	*
	* @example
	* const ref = useRef(0);
	* const setRef = useRefToCallback(ref);
	* 👉 setRef(10);
	* ✅ ref.current === 10
	*/
	function useRefToCallback(ref) {
		return weakMemoize(ref);
	}
	exports.useRefToCallback = useRefToCallback;
}));
//#endregion
//#region node_modules/use-callback-ref/dist/es5/index.js
var require_es5$6 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
	var assignRef_1 = require_assignRef();
	Object.defineProperty(exports, "assignRef", {
		enumerable: true,
		get: function() {
			return assignRef_1.assignRef;
		}
	});
	var useRef_1 = require_useRef();
	Object.defineProperty(exports, "useCallbackRef", {
		enumerable: true,
		get: function() {
			return useRef_1.useCallbackRef;
		}
	});
	var createRef_1 = require_createRef();
	Object.defineProperty(exports, "createCallbackRef", {
		enumerable: true,
		get: function() {
			return createRef_1.createCallbackRef;
		}
	});
	var mergeRef_1 = require_mergeRef();
	Object.defineProperty(exports, "mergeRefs", {
		enumerable: true,
		get: function() {
			return mergeRef_1.mergeRefs;
		}
	});
	var useMergeRef_1 = require_useMergeRef();
	Object.defineProperty(exports, "useMergeRefs", {
		enumerable: true,
		get: function() {
			return useMergeRef_1.useMergeRefs;
		}
	});
	var useTransformRef_1 = require_useTransformRef();
	Object.defineProperty(exports, "useTransformRef", {
		enumerable: true,
		get: function() {
			return useTransformRef_1.useTransformRef;
		}
	});
	var transformRef_1 = require_transformRef();
	Object.defineProperty(exports, "transformRef", {
		enumerable: true,
		get: function() {
			return transformRef_1.transformRef;
		}
	});
	var refToCallback_1 = require_refToCallback();
	Object.defineProperty(exports, "refToCallback", {
		enumerable: true,
		get: function() {
			return refToCallback_1.refToCallback;
		}
	});
	Object.defineProperty(exports, "useRefToCallback", {
		enumerable: true,
		get: function() {
			return refToCallback_1.useRefToCallback;
		}
	});
}));
//#endregion
//#region node_modules/detect-node-es/es5/node.js
var require_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/env.js
var require_env = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.env = void 0;
	exports.env = {
		isNode: require_node().isNode,
		forceCache: false
	};
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/hook.js
var require_hook$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.useSidecar = void 0;
	var react_1$1 = require("react");
	var env_1 = require_env();
	var cache = /* @__PURE__ */ new WeakMap();
	var NO_OPTIONS = {};
	function useSidecar(importer, effect) {
		var options = effect && effect.options || NO_OPTIONS;
		if (env_1.env.isNode && !options.ssr) return [null, null];
		return useRealSidecar(importer, effect);
	}
	exports.useSidecar = useSidecar;
	function useRealSidecar(importer, effect) {
		var options = effect && effect.options || NO_OPTIONS;
		var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
		var _a = (0, react_1$1.useState)(couldUseCache ? function() {
			return cache.get(importer);
		} : void 0), Car = _a[0], setCar = _a[1];
		var _b = (0, react_1$1.useState)(null), error = _b[0], setError = _b[1];
		(0, react_1$1.useEffect)(function() {
			if (!Car) importer().then(function(car) {
				var resolved = effect ? effect.read() : car.default || car;
				if (!resolved) {
					console.error("Sidecar error: with importer", importer);
					var error_1;
					if (effect) {
						console.error("Sidecar error: with medium", effect);
						error_1 = /* @__PURE__ */ new Error("Sidecar medium was not found");
					} else error_1 = /* @__PURE__ */ new Error("Sidecar was not found in exports");
					setError(function() {
						return error_1;
					});
					throw error_1;
				}
				cache.set(importer, resolved);
				setCar(function() {
					return resolved;
				});
			}, function(e) {
				return setError(function() {
					return e;
				});
			});
		}, []);
		return [Car, error];
	}
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sidecar = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React$7 = tslib_1.__importStar(require("react"));
	var hook_1 = require_hook$1();
	function sidecar(importer, errorComponent) {
		var ErrorCase = function() {
			return errorComponent;
		};
		return function Sidecar(props) {
			var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0];
			if (_a[1] && errorComponent) return ErrorCase;
			return Car ? React$7.createElement(Car, tslib_1.__assign({}, props)) : null;
		};
	}
	exports.sidecar = sidecar;
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/config.js
var require_config = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.setConfig = exports.config = void 0;
	exports.config = { onError: function(e) {
		return console.error(e);
	} };
	var setConfig = function(conf) {
		Object.assign(exports.config, conf);
	};
	exports.setConfig = setConfig;
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/medium.js
var require_medium$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createSidecarMedium = exports.createMedium = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	function ItoI(a) {
		return a;
	}
	function innerCreateMedium(defaults, middleware) {
		if (middleware === void 0) middleware = ItoI;
		var buffer = [];
		var assigned = false;
		return {
			read: function() {
				if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
				if (buffer.length) return buffer[buffer.length - 1];
				return defaults;
			},
			useMedium: function(data) {
				var item = middleware(data, assigned);
				buffer.push(item);
				return function() {
					buffer = buffer.filter(function(x) {
						return x !== item;
					});
				};
			},
			assignSyncMedium: function(cb) {
				assigned = true;
				while (buffer.length) {
					var cbs = buffer;
					buffer = [];
					cbs.forEach(cb);
				}
				buffer = {
					push: function(x) {
						return cb(x);
					},
					filter: function() {
						return buffer;
					}
				};
			},
			assignMedium: function(cb) {
				assigned = true;
				var pendingQueue = [];
				if (buffer.length) {
					var cbs = buffer;
					buffer = [];
					cbs.forEach(cb);
					pendingQueue = buffer;
				}
				var executeQueue = function() {
					var cbs = pendingQueue;
					pendingQueue = [];
					cbs.forEach(cb);
				};
				var cycle = function() {
					return Promise.resolve().then(executeQueue);
				};
				cycle();
				buffer = {
					push: function(x) {
						pendingQueue.push(x);
						cycle();
					},
					filter: function(filter) {
						pendingQueue = pendingQueue.filter(filter);
						return buffer;
					}
				};
			}
		};
	}
	function createMedium(defaults, middleware) {
		if (middleware === void 0) middleware = ItoI;
		return innerCreateMedium(defaults, middleware);
	}
	exports.createMedium = createMedium;
	function createSidecarMedium(options) {
		if (options === void 0) options = {};
		var medium = innerCreateMedium(null);
		medium.options = tslib_1.__assign({
			async: true,
			ssr: false
		}, options);
		return medium;
	}
	exports.createSidecarMedium = createSidecarMedium;
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.renderCar = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React$6 = tslib_1.__importStar(require("react"));
	var react_1 = require("react");
	function renderCar(WrappedComponent, defaults) {
		function State(_a) {
			var stateRef = _a.stateRef, props = _a.props;
			var renderTarget = (0, react_1.useCallback)(function SideTarget() {
				var args = [];
				for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
				(0, react_1.useLayoutEffect)(function() {
					stateRef.current(args);
				});
				return null;
			}, []);
			return React$6.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
		}
		var Children = React$6.memo(function(_a) {
			var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
			var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
			(0, react_1.useEffect)(function() {
				stateRef.current = setState;
			}, []);
			return children.apply(void 0, state);
		}, function() {
			return true;
		});
		return function Combiner(props) {
			var defaultState = React$6.useRef(defaults(props));
			var ref = React$6.useRef(function(state) {
				return defaultState.current = state;
			});
			return React$6.createElement(React$6.Fragment, null, React$6.createElement(State, {
				stateRef: ref,
				props
			}), React$6.createElement(Children, {
				stateRef: ref,
				defaultState,
				children: props.children
			}));
		};
	}
	exports.renderCar = renderCar;
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/exports.js
var require_exports = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.exportSidecar = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React$5 = tslib_1.__importStar(require("react"));
	var SideCar = function(_a) {
		var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
		if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
		var Target = sideCar.read();
		if (!Target) throw new Error("Sidecar medium not found");
		return React$5.createElement(Target, tslib_1.__assign({}, rest));
	};
	SideCar.isSideCarExport = true;
	function exportSidecar(medium, exported) {
		medium.useMedium(exported);
		return SideCar;
	}
	exports.exportSidecar = exportSidecar;
}));
//#endregion
//#region node_modules/use-sidecar/dist/es5/index.js
var require_es5$5 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
	var hoc_1 = require_hoc();
	Object.defineProperty(exports, "sidecar", {
		enumerable: true,
		get: function() {
			return hoc_1.sidecar;
		}
	});
	var hook_1 = require_hook$1();
	Object.defineProperty(exports, "useSidecar", {
		enumerable: true,
		get: function() {
			return hook_1.useSidecar;
		}
	});
	var config_1 = require_config();
	Object.defineProperty(exports, "setConfig", {
		enumerable: true,
		get: function() {
			return config_1.setConfig;
		}
	});
	var medium_1 = require_medium$1();
	Object.defineProperty(exports, "createMedium", {
		enumerable: true,
		get: function() {
			return medium_1.createMedium;
		}
	});
	Object.defineProperty(exports, "createSidecarMedium", {
		enumerable: true,
		get: function() {
			return medium_1.createSidecarMedium;
		}
	});
	var renderProp_1 = require_renderProp();
	Object.defineProperty(exports, "renderCar", {
		enumerable: true,
		get: function() {
			return renderProp_1.renderCar;
		}
	});
	var exports_1 = require_exports();
	Object.defineProperty(exports, "exportSidecar", {
		enumerable: true,
		get: function() {
			return exports_1.exportSidecar;
		}
	});
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.effectCar = void 0;
	exports.effectCar = (0, require_es5$5().createSidecarMedium)();
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RemoveScroll = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React$4 = tslib_1.__importStar(require("react"));
	var constants_1 = require_constants();
	var use_callback_ref_1 = require_es5$6();
	var medium_1 = require_medium();
	var nothing = function() {};
	/**
	* Removes scrollbar from the page and contain the scroll within the Lock
	*/
	var RemoveScroll = React$4.forwardRef(function(props, parentRef) {
		var ref = React$4.useRef(null);
		var _a = React$4.useState({
			onScrollCapture: nothing,
			onWheelCapture: nothing,
			onTouchMoveCapture: nothing
		}), callbacks = _a[0], setCallbacks = _a[1];
		var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = tslib_1.__rest(props, [
			"forwardProps",
			"children",
			"className",
			"removeScrollBar",
			"enabled",
			"shards",
			"sideCar",
			"noRelative",
			"noIsolation",
			"inert",
			"allowPinchZoom",
			"as",
			"gapMode"
		]);
		var SideCar = sideCar;
		var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
		var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
		return React$4.createElement(React$4.Fragment, null, enabled && React$4.createElement(SideCar, {
			sideCar: medium_1.effectCar,
			removeScrollBar,
			shards,
			noRelative,
			noIsolation,
			inert,
			setCallbacks,
			allowPinchZoom: !!allowPinchZoom,
			lockRef: ref,
			gapMode
		}), forwardProps ? React$4.cloneElement(React$4.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React$4.createElement(Container, tslib_1.__assign({}, containerProps, {
			className,
			ref: containerRef
		}), children));
	});
	exports.RemoveScroll = RemoveScroll;
	RemoveScroll.defaultProps = {
		enabled: true,
		removeScrollBar: true,
		inert: false
	};
	RemoveScroll.classNames = {
		fullWidth: constants_1.fullWidthClassName,
		zeroRight: constants_1.zeroRightClassName
	};
}));
//#endregion
//#region node_modules/get-nonce/dist/es5/index.js
var require_es5$4 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var currentNonce;
	exports.setNonce = function(nonce) {
		currentNonce = nonce;
	};
	exports.getNonce = function() {
		if (currentNonce) return currentNonce;
		if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
	};
}));
//#endregion
//#region node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.stylesheetSingleton = void 0;
	var get_nonce_1 = require_es5$4();
	function makeStyleTag() {
		if (!document) return null;
		var tag = document.createElement("style");
		tag.type = "text/css";
		var nonce = (0, get_nonce_1.getNonce)();
		if (nonce) tag.setAttribute("nonce", nonce);
		return tag;
	}
	function injectStyles(tag, css) {
		if (tag.styleSheet) tag.styleSheet.cssText = css;
		else tag.appendChild(document.createTextNode(css));
	}
	function insertStyleTag(tag) {
		(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
	}
	var stylesheetSingleton = function() {
		var counter = 0;
		var stylesheet = null;
		return {
			add: function(style) {
				if (counter == 0) {
					if (stylesheet = makeStyleTag()) {
						injectStyles(stylesheet, style);
						insertStyleTag(stylesheet);
					}
				}
				counter++;
			},
			remove: function() {
				counter--;
				if (!counter && stylesheet) {
					stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
					stylesheet = null;
				}
			}
		};
	};
	exports.stylesheetSingleton = stylesheetSingleton;
}));
//#endregion
//#region node_modules/react-style-singleton/dist/es5/hook.js
var require_hook = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.styleHookSingleton = void 0;
	var React$3 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports)).__importStar(require("react"));
	var singleton_1 = require_singleton();
	/**
	* creates a hook to control style singleton
	* @see {@link styleSingleton} for a safer component version
	* @example
	* ```tsx
	* const useStyle = styleHookSingleton();
	* ///
	* useStyle('body { overflow: hidden}');
	*/
	var styleHookSingleton = function() {
		var sheet = (0, singleton_1.stylesheetSingleton)();
		return function(styles, isDynamic) {
			React$3.useEffect(function() {
				sheet.add(styles);
				return function() {
					sheet.remove();
				};
			}, [styles && isDynamic]);
		};
	};
	exports.styleHookSingleton = styleHookSingleton;
}));
//#endregion
//#region node_modules/react-style-singleton/dist/es5/component.js
var require_component$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.styleSingleton = void 0;
	var hook_1 = require_hook();
	/**
	* create a Component to add styles on demand
	* - styles are added when first instance is mounted
	* - styles are removed when the last instance is unmounted
	* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
	*/
	var styleSingleton = function() {
		var useStyle = (0, hook_1.styleHookSingleton)();
		var Sheet = function(_a) {
			var styles = _a.styles, dynamic = _a.dynamic;
			useStyle(styles, dynamic);
			return null;
		};
		return Sheet;
	};
	exports.styleSingleton = styleSingleton;
}));
//#endregion
//#region node_modules/react-style-singleton/dist/es5/index.js
var require_es5$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
	var component_1 = require_component$1();
	Object.defineProperty(exports, "styleSingleton", {
		enumerable: true,
		get: function() {
			return component_1.styleSingleton;
		}
	});
	var singleton_1 = require_singleton();
	Object.defineProperty(exports, "stylesheetSingleton", {
		enumerable: true,
		get: function() {
			return singleton_1.stylesheetSingleton;
		}
	});
	var hook_1 = require_hook();
	Object.defineProperty(exports, "styleHookSingleton", {
		enumerable: true,
		get: function() {
			return hook_1.styleHookSingleton;
		}
	});
}));
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getGapWidth = exports.zeroGap = void 0;
	exports.zeroGap = {
		left: 0,
		top: 0,
		right: 0,
		gap: 0
	};
	var parse = function(x) {
		return parseInt(x || "", 10) || 0;
	};
	var getOffset = function(gapMode) {
		var cs = window.getComputedStyle(document.body);
		var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
		var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
		var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
		return [
			parse(left),
			parse(top),
			parse(right)
		];
	};
	var getGapWidth = function(gapMode) {
		if (gapMode === void 0) gapMode = "margin";
		if (typeof window === "undefined") return exports.zeroGap;
		var offsets = getOffset(gapMode);
		var documentWidth = document.documentElement.clientWidth;
		var windowWidth = window.innerWidth;
		return {
			left: offsets[0],
			top: offsets[1],
			right: offsets[2],
			gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
		};
	};
	exports.getGapWidth = getGapWidth;
}));
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RemoveScrollBar = exports.useLockAttribute = exports.lockAttribute = void 0;
	var React$2 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports)).__importStar(require("react"));
	var react_style_singleton_1 = require_es5$3();
	var constants_1 = require_constants();
	var utils_1 = require_utils();
	var Style = (0, react_style_singleton_1.styleSingleton)();
	exports.lockAttribute = "data-scroll-locked";
	var getStyles = function(_a, allowRelative, gapMode, important) {
		var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
		if (gapMode === void 0) gapMode = "margin";
		return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(exports.lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
			allowRelative && "position: relative ".concat(important, ";"),
			gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
			gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
		].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(exports.lockAttribute, "] {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
	};
	var getCurrentUseCounter = function() {
		var counter = parseInt(document.body.getAttribute(exports.lockAttribute) || "0", 10);
		return isFinite(counter) ? counter : 0;
	};
	var useLockAttribute = function() {
		React$2.useEffect(function() {
			document.body.setAttribute(exports.lockAttribute, (getCurrentUseCounter() + 1).toString());
			return function() {
				var newCounter = getCurrentUseCounter() - 1;
				if (newCounter <= 0) document.body.removeAttribute(exports.lockAttribute);
				else document.body.setAttribute(exports.lockAttribute, newCounter.toString());
			};
		}, []);
	};
	exports.useLockAttribute = useLockAttribute;
	/**
	* Removes page scrollbar and blocks page scroll when mounted
	*/
	var RemoveScrollBar = function(_a) {
		var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
		(0, exports.useLockAttribute)();
		var gap = React$2.useMemo(function() {
			return (0, utils_1.getGapWidth)(gapMode);
		}, [gapMode]);
		return React$2.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
	};
	exports.RemoveScrollBar = RemoveScrollBar;
}));
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es5$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
	var component_1 = require_component();
	Object.defineProperty(exports, "RemoveScrollBar", {
		enumerable: true,
		get: function() {
			return component_1.RemoveScrollBar;
		}
	});
	var constants_1 = require_constants();
	Object.defineProperty(exports, "zeroRightClassName", {
		enumerable: true,
		get: function() {
			return constants_1.zeroRightClassName;
		}
	});
	Object.defineProperty(exports, "fullWidthClassName", {
		enumerable: true,
		get: function() {
			return constants_1.fullWidthClassName;
		}
	});
	Object.defineProperty(exports, "noScrollbarsClassName", {
		enumerable: true,
		get: function() {
			return constants_1.noScrollbarsClassName;
		}
	});
	Object.defineProperty(exports, "removedBarSizeVariable", {
		enumerable: true,
		get: function() {
			return constants_1.removedBarSizeVariable;
		}
	});
	var utils_1 = require_utils();
	Object.defineProperty(exports, "getGapWidth", {
		enumerable: true,
		get: function() {
			return utils_1.getGapWidth;
		}
	});
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.nonPassive = void 0;
	var passiveSupported = false;
	if (typeof window !== "undefined") try {
		var options = Object.defineProperty({}, "passive", { get: function() {
			passiveSupported = true;
			return true;
		} });
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, options);
	} catch (err) {
		passiveSupported = false;
	}
	exports.nonPassive = passiveSupported ? { passive: false } : false;
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.handleScroll = exports.locationCouldBeScrolled = void 0;
	var alwaysContainsScroll = function(node) {
		return node.tagName === "TEXTAREA";
	};
	var elementCanBeScrolled = function(node, overflow) {
		if (!(node instanceof Element)) return false;
		var styles = window.getComputedStyle(node);
		return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
	};
	var elementCouldBeVScrolled = function(node) {
		return elementCanBeScrolled(node, "overflowY");
	};
	var elementCouldBeHScrolled = function(node) {
		return elementCanBeScrolled(node, "overflowX");
	};
	var locationCouldBeScrolled = function(axis, node) {
		var ownerDocument = node.ownerDocument;
		var current = node;
		do {
			if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
			if (elementCouldBeScrolled(axis, current)) {
				var _a = getScrollVariables(axis, current);
				if (_a[1] > _a[2]) return true;
			}
			current = current.parentNode;
		} while (current && current !== ownerDocument.body);
		return false;
	};
	exports.locationCouldBeScrolled = locationCouldBeScrolled;
	var getVScrollVariables = function(_a) {
		return [
			_a.scrollTop,
			_a.scrollHeight,
			_a.clientHeight
		];
	};
	var getHScrollVariables = function(_a) {
		return [
			_a.scrollLeft,
			_a.scrollWidth,
			_a.clientWidth
		];
	};
	var elementCouldBeScrolled = function(axis, node) {
		return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
	};
	var getScrollVariables = function(axis, node) {
		return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
	};
	var getDirectionFactor = function(axis, direction) {
		/**
		* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
		* and then increasingly negative as you scroll towards the end of the content.
		* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
		*/
		return axis === "h" && direction === "rtl" ? -1 : 1;
	};
	var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
		var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
		var delta = directionFactor * sourceDelta;
		var target = event.target;
		var targetInLock = endTarget.contains(target);
		var shouldCancelScroll = false;
		var isDeltaPositive = delta > 0;
		var availableScroll = 0;
		var availableScrollTop = 0;
		do {
			if (!target) break;
			var _a = getScrollVariables(axis, target), position = _a[0];
			var elementScroll = _a[1] - _a[2] - directionFactor * position;
			if (position || elementScroll) {
				if (elementCouldBeScrolled(axis, target)) {
					availableScroll += elementScroll;
					availableScrollTop += position;
				}
			}
			var parent_1 = target.parentNode;
			target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
		} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
		if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
		else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
		return shouldCancelScroll;
	};
	exports.handleScroll = handleScroll;
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React$1 = tslib_1.__importStar(require("react"));
	var react_remove_scroll_bar_1 = require_es5$2();
	var react_style_singleton_1 = require_es5$3();
	var aggresiveCapture_1 = require_aggresiveCapture();
	var handleScroll_1 = require_handleScroll();
	var getTouchXY = function(event) {
		return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
	};
	exports.getTouchXY = getTouchXY;
	var getDeltaXY = function(event) {
		return [event.deltaX, event.deltaY];
	};
	exports.getDeltaXY = getDeltaXY;
	var extractRef = function(ref) {
		return ref && "current" in ref ? ref.current : ref;
	};
	var deltaCompare = function(x, y) {
		return x[0] === y[0] && x[1] === y[1];
	};
	var generateStyle = function(id) {
		return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
	};
	var idCounter = 0;
	var lockStack = [];
	function RemoveScrollSideCar(props) {
		var shouldPreventQueue = React$1.useRef([]);
		var touchStartRef = React$1.useRef([0, 0]);
		var activeAxis = React$1.useRef();
		var id = React$1.useState(idCounter++)[0];
		var Style = React$1.useState(react_style_singleton_1.styleSingleton)[0];
		var lastProps = React$1.useRef(props);
		React$1.useEffect(function() {
			lastProps.current = props;
		}, [props]);
		React$1.useEffect(function() {
			if (props.inert) {
				document.body.classList.add("block-interactivity-".concat(id));
				var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
				allow_1.forEach(function(el) {
					return el.classList.add("allow-interactivity-".concat(id));
				});
				return function() {
					document.body.classList.remove("block-interactivity-".concat(id));
					allow_1.forEach(function(el) {
						return el.classList.remove("allow-interactivity-".concat(id));
					});
				};
			}
		}, [
			props.inert,
			props.lockRef.current,
			props.shards
		]);
		var shouldCancelEvent = React$1.useCallback(function(event, parent) {
			if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
			var touch = (0, exports.getTouchXY)(event);
			var touchStart = touchStartRef.current;
			var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
			var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
			var currentAxis;
			var target = event.target;
			var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
			if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
			var selection = window.getSelection();
			var anchorNode = selection && selection.anchorNode;
			if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
			var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
			if (!canBeScrolledInMainDirection) return true;
			if (canBeScrolledInMainDirection) currentAxis = moveDirection;
			else {
				currentAxis = moveDirection === "v" ? "h" : "v";
				canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
			}
			if (!canBeScrolledInMainDirection) return false;
			if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
			if (!currentAxis) return true;
			var cancelingAxis = activeAxis.current || currentAxis;
			return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
		}, []);
		var shouldPrevent = React$1.useCallback(function(_event) {
			var event = _event;
			if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
			var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
			var sourceEvent = shouldPreventQueue.current.filter(function(e) {
				return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
			})[0];
			if (sourceEvent && sourceEvent.should) {
				if (event.cancelable) event.preventDefault();
				return;
			}
			if (!sourceEvent) {
				var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
					return node.contains(event.target);
				});
				if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
					if (event.cancelable) event.preventDefault();
				}
			}
		}, []);
		var shouldCancel = React$1.useCallback(function(name, delta, target, should) {
			var event = {
				name,
				delta,
				target,
				should,
				shadowParent: getOutermostShadowParent(target)
			};
			shouldPreventQueue.current.push(event);
			setTimeout(function() {
				shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
					return e !== event;
				});
			}, 1);
		}, []);
		var scrollTouchStart = React$1.useCallback(function(event) {
			touchStartRef.current = (0, exports.getTouchXY)(event);
			activeAxis.current = void 0;
		}, []);
		var scrollWheel = React$1.useCallback(function(event) {
			shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
		}, []);
		var scrollTouchMove = React$1.useCallback(function(event) {
			shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
		}, []);
		React$1.useEffect(function() {
			lockStack.push(Style);
			props.setCallbacks({
				onScrollCapture: scrollWheel,
				onWheelCapture: scrollWheel,
				onTouchMoveCapture: scrollTouchMove
			});
			document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
			document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
			document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
			return function() {
				lockStack = lockStack.filter(function(inst) {
					return inst !== Style;
				});
				document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
				document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
				document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
			};
		}, []);
		var removeScrollBar = props.removeScrollBar, inert = props.inert;
		return React$1.createElement(React$1.Fragment, null, inert ? React$1.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? React$1.createElement(react_remove_scroll_bar_1.RemoveScrollBar, {
			noRelative: props.noRelative,
			gapMode: props.gapMode
		}) : null);
	}
	exports.RemoveScrollSideCar = RemoveScrollSideCar;
	function getOutermostShadowParent(node) {
		var shadowParent = null;
		while (node !== null) {
			if (node instanceof ShadowRoot) {
				shadowParent = node.host;
				node = node.host;
			}
			node = node.parentNode;
		}
		return shadowParent;
	}
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var use_sidecar_1 = require_es5$5();
	var SideEffect_1 = require_SideEffect();
	var medium_1 = require_medium();
	exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
	var React = tslib_1.__importStar(require("react"));
	var UI_1 = require_UI();
	var sidecar_1 = tslib_1.__importDefault(require_sidecar());
	var ReactRemoveScroll = React.forwardRef(function(props, ref) {
		return React.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, {
			ref,
			sideCar: sidecar_1.default
		}));
	});
	ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
	exports.default = ReactRemoveScroll;
}));
//#endregion
//#region node_modules/react-remove-scroll/dist/es5/index.js
var require_es5$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RemoveScroll = void 0;
	exports.RemoveScroll = (init_tslib_es6(), __toCommonJS(tslib_es6_exports)).__importDefault(require_Combination()).default;
}));
//#endregion
//#region node_modules/aria-hidden/dist/es5/index.js
var require_es5 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
	var getDefaultParent = function(originalTarget) {
		if (typeof document === "undefined") return null;
		return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
	};
	var counterMap = /* @__PURE__ */ new WeakMap();
	var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
	var markerMap = {};
	var lockCount = 0;
	var unwrapHost = function(node) {
		return node && (node.host || unwrapHost(node.parentNode));
	};
	var correctTargets = function(parent, targets) {
		return targets.map(function(target) {
			if (parent.contains(target)) return target;
			var correctedTarget = unwrapHost(target);
			if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
			console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
			return null;
		}).filter(function(x) {
			return Boolean(x);
		});
	};
	/**
	* Marks everything except given node(or nodes) as aria-hidden
	* @param {Element | Element[]} originalTarget - elements to keep on the page
	* @param [parentNode] - top element, defaults to document.body
	* @param {String} [markerName] - a special attribute to mark every node
	* @param {String} [controlAttribute] - html Attribute to control
	* @return {Undo} undo command
	*/
	var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
		var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
		var markerCounter = markerMap[markerName];
		var hiddenNodes = [];
		var elementsToKeep = /* @__PURE__ */ new Set();
		var elementsToStop = new Set(targets);
		var keep = function(el) {
			if (!el || elementsToKeep.has(el)) return;
			elementsToKeep.add(el);
			keep(el.parentNode);
		};
		targets.forEach(keep);
		var deep = function(parent) {
			if (!parent || elementsToStop.has(parent)) return;
			Array.prototype.forEach.call(parent.children, function(node) {
				if (elementsToKeep.has(node)) deep(node);
				else try {
					var attr = node.getAttribute(controlAttribute);
					var alreadyHidden = attr !== null && attr !== "false";
					var counterValue = (counterMap.get(node) || 0) + 1;
					var markerValue = (markerCounter.get(node) || 0) + 1;
					counterMap.set(node, counterValue);
					markerCounter.set(node, markerValue);
					hiddenNodes.push(node);
					if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
					if (markerValue === 1) node.setAttribute(markerName, "true");
					if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
				} catch (e) {
					console.error("aria-hidden: cannot operate on ", node, e);
				}
			});
		};
		deep(parentNode);
		elementsToKeep.clear();
		lockCount++;
		return function() {
			hiddenNodes.forEach(function(node) {
				var counterValue = counterMap.get(node) - 1;
				var markerValue = markerCounter.get(node) - 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				if (!counterValue) {
					if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
					uncontrolledNodes.delete(node);
				}
				if (!markerValue) node.removeAttribute(markerName);
			});
			lockCount--;
			if (!lockCount) {
				counterMap = /* @__PURE__ */ new WeakMap();
				counterMap = /* @__PURE__ */ new WeakMap();
				uncontrolledNodes = /* @__PURE__ */ new WeakMap();
				markerMap = {};
			}
		};
	};
	/**
	* Marks everything except given node(or nodes) as aria-hidden
	* @param {Element | Element[]} originalTarget - elements to keep on the page
	* @param [parentNode] - top element, defaults to document.body
	* @param {String} [markerName] - a special attribute to mark every node
	* @return {Undo} undo command
	*/
	var hideOthers = function(originalTarget, parentNode, markerName) {
		if (markerName === void 0) markerName = "data-aria-hidden";
		var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		var activeParentNode = parentNode || getDefaultParent(originalTarget);
		if (!activeParentNode) return function() {
			return null;
		};
		targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
		return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
	};
	exports.hideOthers = hideOthers;
	/**
	* Marks everything except given node(or nodes) as inert
	* @param {Element | Element[]} originalTarget - elements to keep on the page
	* @param [parentNode] - top element, defaults to document.body
	* @param {String} [markerName] - a special attribute to mark every node
	* @return {Undo} undo command
	*/
	var inertOthers = function(originalTarget, parentNode, markerName) {
		if (markerName === void 0) markerName = "data-inert-ed";
		var activeParentNode = parentNode || getDefaultParent(originalTarget);
		if (!activeParentNode) return function() {
			return null;
		};
		return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
	};
	exports.inertOthers = inertOthers;
	/**
	* @returns if current browser supports inert
	*/
	var supportsInert = function() {
		return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
	};
	exports.supportsInert = supportsInert;
	/**
	* Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
	* @param {Element | Element[]} originalTarget - elements to keep on the page
	* @param [parentNode] - top element, defaults to document.body
	* @param {String} [markerName] - a special attribute to mark every node
	* @return {Undo} undo command
	*/
	var suppressOthers = function(originalTarget, parentNode, markerName) {
		if (markerName === void 0) markerName = "data-suppressed";
		return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
	};
	exports.suppressOthers = suppressOthers;
}));
//#endregion
//#region node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_es5 = require_es5$1();
var import_es5$1 = require_es5();
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = react.useRef(null);
	const contentRef = react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = react.useState(0);
	const [descriptionCount, setDescriptionCount] = react.useState(0);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal = /* @__PURE__ */ __name((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: react.Children.map(children, (child) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(import_es5.RemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME = "DialogContent";
var DialogContent = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = react.useRef(null);
	const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
	react.useEffect(() => {
		const content = contentRef.current;
		if (content) return (0, import_es5$1.hideOthers)(content);
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = react.useRef(false);
	const hasPointerDownOutsideRef = react.useRef(false);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ react.forwardRef(/* @__PURE__ */ __name(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState(open) {
	return open ? "open" : "closed";
}
__name(getState, "getState");
//#endregion
//#region src/client/common/Modal.tsx
/**
* Modal —— 基于 @radix-ui/react-dialog 的统一弹窗原语（Workbench Design System）。
*
* 取代项目里散落的两套弹窗实现：
*   1. ConfirmDialog（手写 focus trap / Esc / 焦点还原）；
*   2. 各页内联 dialogMask+dialogCard（无 focus trap、Esc 行为不一致）。
* 统一后获得 Radix 成熟的无障碍能力：
*   - 自动 focus trap（Tab 循环限制在弹窗内，disabled/隐藏元素跳过）；
*   - Esc 关闭（可禁用）、遮罩点击关闭（可禁用）、初始焦点与关闭后焦点还原；
*   - aria-modal / role=dialog、body 滚动锁定、Portal 渲染到 document.body（脱离宿主
*     settings 弹窗的层叠上下文，z-index 由 Radix 内容层统一管理）。
*
* 视觉沿用既有 --dsw-* token 类（dialogMask/dialogCard/dialogHeader/dialogBody/...），
* 不引入第二套视觉体系；仅把「行为/a11y」交给 Radix，外观仍由 config-manager.module.css 控制。
*
* 用法：
*   <Modal open={open} onClose={close} title="标题" wide>
*     <Modal.Header onClose={close} />   // 可选：带关闭按钮的标题行
*     <Modal.Body scroll>…内容…</Modal.Body>
*     <Modal.Footer>…按钮…</Modal.Footer>
*   </Modal>
*/
/**
* 插件根节点 id（渲染在 `ConfigManagerSection` 的最外层 div 上），同时是 Radix Portal 的挂载容器。
*
* 为什么不能挂 `document.body`（Radix 默认）：宿主设置弹窗的 overlay 是
* `position: fixed; z-index: 1000`，插件弹窗若挂到 body 就成了它的**兄弟**，
* 自身 z-index 100/101 远低于 1000 → 弹窗被整个盖住、肉眼完全不可见；
* 而 Radix 在 modal 打开时已经把 `document.body` 置为 `pointer-events: none`，
* 于是表现为「打开备份与迁移后整页点不动，必须先在屏幕上点一下才行」——
* 那一下点击正是关掉这个"透明弹窗"的 outside-pointerdown。
*
* 把 Portal 容器指回插件根节点，弹窗就重新落在宿主弹窗自己的层叠上下文内
* （与 Radix 迁移前内联渲染 `dialogMask` 的层级语义一致），遮罩与卡片正常可见可点。
*/
const MODAL_ROOT_ID = "dsh-config-manager-root";
/**
* 统一弹窗容器（Radix Dialog）。busy 时禁用 Esc 与遮罩关闭。
*/
function Modal({ open, onClose, title, wide, busy, onOpenAutoFocus, cardStyle, children }) {
	const [container, setContainer] = (0, react.useState)(null);
	(0, react.useEffect)(() => {
		setContainer(document.getElementById(MODAL_ROOT_ID));
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next && busy === true) return;
			if (!next) onClose();
		},
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DialogPortal, {
			container: container ?? void 0,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogOverlay, { className: config_manager_module_css_default.dialogMask }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogContent, {
				className: `${config_manager_module_css_default.dialogContentCenter} ${config_manager_module_css_default.dialogCard}${wide === true ? ` ${config_manager_module_css_default.dialogWide}` : ""}`,
				style: cardStyle,
				"aria-label": title,
				onOpenAutoFocus,
				onEscapeKeyDown: (e) => {
					if (busy === true) e.preventDefault();
				},
				onPointerDownOutside: (e) => {
					if (busy === true) e.preventDefault();
				},
				onInteractOutside: (e) => {
					if (busy === true) e.preventDefault();
				},
				children
			})]
		})
	});
}
/** 弹窗标题行（可选关闭按钮 + 右侧 trailing）。 */
function ModalHeader({ title, onClose, closeDisabled, trailing }) {
	if (onClose === void 0 && trailing === void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.dialogHeader,
		children: title
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.dialogHeaderRow,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.dialogHeader,
				children: title
			}),
			trailing,
			onClose !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DialogClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${config_manager_module_css_default.iconBtn} ${config_manager_module_css_default.dialogClose}`,
					"aria-label": "关闭",
					disabled: closeDisabled === true,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CloseIcon, { size: 14 })
				})
			})
		]
	});
}
/** 弹窗正文区。 */
function ModalBody({ children, scroll, innerRef, onScroll, style }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		ref: innerRef,
		className: scroll === true ? `${config_manager_module_css_default.dialogBody} ${config_manager_module_css_default.dialogBodyScroll}` : config_manager_module_css_default.dialogBody,
		onScroll,
		style,
		children
	});
}
/** 弹窗底部按钮区（actionRow 右对齐）。 */
function ModalFooter({ children }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: `${config_manager_module_css_default.actionRow} ${config_manager_module_css_default.dialogFooter}`,
		children
	});
}
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
//#endregion
//#region src/client/common/ErrorBanner.tsx
/**
* 可操作错误展示（规范 §23，绑 src/ui/errors.ts）。
*
* 安全约束：**强制 redact 不泄 Secret** —— 展示前对错误消息、关联项文本
* 统一过 `redact()`（字段名黑名单 + sk-/JWT/PEM/Bearer 等值形状模式），
* 渲染结果只含 Reason / Suggested action / Item，绝不出现密钥原文。
*/
/**
* 错误横幅：toActionableError 解析为标题 + 原因 + 建议动作，
* 文本在渲染前再经 redact() 兜底（双保险），Reason 以等宽块展示。
* 重试按钮：进行中（retrying）时显示 Spinner 并禁用（防重复点击）。
*/
function ErrorBanner({ error, onRetry, retrying, t = zhUiT }) {
	const [actionable] = (0, react.useState)(() => toActionableError(error));
	const reason = redact(actionable.reason);
	const item = actionable.item !== void 0 ? redact(actionable.item) : void 0;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.errorBanner,
		role: "alert",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.errorTitle,
				children: redact(actionable.title)
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
				className: config_manager_module_css_default.errorReason,
				children: reason
			}),
			actionable.suggestedAction !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.errorAction,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.errorActionLabel,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ArrowRightIcon, { size: 13 })
					}),
					" ",
					redact(actionable.suggestedAction)
				]
			}),
			item !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.errorItem,
				children: item
			}),
			actionable.retryable && onRetry !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.errorFooter,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: onRetry,
					disabled: retrying === true,
					loading: retrying === true,
					children: retrying === true ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : t("commonRetry")
				})
			})
		]
	});
}
/** 多行错误文本展示（Wizard.errors 数组用；同样强制 redact） */
function ErrorList({ errors }) {
	if (errors.length === 0) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.errorList,
		children: errors.map((line, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
			className: config_manager_module_css_default.errorLine,
			children: redact(line)
		}, i))
	});
}
//#endregion
//#region src/client/common/progress-view.ts
/**
* m3: 进度展示的纯逻辑层（框架无关，node 可测）。
*
* 背景：m1 的 RunState 携带真实进度（section/sectionTotal = 当前分区 3/12、
* item/itemTotal = 内部计数如插件 6/18、detail = 当前项名）；m2 的 store 把
* RunState 映射为 ProgressEvent 并存入 progress 字段。本模块定义客户端的
* RunProgress（ProgressEvent 超集，额外携带分区/内部计数，JSON 可序列化），
* 并提供 computeProgressView() 把进度事件转成渲染模型 —— ProgressBar 只做
* 纯渲染，所有判定逻辑集中在此、可单测。
*
* 兼容路径：无 section/item 的普通 ProgressEvent（控制器 onProgress 发出）
* 走原逻辑 —— 阶段文案 + step/total 百分比，无徽章。
*/
/**
* 把进度事件换算成渲染模型。
* - percent：优先 ProgressEvent.step/total（控制器阶段进度 / 轮询的内部计数）；
* - sectionBadge（当前分区，如 settings · 3/12）：label=分区 id、current=item
*   （1-based 分区序号，见 core exporter onSection）、total=sectionTotal；
* - countBadge（内部计数，如 plugins · 6/18）：label=分区 id、current=item、
*   total=itemTotal；导出时 itemTotal 与 sectionTotal 同值（分区序号即内部计数）
*   → 置 null，避免「3/12 3/12」重复；
* - detail（当前项名）：非空且不等于分区 id（导出时 detail 恒为分区 id，去冗余）。
*/
function computeProgressView(event, t = zhUiT) {
	if (event === null) return {
		label: "",
		percent: null,
		sectionBadge: null,
		countBadge: null,
		detail: null
	};
	const section = event.section ?? null;
	const sectionTotal = event.sectionTotal ?? null;
	const item = event.item ?? null;
	const itemTotal = event.itemTotal ?? null;
	const percent = event.step !== void 0 && event.total !== void 0 && event.total > 0 ? Math.round(event.step / event.total * 100) : item !== null && itemTotal !== null && itemTotal > 0 ? Math.round(item / itemTotal * 100) : null;
	const sectionBadge = section !== null && item !== null && sectionTotal !== null && sectionTotal > 0 ? {
		label: section,
		current: item,
		total: sectionTotal
	} : null;
	let countBadge = section !== null && item !== null && itemTotal !== null && itemTotal > 0 ? {
		label: section,
		current: item,
		total: itemTotal
	} : null;
	if (countBadge !== null && sectionBadge !== null && itemTotal === sectionTotal) countBadge = null;
	const detail = typeof event.detail === "string" && event.detail !== "" && event.detail !== section ? event.detail : null;
	return {
		label: stageText(event.stage, t),
		percent,
		sectionBadge,
		countBadge,
		detail
	};
}
//#endregion
//#region src/client/common/ProgressBar.tsx
/**
* 进度条（规范 §29 + m3 真实进度）。
*
* 数据流：
*  - 控制器（ExportFlow / ImportWizard）onProgress 发出普通 ProgressEvent
*    （阶段文案 + step/total），走兼容路径；
*  - m3：store 经 /runs + /progress 轮询得到的 RunState 映射为 RunProgress
*    （额外携带 section/sectionTotal/item/itemTotal/detail），渲染为
*    「分区徽章（settings · 3/12）+ 内部计数徽章（plugins · 6/18）+ 当前项名」。
*
* 所有换算逻辑在 progress-view.ts 的 computeProgressView()（纯函数，可单测）；
* 本组件只做渲染。未知阶段回退显示 id 本身。
*/
/**
* 进度条：阶段文字 + 分区/内部计数徽章 + 当前项名 + 百分比。
*/
function ProgressBar({ event, active }) {
	const view = computeProgressView(event);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.progressBlock,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.progressMeta,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.progressLabel,
					children: view.label
				}),
				view.sectionBadge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: `${config_manager_module_css_default.progressBadge} ${config_manager_module_css_default.progressBadgeSection}`,
					children: [
						view.sectionBadge.label,
						" · ",
						view.sectionBadge.current,
						"/",
						view.sectionBadge.total
					]
				}),
				view.countBadge !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: `${config_manager_module_css_default.progressBadge} ${config_manager_module_css_default.progressBadgeCount}`,
					children: [
						view.countBadge.label !== "" ? `${view.countBadge.label} · ` : "",
						view.countBadge.current,
						"/",
						view.countBadge.total
					]
				}),
				view.detail !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.progressDetail,
					children: view.detail
				}),
				view.percent !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: config_manager_module_css_default.progressPercent,
					children: [view.percent, "%"]
				})
			]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.progressTrack,
			children: view.percent !== null ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `${config_manager_module_css_default.progressBar} ${active ? "" : config_manager_module_css_default.progressBarDone}`,
				style: { width: `${view.percent}%` }
			}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { className: `${config_manager_module_css_default.progressBar} ${config_manager_module_css_default.progressIndeterminate}` })
		})]
	});
}
//#endregion
//#region src/client/common/ReportView.tsx
/** 导入分区的统计徽章（由 report.importSectionStats 计算） */
function SectionStatBadges({ result }) {
	const stats = importSectionStats(result.executed);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.statRow,
		children: stats.map((s) => {
			let kind = "ok";
			if (s.failed > 0) kind = "error";
			else if (s.skipped > 0) kind = "warn";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
				kind,
				children: [
					s.section,
					": ",
					s.ok,
					"✓",
					s.skipped > 0 ? ` ${s.skipped}≈` : "",
					s.failed > 0 ? ` ${s.failed}✗` : ""
				]
			}, s.section);
		})
	});
}
/** 导出报告的安全摘要（Included / Excluded / Security 徽章） */
function ExportSummary({ report }) {
	const included = report.included.length;
	const excluded = report.excluded.length;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.statRow,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
				kind: "ok",
				children: [included, " included"]
			}),
			excluded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
				kind: "warn",
				children: [excluded, " excluded"]
			}),
			report.security.containsSecrets && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
				kind: "warn",
				children: "encrypted"
			}),
			!report.security.containsSecrets && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
				kind: "ok",
				children: "no secrets"
			}),
			report.security.redactedHits > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
				kind: "error",
				children: [report.security.redactedHits, " redacted"]
			})
		]
	});
}
/**
* 结果报告视图。
* 文本详情 = report.ts 渲染器的输出（已脱敏），展示前再过 redact() 双保险；
* 以 <pre> 等宽块呈现保持对齐。
*/
function ReportView({ kind, exportReport, importResult, onAction, onDownload, downloadBusy = false, t = zhUiT }) {
	const actions = kind === "import" && importResult !== void 0 ? suggestedActions(importResult) : [];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.reportView,
		children: [kind === "export" && exportReport !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExportSummary, { report: exportReport }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
				className: config_manager_module_css_default.reportText,
				children: redact(renderExportReport(exportReport))
			}),
			onDownload !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.reportFooter,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: onDownload,
					loading: downloadBusy,
					children: downloadBusy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : t("export.download")
				})
			})
		] }), kind === "import" && importResult !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionStatBadges, { result: importResult }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
				className: config_manager_module_css_default.reportText,
				children: redact(renderImportReport(importResult))
			}),
			importResult.rollback !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.rollbackBox,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "Rollback" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
					className: config_manager_module_css_default.reportText,
					children: redact(renderRollbackReport(importResult.rollback))
				})]
			}),
			actions.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.reportFooter,
				children: actions.map((a) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: a === "done" ? "primary" : "ghost",
					onClick: () => onAction?.(a),
					children: a
				}, a))
			})
		] })]
	});
}
//#endregion
//#region src/client/export/ExportView.tsx
/**
* 导出页（Export —— Workbench Rebuild 2026-09，绑 src/ui/export-flow.ts 的 ExportFlow 控制器）。
*
* 布局（564px 画布，致密单列）：
*   1. 工具栏：模式分段（快速 / 自定义）+ 模式提示 + 预览 ghost + 立即导出 primary
*   2. 自定义模式：分组分区目录（两列致密勾选；分区说明入 tooltip；设备相关/敏感徽章内联）
*   3. 选项行：加密备份 / 导出密钥 复选 +（加密时）密码双列内联
*   4. 命名行：自定义文件名 + 备注 双列
*   5. 进度条 / 诚实报告 + 自动下载提示
*   6. 预览弹窗（Modal wide）：合计一行 + 分区构成网格（与总览页共用 SectionComposition）
*
* 业务能力（全部保留，与旧版一致）：
* - Quick：一键导出推荐分区（ExportFlow.quickSelection()）；
* - Custom：按分组逐项勾选（设备相关 / 敏感分区以内联徽章标注）；
* - 安全选项：加密备份（AES-256-GCM）与导出密钥两个独立选项；勾选导出密钥自动联动
*   勾选加密（密钥绝不明文），取消加密一并取消导出密钥（includeSecrets ⇒ encrypt）；
* - 自定义文件名（失焦自动补全 .zip；合法性校验与宿主一致）+ 备注；
* - 导出前只读预览（export-preview 端点，零写入；结果在弹窗内呈现）；
* - 密码仅内存（api.exportPassword 随请求体传输，绝不落盘/入 sessionStorage）；
* - 导出完成自动下载到浏览器「下载」目录（可再手动下载）。
*
* m2：全部 UI 状态由模块级 runStore 持有（切页/关面板不重建、刷新恢复），
* 控制器实例（ExportFlow）由 store 缓存复用。
*/
/**
* 导出页：Quick/Custom 切换 → 勾选/密码 → 执行 → 进度 → 报告 → 自动下载。
*/
function ExportView({ api, t }) {
	const exp = (0, react.useSyncExternalStore)(runStore.subscribe, runStore.getSnapshot).export;
	const flow = runStore.exportFlow(api);
	const mode = exp.mode;
	const selection = exp.selection;
	const includeSecrets = exp.includeSecrets;
	const encrypt = exp.encrypt;
	/** P0-④：自定义导出文件名（.zip；空 = 宿主自动命名；仅表单非敏感字段） */
	const fileName = exp.fileName;
	/** P0-④：导出备注（写入备份列表显示；非敏感） */
	const note = exp.note;
	const password = exp.password;
	const passwordConfirm = exp.passwordConfirm;
	const running = exp.running;
	const progress = exp.progress;
	const result = exp.result;
	const error = exp.error;
	/** 下载进行中（瞬态 UI） */
	const [downloading, setDownloading] = (0, react.useState)(false);
	/** 下载防重入 ref */
	const downloadingRef = (0, react.useRef)(false);
	/** P2-⑫：导出前预览（null = 未请求；进行中/结果/错误） */
	const [preview, setPreview] = (0, react.useState)(null);
	/** 需求 6：预览结果弹窗开关（点击「预览将导出内容」即打开，结果/错误/loading 均在弹窗内呈现） */
	const [previewOpen, setPreviewOpen] = (0, react.useState)(false);
	/** P2-⑫：请求导出前预览（不落盘；按当前模式的分区选择） */
	const runPreview = async () => {
		if (running) return;
		setPreview({
			loading: true,
			result: null,
			error: null
		});
		setPreviewOpen(true);
		try {
			const only = mode === "quick" ? flow.quickSelection() : [...selection];
			const result = await api.exportPreview(only);
			setPreview({
				loading: false,
				result,
				error: null
			});
		} catch (err) {
			setPreview({
				loading: false,
				result: null,
				error: err instanceof Error ? err.message : String(err)
			});
		}
	};
	const setMode = (next) => {
		runStore.patch({ export: { mode: next } });
	};
	const setIncludeSecrets = (next) => {
		runStore.patch({ export: {
			includeSecrets: next,
			encrypt: next ? true : exp.encrypt
		} });
	};
	const setEncrypt = (next) => {
		runStore.patch({ export: {
			encrypt: next,
			includeSecrets: next ? includeSecrets : false
		} });
	};
	const setPassword = (value) => {
		runStore.patch({ export: { password: value } });
	};
	const setPasswordConfirm = (value) => {
		runStore.patch({ export: { passwordConfirm: value } });
	};
	const setFileName = (value) => {
		runStore.patch({ export: { fileName: value } });
	};
	const setNote = (value) => {
		runStore.patch({ export: { note: value } });
	};
	const toggleSection = (0, react.useCallback)((id, checked) => {
		const has = selection.includes(id);
		if (checked && !has) runStore.patch({ export: { selection: [...selection, id] } });
		if (!checked && has) runStore.patch({ export: { selection: selection.filter((s) => s !== id) } });
	}, [selection]);
	const passwordInvalid = encrypt && (password === "" || password !== passwordConfirm);
	/** 自定义文件名合法性（P0-④）：留空合法（自动命名）；非空必须合法文件名。
	*  提交时经 normalizeExportFileName 自动补全 .zip（host 端 isValidExportFileName 仍兜底）。 */
	const trimmedName = fileName.trim();
	const baseName = trimmedName.replace(/\.zip$/i, "");
	const fileNameInvalid = trimmedName !== "" && !/^[A-Za-z0-9][A-Za-z0-9._ -]{0,127}$/.test(baseName);
	/** 执行导出（Quick 或 Custom）；成功后自动下载到浏览器「下载」目录 */
	const runExport = async () => {
		if (passwordInvalid || fileNameInvalid) return;
		runStore.patch({ export: {
			running: true,
			error: null,
			result: null,
			downloaded: false,
			progress: null,
			runId: null
		} });
		runStore.watchRunning("export", 500);
		try {
			api.exportPassword = encrypt ? password : null;
			const run = await flow.run(mode, selection, {
				includeSecrets: includeSecrets && encrypt,
				fileName: normalizeExportFileName(fileName),
				note: note.trim()
			});
			const runId = run.runId;
			runStore.patch({ export: {
				result: run,
				runId: typeof runId === "string" ? runId : null,
				progress: {
					stage: "done",
					step: 1,
					total: 1
				}
			} });
			await download(run.zipPath);
			toast.ok(t("export.saved", { name: run.report.file.name }));
		} catch (err) {
			runStore.patch({ export: { error: err instanceof Error ? err.message : String(err) } });
		} finally {
			runStore.stopRunWatch("export");
			runStore.patch({ export: { running: false } });
		}
	};
	/** 把导出的 ZIP 下载到浏览器（默认静默下载；防重入锁共享）。 */
	const download = async (zipPath) => {
		if (zipPath === "" || downloadingRef.current) return;
		downloadingRef.current = true;
		setDownloading(true);
		try {
			runStore.patch({ export: { error: null } });
			await api.download(zipPath);
			runStore.patch({ export: { downloaded: true } });
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			runStore.patch({ export: { error: message } });
			toast.error(message);
		} finally {
			downloadingRef.current = false;
			setDownloading(false);
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
						items: [{
							id: "quick",
							label: t("export.mode.quick")
						}, {
							id: "custom",
							label: t("export.mode.custom")
						}],
						active: mode,
						onChange: (id) => {
							setMode(id);
						},
						ariaLabel: t("view.export")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: running,
						title: t("export.preview"),
						onClick: () => {
							runPreview();
						},
						children: [
							preview?.loading === true ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PreviewIcon, { size: 13 }),
							" ",
							t("export.preview")
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: running || passwordInvalid || fileNameInvalid,
						onClick: () => {
							runExport();
						},
						children: running ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : t("export.run")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.modeHint,
				children: mode === "quick" ? t("export.mode.quickHint") : t("export.mode.customHint")
			}),
			mode === "custom" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.exportGrid,
				children: EXPORT_GROUPS.map((group) => {
					const categories = flow.categories.filter((c) => c.group === group.id);
					if (categories.length === 0) return null;
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.exportGroup,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.groupHeader,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupLabel,
								children: group.label
							}), group.note !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupNote,
								children: group.note
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.exportItems,
							children: categories.map((cat) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.exportItem,
								title: cat.description,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
									checked: selection.includes(cat.id),
									onChange: (checked) => {
										toggleSection(cat.id, checked);
									},
									label: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.categoryItem,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: config_manager_module_css_default.categoryName,
												children: cat.label
											}),
											cat.portability !== "portable" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: cat.portability === "deviceSpecific" ? "warn" : "info",
												children: cat.portability
											}),
											cat.sensitive === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "warn",
												children: "secret"
											})
										]
									})
								})
							}, cat.id))
						})]
					}, group.id);
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.optionsRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
						checked: encrypt,
						onChange: setEncrypt,
						label: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.categoryName,
							children: t("export.encrypt")
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
						checked: includeSecrets,
						onChange: setIncludeSecrets,
						label: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.categoryName,
							children: t("export.includeSecrets")
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer })
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginBottom: 10 },
				children: encrypt ? t("export.encryptHint") : t("export.includeSecretsHint")
			}),
			encrypt && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.secretFields,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					style: { marginBottom: 0 },
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.fieldLabel,
							children: t("export.password")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "password",
							className: config_manager_module_css_default.input,
							value: password,
							onChange: (e) => {
								setPassword(e.target.value);
							},
							autoComplete: "new-password"
						}),
						password === "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.formError,
							children: t("export.passwordRequired")
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					style: { marginBottom: 0 },
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.fieldLabel,
							children: t("export.passwordConfirm")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "password",
							className: config_manager_module_css_default.input,
							value: passwordConfirm,
							onChange: (e) => {
								setPasswordConfirm(e.target.value);
							},
							autoComplete: "new-password"
						}),
						password !== "" && password !== passwordConfirm && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.formError,
							children: t("export.passwordMismatch")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.secretFields,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					style: { marginBottom: 0 },
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.fieldLabel,
							children: t("export.fileName")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "text",
							className: config_manager_module_css_default.input,
							value: fileName,
							placeholder: "dsh-config-2026-08-24",
							onChange: (e) => {
								setFileName(e.target.value);
							},
							onBlur: () => {
								if (fileName.trim() !== "") setFileName(normalizeExportFileName(fileName));
							}
						}),
						fileNameInvalid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.formError,
							children: t("export.fileNameInvalid")
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					style: { marginBottom: 0 },
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.fieldLabel,
						children: t("export.note")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "text",
						className: config_manager_module_css_default.input,
						value: note,
						placeholder: t("export.notePlaceholder"),
						onChange: (e) => {
							setNote(e.target.value);
						}
					})]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: previewOpen,
				onClose: () => {
					setPreviewOpen(false);
				},
				title: t("export.preview"),
				wide: true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
					title: t("export.preview"),
					onClose: () => {
						setPreviewOpen(false);
					}
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
					scroll: true,
					children: [
						preview?.loading === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("export.previewing") }),
						preview !== null && preview.error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "error",
							children: preview.error
						}),
						preview !== null && !preview.loading && preview.result !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.hint,
							children: [t("export.previewSummary", {
								sections: String(preview.result.totalSections),
								size: formatBytes$1(preview.result.totalSizeBytes)
							}), preview.result.sectionsFailed > 0 && ` · ${t("export.previewSkipped", { count: String(preview.result.sectionsFailed) })}`]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionComposition, {
							sections: preview.result.sections,
							t
						})] })
					]
				})]
			}),
			running && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressBar, {
				event: progress,
				active: true
			}),
			error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
				error,
				onRetry: () => {
					runExport();
				},
				retrying: running,
				t: api.t
			}),
			result !== null && !running && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReportView, {
				kind: "export",
				exportReport: result.report,
				onDownload: () => {
					download(result.zipPath);
				},
				downloadBusy: downloading,
				t: api.t
			}) })
		]
	});
}
//#endregion
//#region src/ui/flow.ts
/**
* 计算下一阶段：在 `list`（适用阶段的有序列表）中取 `from` 的下一项。
* - `from` 不在列表中（如来自 preview 页）→ 取第一项；
* - `from` 已是最后一项（confirm）→ 原地返回；
* - 绝不回退：已完成阶段不会因仍适用而被再次命中。
*/
function nextFlowPhase(list, from) {
	if (list.length === 0) return "confirm";
	const idx = list.indexOf(from);
	return list[Math.min(idx + 1, list.length - 1)] ?? "confirm";
}
//#endregion
//#region src/ui/import-stepper.ts
/** 阶段有序表（顺序即向导前进方向）。 */
const IMPORT_STAGES = [
	"select",
	"analyze",
	"decide",
	"confirm",
	"execute",
	"done"
];
/** 向导步骤/流程阶段 → 用户视角阶段。 */
function stageOf(step) {
	switch (step) {
		case "select":
		case "decrypt-archive": return "select";
		case "analyzing":
		case "compatibility": return "analyze";
		case "preview":
		case "conflicts":
		case "path-mapping":
		case "secrets": return "decide";
		case "confirm": return "confirm";
		case "importing": return "execute";
		case "result": return "done";
		default: return "select";
	}
}
/** 构建步骤条模型（线性向导：index 之前 done，当前 current，之后 todo）。 */
function importStepperModel(step) {
	const current = stageOf(step);
	const index = IMPORT_STAGES.indexOf(current);
	return {
		index,
		steps: IMPORT_STAGES.map((key, i) => ({
			key,
			labelKey: `import.stage.${key}`,
			state: i < index ? "done" : i === index ? "current" : "todo"
		}))
	};
}
//#endregion
//#region src/ui/next-steps.ts
/** 与 analyzer.createImportPlan 的 needsRestart 判定同一事实源（避免两处规则漂移）。
*  plan.needsRestart 由「存在 Install 项 或 mcp 非 skip/warning 变更」推出；这里
*  把实际需要重启的**项**列出来，供 UI 逐项展示（而不只是布尔）。 */
function restartRequiredItems(plan) {
	return plan.items.filter((i) => i.kind === "Install" || i.adapter === "mcp" && i.kind !== "Skip" && i.kind !== "Warning").map((i) => ({
		id: i.id,
		adapter: i.adapter,
		description: i.description
	}));
}
/** 失败 / 用户跳过的项（结果页「重试失败/跳过的子集」的对象；引擎跳过 Skip 不算）。
*  skippedByUser=true 或 status='failed' 才进 unresolved —— 与 ImportWizard.retryableCount
*  的语义一致（failed || skippedByUser），避免 UI 与控制器口径漂移。 */
function unresolvedItems(result) {
	return result.executed.filter((e) => e.status === "failed" || e.skippedByUser === true).map((e) => ({
		id: e.itemId,
		status: e.status === "failed" ? "failed" : "skipped",
		message: e.message
	}));
}
/** 聚合收尾清单：plan（待重启项）+ result（补录凭据 / 失败跳过项）。 */
function importNextSteps(plan, result) {
	const restartItems = restartRequiredItems(plan);
	const missingSecrets = [...result.missingSecrets];
	const unresolved = unresolvedItems(result);
	return {
		restartItems,
		missingSecrets,
		unresolved,
		hasNextSteps: restartItems.length > 0 || missingSecrets.length > 0 || unresolved.length > 0
	};
}
//#endregion
//#region src/client/import/ConflictList.tsx
/**
* 冲突决策列表（规范 §11，绑 src/ui/conflict-view.ts 的 ConflictCollector）。
*
* Workbench Rebuild（2026-09）：
* - 每个冲突渲染为「选边卡片」：保留当前 / 使用备份 两个并排可点选块，
*   选中侧高亮描边 + 淡底（radio 语义保留：label 包裹原生 input，键盘可操作）；
* - 适配器标签（kindTag）+ 描述（路径等宽字体）组成卡片头；
* - 配置更改明细（detail）不再用 <pre>（white-space:pre 不换行 → 长 JSON 横向溢出），
*   改为切分后 prefix / current / imported 各自成行、长值自动换行（见 splitConflictDetail）；
* - 批量决策按钮置于列表顶部工具行。
*
* 注意：不提供 "Review（稍后决定）" 选项——Review 会被收集器计为
* unresolved，导致「下一步」永远禁用（死路）。要么决策，要么不进入本步。
* 安全：冲突项不携带当前配置值（当前值可能含秘密，不回显），故不做值级 diff。
*/
const RESOLUTION_OPTIONS = [{
	value: "keepCurrent",
	key: "import.conflicts.keepCurrent"
}, {
	value: "useImported",
	key: "import.conflicts.useImported"
}];
/** 明细里的固定英文标识（host 适配器拼装，不是用户可见文案，故不走 i18n 字典） */
const CURRENT_MARK = "current=";
const IMPORTED_MARK = " imported=";
/**
* 把 host 下发的冲突明细切成「前缀 / current / imported」三段（纯展示切分）。
*
* detail 形如：
*   `current={"a":"b"} imported={"c":"d"}`（settings/providers/mcp/workspaces 适配器）
*   `行 12 current=… imported=…`（prompts 适配器，带行号前缀）
* 也可能完全不含 `current=`（如 plugins 的本地化文案「当前 1.1 vs 导入 1.6」）。
*
* 刻意不放进 src/ui/conflict-view.ts：这不是业务判定，只是渲染前把一行文本拆成
* 三段、以便各自换行（原来用 <pre> 时 white-space:pre 不换行 → 横向滚动条），
* 属纯展示层关切，跨端（node）复用无意义。
*
* 兜底：任何输入都不丢内容 —— 找不到 `current=` 时整段作为 current。
*/
function splitConflictDetail(detail) {
	const at = detail.indexOf(CURRENT_MARK);
	if (at < 0) return {
		prefix: null,
		current: detail,
		imported: null
	};
	const head = detail.slice(0, at).trim();
	const prefix = head === "" ? null : head;
	const rest = detail.slice(at + 8);
	const sep = rest.indexOf(IMPORTED_MARK);
	if (sep < 0) return {
		prefix,
		current: rest,
		imported: null
	};
	return {
		prefix,
		current: rest.slice(0, sep),
		imported: rest.slice(sep + 10)
	};
}
/** 批量决策全部冲突项（keepCurrent / useImported；下沉到 ConflictCollector.resolveAll 纯函数，
*  组件只做装配 + tick/onChanged 通知；与逐项逻辑一致地更新 UI） */
function resolveAll(collector, resolution, setTick, onChanged) {
	collector.resolveAll(resolution);
	setTick((v) => v + 1);
	onChanged();
}
/** 冲突项决策列表（选边卡片） */
function ConflictList({ collector, t, onChanged }) {
	const [tick, setTick] = (0, react.useState)(0);
	const items = collector.viewItems();
	const unresolved = collector.unresolved().length;
	const hasConflicts = items.length > 0;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.conflictList,
		children: [
			unresolved > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "warn",
				children: t("import.conflicts.unresolved", { count: String(unresolved) })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: config_manager_module_css_default.ghostButton,
					"data-size": "sm",
					disabled: !hasConflicts,
					onClick: () => {
						resolveAll(collector, "keepCurrent", setTick, onChanged);
					},
					children: t("import.conflicts.keepCurrentAll")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
					type: "button",
					className: config_manager_module_css_default.ghostButton,
					"data-size": "sm",
					disabled: !hasConflicts,
					onClick: () => {
						resolveAll(collector, "useImported", setTick, onChanged);
					},
					children: t("import.conflicts.useImportedAll")
				})]
			}),
			items.map((view) => {
				const item = view.item;
				const detail = item.detail !== void 0 && item.detail !== "" ? splitConflictDetail(item.detail) : null;
				return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.conflictItem,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.conflictHead,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.kindTag,
									children: item.adapter
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.conflictId} ${config_manager_module_css_default.mono}`,
									title: item.description,
									children: item.description
								}),
								item.severity === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.severityError,
									children: "error"
								})
							]
						}),
						detail !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.conflictDetail,
							children: [
								detail.prefix !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: config_manager_module_css_default.conflictPrefix,
									children: detail.prefix
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: config_manager_module_css_default.conflictLine,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.conflictLineLabel,
										children: "current"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.conflictLineValue,
										children: detail.current
									})]
								}),
								detail.imported !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: config_manager_module_css_default.conflictLine,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.conflictLineLabel,
										children: "imported"
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.conflictLineValue,
										children: detail.imported
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.conflictChoices,
							role: "radiogroup",
							"aria-label": item.description,
							children: RESOLUTION_OPTIONS.map((opt) => {
								const selected = view.resolution === opt.value;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: config_manager_module_css_default.choiceCard,
									"data-selected": selected ? "" : void 0,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "radio",
										name: `conflict-${item.id}`,
										checked: selected,
										onChange: () => {
											collector.resolve(item.id, opt.value);
											setTick((v) => v + 1);
											onChanged();
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.choiceTitle,
										children: t(opt.key)
									})]
								}, opt.value);
							})
						})
					]
				}, item.id);
			}),
			items.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.empty,
				children: "No conflicts"
			}),
			void 0
		]
	});
}
//#endregion
//#region src/client/import/PathMappingForm.tsx
/**
* 路径映射表单（规范 §12，绑 src/ui/types.ts 的 PathMappingDraft 形状）。
*
* 注意：src/ui/path-mapping.ts 的 PathMappingEditor 依赖 utils/paths.ts 的
* applyPrefixMappings（node:path）——浏览器 bundle 不可用，故此处做轻量等价实现：
* 输入输出形状与 core 的 PathMapping 完全一致（oldPrefix/newPrefix/appliesTo），
* 实际前缀替换由 Host 侧 core 在 createImportPlan 阶段执行，本组件只负责收集用户输入。
*/
/**
* 路径映射表单：每条 PathIssue 一行（原路径 → 新路径输入框），
* 留空 = 该路径不映射（unresolved）；填写 = 输出 core PathMapping[]。
*/
function PathMappingForm({ issues, initial, t, onChange }) {
	const [drafts, setDrafts] = (0, react.useState)(() => {
		const out = {};
		for (const m of initial ?? []) out[m.oldPrefix] = m.newPrefix;
		return out;
	});
	const setNewPrefix = (oldPrefix, value) => {
		const next = {
			...drafts,
			[oldPrefix]: value
		};
		setDrafts(next);
		onChange(Object.entries(next).filter(([, v]) => v !== "").map(([oldPrefix, newPrefix]) => ({
			oldPrefix,
			newPrefix,
			appliesTo: []
		})));
	};
	const unresolved = (0, react.useMemo)(() => {
		return issues.filter((issue) => (drafts[issue.value] ?? "") === "");
	}, [issues, drafts]);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.pathMappingList,
		children: [
			unresolved.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "warn",
				children: t("import.paths.unresolved", { count: String(unresolved.length) })
			}),
			issues.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.empty,
				children: "No paths to map"
			}),
			issues.map((issue) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.pathRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.pathOld,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.fieldLabel,
							children: t("import.paths.old")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
							className: config_manager_module_css_default.pathValue,
							children: issue.value
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.pathIssueKind,
							children: issue.kind
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.pathNew,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.fieldLabel,
						children: t("import.paths.new")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: config_manager_module_css_default.input,
						value: drafts[issue.value] ?? "",
						placeholder: issue.mappedTo ?? "",
						onChange: (e) => {
							setNewPrefix(issue.value, e.target.value);
						}
					})]
				})]
			}, issue.value))
		]
	});
}
//#endregion
//#region src/ui/migration-consult-view.ts
/**
* 「建议依据」去重（纯函数）。
*
* 背景：core 的 `recommendationReasons` 是各维度 error/warning issue message 的
* 直接拼接，同一句话可能被 push 多次（如 migratability 维度按 `m.warnings` 逐条 push
* 「存在需注意的迁移项」），同一句也可能既出现在维度 issue 又出现在 reasons 中。
*
* 去重规则（严格按此实现，勿擅自放宽）：
*  1. **按原文去重**：只有完全相同的字符串才算重复——不做 trim 后合并、不做大小写
*     折叠、不做前缀/子串归并。因此 `'A'`、`' A'`、`'A '` 是三个不同条目。
*  2. **保持首次出现顺序**：稳定去重，输出顺序 = 各条目在输入中首次出现的顺序。
*  3. **丢弃空串与纯空白字符串**（`trim() === ''`），它们不参与展示。
*
* 不修改入参，返回新数组。
*/
function dedupeConsultReasons(reasons) {
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const reason of reasons) {
		if (reason.trim() === "") continue;
		if (seen.has(reason)) continue;
		seen.add(reason);
		out.push(reason);
	}
	return out;
}
/**
* 「建议依据」分组（纯函数）：去重后给出每个条目的重复次数，供 UI 渲染「×N」。
*
* 规则：
*  1. 先经 `dedupeConsultReasons` 去重（原文去重、丢弃空串/纯空白、保持首现顺序）；
*  2. `count` = 该 message 在**原始数组**（未去重）中的出现次数，按原文精确匹配统计，
*     因此 count ≥ 1；count 仅用于展示「×N」，不代表任何业务优先级或权重；
*  3. 输出顺序 = 去重后的顺序（即各条目首次出现的顺序）。
*
* 不修改入参，返回新数组。
*/
function consultReasonGroups(reasons) {
	const counts = /* @__PURE__ */ new Map();
	for (const reason of reasons) counts.set(reason, (counts.get(reason) ?? 0) + 1);
	return dedupeConsultReasons(reasons).map((message) => ({
		message,
		count: counts.get(message) ?? 0
	}));
}
/** verdict → Badge kind（语义映射） */
function consultVerdictBadgeKind(v) {
	switch (v) {
		case "healthy": return "ok";
		case "needs-attention": return "warn";
		case "critical": return "error";
	}
}
/** recommendation → Badge kind */
function consultRecommendationBadgeKind(r) {
	switch (r) {
		case "proceed": return "ok";
		case "review": return "warn";
		case "block": return "error";
	}
}
/** 维度 label（i18n key 后缀） */
function consultDimensionLabel(id, t) {
	switch (id) {
		case "compatibility": return t("consult.dim.compatibility");
		case "integrity": return t("consult.dim.integrity");
		case "sections": return t("consult.dim.sections");
		case "consistency": return t("consult.dim.consistency");
		case "sensitive": return t("consult.dim.sensitive");
		case "migratability": return t("consult.dim.migratability");
	}
}
/** 把 ConsultReport 转成视图数据（纯函数） */
function consultView(report, t) {
	const dimensions = report.dimensions.map((d) => ({
		id: d.id,
		label: consultDimensionLabel(d.id, t),
		score: d.score,
		verdict: d.verdict,
		badgeKind: consultVerdictBadgeKind(d.verdict),
		issues: d.issues.map((i) => ({
			severity: i.severity,
			message: i.message
		}))
	}));
	return {
		healthScore: report.healthScore,
		verdict: report.verdict,
		verdictBadgeKind: consultVerdictBadgeKind(report.verdict),
		recommendation: report.recommendation,
		recommendationBadgeKind: consultRecommendationBadgeKind(report.recommendation),
		recommendationLabel: consultRecommendationLabel(report.recommendation, t),
		reasons: report.recommendationReasons,
		dimensions,
		willApply: {
			sections: report.willApply.sections,
			itemCount: report.willApply.itemCount,
			conflicts: report.willApply.conflicts,
			risks: report.willApply.risks,
			overwritten: report.willApply.overwritten,
			dryRun: report.willApply.dryRun
		}
	};
}
/** recommendation 的可读标签 */
function consultRecommendationLabel(r, t) {
	switch (r) {
		case "proceed": return t("consult.recommendation.proceed");
		case "review": return t("consult.recommendation.review");
		case "block": return t("consult.recommendation.block");
	}
}
//#endregion
//#region src/client/consult/ConsultCard.tsx
/** 迁移前咨询卡：健康评分 + 维度明细 + 建议 + 触发项 */
function ConsultCard({ report, t, title }) {
	const view = consultView(report, t);
	const reasonGroups = consultReasonGroups(view.reasons);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
		className: config_manager_module_css_default.card,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: title ?? t("consult.title") }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.statRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: view.verdictBadgeKind,
						children: t("consult.healthScore", { score: String(view.healthScore) })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: view.recommendationBadgeKind,
						children: view.recommendationLabel
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: t("consult.dryRun")
					})
				]
			}),
			reasonGroups.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: view.verdictBadgeKind === "error" ? "error" : view.verdictBadgeKind === "warn" ? "warn" : "info",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("consult.reasons")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.reasonList,
					children: reasonGroups.map((g) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.reasonLine,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: redact(g.message) }), g.count > 1 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: `×${g.count}`
						})]
					}, g.message))
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.consultSection,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("consult.willApply")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						view.willApply.sections.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("consult.sections", { count: String(view.willApply.sections.length) })
						}),
						view.willApply.itemCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("consult.items", { count: String(view.willApply.itemCount) })
						}),
						view.willApply.conflicts > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("consult.conflicts", { count: String(view.willApply.conflicts) })
						}),
						view.willApply.risks > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("consult.risks", { count: String(view.willApply.risks) })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.consultSection,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("consult.dimensions")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.consultScroll,
					children: view.dimensions.map((d) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.consultDimension,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: d.badgeKind,
								children: d.label
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: d.score
							})]
						}), d.issues.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
							className: config_manager_module_css_default.reportList,
							children: d.issues.map((issue, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: redact(issue.message) }, i))
						})]
					}, d.id))
				})]
			})
		]
	});
}
//#endregion
//#region src/client/import/import-file-select.ts
/** 由 store 状态推导 select 步骤的展示模型（selectedFileName + uploading）。 */
function fileSelectModel(selectedName, busy) {
	return {
		selectedName,
		busy
	};
}
/**
* 处理文件选择（input onChange 入口）：
* - **恒清空 input 的 value** —— 同一文件再次选择也会触发 onChange（同文件换选）；
* - 返回选中的文件；用户关闭文件对话框（无文件）返回 undefined。
* input 以最小接口 `{ value: string }` 传入，纯逻辑可测；React 侧传真实 e.target。
*/
function consumePickedFile(file, input) {
	if (input !== null) input.value = "";
	return file;
}
/**
* 选中/换选后的状态：以新文件替换旧选择（提交的永远是最新选中的文件）；
* 未选文件（对话框取消）保持原状态不变。
*/
function applyPickedFile(current, file) {
	if (file === void 0) return current;
	return {
		selectedName: file.name,
		busy: true
	};
}
/** 取消选择：清空选择与忙碌态（回 idle；UI 同时清空 input value 保证同文件可重选）。 */
function cancelSelection(current) {
	return {
		selectedName: null,
		busy: false
	};
}
/** 浏览按钮文案键：已选文件 → 重新选择；否则 → 选择 ZIP 文件。 */
function browseLabelKey(hasSelection) {
	return hasSelection ? "import.select.reselect" : "import.select.browse";
}
/**
* select 步骤是否应渲染文件选择页。
*
* decrypt-archive（解锁整体加密容器）阶段发生时，step 仍可能是 'select'
* （上传后尚未 selectZip），此时渲染必须让位给解锁页而非文件选择页——
* 否则用户停在「已选择文件 + 取消/重新选择」页面，看不到密码输入界面，
* 无法继续导入加密快照（import-decrypt-archive-render 回归）。
*
* 入参用 string 而非 ui 类型，避免本纯函数模块引入跨层类型依赖（可 node --test 直测）。
*/
function shouldRenderSelect(step, phase) {
	return step === "select" && phase !== "decrypt-archive";
}
//#endregion
//#region src/client/import/ImportWizardView.tsx
/**
* 导入九步向导（规范 §9 / §10 / §28，绑 src/ui/import-wizard.ts 的 ImportWizard 控制器）。
*
* 步骤（对齐 ui/types.ts 的 ImportStep）：
*   Select ZIP → Analyzing → Compatibility → Preview
*   → Resolve Conflicts（若有）→ Path Mapping（若有）→ Secrets 补录（若有）
*   → Confirm → Importing → Result
*
* 安全/正确性约束（来自 ImportWizard 与 core）：
*   - analyzeImport / createImportPlan 零写入（Dry Run 复用）；
*   - executeImportPlan 必须 confirm=true（core 安全阀）；
*   - 秘密补录值仅内存（secretInputs），经 HTTPS 请求体传给 Host，绝不落日志/落盘，
*     **也绝不进入 sessionStorage**（m2 白名单剔除，刷新后 secrets 阶段要求重输）；
*   - 默认整体回滚（rollbackOnError=true），用户在 Confirm 步可切换；
*   - 整体加密容器（DCA1）密码只输入一次：选完 ZIP 即进入「解锁加密备份」
*     （decrypt-archive）输入密码，Host 解锁时顺带解出内部凭据覆盖清单（refs）；
*     该密码同时作为解密密码交给向导，无第二个密码校验页面（decrypt-archive 回归）。
*
* 数据流：本地文件 → api.upload → zipPath → wizard.selectZip/confirmCompatibility/
*   setResolutions/setPathMappings/setSecretInputs → wizard.execute。
* 中间阶段（conflicts/path-mapping/secrets）是 UI 层流程页，wizard 的 decisions 由
* 对应组件收集后写入。
*
* m2：全部 UI 状态由模块级 runStore 持有（切 tab/关面板不重建、刷新恢复），
* 控制器实例（ImportWizard）由 store 缓存复用；每次 wizard 动作后 syncWizard()
* 把控制器快照镜像进 store（非敏感字段持久化）。
*/
/** 密钥补录表单（仅内存收集，值不外泄；onChange 写入 store 的仅内存字段） */
function SecretsForm({ missing, t, onChange }) {
	const [inputs, setInputs] = (0, react.useState)({});
	const setRef = (ref, value) => {
		const next = {
			...inputs,
			[ref]: value
		};
		setInputs(next);
		onChange(next);
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.secretsList,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				children: t("import.secrets.hint")
			}),
			missing.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: "No secrets required" }),
			missing.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: config_manager_module_css_default.field,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: config_manager_module_css_default.fieldLabel,
					children: [
						s.ref,
						" ",
						s.required ? t("import.secrets.required") : t("import.secrets.optional")
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "password",
					className: config_manager_module_css_default.input,
					autoComplete: "off",
					value: inputs[s.ref] ?? "",
					onChange: (e) => {
						setRef(s.ref, e.target.value);
					}
				})]
			}, s.ref))
		]
	});
}
/**
* 导入执行日志面板（importing 步骤进度条下方）：展示导入过程中执行的命令
* （逐计划项操作 `▶/✓/⚠/✗/–` + 子进程命令行 `$ dsh plugin …`）。
* - 数据来自 Host RunRegistry（经 /progress 轮询回传），行文本仅非敏感内容，
*   渲染前再过 redact() 兜底（安全不变量：UI 展示文本先脱敏）；
* - 限高内滚（logScroll）；**智能自动滚动**：仅当用户贴近底部时跟随最新行；
*   用户向上滚动查看历史时不强制拉回，改显示「↓ 新输出」提示，点击再滚到底部；
* - memo 自定义比较：lines 数组为同一引用被 append（RunState.log push 不换引用），
*   按引用浅比较无法感知新行 —— 比较长度 + t 引用，避免整页轮询反复重渲染整个列表。
*/
function ImportLogPanelBase({ lines, t }) {
	const scrollRef = (0, react.useRef)(null);
	/** 是否贴底（用户上滚置 false；滚动回底部自动恢复） */
	const stickRef = (0, react.useRef)(true);
	/** 用户上滚后是否有新行到达（显示「↓ 新输出」；点击跳到底部清除） */
	const [hasNewOutput, setHasNewOutput] = (0, react.useState)(false);
	/**
	* 上次渲染的数组引用（新输出 = 引用变化）。依赖 appendLog 的**不可变写入**：
	* 每次追加都生成新数组（run-registry.ts）——行数封顶后长度恒定，但引用必变，
	* 以引用判断才能感知截断后的新行（长度比较在 500 行封顶时失效）。
	*/
	const prevLinesRef = (0, react.useRef)(lines);
	(0, react.useEffect)(() => {
		const el = scrollRef.current;
		if (el === null) return;
		const hasNew = lines !== prevLinesRef.current;
		prevLinesRef.current = lines;
		if (stickRef.current) {
			el.scrollTop = el.scrollHeight;
			setHasNewOutput(false);
		} else if (hasNew) setHasNewOutput(true);
	}, [lines]);
	/** 滚动中更新贴底状态（上滚 → 停止跟随；滚回底部 → 恢复跟随并清除提示） */
	const onScroll = () => {
		const el = scrollRef.current;
		if (el === null) return;
		const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 48;
		stickRef.current = nearBottom;
		if (nearBottom) setHasNewOutput(false);
	};
	/** 「↓ 新输出」：跳到底部 + 恢复跟随 */
	const jumpToBottom = () => {
		const el = scrollRef.current;
		if (el !== null) el.scrollTop = el.scrollHeight;
		stickRef.current = true;
		setHasNewOutput(false);
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.logPanel,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.logHeader,
			children: [t("import.log.title"), hasNewOutput && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				className: config_manager_module_css_default.logJumpButton,
				onClick: jumpToBottom,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChevronDownIcon, { size: 13 }),
					" ",
					t("import.log.newOutput")
				]
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.logScroll,
			ref: scrollRef,
			onScroll,
			children: lines.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.logEmpty,
				children: t("import.log.empty")
			}) : lines.map((line, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.logLine,
				children: redact(line)
			}, i))
		})]
	});
}
/** memo：lines 数组经 appendLog **不可变追加**（每次 append 换新引用，run-registry.ts）——
*  自定义比较以「数组引用 + t 引用」为准：引用未变 = 无新输出，跳过整个列表重渲染；
*  引用已变 = 有新行（含 500 行封顶后长度不变的情况），必须重渲染。 */
const ImportLogPanel = (0, react.memo)(ImportLogPanelBase, (prev, next) => prev.lines === next.lines && prev.t === next.t);
/**
* 导入/同步后收尾清单（P0-① / P2-⑪，绑 src/ui/next-steps.ts 的 importNextSteps 纯函数）。
* - 待重启项（Install 插件 / mcp 变更 → 重启 DSH 生效，逐项列出 id + 摘要）；
* - 补录凭据（ref 名清单，非值；无值展示，安全不变量不破）；
* - 失败/跳过项（count 传达「可重试」，明细仍在 ReportView 内联报告里）。
* 三组均无内容 → 显示「全部完成」ok Banner（替代旧版单行 needsRestart 提示）。
*/
function NextStepsCard({ plan, result, t }) {
	if (plan === null) return result.needsRestart ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
		kind: "warn",
		children: t("report.needsRestart")
	}) : null;
	const steps = importNextSteps(plan, result);
	if (!steps.hasNextSteps) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
		kind: "ok",
		children: t("nextSteps.done")
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
		className: config_manager_module_css_default.card,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("nextSteps.title")
			}),
			steps.restartItems.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.nextStepsGroup,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("nextSteps.restart.title", { count: String(steps.restartItems.length) })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t("nextSteps.restart.hint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: config_manager_module_css_default.reportList,
						children: steps.restartItems.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
							item.adapter,
							": ",
							item.description
						] }, item.id))
					})
				]
			}),
			steps.missingSecrets.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.nextStepsGroup,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("nextSteps.secrets.title", { count: String(steps.missingSecrets.length) })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t("nextSteps.secrets.hint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: config_manager_module_css_default.reportList,
						children: steps.missingSecrets.map((ref) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: ref }, ref))
					})
				]
			}),
			steps.unresolved.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.nextStepsGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("nextSteps.unresolved.title", { count: String(steps.unresolved.length) })
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("nextSteps.unresolved.hint")
				})]
			})
		]
	});
}
/**
* 导入向导主视图（内部体）：各步骤 early-return 的渲染链。
* 外层由 ImportWizardView 包装步骤条（Stepper），本体保持零改动。
*/
function ImportWizardBody({ api, t }) {
	const imp = (0, react.useSyncExternalStore)(runStore.subscribe, runStore.getSnapshot).import;
	const wizard = runStore.importWizard(api);
	const step = imp.step;
	const phase = imp.phase;
	const progress = imp.progress;
	const error = imp.error;
	const uploading = imp.uploading;
	const running = imp.running;
	const rollbackOnError = imp.rollbackOnError;
	const conflictCollector = imp.conflictCollector;
	const pathMappings = imp.pathMappings;
	const secretInputs = imp.secretInputs;
	const decryptRefs = imp.decryptRefs;
	const isEncrypted = imp.analysis?.encrypted === true;
	const containerEncrypted = imp.containerEncrypted;
	const archiveUnlocked = imp.archiveUnlocked;
	const fileInput = (0, react.useRef)(null);
	/**
	* 选择代数（取消选择时递增）：作废在途的选择上传/分析，
	* 防止「取消后旧请求仍把向导推进/写错误」的竞态。
	*/
	const pickGeneration = (0, react.useRef)(0);
	/** decrypt-archive 阶段（解锁加密容器）的本地状态（不持久化） */
	const [unlocking, setUnlocking] = (0, react.useState)(false);
	const [archiveUnlockError, setArchiveUnlockError] = (0, react.useState)(null);
	/** 解锁阶段密码输入（本地 state，不上报 store 的敏感持久化键） */
	const [archivePassword, setArchivePassword] = (0, react.useState)("");
	/** Phase 7 迁移前咨询：预览步的咨询报告（本地 state，非敏感） */
	const [consultReport, setConsultReport] = (0, react.useState)(null);
	const [consultLoading, setConsultLoading] = (0, react.useState)(false);
	const setPhase = (next) => {
		runStore.patch({ import: { phase: next } });
	};
	const hasConflicts = (imp.plan?.items ?? []).some((i) => i.kind === "Conflict");
	const hasPathIssues = (imp.analysis?.pathIssues.length ?? 0) > 0;
	const hasSecrets = (imp.plan?.missingSecrets ?? []).some((s) => !decryptRefs.includes(s.ref));
	/**
	* 适用阶段的有序列表（仅含需要用户处理 + 确认页）。
	* hasConflicts/hasPathIssues/hasSecrets 基于原始 analysis/plan（Dry Run 产物），
	* 在流程中不会因已解决而重算——所以导航必须只前进（见 nextFlowPhase），
	* 而不是靠"当前阶段 != X"判定（那会让已完成阶段被重新命中、跳回上一步）。
	* 整体加密容器（containerEncrypted && !archiveUnlocked）恒先插入 decrypt-archive：
	* 不解锁不得分析/继续导入。解密密码只在解锁时输入一次（导出时容器密码与
	* 内部 secrets.enc 密码同源），不再有独立的 decrypt 阶段。
	*/
	const applicablePhases = () => {
		const list = [];
		if (containerEncrypted && !archiveUnlocked) list.push("decrypt-archive");
		if (hasConflicts) list.push("conflicts");
		if (hasPathIssues) list.push("path-mapping");
		if (hasSecrets) list.push("secrets");
		list.push("confirm");
		return list;
	};
	/** 从某阶段完成后进入的下一个阶段：只前进（from 不在列表时取第一项） */
	const nextPhase = (from) => nextFlowPhase(applicablePhases(), from);
	/** 选择并上传 ZIP → wizard.selectZip（analyzing → compatibility）。
	* 换选不变式：每次选择都以最新文件为准（applyPickedFile 替换旧选择）；
	* pickGeneration 守卫作废取消后在途的旧请求。
	* 整体加密容器（upload.containerType === 'encrypted'）：不能直接按 ZIP 分析，
	* 先进入「解锁加密备份」（decrypt-archive）阶段，解锁成功后再走 selectZip。 */
	const onPickFile = async (file) => {
		if (file === void 0) return;
		const generation = pickGeneration.current;
		const next = applyPickedFile(fileSelectModel(imp.selectedFileName, uploading), file);
		runStore.patch({ import: {
			uploading: next.busy,
			error: null,
			selectedFileName: next.selectedName,
			decryptPassword: "",
			decryptRefs: [],
			archiveUnlocked: false,
			containerEncrypted: false
		} });
		try {
			const uploaded = await api.upload(file);
			if (generation !== pickGeneration.current) return;
			if (uploaded.containerType === "encrypted") {
				wizard.setArchiveEncrypted(true, uploaded.zipPath);
				runStore.patch({ import: {
					containerEncrypted: true,
					archiveUnlocked: false,
					zipPath: uploaded.zipPath,
					phase: "decrypt-archive"
				} });
				runStore.syncWizard();
				return;
			}
			await wizard.selectZip(uploaded.zipPath);
			if (generation !== pickGeneration.current) return;
			runStore.syncWizard();
		} catch (err) {
			if (generation !== pickGeneration.current) return;
			runStore.patch({ import: { error: err instanceof Error ? err.message : String(err) } });
			runStore.syncWizard();
		} finally {
			if (generation === pickGeneration.current) runStore.patch({ import: { uploading: false } });
		}
	};
	/** 取消当前选择：回 idle 并清空 input value（同一文件可再次选择触发 onChange）。 */
	const cancelPick = () => {
		pickGeneration.current += 1;
		const idle = cancelSelection(fileSelectModel(imp.selectedFileName, uploading));
		runStore.patch({ import: {
			selectedFileName: idle.selectedName,
			uploading: idle.busy,
			error: null
		} });
		if (fileInput.current !== null) fileInput.current.value = "";
	};
	/**
	* 一键导入（快照面板「备份文件 → 导入」）：消费 runStore.snapshots.importBackup，
	* 跳过上传直接对宿主 exports 目录的 zipPath 执行 selectZip（analyze 零写入）。
	* 一次性瞬态：消费后立即清空，刷新/重挂载不会重放；与 onPickFile 共用
	* pickGeneration 竞态守卫（用户取消选择后晚到的分析结果丢弃）。
	*/
	(0, react.useEffect)(() => {
		const req = runStore.getSnapshot().snapshots.importBackup;
		if (req === null) return;
		runStore.patch({ snapshots: { importBackup: null } });
		const generation = pickGeneration.current;
		runStore.patch({ import: {
			selectedFileName: req.name,
			uploading: true,
			error: null,
			decryptPassword: "",
			decryptRefs: [],
			archiveUnlocked: false,
			containerEncrypted: false
		} });
		wizard.selectZip(req.zipPath).then(() => {
			if (generation !== pickGeneration.current) return;
			runStore.syncWizard();
		}).catch((err) => {
			if (generation !== pickGeneration.current) return;
			runStore.patch({ import: { error: err instanceof Error ? err.message : String(err) } });
			runStore.syncWizard();
		}).finally(() => {
			if (generation === pickGeneration.current) runStore.patch({ import: { uploading: false } });
		});
	}, [api]);
	/** Phase 7 迁移前咨询：预览步对当前 ZIP 生成咨询报告（只读，零写入）。
	*  zipPath 变化 / 进入 preview 步时重新获取；失败静默（咨询是建议性，不阻断导入）。 */
	(0, react.useEffect)(() => {
		if (step !== "preview" || imp.zipPath === null) return;
		let cancelled = false;
		setConsultLoading(true);
		api.consult({
			type: "export-zip",
			id: imp.zipPath
		}).then((report) => {
			if (!cancelled) setConsultReport(report);
		}).catch(() => {
			if (!cancelled) setConsultReport(null);
		}).finally(() => {
			if (!cancelled) setConsultLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [
		step,
		imp.zipPath,
		api
	]);
	/** Compatibility → Preview */
	const goPreview = async () => {
		runStore.patch({ import: { error: null } });
		try {
			await wizard.confirmCompatibility();
			runStore.syncWizard();
		} catch (err) {
			runStore.patch({ import: { error: err instanceof Error ? err.message : String(err) } });
			runStore.syncWizard();
		}
	};
	/** 进入 conflicts 阶段（先创建 collector） */
	const enterConflicts = () => {
		const plan = imp.plan;
		if (plan !== null && imp.conflictCollector === null) runStore.patch({ import: { conflictCollector: new ConflictCollector(plan) } });
		setPhase("conflicts");
	};
	/** Conflicts 完成：写入决策 → 下一阶段（决策同时持久化，切 tab/刷新可恢复） */
	const finishConflicts = () => {
		if (imp.conflictCollector !== null) {
			const resolutions = imp.conflictCollector.toResolutions();
			wizard.setResolutions(resolutions);
			runStore.patch({ import: { conflictResolutions: resolutions } });
		}
		setPhase(nextPhase("conflicts"));
	};
	/** Path Mapping 完成：写入映射 → 下一阶段 */
	const finishPathMapping = () => {
		wizard.setPathMappings(pathMappings);
		setPhase(nextPhase("path-mapping"));
	};
	/** Secrets 完成：写入补录值（仅内存）→ Confirm */
	const finishSecrets = () => {
		wizard.setSecretInputs(secretInputs);
		setPhase("confirm");
	};
	/** 解锁整体加密备份容器（只读，零写入）：解密 → 明文 ZIP → selectZip 继续分析。
	* 导出时容器密码与备份内 secrets.enc 密码同源（同一 password 派生两层加密）：
	* 解锁请求在 Host 端顺带解出内部凭据覆盖清单（refs）一并返回，此密码直接作为
	* 解密密码交给向导——整个导入只输入这一次密码，没有第二个密码校验页面。 */
	const onUnlockArchive = async () => {
		if (imp.zipPath === null) return;
		const generation = pickGeneration.current;
		setUnlocking(true);
		setArchiveUnlockError(null);
		try {
			const { refs } = await wizard.unlockArchive(imp.zipPath, archivePassword);
			if (generation !== pickGeneration.current) return;
			wizard.setDecryptPassword(archivePassword);
			runStore.patch({ import: {
				archiveUnlocked: true,
				decryptPassword: archivePassword,
				decryptRefs: refs
			} });
			runStore.syncWizard();
			await wizard.selectZip(imp.zipPath);
			if (generation !== pickGeneration.current) return;
			runStore.syncWizard();
			runStore.patch({ import: { phase: "preview" } });
		} catch (err) {
			if (generation !== pickGeneration.current) return;
			setArchiveUnlockError(err instanceof Error ? err.message : String(err));
			runStore.patch({ import: { error: err instanceof Error ? err.message : String(err) } });
			runStore.syncWizard();
		} finally {
			setUnlocking(false);
		}
	};
	/** Confirm 执行：confirm=true（安全阀）+ 用户回滚策略 */
	const execute = async (opts) => {
		runStore.patch({ import: {
			error: null,
			running: true,
			skipRequested: false
		} });
		runStore.watchRunning("import", 500);
		try {
			const promise = opts?.retry === true ? wizard.executeRetry({ rollbackOnError }) : wizard.execute({
				confirm: true,
				rollbackOnError
			});
			runStore.syncWizard();
			const runId = (await promise).runId;
			runStore.patch({ import: {
				runId: typeof runId === "string" ? runId : null,
				skipRequested: false
			} });
			runStore.syncWizard();
		} catch (err) {
			runStore.patch({ import: { error: err instanceof Error ? err.message : String(err) } });
			runStore.syncWizard();
		} finally {
			runStore.stopRunWatch("import");
			runStore.patch({ import: { running: false } });
		}
	};
	/**
	* 跳过当前正在安装的插件（导入中）：通知宿主 abort 当前项子进程 →
	* kill + 清理半装状态 → 该项标记 user-skipped → 导入继续其余项。
	*/
	const skipCurrent = async () => {
		const runId = imp.runId;
		if (runId === null || imp.skipRequested) return;
		runStore.patch({ import: { skipRequested: true } });
		try {
			await api.skipExecute(runId);
		} catch {
			runStore.patch({ import: { skipRequested: false } });
		}
	};
	/** 重置向导（重新导入） */
	const resetWizard = () => {
		pickGeneration.current += 1;
		wizard.reset();
		runStore.syncWizard();
		runStore.patch({ import: {
			phase: "preview",
			uploading: false,
			running: false,
			progress: null,
			error: null,
			runId: null,
			selectedFileName: null,
			conflictCollector: null,
			conflictStrategy: "merge",
			conflictResolutions: {},
			pathMappings: [],
			secretInputs: {},
			decryptPassword: "",
			decryptRefs: [],
			containerEncrypted: false,
			archiveUnlocked: false,
			skipRequested: false
		} });
	};
	if (shouldRenderSelect(step, phase)) {
		const selectModel = fileSelectModel(imp.selectedFileName, uploading);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: `${config_manager_module_css_default.viewBody} ${config_manager_module_css_default.sparseFill}`,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
					title: t("import.select.title"),
					subtitle: t("import.select.hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					ref: fileInput,
					type: "file",
					accept: ".zip,application/zip",
					className: config_manager_module_css_default.hiddenFile,
					onChange: (e) => {
						const file = consumePickedFile(e.target.files?.[0], e.target);
						onPickFile(file);
					}
				}),
				selectModel.selectedName !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					"data-testid": "import-selected-file",
					children: t("import.select.file", { name: selectModel.selectedName })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					style: { marginBottom: 0 },
					children: [selectModel.selectedName !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: cancelPick,
						children: t("import.select.cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: uploading,
						onClick: () => {
							fileInput.current?.click();
						},
						children: uploading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("import.analyzing") }) : t(browseLabelKey(selectModel.selectedName !== null))
					})]
				}),
				error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
					error,
					onRetry: resetWizard,
					t: api.t
				})
			]
		});
	}
	if (step === "analyzing") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressBar, {
				event: progress,
				active: true
			}),
			error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
				error,
				onRetry: resetWizard,
				t: api.t
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorList, { errors: imp.errors })
		]
	});
	if (step === "compatibility") {
		const analysis = imp.analysis;
		if (analysis === null) return null;
		const scoreKey = analysis.compatibility === "unsupported" ? "import.compatibility.score.unsupported" : analysis.compatibility === "partial" ? "import.compatibility.score.partial" : analysis.compatibility === "good" ? "import.compatibility.score.good" : "import.compatibility.score.excellent";
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("import.compatibility.title") }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: analysis.compatibility === "unsupported" ? "error" : analysis.compatibility === "partial" ? "warn" : "ok",
							children: t("import.compatibility.score", { score: t(scoreKey) })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("import.compatibility.sections", { count: String(analysis.sectionsInZip.length) })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("import.compatibility.plugins", {
								installed: String(analysis.pluginSummary.installed),
								toInstall: String(analysis.pluginSummary.toInstall)
							})
						}),
						analysis.pathIssues.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("import.compatibility.paths", { count: String(analysis.pathIssues.length) })
						}),
						analysis.secretCount > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("import.compatibility.secrets", { count: String(analysis.secretCount) })
						}),
						analysis.encrypted && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
							kind: "error",
							children: ["🔒 ", t("import.decrypt.badge")]
						})
					]
				}),
				analysis.warnings.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "warn",
					children: analysis.warnings.map((w, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: redact(w) }, i))
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.groupHeader,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("import.compatibility.sectionsTitle")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer })]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.sectionGrid,
					children: analysis.sectionsInZip.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.sectionRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.sectionName,
							children: s
						})
					}, s))
				})] }),
				error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
					error,
					onRetry: () => {
						goPreview();
					},
					t: api.t
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: resetWizard,
						children: t("import.select.reselect")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: () => {
							goPreview();
						},
						children: t("common.next")
					})]
				})
			]
		});
	}
	if (step === "preview" && phase === "preview") {
		const summary = wizard.previewSummary();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("import.preview.title") }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: summary.willChange > 0 ? "info" : "ok",
							children: t("import.preview.willChange", { count: String(summary.willChange) })
						}),
						summary.unchanged > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "ok",
							children: t("import.preview.unchanged", { count: String(summary.unchanged) })
						}),
						summary.settingsUpdates > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("import.preview.settings", { count: String(summary.settingsUpdates) })
						}),
						summary.pluginsToInstall > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("import.preview.plugins", { count: String(summary.pluginsToInstall) })
						}),
						summary.mcpAdds > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("import.preview.mcp", { count: String(summary.mcpAdds) })
						}),
						summary.pathMappingsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("import.preview.paths", { count: String(summary.pathMappingsNeeded) })
						}),
						summary.secretsNeeded > 0 && !isEncrypted && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("import.preview.secrets", { count: String(summary.secretsNeeded) })
						}),
						summary.conflicts > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "error",
							children: t("import.preview.conflicts", { count: String(summary.conflicts) })
						}),
						isEncrypted && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
							kind: "error",
							children: ["🔒 ", t("import.decrypt.badge")]
						})
					]
				}),
				isEncrypted && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "warn",
					children: t("import.decrypt.previewHint")
				}),
				summary.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "warn",
					children: t("import.preview.restart")
				}),
				consultLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: api.t("consult.loading") }),
				consultReport !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConsultCard, {
					report: consultReport,
					t: api.t
				}),
				error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
					error,
					onRetry: () => {
						goPreview();
					},
					t: api.t
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: resetWizard,
						children: t("import.select.reselect")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: () => {
							const next = nextPhase("preview");
							setPhase(next);
							if (next === "conflicts") enterConflicts();
						},
						children: t("common.next")
					})]
				})
			]
		});
	}
	if (phase === "decrypt-archive") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("import.decryptArchive.title"),
				subtitle: t("import.decryptArchive.hint")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
				type: "password",
				className: config_manager_module_css_default.input,
				autoComplete: "off",
				placeholder: t("import.decryptArchive.passwordPlaceholder"),
				value: archivePassword,
				onChange: (e) => {
					setArchivePassword(e.target.value);
					setArchiveUnlockError(null);
				}
			}),
			archiveUnlockError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
				error: archiveUnlockError,
				t: api.t
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: resetWizard,
					children: t("import.select.reselect")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					disabled: archivePassword === "" || unlocking,
					onClick: () => {
						onUnlockArchive();
					},
					children: unlocking ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("import.decryptArchive.unlocking") }) : t("import.decryptArchive.unlock")
				})]
			})
		]
	});
	if (phase === "conflicts" && step === "preview") {
		if (conflictCollector === null || imp.plan === null) return null;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
					title: t("import.conflicts.title"),
					subtitle: t("import.conflicts.hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConflictList, {
					collector: conflictCollector,
					t,
					onChanged: () => {
						if (imp.conflictCollector !== null) runStore.patch({ import: { conflictResolutions: imp.conflictCollector.toResolutions() } });
					}
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							setPhase("preview");
						},
						children: t("common.back")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: conflictCollector.hasUnresolved,
						onClick: finishConflicts,
						children: t("common.next")
					})]
				})
			]
		});
	}
	if (phase === "path-mapping" && step === "preview") {
		const issues = imp.analysis?.pathIssues ?? [];
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
					title: t("import.paths.title"),
					subtitle: t("import.paths.hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(PathMappingForm, {
					issues,
					initial: pathMappings,
					t,
					onChange: (mappings) => {
						runStore.patch({ import: { pathMappings: mappings } });
					}
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							setPhase("preview");
						},
						children: t("common.back")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: finishPathMapping,
						children: t("common.next")
					})]
				})
			]
		});
	}
	if (phase === "secrets" && step === "preview") {
		const missing = (imp.plan?.missingSecrets ?? []).filter((s) => !decryptRefs.includes(s.ref));
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("import.secrets.title") }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SecretsForm, {
					missing,
					t,
					onChange: (inputs) => {
						runStore.patch({ import: { secretInputs: inputs } });
					}
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							setPhase("preview");
						},
						children: t("common.back")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: finishSecrets,
						children: t("common.next")
					})]
				})
			]
		});
	}
	if (phase === "confirm" && step === "preview") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
			className: config_manager_module_css_default.optionsCard,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "info",
					children: t("import.confirm.warning")
				}),
				isEncrypted && decryptRefs.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "ok",
					children: t("import.confirm.encrypted", { count: String(decryptRefs.length) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
					checked: rollbackOnError,
					onChange: (v) => {
						wizard.setRollbackOnError(v);
						runStore.patch({ import: { rollbackOnError: v } });
					},
					label: t("import.rollbackOnError")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							setPhase("preview");
						},
						children: t("common.back")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: running,
						onClick: () => {
							execute();
						},
						children: t("import.confirm.execute")
					})]
				})
			]
		}), error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
			error,
			onRetry: () => {
				execute();
			},
			t: api.t
		})]
	});
	if (step === "importing") {
		const logLines = progress?.log ?? [];
		const currentItem = progress?.detail ?? "";
		const isPluginInstall = running && currentItem.startsWith("plugin:") && !imp.skipRequested;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProgressBar, {
					event: progress,
					active: true
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImportLogPanel, {
					lines: logLines,
					t
				}),
				isPluginInstall && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							skipCurrent();
						},
						children: t("import.skipCurrent")
					})
				}),
				imp.skipRequested && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("import.skipPending")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("import.importing")
				}),
				error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
					error,
					t: api.t
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorList, { errors: imp.errors })
			]
		});
	}
	if (step === "result") {
		const result = imp.result;
		if (result === null) return null;
		const retryable = wizard.retryableCount();
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.viewBody,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("report.import.title") }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReportView, {
					kind: "import",
					importResult: result,
					onAction: (action) => {
						if (action === "done") resetWizard();
					}
				}),
				retryable > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: running,
						onClick: () => {
							execute({ retry: true });
						},
						children: t("import.retrySkipped", { count: String(retryable) })
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(NextStepsCard, {
					plan: imp.plan,
					result,
					t
				}),
				error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
					error,
					t: api.t
				})
			]
		});
	}
	return null;
}
/** 阶段标签映射（import.stage.* 字典键；key 来自 import-stepper.ts 的 ImportStageKey）。 */
function stageLabels(t) {
	return {
		select: t("import.stage.select"),
		analyze: t("import.stage.analyze"),
		decide: t("import.stage.decide"),
		confirm: t("import.stage.confirm"),
		execute: t("import.stage.execute"),
		done: t("import.stage.done")
	};
}
/**
* 导入向导（外层包装）：顶部步骤条（用户视角 6 阶段：选择→分析→预览与决策→确认→执行→完成）
* + 原向导体（ImportWizardBody 零改动）。步骤条为只读指示器：跟随 wizard.step/phase
* 推进（映射纯函数 importStepperModel，node 单测覆盖），不提供点击跳转。
*/
function ImportWizardView(props) {
	const { t } = props;
	const imp = (0, react.useSyncExternalStore)(runStore.subscribe, runStore.getSnapshot).import;
	const model = importStepperModel(imp.phase === "preview" ? imp.step : imp.phase);
	const labels = stageLabels(t);
	const current = model.steps[model.index];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.wizardStepperRow,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Stepper, {
			steps: model.steps.map((s) => ({
				key: s.key,
				label: labels[s.key],
				state: s.state
			})),
			ariaLabel: t("import.stepper.label", {
				current: model.index + 1,
				total: model.steps.length,
				label: labels[current.key]
			})
		})
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImportWizardBody, { ...props })] });
}
//#endregion
//#region src/client/common/ConfirmDialog.tsx
/**
* ConfirmDialog —— 确认弹窗（危险/重要操作的二次确认，DESIGN.md §8.11 / §14）。
*
* 2026-09 升级：底层改用 Radix Dialog（见 common/Modal.tsx），获得成熟的 focus trap、
* Esc 关闭、初始焦点与关闭后焦点还原、body 滚动锁定、Portal 渲染——替代原先手写的
* ~80 行 a11y 逻辑。对外 props 契约完全保持兼容（open/title/message/confirmLabel/
* cancelLabel/danger/busy/onConfirm/onCancel/backdropClose/children），调用方零改动。
*
* 交互约定（由 Radix + Modal 承载，语义不变）：
* - 受控组件：open=false 时不渲染；open=true 渲染遮罩 + 居中卡片；
* - 关闭三途径：遮罩点击、Esc 键、取消按钮（busy 时全部禁用）；
*   backdropClose 缺省 = onCancel；用于「不再提示」类弹窗让遮罩/Esc 只是暂时关闭、
*   不算表态（Radix onOpenChange(false) → 走 handleBackdropClose）；
* - busy=true（或 onConfirm 返回 Promise 的自管 busy）时禁用一切关闭途径与确认按钮；
* - 初始焦点在取消按钮（危险确认不默认落破坏性按钮）；关闭后 Radix 自动还原焦点到触发元素。
*
* 安全：message 由调用方传入（渲染前已 redact 兜底）；本组件不触碰任何凭据。
*/
/**
* 确认弹窗：遮罩 + 居中卡片 + 标题/正文/按钮区（Radix Dialog 承载 a11y）。
* 自管 busy：onConfirm 返回 Promise 时置 busy 直到 resolve（reject 仍关闭 busy，错误由调用方处理）。
*/
function ConfirmDialog({ open, title, message, confirmLabel, cancelLabel, danger, busy: busyProp, onConfirm, onCancel, backdropClose, children }) {
	const [selfBusy, setSelfBusy] = (0, react.useState)(false);
	const busy = busyProp === true || selfBusy;
	/** 遮罩/Esc 关闭回调（缺省 = 取消按钮同一回调） */
	const handleBackdropClose = backdropClose ?? onCancel;
	/** 取消按钮 ref：Radix 打开时把初始焦点重定向到此（危险确认不默认落破坏性的确认按钮） */
	const cancelRef = (0, react.useRef)(null);
	const handleConfirm = () => {
		if (busy) return;
		const result = onConfirm();
		if (result instanceof Promise) {
			setSelfBusy(true);
			result.finally(() => {
				setSelfBusy(false);
			});
		}
	};
	/** Radix 打开时默认聚焦首个可聚焦元素（确认按钮）；改派发到取消按钮。 */
	const onOpenAutoFocus = (e) => {
		e.preventDefault();
		cancelRef.current?.focus();
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
		open,
		onClose: handleBackdropClose,
		title,
		busy,
		onOpenAutoFocus,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, { title }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
				scroll: true,
				children: [message !== void 0 && message !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: message }), children]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Footer, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
				variant: danger === true ? "danger" : "primary",
				disabled: busy,
				loading: busy,
				onClick: () => {
					handleConfirm();
				},
				children: busy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : confirmLabel ?? ""
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				ref: cancelRef,
				type: "button",
				className: config_manager_module_css_default.ghostButton,
				disabled: busy,
				"aria-busy": busy || void 0,
				onClick: onCancel,
				children: cancelLabel ?? ""
			})] })
		]
	});
}
//#endregion
//#region src/client/recovery/RecoveryPanel.tsx
/**
* Recovery 面板（Phase 5 §10.2）：引导式恢复工作流。
*
* 数据流：recoveryApi.status() 加载未解决 incident → 选择 incident → preview（只读）
* → 显式确认（ConfirmDialog，danger）→ execute（NEEDS_ATTENTION → RECOVERING）
* → verify（post-recovery verification）→ 最终状态（MATCH/PARTIAL_MATCH → 完成；
* MISMATCH/VERIFICATION_ERROR → 需人工处理，可 retry / dismiss）。
*
* 状态组件内自持（useState），同时经 toRecoveryStoreSlice() 镜像进模块级 runStore：
* 模块级单例保证「切 tab 不丢」，sessionStorage 白名单保证「刷新恢复」。
* running 为「内存切片瞬态」：切 tab 由模块级单例保留、刷新时被 toPersistedState
* 白名单剔除 —— 恢复是否仍在执行以宿主 RunRegistry（/runs + /progress）为权威，
* 刷新后经 resume() 重新发现；浏览器持久化绝不作为 destructive operation 的状态源。
*
* UI HARD RULES（§10.4）：绝不自动 execute/rollback、绝不隐藏确认、绝不把
* PARTIAL_MATCH 显示为完全成功、绝不把 NEEDS_ATTENTION 显示为 recovered、
* 绝不在 snapshot 不可信时显示可恢复。流程 = 发生了什么 → 使用哪个 snapshot →
* 将执行什么 → 用户确认 → 执行 → 验证 → 最终状态。
*/
const initial$5 = {
	status: "loading",
	error: null,
	recovery: null,
	selectedOperationId: null,
	preview: null,
	previewLoading: false,
	verifyResult: null,
	running: false,
	actionError: null
};
/** 从 runStore 恢复上次的 recovery 面板状态（切 tab 回 / 刷新后挂载）。 */
function initFromStore$4() {
	const s = runStore.getSnapshot().recovery;
	return {
		...initial$5,
		recovery: s.status,
		selectedOperationId: s.selectedOperationId,
		preview: s.preview,
		verifyResult: s.verifyResult,
		running: s.running,
		error: s.error,
		actionError: s.actionError
	};
}
/** PanelState → RecoveryStoreSlice（镜像进 runStore；status 字段语义不同，需显式映射）。 */
function toSlice(s) {
	return {
		status: s.recovery,
		selectedOperationId: s.selectedOperationId,
		preview: s.preview,
		verifyResult: s.verifyResult,
		running: s.running,
		error: s.error,
		actionError: s.actionError
	};
}
/** decision → 徽章语义。 */
function decisionBadgeKind(decision) {
	switch (decision) {
		case "rollback-recommended": return "warn";
		case "rollback-continue": return "warn";
		case "needs-attention": return "error";
		default: return "info";
	}
}
/** decision → 文案键。 */
function decisionLabel(t, decision) {
	switch (decision) {
		case "rollback-recommended": return t("recovery.rollbackRecommended");
		case "rollback-continue": return t("recovery.rollbackContinue");
		case "needs-attention": return t("recovery.needsAttention");
		default: return t("recovery.decision.unknown");
	}
}
/** verdict → 文案键。 */
function verdictLabel(t, verdict) {
	switch (verdict) {
		case "MATCH": return t("recovery.verified");
		case "PARTIAL_MATCH": return t("recovery.partialMatch");
		case "MISMATCH": return t("recovery.mismatch");
		case "VERIFICATION_ERROR": return t("recovery.verificationError");
		default: return t("recovery.verify.verdict.unknown");
	}
}
/** verdict → 徽章语义。 */
function verdictBadgeKind(verdict) {
	switch (verdict) {
		case "MATCH": return "ok";
		case "PARTIAL_MATCH": return "warn";
		case "MISMATCH": return "error";
		case "VERIFICATION_ERROR": return "error";
		default: return "info";
	}
}
/** snapshot verdict → 文案键。 */
function snapshotVerdictLabel(t, verdict) {
	switch (verdict) {
		case "TRUSTED_OPERATION_SNAPSHOT": return t("recovery.snapshot.verdict.trusted");
		case "TRUSTED_MANUAL_LOCAL": return t("recovery.snapshot.verdict.manual");
		case "LEGACY_REQUIRES_CONFIRMATION": return t("recovery.snapshot.verdict.legacy");
		case "WRONG_ENVIRONMENT": return t("recovery.snapshot.verdict.wrongEnv");
		case "CORRUPT": return t("recovery.snapshot.verdict.corrupt");
		case "INVALID": return t("recovery.snapshot.verdict.invalid");
		case "UNSAFE_PATH": return t("recovery.snapshot.verdict.unsafe");
		default: return t("recovery.snapshot.verdict.unknown");
	}
}
/** incident 原始状态值 → 用户可懂的中文标签（未知名回退 unknown，绝不透出英文原文）。 */
function incidentStateLabel(t, state) {
	switch (state) {
		case "RECOVERING": return t("recovery.incident.state.recovering");
		case "NEEDS_ATTENTION": return t("recovery.incident.state.needsAttention");
		case "ROLLED_BACK": return t("recovery.incident.state.rolledBack");
		case "RECOVERED": return t("recovery.incident.state.recovered");
		case "COMMITTED": return t("recovery.incident.state.committed");
		default: return t("recovery.incident.state.unknown");
	}
}
function RecoveryPanel({ recoveryApi, t }) {
	const [state, setState] = (0, react.useState)(initFromStore$4);
	const stateRef = (0, react.useRef)(state);
	const mountedRef = (0, react.useRef)(true);
	/** 预览请求代数：快速切换 incident 时作废在途旧请求（防晚到响应覆盖新选择） */
	const previewGeneration = (0, react.useRef)(0);
	/** 执行恢复的二次确认弹窗开关（危险操作） */
	const [confirmOpen, setConfirmOpen] = (0, react.useState)(false);
	/** 放弃恢复（dismiss）确认弹窗开关 */
	const [dismissOpen, setDismissOpen] = (0, react.useState)(false);
	/** 重试确认弹窗开关 */
	const [retryOpen, setRetryOpen] = (0, react.useState)(false);
	/** issue #31：残留锁回收确认弹窗开关 + 进行中标志（与 incident 流程独立的瞬态） */
	const [lockConfirmOpen, setLockConfirmOpen] = (0, react.useState)(false);
	const [lockBusy, setLockBusy] = (0, react.useState)(false);
	/** 统一提交入口：更新 stateRef → 挂载时 setState → **总是**镜像进 runStore。 */
	const commit = (next) => {
		stateRef.current = next;
		if (mountedRef.current) setState(next);
		runStore.patch({ recovery: toSlice(next) });
	};
	const patch = (p) => commit({
		...stateRef.current,
		...p
	});
	/** 卸载时置挂载守卫 + 最后镜像一次。 */
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
		runStore.patch({ recovery: toSlice(stateRef.current) });
	}, []);
	const load = () => {
		patch({
			status: "loading",
			error: null
		});
		recoveryApi.status().then((recovery) => {
			patch({
				status: "ready",
				recovery
			});
		}, (err) => {
			patch({
				status: "error",
				error: err instanceof Error ? err.message : String(err)
			});
		});
	};
	(0, react.useEffect)(load, [recoveryApi]);
	/** 选择 incident → 加载只读 preview。 */
	const select = (operationId) => {
		const generation = previewGeneration.current + 1;
		previewGeneration.current = generation;
		patch({
			selectedOperationId: operationId,
			preview: null,
			previewLoading: true,
			verifyResult: null,
			actionError: null
		});
		recoveryApi.preview(operationId).then((preview) => {
			if (generation !== previewGeneration.current) return;
			patch({
				previewLoading: false,
				preview
			});
		}, (err) => {
			if (generation !== previewGeneration.current) return;
			patch({
				previewLoading: false,
				actionError: err instanceof Error ? err.message : String(err)
			});
		});
	};
	/** 执行恢复（confirm 弹窗确认后）。 */
	const execute = () => {
		const operationId = state.selectedOperationId;
		if (operationId === null || state.running) return;
		patch({
			running: true,
			actionError: null,
			verifyResult: null
		});
		setConfirmOpen(false);
		runStore.watchRunning("recovery", 500);
		recoveryApi.execute(operationId, true).then(() => {
			return recoveryApi.verify(operationId);
		}, (err) => {
			patch({ running: false });
			runStore.stopRunWatch("recovery");
			toast.error(err instanceof Error ? err.message : String(err));
			return null;
		}).then((verifyResult) => {
			if (verifyResult === null) return;
			patch({
				running: false,
				verifyResult
			});
			runStore.stopRunWatch("recovery");
			recoveryApi.status().then((recovery) => {
				patch({
					status: "ready",
					recovery
				});
			}, () => {});
		});
	};
	/** 重试（验证失败后；再次确认）。 */
	const retry = () => {
		const operationId = state.selectedOperationId;
		if (operationId === null || state.running) return;
		patch({
			running: true,
			actionError: null,
			verifyResult: null
		});
		setRetryOpen(false);
		runStore.watchRunning("recovery", 500);
		recoveryApi.retry(operationId, true).then(() => recoveryApi.verify(operationId), (err) => {
			patch({ running: false });
			runStore.stopRunWatch("recovery");
			toast.error(err instanceof Error ? err.message : String(err));
			return null;
		}).then((verifyResult) => {
			if (verifyResult === null) return;
			patch({
				running: false,
				verifyResult
			});
			runStore.stopRunWatch("recovery");
			recoveryApi.status().then((recovery) => {
				patch({
					status: "ready",
					recovery
				});
			}, () => {});
		});
	};
	/** 放弃恢复（dismiss；quarantine，不销毁证据）。 */
	const dismiss = () => {
		const operationId = state.selectedOperationId;
		if (operationId === null || state.running) return;
		patch({
			running: true,
			actionError: null
		});
		setDismissOpen(false);
		recoveryApi.dismiss(operationId, true).then(() => {
			patch({
				running: false,
				selectedOperationId: null,
				preview: null,
				verifyResult: null
			});
			load();
		}, (err) => {
			patch({ running: false });
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** issue #31：显式回收 stale 残留锁（确认弹窗后）。成功/拒绝都靠 status 重拉刷新锁态——
	*  拒绝时保留卡片并给出原因（绝不假装成功）。 */
	const recoverLock = () => {
		if (lockBusy) return;
		setLockConfirmOpen(false);
		setLockBusy(true);
		recoveryApi.recoverStaleLock(true).then((res) => {
			setLockBusy(false);
			if (res.ok) toast.ok(t("recovery.lock.done"));
			else toast.error(t("recovery.lock.refused"));
			load();
		}, (err) => {
			setLockBusy(false);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	const view = state.recovery !== null ? toRecoveryView(state.recovery) : null;
	const selected = state.selectedOperationId !== null && state.recovery !== null ? state.recovery.incidents.find((i) => i.operationId === state.selectedOperationId) : void 0;
	const previewView = state.preview !== null ? toRecoveryPreviewView(state.preview) : null;
	view?.state;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("view.recovery"),
				subtitle: t("recovery.requiredHint")
			}),
			view?.recoveryRequired === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "error",
				children: t("recovery.currentState.safeMode")
			}),
			state.status === "loading" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("recovery.loading") }),
			state.status === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "error",
				children: [state.error ?? t("common.unknownError"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: load,
					children: t("common.retry")
				})]
			}),
			state.status === "ready" && (view?.incidents.length ?? 0) === 0 && view?.lock == null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("recovery.empty") }),
			state.status === "ready" && view?.lock != null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
				className: config_manager_module_css_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("recovery.lock.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: view.lock.state === "STALE_LOCK_DETECTED" ? t("recovery.lock.detailStale") : t("recovery.lock.detailUnknown")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.actionRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							variant: "danger",
							disabled: lockBusy,
							onClick: () => {
								setLockConfirmOpen(true);
							},
							children: lockBusy ? t("recovery.lock.busy") : t("recovery.lock.action")
						})
					})
				]
			}),
			state.status === "ready" && (view?.incidents.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				(view?.running.length ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "info",
					children: t("recovery.runningHint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
					className: config_manager_module_css_default.card,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("recovery.incident.title")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.snapshotList,
						role: "listbox",
						"aria-label": t("recovery.incident.title"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.snapshotRowHeader,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("recovery.incident.operationType") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("recovery.incident.createdAt") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("recovery.incident.decision") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("recovery.incident.state") })
							]
						}), view.incidents.map((incident) => {
							const selectedRow = incident.operationId === state.selectedOperationId;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.snapshotRow,
								role: "option",
								"aria-selected": selectedRow,
								"data-active": selectedRow ? "" : void 0,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: config_manager_module_css_default.snapshotRowMain,
									disabled: state.running,
									onClick: () => {
										select(incident.operationId);
									},
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											title: incident.operationId,
											children: incident.operationType
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: new Date(incident.createdAt).toLocaleString() }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
											kind: decisionBadgeKind(incident.decision),
											children: decisionLabel(t, incident.decision)
										}) }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: incidentStateLabel(t, incident.state) })
									]
								})
							}, incident.operationId);
						})]
					})]
				}),
				selected !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
					className: config_manager_module_css_default.card,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.groupLabel,
							children: [
								t("recovery.incident.operationId"),
								": ",
								selected.operationId
							]
						}),
						selected.reason !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.hint,
							children: [
								t("recovery.incident.reason"),
								": ",
								selected.reason
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.groupLabel,
							children: t("recovery.snapshot.title")
						}),
						selected.snapshotId !== null && selected.snapshotId !== "" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: t("recovery.currentState.hasSnapshot")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								title: selected.snapshotId,
								children: selected.snapshotId
							})]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "error",
								children: t("recovery.currentState.noSnapshot")
							})
						}),
						previewView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupLabel,
								children: t("recovery.environment.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: previewView.environmentCompatible ? "ok" : "error",
								children: previewView.environmentCompatible ? t("recovery.environment.compatible") : t("recovery.environment.incompatible")
							})]
						}),
						state.previewLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("recovery.preview.loading") }),
						previewView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.groupLabel,
								children: t("recovery.preview.title")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.hint,
								children: t("recovery.preview.hint")
							}),
							previewView.snapshotVerdict !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.statRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: t("recovery.snapshot.verdict")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: isSnapshotTrusted(previewView.snapshotVerdict) ? "ok" : "warn",
									children: snapshotVerdictLabel(t, previewView.snapshotVerdict)
								})]
							}),
							previewView.snapshotMeta !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.hint,
								children: [
									t("recovery.snapshot.createdAt"),
									": ",
									new Date(previewView.snapshotMeta.createdAt).toLocaleString()
								]
							})
						] }),
						state.verifyResult !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.groupLabel,
								children: t("recovery.verify.title")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.statRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: verdictBadgeKind(state.verifyResult.verdict),
									children: verdictLabel(t, state.verifyResult.verdict)
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: t(`recovery.verify.terminal.${state.verifyResult.terminal === "ROLLED_BACK" ? "rolledBack" : state.verifyResult.terminal === "RECOVERED" ? "recovered" : "needsAttention"}`)
								})]
							}),
							state.verifyResult.details.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.reportScroll,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: config_manager_module_css_default.reportList,
									children: state.verifyResult.details.map((d, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: d }, `detail-${i}`))
								})
							}),
							state.verifyResult.manualHints.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
								kind: "warn",
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("recovery.verify.manualHints") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: config_manager_module_css_default.reportList,
									children: state.verifyResult.manualHints.map((h, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: h }, `hint-${i}`))
								})]
							})
						] }),
						state.actionError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "error",
							children: state.actionError
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.actionRow,
							children: [
								state.verifyResult === null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "danger",
									disabled: state.running || !(previewView?.actionable ?? false),
									onClick: () => {
										setConfirmOpen(true);
									},
									children: state.running ? t("recovery.executing") : t("recovery.execute")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									disabled: state.running,
									onClick: () => {
										setDismissOpen(true);
									},
									children: t("recovery.dismiss")
								})] }),
								state.verifyResult !== null && isVerdictAttention(state.verifyResult.verdict) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "danger",
									disabled: state.running,
									onClick: () => {
										setRetryOpen(true);
									},
									children: t("recovery.retry")
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									disabled: state.running,
									onClick: () => {
										setDismissOpen(true);
									},
									children: t("recovery.dismiss")
								})] }),
								state.verifyResult !== null && isVerdictSuccess(state.verifyResult.verdict) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
									kind: "ok",
									children: t("recovery.completed")
								})
							]
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirmOpen,
				title: t("recovery.confirm.title"),
				message: selected?.decision === "rollback-continue" ? t("recovery.confirm.rollbackContinue") : t("recovery.confirm.message"),
				confirmLabel: t("recovery.execute"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.running,
				onConfirm: execute,
				onCancel: () => {
					setConfirmOpen(false);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: retryOpen,
				title: t("recovery.confirm.title"),
				message: t("recovery.confirm.retry"),
				confirmLabel: t("recovery.retry"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.running,
				onConfirm: retry,
				onCancel: () => {
					setRetryOpen(false);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: dismissOpen,
				title: t("recovery.confirm.dismissTitle"),
				message: t("recovery.confirm.dismiss"),
				confirmLabel: t("recovery.dismiss"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.running,
				onConfirm: dismiss,
				onCancel: () => {
					setDismissOpen(false);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: lockConfirmOpen,
				title: t("recovery.lock.confirmTitle"),
				message: t("recovery.lock.confirmMessage"),
				confirmLabel: t("recovery.lock.action"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: lockBusy,
				onConfirm: recoverLock,
				onCancel: () => {
					setLockConfirmOpen(false);
				}
			})
		]
	});
}
//#endregion
//#region src/ui/backup-inspect.ts
/** 从分析 + 计划构建分区清单（sectionsInZip ↔ estimatedActions 对齐）。 */
function inspectSections(analysis, plan) {
	return analysis.sectionsInZip.map((section) => ({
		section,
		count: plan.estimatedActions[section] ?? 0
	}));
}
/** 从计划构建差异摘要（与导入预览统计口径一致）。 */
function inspectSummary(analysis, plan) {
	const items = plan.items;
	const kind = (kinds) => items.filter((i) => kinds.includes(i.kind)).length;
	return {
		willChange: kind([
			"Create",
			"Update",
			"Install",
			"Conflict"
		]),
		unchanged: kind(["Skip"]),
		conflicts: kind(["Conflict"]),
		secretsNeeded: plan.missingSecrets.length,
		pathMappingsNeeded: analysis.pathIssues.length,
		needsRestart: plan.needsRestart,
		changes: [...items]
	};
}
/** 判断 PlanItem 是否属于「变更」组（Create/Update/Install —— 将实际写入的项）。 */
function isChangeKind(kind) {
	return kind === "Create" || kind === "Update" || kind === "Install";
}
/**
* 把逐项变更列表按用户视角分组并排序（纯函数，接受任意 PlanItem 数组——
* 备份 diff、配置档案切换预览共用同一分组语义）：
* 冲突（需决策，error）→ 变更（将写入，info）→ 路径映射（需处理，warn）
* → 一致跳过（无需处理，ok）→ 其余（MissingSecret/MissingDependency/
* Warning/Error 等，warn）。空组不返回；非冲突类条目全部保留（不丢信息）。
*/
function groupPlanItems(items) {
	const by = (pred) => items.filter(pred);
	const groups = [];
	const conflicts = by((i) => i.kind === "Conflict");
	if (conflicts.length > 0) groups.push({
		key: "conflicts",
		kind: "error",
		items: conflicts
	});
	const changes = by((i) => isChangeKind(i.kind));
	if (changes.length > 0) groups.push({
		key: "changes",
		kind: "info",
		items: changes
	});
	const paths = by((i) => i.kind === "PathMapping");
	if (paths.length > 0) groups.push({
		key: "paths",
		kind: "warn",
		items: paths
	});
	const skipped = by((i) => i.kind === "Skip");
	if (skipped.length > 0) groups.push({
		key: "skipped",
		kind: "ok",
		items: skipped
	});
	const others = items.filter((i) => i.kind !== "Conflict" && !isChangeKind(i.kind) && i.kind !== "PathMapping" && i.kind !== "Skip");
	if (others.length > 0) groups.push({
		key: "others",
		kind: "warn",
		items: others
	});
	return groups;
}
/** 备份 diff 分组入口：从差异摘要取 changes 数组分组（与配置档案预览共用语义）。 */
function inspectGroupedChanges(summary) {
	return groupPlanItems(summary.changes);
}
//#endregion
//#region src/client/sync/history-model.ts
/** 统一历史条目（快照 + 自动同步）按 createdAt 倒序排序。 */
function projectSyncHistoryEntries(entries) {
	return [...entries].sort(byCreatedAtDesc);
}
function byCreatedAtDesc(a, b) {
	return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
}
/** ISO 时间 → 本地可读字符串（短格式） */
function formatDateTime(iso) {
	if (!iso) return "—";
	const d = new Date(iso);
	if (isNaN(d.getTime())) return iso;
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
/**
* ISO 时间 → 完整本地时间字符串（含秒，用于 td 的 title 悬停提示）。
* 非法/空输入回退 ''（不渲染 title，避免出现无意义的提示）。
*/
function formatDateTimeFull(iso) {
	if (!iso) return "";
	const d = new Date(iso);
	if (isNaN(d.getTime())) return "";
	return d.toLocaleString();
}
/** 自动同步执行记录的方向可读标签。 */
function directionLabel(direction) {
	switch (direction) {
		case "pull": return "下载";
		case "push": return "上传";
		default: return "双向";
	}
}
/** 自动同步执行状态可读标签。 */
function autosyncStatusLabel(status) {
	switch (status) {
		case "success": return "成功";
		case "skipped": return "已跳过";
		case "partial": return "部分成功";
		default: return "失败";
	}
}
/** 跳过原因 → 可读描述（host 透传语义；未知原因回退原串）。 */
function describeSkipReason(reason) {
	switch (reason) {
		case "conflict": return "冲突项被跳过";
		case "no-remote": return "远端无快照";
		case "not-configured": return "未配置仓库";
		case "network": return "网络问题";
		case "encrypted": return "远端快照已加密，自动同步跳过（请手动同步）";
		case "mutation-locked": return "环境锁被占用（另一项任务进行中，或存在需回收的残留锁）";
		default: return reason ?? "未知";
	}
}
/**
* 中段省略：保留头尾，中段以 … 替代（尾部才是区分信息，不可被截掉）。
* 与 SnapshotsPanel 的同名私有函数语义一致；此处导出以便本模块复用 + 单测覆盖
* （不在组件间跨文件 import 私有函数）。
*/
function midEllipsis$1(s, max = 26) {
	if (s.length <= max) return s;
	const keep = max - 1;
	const head = Math.ceil(keep / 2);
	const tail = keep - head;
	return `${s.slice(0, head)}…${s.slice(-tail)}`;
}
/**
* 自动同步状态 → Badge 语义色。
* success → ok（成功）/ skipped → warn（被动放弃）/ failed → error / partial → warn（未完整成功）。
*/
function autosyncBadgeKind(status) {
	switch (status) {
		case "success": return "ok";
		case "failed": return "error";
		default: return "warn";
	}
}
/**
* 统计同步历史条目。基于 projectSyncHistoryEntries 的投影结果（本函数不排序）。
* - snapshots：apply / push / pull / rollback（快照类）
* - autosync：kind='autosync' 的条目数
* - failed：自动同步 status='failed'（含 error）
* - skipped：自动同步 status='skipped' 或 'partial'（部分成功也计入「需注意」）
*/
function summarizeSyncHistory(rows) {
	let snapshots = 0;
	let autosync = 0;
	let failed = 0;
	let skipped = 0;
	for (const r of rows) if (r.kind === "autosync") {
		autosync += 1;
		const status = r.autosync?.status;
		if (status === "failed") failed += 1;
		else if (status === "skipped" || status === "partial") skipped += 1;
	} else snapshots += 1;
	return {
		total: rows.length,
		snapshots,
		autosync,
		failed,
		skipped
	};
}
/** 自动同步记录 → 展示行投影。 */
function projectAutosyncEntry(entry) {
	const parts = [directionLabel(entry.direction), autosyncStatusLabel(entry.status)];
	if (entry.skipReason !== void 0) parts.push(describeSkipReason(entry.skipReason));
	return {
		id: entry.createdAt,
		createdAt: entry.createdAt,
		direction: directionLabel(entry.direction),
		status: autosyncStatusLabel(entry.status),
		summary: parts.join(" · "),
		badgeKind: autosyncBadgeKind(entry.status),
		skipReasonText: entry.skipReason !== void 0 ? describeSkipReason(entry.skipReason) : void 0,
		conflictedSections: entry.conflictedSections,
		appliedSections: entry.appliedSections,
		error: entry.error,
		notifiedAt: entry.notifiedAt,
		hasDetail: entry.conflictedSections !== void 0 && entry.conflictedSections.length > 0 || entry.appliedSections !== void 0 && entry.appliedSections.length > 0 || entry.error !== void 0
	};
}
DEFAULT_RETENTION_POLICY.keepLast;
/** 中段省略（文件名：保留头尾，中段 …——尾部时间戳是唯一区分信息，不可被截掉）。 */
function midEllipsis(s, max = 26) {
	if (s.length <= max) return s;
	const keep = max - 1;
	const head = Math.ceil(keep / 2);
	const tail = keep - head;
	return `${s.slice(0, head)}…${s.slice(-tail)}`;
}
const initial$4 = {
	status: "loading",
	error: null,
	metas: [],
	selectedId: null,
	planning: false,
	plan: null,
	running: false,
	report: null,
	actionError: null
};
function statusLabel(t, status) {
	switch (status) {
		case "pending": return t("snapshots.status.pending");
		case "done": return t("snapshots.status.done");
		case "rolled-back": return t("snapshots.status.rolled-back");
		default: return t("snapshots.status.unknown");
	}
}
function statusBadgeKind(status) {
	switch (status) {
		case "pending": return "info";
		case "done": return "ok";
		case "rolled-back": return "warn";
		default: return "error";
	}
}
/** 计划动作的本地化描述前缀（kind 标签 → 字典；未知名回退 unknown，不透出英文原文） */
function actionKindLabel(t, kind) {
	switch (kind) {
		case "hostFileRestore": return t("snapshots.kind.hostFileRestore");
		case "hostFileRemove": return t("snapshots.kind.hostFileRemove");
		case "pluginRemove": return t("snapshots.kind.pluginRemove");
		case "fileRestore": return t("snapshots.kind.fileRestore");
		case "fileRemove": return t("snapshots.kind.fileRemove");
		case "credentialHint": return t("snapshots.kind.credentialHint");
		case "skip": return t("snapshots.kind.skip");
		default: return t("snapshots.kind.unknown");
	}
}
/**
* 从 runStore 恢复上次的快照面板状态（切页回 / 刷新后挂载）。
* 无敏感字段；plan/report 为纯数据，可安全序列化恢复。
* running 来自 store 镜像（刷新后经 runStore.resume() 以宿主 /runs 为权威重新置位）。
*/
function initFromStore$3() {
	const s = runStore.getSnapshot().snapshots;
	return {
		...initial$4,
		selectedId: s.selectedId,
		running: s.running,
		plan: s.plan,
		report: s.report,
		actionError: s.actionError,
		error: s.error
	};
}
function SnapshotsPanel({ api, t, recoveryApi, recoveryT }) {
	const [state, setState] = (0, react.useState)(initFromStore$3);
	/** 最新 state 镜像（commit/卸载 flush 读取，避免闭包过期值） */
	const stateRef = (0, react.useRef)(state);
	/** 挂载守卫：卸载后不再 setState（store 镜像仍执行，异步结果照常落库） */
	const mountedRef = (0, react.useRef)(true);
	/** dry-run 计划请求代数：快速切换快照时作废在途旧请求（防晚到响应覆盖新选择） */
	const planGeneration = (0, react.useRef)(0);
	/** 执行恢复的二次确认弹窗开关（危险操作） */
	const [confirmOpen, setConfirmOpen] = (0, react.useState)(false);
	/** P1-⑧：手动删除快照确认目标（null = 无） */
	const [deleteTarget, setDeleteTarget] = (0, react.useState)(null);
	/** P1-⑧：删除/置顶请求进行中（防重复提交） */
	const [managing, setManaging] = (0, react.useState)(false);
	/** 恢复计划预览弹窗开关（瞬态 UI；plan 仍镜像 runStore，切页/刷新恢复后可再次打开） */
	const [planOpen, setPlanOpen] = (0, react.useState)(false);
	/** Phase 7 迁移前咨询：恢复计划弹窗内的咨询报告（本地 state，非敏感） */
	const [consultReport, setConsultReport] = (0, react.useState)(null);
	const [consultLoading, setConsultLoading] = (0, react.useState)(false);
	/** 备份文件列表刷新信号：BackupScheduleCard「立即备份」完成后递增触发重载 */
	const [backupFilesTick, setBackupFilesTick] = (0, react.useState)(0);
	/**
	* m-retention：宿主真实保留策略（用户可配置；快照子视图的提示文案用它而非本地常量）。
	* 失败/旧版宿主未返回 → null，展示层回退 DEFAULT_RETENTION_POLICY（见 SNAPSHOT_RETENTION_LIMIT）。
	*/
	const [retentionPolicy, setRetentionPolicy] = (0, react.useState)(null);
	/** 二级子视图（快照 / 备份文件 / 恢复）：初始从 store 恢复，切换镜像 runStore */
	const [subTab, setSubTab] = (0, react.useState)(() => runStore.getSnapshot().snapshots.subTab ?? "restore");
	const switchSubTab = (next) => {
		setSubTab(next);
		runStore.patch({ snapshots: { subTab: next } });
	};
	/**
	* 统一提交入口：更新 stateRef → 挂载时 setState → **总是**镜像进 runStore。
	* 关键：镜像不依赖 effect flush —— 异步操作（dry-run 计划/执行恢复）完成回调
	* 在组件已卸载（切走页面）时也能把结果（plan/report）写进 store，切回恢复。
	*/
	const commit = (next) => {
		stateRef.current = next;
		if (mountedRef.current) setState(next);
		const store = runStore.getSnapshot().snapshots;
		runStore.patch({ snapshots: toSnapshotsStoreSlice({
			...next,
			backupDraft: store.backupDraft,
			importBackup: store.importBackup,
			subTab: store.subTab
		}) });
	};
	const patch = (p) => commit({
		...stateRef.current,
		...p
	});
	/** 卸载时置挂载守卫 + 最后镜像一次（防止「最后一次改动后立即切页」时丢状态）。 */
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
		const store = runStore.getSnapshot().snapshots;
		runStore.patch({ snapshots: toSnapshotsStoreSlice({
			...stateRef.current,
			backupDraft: store.backupDraft,
			importBackup: store.importBackup,
			subTab: store.subTab
		}) });
	}, []);
	const load = () => {
		patch({
			status: "loading",
			error: null
		});
		api.snapshots().then((metas) => {
			patch({
				status: "ready",
				metas
			});
		}, (err) => {
			patch({
				status: "error",
				error: err instanceof Error ? err.message : String(err)
			});
		});
	};
	(0, react.useEffect)(load, [api]);
	/**
	* m-retention：读取宿主保留策略（只读；用于「最多自动保留 N 个」提示文案的**真实分母**）。
	* 失败静默（回退缺省值展示），不打扰用户——策略编辑入口在定时备份设置卡内。
	*/
	(0, react.useEffect)(() => {
		let cancelled = false;
		api.backupSchedule().then((schedule) => {
			if (!cancelled) setRetentionPolicy(normalizeRetentionPolicy(schedule.retention));
		}, () => {
			if (!cancelled) setRetentionPolicy(null);
		});
		return () => {
			cancelled = true;
		};
	}, [api, backupFilesTick]);
	/** Phase 7 迁移前咨询：恢复计划弹窗打开时对选中快照生成咨询报告（只读，零写入）。 */
	(0, react.useEffect)(() => {
		if (!planOpen || state.selectedId === null) return;
		let cancelled = false;
		setConsultLoading(true);
		api.consult({
			type: "local-snapshot",
			id: state.selectedId,
			snapshotId: state.selectedId
		}).then((report) => {
			if (!cancelled) setConsultReport(report);
		}).catch(() => {
			if (!cancelled) setConsultReport(null);
		}).finally(() => {
			if (!cancelled) setConsultLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [
		planOpen,
		state.selectedId,
		api
	]);
	const select = (id) => {
		const generation = planGeneration.current + 1;
		planGeneration.current = generation;
		if (id === state.selectedId && state.plan !== null) {
			setPlanOpen(true);
			return;
		}
		patch({
			selectedId: id,
			plan: null,
			report: null,
			actionError: null,
			planning: true
		});
		setPlanOpen(true);
		api.restoreSnapshot(id, true).then((res) => {
			if (generation !== planGeneration.current) return;
			patch({
				planning: false,
				plan: res.plan ?? null
			});
		}, (err) => {
			if (generation !== planGeneration.current) return;
			patch({
				planning: false,
				actionError: err instanceof Error ? err.message : String(err)
			});
		});
	};
	const execute = () => {
		if (state.selectedId === null || state.running) return;
		patch({
			running: true,
			report: null,
			actionError: null
		});
		setConfirmOpen(false);
		runStore.watchRunning("restore", 500);
		api.restoreSnapshot(state.selectedId, false).then((res) => {
			patch({
				running: false,
				report: res.report ?? null
			});
		}, (err) => {
			patch({ running: false });
			toast.error(err instanceof Error ? err.message : String(err));
		}).finally(() => {
			runStore.stopRunWatch("restore");
		});
	};
	/** 从预览弹窗点「执行恢复」：关闭预览弹窗 + 打开二次确认弹窗（危险操作）。 */
	const requestExecute = () => {
		if (state.running || state.plan === null) return;
		setPlanOpen(false);
		setConfirmOpen(true);
	};
	const summary = () => {
		const s = state.plan?.summary;
		if (s === void 0) return "";
		return t("snapshots.summary", {
			hostFileRestores: String(s.hostFileRestores),
			hostFileRemoves: String(s.hostFileRemoves),
			pluginRemoves: String(s.pluginRemoves),
			fileRestores: String(s.fileRestores),
			fileRemoves: String(s.fileRemoves),
			credentialHints: String(s.credentialHints),
			skips: String(s.skips)
		});
	};
	/** P1-⑧：置顶/取消置顶（豁免自动保留清理；操作成功后刷新列表）。 */
	const togglePin = (meta) => {
		if (managing) return;
		setManaging(true);
		api.setSnapshotPinned(meta.id, !meta.pinned).then(() => {
			setManaging(false);
			load();
		}, (err) => {
			setManaging(false);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** P1-⑧：确认删除单个快照（危险操作：该回滚点不可恢复）。 */
	const doDeleteSnapshot = () => {
		const target = deleteTarget;
		if (target === null || managing) return;
		setManaging(true);
		api.deleteSnapshot(target.id).then((res) => {
			setManaging(false);
			setDeleteTarget(null);
			if (state.selectedId === target.id) patch({
				selectedId: null,
				plan: null,
				report: null
			});
			toast.ok(t("snapshots.deleted"));
			load();
		}, (err) => {
			setManaging(false);
			setDeleteTarget(null);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	const reportLine = (title, items, warn) => {
		if (items.length === 0) return null;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.inspectGroup,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupHeader,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("strong", {
					className: warn ? config_manager_module_css_default.warnText : void 0,
					children: [
						title,
						"（",
						items.length,
						"）"
					]
				})
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.reportScroll,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: config_manager_module_css_default.reportList,
					children: items.map((item, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: item }, `${title}-${i}`))
				})
			})]
		});
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.actionRow,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
					items: [
						{
							id: "restore",
							label: t("snapshots.subTab.restore")
						},
						{
							id: "files",
							label: t("snapshots.subTab.files")
						},
						{
							id: "schedule",
							label: t("snapshots.subTab.schedule")
						},
						{
							id: "recovery",
							label: t("snapshots.subTab.recovery")
						}
					],
					active: subTab,
					onChange: (id) => {
						switchSubTab(id);
					},
					ariaLabel: t("snapshots.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RefreshIcon, { size: 14 }),
					label: t("overview.refresh"),
					onClick: () => {
						load();
						setBackupFilesTick((n) => n + 1);
						toast.ok(t("toast.refreshed"));
					}
				})
			]
		}), subTab === "recovery" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(RecoveryPanel, {
			recoveryApi,
			t: recoveryT
		}) : subTab === "files" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BackupFilesCard, {
			api,
			t,
			refreshTick: backupFilesTick
		}) : subTab === "schedule" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BackupScheduleCard, {
			api,
			t,
			onBackupDone: () => {
				setBackupFilesTick((n) => n + 1);
			}
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			state.status === "loading" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("snapshots.loading") }),
			state.status === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "error",
				children: [state.error ?? t("common.unknownError"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: load,
					children: t("common.retry")
				})]
			}),
			state.status === "ready" && state.metas.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.emptyHero,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.emptyHeroSymbol,
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnapshotIcon, { size: 28 })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.emptyHeroTitle,
						children: t("snapshots.empty.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.emptyHeroBody,
						children: t("snapshots.empty.body")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.toolRow,
						style: {
							justifyContent: "center",
							marginBottom: 0
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => {
								switchSubTab("files");
							},
							children: t("snapshots.empty.viewFiles")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "primary",
							onClick: () => {
								api.runBackupNow().then(() => {
									setBackupFilesTick((n) => n + 1);
								}, () => {});
							},
							children: t("snapshots.empty.runBackup")
						})]
					})
				]
			}),
			state.status === "ready" && state.metas.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					style: { marginBottom: 8 },
					children: t("snapshots.retentionHint", { count: String((retentionPolicy ?? DEFAULT_RETENTION_POLICY).keepLast) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.tableWrap,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.tableScroll,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
							className: `${config_manager_module_css_default.dataTable} ${config_manager_module_css_default.tableFixed}`,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									style: { width: 118 },
									children: t("snapshots.createdAt")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("snapshots.sourceZip") }),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									style: { width: 68 },
									children: t("snapshots.status")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: config_manager_module_css_default.num,
									style: { width: 46 },
									children: t("snapshots.entries")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: config_manager_module_css_default.num,
									style: { width: 46 },
									children: t("snapshots.plugins")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
									className: config_manager_module_css_default.cellActions,
									style: { width: 120 },
									children: t("snapshots.actions")
								})
							] }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", {
								role: "listbox",
								"aria-label": t("snapshots.selectHint"),
								children: state.metas.map((meta) => {
									const selected = meta.id === state.selectedId;
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", {
										role: "option",
										"aria-selected": selected,
										"data-selected": selected ? "" : void 0,
										style: { cursor: "pointer" },
										tabIndex: 0,
										onClick: () => {
											select(meta.id);
										},
										onKeyDown: (e) => {
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												select(meta.id);
											}
										},
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												title: meta.id,
												children: [meta.pinned === true && "📌 ", new Date(meta.createdAt).toLocaleString()]
											}) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
												className: config_manager_module_css_default.dim,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: config_manager_module_css_default.mono,
													title: meta.sourceZip,
													style: { fontSize: "11px" },
													children: meta.sourceZip
												})
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: statusBadgeKind(meta.status),
												children: statusLabel(t, meta.status)
											}) }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
												className: config_manager_module_css_default.num,
												children: meta.entryCount
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
												className: config_manager_module_css_default.num,
												children: meta.beforePluginCount
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
												className: config_manager_module_css_default.cellActions,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
													className: config_manager_module_css_default.rowActions,
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
														size: "sm",
														disabled: managing,
														onClick: () => {
															togglePin(meta);
														},
														children: meta.pinned === true ? t("snapshots.unpin") : t("snapshots.pin")
													}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
														size: "sm",
														variant: "danger",
														disabled: managing,
														onClick: () => {
															setDeleteTarget({
																id: meta.id,
																createdAt: meta.createdAt
															});
														},
														children: t("snapshots.delete")
													})]
												})
											})
										]
									}, meta.id);
								})
							})]
						})
					})
				}),
				state.report !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupHeader,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("snapshots.reportTitle")
						})
					}),
					reportLine(t("snapshots.restored"), state.report.restored, false),
					reportLine(t("snapshots.removedPlugins"), state.report.removedPlugins, false),
					reportLine(t("snapshots.manualHints"), state.report.manualHints, true),
					reportLine(t("snapshots.failed"), state.report.failed.map((f) => `${f.item}: ${f.reason}`), true),
					reportLine(t("snapshots.skipped"), state.report.skipped, false)
				] })
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: planOpen,
				onClose: () => {
					setPlanOpen(false);
				},
				title: t("snapshots.planTitle"),
				wide: true,
				busy: state.running,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
						title: t("snapshots.planTitle"),
						onClose: () => {
							setPlanOpen(false);
						},
						closeDisabled: state.running
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
						scroll: true,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.hint,
								children: t("snapshots.selectHint")
							}),
							state.planning && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") }),
							state.plan !== null && summary() !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.hint,
								children: summary()
							}),
							state.plan !== null && state.plan.actions.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("snapshots.noActions") }),
							state.plan !== null && state.plan.actions.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.planScroll,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: config_manager_module_css_default.reportList,
									children: state.plan.actions.map((action, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: config_manager_module_css_default.kindTag,
											children: actionKindLabel(t, action.kind)
										}),
										" ",
										action.description,
										action.detail !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
											className: config_manager_module_css_default.hint,
											children: [
												"（",
												action.detail,
												"）"
											]
										})
									] }, `plan-${i}`))
								})
							}),
							consultLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: api.t("consult.loading") }),
							consultReport !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConsultCard, {
								report: consultReport,
								t: api.t
							}),
							state.actionError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "error",
								children: state.actionError
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Footer, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: state.running,
						onClick: () => {
							setPlanOpen(false);
						},
						children: t("common.cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "danger",
						disabled: state.running || state.plan === null || state.plan.actions.every((a) => a.kind === "skip"),
						onClick: requestExecute,
						children: state.running ? t("snapshots.executing") : t("snapshots.execute")
					})] })
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirmOpen,
				title: t("snapshots.confirmTitle"),
				message: t("snapshots.confirmRestore"),
				confirmLabel: t("snapshots.execute"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.running,
				onConfirm: execute,
				onCancel: () => {
					setConfirmOpen(false);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: deleteTarget !== null,
				title: t("snapshots.deleteConfirmTitle"),
				message: deleteTarget !== null ? t("snapshots.deleteConfirm", { time: new Date(deleteTarget.createdAt).toLocaleString() }) : void 0,
				confirmLabel: t("snapshots.delete"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: managing,
				onConfirm: doDeleteSnapshot,
				onCancel: () => {
					setDeleteTarget(null);
				}
			})
		] })]
	});
}
/** 间隔档位 → 字典键（t 的类型是字面量联合，switch 保持类型安全）。 */
function intervalLabel$1(t, interval) {
	switch (interval) {
		case "6h": return t("backupSchedule.interval.6h");
		case "12h": return t("backupSchedule.interval.12h");
		case "24h": return t("backupSchedule.interval.24h");
		case "7d": return t("backupSchedule.interval.7d");
		case "custom": return t("backupSchedule.interval.custom");
	}
}
/** 星期序号 → 字典键（0-6；switch 保持类型安全）。 */
function weekdayLabel(t, dayOfWeek) {
	switch (dayOfWeek) {
		case 0: return t("backupSchedule.weekday.sunday");
		case 1: return t("backupSchedule.weekday.monday");
		case 2: return t("backupSchedule.weekday.tuesday");
		case 3: return t("backupSchedule.weekday.wednesday");
		case 4: return t("backupSchedule.weekday.thursday");
		case 5: return t("backupSchedule.weekday.friday");
		case 6: return t("backupSchedule.weekday.saturday");
		default: return String(dayOfWeek);
	}
}
/** 上次运行状态 → 字典键。 */
function runStatusLabel(t, status) {
	switch (status) {
		case "success": return t("backupSchedule.status.success");
		case "skipped": return t("backupSchedule.status.skipped");
		case "failed": return t("backupSchedule.status.failed");
		default: return "—";
	}
}
function formatRunTime(iso) {
	if (iso === void 0 || iso === "") return "";
	const d = new Date(iso);
	return Number.isNaN(d.getTime()) ? iso : d.toLocaleString();
}
/**
* 定时全量备份设置卡：总开关 + 间隔档位 + 上次运行状态 + 保存 / 立即备份。
* 状态自持；草稿镜像 runStore.snapshots.backupDraft（未保存修改切页/刷新保留），
* 保存成功清草稿（宿主配置为权威）。
*/
function BackupScheduleCard({ api, t, onBackupDone }) {
	const [status, setStatus] = (0, react.useState)("loading");
	const [error, setError] = (0, react.useState)(null);
	const [draft, setDraft] = (0, react.useState)({
		enabled: false,
		interval: "24h"
	});
	const [saved, setSaved] = (0, react.useState)(null);
	const [saving, setSaving] = (0, react.useState)(false);
	const [running, setRunning] = (0, react.useState)(false);
	const [lastRun, setLastRun] = (0, react.useState)(void 0);
	const [lastRunDetail, setLastRunDetail] = (0, react.useState)(null);
	const [draftError, setDraftError] = (0, react.useState)(null);
	/** m-retention：保留策略草稿（三层；与 interval/customSchedule 同属草稿，随保存一起提交） */
	const [retentionDraft, setRetentionDraft] = (0, react.useState)(DEFAULT_RETENTION_POLICY);
	/** 挂载守卫：切页卸载后异步回调只更新 store（草稿），不再 setState */
	const mountedRef = (0, react.useRef)(true);
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
	}, []);
	const load = () => {
		setStatus("loading");
		setError(null);
		api.backupSchedule().then((schedule) => {
			if (!mountedRef.current) return;
			setSaved(schedule);
			setDraft(runStore.getSnapshot().snapshots.backupDraft ?? {
				enabled: schedule.enabled,
				interval: schedule.interval,
				...schedule.customSchedule !== void 0 ? { customSchedule: schedule.customSchedule } : {},
				retention: normalizeRetentionPolicy(schedule.retention)
			});
			setRetentionDraft(normalizeRetentionPolicy(runStore.getSnapshot().snapshots.backupDraft?.retention ?? schedule.retention));
			setLastRun(schedule.lastRunStatus);
			setLastRunDetail(formatRunTime(schedule.lastRunAt));
			setStatus("ready");
		}, (err) => {
			if (!mountedRef.current) return;
			setStatus("error");
			setError(err instanceof Error ? err.message : String(err));
		});
	};
	(0, react.useEffect)(load, [api]);
	const updateDraft = (next) => {
		setDraft(next);
		runStore.patch({ snapshots: { backupDraft: next } });
	};
	/** m-retention：更新保留策略草稿（随 enabled/interval 一起提交；同时镜像 runStore 防切页丢失） */
	const updateRetention = (next) => {
		setRetentionDraft(next);
		updateDraft({
			...draft,
			retention: next
		});
	};
	const save = () => {
		if (saving || running) return;
		const parsed = validateBackupScheduleDraft({
			...draft,
			retention: retentionDraft
		});
		if (!parsed.ok) {
			setDraftError(parsed.error);
			return;
		}
		setSaving(true);
		setDraftError(null);
		api.saveBackupSchedule(parsed.value).then((schedule) => {
			runStore.patch({ snapshots: { backupDraft: null } });
			if (!mountedRef.current) return;
			setSaved(schedule);
			setDraft({
				enabled: schedule.enabled,
				interval: schedule.interval,
				...schedule.customSchedule !== void 0 ? { customSchedule: schedule.customSchedule } : {},
				retention: normalizeRetentionPolicy(schedule.retention)
			});
			setRetentionDraft(normalizeRetentionPolicy(schedule.retention));
			setLastRun(schedule.lastRunStatus);
			setLastRunDetail(formatRunTime(schedule.lastRunAt));
			setSaving(false);
			toast.ok(t("backupSchedule.saved"));
		}, (err) => {
			if (!mountedRef.current) return;
			setSaving(false);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	const runNow = () => {
		if (running || saving) return;
		setRunning(true);
		setDraftError(null);
		api.runBackupNow().then((res) => {
			if (mountedRef.current) {
				setSaved(res.schedule);
				setLastRun(res.run.status);
				setLastRunDetail(res.run.zip !== void 0 && res.run.zip !== "" ? res.run.zip : res.run.skipReason !== void 0 ? describeSkipReason(res.run.skipReason) : formatRunTime(res.schedule.lastRunAt));
				setRunning(false);
			}
			onBackupDone?.();
		}, (err) => {
			if (!mountedRef.current) return;
			setRunning(false);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	const dirty = backupDraftDirty({
		...draft,
		retention: retentionDraft
	}, saved);
	const busy = saving || running;
	/**
	* 事实行「备份间隔」文案：整行事实统一取宿主权威值 saved（与事实行语义一致，
	* 也与 SyncSettingsView 的状态事实行同源——草稿编辑只在下方设置行体现，
	* 未保存前不改写事实行，避免把未生效的档位显示成已生效）。
	* custom 档在窄格内显示具体时刻（如「周一 03:00」），其余档位用档位文案；
	* 均由既有 locale 键拼出，不新增文案键。
	*/
	const intervalFact = saved === null || !saved.enabled ? "—" : saved.interval === "custom" ? `${weekdayLabel(t, saved.customSchedule?.dayOfWeek ?? 1)} ${String(saved.customSchedule?.hour ?? 3).padStart(2, "0")}:${String(saved.customSchedule?.minute ?? 0).padStart(2, "0")}` : intervalLabel$1(t, saved.interval);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.groupHeader,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("backupSchedule.title")
				}),
				lastRun !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: backupRunBadgeKind(lastRun),
					children: runStatusLabel(t, lastRun)
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					size: "sm",
					disabled: busy || !dirty,
					onClick: save,
					title: dirty ? void 0 : t("backupSchedule.saved"),
					children: saving ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : t("backupSchedule.save")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					size: "sm",
					disabled: busy || !(saved?.enabled ?? false),
					onClick: runNow,
					children: running ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, {}) : t("backupSchedule.runNow")
				})
			]
		}),
		status === "loading" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("backupSchedule.loading") }),
		status === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
			kind: "error",
			children: [t("backupSchedule.error"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
				variant: "primary",
				onClick: load,
				children: t("common.retry")
			})]
		}),
		status === "ready" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.factGrid,
				style: { marginTop: 8 },
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.factCell,
						style: { gridColumn: "span 2" },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factLabel,
							children: t("snapshots.status")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factValue,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: config_manager_module_css_default.infoValue,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusDot, { kind: saved?.enabled ?? false ? "ok" : "idle" }), saved?.enabled ?? false ? t("overview.state.on") : t("overview.state.off")]
							})
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.factCell,
						style: { gridColumn: "span 2" },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factLabel,
							children: t("backupSchedule.interval")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factValue,
							children: intervalFact
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.factCell,
						style: { gridColumn: "1 / -1" },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factLabel,
							children: t("backupSchedule.lastRun")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.factValue,
							children: lastRun === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: t("backupSchedule.never")
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: config_manager_module_css_default.infoValue,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: backupRunBadgeKind(lastRun),
									children: runStatusLabel(t, lastRun)
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.mono,
									children: lastRunDetail !== null && lastRunDetail !== "" ? lastRunDetail : "—"
								})]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginTop: 8 },
				children: t("backupSchedule.hint")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				style: {
					marginTop: 10,
					marginBottom: 0
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
						checked: draft.enabled,
						onChange: (checked) => {
							updateDraft({
								...draft,
								enabled: checked
							});
						},
						label: t("backupSchedule.enabled"),
						disabled: busy
					}),
					draft.enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
						className: config_manager_module_css_default.select,
						value: draft.interval,
						disabled: busy,
						style: { width: "auto" },
						onChange: (event) => {
							updateDraft({
								...draft,
								interval: event.target.value
							});
						},
						children: BACKUP_INTERVAL_OPTIONS.map((interval) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: interval,
							children: intervalLabel$1(t, interval)
						}, interval))
					}),
					draft.enabled && draft.interval === "custom" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
						className: config_manager_module_css_default.select,
						value: draft.customSchedule?.dayOfWeek ?? 1,
						disabled: busy,
						style: { width: "auto" },
						onChange: (event) => {
							updateDraft({
								...draft,
								customSchedule: {
									dayOfWeek: Number(event.target.value),
									hour: draft.customSchedule?.hour ?? 3,
									minute: draft.customSchedule?.minute ?? 0
								}
							});
						},
						children: WEEKDAY_OPTIONS.map((w) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: w.value,
							children: weekdayLabel(t, w.value)
						}, w.value))
					}),
					draft.enabled && draft.interval === "custom" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
						className: config_manager_module_css_default.select,
						value: draft.customSchedule?.hour ?? 3,
						disabled: busy,
						style: { width: "auto" },
						onChange: (event) => {
							updateDraft({
								...draft,
								customSchedule: {
									dayOfWeek: draft.customSchedule?.dayOfWeek ?? 1,
									hour: Number(event.target.value),
									minute: draft.customSchedule?.minute ?? 0
								}
							});
						},
						children: Array.from({ length: 24 }, (_, h) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
							value: h,
							children: [String(h).padStart(2, "0"), ":00"]
						}, h))
					}),
					draft.enabled && draft.interval === "custom" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
						className: config_manager_module_css_default.select,
						value: draft.customSchedule?.minute ?? 0,
						disabled: busy,
						style: { width: "auto" },
						onChange: (event) => {
							updateDraft({
								...draft,
								customSchedule: {
									dayOfWeek: draft.customSchedule?.dayOfWeek ?? 1,
									hour: draft.customSchedule?.hour ?? 3,
									minute: Number(event.target.value)
								}
							});
						},
						children: [
							0,
							15,
							30,
							45
						].map((m) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: m,
							children: String(m).padStart(2, "0")
						}, m))
					})
				]
			}),
			draft.enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginTop: 6 },
				children: t("backupSchedule.enabledHint")
			}),
			draft.enabled && draft.interval === "custom" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginTop: 6 },
				children: t("backupSchedule.customHint")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.groupHeader,
				style: { marginTop: 12 },
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("retention.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: !hasRetentionTiers(retentionDraft) && t("retention.tiersOff")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginBottom: 8 },
				children: t("retention.hint")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.actionRow,
				style: { marginBottom: 0 },
				children: RETENTION_FIELDS.map((field) => {
					const limits = RETENTION_FIELD_LIMITS[field];
					const unit = field === "keepLast" ? t("retention.unit") : field === "keepMonthly" ? t("retention.months") : t("retention.years");
					return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
						className: config_manager_module_css_default.field,
						style: { margin: 0 },
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: field === "keepLast" ? t("retention.keepLast") : field === "keepMonthly" ? t("retention.keepMonthly") : t("retention.keepYearly")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: config_manager_module_css_default.input,
								type: "number",
								min: limits.min,
								max: limits.max,
								step: 1,
								value: retentionDraft[field],
								disabled: busy,
								style: { width: 88 },
								"aria-label": t("retention.title"),
								onChange: (event) => {
									const raw = event.target.value;
									const parsed = raw === "" ? 0 : Number(raw);
									updateRetention({
										...retentionDraft,
										[field]: Number.isFinite(parsed) ? parsed : 0
									});
								}
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: unit
							})
						]
					}, field);
				})
			}),
			hasRetentionTiers(retentionDraft) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginTop: 6 },
				children: [
					t("retention.keepLastHint"),
					" · ",
					t("retention.keepMonthlyHint"),
					" · ",
					t("retention.keepYearlyHint")
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: { marginTop: 6 },
				children: t("retention.appliesTo")
			}),
			(saved?.consecutiveFailures ?? 0) > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: { marginTop: 8 },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "error",
					children: t("backupSchedule.consecutiveFailures", { count: String(saved.consecutiveFailures) })
				})
			})
		] }),
		draftError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "error",
			children: draftError
		})
	] });
}
/**
* 备份文件管理卡（m-backup-files）：列出 exports/ 下的导出 ZIP（手动导出 + 定时备份），
* 提供下载（复用 /download）/ 一键导入（切 Import 页 + 注入 zipPath，向导直接分析）/
* 查看与当前配置的差异（只读）/ 删除（危险操作二次确认）。
* 展示升级：搜索框进工具栏行，列表改数据表（名称主列 + 来源/大小/时间/备注内联元数据）。
*/
function BackupFilesCard({ api, t, refreshTick }) {
	const [status, setStatus] = (0, react.useState)("loading");
	const [error, setError] = (0, react.useState)(null);
	const [files, setFiles] = (0, react.useState)([]);
	const [deleting, setDeleting] = (0, react.useState)(false);
	const [confirmDelete, setConfirmDelete] = (0, react.useState)(null);
	/** P0-④：备份文件名搜索（client 过滤；仅文件名 + 备注匹配） */
	const [search, setSearch] = (0, react.useState)("");
	/** P1-⑦/P2-⑬：查看/对比弹窗状态（非空时渲染；zipPath 为受控 exports 路径） */
	const [inspect, setInspect] = (0, react.useState)(null);
	const mountedRef = (0, react.useRef)(true);
	const initialTick = (0, react.useRef)(refreshTick);
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
	}, []);
	const load = () => {
		setStatus("loading");
		setError(null);
		api.listBackupFiles().then((list) => {
			if (!mountedRef.current) return;
			setFiles(list);
			setStatus("ready");
		}, (err) => {
			if (!mountedRef.current) return;
			setStatus("error");
			setError(err instanceof Error ? err.message : String(err));
		});
	};
	(0, react.useEffect)(load, [api]);
	(0, react.useEffect)(() => {
		if (refreshTick === initialTick.current) return;
		load();
	}, [refreshTick]);
	/** 搜索过滤（P0-④）：文件名 + 备注子串匹配（大小写不敏感）；空查询不过滤 */
	const visibleFiles = search.trim() === "" ? files : files.filter((f) => {
		const q = search.trim().toLowerCase();
		return f.name.toLowerCase().includes(q) || (f.note ?? "").toLowerCase().includes(q);
	});
	const download = (file) => {
		api.download(file.path, { saveDialog: true }).catch((err) => {
			if (!mountedRef.current) return;
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** 一键导入：把备份文件 zipPath 交给现有导入向导（切 Import 页；向导挂载即分析） */
	const importBackup = (file) => {
		runStore.patch({
			view: "import",
			panel: "import",
			snapshots: { importBackup: {
				zipPath: file.path,
				name: file.name
			} }
		});
	};
	/** P1-⑦/P2-⑬：查看备份内容 + 与此备份的差异（只读，零写入）。 */
	const inspectBackup = (file) => {
		setInspect({
			name: file.name,
			loading: true,
			error: null,
			result: null
		});
		api.inspectBackup(file.path).then((result) => {
			if (!mountedRef.current) return;
			setInspect({
				name: file.name,
				loading: false,
				error: null,
				result
			});
		}, (err) => {
			if (!mountedRef.current) return;
			setInspect({
				name: file.name,
				loading: false,
				error: err instanceof Error ? err.message : String(err),
				result: null
			});
		});
	};
	const doDelete = () => {
		const file = confirmDelete;
		if (file === null || deleting) return;
		setDeleting(true);
		api.deleteBackupFile(file.name).then(() => {
			setDeleting(false);
			setConfirmDelete(null);
			toast.ok(t("backupFiles.deleted", { name: file.name }));
			load();
		}, (err) => {
			setDeleting(false);
			setConfirmDelete(null);
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** 修改时间（等宽 YYYY-MM-DD HH:mm；完整本地时间在 title）。 */
	const fullTime = (ms) => {
		const d = new Date(ms);
		if (Number.isNaN(d.getTime())) return "";
		const p = (n) => String(n).padStart(2, "0");
		return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
	};
	/** 备注展示：全问号/控制符（编码损坏）→ 可读文案，其余原样。 */
	const noteText = (note) => /^[?\s]+$/.test(note) ? t("backupFiles.noteUnreadable") : note;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
		className: `${config_manager_module_css_default.activityCard} ${config_manager_module_css_default.fillCard}`,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.groupHeader,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("backupFiles.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.badge,
						children: files.length
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					status === "ready" && files.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "search",
						className: config_manager_module_css_default.input,
						placeholder: t("backupFiles.searchPlaceholder"),
						value: search,
						style: {
							width: 170,
							height: 24
						},
						onChange: (e) => {
							setSearch(e.target.value);
						}
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.hint,
				style: {
					marginBottom: 8,
					flex: "none"
				},
				children: t("backupFiles.hint")
			}),
			status === "loading" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("backupFiles.loading") }),
			status === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "error",
				children: [error ?? t("common.unknownError"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: load,
					children: t("common.retry")
				})]
			}),
			status === "ready" && files.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("backupFiles.empty") }),
			status === "ready" && files.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: `${config_manager_module_css_default.tableWrap} ${config_manager_module_css_default.fillViewport}`,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.tableScroll,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
						className: `${config_manager_module_css_default.dataTable} ${config_manager_module_css_default.tableFixed} ${config_manager_module_css_default.tableCompact}`,
						role: "list",
						"aria-label": t("backupFiles.title"),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("backupFiles.name") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: config_manager_module_css_default.num,
								style: { width: 64 },
								children: t("backupFiles.size")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								style: { width: 130 },
								children: t("backupFiles.time")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
								className: config_manager_module_css_default.cellActions,
								style: { width: 152 },
								children: t("snapshots.actions")
							})
						] }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: visibleFiles.map((file) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.cellMain,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.cellTitle} ${config_manager_module_css_default.mono}`,
									title: file.name,
									children: midEllipsis(file.name, 20)
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: config_manager_module_css_default.cellMeta,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
										kind: file.source === "auto" ? "info" : "ok",
										title: file.source === "auto" ? t("backupFiles.source.auto") : t("backupFiles.source.manual"),
										children: [file.source === "auto" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ClockIcon, { size: 11 }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PencilIcon, { size: 11 }), file.source === "auto" ? t("backupFiles.source.auto") : t("backupFiles.source.manual")]
									}), file.note !== null && file.note !== void 0 && file.note !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.cellMetaNote,
										title: file.note,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(MessageIcon, { size: 11 }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: config_manager_module_css_default.cellMetaNoteText,
											children: noteText(file.note)
										})]
									})]
								})]
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: config_manager_module_css_default.num,
								children: formatBytes$1(file.sizeBytes)
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: config_manager_module_css_default.dim,
								title: new Date(file.mtimeMs).toLocaleString(),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.mono,
									style: { fontSize: "11px" },
									children: fullTime(file.mtimeMs)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: config_manager_module_css_default.cellActions,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: config_manager_module_css_default.rowActions,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DownloadIcon, { size: 14 }),
											label: t("backupFiles.download"),
											disabled: deleting,
											onClick: () => {
												download(file);
											}
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImportIcon, { size: 14 }),
											label: t("backupFiles.import"),
											disabled: deleting,
											onClick: () => {
												importBackup(file);
											}
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InspectIcon, { size: 14 }),
											label: t("backupFiles.inspect"),
											disabled: deleting,
											onClick: () => {
												inspectBackup(file);
											}
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: config_manager_module_css_default.rowDivider,
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DeleteIcon, { size: 14 }),
											label: t("backupFiles.delete"),
											danger: true,
											disabled: deleting,
											onClick: () => {
												setConfirmDelete(file);
											}
										})
									]
								})
							})
						] }, file.name)) })]
					})
				}), visibleFiles.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("backupFiles.searchEmpty") })]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirmDelete !== null,
				title: t("backupFiles.deleteConfirmTitle"),
				message: confirmDelete !== null ? t("backupFiles.deleteConfirm", { name: confirmDelete.name }) : void 0,
				confirmLabel: t("backupFiles.delete"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: deleting,
				onConfirm: doDelete,
				onCancel: () => {
					setConfirmDelete(null);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: inspect !== null,
				onClose: () => {
					setInspect(null);
				},
				title: t("backupFiles.inspect"),
				wide: true,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
					title: t("backupFiles.inspect"),
					onClose: () => {
						setInspect(null);
					}
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
					scroll: true,
					children: [
						inspect !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.hint,
							"data-testid": "inspect-backup-name",
							children: inspect.name
						}),
						inspect?.loading === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("backupFiles.inspectLoading") }),
						inspect?.error !== null && inspect?.error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "error",
							children: inspect.error
						}),
						inspect !== null && !inspect.loading && inspect.result === null && inspect.error === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("backupFiles.inspectEmpty") }),
						inspect?.result !== null && inspect?.result !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(BackupInspectView, {
							result: inspect.result,
							t
						})
					]
				})]
			})
		]
	});
}
/**
* 备份内容查看 + 「与此备份 diff」只读视图（P1-⑦ / P2-⑬，绑 src/ui/backup-inspect.ts 纯函数）：
* 分区清单 + 差异摘要徽章 + 逐项变更列表（限高内滚）。只读，不提供任何执行入口。
*/
function BackupInspectView({ result, t }) {
	const sections = inspectSections(result.analysis, result.plan);
	const summary = inspectSummary(result.analysis, result.plan);
	const groupLabelKey = (key) => {
		switch (key) {
			case "conflicts": return "backupFiles.inspectGroup.conflicts";
			case "changes": return "backupFiles.inspectGroup.changes";
			case "paths": return "backupFiles.inspectGroup.paths";
			case "skipped": return "backupFiles.inspectGroup.skipped";
			case "others": return "backupFiles.inspectGroup.others";
		}
	};
	const kindTagClass = (kind) => {
		switch (kind) {
			case "error": return config_manager_module_css_default.kindTagError ?? "";
			case "warn": return config_manager_module_css_default.kindTagWarn ?? "";
			case "ok": return config_manager_module_css_default.kindTagOk ?? "";
			case "info": return config_manager_module_css_default.kindTagInfo ?? "";
		}
	};
	const groups = inspectGroupedChanges(summary);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.inspectGroup,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("backupFiles.inspectSections")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: sections.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
					kind: "info",
					children: [
						s.section,
						": ",
						s.count
					]
				}, s.section))
			})]
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.inspectGroup,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("backupFiles.inspectDiff")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.statRow,
				children: [
					summary.willChange > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: t("import.preview.willChange", { count: String(summary.willChange) })
					}),
					summary.unchanged > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "ok",
						children: t("import.preview.unchanged", { count: String(summary.unchanged) })
					}),
					summary.conflicts > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "error",
						children: t("import.preview.conflicts", { count: String(summary.conflicts) })
					}),
					summary.secretsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: t("import.preview.secrets", { count: String(summary.secretsNeeded) })
					}),
					summary.pathMappingsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: t("import.preview.paths", { count: String(summary.pathMappingsNeeded) })
					}),
					summary.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: t("report.needsRestart")
					})
				]
			})]
		}),
		groups.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.inspectGroup,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("backupFiles.inspectItems")
			}), groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.inspectGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.groupHeader,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t(groupLabelKey(group.key))
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: group.kind,
						children: String(group.items.length)
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.reportScroll,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: config_manager_module_css_default.reportList,
						children: group.items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${config_manager_module_css_default.kindTag} ${kindTagClass(group.kind)}`,
								children: item.kind
							}),
							" ",
							item.adapter,
							": ",
							item.description
						] }, item.id))
					})
				})]
			}, group.key))]
		})
	] });
}
//#endregion
//#region src/client/sync/sync-api.ts
/** 同步端点常量（与 Host 半 src/index.ts API 常量保持一致） */
const SYNC_API = {
	base: "/api/dsh-config-manager/sync",
	status: "/api/dsh-config-manager/sync/status",
	push: "/api/dsh-config-manager/sync/push",
	pull: "/api/dsh-config-manager/sync/pull",
	githubStart: "/api/dsh-config-manager/sync/github/start",
	githubPoll: "/api/dsh-config-manager/sync/github/poll",
	githubCancel: "/api/dsh-config-manager/sync/github/cancel",
	githubValidate: "/api/dsh-config-manager/sync/github/validate",
	history: "/api/dsh-config-manager/sync/history",
	snapshotsList: "/api/dsh-config-manager/sync/snapshots-list",
	sync: "/api/dsh-config-manager/sync/sync",
	applyItems: "/api/dsh-config-manager/sync/apply-items",
	cancel: "/api/dsh-config-manager/sync/cancel",
	autosync: "/api/dsh-config-manager/sync/autosync",
	selection: "/api/dsh-config-manager/sync/selection",
	config: "/api/dsh-config-manager/sync/config",
	uiPrefs: "/api/dsh-config-manager/sync/ui-prefs",
	rollback: "/api/dsh-config-manager/sync/rollback"
};
/** 同步请求超时（ms）：与 Host 半 ROUTE_TIMEOUT_MS 对齐（git 网络操作可能较慢） */
const SYNC_TIMEOUT_MS = 3e5;
/** 解析 JSON 响应；非 2xx 时抛出带路由 error 消息的 ConfigManagerApiError（与 api.ts 同款） */
async function readJson$5(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** POST JSON 请求（带超时：宿主卡死时 UI 拿到明确错误而不是永远转圈） */
async function postJson$4(path, body, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), SYNC_TIMEOUT_MS);
	try {
		return await readJson$5(await fetch(path, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
			signal: controller.signal
		}), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(t("error.syncTimeout", { minutes: String(Math.round(SYNC_TIMEOUT_MS / 6e4)) }));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/** 远程同步浏览器半数据入口（备份与迁移页第 4 个 tab 的注入业务面） */
var SyncApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** 读取同步状态（配置 / 凭据 / 上次同步时间 / 分区数） */
	async status() {
		return readJson$5(await fetch(SYNC_API.status), this.t);
	}
	/** 推送：导出 portable 分区 → 提交到私有 Git 仓库 → 更新 sync-state */
	async push(payload) {
		return postJson$4(SYNC_API.push, payload, this.t);
	}
	/** P0-②：push 前只读预览（「将推送什么」，零写入远端）——body.preview=true 触发 */
	async pushPreview(payload) {
		return postJson$4(SYNC_API.push, {
			...payload,
			preview: true
		}, this.t);
	}
	/** 拉取差异预览：拉取远端最新快照 → 只读分析（绝不执行导入） */
	async pull(payload) {
		return postJson$4(SYNC_API.pull, payload, this.t);
	}
	/** GitHub OAuth device flow：发起登录，返回一次性用户码 + 授权页 URL + flowId */
	async githubStart() {
		return postJson$4(SYNC_API.githubStart, {}, this.t);
	}
	/** GitHub OAuth device flow：凭 flowId 轮询授权结果（成功时 token 已由 Host 写入 credentials） */
	async githubPoll(flowId) {
		return postJson$4(SYNC_API.githubPoll, { flowId }, this.t);
	}
	/** GitHub OAuth device flow：取消（丢弃宿主侧登记，零副作用） */
	async githubCancel(flowId) {
		return postJson$4(SYNC_API.githubCancel, { flowId }, this.t);
	}
	/** GitHub token 有效性校验（判定「是否已登录」：token 存在且 GitHub API 接受；
	*  401 → valid:false 引导重新登录；非 401 错误向上抛，UI 兜底不误判登出） */
	async githubValidate() {
		return postJson$4(SYNC_API.githubValidate, {}, this.t);
	}
	/** 同步历史：列出本地祖先快照 + 自动同步执行记录（按 createdAt 倒序合并）。 */
	async history() {
		return readJson$5(await fetch(SYNC_API.history), this.t);
	}
	/** 远端历史快照列表（供「选择历史快照」下拉）。 */
	async snapshotsList(payload) {
		return postJson$4(SYNC_API.snapshotsList, payload, this.t);
	}
	/** 一键同步第一步：拉取 → 差异确认会话（items 逐项确认，暂不导入）。 */
	async sync(payload) {
		return postJson$4(SYNC_API.sync, payload, this.t);
	}
	/** 一键同步第二步：按用户对差异项的逐项决策执行导入。 */
	async applyItems(payload) {
		return postJson$4(SYNC_API.applyItems, payload, this.t);
	}
	/** 取消/清理差异确认会话（丢弃临时 ZIP，零副作用）。 */
	async cancel(syncSessionId) {
		return postJson$4(SYNC_API.cancel, { syncSessionId }, this.t);
	}
	/** 自动同步状态（GET /sync/autosync 返回全部通道的 { git, webdav }，各自独立）。 */
	async autosyncStatusAll() {
		return readJson$5(await fetch(SYNC_API.autosync), this.t);
	}
	/** 自动同步状态（指定通道；从全部通道状态中取）。 */
	async autosyncStatus(transport = "git") {
		return (await this.autosyncStatusAll())[transport];
	}
	/** 自动同步配置更新（POST /sync/autosync；payload.transport 指定目标通道）。 */
	async autosyncUpdate(payload) {
		return postJson$4(SYNC_API.autosync, payload, this.t);
	}
	/** 保存同步分区选择（POST /sync/selection）：模式 + 勾选分区持久化到 Host。
	*  自动同步调度器与手动 push 共用此配置（刷新/重启后仍然生效）。 */
	async saveSelection(payload) {
		return postJson$4(SYNC_API.selection, payload, this.t);
	}
	/** 保存同步通道配置（POST /sync/config）：url/username/password（git: repoUrl/token）持久化。
	*  password/token 经 Host 写入 DSH credentials（值永不回传）；返回凭据布尔供 UI 刷新徽章。 */
	async saveConfig(payload) {
		return postJson$4(SYNC_API.config, payload, this.t);
	}
	/** 保存插件 UI 偏好（POST /sync/ui-prefs）：当前为上次选择的同步通道（ui-prefs.json，
	*  随 self 分区进导出备份）。纯偏好无 secret；失败由调用方静默降级（localStorage 兜底）。 */
	async saveUiPrefs(payload) {
		return postJson$4(SYNC_API.uiPrefs, payload, this.t);
	}
	/** 一键回滚：按 restoreId 调用 backup→rollback */
	async rollback(payload) {
		return postJson$4(SYNC_API.rollback, payload, this.t);
	}
	/** Phase 7 迁移前咨询（只读健康评分 + 建议）：对远端快照生成咨询报告。 */
	async consult(input) {
		return postJson$4("/api/dsh-config-manager/consult", input, this.t);
	}
};
//#endregion
//#region src/client/sync/SyncHistoryView.tsx
/**
* 同步历史视图（方案 A）：列出本地祖先快照目录（kind=apply）+ 自动同步执行记录
* （kind=autosync）。自动同步行显示时间/方向/状态/跳过冲突/应用分区，点开可看被跳过
* 冲突分区明细。
*
* 数据获取：GET /sync/history → { entries: SyncHistoryEntry[] }（按 createdAt 倒序合并）。
* 纯函数投影在 ./history-model.ts（node --test 可测），本组件只做装配。
*/
/** 通道徽章：git → GitHub，webdav → WebDAV；未知/缺失不渲染。 */
function ChannelBadge({ transport, t }) {
	if (transport === "git") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
		kind: "info",
		children: t("history.channelGit")
	});
	if (transport === "webdav") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
		kind: "info",
		children: t("history.channelWebdav")
	});
	return null;
}
function SyncHistoryView(props) {
	const { api, t } = props;
	const [loading, setLoading] = (0, react.useState)(true);
	const [error, setError] = (0, react.useState)(null);
	const [entries, setEntries] = (0, react.useState)([]);
	/** 重试计数（错误态点「重试」递增 → 重新加载） */
	const [reloadKey, setReloadKey] = (0, react.useState)(0);
	(0, react.useEffect)(() => {
		let cancelled = false;
		setLoading(true);
		(async () => {
			try {
				const data = await api.history();
				if (!cancelled) {
					setEntries(data.entries);
					setError(null);
					setLoading(false);
				}
			} catch (err) {
				if (!cancelled) {
					setError(err instanceof Error ? err.message : String(err));
					setLoading(false);
				}
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [api, reloadKey]);
	const rows = (0, react.useMemo)(() => projectSyncHistoryEntries(entries), [entries]);
	const stats = (0, react.useMemo)(() => summarizeSyncHistory(rows), [rows]);
	const snapshotRows = (0, react.useMemo)(() => rows.filter((r) => r.kind === "apply" || r.kind === "push" || r.kind === "pull" || r.kind === "rollback").map((r) => ({
		id: r.id,
		createdAt: r.createdAt,
		sectionCount: r.sectionCount ?? 0,
		reviewCount: r.reviewCount ?? 0
	})), [rows]);
	if (loading) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") });
	if (error) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
		error,
		onRetry: () => {
			setReloadKey((k) => k + 1);
		},
		retrying: loading,
		t: api.t
	});
	if (rows.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("history.empty") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: t("history.emptyHint") })] });
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: `${t("history.title")}（${rows.length}）` }),
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.statRow,
			"aria-label": t("history.stats.summary"),
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: t("history.stats.total", { count: String(stats.total) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: t("history.stats.snapshots", { count: String(stats.snapshots) })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: t("history.stats.autosync", { count: String(stats.autosync) })
				}),
				stats.failed > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "error",
					children: t("history.stats.failed", { count: String(stats.failed) })
				}),
				stats.skipped > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "warn",
					children: t("history.stats.skipped", { count: String(stats.skipped) })
				})
			]
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.tableWrap,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.tableScroll,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("table", {
					className: `${config_manager_module_css_default.dataTable} ${config_manager_module_css_default.tableFixed} ${config_manager_module_css_default.tableCompact}`,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
							style: { width: 116 },
							children: t("history.colTime")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", {
							style: { width: 96 },
							children: t("history.colKind")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("th", { children: t("history.colDetail") })
					] }) }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("tbody", { children: rows.map((r) => {
						if (r.kind === "autosync" && r.autosync !== void 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AutosyncRow, {
							entry: r.autosync,
							t
						}, r.id);
						const snap = snapshotRows.find((s) => s.id === r.id);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
								className: config_manager_module_css_default.dim,
								title: formatDateTimeFull(r.createdAt),
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.mono}`,
									style: { fontSize: "11px" },
									children: formatDateTime(r.createdAt)
								})
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: t("history.kindSnapshot")
							}) }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.cellMain,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: `${config_manager_module_css_default.cellTitle} ${config_manager_module_css_default.mono}`,
									title: r.id,
									children: midEllipsis$1(r.id)
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
									className: config_manager_module_css_default.cellMeta,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChannelBadge, {
										transport: r.transport,
										t
									}), snap !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
										snap.sectionCount,
										" ",
										t("history.sectionCount")
									] })]
								})]
							}) })
						] }, r.id);
					}) })]
				})
			})
		})
	] });
}
function AutosyncRow({ entry, t }) {
	const row = projectAutosyncEntry(entry);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("tr", { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", {
			className: config_manager_module_css_default.dim,
			title: formatDateTimeFull(row.createdAt),
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: `${config_manager_module_css_default.mono}`,
				style: { fontSize: "11px" },
				children: formatDateTime(row.createdAt)
			})
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
			kind: row.badgeKind,
			children: t("history.kindAutosync")
		}) }),
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("td", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.cellMain,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: config_manager_module_css_default.cellTitle,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ChannelBadge, {
							transport: entry.transport,
							t
						}),
						" ",
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: row.direction
						}),
						" ",
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: row.badgeKind,
							children: row.status
						}),
						entry.pushedSnapshotId !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							" · ",
							t("history.autosyncPush"),
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.mono,
								title: entry.pushedSnapshotId,
								children: midEllipsis$1(entry.pushedSnapshotId)
							})
						] }),
						entry.pulledSnapshotId !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							" · ",
							t("history.autosyncPull"),
							" ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.mono,
								title: entry.pulledSnapshotId,
								children: midEllipsis$1(entry.pulledSnapshotId)
							})
						] })
					]
				}),
				row.skipReasonText !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: row.skipReasonText
				}),
				row.error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
					className: config_manager_module_css_default.hint,
					title: row.error,
					children: [t("history.autosyncError", { error: "" }), row.error]
				})
			]
		}), row.hasDetail && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("history.detail") }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.reportList,
			children: [
				row.conflictedSections !== void 0 && row.conflictedSections.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.fieldLabel,
					children: t("history.autosyncConflicted", { sections: "" })
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.statRow,
					children: row.conflictedSections.map((sid) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: sid
					}, sid))
				})] }),
				row.appliedSections !== void 0 && row.appliedSections.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.fieldLabel,
					children: t("history.autosyncApplied", { sections: "" })
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.statRow,
					children: row.appliedSections.map((sid) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "ok",
						children: sid
					}, sid))
				})] }),
				row.error !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.fieldLabel,
					children: t("history.autosyncError", { error: "" })
				}), row.error] })
			]
		})] })] })
	] });
}
//#endregion
//#region src/client/sync/SyncConfirmView.tsx
/**
* 一键同步差异确认视图（方案 A §5 差异确认数据流）。
*
* 消费 POST /sync/sync 返回的 items[]，渲染逐项确认列表：
* - 每项：kindTag + description + severity + 「采用远端」复选框（默认勾选，可取消）；
* - Conflict 项：内联弹窗（用本地 / 用远端 / 跳过）；
* - 底部：「确认导入」（apply-items）+「取消」（cancel）。
*
* 全部渲染模型来自 ./sync-view.ts 纯函数（node 单测覆盖），组件只做装配 + 交互状态。
*/
function SyncConfirmView(props) {
	const { api, syncSessionId, snapshotId, items, needsReview, compatibility, t, decisions, onDecisionsChange, onCancel, onRollbackDone } = props;
	const states = (0, react.useMemo)(() => {
		const base = {};
		for (const it of items) base[it.itemId] = {
			adopted: it.defaultAdopt,
			resolution: void 0
		};
		if (decisions === null) return base;
		for (const [id, d] of Object.entries(decisions)) if (base[id] !== void 0) base[id] = {
			adopted: d.adopted,
			resolution: d.resolution
		};
		return base;
	}, [items, decisions]);
	const [phase, setPhase] = (0, react.useState)("idle");
	const [applyResult, setApplyResult] = (0, react.useState)(null);
	const [error, setError] = (0, react.useState)(null);
	/** Phase 7 迁移前咨询：远端快照咨询报告（本地 state，非敏感） */
	const [consultReport, setConsultReport] = (0, react.useState)(null);
	const [consultLoading, setConsultLoading] = (0, react.useState)(false);
	/** Phase 7 迁移前咨询：对远端快照生成咨询报告（只读，零写入）。失败静默。 */
	(0, react.useEffect)(() => {
		let cancelled = false;
		setConsultLoading(true);
		api.consult({
			type: "remote-snapshot",
			id: snapshotId,
			snapshotId
		}).then((report) => {
			if (!cancelled) setConsultReport(report);
		}).catch(() => {
			if (!cancelled) setConsultReport(null);
		}).finally(() => {
			if (!cancelled) setConsultLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [snapshotId, api]);
	const summary = (0, react.useMemo)(() => summarizeConfirmItems(items.map((it) => ({
		...it,
		adopt: states[it.itemId]?.adopted ?? it.defaultAdopt
	}))), [items, states]);
	const displayItems = (0, react.useMemo)(() => reviewItems(items), [items]);
	const setAdopted = (itemId, adopted) => {
		const existing = states[itemId] ?? {
			adopted: false,
			resolution: void 0
		};
		onDecisionsChange({
			...decisions ?? {},
			[itemId]: {
				adopted,
				resolution: existing.resolution
			}
		});
	};
	const setResolution = (itemId, resolution) => {
		const existing = states[itemId] ?? {
			adopted: false,
			resolution: void 0
		};
		onDecisionsChange({
			...decisions ?? {},
			[itemId]: {
				adopted: existing.adopted,
				resolution
			}
		});
	};
	const applyBulkDecision = (bulk) => {
		if (bulk.length === 0) return;
		const next = { ...decisions ?? {} };
		for (const d of bulk) {
			const existing = states[d.itemId] ?? {
				adopted: false,
				resolution: void 0
			};
			next[d.itemId] = {
				...existing,
				resolution: d.resolution,
				adopted: d.adopt
			};
		}
		onDecisionsChange(next);
	};
	const runApply = async () => {
		const unresolved = items.find((it) => it.kind === "Conflict" && states[it.itemId]?.adopted === true && states[it.itemId]?.resolution === void 0);
		if (unresolved !== void 0) {
			setError(t("syncflow.conflictUnresolved", { itemId: unresolved.itemId }));
			return;
		}
		setPhase("applying");
		setError(null);
		try {
			const adoptedMap = /* @__PURE__ */ new Map();
			for (const it of items) adoptedMap.set(it.itemId, states[it.itemId]?.adopted ?? false);
			const resolutions = /* @__PURE__ */ new Map();
			for (const it of items) {
				const res = states[it.itemId]?.resolution;
				if (res !== void 0) resolutions.set(it.itemId, res);
			}
			const adoptions = buildAdoptions(items, adoptedMap, resolutions);
			const result = await api.applyItems({
				syncSessionId,
				adoptions
			});
			setPhase(result.ok ? "done" : "failed");
			setApplyResult(result);
			if (result.ok) toast.ok(t("syncflow.importDone", { n: String(result.applied.length) }));
		} catch (err) {
			setPhase("failed");
			setError(err instanceof Error ? err.message : String(err));
		}
	};
	const runCancel = async () => {
		setPhase("cancelling");
		setError(null);
		try {
			await api.cancel(syncSessionId);
		} catch {}
		onCancel();
	};
	const runRollback = async (restoreId) => {
		setPhase("applying");
		setError(null);
		try {
			await api.rollback({ restoreId });
			setPhase("done");
			setApplyResult(null);
			toast.ok(t("syncflow.rollbackDone"));
			onRollbackDone?.();
		} catch (err) {
			setPhase("failed");
			setError(err instanceof Error ? err.message : String(err));
		}
	};
	const busy = phase === "applying" || phase === "cancelling";
	if (items.length === 0) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "12px"
		},
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "ok",
			children: t("syncflow.empty")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.actionRow,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
				disabled: busy,
				onClick: () => {
					runCancel();
				},
				children: t("common.close")
			})
		})]
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "12px"
		},
		children: [
			compatibility !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: compatibility
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: needsReview ? "warn" : "info",
				children: needsReview ? t("syncflow.needsReviewBadge") : t("syncflow.diffCount", { count: String(summary.total) })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.statRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: t("syncflow.diffCount", { count: String(summary.total) })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "ok",
						children: [
							t("syncflow.adoptRemote"),
							" ",
							summary.adopted
						]
					}),
					summary.error > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "error",
						children: [
							severityLabel("error", api.t),
							" × ",
							summary.error
						]
					}),
					summary.warning > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "warn",
						children: [
							severityLabel("warning", api.t),
							" × ",
							summary.warning
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.hint,
				children: t("syncflow.adoptHint")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: busy || displayItems.filter((it) => it.kind === "Conflict").length === 0,
						onClick: () => {
							applyBulkDecision(keepLocalAll(items));
						},
						children: t("syncflow.keepLocalAll")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: busy || displayItems.filter((it) => it.kind === "Conflict").length === 0,
						onClick: () => {
							applyBulkDecision(useRemoteAll(items));
						},
						children: t("syncflow.useRemoteAll")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("syncflow.bulkHint")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.confirmScroll,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.reportList,
					children: displayItems.map((it) => {
						const st = states[it.itemId] ?? { adopted: it.defaultAdopt };
						const isConflict = it.kind === "Conflict";
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: config_manager_module_css_default.checkboxRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: st.adopted,
										disabled: busy,
										onChange: (e) => {
											setAdopted(it.itemId, e.target.checked);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: kindLabel$1(it.kind, api.t) })]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: it.severity === "error" ? "error" : it.severity === "warning" ? "warn" : "info",
									children: severityLabel(it.severity, api.t)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: it.description }),
								isConflict && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConflictResolver, {
									item: it,
									resolution: st.resolution,
									busy,
									t,
									onResolve: (r) => {
										setResolution(it.itemId, r);
									}
								})
							]
						}, it.itemId);
					})
				})
			}),
			consultLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: api.t("consult.loading") }),
			consultReport !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConsultCard, {
				report: consultReport,
				t: api.t
			}),
			error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "error",
				children: error
			}),
			phase === "idle" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					disabled: busy || summary.adopted === 0,
					onClick: () => {
						runApply();
					},
					children: t("syncflow.confirmImport")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					disabled: busy,
					onClick: () => {
						runCancel();
					},
					children: t("syncflow.cancel")
				})]
			}),
			(phase === "done" || phase === "failed") && applyResult !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ApplyResultCard, {
				result: applyResult,
				busy,
				t,
				onRollback: runRollback
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.actionRow,
				style: { marginTop: "12px" },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					disabled: busy,
					onClick: () => {
						onCancel();
					},
					children: t("common.close")
				})
			})] }),
			(phase === "done" || phase === "failed") && applyResult === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(react_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.actionRow,
				style: { marginTop: "12px" },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					disabled: busy,
					onClick: () => {
						onCancel();
					},
					children: t("common.close")
				})
			}) })
		]
	});
}
function ConflictResolver({ item, resolution, busy, t, onResolve }) {
	const conflict = item.conflict;
	const options = [{
		value: "keepLocal",
		label: t("syncflow.conflictUseLocal")
	}, {
		value: "useRemote",
		label: t("syncflow.conflictUseRemote")
	}];
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.conflictItem,
		children: [
			item.detail !== void 0 && item.detail !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
				className: config_manager_module_css_default.conflictDetail,
				children: item.detail
			}),
			conflict?.diff !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("details", {
				className: config_manager_module_css_default.conflictDetail,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("summary", { children: t("syncflow.diff") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
					className: config_manager_module_css_default.diffScroll,
					children: conflict.diff
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.conflictOptions,
				children: options.map((opt) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.radioLabel,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "radio",
						name: `sync-conflict-${item.itemId}`,
						checked: resolution === opt.value,
						disabled: busy,
						onChange: () => {
							onResolve(opt.value);
						}
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: opt.label })]
				}, opt.value))
			})
		]
	});
}
function ApplyResultCard({ result, busy, t, onRollback }) {
	const ok = result.ok;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
		!ok && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "error",
			children: t("syncflow.importFailed")
		}),
		result.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "warn",
			children: t("syncflow.needsRestart")
		}),
		result.applied.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: config_manager_module_css_default.fieldLabel,
			children: t("syncflow.importedSections")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.statRow,
			children: result.applied.map((sid) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
				kind: "ok",
				children: sid
			}, sid))
		})] }),
		result.warnings.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
			className: config_manager_module_css_default.fieldLabel,
			children: t("syncflow.importWarnings")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
			className: config_manager_module_css_default.warnList,
			children: result.warnings.map((w, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: w }, i))
		})] }),
		result.restoreId !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
			variant: "danger",
			disabled: busy,
			onClick: () => {
				onRollback(result.restoreId);
			},
			children: busy ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("syncflow.rollingBack") }) : t("syncflow.rollback")
		})
	] });
}
//#endregion
//#region src/client/sync/SyncSettingsView.tsx
/**
* 远程同步面板（备份与迁移页的第 4 个 tab 内容）。
*
* 独立设置页壳（sectionHeader/close/自身 tab）已移除 —— tab 容器由
* ConfigManagerSection 统一渲染，本组件只输出内容体：
* - **同步通道入口卡**：展示当前通道 + 配置状态 + 凭据徽章；点「配置同步通道」
*   → 弹出**通道配置弹窗**（弹窗体系与市场操作弹窗一致，DESIGN.md §8.12：
*   dialogMask + dialogCard dialogWide + dialogHeaderRow + dialogClose +
*   dialogBodyScroll，零新增样式）；
* - **通道配置弹窗**：通道子 tab（GitHub（git）/ WebDAV）切换，两个通道的
*   配置表单、自动同步、同步模式、是否加密、远端快照**各自独立**；关闭弹窗
*   = 放弃本次操作（GitHub 登录流程进行中则一并取消，§8.12 约定）；
* - GitHub 子 tab：repoUrl（必填）+ 认证 token（可选，写入 DSH credentials 的提示）
*   + **GitHub OAuth device flow 登录**（登录块跟随 git 通道配置放在弹窗内：
*   未登录/失效时显示；git 可执行文件固定使用系统 PATH 中的 git）；
* - WebDAV 子 tab：url + username + password（密码写入 DSH credentials）+ 常见服务器预设；
* - 私有仓库强制提示横幅（仅 git 子 tab 常驻）；
* - 推送按钮 → SyncPushReport；拉取按钮 → SyncPullReport.changes 差异摘要；
* - 一键同步主按钮：拉取 → 差异确认会话（SyncConfirmView 逐项确认）→ 确认导入
*   （apply-items）→ 执行结果 + 一键回滚（restoreId）；「选择历史快照」下拉；
* - 自动同步设置（按通道）：总开关 + 间隔下拉 + 状态（上次运行 / 下次倒计时）；
* - 状态行：凭据配置 + 上次同步时间 + 通道（来自 GET /sync/status，组件挂载时加载）。
*
* 全部渲染模型来自 ./sync-view.ts 纯函数（node 单测覆盖），组件只做装配；
* 状态组件内自持（useState），同时经 toSyncStoreSlice() 镜像进模块级 runStore：
* 模块级单例保证「切 tab 不丢」，sessionStorage 白名单保证「刷新恢复」；
* token/webdav 密码/加密与解密密码仅内存（state），成功后清空（已写入 DSH
* credentials），持久化白名单硬性剔除（含 byChannel 内密码类字段），刷新后
* 清空、需要时重新输入。
*/
const initialGithub = {
	phase: "idle",
	flowId: "",
	userCode: "",
	verificationUri: "",
	interval: 5,
	error: null
};
const AUTOSYNC_INTERVAL_OPTIONS = [
	"5m",
	"15m",
	"30m",
	"60m",
	"6h",
	"12h",
	"24h"
];
const initial$3 = {
	loading: true,
	loadError: null,
	statusInfo: null,
	channel: readStoredChannel() ?? "git",
	repoUrl: "",
	token: "",
	webdavUrl: "",
	webdavUsername: "",
	webdavPassword: "",
	byChannel: {
		git: defaultChannelSyncState(),
		webdav: defaultChannelSyncState()
	},
	catalog: [],
	savingConfig: false,
	busy: null,
	pushReport: null,
	pullReport: null,
	pushPreview: {
		preview: null,
		open: false
	},
	confirmSession: null,
	confirmDecisions: null,
	lastRestoreId: null,
	error: null,
	github: initialGithub,
	githubSignedIn: null
};
/**
* 从 runStore 恢复上次的同步 UI 状态（切 tab 回 / 刷新后挂载）。
* 敏感字段（token/webdav 密码/加密与解密密码）只在内存切片里保留：切 tab 保留；
* 刷新后已被持久化白名单清空（applyPersisted 强制归零）→ 需要时重新输入。
* busy/savingConfig 为瞬态：切 tab 由模块级单例保留（切回仍显示进行中）；
* 刷新后白名单剔除 → 回复空闲。
*/
function initFromStore$2() {
	const s = runStore.getSnapshot().sync;
	return {
		...initial$3,
		channel: s.channel !== "git" ? s.channel : initial$3.channel,
		repoUrl: s.repoUrl,
		token: s.token,
		webdavUrl: s.webdavUrl,
		webdavUsername: s.webdavUsername,
		webdavPassword: s.webdavPassword,
		byChannel: {
			git: {
				...defaultChannelSyncState(),
				...s.byChannel.git
			},
			webdav: {
				...defaultChannelSyncState(),
				...s.byChannel.webdav
			}
		},
		busy: s.busy,
		savingConfig: s.savingConfig,
		pushReport: s.pushReport,
		pullReport: s.pullReport,
		pushPreview: s.pushPreview ?? {
			preview: null,
			open: false
		},
		confirmSession: s.confirmSession,
		confirmDecisions: s.confirmDecisions,
		lastRestoreId: s.lastRestoreId,
		error: s.error,
		loadError: s.loadError
	};
}
function SyncSettingsView({ api, t }) {
	const [state, setState] = (0, react.useState)(initFromStore$2);
	const uiT = api.t;
	/** 最新 state 镜像（commit/自动保存 flush 读取，避免闭包过期值） */
	const stateRef = (0, react.useRef)(state);
	/** 挂载守卫：卸载后不再 setState（store 镜像仍执行，异步结果照常落库） */
	const mountedRef = (0, react.useRef)(true);
	/** 通道配置弹窗开关（瞬态 UI：切 tab/刷新不持久化，弹窗不自动重开；DESIGN.md §8.12 约定） */
	const [channelOpen, setChannelOpen] = (0, react.useState)(false);
	/**
	* 统一提交入口：更新 stateRef → 挂载时 setState → **总是**镜像进 runStore。
	* 关键：镜像不依赖 effect flush —— 异步操作（push/pull/sync）完成回调在组件
	* 已卸载（切走 tab）时也能把结果写进 store，切回 tab 时 initFromStore 恢复。
	*/
	const commit = (next) => {
		stateRef.current = next;
		if (mountedRef.current) setState(next);
		runStore.patch({ sync: toSyncStoreSlice(next) });
	};
	const patch = (p) => commit({
		...stateRef.current,
		...p
	});
	/** 更新指定通道的 byChannel 状态（子 tab 切换后 loadSnapshots 等场景用）。 */
	const patchChannelState = (ch, p) => commit({
		...stateRef.current,
		byChannel: {
			...stateRef.current.byChannel,
			[ch]: {
				...stateRef.current.byChannel[ch],
				...p
			}
		}
	});
	/** 更新当前激活通道的 byChannel 状态。 */
	const patchChannel = (p) => patchChannelState(state.channel, p);
	/** 当前激活通道的设置状态（自动同步/模式/加密/快照）。 */
	const chState = state.byChannel[state.channel];
	/** GitHub 流程态（不进 store 切片；commit 的镜像写幂等无害）。 */
	const patchGithub = (p) => commit({
		...stateRef.current,
		github: {
			...stateRef.current.github,
			...p
		}
	});
	/** GitHub 轮询定时器（卸载/取消时清理，防止泄漏与跨流程串扰） */
	const githubPollTimer = (0, react.useRef)(null);
	/** 通道配置自动保存：防抖 timer + 待发 payload（关闭设置页前 flush，不丢输入） */
	const saveTimer = (0, react.useRef)(null);
	const pendingSave = (0, react.useRef)(null);
	/** 保存请求在途（防重入：保存中又排入新改动 → 完成后补发最新 payload） */
	const savingRef = (0, react.useRef)(false);
	/** 正在拉取远端快照列表（按通道独立防抖/防并发） */
	const loadingSnapshotsRef = (0, react.useRef)({
		git: false,
		webdav: false
	});
	/** 挂载时读取同步状态（配置回填 + 上次同步时间 + 凭据状态 + 两通道 autosync/selection） */
	const loadStatus = async () => {
		patch({
			loading: true,
			loadError: null
		});
		try {
			const info = await api.status();
			const savedChannel = info.transport?.type === "webdav" ? "webdav" : "git";
			const remembered = info.lastSyncChannel ?? readStoredChannel();
			const catalog = info.syncSections !== void 0 ? syncSectionOptions(info.syncSections) : [];
			const selByCh = info.syncSelectionByChannel;
			const autoByCh = info.autosyncByChannel;
			const backfill = (ch, cur) => {
				const sel = selByCh?.[ch];
				const auto = autoByCh?.[ch];
				return {
					syncMode: sel?.mode === "advanced" ? "advanced" : "default",
					syncSections: sel !== void 0 ? sel.sections : recommendedSyncSections(info.syncSections ?? []),
					encrypt: sel?.encrypt ?? false,
					includeSecrets: sel?.includeSecrets ?? false,
					autosyncEnabled: auto?.enabled ?? false,
					autosyncInterval: auto?.interval ?? "30m"
				};
			};
			patch({
				loading: false,
				statusInfo: info,
				channel: remembered ?? savedChannel,
				repoUrl: info.repoUrl ?? "",
				webdavUrl: info.webdav?.url ?? "",
				webdavUsername: info.webdav?.username ?? "",
				catalog,
				byChannel: {
					git: {
						...stateRef.current.byChannel.git,
						...backfill("git", stateRef.current.byChannel.git)
					},
					webdav: {
						...stateRef.current.byChannel.webdav,
						...backfill("webdav", stateRef.current.byChannel.webdav)
					}
				}
			});
			if (autoByCh === void 0) loadAutosync();
			const activeCh = remembered ?? savedChannel;
			const preset = activeCh === "webdav" ? info.webdav?.url ?? "" : info.repoUrl ?? "";
			if (info.configured && preset.trim() !== "") loadSnapshots(preset, activeCh);
			validateGithub();
		} catch (err) {
			patch({
				loading: false,
				loadError: err instanceof Error ? err.message : String(err)
			});
		}
	};
	/** 读取全部通道的自动同步状态（GET /sync/autosync 返回 { git, webdav }）。 */
	const loadAutosync = async () => {
		try {
			const all = await api.autosyncStatusAll();
			patchChannelState("git", {
				autosync: all.git,
				autosyncEnabled: all.git.enabled,
				autosyncInterval: all.git.interval
			});
			patchChannelState("webdav", {
				autosync: all.webdav,
				autosyncEnabled: all.webdav.enabled,
				autosyncInterval: all.webdav.interval
			});
		} catch (err) {
			toast.error(`${t("toast.autosyncLoadFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/**
	* 读取指定通道的远端历史快照列表（「选择历史快照」下拉数据源）。
	* urlOverride / channelOverride：挂载时地址刚从 status 回填、state.patch 尚未生效，
	* 直接传 info 的地址与通道避免竞态读旧值；缺省读当前 state。
	* 无远端地址时静默跳过（不发无效请求，下拉留空）。
	* announce：仅用户主动点「刷新快照」时为 true —— 成功给出回执，避免用户
	* 在「远端确实没有快照」与「刷新没生效」之间无从判断（M-18）。 */
	const loadSnapshots = async (urlOverride, channelOverride, announce = false) => {
		const ch = channelOverride ?? stateRef.current.channel;
		if (loadingSnapshotsRef.current[ch]) return;
		loadingSnapshotsRef.current[ch] = true;
		patchChannelState(ch, { loadingSnapshots: true });
		try {
			const s = stateRef.current;
			if (ch === "webdav") {
				const url = urlOverride ?? s.webdavUrl;
				if (url.trim() === "") return;
				const res = await api.snapshotsList({
					transport: "webdav",
					url: url.trim(),
					username: s.webdavUsername.trim() !== "" ? s.webdavUsername.trim() : void 0,
					password: s.webdavPassword !== "" ? s.webdavPassword : void 0
				});
				patchChannelState("webdav", { snapshots: res.snapshots });
			} else {
				const repo = urlOverride ?? s.repoUrl;
				if (repo.trim() === "") return;
				const res = await api.snapshotsList({
					transport: "git",
					repoUrl: repo.trim(),
					token: s.token.trim() !== "" ? s.token.trim() : void 0
				});
				patchChannelState("git", { snapshots: res.snapshots });
			}
			if (announce) toast.ok(t("toast.snapshotsRefreshed"));
		} catch (err) {
			toast.error(`${t("toast.snapshotsLoadFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		} finally {
			loadingSnapshotsRef.current[ch] = false;
			patchChannelState(ch, { loadingSnapshots: false });
		}
	};
	(0, react.useEffect)(() => {
		loadStatus();
	}, []);
	/** 卸载时置挂载守卫 + 清理轮询定时器 + 补发未落盘的通道配置改动 + 最后镜像一次状态
	*  （组件销毁后不得再 setState/发请求；store 镜像为纯内存/白名单写，安全）。
	*  异步操作完成回调仍会走 commit 写 store（见 commit 注释），结果不丢。 */
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
		if (githubPollTimer.current !== null) clearTimeout(githubPollTimer.current);
		if (saveTimer.current !== null) {
			clearTimeout(saveTimer.current);
			saveTimer.current = null;
		}
		const pending = pendingSave.current;
		if (pending !== null) api.saveConfig(pending).catch(() => {});
		runStore.patch({ sync: toSyncStoreSlice(stateRef.current) });
	}, []);
	/** 表单快照 → 请求体（按当前通道构建；空串不携带；password 仅内存不发回显） */
	const payload = () => {
		if (state.channel === "webdav") return {
			transport: "webdav",
			url: state.webdavUrl.trim() !== "" ? state.webdavUrl.trim() : void 0,
			username: state.webdavUsername.trim() !== "" ? state.webdavUsername.trim() : void 0,
			password: state.webdavPassword !== "" ? state.webdavPassword : void 0
		};
		return {
			transport: "git",
			repoUrl: state.repoUrl.trim(),
			token: state.token.trim() !== "" ? state.token : void 0
		};
	};
	/** 按给定 state 构建「保存配置」请求体；当前通道远端地址未就绪（webdav url / git repoUrl 为空）
	*  → 返回 null（无可保存内容，自动保存跳过）。password/token 仅非空携带（空 = 沿用已保存凭据）。 */
	const buildConfigPayload = (s) => {
		if (s.channel === "webdav") {
			const url = s.webdavUrl.trim();
			if (url === "") return null;
			return {
				transport: "webdav",
				url,
				username: s.webdavUsername.trim() !== "" ? s.webdavUsername.trim() : void 0,
				password: s.webdavPassword !== "" ? s.webdavPassword : void 0
			};
		}
		const repoUrl = s.repoUrl.trim();
		if (repoUrl === "") return null;
		return {
			transport: "git",
			repoUrl,
			token: s.token.trim() !== "" ? s.token.trim() : void 0
		};
	};
	/** 实际发送保存请求：成功清空已入库的 password/token（与 push 一致）并刷新凭据徽章；
	*  失败保留表单值以便重试。防重入：保存中又排入新改动 → 完成后自动补发最新 payload。
	*  announce：仅「手动点保存」为 true —— 自动保存（输入防抖）成功时不弹 Toast，
	*  否则每次停顿改字段都会刷一条通知；但**失败必须始终提示**（用户的改动没落盘）。 */
	const doSaveConfig = async (payloadToSave, announce = false) => {
		if (savingRef.current) {
			pendingSave.current = payloadToSave;
			return;
		}
		savingRef.current = true;
		patch({ savingConfig: true });
		try {
			const saved = await api.saveConfig(payloadToSave);
			const s = stateRef.current;
			const next = {
				...s,
				savingConfig: false
			};
			next.webdavPassword = s.webdavPassword !== "" && s.webdavPassword !== payloadToSave.password ? s.webdavPassword : "";
			next.token = s.token !== "" && s.token !== payloadToSave.token ? s.token : "";
			if (s.statusInfo !== null) {
				const info = {
					...s.statusInfo,
					configured: true,
					credentialConfigured: saved.credentialConfigured
				};
				if (saved.webdav !== void 0) info.webdav = {
					url: s.statusInfo.webdav?.url,
					username: s.statusInfo.webdav?.username,
					usernameConfigured: saved.webdav.usernameConfigured,
					passwordConfigured: saved.webdav.passwordConfigured
				};
				next.statusInfo = info;
			}
			commit(next);
			if (announce) toast.ok(t("toast.configSaved"));
			if (payloadToSave.transport !== "webdav" && saved.credentialConfigured) validateGithub();
		} catch (err) {
			toast.error(`${t("toast.configSaveFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
			patch({ savingConfig: false });
		} finally {
			savingRef.current = false;
			if (pendingSave.current !== null) {
				const p = pendingSave.current;
				pendingSave.current = null;
				doSaveConfig(p, announce);
			}
		}
	};
	/** 表单改动 → 防抖 600ms 自动保存（取最新 state；地址未就绪时跳过）。 */
	const scheduleConfigSave = () => {
		const payloadToSave = buildConfigPayload(stateRef.current);
		pendingSave.current = payloadToSave;
		if (saveTimer.current !== null) clearTimeout(saveTimer.current);
		if (payloadToSave === null) {
			saveTimer.current = null;
			return;
		}
		saveTimer.current = setTimeout(() => {
			saveTimer.current = null;
			flushConfigSave();
		}, 600);
	};
	/** 立即保存（「保存配置」按钮 / 防抖到点）：优先待发改动，否则按当前表单值。
	*  announce：仅手动点按钮为 true —— 自动保存成功不弹回执（见 doSaveConfig）。 */
	const flushConfigSave = (announce = false) => {
		if (saveTimer.current !== null) {
			clearTimeout(saveTimer.current);
			saveTimer.current = null;
		}
		const pending = pendingSave.current;
		pendingSave.current = null;
		const payloadToSave = pending ?? buildConfigPayload(stateRef.current);
		if (payloadToSave === null) {
			if (announce) toast.info(t("toast.configNothingToSave"));
			return;
		}
		doSaveConfig(payloadToSave, announce);
	};
	/** 发起 GitHub 登录：取设备码 → 展示一次性用户码 + 授权页 → 开始轮询 */
	const runGithubStart = async () => {
		patchGithub({
			phase: "starting",
			error: null
		});
		try {
			const info = await api.githubStart();
			patchGithub({
				phase: "waiting",
				flowId: info.flowId,
				userCode: info.userCode,
				verificationUri: info.verificationUri,
				interval: info.interval
			});
			scheduleGithubPoll(info.flowId, Math.max(info.interval, 1) * 1e3);
		} catch (err) {
			patchGithub({
				phase: "error",
				error: err instanceof Error ? err.message : String(err)
			});
		}
	};
	/** 排定一次 GitHub 轮询（先清旧定时器，避免重复轮询） */
	const scheduleGithubPoll = (flowId, delayMs) => {
		if (githubPollTimer.current !== null) clearTimeout(githubPollTimer.current);
		githubPollTimer.current = setTimeout(() => {
			runGithubPoll(flowId);
		}, delayMs);
	};
	/** 轮询 GitHub 授权结果：pending 继续等；success 刷新凭据状态；终止态展示结果 */
	const runGithubPoll = async (flowId) => {
		patchGithub({ phase: "polling" });
		try {
			const poll = await api.githubPoll(flowId);
			if (poll.status === "pending") {
				patchGithub({ phase: "waiting" });
				scheduleGithubPoll(flowId, poll.pollDelayMs ?? Math.max(state.github.interval, 1) * 1e3);
				return;
			}
			const message = githubPollMessage(poll, uiT);
			if (poll.status === "success") {
				patch({
					githubSignedIn: true,
					github: {
						...stateRef.current.github,
						phase: "success",
						error: null
					}
				});
				loadStatus();
			} else patchGithub({
				phase: "error",
				error: message
			});
		} catch (err) {
			patchGithub({
				phase: "error",
				error: err instanceof Error ? err.message : String(err)
			});
		}
	};
	/** 取消登录：停轮询 + 通知宿主丢弃设备码登记 + 复位 UI */
	const runGithubCancel = async () => {
		if (githubPollTimer.current !== null) {
			clearTimeout(githubPollTimer.current);
			githubPollTimer.current = null;
		}
		const flowId = state.github.flowId;
		patchGithub(initialGithub);
		if (flowId !== "") try {
			await api.githubCancel(flowId);
		} catch {}
	};
	/**
	* 校验 GitHub token 是否有效（「已登录」判定 → 决定登录块显隐）。
	* 挂载 / 登录成功 / 保存凭据后调用；已确认登录（githubSignedIn===true）时跳过
	* （避免反复网络调用）。401 → 未登录：显示登录块并提示重新登录；网络等其余
	* 错误 → 保持现状（不误判登出，已登录用户不被打扰；下次进入页面会再校验）。
	*/
	const validateGithub = async () => {
		if (stateRef.current.githubSignedIn === true) return;
		try {
			const res = await api.githubValidate();
			patch({ githubSignedIn: res.configured && res.valid });
		} catch {}
	};
	/** 打开通道配置弹窗：登录态尚未校验时补一次校验（决定 Git 子 tab 登录块显隐）。 */
	const openChannelDialog = () => {
		setChannelOpen(true);
		if (stateRef.current.githubSignedIn === null) validateGithub();
	};
	/**
	* 关闭通道配置弹窗 = 放弃本次操作（§8.12 约定）：GitHub 登录流程进行中则取消
	* （停轮询 + 通知宿主丢弃设备码登记），保存中（savingConfig）时禁止关闭。
	*/
	const closeChannelDialog = () => {
		if (stateRef.current.savingConfig) return;
		const phase = stateRef.current.github.phase;
		if (phase === "starting" || phase === "waiting" || phase === "polling") runGithubCancel();
		setChannelOpen(false);
	};
	/** 组装 push/preview 的公共载荷（分区选择 + 加密选项；密码仅内存） */
	const buildPushPayload = () => {
		const selection = chState.syncMode === "advanced" && chState.syncSections.length > 0 ? { sections: chState.syncSections } : {};
		const cryptoOpts = chState.encrypt || chState.includeSecrets ? {
			encrypt: true,
			encryptPassword: chState.encryptPassword,
			includeSecrets: chState.includeSecrets
		} : {};
		return {
			...payload(),
			...selection,
			...cryptoOpts
		};
	};
	/** P0-②：push 前只读预览（弹窗确认流程第一步）——不写远端，只展示「将推送什么」。 */
	const runPushPreview = async () => {
		patch({
			busy: "push",
			pushReport: null,
			pullReport: null
		});
		try {
			const preview = await api.pushPreview(buildPushPayload());
			patch({
				busy: null,
				pushPreview: {
					preview,
					open: true
				}
			});
		} catch (err) {
			patch({ busy: null });
			toast.error(`${t("toast.pushPreviewFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/** P0-②：确认弹窗里点「确认推送」→ 真正推送（复用既有 push 语义）。 */
	const runPush = async () => {
		patch({
			busy: "push",
			pushReport: null,
			pullReport: null
		});
		try {
			const report = await api.push(buildPushPayload());
			patch({
				busy: null,
				pushReport: report,
				pushPreview: {
					preview: null,
					open: false
				},
				...report.ok ? {
					token: "",
					webdavPassword: ""
				} : {}
			});
			if (report.ok) {
				patchChannel({
					encryptPassword: "",
					encryptPasswordConfirm: ""
				});
				toast.ok(t("toast.pushDone"));
				loadSnapshots();
			} else toast.error(t("toast.pushFailed"));
		} catch (err) {
			patch({ busy: null });
			toast.error(`${t("toast.pushFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	const runPull = async () => {
		patch({
			busy: "pull",
			pullReport: null,
			pushReport: null
		});
		try {
			const decrypt = chState.decryptPassword !== "" ? { decryptPassword: chState.decryptPassword } : {};
			const report = await api.pull({
				...payload(),
				...decrypt
			});
			patch({
				busy: null,
				pullReport: report,
				token: "",
				webdavPassword: ""
			});
			patchChannel({ decryptPassword: "" });
			toast.ok(t("toast.pullDone"));
		} catch (err) {
			patch({ busy: null });
			toast.error(`${t("toast.pullFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/** 保存当前通道的分区选择到 Host（持久化；自动同步与手动 push 共用；失败提示但不阻断本地 UI）。
	*  附带持久化加密/密钥开关（密码不持久化）。 */
	const saveSelection = async (mode, sections, encrypt = chState.encrypt, includeSecrets = chState.includeSecrets) => {
		try {
			await api.saveSelection({
				transport: state.channel,
				mode,
				sections,
				encrypt,
				includeSecrets
			});
		} catch (err) {
			toast.error(`${t("toast.selectionSaveFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/** 切换当前通道的同步模式并持久化（高级模式勾选沿用当前勾选，切回时保留）。 */
	const setSyncMode = (mode) => {
		patchChannel({ syncMode: mode });
		saveSelection(mode, state.byChannel[state.channel].syncSections);
	};
	/** 当前通道高级模式勾选分区开关（增删 byChannel 勾选并立即持久化）。 */
	const toggleSyncSection = (id, checked) => {
		const cur = state.byChannel[state.channel].syncSections;
		const next = checked ? cur.includes(id) ? cur : [...cur, id] : cur.filter((s) => s !== id);
		patchChannel({ syncSections: next });
		saveSelection(state.byChannel[state.channel].syncMode, next);
	};
	/** 当前通道加密备份开关（持久化）。取消加密时若勾选着导出密钥 → 一并取消（密钥必须加密，安全底线）。 */
	const setEncrypt = (next) => {
		patchChannel({
			encrypt: next,
			includeSecrets: next ? chState.includeSecrets : false,
			...next ? {} : {
				encryptPassword: "",
				encryptPasswordConfirm: ""
			}
		});
		saveSelection(state.byChannel[state.channel].syncMode, state.byChannel[state.channel].syncSections, next, next ? chState.includeSecrets : false);
	};
	/** 当前通道导出密钥开关（持久化）。勾选时自动联动选中加密（密钥绝不明文进同步通道）。 */
	const setIncludeSecrets = (next) => {
		patchChannel({
			includeSecrets: next,
			encrypt: next ? true : chState.encrypt
		});
		saveSelection(state.byChannel[state.channel].syncMode, state.byChannel[state.channel].syncSections, next ? true : chState.encrypt, next);
	};
	/** 默认（快速导出）模式的推荐分区数（渲染计数用；catalog 已只含 portable）。 */
	const recommendedSectionCount = state.catalog.filter((c) => c.defaultIncluded).length;
	/** 一键同步：拉取 → 差异确认会话（先取消旧会话，再发起新会话）。 */
	const runSync = async (snapshotId) => {
		if (state.confirmSession !== null) try {
			await api.cancel(state.confirmSession.syncSessionId);
		} catch {}
		patch({
			busy: "sync",
			confirmSession: null,
			confirmDecisions: null,
			lastRestoreId: null
		});
		try {
			const decrypt = chState.decryptPassword !== "" ? { decryptPassword: chState.decryptPassword } : {};
			const session = await api.sync({
				...payload(),
				...snapshotId !== void 0 && snapshotId !== "" ? { snapshotId } : {},
				...decrypt
			});
			if (!session.ok) {
				patch({ busy: null });
				toast.error(`${t("toast.syncStartFailed")}：${redact(session.message ?? t("syncflow.syncFailed"))}`);
				return;
			}
			patch({
				busy: null,
				confirmSession: session,
				confirmDecisions: null,
				token: "",
				webdavPassword: ""
			});
			patchChannel({ decryptPassword: "" });
			loadSnapshots();
		} catch (err) {
			patch({ busy: null });
			toast.error(`${t("toast.syncStartFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/** 用户取消差异确认：清除会话，复位到空闲。 */
	const cancelConfirm = () => {
		patch({
			confirmSession: null,
			confirmDecisions: null
		});
	};
	/** 从 SyncConfirmView 透传的一键回滚完成信号。 */
	const onRollbackApplied = () => {
		patch({ lastRestoreId: null });
	};
	/** 切换通道子 tab：记录偏好 + 拉取目标通道远端快照。busy 时禁用切换（防并发操作）。 */
	const switchChannel = (ch) => {
		if (ch === state.channel || state.busy !== null) return;
		patch({ channel: ch });
		writeStoredChannel(ch);
		api.saveUiPrefs({ lastSyncChannel: ch }).catch(() => {});
		loadSnapshots(void 0, ch);
	};
	const toggleAutosync = async (enabled) => {
		patchChannel({ autosyncEnabled: enabled });
		try {
			const updated = await api.autosyncUpdate({
				transport: state.channel,
				enabled,
				interval: chState.autosyncInterval
			});
			patchChannel({
				autosync: updated,
				autosyncEnabled: updated.enabled,
				autosyncInterval: updated.interval
			});
			toast.ok(t("toast.autosyncUpdated"));
		} catch (err) {
			toast.error(`${t("toast.autosyncUpdateFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	const updateAutosyncInterval = async (interval) => {
		patchChannel({ autosyncInterval: interval });
		try {
			const updated = await api.autosyncUpdate({
				transport: state.channel,
				enabled: chState.autosyncEnabled,
				interval
			});
			patchChannel({
				autosync: updated,
				autosyncEnabled: updated.enabled,
				autosyncInterval: updated.interval
			});
			toast.ok(t("toast.autosyncUpdated"));
		} catch (err) {
			toast.error(`${t("toast.autosyncUpdateFailed")}：${redact(err instanceof Error ? err.message : String(err))}`);
		}
	};
	/** 活动通道的远端地址是否就绪（git=repoUrl 非空；webdav=webdavUrl 非空） */
	const remoteReady = computeRemoteReady(state.channel, state.repoUrl, state.webdavUrl);
	const buttons = computeSyncButtons(state.busy, remoteReady, uiT);
	const pushView = pushReportView(state.pushReport, uiT);
	const pullView = pullReportView(state.pullReport, uiT);
	const githubView = computeGithubLoginView(state.github.phase, state.github.userCode, state.github.verificationUri, state.github.error, uiT);
	/** GitHub 流程进行中（请求设备码 / 等待授权 / 轮询）：禁用 push/pull，避免无凭据操作 */
	const githubBusy = state.github.phase === "starting" || state.github.phase === "waiting" || state.github.phase === "polling";
	/** 高级模式勾选为空 → 禁止推送（默认模式不受限）。 */
	const pushSelectionReady = chState.syncMode !== "advanced" || chState.syncSections.length > 0;
	/** 加密推送校验：勾选加密时密码非空且两次一致（密码仅内存）。 */
	const encryptInvalid = (chState.encrypt || chState.includeSecrets) && (chState.encryptPassword === "" || chState.encryptPassword !== chState.encryptPasswordConfirm);
	const autosyncText = chState.autosync !== null ? autosyncStatusText(chState.autosync, uiT) : t("autosync.statusNever");
	/** 距下次自动同步剩余 ms（null = 从未运行；0 = 已到期） */
	const autosyncCountdownMs = chState.autosync !== null && chState.autosync.elapsedMs >= 0 ? computeAutosyncCountdown(chState.autosync.elapsedMs, autosyncIntervalMs(chState.autosync.interval)) : null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("section.label"),
				subtitle: t("section.description")
			}),
			state.loadError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
				error: `${t("load.failed")}：${redact(state.loadError)}`,
				onRetry: () => {
					loadStatus();
				},
				retrying: state.loading,
				t: api.t
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("channel.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("channel.openHint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: state.channel === "webdav" ? t("channel.webdav") : t("channel.git")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: remoteReady ? "ok" : "warn",
							children: remoteReady ? t("channel.configured") : t("channel.notConfigured")
						}),
						state.channel === "git" && state.statusInfo?.credentialConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "ok",
							children: t("config.tokenSaved")
						}),
						state.channel === "webdav" && state.statusInfo?.webdav?.passwordConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "ok",
							children: t("webdav.passwordSaved")
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.factGrid,
					style: { marginTop: 8 },
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.factCell,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factLabel,
								children: t("syncStatus.state")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factValue,
								children: state.statusInfo?.configured === true ? t("channel.configured") : t("channel.notConfigured")
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.factCell,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factLabel,
								children: t("syncStatus.lastSync")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factValue,
								children: state.statusInfo?.lastSyncAt !== void 0 ? new Date(state.statusInfo.lastSyncAt).toLocaleString() : "—"
							})]
						}),
						state.statusInfo?.sectionCount !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.factCell,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factLabel,
								children: t("syncStatus.sections")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${config_manager_module_css_default.factValue} ${config_manager_module_css_default.mono}`,
								children: String(state.statusInfo.sectionCount)
							})]
						}),
						remoteReady && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.factCell,
							style: { gridColumn: "1 / -1" },
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factLabel,
								children: t("channel.currentUrl")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.factValue,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.mono,
									children: (state.channel === "webdav" ? state.webdavUrl : state.repoUrl).slice(0, 60)
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRowTop,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: openChannelDialog,
						children: t("channel.open")
					})
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: channelOpen,
				onClose: closeChannelDialog,
				title: t("channel.title"),
				wide: true,
				busy: state.savingConfig,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
					title: t("channel.title"),
					onClose: closeChannelDialog,
					closeDisabled: state.savingConfig
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
					scroll: true,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.modeTabs,
							role: "tablist",
							children: channelTabModels(state.channel, state.busy !== null || state.savingConfig).map((tab) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								role: "tab",
								"aria-selected": tab.active,
								"data-active": tab.active ? "" : void 0,
								className: config_manager_module_css_default.modeTab,
								disabled: tab.disabled,
								onClick: () => {
									switchChannel(tab.channel);
								},
								children: tab.channel === "webdav" ? t("channel.webdav") : t("channel.git")
							}, tab.channel))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.modeHint,
							children: t("channel.perChannelHint")
						}),
						state.channel === "git" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "warn",
							children: privateRepoHint(uiT)
						}),
						state.channel === "git" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupLabel,
								children: t("config.title")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: config_manager_module_css_default.field,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.fieldLabel,
										children: t("config.repoUrl")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										className: config_manager_module_css_default.input,
										value: state.repoUrl,
										placeholder: "https://github.com/user/private-repo.git",
										disabled: state.busy !== null,
										onChange: (e) => {
											patch({ repoUrl: e.target.value });
											scheduleConfigSave();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.hint,
										children: t("config.repoUrlHint")
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: config_manager_module_css_default.field,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.fieldLabel,
										children: [
											t("config.token"),
											" ",
											state.statusInfo?.credentialConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "ok",
												children: t("config.tokenSaved")
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "password",
										className: config_manager_module_css_default.input,
										value: state.token,
										autoComplete: "off",
										placeholder: t("config.tokenPlaceholder"),
										disabled: state.busy !== null,
										onChange: (e) => {
											patch({ token: e.target.value });
											scheduleConfigSave();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.hint,
										children: t("config.tokenHint", { ref: "DSH_CONFIG_MANAGER_SYNC_TOKEN" })
									})
								]
							}),
							state.githubSignedIn === false && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								state.statusInfo?.credentialConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
									kind: "warn",
									children: t("github.tokenInvalid")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.groupLabel,
									children: t("github.title")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: t("github.description")
								}),
								githubView.showCode && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: config_manager_module_css_default.statRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
										kind: "info",
										children: [
											t("github.userCode"),
											"：",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: githubView.userCode })
										]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
										className: config_manager_module_css_default.ghostButton,
										href: githubView.verificationUri,
										target: "_blank",
										rel: "noreferrer",
										style: { textDecoration: "none" },
										children: t("github.openAuth")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: config_manager_module_css_default.actionRow,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
										variant: "primary",
										disabled: !githubView.canStart || state.busy !== null,
										onClick: () => {
											runGithubStart();
										},
										children: githubView.startLabel
									}), githubView.canCancel && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
										disabled: state.busy !== null,
										onClick: () => {
											runGithubCancel();
										},
										children: t("github.cancel")
									})]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: config_manager_module_css_default.statRow,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: githubView.phase === "success" ? "ok" : githubView.phase === "error" ? "error" : "warn",
										children: githubView.statusText
									})
								}),
								githubView.phase === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: t("config.tokenHint", { ref: "DSH_CONFIG_MANAGER_SYNC_TOKEN" })
								})
							] })
						] }),
						state.channel === "webdav" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupLabel,
								children: t("webdav.title")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: t("webdav.presetHint")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
								className: config_manager_module_css_default.select,
								value: presetIdForUrl(state.webdavUrl),
								disabled: state.busy !== null,
								onChange: (e) => {
									const p = presetById(e.target.value);
									patch({ webdavUrl: p.url });
									scheduleConfigSave();
								},
								children: WEBDAV_PRESETS.map((p) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: p.id,
									children: p.label
								}, p.id))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: config_manager_module_css_default.field,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.fieldLabel,
										children: t("webdav.url")
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										className: config_manager_module_css_default.input,
										value: state.webdavUrl,
										placeholder: "https://dav.example.com/dav/config",
										disabled: state.busy !== null,
										onChange: (e) => {
											patch({ webdavUrl: e.target.value });
											scheduleConfigSave();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.hint,
										children: t("webdav.urlHint")
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: config_manager_module_css_default.field,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.fieldLabel,
										children: [
											t("webdav.username"),
											" ",
											state.statusInfo?.webdav?.usernameConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "ok",
												children: t("config.tokenSaved")
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "text",
										className: config_manager_module_css_default.input,
										value: state.webdavUsername,
										autoComplete: "off",
										placeholder: "alice",
										disabled: state.busy !== null,
										onChange: (e) => {
											patch({ webdavUsername: e.target.value });
											scheduleConfigSave();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.hint,
										children: t("webdav.usernameHint")
									})
								]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
								className: config_manager_module_css_default.field,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.fieldLabel,
										children: [
											t("webdav.password"),
											" ",
											state.statusInfo?.webdav?.passwordConfigured === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "ok",
												children: t("webdav.passwordSaved")
											})
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "password",
										className: config_manager_module_css_default.input,
										value: state.webdavPassword,
										autoComplete: "off",
										placeholder: t("webdav.passwordPlaceholder"),
										disabled: state.busy !== null,
										onChange: (e) => {
											patch({ webdavPassword: e.target.value });
											scheduleConfigSave();
										}
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: config_manager_module_css_default.hint,
										children: t("webdav.passwordHint", { ref: "DSH_CONFIG_MANAGER_SYNC_WEBDAV_PASSWORD" })
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.actionRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "primary",
								disabled: state.busy !== null || state.savingConfig || !remoteReady,
								onClick: () => {
									flushConfigSave(true);
								},
								children: state.savingConfig ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("config.saving") }) : t("config.save")
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("config.saveHint")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("mode.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("mode.hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.tabRow,
					role: "tablist",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": chState.syncMode === "default",
						"data-active": chState.syncMode === "default" ? "" : void 0,
						className: config_manager_module_css_default.modeTab,
						disabled: state.busy !== null,
						onClick: () => {
							setSyncMode("default");
						},
						children: t("mode.default")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": chState.syncMode === "advanced",
						"data-active": chState.syncMode === "advanced" ? "" : void 0,
						className: config_manager_module_css_default.modeTab,
						disabled: state.busy !== null,
						onClick: () => {
							setSyncMode("advanced");
						},
						children: t("mode.advanced")
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.modeHint,
					children: chState.syncMode === "default" ? t("mode.defaultHint") : t("mode.advancedHint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("mode.persistHint")
				}),
				chState.syncMode === "advanced" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("mode.sectionsTitle")
					}),
					state.catalog.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("common.loading")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupList,
						children: syncSectionGroups(state.catalog).map((g) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
							className: config_manager_module_css_default.groupCard,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.groupHeader,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.groupLabel,
									children: g.label
								}), g.note !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.groupNote,
									children: g.note
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.groupItems,
								children: g.items.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
									checked: chState.syncSections.includes(s.id),
									onChange: (checked) => {
										toggleSyncSection(s.id, checked);
									},
									label: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.categoryItem,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: config_manager_module_css_default.categoryName,
												children: s.label
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: config_manager_module_css_default.categoryDesc,
												children: s.description
											}),
											s.syncOptIn ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "warn",
												children: t("mode.sectionOptIn")
											}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "info",
												children: t("mode.sectionPortable")
											}),
											s.defaultIncluded && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "ok",
												children: t("mode.sectionRecommended")
											})
										]
									})
								}, s.id))
							})]
						}, g.group))
					}),
					state.catalog.some((s) => s.syncOptIn) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("mode.optInHint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("mode.sectionsHint")
					}),
					selectedOptInSections(state.catalog, chState.syncSections).length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
						kind: "warn",
						children: t("mode.optInWarn", { names: selectedOptInSections(state.catalog, chState.syncSections).map((s) => s.label).join("、") })
					}),
					chState.syncSections.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
						kind: "warn",
						children: t("mode.atLeastOne")
					})
				] }),
				chState.syncMode === "default" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: state.catalog.length === 0 ? t("common.loading") : t("mode.defaultCount", { n: String(recommendedSectionCount) })
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("mode.security")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
					checked: chState.encrypt,
					onChange: setEncrypt,
					label: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.categoryName,
						children: t("mode.encrypt")
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("mode.encryptHint")
				}),
				chState.encrypt && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.secretFields,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: config_manager_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: t("mode.password")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "password",
								className: config_manager_module_css_default.input,
								value: chState.encryptPassword,
								autoComplete: "new-password",
								onChange: (e) => {
									patchChannel({ encryptPassword: e.target.value });
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: config_manager_module_css_default.field,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: t("mode.passwordConfirm")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								type: "password",
								className: config_manager_module_css_default.input,
								value: chState.encryptPasswordConfirm,
								autoComplete: "new-password",
								onChange: (e) => {
									patchChannel({ encryptPasswordConfirm: e.target.value });
								}
							})]
						}),
						chState.encryptPassword !== "" && chState.encryptPassword !== chState.encryptPasswordConfirm && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.formError,
							children: t("mode.passwordMismatch")
						}),
						chState.encryptPassword === "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.formError,
							children: t("mode.passwordRequired")
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
					checked: chState.includeSecrets,
					onChange: setIncludeSecrets,
					label: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.categoryName,
						children: t("mode.includeSecrets")
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("mode.includeSecretsHint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("mode.encryptAutosyncNotice")
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
				className: config_manager_module_css_default.field,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.fieldLabel,
						children: t("mode.decryptPassword")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "password",
						className: config_manager_module_css_default.input,
						value: chState.decryptPassword,
						autoComplete: "off",
						onChange: (e) => {
							patchChannel({ decryptPassword: e.target.value });
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("mode.decryptPasswordHint")
					})
				]
			}) }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: state.busy !== null || !remoteReady,
						onClick: () => {
							runSync();
						},
						children: state.busy === "sync" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("syncflow.syncing") }) : t("syncflow.button")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: !buttons.canPush || githubBusy || !pushSelectionReady || encryptInvalid,
						onClick: () => {
							runPushPreview();
						},
						children: state.busy === "push" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: buttons.pushLabel }) : buttons.pushLabel
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: !buttons.canPull || githubBusy,
						onClick: () => {
							runPull();
						},
						children: state.busy === "pull" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: buttons.pullLabel }) : buttons.pullLabel
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.snapshotPickerRow,
				style: { marginBottom: chState.snapshots.length === 0 && !chState.loadingSnapshots ? 0 : 10 },
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					style: {
						flex: "1 1 auto",
						minWidth: 0
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.fieldLabel,
						children: t("syncflow.selectSnapshot")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
						className: config_manager_module_css_default.select,
						value: chState.selectedSnapshotId,
						disabled: state.busy !== null,
						onFocus: () => {
							loadSnapshots();
						},
						onMouseDown: () => {
							loadSnapshots();
						},
						onClick: () => {
							loadSnapshots();
						},
						onChange: (e) => {
							const id = e.target.value;
							patchChannel({ selectedSnapshotId: id });
							runSync(id === "" ? void 0 : id);
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: "",
							children: t("syncflow.latestSnapshot")
						}), chState.snapshots.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
							value: s.id,
							children: [s.id, t("syncflow.snapshotOption", {
								date: s.createdAt.slice(0, 10),
								count: String(s.sectionCount)
							})]
						}, s.id))]
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.pickerAction,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: state.busy !== null || chState.loadingSnapshots || !remoteReady,
						onClick: () => {
							loadSnapshots(void 0, void 0, true);
						},
						title: t("syncflow.refreshSnapshots"),
						children: chState.loadingSnapshots ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("syncflow.refreshingSnapshots") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RefreshIcon, { size: 14 }),
							" ",
							t("syncflow.refreshSnapshots")
						] })
					})
				})]
			}),
			chState.snapshots.length === 0 && !chState.loadingSnapshots && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: `${config_manager_module_css_default.hint} ${config_manager_module_css_default.snapshotPickerHint}`,
				children: t("syncflow.noSnapshots")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("autosync.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("autosync.description")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.checkboxRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: chState.autosyncEnabled,
						disabled: state.busy !== null,
						onChange: (e) => {
							toggleAutosync(e.target.checked);
						}
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("autosync.enable") })]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.field,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.fieldLabel,
							children: t("autosync.interval")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("select", {
							className: config_manager_module_css_default.input,
							value: chState.autosyncInterval,
							disabled: state.busy !== null,
							onChange: (e) => {
								updateAutosyncInterval(e.target.value);
							},
							children: AUTOSYNC_INTERVAL_OPTIONS.map((iv) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: iv,
								children: intervalLabel(iv, t)
							}, iv))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("autosync.intervalHint")
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: chState.autosync?.lastRunStatus === "failed" ? "error" : chState.autosync?.lastRunStatus === "skipped" ? "warn" : "info",
						children: autosyncText
					}), autosyncCountdownMs !== null && chState.autosyncEnabled && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: autosyncCountdownMs <= 0 ? t("autosync.due") : t("autosync.nextRun", { time: formatIntervalDuration(autosyncCountdownMs, uiT) })
					})]
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SyncHistoryView, {
				api,
				t
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: state.pushPreview.open,
				onClose: () => {
					patch({ pushPreview: {
						preview: null,
						open: false
					} });
				},
				title: t("syncflow.pushPreviewTitle"),
				wide: true,
				busy: state.busy === "push",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
						title: t("syncflow.pushPreviewTitle"),
						onClose: () => {
							patch({ pushPreview: {
								preview: null,
								open: false
							} });
						},
						closeDisabled: state.busy === "push"
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Body, {
						scroll: true,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(PushPreviewCard, {
							preview: state.pushPreview.preview,
							t,
							uiT
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Footer, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: state.busy === "push",
						onClick: () => {
							patch({ pushPreview: {
								preview: null,
								open: false
							} });
						},
						children: t("syncflow.cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: state.busy === "push",
						onClick: () => {
							runPush();
						},
						children: state.busy === "push" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("syncflow.pushing") }) : t("syncflow.pushConfirm")
					})] })
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: state.pushReport !== null && pushView !== null,
				onClose: () => {
					patch({ pushReport: null });
				},
				title: t("push.title"),
				cardStyle: {
					width: "min(640px, 100%)",
					maxHeight: "85vh"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
						title: t("push.title"),
						onClose: () => {
							patch({ pushReport: null });
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Body, {
						scroll: true,
						style: { maxHeight: "70vh" },
						children: pushView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: pushView.kind === "ok" ? "ok" : "error",
								children: pushView.headline
							}),
							pushView.sections.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: t("sections.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.statRow,
								children: pushView.sections.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: s
								}, s))
							})] }),
							pushView.warnings.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: t("warnings.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
								className: config_manager_module_css_default.warnList,
								children: pushView.warnings.map((w, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: w }, i))
							})] })
						] })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Footer, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: () => {
							patch({ pushReport: null });
						},
						children: t("common.close")
					}) })
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: state.pullReport !== null && pullView !== null,
				onClose: () => {
					patch({ pullReport: null });
				},
				title: t("pull.title"),
				cardStyle: {
					width: "min(720px, 100%)",
					maxHeight: "85vh"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
						title: t("pull.title"),
						onClose: () => {
							patch({ pullReport: null });
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Body, {
						scroll: true,
						style: { maxHeight: "70vh" },
						children: pullView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: pullView.kind === "ok" ? "info" : pullView.kind === "empty" ? "ok" : "error",
								children: pullView.headline
							}),
							pullView.summary !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: config_manager_module_css_default.statRow,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
											kind: "info",
											children: t("change.total", { total: pullView.summary.total })
										}),
										pullView.summary.error > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
											kind: "error",
											children: [
												severityLabel("error", uiT),
												" × ",
												pullView.summary.error
											]
										}),
										pullView.summary.warning > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
											kind: "warn",
											children: [
												severityLabel("warning", uiT),
												" × ",
												pullView.summary.warning
											]
										}),
										pullView.summary.info > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
											kind: "info",
											children: [
												severityLabel("info", uiT),
												" × ",
												pullView.summary.info
											]
										})
									]
								}),
								pullView.summary.needsReview && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
									kind: "warn",
									children: t("pull.needsReview")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: config_manager_module_css_default.pullScroll,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: config_manager_module_css_default.reportList,
										children: pullView.summary.items.map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: config_manager_module_css_default.statRow,
											children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: config_manager_module_css_default.kindTag,
													children: kindLabel$1(c.kind, uiT)
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
													kind: c.severity === "error" ? "error" : c.severity === "warning" ? "warn" : "info",
													children: severityLabel(c.severity, uiT)
												}),
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: c.description })
											]
										}, c.id))
									})
								})
							] }),
							pullView.previewHint !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "info",
								children: pullView.previewHint
							})
						] })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Footer, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: () => {
							patch({ pullReport: null });
						},
						children: t("common.close")
					}) })
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: state.confirmSession !== null,
				onClose: cancelConfirm,
				title: t("syncflow.title"),
				cardStyle: {
					width: "min(820px, 100%)",
					maxHeight: "85vh"
				},
				busy: state.busy === "sync",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
					title: t("syncflow.title"),
					onClose: cancelConfirm,
					closeDisabled: state.busy === "sync"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Body, {
					scroll: true,
					style: { maxHeight: "72vh" },
					children: state.confirmSession !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SyncConfirmView, {
						api,
						syncSessionId: state.confirmSession.syncSessionId,
						snapshotId: state.confirmSession.snapshotId,
						items: state.confirmSession.items,
						needsReview: state.confirmSession.needsReview,
						compatibility: state.confirmSession.compatibility,
						t,
						decisions: state.confirmDecisions,
						onDecisionsChange: (d) => {
							patch({ confirmDecisions: d });
						},
						onCancel: cancelConfirm,
						onRollbackDone: onRollbackApplied
					})
				})]
			})
		]
	});
}
/** P0-②：push 预览内容（绑 src/ui/i18n.ts 的 UiT 文案；纯展示，无敏感字段）。 */
function PushPreviewCard({ preview, t, uiT }) {
	const view = pushPreviewView(preview, uiT);
	if (view === null) return null;
	if (view.error !== null) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
		kind: "error",
		children: view.error
	});
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "info",
			children: view.headline
		}),
		view.previewHint !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.hint,
			children: view.previewHint
		}),
		view.remoteSnapshotCount === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "warn",
			children: t("syncflow.pushFirstBaseline")
		}),
		view.encryptedHint !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "warn",
			children: view.encryptedHint
		}),
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
			className: config_manager_module_css_default.card,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("syncflow.pushPreviewSections")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.planScroll,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: config_manager_module_css_default.reportList,
					children: view.rows.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.kindTag,
							children: row.changed ? "changed" : "unchanged"
						}),
						" ",
						row.section,
						" · ",
						row.count
					] }, row.section))
				})
			})]
		})
	] });
}
/** AutosyncInterval → 可读标签（复用 i18n interval 键）。 */
function intervalLabel(iv, t) {
	switch (iv) {
		case "5m": return t("autosync.interval5m");
		case "15m": return t("autosync.interval15m");
		case "30m": return t("autosync.interval30m");
		case "60m": return t("autosync.interval60m");
		case "6h": return t("autosync.interval6h");
		case "12h": return t("autosync.interval12h");
		case "24h": return t("autosync.interval24h");
		default: return iv;
	}
}
//#endregion
//#region src/market/builtin.ts
/**
* m-market：内置（官方）配置市场仓库。
*
* 产品决策（2026-08）：「内置市场 = 由创建者 xiajiajun516 维护的公开 Read-Only 仓库，
* 只绑定、不可编辑」。市场面板不再允许用户手动添加/移除市场仓库；本模块是唯一来源。
*
* 运行时可经 `DSH_CONFIG_MARKET_URL` 覆盖（便于维护者切换/预览其他仓库），默认指向
* 官方公开市场。公开仓库：无需任何凭据（继承 m-market 的“无 secret”硬不变式）。
*
* ⚠️ 浏览器安全：本模块会被 web 端（MarketPanel）直接打包加载，浏览器没有 Node 的
* `process` 全局。因此在模块顶层读取环境变量时必须用 `typeof process !== 'undefined'`
* 防御，否则会抛 `ReferenceError: process is not defined` 导致插件加载失败。
*/
const DEFAULT_MARKET_URL = "https://github.com/xiajiajun516/dsh-config-market.git";
/** 内置市场仓库 URL（host/Node 端可经 `DSH_CONFIG_MARKET_URL` 覆盖；web 端安全回退默认官方地址）。 */
const BUILTIN_MARKET_URL = (typeof process !== "undefined" && process.env?.DSH_CONFIG_MARKET_URL ? process.env.DSH_CONFIG_MARKET_URL : DEFAULT_MARKET_URL).trim();
/** 内置市场是否为默认官方地址（固定默认值比较，不随 env 覆盖变化，保证 UI 判断稳定）。 */
function isOfficialMarket(url) {
	return url.trim() === DEFAULT_MARKET_URL;
}
//#endregion
//#region src/market/upstream.ts
/**
* 官方市场收录目标的纯常量（零依赖模块）。
*
* 为什么单独成文件：这些常量同时被 **host 半**（github-repos.ts / my-repo.ts）与
* **client 半**（MyConfigsView.tsx，用于展示「官方收录目标仓库」文本）使用。
* 如果 client 直接从 github-repos.ts 导入，rolldown 会把该模块的**整条依赖链**
* 拉进浏览器单文件 bundle —— 而 github-repos.ts 经 utils/proxy.ts 依赖 `node:https`
* （issue #30 的插件私有代理），于是 client.js 里出现 `require("node:https")`，
* DSH loader 的模块表没有该条目，插件直接加载失败：
*   「client-modules: require("node:https") missed the module table」。
*
* 把纯数据抽出来后，client 侧只依赖本文件，依赖链在 Node 内置模块之前就断开了。
*
* 本文件必须保持**零 import**（除类型外），否则会重新引入同类问题。
*/
/** 官方市场收录仓库的 owner（固定，非用户配置）。 */
const MARKET_UPSTREAM_OWNER = "xiajiajun516";
/** 官方收录目标仓库名（见 MARKET_UPSTREAM_OWNER）。 */
const MARKET_UPSTREAM_REPO = "dsh-config-market";
//#endregion
//#region src/client/market/disclaimer.ts
/** localStorage key 前缀（按 key 隔离三个操作） */
const DISCLAIMER_STORAGE_PREFIX = "dsh-cm-market.disclaimer.";
/** 由操作 key 生成 localStorage key。 */
function disclaimerStorageKey(key) {
	return `${DISCLAIMER_STORAGE_PREFIX}${key}`;
}
/** 读取「不再提示」状态（true = 已勾选，该操作以后不再弹免责；任何异常 → false）。 */
function readDisclaimerDismissed(key, storage) {
	try {
		return storage.getItem(disclaimerStorageKey(key)) === "1";
	} catch {
		return false;
	}
}
/** 写入「不再提示」状态（勾选后调用；存储不可用时静默忽略）。 */
function writeDisclaimerDismissed(key, storage) {
	try {
		storage.setItem(disclaimerStorageKey(key), "1");
	} catch {}
}
//#endregion
//#region src/client/market/my-configs-view.ts
/**
* 「我的配置」区块的客户端纯渲染装配层（m-my-configs-view，node 可测）。
*
* 设计纪律（docs/design/2026-08-20-my-configs-design.md §4.5 / §4.6）：
*  - 全部无副作用纯函数，React 壳（MyConfigsView）只装配，不承载业务逻辑；
*  - 输入数据一律由调用方（组件 / api 层）提供 —— 本文件不发起任何请求，不持有凭据；
*  - 录入最小化（§1.2）：表单仅 name（预填 zip 文件名，可改）/ description（可选）/
*    categories（可选）；id / author / version / updatedAt 均为系统自动生成，
*    界面以「系统自动」徽章展示（MY_CONFIG_AUTO_FIELDS）；
*  - 收录状态三态（§4.5）：未收录（本地独有）｜ PR 待审核（带 PR 链接）｜ 已收录
*    （官方 dsh-config-market/index.json 含该 id）；已收录 > PR 待审核 > 未收录
*    （官方已收录时即使存在 open PR 也以收录为准——PR 已合并后不应再显示待审核）；
*  - open PR 匹配按固定分支 `dsh-market-sync/<itemId>`（§2.4 自动 PR 分支约定）；
*  - 文案走 src/ui/i18n.ts 的 UiT（'myConfigs.*' 键，zh 源 / en 镜像），不硬编码中文。
*
* 安全硬约束：本层只做展示推导，不接触 token / 凭据；PR URL 由调用方提供，
* 渲染前仍过 redact() 兜底（与全站一致）。
*/
/**
* 登录状态推导（纯函数）：loading 优先；authError 非空（401 等）→ token 失效；
* 否则按 status.loggedIn 区分已登录 / 未登录。输入由调用方提供。
*/
function deriveLoginState(input) {
	if (input.loading) return { kind: "loading" };
	if (input.authFailed) return { kind: "token-invalid" };
	const s = input.status;
	if (s !== null && s.loggedIn) return {
		kind: "logged-in",
		login: s.login ?? "",
		repoUrl: s.repoUrl ?? "",
		repoExists: s.repoExists ?? false
	};
	return { kind: "logged-out" };
}
/** 空表单初值（React 壳 useState 初始 + 测试用）。 */
const EMPTY_MY_CONFIG_FORM = {
	name: "",
	description: "",
	categories: "",
	id: "",
	publishMode: "migrate"
};
/** 表单校验：名称必填（trim 后非空）。描述/类别可选。 */
function validateMyConfigForm(form, t = zhUiT) {
	return { name: form.name.trim() === "" ? t("myConfigs.form.errorName") : null };
}
/** 表单是否全部合法（上传按钮可用性）。 */
function myConfigFormValid(errors) {
	return errors.name === null;
}
/** 逗号分隔类别文本 → 去空白数组（空结果 = 无类别；与 PublishView 相同语义）。 */
function parseCategories(csv) {
	return csv.split(",").map((c) => c.trim()).filter((c) => c !== "");
}
/** 向导初始状态常量（initialWizard('upload') 语义；调用方应经 initialWizard 获取新对象）。 */
const EMPTY_MY_WIZARD = {
	mode: "upload",
	step: "select",
	zipPath: null,
	fileName: null,
	validating: false,
	validated: false,
	validationError: null,
	form: { ...EMPTY_MY_CONFIG_FORM },
	formErrors: { name: null },
	running: false,
	result: null,
	error: null
};
/** 全量状态 → 持久化切片（忽略 validating/running/formErrors；form 浅拷贝，result 直接引用纯 JSON）。 */
function toMyWizardSlice(w) {
	return {
		mode: w.mode,
		step: w.step,
		zipPath: w.zipPath,
		fileName: w.fileName,
		validated: w.validated,
		validationError: w.validationError,
		form: { ...w.form },
		result: w.result,
		error: w.error
	};
}
/**
* 持久化切片 → 全量状态（null → 全新向导）。瞬态字段归零（validating/running 恒 false），
* formErrors 按 form 经 validateMyConfigForm 重算；form 拷贝新对象（不共享切片引用）。
*/
function restoreMyWizard(slice) {
	if (slice === null) return {
		...EMPTY_MY_WIZARD,
		form: { ...EMPTY_MY_CONFIG_FORM }
	};
	return {
		mode: slice.mode,
		step: slice.step,
		zipPath: slice.zipPath,
		fileName: slice.fileName,
		validating: false,
		validated: slice.validated,
		validationError: slice.validationError,
		form: { ...slice.form },
		formErrors: validateMyConfigForm(slice.form),
		running: false,
		result: slice.result,
		error: slice.error
	};
}
/** 指定模式的向导初始状态（form 全新空表；mode/step 之外同 EMPTY_MY_WIZARD）。 */
function initialWizard(mode) {
	return {
		...EMPTY_MY_WIZARD,
		mode,
		form: { ...EMPTY_MY_CONFIG_FORM }
	};
}
/** 全量状态 → 持久化切片（忽略 importing；detail/approvals/importResult 直接引用纯 JSON/布尔表）。 */
function toMyInstallSlice(s) {
	return {
		itemId: s.itemId,
		detail: s.detail,
		approvals: s.approvals,
		importResult: s.importResult,
		error: s.error
	};
}
/** 持久化切片 → 全量状态（null → 无装回本地会话；importing 恢复后恒 false）。 */
function restoreMyInstall(slice) {
	if (slice === null) return null;
	return {
		itemId: slice.itemId,
		detail: slice.detail,
		approvals: slice.approvals,
		importing: false,
		importResult: slice.importResult,
		error: slice.error
	};
}
/** 系统自动字段徽章列表（id/作者/版本/更新时间 → 「系统自动」徽章）。 */
function autoFieldBadges(t = zhUiT) {
	const autoText = t("myConfigs.autoField");
	return [
		{
			field: "id",
			label: t("myConfigs.field.id")
		},
		{
			field: "author",
			label: t("myConfigs.field.author")
		},
		{
			field: "version",
			label: t("myConfigs.field.version")
		},
		{
			field: "updatedAt",
			label: t("myConfigs.field.updatedAt")
		}
	].map(({ field, label }) => ({
		field,
		label,
		autoText
	}));
}
/**
* Host 侧收录状态桥（§4.5 在 Host 判定）→ 客户端判别联合 ItemStatus：
* my-repo.ts 的 MyItemStatus = 'not-listed' | 'pr-pending' | 'listed'，
* prUrl 在 pr-pending 时由 Host 提供；prNumber 可选（Host 未提供时缺省）。
* 纯映射，无副作用；MyConfigsView 消费 /me/items 条目时经此桥转徽章模型。
*/
function itemStatusFromHost(entry) {
	switch (entry.status) {
		case "listed": return { kind: "listed" };
		case "pr-pending": return {
			kind: "pending-pr",
			prUrl: entry.prUrl ?? "",
			prNumber: entry.prNumber
		};
		default: return { kind: "not-listed" };
	}
}
/** 收录状态 → 徽章模板（ok=已收录 / warn=PR 待审核 / info=未收录）。 */
function itemStatusBadge(status, t = zhUiT) {
	switch (status.kind) {
		case "listed": return {
			kind: "ok",
			text: t("myConfigs.status.listed")
		};
		case "pending-pr": return {
			kind: "warn",
			text: t("myConfigs.status.pendingPr"),
			prUrl: status.prUrl,
			prNumber: status.prNumber
		};
		case "not-listed": return {
			kind: "info",
			text: t("myConfigs.status.notListed")
		};
	}
}
/** 条目投影：缺失字段给默认值（name 缺省回退 id；其余空串/空数组）。 */
function toMyItemView(item, status, t = zhUiT) {
	return {
		id: item.id,
		name: item.name !== void 0 && item.name.trim() !== "" ? item.name : item.id,
		version: item.version ?? "",
		updatedAt: item.updatedAt ?? "",
		categories: item.categories ?? [],
		author: item.author ?? "",
		..."stars" in item && typeof item.stars === "number" ? { stars: item.stars } : {},
		status,
		badge: itemStatusBadge(status, t)
	};
}
/** 列表摘要统计（按 status 分类计数）。 */
function summarizeMyItems(views) {
	let listed = 0;
	let pendingPr = 0;
	let notListed = 0;
	for (const v of views) if (v.status.kind === "listed") listed += 1;
	else if (v.status.kind === "pending-pr") pendingPr += 1;
	else notListed += 1;
	return {
		total: views.length,
		listed,
		pendingPr,
		notListed
	};
}
//#endregion
//#region src/market/view.ts
/** 列表摘要：总条目数 + 缓存徽章计数（供 UI 顶部小结）。无副作用。 */
function marketListSummary(items, _t) {
	const fresh = items.filter((i) => i.cacheState === "fresh").length;
	const cached = items.filter((i) => i.cacheState === "cached").length;
	const none = items.filter((i) => i.cacheState === "none").length;
	return {
		total: items.length,
		fresh,
		cached,
		none
	};
}
/** 条目校验徽章：status 文案 + sections 清单文案。返回 { statusText, sectionsText, valid } */
function computeItemBadge(detail, t) {
	return {
		statusText: detail.status === "valid" ? t("market.detail.statusValid") : t("market.detail.statusInvalid"),
		sectionsText: detail.sections.length > 0 ? t("market.detail.sections", { sections: detail.sections.join(", ") }) : t("market.detail.sectionsEmpty"),
		valid: detail.status === "valid"
	};
}
/**
* 恒生成供应链警示行（硬不变式：任何市场下载条目确认导入前都可见）。
* 传入 L2 manifest + 市场 URL + 下载时间；不依赖任何“来源可信”判定。
*/
function marketItemWarnings(manifest, url, downloadedAt, t) {
	const warnings = [];
	warnings.push(t("market.supplyUnofficial"));
	if (url !== "") warnings.push(t("market.supplySource", { url }));
	if (downloadedAt !== "") warnings.push(t("market.supplyDownloadedAt", { time: downloadedAt }));
	if (manifest?.author) warnings.push(t("market.supplyAuthor", { author: manifest.author }));
	if (manifest?.provenance?.source) warnings.push(t("market.supplyProvenanceSource", { source: manifest.provenance.source }));
	if (manifest?.provenance?.note) warnings.push(t("market.supplyProvenanceNote", { note: manifest.provenance.note }));
	return warnings;
}
//#endregion
//#region src/client/market/market-view.ts
/**
* 配置市场区块的客户端渲染装配层（m-market-ui，node 可测）。
*
* 设计纪律（docs/design/marketplace.md §7.2 / §9 contract 表）：
*  - **共享渲染模型唯一权威 = Host 侧 `src/market/view.ts`**（marketStatusText /
*    marketListSummary / computeItemBadge / marketItemWarnings / needsReview / toMarketListItem）。
*    本文件原样 **re-export** 这些函数（单一来源，消重，避免与后端漂移）；
*  - 本文件只保留**客户端专属**的 UI 装配函数（搜索/类别过滤、详情聚合、时间格式化、
*    供应链警示的 warn/info 着色行、条目来源徽章）——这些不属共享模型，属前端薄层。
*
* 安全硬约束（§1 / §7.2）：供应链警示恒生成、needsReview 恒 true（re-export 自后端权威）。
*/
/**
* 条目来源徽章 kind（阶段 1：条目级来源仓库，docs/design/2026-08-19-market-publish-design.md §3.3）：
* - `'ok'`（官方）：`item.repo` 缺省（条目与市场仓库同仓）或 `item.repo` 为官方默认地址；
* - `'warn'`（第三方）：`item.repo` 存在且非官方默认地址（条目由作者自托管仓库发布）。
* 判定基准复用 `builtin.ts` 的 `isOfficialMarket`（固定官方地址比较）：env 覆盖为预览仓库时，
* 无 repo 条目随市场头部一并显示第三方徽章，语义自洽。纯函数、node 可测；MarketPanel 只装配。
*/
function sourceBadgeKind(item, builtinUrl) {
	return isOfficialMarket(item.repo ?? builtinUrl) ? "ok" : "warn";
}
/** 条目是否为第三方来源（有 repo 且非官方默认地址；无 repo 条目视为官方/市场同仓）。 */
function isThirdPartyItem(item, builtinUrl) {
	return sourceBadgeKind(item, builtinUrl) === "warn";
}
/** 类别过滤：从条目收集全部出现过的类别（用于「全部类别」下拉）。 */
function collectCategories(items) {
	const set = /* @__PURE__ */ new Set();
	for (const it of items) for (const c of it.categories ?? []) set.add(c);
	return [...set];
}
/**
* 来源过滤：'official' 只保留官方条目（非第三方），'personal' 只保留个人条目（第三方），
* 'all' 不过滤。缺省 'all'（向后兼容旧调用方）。
*/
function filterBySource(items, source, builtinUrl) {
	if (source === "all") return [...items];
	const wantOfficial = source === "official";
	return items.filter((it) => isThirdPartyItem(it, builtinUrl) !== wantOfficial);
}
/**
* 排序（纯函数）：按键排序，undefined 值（无 updatedAt / stars）排最后。
* - updatedAt：降序（最新在前）；无 updatedAt 排最后；
* - stars：降序（多在前）；无 stars 排最后；
* - name：升序 A–Z（localeCompare）；
* - default：保持原顺序。
* 稳定性：同值保持原相对顺序（Array.prototype.sort 现代引擎稳定）。
*/
function sortMarketItems(items, sortKey) {
	if (sortKey === "default") return [...items];
	const copy = [...items];
	copy.sort((a, b) => {
		if (sortKey === "name") return a.name.localeCompare(b.name);
		if (sortKey === "stars") {
			const sa = a.stars;
			const sb = b.stars;
			if (sa === void 0 && sb === void 0) return 0;
			if (sa === void 0) return 1;
			if (sb === void 0) return -1;
			return sb - sa;
		}
		const ta = a.updatedAt ?? "";
		const tb = b.updatedAt ?? "";
		if (ta === "" && tb === "") return 0;
		if (ta === "") return 1;
		if (tb === "") return -1;
		return tb.localeCompare(ta);
	});
	return copy;
}
/**
* 搜索 + 类别过滤（纯函数，客户端专属）。
* - query：对 name / author / description / **categories** 做大小写不敏感子串匹配
*   （空白 query 不过滤；P2-⑭ 增强：类别标签也参与搜索命中——搜「模型」能命中
*   带 providers 类别标签的条目，不必精确知道字段名）；
* - category：空串表示不限类别；否则要求 categories 含该值。
* 返回筛选后的条目（保持原始顺序）。
*/
function filterMarketItems(items, query, category) {
	const q = query.trim().toLowerCase();
	return items.filter((it) => {
		if (category !== "" && !(it.categories ?? []).includes(category)) return false;
		if (q === "") return true;
		if (it.name.toLowerCase().includes(q)) return true;
		if ((it.author ?? "").toLowerCase().includes(q)) return true;
		if ((it.description ?? "").toLowerCase().includes(q)) return true;
		if ((it.categories ?? []).some((c) => c.toLowerCase().includes(q))) return true;
		return false;
	});
}
/** P2-⑭：按分区筛选列表（对已缓存条目生效；未缓存条目 sections 未知 → 在筛选时排除）。
*  section 传 '' = 不限分区。返回 { matched, unknown }：unknown 为因「未下载、分区未知」
*  被排除的条目数（UI 提示用）。 */
function filterMarketBySection(items, section) {
	if (section === "") return {
		matched: [...items],
		unknown: 0
	};
	const matched = [];
	let unknown = 0;
	for (const it of items) {
		if (it.sections === void 0) {
			unknown += 1;
			continue;
		}
		if (it.sections.includes(section)) matched.push(it);
	}
	return {
		matched,
		unknown
	};
}
/** 收集列表内已缓存条目的分区并集（分区筛选取值候选；未缓存条目贡献不了分区信息）。 */
function collectCachedSections(items) {
	const set = /* @__PURE__ */ new Set();
	for (const it of items) for (const s of it.sections ?? []) set.add(s);
	return [...set];
}
/**
* 供应链警示 → warn/info 着色行（客户端专属）。**逻辑委托** Host 权威 `marketItemWarnings`
* （恒生成非官方审核 + 来源 URL + 下载时间 + 作者/来源自述），本层只负责给「非官方审核」标 warn、
* 其余标 info，供 UI 列表着色。硬不变式：返回恒非空（至少一条），确认导入前必经。
*/
function marketWarningsLines(detail, url, t = zhUiT) {
	return marketItemWarnings(detail.provenance !== void 0 || detail.author !== void 0 ? {
		name: detail.name,
		author: detail.author,
		provenance: detail.provenance
	} : void 0, url, detail.downloadedAt, t).map((text, i) => ({
		kind: i === 0 ? "warn" : "info",
		text
	}));
}
/**
* 聚合详情视图（客户端专属）：徽章（委托共享 computeItemBadge）+ 供应链警示着色行
* （委托共享 marketItemWarnings）+ 校验错误 + 可否导入。
*/
function marketDetailView(detail, url, showBack, t = zhUiT) {
	const badge = computeItemBadge(detail, t);
	return {
		badge: {
			statusKind: badge.valid ? "ok" : "error",
			statusText: badge.statusText,
			sectionsText: badge.sectionsText,
			valid: badge.valid
		},
		warnings: marketWarningsLines(detail, url, t),
		errors: detail.errors ?? [],
		canImport: detail.status === "valid" && detail.sections.length > 0,
		showBack
	};
}
/**
* 高风险分区（默认不导入，须逐项显式批准）：
*  - pluginFiles        ：把远端文件写进 $DSH_HOME（可覆盖本机插件配置文件）
*  - agentInstructions  ：AGENTS.md 注入每个会话的全局指令（LLM 言行边界）
*  - agentPresets       ：agent 预设（会话 persona / 行为模板）
*  - sessions           ：session 文件（可带历史/敏感上下文）
*  - mcp                ：注册 MCP 服务器（可接入外部工具/执行能力）
*  - plugins            ：安装/更新插件（ExecutePlugin / Install 项，供应链最高风险）
* 其余（settings/ui/providers/prompts/skills/workspaces/credentialsStatus…）默认勾选。
*/
const HIGH_RISK_ADAPTERS = /* @__PURE__ */ new Set([
	"pluginFiles",
	"agentInstructions",
	"agentPresets",
	"sessions",
	"mcp",
	"plugins"
]);
/** 是否为高风险分区（需逐项显式批准，默认不导入）。 */
function isHighRiskAdapter(adapter) {
	return HIGH_RISK_ADAPTERS.has(adapter);
}
/** PlanItemKind 是否需要重启 DSH 生效（Install 及插件级变更）。 */
function itemNeedsRestart(adapter, kind) {
	if (kind === "Install") return true;
	if (adapter === "plugins" || adapter === "mcp" || adapter === "agentPresets" || adapter === "agentInstructions") return true;
	return false;
}
/** 收集计划中出现过的分区（按 APPLY_ORDER 语义排序不重要，去重即可）。 */
function planAdapters(plan) {
	const set = /* @__PURE__ */ new Set();
	for (const item of plan.items) set.add(item.adapter);
	return [...set];
}
/**
* 默认批准表：低风险分区默认勾选（true）；高风险分区默认不勾选（false，须逐项显式批准）。
* 这是严格分层信任的默认 —— 不提供「自动信任高风险来源」的默认。
*/
function defaultApprovals(plan) {
	const out = {};
	for (const adapter of planAdapters(plan)) out[adapter] = !isHighRiskAdapter(adapter);
	return out;
}
/**
* 按批准表过滤计划 → 仅保留已批准分区的项（供 executeImportPlan 执行的子计划，subPlan）。
* - items：仅保留 approved[adapter]===true 的项；
* - needsRestart：按已批准项里是否有需重启者重算（不再沿用整份计划的 needsRestart）；
* - estimatedActions：仅保留已批准分区的计数；
* - globalStrategy / missingSecrets / pathMappings：透传（导入的可选分区子集不改变这些）。
* 返回与入参同形状的 ImportPlan，可直接交 executeImportPlan（analytic 只执行 plan.items）。
*/
function buildApprovedPlan(plan, approvals) {
	const items = plan.items.filter((it) => approvals[it.adapter] === true);
	let needsRestart = false;
	const estimatedActions = {};
	for (const it of items) {
		if (itemNeedsRestart(it.adapter, it.kind)) needsRestart = true;
		estimatedActions[it.adapter] = (estimatedActions[it.adapter] ?? 0) + 1;
	}
	return {
		items,
		globalStrategy: plan.globalStrategy,
		pathMappings: plan.pathMappings,
		missingSecrets: plan.missingSecrets,
		needsRestart,
		estimatedActions
	};
}
/** 批准表摘要（确认按钮可用性 + 提示徽章数据源，纯函数）。 */
function approvedAdapterSummary(plan, approvals) {
	const adapters = planAdapters(plan);
	let selected = 0;
	let highRiskSelected = 0;
	let highRiskTotal = 0;
	for (const a of adapters) {
		if (approvals[a] === true) selected += 1;
		if (isHighRiskAdapter(a)) {
			highRiskTotal += 1;
			if (approvals[a] === true) highRiskSelected += 1;
		}
	}
	const hasItems = plan.items.some((it) => approvals[it.adapter] === true);
	return {
		total: adapters.length,
		selected,
		canImport: hasItems,
		highRiskSelected,
		highRiskTotal
	};
}
/** 计划 → 分区批准列表（供详情视图逐项勾选渲染；纯函数）。 */
function approvalRows(plan, approvals) {
	const byAdapter = /* @__PURE__ */ new Map();
	for (const item of plan.items) {
		const list = byAdapter.get(item.adapter) ?? [];
		list.push(item);
		byAdapter.set(item.adapter, list);
	}
	const rows = [];
	for (const adapter of planAdapters(plan)) {
		const items = byAdapter.get(adapter) ?? [];
		const label = items[0]?.description ?? adapter;
		rows.push({
			adapter,
			itemCount: items.length,
			highRisk: isHighRiskAdapter(adapter),
			approved: approvals[adapter] === true,
			label
		});
	}
	return rows;
}
function marketImpactSummary(plan, analysis) {
	const items = plan.items;
	const count = (kinds) => items.filter((i) => kinds.includes(i.kind)).length;
	const byAdapter = /* @__PURE__ */ new Map();
	for (const item of items) byAdapter.set(item.adapter, (byAdapter.get(item.adapter) ?? 0) + 1);
	return {
		willChange: count([
			"Create",
			"Update",
			"Install",
			"Conflict"
		]),
		unchanged: count(["Skip"]),
		conflicts: count(["Conflict"]),
		secretsNeeded: plan.missingSecrets.length,
		pathMappingsNeeded: analysis?.pathIssues?.length ?? 0,
		needsRestart: plan.needsRestart,
		sections: [...byAdapter.entries()].map(([section, c]) => ({
			section,
			count: c
		}))
	};
}
//#endregion
//#region src/client/market/MyConfigsView.tsx
/**
* 「我的配置」视图（设计文档 docs/design/2026-08-20-my-configs-design.md §4.6）。
*
* 组装「一键上传 / 查看已上传 / 一键更新 / 装回本地」：
* - **登录卡**：未登录 → GitHub device flow 登录（复用 SyncApi.githubStart/Poll/Cancel，
*   交互与 SyncSettingsView 一致：一次性用户码 + 授权页链接 + 轮询 + 取消，定时器卸载清理）；
*   已登录 → @login + 固定目标仓库（xiajiajun516/dsh-config-market，只读展示，无编辑入口）；
*   token 失效（/me/status 401）→ 引导重新登录；
* - **上传向导**：选 zip（复用 ConfigManagerApi.upload 受控临时区）→ analyzeImport 校验
*   （内容合法 + 无密钥，零写入）→ 精简表单（仅 name/description/categories；
*   id/author/version/updatedAt 显示「系统自动」徽章）→ meUpload 一键上传 → 结果卡
*   （PR 链接 / 仓库链接 / sha256 / 分区）；
* - **已上传列表**：条目卡片（字段 + 收录状态徽章：未收录 / PR 待审核[带 PR 链接] / 已收录，
*   状态由 Host 侧判定经 itemStatusFromHost 桥接）+ 行操作：更新（预填信息进向导）/
*   装回本地（复用市场下载 + 逐分区批准 + executeImportPlan 安全管道）/ 打开仓库。
*
* 渲染/校验模型全部来自 my-configs-view.ts + market-view.ts 纯函数（node 已测），本组件只装配；
* 状态组件内自持（useState），非敏感切片（已上传列表 myItems + 错误）为**受控 props**：
* 经 MarketPanel 的 commit/patch 统一镜像进模块级 runStore（market.myItems / myItemsError），
* 切 tab 不丢；刷新后免重拉（与 MarketPanel 浏览态同单店镜像策略）。
* 安全：token 只存宿主凭据槽；密码/表单无敏感字段；所有展示文本渲染前过 redact() 兜底；
* 本文件不 import 任何 node 模块（纯浏览器 bundle）。
*/
const initialGithubFlow = {
	phase: "idle",
	flowId: "",
	userCode: "",
	verificationUri: "",
	interval: 5,
	error: null
};
/**
* 上传/更新向导状态（全量模型在 my-configs-view.ts 的 MyWizardState；本组件持有的是
* 持久化切片 myWizard（受控 props），经 restoreMyWizard 恢复全量、toMyWizardSlice 上抛镜像。
* 瞬态（validating/running/formErrors）由 restore 重建，切 tab/刷新恢复后为初始态。
* 装回本地状态（MyInstallState）同模式：持久化切片 myInstall（受控 props），
* 经 restoreMyInstall 恢复全量（importing 瞬态归零）、toMyInstallSlice 上抛镜像。
*/
function MyConfigsView({ meApi, api, importApi, syncApi, t, myItems, myItemsError, onMyItemsChange, myWizard, onMyWizardChange, myInstall, onMyInstallChange, myConfirmDeleteId, onMyConfirmDeleteChange }) {
	const uiT = meApi.t;
	const [status, setStatus] = (0, react.useState)(null);
	const [statusLoading, setStatusLoading] = (0, react.useState)(true);
	const [statusFailed, setStatusFailed] = (0, react.useState)(false);
	const [github, setGithub] = (0, react.useState)(initialGithubFlow);
	const githubPollTimer = (0, react.useRef)(null);
	const [listLoading, setListLoading] = (0, react.useState)(false);
	const [wizard, setWizard] = (0, react.useState)(() => restoreMyWizard(myWizard));
	/** 最近一次 wizard 全量（commitWizard 读最新值，避免闭包过期） */
	const wizardRef = (0, react.useRef)(wizard);
	/** 收录/下架任务状态（结果卡轮询 /me/listing 的实时结果） */
	const [listingStatus, setListingStatus] = (0, react.useState)(null);
	/** 收录/下架任务轮询定时器 */
	const listingPollTimer = (0, react.useRef)(null);
	/** 删除确认弹窗目标条目 id（受控：MarketPanel 经 runStore 持有，切 tab/刷新不丢；null = 无确认中的删除） */
	const confirmDeleteId = myConfirmDeleteId;
	/** 正在删除的条目 id（行级 spinner + 防重复点击） */
	const [deletingId, setDeletingId] = (0, react.useState)(null);
	/** 装回本地状态（受控：切片来自 runStore；瞬态 importing 本地重建） */
	const [install, setInstall] = (0, react.useState)(() => restoreMyInstall(myInstall));
	/** 最近一次 install 全量（commitInstall 读最新值，避免闭包过期） */
	const installRef = (0, react.useRef)(install);
	/**
	* K-07：未批准任何分区（表单内联校验，保留就地提示）。
	* 与「下载/导入失败」分流：失败走全局 Toast（install.error 仅作失败标记，不再页内渲染），
	* 本提示位置紧邻导入按钮，用户修正勾选后立即消失。
	*/
	const [noApprovalHint, setNoApprovalHint] = (0, react.useState)(false);
	const fileInput = (0, react.useRef)(null);
	/** 上传/更新向导弹窗开关（瞬态 UI，不持久化：切 tab 弹窗关闭，数据仍在 runStore） */
	const [uploadOpen, setUploadOpen] = (0, react.useState)(false);
	/** 装回本地弹窗开关（同上） */
	const [installOpen, setInstallOpen] = (0, react.useState)(false);
	/** 当前展示的免责弹窗操作（null = 无；upload/download/install 三操作分开记「不再提示」） */
	const [disclaimerKey, setDisclaimerKey] = (0, react.useState)(null);
	/** 免责弹窗「不再提示」勾选（每次打开重置） */
	const [dontAsk, setDontAsk] = (0, react.useState)(false);
	/** localStorage（浏览器环境；免责「不再提示」跨会话持久化） */
	const storage = window.localStorage;
	/** 打开上传/更新弹窗（更新模式表单已预填）：未勾「不再提示」→ 先弹免责，确认后开弹窗 */
	const openUpload = () => {
		if (readDisclaimerDismissed("upload", storage)) {
			setUploadOpen(true);
			return;
		}
		setDontAsk(false);
		setDisclaimerKey("upload");
	};
	/** 待装回本地的目标条目（免责确认后取用；避免免责流程中闭包过期） */
	const pendingInstallEntry = (0, react.useRef)(null);
	/** 打开装回本地弹窗：未勾「不再提示」→ 先弹免责，确认后开弹窗并启动下载 */
	const openInstall = (entry) => {
		pendingInstallEntry.current = entry;
		if (readDisclaimerDismissed("install", storage)) {
			setInstallOpen(true);
			runDownload(entry);
			return;
		}
		setDontAsk(false);
		setDisclaimerKey("install");
	};
	/** 关闭上传/更新弹窗：重置向导为初始态（弹窗即会话，关闭即放弃本次操作；
	*  更新模式也切回「一键上传」入口，避免入口按钮残留 update 态） */
	const closeUpload = () => {
		setUploadOpen(false);
		commitWizard(initialWizard("upload"));
		setListingStatus(null);
	};
	/** 取消更新：放弃本次更新，向导回到默认「一键上传」初始态（清空预填/暂存/校验态），弹窗保持打开 */
	const cancelUpdate = () => {
		commitWizard(initialWizard("upload"));
		setListingStatus(null);
	};
	/** 关闭装回本地弹窗：清 install 会话 */
	const closeInstall = () => {
		setInstallOpen(false);
		commitInstall(null);
	};
	/** 免责弹窗确认：勾选则记录「不再提示」→ 关闭免责 → 打开对应操作弹窗 */
	const confirmDisclaimer = () => {
		const key = disclaimerKey;
		if (key === null) return;
		if (dontAsk) writeDisclaimerDismissed(key, storage);
		setDisclaimerKey(null);
		if (key === "upload") setUploadOpen(true);
		else if (key === "install") {
			const entry = pendingInstallEntry.current;
			setInstallOpen(true);
			if (entry !== null && entry !== void 0) runDownload(entry);
		}
	};
	/** 取消免责弹窗：关闭，不打开操作弹窗；若向导处于 update 残留态则重置为上传初始态 */
	const cancelDisclaimer = () => {
		setDisclaimerKey(null);
		if (disclaimerKey === "upload" && wizardRef.current.mode === "update") {
			commitWizard(initialWizard("upload"));
			setListingStatus(null);
		}
	};
	/** 免责弹窗文案（MyConfigsView 只触发 upload / install 两种；default 兜底返回空串防误显） */
	const disclaimerText = () => {
		switch (disclaimerKey) {
			case "upload": return t("disclaimer.upload.text");
			case "install": return t("disclaimer.install.text");
			default: return "";
		}
	};
	/**
	* 向导状态统一提交：更新 ref → setState → **总是**镜像切片上抛（MarketPanel 落 runStore）。
	* 镜像不依赖 effect flush：异步回调在组件已卸载（切走 tab）时也能落库，切回恢复。
	* 镜像上抛包 try/catch：镜像失败（store 异常）绝不影响本地 UI 更新（防「点击无反应」）。
	*/
	const commitWizard = (next) => {
		wizardRef.current = next;
		setWizard(next);
		try {
			onMyWizardChange(toMyWizardSlice(next));
		} catch {}
	};
	const patchWizard = (p) => commitWizard({
		...wizardRef.current,
		...p
	});
	/**
	* 装回本地状态统一提交：更新 ref → setState → **总是**镜像切片上抛（MarketPanel 落 runStore）。
	* 镜像不依赖 effect flush：异步回调在组件已卸载（切走 tab）时也能落库，切回恢复。
	*/
	const commitInstall = (next) => {
		installRef.current = next;
		setInstall(next);
		try {
			onMyInstallChange(next === null ? null : toMyInstallSlice(next));
		} catch {}
	};
	const patchInstall = (p) => {
		if (installRef.current === null) return;
		commitInstall({
			...installRef.current,
			...p
		});
	};
	/** 读取登录态（挂载 / 登录成功 / 状态刷新），返回 status 供后续判断 */
	const loadStatus = async () => {
		setStatusLoading(true);
		setStatusFailed(false);
		try {
			const s = await meApi.meStatus();
			setStatus(s);
			return s;
		} catch {
			setStatusFailed(true);
			return null;
		} finally {
			setStatusLoading(false);
		}
	};
	/** 加载已上传列表（状态上抛 MarketPanel 镜像 runStore：切 tab 不丢 / 刷新免重拉） */
	const loadItems = async (opts = {}) => {
		if (!opts.silent) setListLoading(true);
		try {
			onMyItemsChange((await meApi.meItems()).items, null);
		} catch (err) {
			onMyItemsChange(myItems, err instanceof Error ? err.message : String(err));
		} finally {
			if (!opts.silent) setListLoading(false);
		}
	};
	(0, react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			const s = await loadStatus();
			if (!cancelled && s !== null && s.loggedIn) loadItems({ silent: true });
		})();
		return () => {
			cancelled = true;
			if (githubPollTimer.current !== null) clearTimeout(githubPollTimer.current);
		};
	}, []);
	/**
	* R-18：GitHub 流程失败统一出口「落状态 + 弹全局 Toast」，取代页内 error Banner。
	* 注意文本**先 redact 再入 state**：状态行 Badge 由 computeGithubLoginView 直接把
	* `github.error` 当 statusText 透出（该纯函数不做脱敏），先脱敏才能让 Badge 与 Toast
	* 都不含敏感原文 —— 保持了原先 Banner 的 redact 安​全不变量。
	*/
	const failGithub = (message) => {
		const safe = redact(message);
		setGithub((g) => ({
			...g,
			phase: "error",
			error: safe
		}));
		toast.error(safe);
	};
	const runGithubStart = async () => {
		setGithub((g) => ({
			...g,
			phase: "starting",
			error: null
		}));
		try {
			const info = await syncApi.githubStart();
			setGithub({
				phase: "waiting",
				flowId: info.flowId,
				userCode: info.userCode,
				verificationUri: info.verificationUri,
				interval: info.interval,
				error: null
			});
			scheduleGithubPoll(info.flowId, Math.max(info.interval, 1) * 1e3);
		} catch (err) {
			failGithub(err instanceof Error ? err.message : String(err));
		}
	};
	const scheduleGithubPoll = (flowId, delayMs) => {
		if (githubPollTimer.current !== null) clearTimeout(githubPollTimer.current);
		githubPollTimer.current = setTimeout(() => {
			runGithubPoll(flowId);
		}, delayMs);
	};
	const runGithubPoll = async (flowId) => {
		setGithub((g) => ({
			...g,
			phase: "polling"
		}));
		try {
			const poll = await syncApi.githubPoll(flowId);
			if (poll.status === "pending") {
				setGithub((g) => ({
					...g,
					phase: "waiting"
				}));
				scheduleGithubPoll(flowId, poll.pollDelayMs ?? Math.max(github.interval, 1) * 1e3);
				return;
			}
			const message = githubPollMessage(poll, uiT);
			if (poll.status === "success") {
				setGithub(initialGithubFlow);
				const s = await loadStatus();
				if (s !== null && s.loggedIn) loadItems({ silent: true });
			} else failGithub(message);
		} catch (err) {
			failGithub(err instanceof Error ? err.message : String(err));
		}
	};
	const runGithubCancel = async () => {
		if (githubPollTimer.current !== null) {
			clearTimeout(githubPollTimer.current);
			githubPollTimer.current = null;
		}
		const flowId = github.flowId;
		setGithub(initialGithubFlow);
		if (flowId !== "") try {
			await syncApi.githubCancel(flowId);
		} catch {}
	};
	/** 选 zip → upload 受控临时区；upload 模式预填 name 为 zip 文件名（可改）。
	*  两种模式选完 zip 均**自动**跑校验（analyzeImport dry-run）——通过即直接进表单，
	*  用户无需再手动点「校验」按钮；失败留在校验步骤展示错误（可重选 zip）。 */
	const onPickFile = async (file) => {
		if (file === void 0) return;
		patchWizard({
			fileName: file.name,
			error: null,
			validationError: null
		});
		try {
			const uploaded = await importApi.upload(file);
			const base = {
				zipPath: uploaded.zipPath,
				fileName: file.name
			};
			if (wizardRef.current.mode === "update") {
				patchWizard({
					...base,
					validated: false
				});
				await runValidateWith(uploaded.zipPath);
			} else {
				patchWizard({
					...base,
					step: "validate",
					form: {
						...wizardRef.current.form,
						name: file.name.replace(/\.zip$/i, "")
					}
				});
				await runValidateWith(uploaded.zipPath);
			}
		} catch (err) {
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 校验指定 zipPath（选完 zip 自动调用；任何异常都落到 validationError 展示，不静默）
	*  R-15：校验不通过时**除就地 Banner 外再弹一次 Toast** —— 校验由「选完 zip」自动触发，
	*  用户未必正看着校验步骤，Toast 保证送达；位置有语义的就地 Banner 保留（指引重新选择）。 */
	const runValidateWith = async (zipPath) => {
		/** 统一出口「落校验错误 + 弹 Toast」（三条失败路径共用，避免文案重复） */
		const failValidation = (message) => {
			patchWizard({
				validating: false,
				validated: false,
				validationError: message
			});
			toast.error(redact(message));
		};
		try {
			patchWizard({
				validating: true,
				validationError: null
			});
		} catch (err) {
			failValidation(err instanceof Error ? err.message : String(err));
			return;
		}
		try {
			const analysis = await importApi.analyzeImport(zipPath);
			if (analysis.secretCount > 0) failValidation(t("myconfigs.upload.validateSecrets"));
			else if (!analysis.valid) failValidation(t("myconfigs.upload.validateInvalid"));
			else patchWizard({
				validating: false,
				validated: true,
				validationError: null,
				step: "form"
			});
		} catch (err) {
			failValidation(err instanceof Error ? err.message : String(err));
		}
	};
	/** 表单字段更新 + 实时校验（pure 模型） */
	const onFormField = (field, value) => {
		const next = {
			...wizardRef.current.form,
			[field]: value
		};
		patchWizard({
			form: next,
			formErrors: validateMyConfigForm(next, uiT)
		});
	};
	/** 「一键上传 / 一键更新」→ meUpload / meUpdate */
	const runUpload = async () => {
		const w = wizardRef.current;
		const zipPath = w.zipPath;
		if (zipPath === null) return;
		const errs = validateMyConfigForm(w.form, uiT);
		patchWizard({ formErrors: errs });
		if (!myConfigFormValid(errs)) return;
		const categories = parseCategories(w.form.categories);
		const form = {
			name: w.form.name.trim(),
			...w.mode === "update" && w.form.id !== "" ? { id: w.form.id } : {},
			...w.form.description.trim() !== "" ? { description: w.form.description.trim() } : {},
			...categories.length > 0 ? { categories } : {},
			...w.form.publishMode === "share" ? { mode: "share" } : {}
		};
		patchWizard({
			running: true,
			error: null,
			result: null
		});
		try {
			const result = w.mode === "update" ? await meApi.meUpdate({
				zipPath,
				form
			}) : await meApi.meUpload({
				zipPath,
				form
			});
			commitWizard({
				...wizardRef.current,
				running: false,
				result
			});
			if (!result.ok) toast.error(redact(result.error ?? ((result.warnings ?? []).join(" · ") || t("common.unknownError"))));
			setListingStatus(null);
			if (result.ok && result.listing === "pending") startListingPoll(result.itemId);
			loadItems({ silent: true });
		} catch (err) {
			patchWizard({ running: false });
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 行操作：更新 → 打开「更新配置」表单页（step='form'，预填条目信息；表单内选新 zip 自动校验） */
	const startUpdate = (entry) => {
		commitWizard({
			...initialWizard("update"),
			step: "form",
			form: {
				id: entry.id,
				name: entry.name,
				description: entry.description ?? "",
				categories: (entry.categories ?? []).join(", "),
				publishMode: "migrate"
			}
		});
		setListingStatus(null);
	};
	/** R-16：收录任务失败 → 常驻 Toast（durationMs=0，须手动关闭）。
	*  收录是后台 fork + PR 异步任务（可能耗时约 2 分钟），用户多已离开结果卡，
	*  只能靠全局 Toast 可靠送达；轮询与「重新提交」两条路径共用。 */
	const notifyListingFailure = (s) => {
		if (s.listing !== "failed") return;
		toast.error(redact(s.error ?? t("common.unknownError")), 0);
	};
	/** 轮询 /me/listing 直到任务终态（done/failed/null）；间隔 3s、最多 40 次（≈2 分钟），
	*  后台 fork 更久时超时停止，用户可稍后手动刷新列表/点「重新收录」 */
	const startListingPoll = (itemId) => {
		if (listingPollTimer.current !== null) clearTimeout(listingPollTimer.current);
		let count = 0;
		const tick = () => {
			(async () => {
				try {
					const s = await meApi.meListing(itemId);
					if (s === null) {
						setListingStatus({
							itemId,
							listing: "done",
							prNumber: null,
							prUrl: null
						});
						return;
					}
					setListingStatus(s);
					notifyListingFailure(s);
					if (s.listing !== "pending") return;
				} catch {}
				count += 1;
				if (count >= 40) {
					listingPollTimer.current = null;
					return;
				}
				listingPollTimer.current = setTimeout(tick, 3e3);
			})();
		};
		tick();
	};
	/** 挂载恢复：若持久化的向导结果仍是「收录处理中」（pending），继续轮询（仿 resume 模式，避免刷新后永久 pending 卡死） */
	(0, react.useEffect)(() => {
		const w = wizardRef.current;
		if (w.result !== null && w.result.ok && w.result.listing === "pending") startListingPoll(w.result.itemId);
		return () => {
			if (listingPollTimer.current !== null) clearTimeout(listingPollTimer.current);
		};
	}, []);
	/** 重新提交收录（收录失败 / 进程重启丢失后的一键重试）→ 重新轮询状态 */
	const runRelist = async (itemId) => {
		try {
			const s = await meApi.meRelist(itemId);
			setListingStatus(s);
			notifyListingFailure(s);
			startListingPoll(itemId);
		} catch (err) {
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 删除：调 /me/delete（同步删本地索引+文件；已收录自动后台提下架 PR）→ 刷新列表 */
	const runDelete = async (entry) => {
		if (deletingId !== null) return;
		setDeletingId(entry.id);
		onMyConfirmDeleteChange(null);
		try {
			const result = await meApi.meDelete(entry.id);
			if (result.ok) {
				if (result.delisted) toast.ok(t("myconfigs.delete.delistStarted"));
				else if (result.prNumber !== null) toast.ok(t("myconfigs.delete.prClosed"));
				loadItems({ silent: true });
			} else toast.error(redact(result.error ?? t("common.unknownError")));
		} catch (err) {
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		} finally {
			setDeletingId(null);
		}
	};
	/** 装回本地（复用市场下载 + 逐分区批准链路；条目内容在用户自己的公开仓库，必须带 repo 来源）
	*  竞态守卫：下载期间用户可切换装回另一条目（install.itemId 已变），晚到响应一律丢弃，
	*  防止「会话标题是 B、详情是 A」的串扰。 */
	const runDownload = async (entry) => {
		commitInstall({
			itemId: entry.id,
			detail: null,
			approvals: {},
			importing: false,
			importResult: null,
			error: null
		});
		setNoApprovalHint(false);
		try {
			const detail = await api.download(entry.id, entry.repoUrl);
			if (installRef.current === null || installRef.current.itemId !== entry.id) return;
			commitInstall({
				...installRef.current,
				detail,
				approvals: defaultApprovals(detail.plan)
			});
		} catch (err) {
			if (installRef.current === null || installRef.current.itemId !== entry.id) return;
			patchInstall({ error: err instanceof Error ? err.message : String(err) });
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	const runImport = async () => {
		if (install === null || install.detail === null) return;
		const approvedPlan = buildApprovedPlan(install.detail.plan, install.approvals);
		if (approvedPlan.items.length === 0) {
			setNoApprovalHint(true);
			return;
		}
		setNoApprovalHint(false);
		patchInstall({
			importing: true,
			error: null
		});
		try {
			const executed = await importApi.executeImportPlan(install.detail.zipPath, approvedPlan, {
				confirm: true,
				rollbackOnError: true
			});
			patchInstall({
				importing: false,
				importResult: executed
			});
			const okCount = executed.executed.filter((e) => e.status === "ok").length;
			const failedCount = executed.executed.filter((e) => e.status === "failed").length;
			const restartSuffix = executed.needsRestart ? ` · ${t("import.needsRestart")}` : "";
			if (executed.ok) toast.ok(t("import.done", { count: String(okCount) }) + restartSuffix);
			else toast.error(t("import.failed", { count: String(failedCount) }) + restartSuffix);
		} catch (err) {
			patchInstall({
				importing: false,
				error: err instanceof Error ? err.message : String(err)
			});
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 登录视图（loading / logged-out / logged-in / token-invalid） */
	const loginView = deriveLoginState({
		loading: statusLoading,
		status,
		authFailed: statusFailed
	});
	/** GitHub 登录卡渲染模型（复用 sync-view 纯函数：状态行 / 按钮态 / 展示设备码） */
	const githubView = computeGithubLoginView(github.phase, github.userCode, github.verificationUri, github.error, uiT);
	/** 已上传条目投影（Host 状态 → 徽章模型） */
	const itemViews = (myItems ?? []).map((entry) => {
		const view = toMyItemView(entry, itemStatusFromHost(entry), uiT);
		return {
			entry,
			view,
			badge: view.badge
		};
	});
	const summary = summarizeMyItems(itemViews.map((v) => v.view));
	const autoBadges = autoFieldBadges(uiT);
	const targetRepo = `${MARKET_UPSTREAM_OWNER}/${MARKET_UPSTREAM_REPO}`;
	/** 设备码 + 授权页链接展示（waiting/polling 时） */
	const renderDeviceCode = () => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.statRow,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
			kind: "info",
			children: t("myconfigs.login.userCode", { code: githubView.userCode })
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
			className: config_manager_module_css_default.ghostButton,
			href: githubView.verificationUri,
			target: "_blank",
			rel: "noreferrer",
			style: { textDecoration: "none" },
			children: t("myconfigs.login.openAuth")
		})]
	});
	/** 登录卡（未登录 / token 失效 → device flow；已登录 → @login + 固定目标仓库只读展示） */
	const renderLoginCard = () => {
		if (loginView.kind === "loading") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.statRow,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.groupLabel,
				children: t("myconfigs.login.title")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("myconfigs.login.checking") })]
		}) });
		if (loginView.kind === "logged-out" || loginView.kind === "token-invalid") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("myconfigs.login.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: !githubView.canStart,
						onClick: () => {
							runGithubStart();
						},
						children: githubView.startLabel
					}),
					githubView.canCancel && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: github.phase === "starting",
						onClick: () => {
							runGithubCancel();
						},
						children: t("myconfigs.login.cancel")
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.hint,
				children: t("myconfigs.login.hint")
			}),
			loginView.kind === "token-invalid" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "warn",
				children: t("myconfigs.error.loadStatus")
			}),
			githubView.showCode && renderDeviceCode(),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: githubView.phase === "error" ? "error" : "warn",
					children: githubView.statusText
				})
			})
		] });
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("myconfigs.login.title")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "ok",
					children: t("myconfigs.login.loggedInAs", { login: loginView.login })
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: t("myconfigs.login.targetRepo", { repo: targetRepo })
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: loginView.repoExists ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "ok",
					children: t("myconfigs.login.repoReady", { repo: loginView.repoUrl })
				}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "warn",
					children: t("myconfigs.login.repoMissing")
				})
			})
		] });
	};
	/** 上传 / 更新向导卡片（选 zip → 校验 → 表单 → 结果） */
	const renderWizard = () => {
		/** PR 链接（优先实时任务状态；收录完成后由轮询补上，或直接取同步结果） */
		const prLink = (() => {
			const live = listingStatus;
			const url = live !== null && live.prUrl !== null && live.prUrl !== "" ? live.prUrl : wizardRef.current.result?.prUrl ?? null;
			if (url === null || url === "") return null;
			const number = live !== null && live.prNumber !== null ? live.prNumber : wizardRef.current.result?.prNumber;
			return {
				url,
				label: number !== null && number !== void 0 ? t("myconfigs.result.pr", { number: String(number) }) : t("myconfigs.result.openPr")
			};
		})();
		/** 重置：update 模式轻量重置（只清 zip/校验，**保留预填表单**）；upload 模式完全重置 */
		const reset = () => {
			const w = wizardRef.current;
			if (w.mode === "update") commitWizard({
				...initialWizard("update"),
				step: "form",
				form: { ...w.form }
			});
			else commitWizard(initialWizard("upload"));
			setListingStatus(null);
		};
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
			open: true,
			onClose: closeUpload,
			title: wizard.mode === "update" ? t("myconfigs.update.title") : t("myconfigs.upload.title"),
			wide: true,
			busy: wizard.running || wizard.validating,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
				title: wizard.mode === "update" ? t("myconfigs.update.title") : t("myconfigs.upload.title"),
				onClose: closeUpload,
				closeDisabled: wizard.running || wizard.validating,
				trailing: wizard.mode === "update" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: t("myconfigs.update.hint")
				}) : void 0
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
				scroll: true,
				children: [
					wizard.step === "select" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("myconfigs.upload.selectHint")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							ref: fileInput,
							type: "file",
							accept: ".zip,application/zip",
							className: config_manager_module_css_default.hiddenFile,
							onChange: (e) => {
								const picked = e.target.files?.[0];
								e.target.value = "";
								onPickFile(picked);
							}
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.actionRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "primary",
								disabled: wizard.running,
								onClick: () => {
									fileInput.current?.click();
								},
								children: t("myconfigs.upload.select")
							})
						})
					] }),
					wizard.step === "validate" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("myconfigs.upload.selectHint")
						}),
						wizard.fileName !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: t("myconfigs.upload.selected", { name: wizard.fileName })
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.actionRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "primary",
								disabled: wizard.validating,
								onClick: reset,
								children: wizard.validating ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("myconfigs.upload.validating") }) : t("myconfigs.upload.reselect")
							})
						}),
						wizard.validationError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "error",
							children: redact(wizard.validationError)
						})
					] }),
					wizard.step === "form" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						wizard.mode === "update" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: t("myconfigs.update.zipHint")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								ref: fileInput,
								type: "file",
								accept: ".zip,application/zip",
								className: config_manager_module_css_default.hiddenFile,
								onChange: (e) => {
									const picked = e.target.files?.[0];
									e.target.value = "";
									onPickFile(picked);
								}
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.actionRow,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "primary",
									disabled: wizard.validating || wizard.running,
									onClick: () => {
										fileInput.current?.click();
									},
									children: wizard.fileName !== null && wizard.zipPath !== null ? t("myconfigs.upload.selected", { name: wizard.fileName }) : t("myconfigs.update.selectZip")
								}), wizard.zipPath !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									disabled: wizard.validating || wizard.running,
									onClick: reset,
									children: t("myconfigs.upload.reselect")
								})]
							}),
							wizard.validationError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "error",
								children: redact(wizard.validationError)
							})
						] }),
						wizard.validated && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "ok",
								children: t("myconfigs.upload.validateOk")
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Field, {
							label: t("myconfigs.upload.form.name"),
							hint: t("myconfigs.upload.form.nameHint"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: config_manager_module_css_default.input,
								value: wizard.form.name,
								onChange: (e) => {
									onFormField("name", e.target.value);
								}
							}), wizard.formErrors.name !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.formError,
								children: redact(wizard.formErrors.name)
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
							label: t("myconfigs.upload.form.description"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
								className: config_manager_module_css_default.input,
								value: wizard.form.description,
								onChange: (e) => {
									onFormField("description", e.target.value);
								}
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
							label: t("myconfigs.upload.form.categories"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: config_manager_module_css_default.input,
								value: wizard.form.categories,
								onChange: (e) => {
									onFormField("categories", e.target.value);
								}
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Field, {
							label: t("myconfigs.upload.mode.title"),
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.conflictOptions,
								children: [["migrate", t("myconfigs.upload.mode.migrate")], ["share", t("myconfigs.upload.mode.share")]].map(([value, label]) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
									className: config_manager_module_css_default.radioLabel,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "my-config-publish-mode",
										checked: wizard.form.publishMode === value,
										disabled: wizard.running || wizard.validating,
										onChange: () => {
											onFormField("publishMode", value);
										}
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: label })]
								}, value))
							}), wizard.form.publishMode === "share" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: t("myconfigs.upload.mode.shareHint")
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("myconfigs.upload.form.autoHint")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: autoBadges.map((b) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
								kind: "info",
								children: [
									b.label,
									"：",
									b.autoText
								]
							}, b.field))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.actionRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "primary",
									disabled: wizard.validated !== true || wizard.running || wizard.zipPath === null || !myConfigFormValid(wizard.formErrors),
									onClick: () => {
										runUpload();
									},
									children: wizard.running ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: wizard.mode === "update" ? t("myconfigs.update.running") : t("myconfigs.upload.running") }) : wizard.mode === "update" ? t("myconfigs.update.run") : t("myconfigs.upload.run")
								}),
								wizard.mode === "update" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									disabled: wizard.running || wizard.validating,
									onClick: cancelUpdate,
									children: t("common.cancel")
								}),
								wizard.mode === "upload" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									disabled: wizard.running,
									onClick: reset,
									children: t("myconfigs.upload.reselect")
								})
							]
						})
					] }),
					wizard.result !== null && wizard.result.ok && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("myconfigs.result.title")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "ok",
									children: t("myconfigs.result.version", { version: wizard.result.version })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: t("myconfigs.result.sha256", { hash: wizard.result.sha256 })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: t("myconfigs.result.sections", { sections: wizard.result.sections.join(", ") })
								})
							]
						}),
						wizard.result.listing === "pending" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: listingStatus !== null && listingStatus.listing === "failed" ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "error",
								children: t("myconfigs.result.listingFailed")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "danger",
								onClick: () => {
									runRelist(wizard.result.itemId);
								},
								children: t("myconfigs.result.relist")
							})] }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: t("myconfigs.result.listingPending")
							})
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.actionRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: t("myconfigs.result.repo")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									href: wizard.result.repoUrl,
									children: t("myconfigs.result.openRepo")
								}),
								prLink !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									href: prLink.url,
									children: prLink.label
								})
							]
						})
					] })
				]
			})]
		});
	};
	/** 已上传列表（条目卡片 + 状态徽章 + 行操作） */
	const renderList = () => {
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.headRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("myconfigs.list.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					myItems !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: t("myconfigs.list.summary", {
							total: String(summary.total),
							listed: String(summary.listed),
							pending: String(summary.pendingPr),
							none: String(summary.notListed)
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: listLoading,
						onClick: () => {
							loadItems();
						},
						children: listLoading ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("myconfigs.list.loading") }) : t("myconfigs.list.refresh")
					})
				]
			}),
			myItemsError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
				kind: "error",
				children: redact(myItemsError)
			}),
			listLoading && myItems === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("myconfigs.list.loading") })
			}),
			!listLoading && myItems !== null && myItems.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("myconfigs.list.empty") }),
			!listLoading && itemViews.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.snapshotList,
				children: itemViews.map(({ entry, view, badge }) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					style: { paddingTop: 4 },
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							flex: 1,
							minWidth: 0
						},
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.conflictHead,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.conflictId,
								children: view.name
							}), view.version !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: view.version
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: badge.kind,
									children: badge.text
								}),
								view.stars !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									title: t("list.starsHint"),
									children: t("list.stars", { count: String(view.stars) })
								}),
								view.author !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: view.author
								}),
								view.updatedAt !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: view.updatedAt
								}),
								view.categories.map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: c
								}, c))
							]
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.rowActions,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								onClick: () => {
									startUpdate(entry);
									openUpload();
								},
								children: t("myconfigs.item.update")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								disabled: install !== null && install.detail === null,
								onClick: () => {
									openInstall(entry);
								},
								children: t("myconfigs.item.install")
							}),
							entry.repoUrl !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								href: entry.repoUrl,
								children: t("myconfigs.list.openRepo")
							}),
							badge.kind === "warn" && badge.prUrl !== void 0 && badge.prUrl !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								href: badge.prUrl,
								children: t("myconfigs.item.openPr")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "danger",
								disabled: deletingId !== null,
								onClick: () => {
									onMyConfirmDeleteChange(view.id);
								},
								children: t("myconfigs.delete.run")
							})
						]
					})]
				}, view.id))
			})
		] });
	};
	/** 装回本地：下载 + 逐分区批准 + 执行导入（复用市场安全管道 + market-view 纯模型） */
	const renderInstall = () => {
		if (install === null) return null;
		const { detail } = install;
		const approvalList = detail !== null ? approvalRows(detail.plan, install.approvals) : [];
		const approvalSummary = detail !== null ? approvedAdapterSummary(detail.plan, install.approvals) : null;
		const detailView = detail !== null ? marketDetailView(detail, detail.repo ?? entryRepoUrl(install.itemId), true, uiT) : null;
		return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
			open: true,
			onClose: closeInstall,
			title: t("detail.title"),
			wide: true,
			busy: install.importing,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
				title: `${t("detail.title")}：${install.itemId}`,
				onClose: closeInstall,
				closeDisabled: install.importing
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
				scroll: true,
				children: [
					detail === null && install.error === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.statRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("list.loading") })
					}),
					detail === null && install.error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.statRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("myconfigs.install.failed")
						})
					}),
					detail !== null && detailView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "warn",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("detail.needReview") })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: detailView.badge.valid ? "ok" : "error",
								children: detailView.badge.statusText
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: detailView.badge.sectionsText
							})]
						}),
						approvalList.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.groupLabel,
								children: t("detail.approval.title")
							}),
							approvalSummary !== null && approvalSummary.highRiskTotal > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "warn",
								children: t("detail.approval.highRiskHint")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.conflictList,
								children: approvalList.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Checkbox, {
									checked: row.approved,
									onChange: (checked) => {
										if (installRef.current !== null) patchInstall({ approvals: {
											...installRef.current.approvals,
											[row.adapter]: checked
										} });
									},
									label: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: config_manager_module_css_default.conflictId,
											children: row.adapter
										}),
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
											kind: row.highRisk ? "warn" : "info",
											children: row.highRisk ? t("detail.approval.requiresApproval") : t("detail.approval.safe")
										}),
										" ",
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
											kind: "info",
											children: row.label
										})
									] })
								}, row.adapter))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.statRow,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: approvalSummary !== null && approvalSummary.canImport ? "ok" : "warn",
									children: approvalSummary !== null ? t("detail.approval.count", {
										selected: String(approvalSummary.selected),
										total: String(approvalSummary.total)
									}) : ""
								})
							})
						] }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.actionRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								variant: "primary",
								disabled: install.importing || approvalSummary !== null && !approvalSummary.canImport,
								onClick: () => {
									runImport();
								},
								children: install.importing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") }) : t("detail.import")
							})
						}),
						noApprovalHint && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "error",
							children: t("detail.noApproval")
						})
					] })
				]
			})]
		});
	};
	/** 装回本地详情展示用的仓库 URL（供应链警示来源行；取条目 repoUrl 兜底固定目标仓库） */
	function entryRepoUrl(itemId) {
		return (myItems ?? []).find((e) => e.id === itemId)?.repoUrl ?? `https://github.com/xiajiajun516/dsh-config-market`;
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("myconfigs.tab.myconfigs"),
				subtitle: t("myconfigs.login.hint")
			}),
			renderLoginCard(),
			loginView.kind === "logged-in" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.headRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("myconfigs.upload.title")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							variant: "primary",
							onClick: openUpload,
							children: t("myconfigs.upload.run")
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.hint,
					children: t("myconfigs.upload.selectHint")
				})] }),
				renderList(),
				uploadOpen && renderWizard(),
				installOpen && renderInstall()
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: disclaimerKey !== null,
				title: t("disclaimer.title"),
				message: disclaimerText(),
				confirmLabel: t("disclaimer.confirm"),
				cancelLabel: t("common.cancel"),
				onConfirm: confirmDisclaimer,
				onCancel: cancelDisclaimer,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.checkboxRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: dontAsk,
						onChange: (e) => {
							setDontAsk(e.target.checked);
						}
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("disclaimer.dontAsk") })]
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirmDeleteId !== null,
				title: t("myconfigs.delete.confirmTitle"),
				message: t("myconfigs.delete.confirmText"),
				confirmLabel: t("myconfigs.delete.confirm"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: deletingId !== null,
				onConfirm: async () => {
					const entry = (myItems ?? []).find((it) => it.id === confirmDeleteId);
					if (entry !== void 0) await runDelete(entry);
				},
				onCancel: () => {
					onMyConfirmDeleteChange(null);
				}
			})
		]
	});
}
//#endregion
//#region src/client/market/MarketPanel.tsx
/**
* 配置市场面板（备份与迁移页的第 5 个 tab 内容）。
*
* 产品决策：**内置单市场、只读、不可编辑** —— 市场绑定内置公开仓库
* `src/market/builtin.ts` 的 BUILTIN_MARKET_URL（创建者维护），无添加/移除/多市场 UI。
* 独立设置页壳已移除 —— tab 容器由 ConfigManagerSection 统一渲染，本组件只输出内容体：
* - 市场头部卡片：内置市场 URL + 官方徽章（不可编辑）+「拉取最新」；
* - 条目列表：搜索框 + 类别过滤 + 缓存状态徽章；
* - 条目详情：点「查看详情」→ POST /market/download（拉取 + §6 校验 + dry-run 预览）；
*   - **供应链警示恒展示**（来源 URL + 非官方审核 + 下载时间；确认导入前必经）；
*   - **逐分区批准**（安全不变式 (c)）：高风险分区默认不勾选、须逐项显式批准；
*   - 「确认导入」→ 只把已批准分区子计划交给 executeImportPlan（confirm:true 安全阀 + 回滚）。
*
* 全部渲染模型来自 ./market-view.ts 纯函数（node 单测覆盖），本组件只做装配；
* 状态组件内自持（useState），同时经 toMarketStoreSlice() 镜像进模块级 runStore：
* 模块级单例保证「切 tab 不丢」，sessionStorage 白名单保证「刷新恢复」
* （搜索词/类别筛选/条目列表/详情与逐分区批准/导入结果）。
* 安全：市场端点无任何 secret 输入（内置 URL 已由 validateRepoUrl 拒绝 userinfo）；downloaded
* 内容一律视为不可信，确认导入前 supply-chain 警示可见 & needsReview 恒 true（不允许默认信任）。
*/
const initial$2 = {
	subView: "browse",
	myItems: null,
	myItemsError: null,
	myWizard: null,
	myInstall: null,
	myConfirmDeleteId: null,
	loading: true,
	loadError: null,
	refreshing: false,
	browsing: false,
	items: [],
	search: "",
	category: "",
	sectionFilter: "",
	source: "all",
	sortKey: "default",
	downloadingId: null,
	detail: null,
	approvals: {},
	importing: false,
	importResult: null,
	error: null
};
/**
* 从 runStore 恢复上次的市场 UI 状态（切 tab 回 / 刷新后挂载）。
* 无敏感字段；detail.zipPath 为宿主受控临时文件（懒 GC 10 分钟），
* 若已过期，确认导入会得到明确错误 → 重新下载即可。
*/
function initFromStore$1() {
	const s = runStore.getSnapshot().market;
	return {
		...initial$2,
		subView: s.subView,
		myItems: s.myItems,
		myItemsError: s.myItemsError,
		myWizard: s.myWizard,
		myInstall: s.myInstall,
		myConfirmDeleteId: s.myConfirmDeleteId,
		search: s.search,
		category: s.category,
		sectionFilter: s.sectionFilter ?? "",
		source: s.source ?? "all",
		sortKey: s.sortKey ?? "default",
		items: s.items,
		detail: s.detail,
		approvals: s.approvals,
		importResult: s.importResult,
		error: s.error,
		loadError: s.loadError
	};
}
function MarketPanel({ api, myConfigsApi, importApi, syncApi, t }) {
	const uiT = api.t;
	const [state, setState] = (0, react.useState)(initFromStore$1);
	/** 最新 state 镜像（commit/卸载 flush 读取，避免闭包过期值） */
	const stateRef = (0, react.useRef)(state);
	/** 挂载守卫：卸载后不再 setState（store 镜像仍执行，异步结果照常落库） */
	const mountedRef = (0, react.useRef)(true);
	/**
	* 统一提交入口：更新 stateRef → 挂载时 setState → **总是**镜像进 runStore。
	* 关键：镜像不依赖 effect flush —— 异步操作（下载/确认导入）完成回调在组件
	* 已卸载（切走 tab）时也能把结果（detail/importResult）写进 store，切回恢复。
	*/
	const commit = (next) => {
		stateRef.current = next;
		if (mountedRef.current) setState(next);
		runStore.patch({ market: toMarketStoreSlice(next) });
	};
	const patch = (p) => commit({
		...stateRef.current,
		...p
	});
	/** 下载详情弹窗开关（瞬态 UI，不持久化） */
	const [downloadOpen, setDownloadOpen] = (0, react.useState)(false);
	/** 当前展示的免责弹窗操作（null = 无） */
	const [disclaimerKey, setDisclaimerKey] = (0, react.useState)(null);
	/** 免责弹窗「不再提示」勾选（每次打开重置） */
	const [dontAsk, setDontAsk] = (0, react.useState)(false);
	/**
	* K-07：未批准任何分区（表单内联校验，保留就地提示）。与 `state.error` 分流：
	* `state.error` 只承载「动作失败」（改为全局 Toast），本提示紧邻导入按钮、修正勾选后立即消失。
	*/
	const [noApprovalHint, setNoApprovalHint] = (0, react.useState)(false);
	/** localStorage（浏览器环境；免责「不再提示」跨会话持久化） */
	const storage = window.localStorage;
	/** 待下载条目（免责确认后取用；避免免责流程中闭包过期） */
	const pendingDownloadItem = (0, react.useRef)(null);
	/** 点条目「查看详情」：未勾「不再提示」→ 先弹免责，确认后下载并打开详情弹窗 */
	const openDownload = (item) => {
		pendingDownloadItem.current = item;
		if (readDisclaimerDismissed("download", storage)) {
			setDownloadOpen(true);
			runDownload(item);
			return;
		}
		setDontAsk(false);
		setDisclaimerKey("download");
	};
	/** 免责弹窗确认：勾选则记录「不再提示」→ 关闭免责 → 打开下载详情弹窗并启动下载 */
	const confirmDownloadDisclaimer = () => {
		if (disclaimerKey !== "download") return;
		if (dontAsk) writeDisclaimerDismissed("download", storage);
		setDisclaimerKey(null);
		const item = pendingDownloadItem.current;
		setDownloadOpen(true);
		if (item !== null) runDownload(item);
	};
	/** 关闭下载详情弹窗：清 detail（弹窗即会话，关闭即放弃） */
	const closeDownload = () => {
		setDownloadOpen(false);
		patch({
			detail: null,
			importResult: null,
			error: null,
			approvals: {}
		});
		setNoApprovalHint(false);
	};
	/** 卸载时置挂载守卫 + 最后镜像一次（防止「最后一次改动后立即切 tab」时丢状态）。 */
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
		runStore.patch({ market: toMarketStoreSlice(stateRef.current) });
	}, []);
	/** 内置市场 URL（单一权威；来自 Host 内置常量；用于条目来源判定与详情供应链警示） */
	const marketUrl = BUILTIN_MARKET_URL;
	/** 挂载时读取内置市场状态；返回响应供「首次打开自动更新」判据（bootAutoRefreshed） */
	const loadStatus = (0, react.useCallback)(async () => {
		patch({
			loading: true,
			loadError: null
		});
		try {
			const info = await api.status();
			patch({ loading: false });
			return info;
		} catch (err) {
			patch({
				loading: false,
				loadError: err instanceof Error ? err.message : String(err)
			});
			return null;
		}
	}, [api]);
	/**
	* 启动后首次打开市场页 → 自动拉取一次最新 index（需求：dsh 启动后第一次打开市场页面自动更新一次市场）。
	* 判据是 Host 侧进程内存标记 bootAutoRefreshed（dsh 重启后归零；refresh 成功后置位），
	* 因此「每次打开都刷新」/「刷新失败后下次打开重试」都自然成立；无需客户端持久化。
	* bootAutoChecked 同步置位防 StrictMode 双执行/竞态重复触发（同一组件实例只自动刷一次）。
	*/
	const bootAutoChecked = (0, react.useRef)(false);
	(0, react.useEffect)(() => {
		if (bootAutoChecked.current) return;
		bootAutoChecked.current = true;
		(async () => {
			const info = await loadStatus();
			if (info !== null && info.bootAutoRefreshed !== true) await runRefresh(false);
		})();
	}, []);
	/** 拉取内置市场最新 index.json → 重新浏览（缓存状态由 Host 合并）。
	*  `announce`：仅手动点击才给成功回执 —— 启动时的自动刷新静默，
	*  否则每次打开市场页都会弹一条用户没主动触发的通知。 */
	const runRefresh = async (announce = true) => {
		patch({
			refreshing: true,
			error: null,
			detail: null
		});
		try {
			await api.refresh();
			const res = await api.browse();
			patch({
				refreshing: false,
				browsing: false,
				items: res.items,
				search: "",
				category: ""
			});
			if (announce) toast.ok(t("config.refreshed"));
			loadStatus();
		} catch (err) {
			patch({
				refreshing: false,
				error: err instanceof Error ? err.message : String(err)
			});
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 浏览（不重新拉取）：POST /market/browse 合并 index + 缓存 */
	const runBrowse = async (announce = true) => {
		patch({
			browsing: true,
			error: null
		});
		try {
			const res = await api.browse();
			patch({
				browsing: false,
				items: res.items,
				search: "",
				category: ""
			});
			if (announce) toast.ok(t("list.browsed"));
		} catch (err) {
			patch({
				browsing: false,
				error: err instanceof Error ? err.message : String(err)
			});
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 下载 + 校验单条目 → dry-run 详情预览（零写入）。自托管条目（带 repo）必须携带来源仓库。
	*  竞态守卫：下载期间用户可发起另一条目下载（downloadingId 已变），晚到响应一律丢弃，
	*  防止「弹窗标题是 B、详情是 A」的串扰。 */
	const runDownload = async (item) => {
		patch({
			downloadingId: item.id,
			error: null
		});
		setNoApprovalHint(false);
		try {
			const detail = await api.download(item.id, item.repo);
			if (stateRef.current.downloadingId !== item.id) return;
			patch({
				downloadingId: null,
				detail,
				approvals: defaultApprovals(detail.plan)
			});
		} catch (err) {
			if (stateRef.current.downloadingId !== item.id) return;
			patch({
				downloadingId: null,
				error: err instanceof Error ? err.message : String(err)
			});
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	/** 确认导入：只导入用户显式批准的逐分区子集（subPlan 模式，与 sync-engine 同款） */
	const runImport = async () => {
		const detail = state.detail;
		if (detail === null) return;
		const approvedPlan = buildApprovedPlan(detail.plan, state.approvals);
		if (approvedPlan.items.length === 0) {
			setNoApprovalHint(true);
			return;
		}
		setNoApprovalHint(false);
		patch({
			importing: true,
			error: null
		});
		try {
			const executed = await importApi.executeImportPlan(detail.zipPath, approvedPlan, {
				confirm: true,
				rollbackOnError: true
			});
			patch({
				importing: false,
				importResult: executed
			});
			const okCount = executed.executed.filter((e) => e.status === "ok").length;
			const failedCount = executed.executed.filter((e) => e.status === "failed").length;
			const restartSuffix = executed.needsRestart ? ` · ${t("import.needsRestart")}` : "";
			if (executed.ok) toast.ok(t("import.done", { count: String(okCount) }) + restartSuffix);
			else toast.error(t("import.failed", { count: String(failedCount) }) + restartSuffix);
		} catch (err) {
			patch({
				importing: false,
				error: err instanceof Error ? err.message : String(err)
			});
			toast.error(redact(err instanceof Error ? err.message : String(err)));
		}
	};
	const sectionFiltered = filterMarketBySection(filterMarketItems(state.items, state.search, state.category), state.sectionFilter);
	const filtered = sortMarketItems(filterBySource(sectionFiltered.matched, state.source, marketUrl), state.sortKey);
	const sectionFilterUnknown = sectionFiltered.unknown;
	const summary = marketListSummary(state.items, uiT);
	const categories = collectCategories(state.items);
	const sectionOptions = collectCachedSections(state.items);
	const detailView = state.detail !== null ? marketDetailView(state.detail, state.detail.repo ?? marketUrl, state.items.length > 0 || state.detail.status !== "valid", uiT) : null;
	const approvalList = state.detail !== null ? approvalRows(state.detail.plan, state.approvals) : [];
	const approvalSummary = state.detail !== null ? approvedAdapterSummary(state.detail.plan, state.approvals) : null;
	const impact = state.detail !== null ? marketImpactSummary(state.detail.plan, state.detail.analysis) : null;
	const cacheLabel = (cacheState) => {
		if (cacheState === "cached") return t("list.cacheCached");
		if (cacheState === "fresh") return t("list.cacheFresh");
		return t("list.cacheNone");
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.modeTabs,
			role: "tablist",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"aria-selected": state.subView === "browse",
				"data-active": state.subView === "browse" ? "" : void 0,
				className: config_manager_module_css_default.modeTab,
				onClick: () => {
					patch({ subView: "browse" });
				},
				children: t("myconfigs.tab.browse")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				role: "tab",
				"aria-selected": state.subView === "myconfigs",
				"data-active": state.subView === "myconfigs" ? "" : void 0,
				className: config_manager_module_css_default.modeTab,
				onClick: () => {
					patch({ subView: "myconfigs" });
				},
				children: t("myconfigs.tab.myconfigs")
			})]
		}), state.subView === "myconfigs" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MyConfigsView, {
			meApi: myConfigsApi,
			api,
			importApi,
			syncApi,
			t,
			myItems: state.myItems,
			myItemsError: state.myItemsError,
			onMyItemsChange: (items, error) => {
				patch({
					myItems: items,
					myItemsError: error
				});
			},
			myWizard: state.myWizard,
			onMyWizardChange: (wizard) => {
				patch({ myWizard: wizard });
			},
			myInstall: state.myInstall,
			onMyInstallChange: (install) => {
				patch({ myInstall: install });
			},
			myConfirmDeleteId: state.myConfirmDeleteId,
			onMyConfirmDeleteChange: (id) => {
				patch({ myConfirmDeleteId: id });
			}
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("section.label"),
				subtitle: t("section.description")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.groupLabel,
				children: t("config.title")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					disabled: state.refreshing || state.importing || state.browsing,
					onClick: () => {
						runRefresh();
					},
					children: state.refreshing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("config.refreshing") }) : t("config.refresh")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					disabled: state.browsing || state.refreshing || state.importing,
					onClick: () => {
						runBrowse();
					},
					children: state.browsing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("list.loading") }) : t("list.browse")
				})]
			})] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: downloadOpen,
				onClose: closeDownload,
				title: t("detail.title"),
				wide: true,
				busy: state.importing,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
					title: `${t("detail.title")}：${state.detail !== null ? state.detail.name : state.downloadingId ?? ""}`,
					onClose: closeDownload,
					closeDisabled: state.importing
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
					scroll: true,
					children: [
						state.detail === null && state.error === null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") })
						}),
						state.detail === null && state.error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.hint,
								children: t("detail.failed")
							})
						}),
						state.detail !== null && detailView !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "warn",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("detail.needReview") })
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.warnList,
								children: detailView.warnings.map((w, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", {
									style: { color: w.kind === "warn" ? "var(--dsw-alias-state-warn-primary)" : void 0 },
									children: w.text
								}, i))
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.statRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: detailView.badge.statusKind === "ok" ? "ok" : "error",
										children: detailView.badge.statusText
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "info",
										children: detailView.badge.sectionsText
									}),
									state.detail.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "info",
										children: t("detail.version", { version: state.detail.version })
									})
								]
							}),
							detailView.errors.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: config_manager_module_css_default.fieldLabel,
								children: t("detail.errors")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.reportScroll,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
									className: config_manager_module_css_default.warnList,
									children: detailView.errors.map((e, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("li", { children: e }, i))
								})
							})] }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "info",
								children: t("detail.previewHint")
							}),
							impact !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: config_manager_module_css_default.statRow,
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "info",
										children: t("detail.impact.willChange", { count: String(impact.willChange) })
									}),
									impact.unchanged > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "ok",
										children: t("detail.impact.unchanged", { count: String(impact.unchanged) })
									}),
									impact.conflicts > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "error",
										children: t("detail.impact.conflicts", { count: String(impact.conflicts) })
									}),
									impact.secretsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "warn",
										children: t("detail.impact.secrets", { count: String(impact.secretsNeeded) })
									}),
									impact.pathMappingsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "warn",
										children: t("detail.impact.paths", { count: String(impact.pathMappingsNeeded) })
									}),
									impact.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: "warn",
										children: t("detail.impact.restart")
									})
								]
							}),
							detailView.canImport && approvalList.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.groupLabel,
									children: t("detail.approval.title")
								}),
								approvalSummary !== null && approvalSummary.highRiskTotal > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
									kind: "warn",
									children: t("detail.approval.highRiskHint")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: config_manager_module_css_default.conflictList,
									children: approvalList.map((row) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
										className: config_manager_module_css_default.checkboxRow,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: row.approved,
											onChange: (e) => {
												patch({ approvals: {
													...state.approvals,
													[row.adapter]: e.target.checked
												} });
											}
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: config_manager_module_css_default.conflictId,
												children: row.adapter
											}),
											" ",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: row.highRisk ? "warn" : "info",
												children: row.highRisk ? t("detail.approval.requiresApproval") : t("detail.approval.safe")
											}),
											" ",
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "info",
												children: row.label
											})
										] })]
									}, row.adapter))
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: config_manager_module_css_default.statRow,
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
										kind: approvalSummary !== null && approvalSummary.canImport ? "ok" : "warn",
										children: approvalSummary !== null ? t("detail.approval.count", {
											selected: String(approvalSummary.selected),
											total: String(approvalSummary.total)
										}) : ""
									})
								})
							] }),
							detailView.canImport ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: config_manager_module_css_default.actionRow,
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									variant: "primary",
									disabled: state.importing || approvalSummary !== null && !approvalSummary.canImport,
									onClick: () => {
										runImport();
									},
									children: state.importing ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") }) : t("detail.import")
								})
							}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "error",
								children: t("detail.emptySections")
							}),
							detailView.canImport && noApprovalHint && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
								kind: "error",
								children: t("detail.noApproval")
							})
						] })
					]
				})]
			}),
			!downloadOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				state.loadError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("list.empty") }),
				state.loadError === null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.marketFilterGrid,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "text",
							className: `${config_manager_module_css_default.input} ${config_manager_module_css_default.marketFilterSearch}`,
							value: state.search,
							placeholder: t("list.searchPlaceholder"),
							onChange: (e) => {
								patch({ search: e.target.value });
							}
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							className: config_manager_module_css_default.select,
							value: state.category,
							onChange: (e) => {
								patch({ category: e.target.value });
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "",
								children: t("list.categoriesAll")
							}), categories.map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							className: config_manager_module_css_default.select,
							value: state.sectionFilter,
							onChange: (e) => {
								patch({ sectionFilter: e.target.value });
							},
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "",
								children: t("list.sectionsAll")
							}), sectionOptions.map((s) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							className: config_manager_module_css_default.select,
							value: state.source,
							onChange: (e) => {
								patch({ source: e.target.value });
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "all",
									children: t("list.sourceAll")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "official",
									children: t("list.sourceOfficial")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "personal",
									children: t("list.sourcePersonal")
								})
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
							className: config_manager_module_css_default.select,
							value: state.sortKey,
							onChange: (e) => {
								patch({ sortKey: e.target.value });
							},
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "default",
									children: t("list.sortDefault")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "updatedAt",
									children: t("list.sortUpdated")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "stars",
									children: t("list.sortStars")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
									value: "name",
									children: t("list.sortName")
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.marketFilterMeta,
					children: [state.sectionFilter !== "" && sectionFilterUnknown > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("list.sectionsUnknown", { count: String(sectionFilterUnknown) })
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "info",
						children: filtered.length > 0 ? filtered.length < summary.total ? `${t("list.count", { count: String(summary.total) })}${t("list.filtered", { count: String(filtered.length) })}` : t("list.count", { count: String(summary.total) }) : t("list.count", { count: String(summary.total) })
					})]
				})] }),
				state.browsing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.statRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("list.loading") })
				}),
				!state.browsing && state.loadError === null && state.items.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("list.noItems") }),
				!state.browsing && state.loadError === null && filtered.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.snapshotList,
					children: filtered.map((it) => {
						const sourceKind = sourceBadgeKind(it, marketUrl);
						return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.statRow,
							style: { paddingTop: 4 },
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: config_manager_module_css_default.conflictHead,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: config_manager_module_css_default.conflictId,
											children: it.name
										}), it.version !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
											kind: "info",
											children: it.version
										})]
									}),
									(it.author !== void 0 || it.description !== void 0) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
										className: config_manager_module_css_default.hint,
										children: [
											it.author !== void 0 ? `${it.author}` : "",
											it.author !== void 0 && it.description !== void 0 ? " · " : "",
											it.description ?? ""
										]
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: config_manager_module_css_default.statRow,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: sourceKind,
												children: sourceKind === "ok" ? t("list.sourceOfficial") : t("list.sourcePersonal")
											}),
											(it.categories ?? []).map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "info",
												children: c
											}, c)),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: it.cacheState === "cached" ? "ok" : it.cacheState === "fresh" ? "info" : "warn",
												children: cacheLabel(it.cacheState)
											}),
											it.stars !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
												kind: "info",
												title: t("list.starsHint"),
												children: t("list.stars", { count: String(it.stars) })
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
								disabled: state.downloadingId !== null,
								onClick: () => {
									openDownload(it);
								},
								children: state.downloadingId === it.id ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") }) : t("list.download")
							})]
						}, it.id);
					})
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: disclaimerKey === "download",
				title: t("disclaimer.title"),
				message: t("disclaimer.download.text"),
				confirmLabel: t("disclaimer.confirm"),
				cancelLabel: t("common.cancel"),
				onConfirm: confirmDownloadDisclaimer,
				onCancel: () => {
					setDisclaimerKey(null);
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
					className: config_manager_module_css_default.checkboxRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: dontAsk,
						onChange: (e) => {
							setDontAsk(e.target.checked);
						}
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("disclaimer.dontAsk") })]
				})
			})
		] })]
	});
}
//#endregion
//#region src/client/about/about-view.ts
/**
* 由仓库 URL 派生各链接；恒等推导，杜绝拼接错误。
*
* - starUrl = repoUrl（去尾斜杠归一化后原样）；
* - docsUrl = repoUrl + '#readme'；
* - issuesUrl = repoUrl + '/issues'；
* - releasesUrl = repoUrl + '/releases'；
* - 输入尾斜杠（含多个）会被归一化去除，如 'https://…/repo/' → 'https://…/repo'。
*/
function deriveAboutLinks(repoUrl) {
	const base = repoUrl.trim().replace(/\/+$/, "");
	return {
		starUrl: base,
		repoUrl: base,
		docsUrl: `${base}#readme`,
		issuesUrl: `${base}/issues`,
		releasesUrl: `${base}/releases`
	};
}
/**
* 动态状态 → 展示行（版本 / DSH / 平台）。
*
* - version = pluginVersion（原样透传，避免 client 侧重复维护版本号）；
* - dsh = dshVersion（原样透传）；
* - platform = `${platform} · ${arch}`（合并平台与架构，供 Badge 单行展示）。
*/
function aboutStatusRows(status) {
	return {
		version: status.pluginVersion,
		dsh: status.dshVersion,
		platform: `${status.platform} · ${status.arch}`,
		diagnostics: diagnosticsRow(status)
	};
}
/**
* 诊断行（issue #28）：仅当宿主回了 homeDir 与 profile 时展示（老版本宿主 → null，面板自动隐藏）。
* 路径分隔符归一化为 '/'，避免 Windows 反斜杠在 UI 上显示混乱。
*/
function diagnosticsRow(status) {
	const homeDir = status.homeDir;
	const profile = status.profile;
	if (typeof homeDir !== "string" || homeDir === "" || typeof profile !== "string" || profile === "") return null;
	return {
		profileDir: `${homeDir.replace(/\\/g, "/")}/profiles/${profile}`,
		profile,
		pluginCount: status.installedPluginCount ?? 0,
		manifestUnreadable: status.profileManifestReadable === false
	};
}
/** 插件公开元数据常量（见设计文档 §3；repoUrl 与 package.json repository 一致） */
const ABOUT_META = {
	name: "DSH Config Manager",
	repoUrl: "https://github.com/xiajiajun516/dsh-config-manager",
	author: "xiajiajun516",
	authorUrl: "https://github.com/xiajiajun516"
};
/** 由 ABOUT_META.repoUrl 派生的外链常量（单一来源，恒与元数据一致） */
const ABOUT_LINKS = deriveAboutLinks(ABOUT_META.repoUrl);
/** CLI 引导卡的展示数据（P1-⑩：GUI 里发现不了 CLI → About 面板给安装/常用命令/文档入口）。
*  CLI 是独立 npm 工具（与插件分开安装：`--omit=peer` 让离线救援端零 DSH 运行时依赖），
*  DSH 挂了也能用；文案与命令见 README.md「CLI — the first line of defense」。 */
const ABOUT_CLI = {
	installCommand: "npm install -g dsh-config-manager@latest --omit=peer",
	commands: [
		{
			command: "dsh-config-manager help",
			description: "列出全部 CLI 命令与用法（离线可用）"
		},
		{
			command: "dsh-config-manager snapshots",
			description: "列出本机回滚快照（无需 DSH 运行）"
		},
		{
			command: "dsh-config-manager restore [--id <id>] [--dry-run]",
			description: "恢复到导入前状态（离线）"
		},
		{
			command: "dsh-config-manager reinstall [--yes] [--wipe-config]",
			description: "一键重装 DSH（救援）"
		}
	],
	docsUrl: "https://github.com/xiajiajun516/dsh-config-manager#-cli--the-first-line-of-defense-when-dsh-is-broken"
};
//#endregion
//#region src/client/about/release-notes-view.ts
/**
* 解析 GitHub 仓库 URL，提取 owner 与 repo。
* 例如 'https://github.com/xiajiajun516/dsh-config-manager' → { owner: 'xiajiajun516', repo: 'dsh-config-manager' }
*/
function parseGitHubRepo(repoUrl) {
	if (typeof repoUrl !== "string") return null;
	const match = repoUrl.trim().replace(/\/+$/, "").match(/^https?:\/\/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/i);
	if (!match || !match[1] || !match[2]) return null;
	return {
		owner: match[1],
		repo: match[2].replace(/\.git$/i, "")
	};
}
/**
* 构造 GitHub Releases API URL。
*/
function buildReleasesApiUrl(repoUrl, page = 1, perPage = 5) {
	const parsed = parseGitHubRepo(repoUrl);
	const safePage = Math.max(1, Math.floor(page));
	const safePerPage = Math.max(1, Math.min(100, Math.floor(perPage)));
	if (!parsed) return `https://api.github.com/repos/xiajiajun516/dsh-config-manager/releases?page=${safePage}&per_page=${safePerPage}`;
	return `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/releases?page=${safePage}&per_page=${safePerPage}`;
}
/**
* 由仓库 URL 派生 Releases 页面 URL。
*/
function deriveReleasesUrl(repoUrl) {
	return `${repoUrl.trim().replace(/\/+$/, "")}/releases`;
}
/**
* 格式化 ISO 日期为可读字符串（YYYY-MM-DD）。
*/
function formatReleaseDate(isoDate) {
	if (!isoDate || typeof isoDate !== "string") return "";
	try {
		const d = new Date(isoDate);
		if (isNaN(d.getTime())) return isoDate;
		return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
	} catch {
		return isoDate;
	}
}
/**
* 解析单个 GitHub Release 原始对象为规范化 FormattedRelease。
* draft 统一过滤（返回 null）。
*/
function parseReleaseItem(raw) {
	if (typeof raw !== "object" || raw === null) return null;
	const item = raw;
	if (item.draft === true) return null;
	const tag = typeof item.tag_name === "string" && item.tag_name.trim() !== "" ? item.tag_name.trim() : "";
	if (!tag) return null;
	const id = typeof item.id === "number" ? item.id : Math.floor(Math.random() * 1e6);
	const title = typeof item.name === "string" && item.name.trim() !== "" ? item.name.trim() : tag;
	const body = typeof item.body === "string" ? item.body : "";
	const publishedAt = item.published_at || item.created_at || "";
	return {
		id,
		tag,
		title,
		body,
		publishedAt,
		publishedDateStr: formatReleaseDate(publishedAt),
		url: typeof item.html_url === "string" && item.html_url !== "" ? item.html_url : `https://github.com/xiajiajun516/dsh-config-manager/releases/tag/${encodeURIComponent(tag)}`,
		isPrerelease: item.prerelease === true
	};
}
/**
* 解析 API 返回的 Releases 数组。
*/
function parseReleasesResponse(data) {
	if (!Array.isArray(data)) return [];
	const list = [];
	for (const item of data) {
		const parsed = parseReleaseItem(item);
		if (parsed !== null) list.push(parsed);
	}
	return list;
}
/**
* 分页获取 GitHub Releases。
*/
async function fetchReleases(repoUrl, page = 1, perPage = 5, fetcher = globalThis.fetch) {
	const res = await fetcher(buildReleasesApiUrl(repoUrl, page, perPage), { headers: { Accept: "application/vnd.github.v3+json" } });
	if (!res.ok) {
		if (res.status === 403 || res.status === 429) throw new Error("GitHub API 速率限制（Rate limit exceeded），请稍后再试或直接在 GitHub 上查看。");
		if (res.status === 404) return {
			releases: [],
			hasMore: false,
			page
		};
		throw new Error(`GitHub API 请求失败 (${res.status} ${res.statusText})`);
	}
	const json = await res.json();
	return {
		releases: parseReleasesResponse(json),
		hasMore: Array.isArray(json) && json.length >= perPage,
		page
	};
}
/**
* 将 GitHub Release body 纯文本转换为结构化 Markdown 块列表，
* 供 React 纯组件进行安全渲染，不依赖任何第三方 Markdown 库与 innerHTML。
*/
function parseMarkdownBlocks(text) {
	if (!text || typeof text !== "string") return [];
	const lines = text.split(/\r?\n/);
	const blocks = [];
	let inCodeBlock = false;
	let codeLang = "";
	let codeBuffer = [];
	for (let i = 0; i < lines.length; i++) {
		const rawLine = lines[i];
		const trimmed = rawLine.trim();
		if (trimmed.startsWith("```")) {
			if (inCodeBlock) {
				blocks.push({
					type: "code-block",
					code: codeBuffer.join("\n"),
					lang: codeLang || void 0
				});
				codeBuffer = [];
				inCodeBlock = false;
				codeLang = "";
			} else {
				inCodeBlock = true;
				codeLang = trimmed.slice(3).trim();
				codeBuffer = [];
			}
			continue;
		}
		if (inCodeBlock) {
			codeBuffer.push(rawLine);
			continue;
		}
		if (trimmed === "") continue;
		if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
			blocks.push({ type: "hr" });
			continue;
		}
		const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch && headingMatch[1] && headingMatch[2]) {
			blocks.push({
				type: "heading",
				level: headingMatch[1].length,
				text: headingMatch[2].trim()
			});
			continue;
		}
		if (trimmed.startsWith(">")) {
			blocks.push({
				type: "quote",
				text: trimmed.replace(/^>\s*/, "").trim()
			});
			continue;
		}
		const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
		if (unorderedMatch && unorderedMatch[1]) {
			blocks.push({
				type: "list-item",
				text: unorderedMatch[1].trim(),
				ordered: false
			});
			continue;
		}
		const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
		if (orderedMatch && orderedMatch[1] && orderedMatch[2]) {
			blocks.push({
				type: "list-item",
				text: orderedMatch[2].trim(),
				ordered: true,
				index: parseInt(orderedMatch[1], 10)
			});
			continue;
		}
		blocks.push({
			type: "paragraph",
			text: trimmed
		});
	}
	if (inCodeBlock && codeBuffer.length > 0) blocks.push({
		type: "code-block",
		code: codeBuffer.join("\n"),
		lang: codeLang || void 0
	});
	return blocks;
}
//#endregion
//#region src/client/about/ReleaseNotesDialog.tsx
/**
* ReleaseNotesDialog —— GitHub Releases 版本更新内容弹窗。
*
* 特性：
* - 动态拉取 GitHub Releases 真实数据（过滤草稿）
* - 支持向下无限滚动加载更多版本（分页 pagination）
* - 纯安全 Markdown 渲染（不使用 dangerouslySetInnerHTML，杜绝 XSS）
* - 各版本状态徽章（最新 / 预发布）、发布日期与对应 GitHub Release 快速跳转
* - 遵循 --dsw-* token 与 dialog 体系样式（dialogMask / dialogCard / dialogWide）
*/
const PAGE_SIZE = 5;
/**
* 纯 React 安全渲染 Markdown 文本行中的行内格式（粗体、行内代码、链接）。
*/
function renderInlineMarkdown(text) {
	return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, idx) => {
		if (!part) return null;
		if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
			className: config_manager_module_css_default.cliName,
			children: part.slice(1, -1)
		}, idx);
		if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: part.slice(2, -2) }, idx);
		const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		if (linkMatch && linkMatch[1] && linkMatch[2]) return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
			href: linkMatch[2],
			target: "_blank",
			rel: "noreferrer",
			className: config_manager_module_css_default.aboutAuthor,
			children: linkMatch[1]
		}, idx);
		return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: part }, idx);
	});
}
/**
* 渲染单个结构化 Markdown 块。
*/
function MarkdownBlockView({ block }) {
	switch (block.type) {
		case "heading": {
			const headingStyle = {
				fontWeight: 600,
				color: "var(--dsw-alias-label-primary)",
				marginTop: block.level === 1 ? "12px" : "8px",
				marginBottom: "4px",
				fontSize: block.level === 1 ? "15px" : block.level === 2 ? "14px" : "13px"
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: headingStyle,
				children: block.text
			});
		}
		case "list-item": return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				gap: "6px",
				alignItems: "flex-start",
				paddingLeft: "4px"
			},
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				style: {
					color: "var(--dsw-alias-label-tertiary)",
					userSelect: "none"
				},
				children: block.ordered ? `${block.index ?? 1}.` : "•"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: { flex: 1 },
				children: renderInlineMarkdown(block.text)
			})]
		});
		case "quote": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			style: {
				borderLeft: "3px solid var(--dsw-alias-border-l1)",
				paddingLeft: "8px",
				color: "var(--dsw-alias-label-secondary)",
				fontStyle: "italic"
			},
			children: renderInlineMarkdown(block.text)
		});
		case "code-block": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
			className: config_manager_module_css_default.cliCommand,
			style: {
				margin: "4px 0",
				padding: "8px",
				fontSize: "12px"
			},
			children: block.code
		});
		case "hr": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { style: {
			borderBottom: "1px solid var(--dsw-alias-border-l2)",
			margin: "8px 0"
		} });
		default: return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: renderInlineMarkdown(block.text) });
	}
}
/**
* 单个版本的卡片视图。
*/
function ReleaseCardView({ release, isFirst, t }) {
	const blocks = parseMarkdownBlocks(release.body);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			gap: "8px",
			padding: "12px",
			background: "var(--dsw-alias-bg-base)",
			border: "1px solid var(--dsw-alias-border-l1)",
			borderRadius: "8px"
		},
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-start",
				gap: "8px",
				flexWrap: "wrap"
			},
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "8px",
					flexWrap: "wrap"
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "14px",
							fontWeight: 600,
							color: "var(--dsw-alias-label-primary)"
						},
						children: release.title
					}),
					isFirst && !release.isPrerelease && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "ok",
						children: t("about.releaseNotes.latest")
					}),
					release.isPrerelease && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: t("about.releaseNotes.prerelease")
					}),
					release.publishedDateStr && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "12px",
							color: "var(--dsw-alias-label-tertiary)"
						},
						children: release.publishedDateStr
					})
				]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
				href: release.url,
				title: t("about.releaseNotes.viewSingleOnGithub"),
				className: config_manager_module_css_default.dialogClose,
				children: [t("about.releaseNotes.viewSingleOnGithub"), " ↗"]
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				gap: "6px",
				fontSize: "13px",
				lineHeight: "1.6",
				color: "var(--dsw-alias-label-primary)"
			},
			children: blocks.length > 0 ? blocks.map((block, idx) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarkdownBlockView, { block }, idx)) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: {
					color: "var(--dsw-alias-label-tertiary)",
					fontStyle: "italic"
				},
				children: t("about.releaseNotes.noBody")
			})
		})]
	});
}
function ReleaseNotesDialog({ open, onClose, onConfirm, onNeverShow, t, repoUrl = ABOUT_META.repoUrl }) {
	const [releases, setReleases] = (0, react.useState)([]);
	const [page, setPage] = (0, react.useState)(1);
	const [loading, setLoading] = (0, react.useState)(false);
	const [loadingMore, setLoadingMore] = (0, react.useState)(false);
	const [hasMore, setHasMore] = (0, react.useState)(true);
	const [error, setError] = (0, react.useState)(null);
	const bodyRef = (0, react.useRef)(null);
	const isFetchingRef = (0, react.useRef)(false);
	const handleConfirm = () => {
		if (onConfirm) onConfirm();
		else onClose();
	};
	const handleNeverShow = () => {
		if (onNeverShow) onNeverShow();
		else onClose();
	};
	const loadFirstPage = (0, react.useCallback)(async () => {
		setLoading(true);
		setError(null);
		setReleases([]);
		setPage(1);
		setHasMore(true);
		isFetchingRef.current = true;
		try {
			const result = await fetchReleases(repoUrl, 1, PAGE_SIZE);
			setReleases(result.releases);
			setHasMore(result.hasMore);
			setPage(1);
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
		} finally {
			setLoading(false);
			isFetchingRef.current = false;
		}
	}, [repoUrl]);
	const loadNextPage = (0, react.useCallback)(async () => {
		if (isFetchingRef.current || !hasMore || loading || loadingMore) return;
		isFetchingRef.current = true;
		setLoadingMore(true);
		const nextPage = page + 1;
		try {
			const result = await fetchReleases(repoUrl, nextPage, PAGE_SIZE);
			setReleases((prev) => [...prev, ...result.releases]);
			setHasMore(result.hasMore);
			setPage(nextPage);
		} catch (err) {
			setError(err instanceof Error ? err.message : String(err));
		} finally {
			setLoadingMore(false);
			isFetchingRef.current = false;
		}
	}, [
		hasMore,
		loading,
		loadingMore,
		page,
		repoUrl
	]);
	(0, react.useEffect)(() => {
		if (open) loadFirstPage();
	}, [open, loadFirstPage]);
	(0, react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	const handleScroll = () => {
		const el = bodyRef.current;
		if (!el) return;
		if (el.scrollHeight - el.scrollTop - el.clientHeight < 100 && hasMore && !loading && !loadingMore && !error) loadNextPage();
	};
	const releasesPageUrl = deriveReleasesUrl(repoUrl);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
		open,
		onClose,
		title: t("about.releaseNotes.title"),
		cardStyle: {
			width: "min(640px, 100%)",
			maxHeight: "85vh"
		},
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
				title: t("about.releaseNotes.title"),
				onClose
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
				scroll: true,
				innerRef: bodyRef,
				onScroll: handleScroll,
				style: {
					maxHeight: "65vh",
					gap: "12px"
				},
				children: [
					loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: {
							padding: "24px 0",
							display: "flex",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("about.releaseNotes.loading") })
					}),
					error !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
						kind: "error",
						children: error
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.actionRow,
						style: { marginTop: "8px" },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							onClick: () => {
								loadFirstPage();
							},
							children: t("about.releaseNotes.retry")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							href: releasesPageUrl,
							children: t("about.releaseNotes.viewOnGithub")
						})]
					})] }),
					!loading && error === null && releases.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: {
							padding: "20px 0",
							textAlign: "center",
							color: "var(--dsw-alias-label-secondary)"
						},
						children: t("about.releaseNotes.empty")
					}),
					!loading && releases.map((release, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReleaseCardView, {
						release,
						isFirst: index === 0,
						t
					}, release.id)),
					loadingMore && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: {
							padding: "12px 0",
							display: "flex",
							justifyContent: "center"
						},
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("about.releaseNotes.loadingMore") })
					}),
					!loading && !loadingMore && !hasMore && releases.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						style: {
							textAlign: "center",
							padding: "8px 0",
							fontSize: "12px",
							color: "var(--dsw-alias-label-tertiary)"
						},
						children: [
							"— ",
							t("about.releaseNotes.allLoaded"),
							" —"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				style: {
					justifyContent: "space-between",
					alignItems: "center",
					borderTop: "1px solid var(--dsw-alias-border-l1)",
					paddingTop: "10px",
					paddingBottom: "14px",
					paddingLeft: "16px",
					paddingRight: "16px",
					flexWrap: "wrap",
					gap: "8px"
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					href: releasesPageUrl,
					children: t("about.releaseNotes.viewOnGithub")
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: "8px",
						alignItems: "center"
					},
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						onClick: handleNeverShow,
						children: t("about.releaseNotes.neverShow")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						onClick: handleConfirm,
						children: t("about.releaseNotes.confirm")
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/client/about/AboutPanel.tsx
/**
* 「关于（About）」面板（设置页第 6 个 tab 内容，docs/design/2026-08-19-about-tab-design.md §4）。
*
* 纯静态展示视图 + 外链，无表单 / 无写操作 / 无新增依赖：
* - 项目信息卡：插件名 + 官方 Badge；版本 / DSH / 平台 Badge（运行时信息，经 api.status() 获取）；
* - 相关链接卡：Star 主按钮（外链）+ 仓库 / 文档 / Issues 链接行 + 作者行；
* - 公开元数据（名称 / 仓库 / 作者 / 链接）全部来自 ./about-view.ts 的 ABOUT_META / ABOUT_LINKS
*   （静态常量，单一来源，node 单测覆盖）；
* - 状态行格式化委托 ./about-view.ts 的 aboutStatusRows 纯函数（组件不实现可测试业务逻辑）；
* - 版本号不在此重复维护 —— 展示值一律来自 status()（AGENTS.md §版本号三处同步教训）。
*
* 安全：无任何输入表单（无 secret 泄漏面）；外链一律 target="_blank" + rel="noreferrer"
* （防 tabnabbing）；错误文本渲染前经 redact() 兜底（安全不变量）。
* 状态组件内自持（低频静态视图，同 Snapshots/Sync/Market 策略，不进 sessionStorage）。
*/
const initial$1 = {
	loading: true,
	loadError: null,
	rows: null
};
function AboutPanel({ api, t }) {
	const [state, setState] = (0, react.useState)(initial$1);
	const [releaseNotesOpen, setReleaseNotesOpen] = (0, react.useState)(false);
	const patch = (p) => setState((s) => ({
		...s,
		...p
	}));
	/** 读取运行时版本信息（pluginVersion / dshVersion / platform+arch → 展示行） */
	const loadStatus = (0, react.useCallback)(async () => {
		patch({
			loading: true,
			loadError: null
		});
		try {
			const status = await api.status();
			patch({
				loading: false,
				rows: aboutStatusRows(status)
			});
		} catch (err) {
			patch({
				loading: false,
				loadError: err instanceof Error ? err.message : String(err)
			});
		}
	}, [api]);
	(0, react.useEffect)(() => {
		loadStatus();
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("about.title"),
				subtitle: t("about.subtitle")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: ABOUT_META.name
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.statRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "ok",
						children: t("about.official")
					})
				}),
				state.loading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.statRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("about.loading") })
				}),
				state.loadError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
					kind: "error",
					children: redact(state.loadError)
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						onClick: () => {
							loadStatus();
						},
						children: t("about.retryStatus")
					})
				})] }),
				state.rows !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					style: {
						flexWrap: "wrap",
						gap: "8px",
						alignItems: "center"
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("about.version", { version: state.rows.version })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("about.dshVersion", { version: state.rows.dsh })
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: state.rows.platform
						})
					]
				}),
				state.rows?.diagnostics != null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					style: {
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "4px"
					},
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("about.diag.label")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("about.diag.profileDir", { path: state.rows.diagnostics.profileDir }) }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("about.diag.profile", { profile: state.rows.diagnostics.profile }) }),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: t("about.diag.pluginCount", { count: String(state.rows.diagnostics.pluginCount) }) }),
						state.rows.diagnostics.manifestUnreadable && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
							kind: "warn",
							children: t("about.diag.manifestUnreadable")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.groupLabel,
							children: t("about.diag.hint")
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("about.links")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						href: ABOUT_LINKS.starUrl,
						children: t("about.star")
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.aboutLinkRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							href: ABOUT_LINKS.repoUrl,
							children: t("about.repo")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							href: ABOUT_LINKS.docsUrl,
							children: t("about.docs")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							href: ABOUT_LINKS.issuesUrl,
							children: t("about.issues")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							onClick: () => setReleaseNotesOpen(true),
							children: t("about.releaseNotes")
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.authorRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t("about.authorLabel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
						className: config_manager_module_css_default.aboutAuthor,
						href: ABOUT_META.authorUrl,
						target: "_blank",
						rel: "noreferrer",
						children: ABOUT_META.author
					})]
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.groupLabel,
					children: t("about.cli.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("about.cli.hint")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
					className: config_manager_module_css_default.cliCommand,
					children: ABOUT_CLI.installCommand
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
					className: config_manager_module_css_default.reportList,
					children: ABOUT_CLI.commands.map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", {
							className: config_manager_module_css_default.cliName,
							children: c.command
						}),
						" — ",
						c.description
					] }, c.command))
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						href: ABOUT_CLI.docsUrl,
						children: t("about.cli.docs")
					})
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReleaseNotesDialog, {
				open: releaseNotesOpen,
				onClose: () => setReleaseNotesOpen(false),
				onConfirm: () => {
					setReleaseNotesOpen(false);
					if (state.rows?.version) api.saveReleaseNotesPrompt({ lastSeenVersion: state.rows.version }).catch(() => {});
				},
				onNeverShow: () => {
					setReleaseNotesOpen(false);
					api.saveReleaseNotesPrompt({
						dismissed: true,
						lastSeenVersion: state.rows?.version
					}).catch(() => {});
				},
				t
			})
		]
	});
}
//#endregion
//#region src/ui/profiles-view.ts
/** 校验 Profile 名输入（与 host/ProfileManager 同规则：拒绝路径穿越/非法字符；空提示）。 */
function validateProfileNameInput(name) {
	const trimmed = name.trim();
	if (trimmed === "") return "name is required";
	if (trimmed.length > 64) return "name must be ≤ 64 characters";
	if (trimmed === "." || trimmed === "..") return "illegal name";
	if (trimmed.includes("/") || trimmed.includes("\\") || trimmed.includes("\0")) return "illegal characters";
	if (trimmed.includes("..")) return "illegal characters";
	return null;
}
function summarizeSwitchPreview(preview) {
	const items = preview.items;
	const count = (kinds) => items.filter((i) => kinds.includes(i.kind)).length;
	return {
		willChange: count([
			"Create",
			"Update",
			"Install",
			"Conflict"
		]),
		unchanged: count(["Skip"]),
		conflicts: count(["Conflict"]),
		secretsNeeded: preview.missingSecrets.length,
		needsRestart: preview.needsRestart,
		sectionsInProfile: preview.sectionsInProfile
	};
}
/** 切换结果 → 语义 kind（ok / failed / rolledBack；与同步 applyItemsReportView 语义一致）。 */
function profileSwitchKind(result) {
	if (result === null) return "ok";
	if (!result.ok && result.rollback !== null) return "rolledBack";
	if (!result.ok) return "failed";
	return "ok";
}
//#endregion
//#region src/client/profiles/ProfilesPanel.tsx
/**
* 配置档案面板（第 7 个 tab「配置文件」；m-profiles）。
*
* Profile = 用户在 DSH 中的一组配置快照（Work / Personal / …），由 src/profiles/
* 的 ProfileManager 管理（save/list/delete/rename/switch）。本视图：
* - **保存当前配置**：输入名 → POST /profiles/save（复用 adapter.export，天然不含秘密值）；
* - **切换**：点「切换预览」→ 只读 preview（零写入）→ 确认弹窗 → executeSwitch
*   （confirm 安全阀 + 自动快照 + 失败整体回滚，与导入同一语义）；
* - **重命名 / 删除**：危险操作删除走 ConfirmDialog；
* - **导入**：上传 profile.json 文本（JSON 字段 content）→ POST /profiles/import。
*
* 状态组件自持（useState），同时镜像 runStore.profiles 切片（切 tab/刷新不丢列表/预览/结果）。
* 安全：Profile 天然不含秘密值（Save 走 adapter.export 脱敏）；重命名/删除/切换均确认。
*/
const initial = {
	status: "loading",
	loadError: null,
	profiles: [],
	saveName: "",
	saving: false,
	previewName: null,
	preview: null,
	previewing: false,
	switching: false,
	switchResult: null,
	renameTarget: null,
	renameValue: "",
	renaming: false,
	deleteTarget: null,
	deleting: false,
	importError: null,
	actionError: null
};
function initFromStore() {
	const s = runStore.getSnapshot().profiles;
	return {
		...initial,
		profiles: s.profiles ?? [],
		previewName: s.selectedName,
		preview: s.preview,
		switchResult: s.switchResult,
		actionError: s.error,
		loadError: s.loadError
	};
}
function ProfilesPanel({ api, t }) {
	const [state, setState] = (0, react.useState)(initFromStore);
	const stateRef = (0, react.useRef)(state);
	const mountedRef = (0, react.useRef)(true);
	/** Phase 7 迁移前咨询：切换预览弹窗内的咨询报告（本地 state，非敏感） */
	const [consultReport, setConsultReport] = (0, react.useState)(null);
	const [consultLoading, setConsultLoading] = (0, react.useState)(false);
	const commit = (next) => {
		stateRef.current = next;
		if (mountedRef.current) setState(next);
		runStore.patch({ profiles: toProfilesStoreSlice({
			profiles: next.profiles,
			selectedName: next.previewName,
			preview: next.preview,
			switchResult: next.switchResult,
			error: next.actionError,
			loadError: next.loadError
		}) });
	};
	const patch = (p) => commit({
		...stateRef.current,
		...p
	});
	(0, react.useEffect)(() => () => {
		mountedRef.current = false;
		runStore.patch({ profiles: toProfilesStoreSlice({
			profiles: stateRef.current.profiles,
			selectedName: stateRef.current.previewName,
			preview: stateRef.current.preview,
			switchResult: stateRef.current.switchResult,
			error: stateRef.current.actionError,
			loadError: stateRef.current.loadError
		}) });
	}, []);
	const load = () => {
		patch({
			status: "loading",
			loadError: null
		});
		api.profilesList().then((profiles) => {
			patch({
				status: "ready",
				profiles
			});
			if (stateRef.current.previewName !== null && !profiles.some((p) => p.name === stateRef.current.previewName)) patch({
				previewName: null,
				preview: null,
				switchResult: null
			});
		}, (err) => {
			patch({
				status: "error",
				loadError: err instanceof Error ? err.message : String(err)
			});
		});
	};
	(0, react.useEffect)(load, [api]);
	/** Phase 7 迁移前咨询：切换预览弹窗打开时对目标 profile 生成咨询报告（只读，零写入）。
	*  失败静默（咨询是建议性，不阻断切换）。 */
	(0, react.useEffect)(() => {
		if (state.previewName === null) return;
		let cancelled = false;
		setConsultLoading(true);
		api.consult({
			type: "profile",
			id: state.previewName
		}).then((report) => {
			if (!cancelled) setConsultReport(report);
		}).catch(() => {
			if (!cancelled) setConsultReport(null);
		}).finally(() => {
			if (!cancelled) setConsultLoading(false);
		});
		return () => {
			cancelled = true;
		};
	}, [state.previewName, api]);
	/** 保存当前配置为新 Profile（输入名校验；成功后刷新列表并清空输入） */
	const doSave = () => {
		const name = state.saveName.trim();
		const invalid = validateProfileNameInput(name);
		if (invalid !== null) {
			patch({ actionError: invalid });
			return;
		}
		if (state.saving) return;
		patch({
			saving: true,
			actionError: null
		});
		api.profileSave(name).then((meta) => {
			patch({
				saving: false,
				saveName: "",
				actionError: null
			});
			toast.ok(t("profiles.save.done", { name: meta.name }));
			load();
		}, (err) => {
			patch({ saving: false });
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** 切换预览（只读，零写入）：分析切换到该 Profile 会产生的计划项 */
	const runPreview = (profile) => {
		patch({
			previewName: profile.name,
			previewing: true,
			preview: null,
			switchResult: null,
			actionError: null
		});
		api.profileAnalyzeSwitch(profile.name).then((preview) => {
			patch({
				previewing: false,
				preview
			});
		}, (err) => {
			patch({
				previewing: false,
				previewName: null,
				actionError: err instanceof Error ? err.message : String(err)
			});
		});
	};
	/** 执行切换（confirm 安全阀 + 自动快照 + 失败回滚） */
	const doSwitch = () => {
		const name = state.previewName;
		if (name === null || state.switching) return;
		patch({
			switching: true,
			actionError: null
		});
		api.profileExecuteSwitch(name, { rollbackOnError: true }).then((result) => {
			patch({
				switching: false,
				switchResult: result
			});
		}, (err) => {
			patch({
				switching: false,
				actionError: err instanceof Error ? err.message : String(err)
			});
		}).finally(() => {
			load();
		});
	};
	/** 关闭预览弹窗（放弃本次切换会话） */
	const closePreview = () => {
		if (state.switching) return;
		patch({
			previewName: null,
			preview: null,
			switchResult: null
		});
	};
	/** 重命名（目录级移动） */
	const doRename = () => {
		const target = state.renameTarget;
		if (target === null || state.renaming) return;
		const newName = state.renameValue.trim();
		const invalid = validateProfileNameInput(newName);
		if (invalid !== null) {
			patch({ actionError: invalid });
			return;
		}
		patch({
			renaming: true,
			actionError: null
		});
		api.profileRename(target.name, newName).then(() => {
			patch({
				renaming: false,
				renameTarget: null,
				renameValue: "",
				actionError: null
			});
			load();
		}, (err) => {
			patch({ renaming: false });
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** 删除 Profile（危险操作：该组配置快照不可恢复） */
	const doDelete = () => {
		const target = state.deleteTarget;
		if (target === null || state.deleting) return;
		patch({
			deleting: true,
			actionError: null
		});
		api.profileDelete(target.name).then(() => {
			patch({
				deleting: false,
				deleteTarget: null,
				actionError: null
			});
			if (stateRef.current.previewName === target.name) patch({
				previewName: null,
				preview: null,
				switchResult: null
			});
			toast.ok(t("profiles.delete.done", { name: target.name }));
			load();
		}, (err) => {
			patch({ deleting: false });
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	/** 导入 Profile（读 JSON 文本 → 确认 → import） */
	const importFile = (file) => {
		if (file === void 0) return;
		patch({
			importError: null,
			actionError: null
		});
		file.text().then((content) => {
			const stem = file.name.replace(/\.json$/i, "").trim() || "imported";
			api.profileImport(content, stem).then((meta) => {
				toast.ok(t("profiles.import.done", { name: meta.name }));
				load();
			}, (err) => {
				toast.error(err instanceof Error ? err.message : String(err));
			});
		}, (err) => {
			toast.error(err instanceof Error ? err.message : String(err));
		});
	};
	const saveInvalid = validateProfileNameInput(state.saveName.trim()) !== null && state.saveName.trim() !== "";
	/** 更新时间（等宽 YYYY-MM-DD HH:mm；完整本地时间见 title）。 */
	const fullTime = (v) => {
		const d = new Date(v);
		if (Number.isNaN(d.getTime())) return "";
		const p = (n) => String(n).padStart(2, "0");
		return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("profiles.title"),
				subtitle: t("profiles.subtitle")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
				className: config_manager_module_css_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("profiles.save.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t("profiles.save.hint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.actionRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
							type: "text",
							className: config_manager_module_css_default.input,
							placeholder: t("profiles.save.placeholder"),
							value: state.saveName,
							onChange: (e) => {
								patch({ saveName: e.target.value });
							}
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							variant: "primary",
							disabled: state.saving || state.saveName.trim() === "",
							onClick: doSave,
							children: state.saving ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("profiles.save.saving") }) : t("profiles.save.action")
						})]
					}),
					saveInvalid && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.formError,
						children: t("profiles.nameInvalid")
					})
				]
			}),
			state.status === "loading" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("profiles.loading") }),
			state.status === "error" && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "error",
				children: [state.loadError ?? t("common.unknownError"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
					variant: "primary",
					onClick: load,
					children: t("common.retry")
				})]
			}),
			state.status === "ready" && state.profiles.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("profiles.empty") }),
			state.status === "ready" && state.profiles.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.snapshotList,
				role: "list",
				"aria-label": t("profiles.title"),
				children: state.profiles.map((profile) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.profileRow,
					role: "listitem",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.profileRowHeader,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							type: "button",
							className: config_manager_module_css_default.profileRowMain,
							onClick: () => {
								runPreview(profile);
							},
							title: t("profiles.previewHint"),
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								title: profile.name,
								children: profile.name
							})
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: config_manager_module_css_default.actionRow,
							style: { margin: 0 },
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => {
										runPreview(profile);
									},
									children: t("profiles.switch")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => {
										patch({
											renameTarget: profile,
											renameValue: profile.name,
											actionError: null
										});
									},
									children: t("profiles.rename")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "danger",
									onClick: () => {
										patch({
											deleteTarget: profile,
											actionError: null
										});
									},
									children: t("profiles.delete")
								})
							]
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.cellMeta,
						style: { marginTop: 2 },
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.mono,
							children: fullTime(profile.updatedAt)
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: ["· ", profile.sections.join("、")] })]
					})]
				}, profile.name))
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
				className: config_manager_module_css_default.card,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.groupLabel,
						children: t("profiles.import.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t("profiles.import.hint")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						type: "file",
						accept: ".json,application/json",
						className: config_manager_module_css_default.hiddenFile,
						onChange: (e) => {
							const file = e.target.files?.[0];
							e.target.value = "";
							importFile(file);
						}
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.actionRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							onClick: () => {
								document.querySelector(`input[type="file"][accept=".json,application/json"]`)?.click();
							},
							children: t("profiles.import.choose")
						})
					})
				]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal, {
				open: state.previewName !== null && (state.preview !== null || state.previewing || state.switchResult !== null),
				onClose: closePreview,
				title: t("profiles.switch"),
				wide: true,
				busy: state.switching,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Modal.Header, {
						title: state.previewName !== null ? t("profiles.switchPreviewTitle", { name: state.previewName }) : t("profiles.switch"),
						onClose: closePreview,
						closeDisabled: state.switching
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Body, {
						scroll: true,
						children: [
							state.previewing && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("profiles.previewing") }),
							state.preview !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SwitchPreviewCard, {
								preview: state.preview,
								t
							}),
							consultLoading && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: api.t("consult.loading") }),
							consultReport !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConsultCard, {
								report: consultReport,
								t: api.t
							}),
							state.switchResult !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProfileSwitchResultCard, {
								result: state.switchResult,
								t
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Modal.Footer, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: state.switching,
						onClick: closePreview,
						children: t("common.cancel")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: state.switching || state.preview === null || !state.preview.items.some((i) => i.kind !== "Skip"),
						onClick: doSwitch,
						children: state.switching ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("profiles.switching") }) : t("profiles.switchConfirm")
					})] })
				]
			}),
			state.renameTarget !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(ConfirmDialog, {
				open: true,
				title: t("profiles.renameTitle"),
				message: t("profiles.renameMessage", { name: state.renameTarget.name }),
				confirmLabel: t("profiles.rename"),
				cancelLabel: t("common.cancel"),
				busy: state.renaming,
				onConfirm: doRename,
				onCancel: () => {
					patch({
						renameTarget: null,
						renameValue: ""
					});
				},
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
					type: "text",
					className: config_manager_module_css_default.input,
					value: state.renameValue,
					onChange: (e) => {
						patch({ renameValue: e.target.value });
					}
				}), state.actionError !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.formError,
					children: state.actionError
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: state.deleteTarget !== null,
				title: t("profiles.deleteTitle"),
				message: state.deleteTarget !== null ? t("profiles.deleteMessage", { name: state.deleteTarget.name }) : void 0,
				confirmLabel: t("profiles.delete"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.deleting,
				onConfirm: doDelete,
				onCancel: () => {
					patch({ deleteTarget: null });
				}
			})
		]
	});
}
/**
* 切换预览内容（与备份文件「查看/对比」预览同构，2026-08-25）：
* 三分区 = 分区清单（Badge 流）→ 差异摘要（将变更/已一致/冲突/需补录/重启）
* → 变更明细分组（冲突→变更→路径映射→已一致→其他，带颜色 kindTag，限高内滚）。
* 渲染模型来自 src/ui/profiles-view.ts 纯函数 + 备份 diff 共用 groupPlanItems 分组。
*/
function SwitchPreviewCard({ preview, t }) {
	const s = summarizeSwitchPreview(preview);
	const groups = groupPlanItems(preview.items);
	const groupLabelKey = (key) => {
		switch (key) {
			case "conflicts": return "backupFiles.inspectGroup.conflicts";
			case "changes": return "backupFiles.inspectGroup.changes";
			case "paths": return "backupFiles.inspectGroup.paths";
			case "skipped": return "backupFiles.inspectGroup.skipped";
			case "others": return "backupFiles.inspectGroup.others";
		}
	};
	const kindTagClass = (kind) => {
		switch (kind) {
			case "error": return config_manager_module_css_default.kindTagError ?? "";
			case "warn": return config_manager_module_css_default.kindTagWarn ?? "";
			case "ok": return config_manager_module_css_default.kindTagOk ?? "";
			case "info": return config_manager_module_css_default.kindTagInfo ?? "";
		}
	};
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
			className: config_manager_module_css_default.card,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("profiles.previewSummary")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "info",
							children: t("profiles.previewWillChange", { count: String(s.willChange) })
						}),
						s.unchanged > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "ok",
							children: t("profiles.previewUnchanged", { count: String(s.unchanged) })
						}),
						s.conflicts > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "error",
							children: t("profiles.previewConflicts", { count: String(s.conflicts) })
						}),
						s.secretsNeeded > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("profiles.previewSecrets", { count: String(s.secretsNeeded) })
						}),
						s.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: "warn",
							children: t("profiles.previewRestart")
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("profiles.previewNote")
				})
			]
		}),
		s.sectionsInProfile.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
			className: config_manager_module_css_default.card,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("profiles.previewSections")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.statRow,
				children: s.sectionsInProfile.map((section) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
					kind: "info",
					children: section
				}, section))
			})]
		}),
		groups.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, {
			className: config_manager_module_css_default.card,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("profiles.previewItems")
			}), groups.map((group) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.inspectGroup,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.groupLabel,
						children: t(groupLabelKey(group.key))
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: group.kind,
						children: String(group.items.length)
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.reportScroll,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
						className: config_manager_module_css_default.reportList,
						children: group.items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: `${config_manager_module_css_default.kindTag} ${kindTagClass(group.kind)}`,
								children: item.kind
							}),
							" ",
							item.adapter,
							": ",
							item.description,
							item.detail !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: config_manager_module_css_default.hint,
								children: [
									"（",
									item.detail,
									"）"
								]
							})
						] }, item.id))
					})
				})]
			}, group.key))]
		})
	] });
}
/** 切换结果（ok / failed / rolledBack；绑定 profileSwitchKind 语义）。 */
function ProfileSwitchResultCard({ result, t }) {
	const kind = profileSwitchKind(result);
	const okCount = result.executed.filter((e) => e.status === "ok").length;
	const failed = result.executed.filter((e) => e.status === "failed");
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: kind === "ok" ? "ok" : kind === "rolledBack" ? "error" : "error",
			children: kind === "ok" ? t("profiles.switchDone", { count: String(okCount) }) : kind === "rolledBack" ? t("profiles.switchRolledBack") : t("profiles.switchFailed")
		}),
		result.warnings.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "warn",
			children: result.warnings.join("；")
		}),
		failed.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.reportScroll,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("ul", {
				className: config_manager_module_css_default.reportList,
				children: failed.map((f) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("li", { children: [
					f.itemId,
					": ",
					f.message ?? ""
				] }, f.itemId))
			})
		}),
		result.needsRestart && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Banner, {
			kind: "warn",
			children: t("report.needsRestart")
		})
	] });
}
//#endregion
//#region src/client/history/history-api.ts
const HISTORY_API = {
	list: "/api/dsh-config-manager/history",
	export: "/api/dsh-config-manager/history/export"
};
/** GET 请求超时（历史读取可能较大；导出走下载）。 */
const HISTORY_TIMEOUT_MS = 6e4;
async function readJson$4(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** History 浏览器半数据入口。 */
var HistoryApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	buildListUrl(params) {
		const url = new URL(HISTORY_API.list, window.location.origin);
		for (const [k, v] of Object.entries(params)) if (v !== void 0 && v !== "") url.searchParams.set(k, v);
		return url.toString();
	}
	/** GET /history：按 kind/result/时间/分区 过滤读取历史。 */
	async list(params = {}) {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), HISTORY_TIMEOUT_MS);
		try {
			const query = {};
			if (params.kind !== void 0) query["kind"] = Array.isArray(params.kind) ? params.kind.join(",") : params.kind;
			if (params.result !== void 0) query["result"] = Array.isArray(params.result) ? params.result.join(",") : params.result;
			if (params.from !== void 0) query["from"] = String(params.from);
			if (params.to !== void 0) query["to"] = String(params.to);
			if (params.sections !== void 0 && params.sections.length > 0) query["sections"] = params.sections.join(",");
			return await readJson$4(await fetch(this.buildListUrl(query), { signal: controller.signal }), this.t);
		} finally {
			clearTimeout(timer);
		}
	}
	/**
	* 导出历史报告（markdown → 下载附件；json → { text }）。
	* 过滤参数与 list 相同。
	*/
	async exportReport(format, params = {}) {
		const query = { format };
		if (params.kind !== void 0) query["kind"] = Array.isArray(params.kind) ? params.kind.join(",") : params.kind;
		if (params.result !== void 0) query["result"] = Array.isArray(params.result) ? params.result.join(",") : params.result;
		const url = this.buildExportUrl(query);
		if (format === "markdown") {
			const response = await fetch(url);
			if (!response.ok) {
				const body = await response.json().catch(() => null);
				throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : `HTTP ${response.status}`);
			}
			const blob = await response.blob();
			const objectUrl = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = objectUrl;
			a.download = "migration-history.md";
			document.body.appendChild(a);
			a.click();
			a.remove();
			setTimeout(() => URL.revokeObjectURL(objectUrl), 1e4);
			return { downloaded: true };
		}
		return readJson$4(await fetch(url), this.t);
	}
	buildExportUrl(params) {
		const url = new URL(HISTORY_API.export, window.location.origin);
		for (const [k, v] of Object.entries(params)) if (v !== void 0 && v !== "") url.searchParams.set(k, v);
		return url.toString();
	}
};
//#endregion
//#region src/ui/history-model.ts
/** 结果徽章语义（Badge kind 四态中的三态；skipped 归 warn）。 */
function resultBadgeKind(result) {
	if (result === "success") return "ok";
	if (result === "failed") return "error";
	return "warn";
}
function kindLabelKey$1(kind) {
	return `history.kind.${kind}`;
}
/** 全量 kind 枚举（UI 过滤下拉用；顺序 = §5 清单顺序）。 */
const HISTORY_KIND_OPTIONS = [
	"import",
	"restore",
	"rollback",
	"profile-switch",
	"profile-delete",
	"profile-rename",
	"profile-save",
	"profile-import",
	"sync-apply",
	"autosync",
	"recovery",
	"backup",
	"snapshot-delete",
	"snapshot-prune"
];
/** 结果过滤选项。 */
const HISTORY_RESULT_OPTIONS = [
	"success",
	"failed",
	"skipped"
];
/**
* 客户端侧 kind/result 过滤（与后端 query 的关系）：
* `filterToQuery` 描述的是**后端** `/history?kind=…&result=…` 的查询契约；HistoryPanel 目前
* 一次性拉取全量条目（`historyApi.list()` 不带参数），因此分类筛选改由本纯函数在前端收敛。
* 两者语义一致（kind / result 各自为空即不约束，同时给出时取交集），后端 query 保持可用，
* 后续若改为服务端过滤可无缝切回 `filterToQuery`。
*
* 规则：`undefined` 或 `''` 视为「不过滤」；保持输入顺序（不做排序）。
*/
function filterByKindResult(entries, kind, result) {
	const wantKind = kind ?? "";
	const wantResult = result ?? "";
	if (wantKind === "" && wantResult === "") return entries;
	return entries.filter((e) => {
		if (wantKind !== "" && e.kind !== wantKind) return false;
		if (wantResult !== "" && e.result !== wantResult) return false;
		return true;
	});
}
/**
* 归纳当前数据里**真实出现过**的 kind（按 HISTORY_KIND_OPTIONS 顺序去重）。
*
* 用于过滤下拉：全量枚举 14 类中有大量分类（profile-delete/rename/import、snapshot-prune…）
* 在本机历史里永远不会出现，把它们列进下拉只会让用户选出「永远为空」的结果。
* 空数据返回空数组。
*
* @param keepSelected 当前选中值：即使数据里已不存在也保留在选项里（位置仍按
*   HISTORY_KIND_OPTIONS 顺序）——否则用户会看到「下拉里没有自己刚选中的项」的怪状态。
*/
function collectHistoryKinds(entries, keepSelected) {
	const present = /* @__PURE__ */ new Set();
	for (const e of entries) present.add(e.kind);
	if (keepSelected !== void 0) present.add(keepSelected);
	return HISTORY_KIND_OPTIONS.filter((k) => present.has(k));
}
/**
* 归纳当前数据里**真实出现过**的 result（按 HISTORY_RESULT_OPTIONS 顺序去重）。
* 与 collectHistoryKinds 同语义（「结果」下拉同样不列不存在的项，且保留当前选中值）。
*/
function collectHistoryResults(entries, keepSelected) {
	const present = /* @__PURE__ */ new Set();
	for (const e of entries) present.add(e.result);
	if (keepSelected !== void 0) present.add(keepSelected);
	return HISTORY_RESULT_OPTIONS.filter((r) => present.has(r));
}
function summarize(entries) {
	let success = 0;
	let failed = 0;
	let skipped = 0;
	for (const e of entries) if (e.result === "success") success += 1;
	else if (e.result === "failed") failed += 1;
	else skipped += 1;
	return {
		total: entries.length,
		success,
		failed,
		skipped
	};
}
/**
* 按 kind 分组（保持 HISTORY_KIND_OPTIONS 顺序），组内按 at 时间倒序。
* 空组不渲染。纯函数，无 IO。
*/
function groupByKind(entries) {
	const byKind = /* @__PURE__ */ new Map();
	for (const e of entries) {
		const list = byKind.get(e.kind);
		if (list === void 0) byKind.set(e.kind, [e]);
		else list.push(e);
	}
	const groups = [];
	for (const kind of HISTORY_KIND_OPTIONS) {
		const list = byKind.get(kind);
		if (list === void 0) continue;
		list.sort((a, b) => a.at < b.at ? 1 : a.at > b.at ? -1 : 0);
		groups.push({
			kind,
			kindLabelKey: kindLabelKey$1(kind),
			count: list.length,
			entries: list
		});
	}
	return groups;
}
/**
* 最近 N 条过滤（0 = 全部）。按 at 时间倒序取前 N。
*/
function applyRecent(entries, recent) {
	if (recent <= 0) return entries;
	return [...entries].sort((a, b) => a.at < b.at ? 1 : a.at > b.at ? -1 : 0).slice(0, recent);
}
/** 客户端侧文本子串过滤（补充后端过滤；按 summary/error/kind 匹配，大小写不敏感）。 */
function filterByText(entries, query) {
	const q = query.trim().toLowerCase();
	if (q === "") return entries;
	return entries.filter((e) => e.kind.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q) || (e.error ?? "").toLowerCase().includes(q) || e.sections.some((s) => s.toLowerCase().includes(q)));
}
//#endregion
//#region src/client/history/HistoryPanel.tsx
/**
* 迁移历史面板（Phase 6，Step 7）：展示统一审计史——过滤（kind/结果/时间范围/文本）+ 统计
* + 分组列表 + 导出（JSON/Markdown）。
*
* 数据流：`HistoryApi.list()` 读取（经 Host 侧 sanitizeEntry 已脱敏）；纯函数渲染模型
* `src/ui/history-model.ts`（node 可测）分组/统计/过滤；`HistoryPanel` 只做装配（渲染 + 交互）。
* 状态组件内自持（useState）：低频面板不持久化列表（历史可随时重载）。
*
* 安全：所有 summary/error 文本渲染前过 redact() 兜底（存储已清洗，双保险）；
* kind/result/sections 均为枚举常量，无 secret 承载面。
*/
function HistoryPanel({ historyApi, t }) {
	const [state, setState] = (0, react.useState)({
		status: "loading",
		error: null,
		result: null,
		filter: { query: "" },
		exporting: null
	});
	const mounted = (0, react.useRef)(true);
	(0, react.useEffect)(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, []);
	const load = async () => {
		setState((s) => ({
			...s,
			status: "loading",
			error: null
		}));
		try {
			const result = await historyApi.list();
			if (mounted.current) setState((s) => ({
				...s,
				status: "ready",
				result
			}));
		} catch (error) {
			if (mounted.current) setState((s) => ({
				...s,
				status: "error",
				error: error instanceof Error ? error.message : String(error)
			}));
		}
	};
	(0, react.useEffect)(() => {
		load();
	}, [historyApi]);
	const setFilter = (patch) => {
		setState((s) => ({
			...s,
			filter: {
				...s.filter,
				...patch
			}
		}));
	};
	const handleExport = async (format) => {
		setState((s) => ({
			...s,
			exporting: format
		}));
		try {
			await historyApi.exportReport(format, {
				kind: state.filter.kind,
				result: state.filter.result
			});
			toast.ok(t("history.exported"));
		} catch (error) {
			toast.error(`${t("history.exportError")}: ${redact(error instanceof Error ? error.message : String(error))}`);
		} finally {
			if (mounted.current) setState((s) => ({
				...s,
				exporting: null
			}));
		}
	};
	if (state.status === "loading") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
			title: t("history.title"),
			subtitle: t("history.subtitle")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.statRow,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
				className: config_manager_module_css_default.hint,
				children: t("history.loading")
			})
		})]
	});
	if (state.status === "error") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
			title: t("history.title"),
			subtitle: t("history.subtitle")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
			error: new Error(redact(state.error ?? "")),
			onRetry: () => void load()
		})]
	});
	const entries = state.result?.entries ?? [];
	let filtered = filterByKindResult(entries, state.filter.kind, state.filter.result);
	if (state.filter.recent !== void 0 && state.filter.recent > 0) filtered = applyRecent(filtered, state.filter.recent);
	filtered = filterByText(filtered, state.filter.query);
	const summary = summarize(filtered);
	const groups = groupByKind(filtered);
	const corrupted = state.result?.corrupted ?? [];
	const kindOptions = collectHistoryKinds(entries, state.filter.kind);
	const resultOptions = collectHistoryResults(entries, state.filter.result);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
				title: t("history.title"),
				subtitle: t("history.subtitle")
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.statRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "info",
						children: [
							t("history.stats.total"),
							": ",
							summary.total
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "ok",
						children: [
							t("history.stats.success"),
							": ",
							summary.success
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "error",
						children: [
							t("history.stats.failed"),
							": ",
							summary.failed
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Badge, {
						kind: "warn",
						children: [
							t("history.stats.skipped"),
							": ",
							summary.skipped
						]
					})
				]
			}),
			corrupted.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "warn",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: t("history.corruptedBanner") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("history.corruptedCount", { count: String(corrupted.length) })
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: t("history.filter.title")
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
						className: config_manager_module_css_default.select,
						value: state.filter.kind ?? "",
						onChange: (e) => setFilter({ kind: e.target.value === "" ? void 0 : e.target.value }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
							value: "",
							children: [t("history.filter.kind"), ": 全部"]
						}), kindOptions.map((k) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: k,
							children: t(kindLabelKey$1(k))
						}, k))]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
						className: config_manager_module_css_default.select,
						value: state.filter.result ?? "",
						onChange: (e) => setFilter({ result: e.target.value === "" ? void 0 : e.target.value }),
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("option", {
							value: "",
							children: [t("history.filter.result"), ": 全部"]
						}), resultOptions.map((r) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
							value: r,
							children: t(`history.result.${r}`)
						}, r))]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("select", {
						className: config_manager_module_css_default.select,
						value: state.filter.recent ?? 0,
						onChange: (e) => setFilter({ recent: Number(e.target.value) }),
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "0",
								children: t("history.filter.recent.all")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "50",
								children: t("history.filter.recent.50")
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("option", {
								value: "200",
								children: t("history.filter.recent.200")
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: config_manager_module_css_default.input,
						type: "search",
						placeholder: t("history.search.placeholder"),
						value: state.filter.query,
						onChange: (e) => setFilter({ query: e.target.value })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						onClick: () => void load(),
						children: t("history.refresh")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						onClick: () => void handleExport("json"),
						disabled: state.exporting !== null || summary.total === 0,
						children: state.exporting === "json" ? t("history.exporting") : t("history.export.json")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						onClick: () => void handleExport("markdown"),
						disabled: state.exporting !== null || summary.total === 0,
						children: state.exporting === "markdown" ? t("history.exporting") : t("history.export.markdown")
					})
				]
			})] }),
			filtered.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("history.empty") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HistoryList, {
				groups,
				t
			})
		]
	});
}
function HistoryList({ groups, t }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, { children: groups.map((g) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.historyGroup,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.statRow,
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
				kind: "info",
				children: t(g.kindLabelKey)
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
				kind: "info",
				children: g.count
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.historyScroll,
			children: g.entries.map((e) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HistoryRow, {
				entry: e,
				t
			}, e.at + e.kind))
		})]
	}, g.kind)) });
}
function HistoryRow({ entry, t }) {
	const result = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
		kind: resultBadgeKind(entry.result),
		children: t(`history.result.${entry.result}`)
	});
	const summary = redact(entry.summary + (entry.error !== void 0 ? ` — ${entry.error}` : ""));
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.historyRow,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.historyRowMain,
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.historyTime,
					children: entry.at
				}),
				result,
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.historySections,
					children: redact(entry.sections.join(", "))
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.historySummary,
					children: summary
				})
			]
		})
	});
}
//#endregion
//#region src/client/lifecycle/LifecyclePanel.tsx
/**
* 灾备 / Recovery Lifecycle 面板（Phase 1 能力面向用户的入口）。
*
* 为什么是这个 IA（不是单页一锅端）：本面板把四件事按「风险从低到高」纵向排开 ——
* 只读状态 → 撤销/重做 → 快照列表 → 救援模式。用户从 DSH 起不来（崩溃横幅）进入时，
* 最需要的「回退到最后正常状态」排在最上面，救援模式作为最后手段沉底。
*
* 数据流：挂载时并行拉 status() + crash()（互不阻塞：崩溃归因失败不该拖垮快照列表）；
* 每次变更动作（undo/redo/snapshot/remove/rescue）成功后统一 refresh() 重拉，
* 绝不在本地推算引擎状态 —— 快照的 stepped/consumed 标记只有 Host 是权威。
*
* 安全约束（§9.4 / §11）：
*  - undo / rescue-on / remove 都是 dеstruсtivе-ish 动作，必须经 ConfirmDialog 显式确认；
*    本组件绝不自动调用。
*  - 「回退到最后正常状态」复用 undo()（引擎按内容差异挑选目标快照），界面上如实
*    标注它走的是撤销通道，不假装是另一条独立的恢复路径。
*  - 错误文本先经 redact() 再进 ErrorBanner（双保险）。
*  - 本文件不 import 任何 node 模块（纯浏览器 bundle）。
*/
/**
* 快照 kind → 字典键。
* 注意：locales.ts 里**没有** lifecycle.kind.unknown 键（字典由其它线持有，不得新增），
* 因此未知 kind 一律回落到 lifecycle.kind.manual —— 未知 kind 只可能来自手动/旧版本快照，
* 语义上最接近，且保证界面永不出现空徽章。
*/
function kindLabelKey(kind) {
	switch (kind) {
		case "auto": return "lifecycle.kind.auto";
		case "manual": return "lifecycle.kind.manual";
		case "undo": return "lifecycle.kind.undo";
		case "baseline": return "lifecycle.kind.baseline";
		case "pre-restore": return "lifecycle.kind.pre-restore";
		default: return "lifecycle.kind.manual";
	}
}
/** 崩溃归因 → 字典键（null 走 unknown，绝不显示空白）。 */
function crashReasonKey(reason) {
	switch (reason) {
		case "session-corrupt": return "lifecycle.crash.reason.session-corrupt";
		case "bundle-check": return "lifecycle.crash.reason.bundle-check";
		case "patch-tree": return "lifecycle.crash.reason.patch-tree";
		default: return "lifecycle.crash.reason.unknown";
	}
}
/** 建议动作 → 字典键。 */
function crashAdviceKey(advice) {
	switch (advice) {
		case "restore-last-good": return "lifecycle.crash.advice.restore-last-good";
		case "repair-session": return "lifecycle.crash.advice.repair-session";
		case "check-bundles": return "lifecycle.crash.advice.check-bundles";
		case "check-patch-tree": return "lifecycle.crash.advice.check-patch-tree";
		default: return "lifecycle.crash.advice.restore-last-good";
	}
}
/**
* 字节数 → 人类可读。刻意手写而非 Intl.NumberFormat：只需 3 档且要稳定
* （locale 差异会让快照体积在 zh/en 间跳变，列表里看起来像数据变了）。
*/
function formatBytes(bytes) {
	if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(2)} MB`;
}
/** 时间戳 → 本地可读；非法/缺失时回落到原串（绝不抛错，快照时间可能来自损坏文件）。 */
function formatTime(value) {
	if (value === null || value === "") return "-";
	const ms = Date.parse(value);
	if (Number.isNaN(ms)) return value;
	return new Date(ms).toLocaleString();
}
function LifecyclePanel({ lifecycleApi, t, openRecoveryWizard }) {
	const [state, setState] = (0, react.useState)({
		loading: true,
		status: null,
		crash: null,
		rescue: null,
		error: null,
		busy: null
	});
	/** 手动快照的原因输入（受控；随快照提交后清空） */
	const [reason, setReason] = (0, react.useState)("");
	/** 各确认弹窗开关 */
	const [undoOpen, setUndoOpen] = (0, react.useState)(false);
	const [removeTarget, setRemoveTarget] = (0, react.useState)(null);
	const [rescueOpen, setRescueOpen] = (0, react.useState)(false);
	/** 卸载后不再 setState（避免 React 警告与竞态覆盖） */
	const mounted = (0, react.useRef)(true);
	(0, react.useEffect)(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, []);
	/**
	* 重拉全部只读状态。crash / rescue 失败静默降级为 null：
	* 它们服务于「异常路径」，其失败不应让正常的快照列表也看不见。
	*/
	const load = (0, react.useCallback)(async () => {
		setState((s) => ({
			...s,
			loading: true,
			error: null
		}));
		try {
			const status = await lifecycleApi.status();
			if (!mounted.current) return;
			setState((s) => ({
				...s,
				loading: false,
				status,
				error: null
			}));
		} catch (error) {
			if (!mounted.current) return;
			setState((s) => ({
				...s,
				loading: false,
				error: error instanceof Error ? error.message : String(error)
			}));
			return;
		}
		const [crash, rescue] = await Promise.all([lifecycleApi.crash().catch(() => null), lifecycleApi.rescueStatus().catch(() => null)]);
		if (!mounted.current) return;
		setState((s) => ({
			...s,
			crash,
			rescue
		}));
	}, [lifecycleApi]);
	(0, react.useEffect)(() => {
		load();
	}, [load]);
	/**
	* 执行一次变更动作并刷新：错误统一走 toast（不占用页内空间），
	* 成功与否以 Host 返回为准 —— 绝不在本地假设成功。
	*/
	const runAction = (0, react.useCallback)(async (kind, action) => {
		setState((s) => ({
			...s,
			busy: kind
		}));
		try {
			await action();
		} catch (error) {
			toast.error(redact(error instanceof Error ? error.message : String(error)));
		} finally {
			if (mounted.current) setState((s) => ({
				...s,
				busy: null
			}));
			await load();
		}
	}, [load]);
	/** 撤销/重做共用：把 outcome 如实翻译成提示（失败原因直接展示枚举码，不粉饰）。 */
	const reportOutcome = (0, react.useCallback)((outcome, okKey, noneKey) => {
		if (outcome.ok) {
			toast.ok(t(okKey, { id: outcome.targetId ?? "" }));
			return;
		}
		if (outcome.reason !== null && outcome.reason !== "") toast.warn(redact(outcome.reason));
		else toast.info(t(noneKey));
	}, [t]);
	const handleUndo = (0, react.useCallback)(async () => {
		setUndoOpen(false);
		await runAction("undo", async () => {
			reportOutcome(await lifecycleApi.undo(), "lifecycle.undoOk", "lifecycle.undoNone");
		});
	}, [
		lifecycleApi,
		reportOutcome,
		runAction
	]);
	const handleRedo = (0, react.useCallback)(async () => {
		await runAction("redo", async () => {
			reportOutcome(await lifecycleApi.redo(), "lifecycle.redoOk", "lifecycle.redoNone");
		});
	}, [
		lifecycleApi,
		reportOutcome,
		runAction
	]);
	const handleSnapshot = (0, react.useCallback)(async () => {
		const trimmed = reason.trim();
		await runAction("snapshot", async () => {
			const res = await lifecycleApi.snapshot(trimmed !== "" ? { reason: trimmed } : {});
			toast.ok(t("lifecycle.snapshotCreated", { id: res.id }));
			if (mounted.current) setReason("");
		});
	}, [
		lifecycleApi,
		reason,
		runAction,
		t
	]);
	const handleRemove = (0, react.useCallback)(async () => {
		const target = removeTarget;
		setRemoveTarget(null);
		if (target === null) return;
		await runAction("remove", async () => {
			await lifecycleApi.remove(target.id);
			toast.ok(t("lifecycle.delete"));
		});
	}, [
		lifecycleApi,
		removeTarget,
		runAction,
		t
	]);
	const handleRescueOn = (0, react.useCallback)(async () => {
		setRescueOpen(false);
		await runAction("rescue", async () => {
			const res = await lifecycleApi.rescueOn();
			if (res.ok) toast.ok(t("lifecycle.rescue.on"));
			else toast.error(redact(res.message ?? t("lifecycle.rescue.title")));
		});
	}, [
		lifecycleApi,
		runAction,
		t
	]);
	const handleRescueOff = (0, react.useCallback)(async () => {
		await runAction("rescue", async () => {
			const res = await lifecycleApi.rescueOff();
			if (res.ok) toast.ok(t("lifecycle.rescue.off"));
			else toast.error(redact(res.message ?? t("lifecycle.rescue.title")));
		});
	}, [
		lifecycleApi,
		runAction,
		t
	]);
	/** 「回退到最后正常状态」：引擎侧就是 undo（按内容差异挑目标），界面如实标注。 */
	const handleRestoreLastGood = (0, react.useCallback)(async () => {
		await runAction("undo", async () => {
			reportOutcome(await lifecycleApi.undo(), "lifecycle.undoOk", "lifecycle.undoNone");
		});
	}, [
		lifecycleApi,
		reportOutcome,
		runAction
	]);
	const status = state.status;
	const busy = state.busy !== null;
	if (state.loading && status === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, {
			title: t("lifecycle.snapshots"),
			subtitle: t("lifecycle.crash.title")
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: config_manager_module_css_default.statRow,
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Spinner, { label: t("common.loading") })
		})]
	});
	if (state.error !== null && status === null) return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("lifecycle.snapshots") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorBanner, {
			error: new Error(redact(state.error)),
			onRetry: () => void load(),
			retrying: state.loading
		})]
	});
	const snapshots = status?.snapshots ?? [];
	const crash = state.crash;
	const rescue = state.rescue;
	const rescueActive = rescue?.active === true;
	const showCrash = crash !== null && crash.crashed;
	const canRestoreLastGood = showCrash && crash.lastGoodSnapshotId !== null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.viewBody,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SectionTitle, { title: t("lifecycle.snapshots") }),
			showCrash && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "error",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.statRow,
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WarnIcon, { size: 14 }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("lifecycle.crash.title") }),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "error",
								children: t(crashReasonKey(crash.crashReason))
							})
						]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t(crashAdviceKey(crash.advice))
					}),
					crash.lastGoodAt !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.hint,
						children: t("lifecycle.crash.lastGood", { time: formatTime(crash.lastGoodAt) })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.actionRow,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
							variant: "danger",
							disabled: busy || !canRestoreLastGood,
							loading: state.busy === "undo",
							onClick: () => void handleRestoreLastGood(),
							title: t("lifecycle.undoTitle"),
							children: t("lifecycle.crash.restoreLastGood")
						})
					}),
					canRestoreLastGood && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.hint,
						children: [
							t("lifecycle.undo"),
							" · ",
							t("lifecycle.undoTitle")
						]
					})
				]
			}),
			rescueActive && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
				kind: "warn",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(WarnIcon, { size: 14 }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: t("lifecycle.rescue.active", { time: formatTime(rescue?.enteredAt ?? null) }) })]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("lifecycle.rescue.restartHint")
				})]
			}),
			openRecoveryWizard !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("lifecycle.guided.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("lifecycle.guided.desc")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => {
							openRecoveryWizard();
						},
						children: t("lifecycle.guided.action")
					})
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.groupLabel,
				children: [
					t("lifecycle.undo"),
					" / ",
					t("lifecycle.redo")
				]
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: config_manager_module_css_default.actionRow,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "primary",
						disabled: busy || status?.canUndo !== true,
						loading: state.busy === "undo",
						onClick: () => {
							setUndoOpen(true);
						},
						title: t("lifecycle.undoTitle"),
						children: t("lifecycle.undo")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: busy || status?.canRedo !== true,
						loading: state.busy === "redo",
						onClick: () => void handleRedo(),
						title: t("lifecycle.redoTitle"),
						children: t("lifecycle.redo")
					}),
					status?.canUndo !== true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.hint,
						children: t("lifecycle.undoNone")
					})
				]
			})] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("lifecycle.rescue.title")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.hint,
					children: t("lifecycle.rescue.desc")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: rescueActive ? "warn" : "ok",
						children: rescueActive ? t("lifecycle.rescue.title") : t("lifecycle.rescue.inactive")
					}), rescue?.stale === true && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
						kind: "warn",
						children: t("lifecycle.rescue.stale")
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.actionRow,
					children: rescueActive ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "danger",
						disabled: busy,
						loading: state.busy === "rescue",
						onClick: () => void handleRescueOff(),
						children: t("lifecycle.rescue.exit")
					}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						variant: "danger",
						disabled: busy,
						onClick: () => {
							setRescueOpen(true);
						},
						children: t("lifecycle.rescue.enter")
					})
				})
			] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.groupLabel,
					children: t("lifecycle.snapshots")
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.statRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
							kind: status?.watching === true ? "ok" : "warn",
							children: status?.watching === true ? t("lifecycle.autoOn") : t("lifecycle.autoOff")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: config_manager_module_css_default.hint,
							children: [
								t("lifecycle.lastAuto"),
								": ",
								status?.lastAutoAt != null ? formatTime(status.lastAutoAt) : t("lifecycle.never")
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.hint,
							children: t("lifecycle.sections", { count: String(status?.total ?? 0) })
						})
					]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Field, {
					label: t("lifecycle.snapshotReason"),
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
						className: config_manager_module_css_default.input,
						type: "text",
						value: reason,
						placeholder: t("lifecycle.snapshotReason"),
						disabled: busy,
						onChange: (e) => {
							setReason(e.target.value);
						}
					})
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.actionRow,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Button, {
						variant: "primary",
						disabled: busy,
						loading: state.busy === "snapshot",
						onClick: () => void handleSnapshot(),
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnapshotIcon, { size: 13 }),
							" ",
							t("lifecycle.snapshotNow")
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Button, {
						disabled: busy,
						onClick: () => void load(),
						children: t("nav.refresh")
					})]
				})
			] }),
			snapshots.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Empty, { children: t("lifecycle.empty") }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.snapshotList,
				children: snapshots.map((snap) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.snapshotRow,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: config_manager_module_css_default.snapshotRowHeader,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.snapshotRowMain,
									title: snap.id,
									children: snap.id
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "info",
									children: t(kindLabelKey(snap.kind))
								}),
								snap.pinned && /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
									kind: "ok",
									children: t("snapshots.pin")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: formatTime(snap.createdAt)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: t("lifecycle.sections", { count: String(snap.sections.length) })
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: config_manager_module_css_default.hint,
									children: formatBytes(snap.totalBytes)
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: config_manager_module_css_default.iconBtn,
									"aria-label": t("lifecycle.delete"),
									title: t("lifecycle.delete"),
									disabled: busy,
									onClick: () => {
										setRemoveTarget(snap);
									},
									children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DeleteIcon, { size: 13 })
								})
							]
						}),
						snap.reason !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.hint,
							children: redact(snap.reason)
						}),
						snap.note !== null && snap.note !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.hint,
							children: redact(snap.note)
						}),
						snap.tags.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: config_manager_module_css_default.statRow,
							children: snap.tags.map((tag) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Badge, {
								kind: "info",
								children: redact(tag)
							}, tag))
						})
					]
				}, snap.id))
			}) }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: undoOpen,
				title: t("lifecycle.undo"),
				message: t("lifecycle.undoConfirm"),
				confirmLabel: t("lifecycle.undo"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.busy === "undo",
				onConfirm: handleUndo,
				onCancel: () => {
					setUndoOpen(false);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: removeTarget !== null,
				title: t("lifecycle.delete"),
				message: t("lifecycle.deleteConfirm", { id: removeTarget?.id ?? "" }),
				confirmLabel: t("lifecycle.delete"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.busy === "remove",
				onConfirm: handleRemove,
				onCancel: () => {
					setRemoveTarget(null);
				}
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: rescueOpen,
				title: t("lifecycle.rescue.enter"),
				message: t("lifecycle.rescue.confirm"),
				confirmLabel: t("lifecycle.rescue.enter"),
				cancelLabel: t("common.cancel"),
				danger: true,
				busy: state.busy === "rescue",
				onConfirm: handleRescueOn,
				onCancel: () => {
					setRescueOpen(false);
				}
			})
		]
	});
}
//#endregion
//#region src/ui/star-prompt.ts
/**
* Star 引导弹窗的判定逻辑（框架无关纯函数，node 可测）。
*
* 触发规则（用户需求 + 方案 A）：
*  - 首次进入 dsh-config-manager 页面：只记录「首次使用时间」，不弹窗；
*  - 之后每次进入页面：距首次使用满 3 天（STAR_PROMPT_DELAY_MS）才弹窗；
*  - 用户点过「不再提示」（dismissed）或点过「去点 Star」（clicked，方案 A：
*    引导完成）→ 永久不再弹。
*
* 本模块只做「判定」，不碰存储/网络/React：
*  - 存储（ui-prefs.json）见 src/sync/ui-prefs.ts；
*  - 组件装配（何时调用、如何展示）见 src/client/ConfigManagerSection.tsx。
*/
/** 距首次使用满 3 天才提示（ms）：3 天 × 24 小时 × 60 分 × 60 秒 × 1000 */
const STAR_PROMPT_DELAY_MS = 2592e5;
/**
* 判定本次进入页面是否展示 Star 引导弹窗。
* @param state 持久化状态（undefined 字段 = 未配置）
* @param now 当前时间（ms 时间戳；注入便于测试）
*/
function evaluateStarPrompt(state, now) {
	if (state.dismissed === true || state.clicked === true) return {
		shouldShow: false,
		shouldRecordFirstSeen: false
	};
	if (state.firstSeenAt === void 0) return {
		shouldShow: false,
		shouldRecordFirstSeen: true
	};
	return {
		shouldShow: now - state.firstSeenAt >= STAR_PROMPT_DELAY_MS,
		shouldRecordFirstSeen: false
	};
}
//#endregion
//#region src/ui/release-notes-prompt.ts
/**
* 判定本次进入页面是否自动弹出更新内容弹窗。
* @param state 持久化状态（undefined 字段 = 未配置）
* @param currentVersion 当前运行的插件版本（如 '0.1.54'）
*/
function evaluateReleaseNotesPrompt(state, currentVersion) {
	if (state.dismissed === true) return { shouldShow: false };
	if (state.lastSeenVersion === void 0 || state.lastSeenVersion !== currentVersion) return { shouldShow: true };
	return { shouldShow: false };
}
//#endregion
//#region src/client/common/ToastViewport.tsx
/**
* ToastViewport —— 全局通知的渲染宿主（右下角堆叠）。
*
* 挂载在 `ConfigManagerSection` 根部（与 `.drawerPanel` 同级），而不是 Portal 到 body：
* 宿主设置弹窗 overlay 为 `position: fixed; z-index: 1000`（见 Modal.tsx 的
* MODAL_ROOT_ID 说明），任何挂到 body 的固定层都会被它盖住而"隐形"。
* 因此本组件用 `position: absolute` 贴合插件根节点（`.section` 已 position: relative），
* 天然落在宿主弹窗自己的层叠上下文内。
*
* 交互：
*   - 每条可点 × 手动关闭；悬停整条时**暂停**自动消失（正在读的内容不会跑掉），
*     移开后按原时长重新计时。
*   - 容器 `pointer-events: none`，仅卡片自身 `pointer-events: auto`：
*     通知不遮挡下方页面的点击（右下角常压着状态栏 / 列表）。
*   - aria-live="polite" + role="status"：屏幕阅读器播报但不打断。
*
* 视觉：走 Workbench Design System 既有 t​o​k​en（`--dsw-*`）+ Badge/Banner 的四态语义色，
* 不引入第二套配色。
*/
/** kind → 图标（与 Badge / Banner 四态同源语义）。 */
function ToastGlyph({ kind }) {
	switch (kind) {
		case "ok": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CheckIcon, { size: 14 });
		case "warn": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(WarnIcon, { size: 14 });
		case "error": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ErrorIcon, { size: 14 });
		case "info": return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(InfoIcon, { size: 14 });
	}
}
/**
* 右下角通知视口。无通知时渲染 null（不进 DOM）。
*/
function ToastViewport({ t }) {
	const snapshot = (0, react.useSyncExternalStore)(toastStore.subscribe, toastStore.getSnapshot);
	if (snapshot.items.length === 0) return null;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: config_manager_module_css_default.toastViewport,
		role: "status",
		"aria-live": "polite",
		children: snapshot.items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: config_manager_module_css_default.toast,
			"data-kind": item.kind,
			onMouseEnter: () => {
				toastStore.pauseTimer(item.id);
			},
			onMouseLeave: () => {
				toastStore.resetTimer(item.id);
			},
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.toastGlyph,
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToastGlyph, { kind: item.kind })
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
					className: config_manager_module_css_default.toastText,
					children: item.text
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
					icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CloseIcon, { size: 12 }),
					label: t("common.close"),
					onClick: () => {
						toastStore.dismiss(item.id);
					}
				})
			]
		}, item.id))
	});
}
//#endregion
//#region src/client/ConfigManagerSection.tsx
/**
* Config Manager 设置页（settings.section 入口）—— Workbench Shell（2026-09 Full UI Rebuild）。
*
* 结构（画布 ≈ 564 × 720，800px 设置弹窗内）：
*   ┌ navStrip：总览 / 备份 / 导出 / 导入 / 同步 / 市场 / 档案 + 右侧图标动作（活动/关于）
*   ├ (SAFE MODE 横幅：仅恢复待处理时出现)
*   ├ shellMain：当前页面（pagePad 内边距，独立滚动）
*   └ statusBar：运行状态点 + 进行中任务数 + 版本信息
* 另有「活动与关于」右侧抽屉（活动记录 / 关于 两个子视图，moreSub 持久化）。
*
* IA（Workbench Rebuild）：export/import 升为一级页面；旧「更多」面板由抽屉取代
* （run-store parsePersistedState 将旧 panel 值迁移，moreSub 保留）。
*
* 业务面（api/syncApi/marketApi）由注册时的 inject face 注入；t 由 locale seat 注入。
* 关闭按钮由 settings shell 自带，本页不再渲染。
*
* m2：主视图（panel/view）与全部子视图状态统一由模块级 runStore 持有
* （sessionStorage 持久化 + 切页/关面板不重建控制器实例）；挂载时
* 经 GET /runs + 轮询 /progress 恢复进行中的 run（刷新/重开面板后）。
*/
/** 一级导航（Workbench IA：7 页签；export/import 为独立页面）。 */
const NAV_ITEMS = [
	{
		id: "overview",
		label: "nav.overview"
	},
	{
		id: "snapshots",
		label: "nav.backups"
	},
	...[],
	{
		id: "export",
		label: "nav.export"
	},
	{
		id: "import",
		label: "nav.import"
	},
	{
		id: "sync",
		label: "nav.sync"
	},
	{
		id: "market",
		label: "nav.market"
	},
	{
		id: "profiles",
		label: "nav.profiles"
	}
];
/**
* Workbench Shell：导航条 + 页面内容 + 状态栏 + 活动抽屉。
*/
function ConfigManagerSection({ api, syncApi, syncT, marketApi, myConfigsApi, marketT, recoveryApi, recoveryT, historyApi, historyT, lifecycleApi, t }) {
	const state = (0, react.useSyncExternalStore)(runStore.subscribe, runStore.getSnapshot);
	const panel = state.panel === "lifecycle" ? "snapshots" : state.panel;
	(0, react.useEffect)(() => {
		if (runStore.getSnapshot().panel === "lifecycle") runStore.patch({ panel: "snapshots" });
	}, [panel]);
	const [drawerOpen, setDrawerOpen] = (0, react.useState)(false);
	const openDrawer = (sub) => {
		runStore.patch({ more: { moreSub: sub } });
		setDrawerOpen(true);
	};
	const closeDrawer = () => {
		setDrawerOpen(false);
	};
	const [version, setVersion] = (0, react.useState)(null);
	(0, react.useEffect)(() => {
		let cancelled = false;
		api.status().then((s) => {
			if (!cancelled) setVersion(s);
		}, () => {});
		return () => {
			cancelled = true;
		};
	}, [api]);
	const [starPromptOpen, setStarPromptOpen] = (0, react.useState)(false);
	/** 弹窗展示的 GitHub 仓库地址（GET /star-prompt 返回；不落 store） */
	const starRepoUrl = (0, react.useRef)("");
	/** 本次挂载只判定一次（防止 StrictMode/重挂载重复弹） */
	const starPromptChecked = (0, react.useRef)(false);
	(0, react.useEffect)(() => {
		if (starPromptChecked.current) return;
		starPromptChecked.current = true;
		(async () => {
			try {
				const status = await api.starPromptStatus();
				const ev = evaluateStarPrompt({
					firstSeenAt: status.firstSeenAt,
					dismissed: status.dismissed,
					clicked: status.clicked
				}, Date.now());
				if (ev.shouldRecordFirstSeen) api.saveStarPrompt({ firstSeenAt: Date.now() }).catch(() => {});
				if (ev.shouldShow) {
					starRepoUrl.current = status.repoUrl;
					setStarPromptOpen(true);
				}
			} catch {}
		})();
	}, [api]);
	/** 去点 Star：打开仓库页 + 记 clicked（此后不再弹）。 */
	const handleStar = () => {
		setStarPromptOpen(false);
		const url = starRepoUrl.current;
		if (url !== "") {
			const anchor = document.createElement("a");
			anchor.href = url;
			anchor.target = "_blank";
			anchor.rel = "noreferrer";
			anchor.click();
		}
		api.saveStarPrompt({ clicked: true }).catch(() => {});
	};
	/** 不再提示：关闭弹窗 + 记 dismissed（永久不再弹）。 */
	const handleDismiss = () => {
		setStarPromptOpen(false);
		api.saveStarPrompt({ dismissed: true }).catch(() => {});
	};
	/** 遮罩点击 / Esc：只是暂时关闭，不记表态（下次进入再判）。 */
	const handleBackdropClose = () => {
		setStarPromptOpen(false);
	};
	const [releaseNotesOpen, setReleaseNotesOpen] = (0, react.useState)(false);
	/** 当前运行的插件版本号（GET /release-notes-prompt 返回） */
	const releaseNotesCurrentVersion = (0, react.useRef)("");
	/** 本次挂载只判定一次（防止 StrictMode/重挂载重复弹） */
	const releaseNotesChecked = (0, react.useRef)(false);
	(0, react.useEffect)(() => {
		if (releaseNotesChecked.current) return;
		releaseNotesChecked.current = true;
		(async () => {
			try {
				const status = await api.releaseNotesPromptStatus();
				const currentVer = status.currentVersion ?? "";
				releaseNotesCurrentVersion.current = currentVer;
				if (evaluateReleaseNotesPrompt({
					lastSeenVersion: status.lastSeenVersion,
					dismissed: status.dismissed
				}, currentVer).shouldShow) setReleaseNotesOpen(true);
			} catch {}
		})();
	}, [api]);
	/** 确认：关闭弹窗 + 记录当前版本已读（下次更新到新版本时仍会提示）。 */
	const handleReleaseNotesConfirm = () => {
		setReleaseNotesOpen(false);
		const ver = releaseNotesCurrentVersion.current;
		api.saveReleaseNotesPrompt({ lastSeenVersion: ver !== "" ? ver : void 0 }).catch(() => {});
	};
	/** 永不提示：关闭弹窗 + 记录 dismissed（后续版本更新不再自动提示）。 */
	const handleReleaseNotesNeverShow = () => {
		setReleaseNotesOpen(false);
		const ver = releaseNotesCurrentVersion.current;
		api.saveReleaseNotesPrompt({
			dismissed: true,
			lastSeenVersion: ver !== "" ? ver : void 0
		}).catch(() => {});
	};
	/** 遮罩 / Esc / 标题栏关闭：按确认关闭，记录当前版本已读（防刷新重复弹同一版本）。 */
	const handleReleaseNotesClose = () => {
		handleReleaseNotesConfirm();
	};
	(0, react.useEffect)(() => {
		runStore.resume(api);
		return () => {
			runStore.stopResume();
		};
	}, [api]);
	const recoveryStatus = state.recovery.status;
	(0, react.useEffect)(() => {
		if (recoveryStatus !== null) return;
		let cancelled = false;
		recoveryApi.status().then((s) => {
			if (!cancelled) runStore.patch({ recovery: { status: s } });
		}, () => {});
		return () => {
			cancelled = true;
		};
	}, [recoveryStatus, recoveryApi]);
	const recoveryRequired = recoveryStatus !== null ? toRecoveryView(recoveryStatus).recoveryRequired === true : false;
	/** 切页（export/import 时同步 view 镜像字段，保持旧持久化语义）。 */
	const goto = (id) => {
		if (id === "export") runStore.patch({
			view: "export",
			panel: "export"
		});
		else if (id === "import") runStore.patch({
			view: "import",
			panel: "import"
		});
		else runStore.patch({ panel: id });
	};
	/** tablist 方向键导航（ARIA tabs，manual activation）：←/→ 移动焦点，Enter/Space 原生激活。 */
	const onTablistKeyDown = (event) => {
		if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
		const container = event.currentTarget;
		const buttons = Array.from(container.querySelectorAll("[role=\"tab\"]"));
		if (buttons.length === 0) return;
		const currentIndex = buttons.indexOf(document.activeElement);
		if (currentIndex < 0) return;
		const next = buttons[(currentIndex + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length];
		if (next !== void 0) {
			event.preventDefault();
			next.focus();
		}
	};
	const runningCount = (state.export.running ? 1 : 0) + (state.import.running ? 1 : 0) + (state.sync.busy !== null ? 1 : 0) + (state.snapshots.running ? 1 : 0) + (state.recovery.running ? 1 : 0);
	const statusKind = recoveryRequired ? "error" : runningCount > 0 ? "info" : "ok";
	const statusText = recoveryRequired ? t("shell.status.recovery") : runningCount > 0 ? t("shell.status.running", { count: String(runningCount) }) : t("shell.status.idle");
	/** 当前页面内容（pagePad 统一内边距）。 */
	let page;
	switch (panel) {
		case "overview":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(OverviewPanel, {
				api,
				syncApi,
				historyApi,
				t,
				openActivity: () => {
					openDrawer("history");
				}
			});
			break;
		case "export":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ExportView, {
				api,
				t
			});
			break;
		case "import":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ImportWizardView, {
				api,
				t
			});
			break;
		case "snapshots":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SnapshotsPanel, {
				api,
				t,
				recoveryApi,
				recoveryT
			});
			break;
		case "sync":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(SyncSettingsView, {
				api: syncApi,
				t: syncT
			});
			break;
		case "market":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MarketPanel, {
				api: marketApi,
				myConfigsApi,
				syncApi,
				importApi: api,
				t: marketT
			});
			break;
		case "profiles":
			page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(ProfilesPanel, {
				api,
				t
			});
			break;
		case "lifecycle": page = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(LifecyclePanel, {
			lifecycleApi,
			t,
			openRecoveryWizard: () => {
				runStore.patch({
					panel: "snapshots",
					snapshots: { subTab: "recovery" }
				});
			}
		});
	}
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: config_manager_module_css_default.section,
		id: MODAL_ROOT_ID,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
				className: config_manager_module_css_default.shellNav,
				"aria-label": t("section.label"),
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.navStrip,
					role: "tablist",
					onKeyDown: onTablistKeyDown,
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": panel === item.id,
						"data-active": panel === item.id ? "" : void 0,
						className: config_manager_module_css_default.navTab,
						onClick: () => {
							goto(item.id);
						},
						children: [item.id === "snapshots" && recoveryRequired && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.navDot,
							"aria-hidden": "true"
						}), t(item.label)]
					}, item.id))
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: config_manager_module_css_default.navActions,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: config_manager_module_css_default.ghostButton,
						"data-size": "sm",
						"data-active": drawerOpen && state.more.moreSub === "history" ? "" : void 0,
						onClick: () => {
							openDrawer("history");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ActivityIcon, { size: 13 }),
							" ",
							t("overview.nav.activity")
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
						type: "button",
						className: config_manager_module_css_default.ghostButton,
						"data-size": "sm",
						"data-active": drawerOpen && state.more.moreSub === "about" ? "" : void 0,
						onClick: () => {
							openDrawer("about");
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)(AboutIcon, { size: 13 }),
							" ",
							t("overview.nav.about")
						]
					})]
				})]
			}),
			recoveryRequired && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				style: { padding: "8px 12px 0" },
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(Banner, {
					kind: "error",
					children: [recoveryT("recovery.banner"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
						type: "button",
						className: config_manager_module_css_default.ghostButton,
						"data-size": "sm",
						onClick: () => {
							runStore.patch({
								panel: "snapshots",
								snapshots: { subTab: "recovery" }
							});
						},
						children: recoveryT("recovery.bannerAction")
					})]
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("main", {
				className: config_manager_module_css_default.shellMain,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: config_manager_module_css_default.pagePad,
					children: page
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("footer", {
				className: config_manager_module_css_default.statusBar,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(StatusDot, {
						kind: statusKind,
						pulse: runningCount > 0
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.statusText,
						children: statusText
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { className: config_manager_module_css_default.statusSpacer }),
					version !== null && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: config_manager_module_css_default.statusMeta,
						children: t("shell.version", {
							plugin: version.pluginVersion,
							dsh: version.dshVersion
						})
					})
				]
			}),
			drawerOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: config_manager_module_css_default.drawerMask,
				onClick: closeDrawer,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
				className: config_manager_module_css_default.drawerPanel,
				role: "dialog",
				"aria-modal": "true",
				"aria-label": t("shell.drawer.title"),
				onKeyDown: (e) => {
					if (e.key === "Escape") {
						e.stopPropagation();
						closeDrawer();
					}
				},
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: config_manager_module_css_default.drawerHeader,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: config_manager_module_css_default.drawerTitle,
							children: t("shell.drawer.title")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconButton, {
							icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(CloseIcon, { size: 14 }),
							label: t("common.close"),
							onClick: closeDrawer
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						style: { padding: "10px 14px 0" },
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Segmented, {
							items: [{
								id: "history",
								label: historyT("view.history")
							}, {
								id: "about",
								label: t("view.about")
							}],
							active: state.more.moreSub,
							onChange: (id) => {
								runStore.patch({ more: { moreSub: id === "about" ? "about" : "history" } });
							},
							ariaLabel: t("shell.drawer.title")
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: config_manager_module_css_default.drawerBody,
						children: state.more.moreSub === "history" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HistoryPanel, {
							historyApi,
							t: historyT
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(AboutPanel, {
							api,
							t
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ToastViewport, { t }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ConfirmDialog, {
				open: starPromptOpen,
				title: t("starPrompt.title"),
				message: t("starPrompt.body"),
				confirmLabel: t("starPrompt.star"),
				cancelLabel: t("starPrompt.dismiss"),
				onConfirm: handleStar,
				onCancel: handleDismiss,
				backdropClose: handleBackdropClose
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(ReleaseNotesDialog, {
				open: releaseNotesOpen,
				onClose: handleReleaseNotesClose,
				onConfirm: handleReleaseNotesConfirm,
				onNeverShow: handleReleaseNotesNeverShow,
				t
			})
		]
	});
}
//#endregion
//#region src/client/locales.ts
/**
* Config Manager 表面文案：zh 为源语言，en 镜像每个键。
* 字典 namespace 由 client/index.ts 注册（declare module 合并进 LocaleNamespaceMap）。
* 键集合通过 `ConfigManagerKey` 类型在注册处做编译期校验（缺键/多键即编译错误）。
*/
const zh$4 = {
	"section.label": "备份与迁移",
	"section.description": "导出 / 导入 / 迁移 DSH 配置（备份不含密钥，加密备份可选）",
	"view.transfer": "导出与导入",
	"view.overview": "总览",
	"view.export": "导出备份",
	"view.import": "导入恢复",
	"view.snapshots": "备份与快照",
	"view.sync": "远程同步",
	"view.market": "配置市场",
	"view.about": "关于",
	"view.more": "更多",
	"view.profiles": "配置文件",
	"common.close": "关闭",
	"common.cancel": "取消",
	"common.back": "上一步",
	"common.next": "下一步",
	"common.done": "完成",
	"common.retry": "重试",
	"common.confirm": "确认",
	"common.loading": "加载中…",
	"common.unknownError": "未知错误",
	"toast.copied": "已复制到剪贴板",
	"toast.copyFailed": "复制失败，请手动选择文本复制",
	"toast.refreshed": "已刷新",
	"overview.subtitle": "配置健康与快速操作一览（数据来自各功能页的只读状态）",
	"overview.refresh": "刷新",
	"overview.loading": "正在加载总览…",
	"overview.health.ok": "配置状态良好",
	"overview.health.noBackup": "尚无任何备份 —— 建议先创建一个备份或快照",
	"overview.health.scheduleFailed": "上次定时备份失败，建议检查备份设置",
	"overview.health.recovery": "存在未解决的恢复事项，需要处理",
	"overview.health.recoveryAction": "前往「事故恢复」处理",
	"overview.metric.backups": "备份文件",
	"overview.metric.snapshots": "安全快照",
	"overview.metric.schedule": "定时备份",
	"overview.metric.sync": "远程同步",
	"overview.state.on": "开启",
	"overview.state.off": "关闭",
	"overview.meta.lastBackup": "最近：{time}",
	"overview.meta.noBackup": "尚无记录",
	"overview.meta.scheduleOn": "已开启 · 上次 {time}",
	"overview.meta.scheduleOff": "未开启（建议开启自动保护）",
	"overview.meta.scheduleFail": "上次备份失败",
	"overview.meta.syncOn": "已配置 · 上次 {time}",
	"overview.meta.syncOff": "未配置",
	"overview.meta.never": "从未运行",
	"overview.time.now": "刚刚",
	"overview.time.min": "{n} 分钟前",
	"overview.time.hour": "{n} 小时前",
	"overview.time.day": "{n} 天前",
	"overview.quick.title": "快速操作",
	"overview.quick.backup": "立即备份",
	"overview.quick.backupHint": "全量快照（不含密钥），随时可回滚",
	"overview.quick.backupDone": "备份完成",
	"overview.quick.backupFailed": "备份失败",
	"overview.quick.export": "导出备份",
	"overview.quick.exportHint": "生成可迁移的 ZIP 备份文件",
	"overview.quick.import": "导入恢复",
	"overview.quick.importHint": "从备份文件恢复或迁移到本机",
	"overview.quick.sync": "远程同步",
	"overview.quick.syncHint": "跨设备保持配置一致（Git / WebDAV）",
	"overview.activity.title": "最近活动",
	"overview.activity.empty": "暂无操作记录（执行备份 / 导入 / 同步后在这里显示）",
	"overview.suggest.title": "建议",
	"overview.suggest.schedule": "开启定时备份，让 DSH 自动保护你的配置",
	"overview.suggest.sync": "配置远程同步，跨设备恢复更省心",
	"overview.empty.title": "开始保护你的配置",
	"overview.empty.body": "创建第一个备份或快照后，这里会展示配置健康状态与最近活动。",
	"overview.running": "{count} 个任务进行中",
	"overview.kind.import": "导入",
	"overview.kind.restore": "恢复",
	"overview.kind.rollback": "回滚",
	"overview.kind.profile-switch": "切换配置档案",
	"overview.kind.profile-delete": "删除配置档案",
	"overview.kind.profile-rename": "重命名配置档案",
	"overview.kind.profile-save": "保存配置档案",
	"overview.kind.profile-import": "导入配置档案",
	"overview.kind.sync-apply": "同步应用",
	"overview.kind.autosync": "自动同步",
	"overview.kind.recovery": "恢复事项",
	"overview.kind.backup": "备份",
	"overview.kind.snapshot-delete": "删除快照",
	"overview.kind.snapshot-prune": "清理快照",
	"overview.kind.other": "其他操作",
	"status.ready": "Config Manager 已就绪（插件 {version} · DSH {dsh} · {platform}）",
	"status.unavailable": "Config Manager 服务未就绪，请确认插件已正确挂载。",
	"export.mode.quick": "快速导出",
	"export.mode.quickHint": "一键导出推荐分区（可迁移、不含设备专属数据），适合常规备份。",
	"export.mode.custom": "自定义导出",
	"export.mode.customHint": "按分组逐项勾选要导出的分区。",
	"export.security": "安全选项",
	"export.encrypt": "加密备份",
	"export.encryptHint": "用密码加密整个备份文件（AES-256-GCM）。密码仅用于本次加密，不会写入备份或任何配置文件；导入时必须输入该密码才能解锁。",
	"export.password": "备份加密密码",
	"export.passwordConfirm": "确认密码",
	"export.passwordMismatch": "两次输入的密码不一致",
	"export.passwordRequired": "加密备份必须设置密码",
	"export.includeSecrets": "导出密钥",
	"export.includeSecretsHint": "把真实密钥（凭据值）写入备份。密钥必须以加密形式保存：勾选时会自动选中「加密备份」；取消「加密备份」会同时取消「导出密钥」。",
	"export.run": "开始导出",
	"export.preview": "预览将导出内容",
	"export.previewing": "正在统计…",
	"export.previewSummary": "将打包 {sections} 个分区，约 {size}（不含密钥）",
	"export.previewSkipped": "{count} 个分区导出失败已跳过",
	"export.running": "正在导出…",
	"export.download": "下载备份文件",
	"export.saved": "已保存到下载目录：{name}",
	"export.selectionWarnings": "以下分区为设备相关数据，跨设备导入时可能不适用：",
	"export.group.unknown": "其他",
	"export.included": "已包含",
	"export.excluded": "未包含",
	"export.naming": "文件名与备注（可选）",
	"export.fileName": "自定义文件名",
	"export.fileNameHint": "留空自动命名（dsh-config-<日期>.zip）；无需手动输入 .zip 后缀，保存时自动补全。仅允许字母数字、空格、- _ .。",
	"export.fileNameInvalid": "文件名不合法：仅允许字母数字、空格、- _ .，不能包含路径分隔符。",
	"export.note": "备注",
	"export.notePlaceholder": "例如：迁移前的完整备份 / 2026-08 存档",
	"export.noteHint": "备注保存在本机备份列表中（随配置备份迁移），便于区分多个导出产物。",
	"import.stage.select": "选择",
	"import.stage.analyze": "分析",
	"import.stage.decide": "预览与决策",
	"import.stage.confirm": "确认",
	"import.stage.execute": "执行",
	"import.stage.done": "完成",
	"import.stepper.label": "第 {current} 步，共 {total} 步：{label}",
	"import.select.title": "选择备份文件",
	"import.select.hint": "选择本机导出的 dsh-config-*.zip 备份文件开始导入。分析阶段只读，不会修改任何配置。",
	"import.select.browse": "选择 ZIP 文件",
	"import.select.reselect": "重新选择",
	"import.select.cancel": "取消选择",
	"import.select.file": "已选择：{name}",
	"import.analyzing": "正在分析备份…",
	"import.compatibility.title": "兼容性",
	"import.compatibility.score": "兼容性评分：{score}",
	"import.compatibility.ok": "备份可导入",
	"import.compatibility.fail": "备份分析失败：{reason}",
	"import.preview.title": "导入预览",
	"import.preview.willChange": "将变更 {count} 项",
	"import.preview.unchanged": "已一致跳过 {count} 项",
	"import.preview.settings": "设置更新 {count}",
	"import.preview.plugins": "插件待安装 {count}",
	"import.preview.mcp": "MCP 新增 {count}",
	"import.preview.prompts": "提示词 {count}",
	"import.preview.paths": "路径映射 {count}",
	"import.preview.secrets": "密钥待补录 {count}",
	"import.preview.conflicts": "冲突 {count}",
	"import.preview.restart": "导入后需重启 DSH 生效",
	"import.confirm.execute": "确认导入",
	"import.confirm.warning": "导入将修改当前 DSH 配置；执行前会自动创建安全快照，失败时整体回滚。",
	"import.confirm.encrypted": "将用备份密码解密并恢复 {count} 个凭据。",
	"import.rollbackOnError": "失败时整体回滚（推荐）",
	"import.importing": "正在导入…（插件安装较多时可能需要几分钟，请勿关闭页面）",
	"import.log.title": "导入日志",
	"import.log.empty": "等待命令输出…",
	"import.log.newOutput": "↓ 新输出",
	"import.skipCurrent": "跳过当前插件",
	"import.skipPending": "正在跳过…其余项将继续导入",
	"import.retrySkipped": "重试失败/跳过的项 ({count})",
	"import.secrets.title": "补录密钥",
	"import.secrets.hint": "以下凭据未随备份导出（安全设计）。如需在目标 DSH 使用，请手动补录；留空将跳过。",
	"import.secrets.optional": "（可选）",
	"import.secrets.required": "（必需）",
	"import.decrypt.badge": "加密备份",
	"import.decryptArchive.title": "解锁加密备份",
	"import.decryptArchive.hint": "此备份已整体加密（整个文件被密码保护）。输入导出时设置的密码即可解密并继续导入——备份内的加密凭据也会用同一密码自动恢复，全程只需输入这一次密码；密码仅本次使用，绝不落盘。",
	"import.decryptArchive.passwordPlaceholder": "输入备份加密密码",
	"import.decryptArchive.unlock": "解锁并继续",
	"import.decryptArchive.unlocking": "解锁中…",
	"import.decrypt.previewHint": "加密备份：凭据已由解锁密码自动恢复，无需再次输入密码。",
	"import.conflicts.title": "解决冲突",
	"import.conflicts.hint": "以下配置项在目标 DSH 已存在且与备份不同，请逐项决策。",
	"import.conflicts.keepCurrent": "保留当前",
	"import.conflicts.useImported": "使用备份",
	"import.conflicts.review": "稍后决定",
	"import.conflicts.unresolved": "还有 {count} 项未决策",
	"import.conflicts.keepCurrentAll": "全部保留当前配置",
	"import.conflicts.useImportedAll": "全部使用备份配置",
	"import.paths.title": "路径映射",
	"import.paths.hint": "备份中的绝对路径在目标机器可能不存在，请为每条路径指定新位置（留空将跳过该路径）。",
	"import.paths.old": "原路径",
	"import.paths.new": "新路径",
	"import.paths.unresolved": "还有 {count} 条路径未映射",
	"snapshots.title": "备份与快照",
	"snapshots.hint": "导出备份 = 便携 ZIP（下载 / 一键导入 / 删除，含定时全量备份）；快照恢复 = 恢复到导入前状态：整文件还原 settings/patch、卸载导入期间新增插件、补偿被修改文件，执行前会把当前文件备份到一个安全位置。",
	"snapshots.subTab.restore": "安全快照",
	"snapshots.subTab.files": "备份文件",
	"snapshots.subTab.schedule": "定时备份",
	"snapshots.subTab.recovery": "事故恢复",
	"snapshots.empty.title": "尚无安全快照",
	"snapshots.empty.body": "安全快照在导入 / 恢复前自动创建，用于一键回滚；也可立即手动创建一个。",
	"snapshots.empty.viewFiles": "查看备份文件",
	"snapshots.empty.runBackup": "立即备份",
	"backupFiles.noteUnreadable": "（备注不可读）",
	"snapshots.empty": "暂无快照。执行导入时会自动创建安全快照。",
	"snapshots.loading": "加载快照中…",
	"snapshots.selectHint": "选择快照以预览恢复计划（只读预览，不会改动任何设置）：",
	"snapshots.createdAt": "创建时间",
	"snapshots.sourceZip": "来源备份",
	"snapshots.status": "状态",
	"snapshots.entries": "条目",
	"snapshots.plugins": "插件",
	"snapshots.actions": "操作",
	"snapshots.retentionHint": "最多自动保留 {count} 个快照（超出清理最旧的）；置顶的快照不参与自动清理，只能手动删除。",
	"snapshots.pin": "置顶",
	"snapshots.unpin": "取消置顶",
	"snapshots.delete": "删除",
	"snapshots.deleted": "已删除快照",
	"snapshots.deleteConfirmTitle": "删除快照",
	"snapshots.deleteConfirm": "确认删除 {time} 创建的快照？该导入前回滚点将被永久删除，不可恢复。",
	"snapshots.status.pending": "进行中",
	"snapshots.status.done": "已完成",
	"snapshots.status.rolled-back": "已回滚",
	"snapshots.status.unknown": "未知",
	"snapshots.planTitle": "恢复计划预览",
	"snapshots.viewPlan": "查看恢复计划",
	"snapshots.noActions": "该快照无可用恢复动作（或全部跳过）。",
	"snapshots.execute": "执行恢复",
	"snapshots.executing": "恢复执行中…",
	"snapshots.confirmTitle": "确认恢复",
	"snapshots.confirmRestore": "确认执行恢复？会先把当前文件备份到一个安全位置，再删除导入期间新增的插件。",
	"snapshots.reportTitle": "恢复报告",
	"snapshots.restored": "已还原",
	"snapshots.removedPlugins": "已卸载插件",
	"snapshots.manualHints": "需人工处理",
	"snapshots.failed": "失败",
	"snapshots.skipped": "跳过",
	"snapshots.kind.hostFileRestore": "整文件还原",
	"snapshots.kind.hostFileRemove": "整文件删除",
	"snapshots.kind.pluginRemove": "卸载插件",
	"snapshots.kind.fileRestore": "还原文件",
	"snapshots.kind.fileRemove": "删除文件",
	"snapshots.kind.credentialHint": "人工提示",
	"snapshots.kind.skip": "跳过",
	"snapshots.kind.unknown": "未知",
	"snapshots.summary": "整文件还原 {hostFileRestores} · 整文件删除 {hostFileRemoves} · 插件卸载 {pluginRemoves} · 文件还原 {fileRestores} · 文件删除 {fileRemoves} · 凭据提示 {credentialHints} · 跳过 {skips}",
	"backupSchedule.title": "定时全量备份",
	"backupSchedule.hint": "按固定间隔在后台自动导出全量备份 ZIP（恒不含 secret、不加密；要加密请手动导出）。配置存 sync/backup-schedule.json，随 self 分区备份 / 远程同步迁移。",
	"backupSchedule.enabled": "启用定时备份",
	"backupSchedule.enabledHint": "开启后 DSH 在后台按间隔自动备份；每次启动时立即执行一次（距上次运行不足 1 小时则跳过启动触发）。",
	"backupSchedule.interval": "备份间隔",
	"backupSchedule.interval.6h": "每 6 小时",
	"backupSchedule.interval.12h": "每 12 小时",
	"backupSchedule.interval.24h": "每 24 小时",
	"backupSchedule.interval.7d": "每 7 天",
	"backupSchedule.interval.custom": "自定义（每周固定时刻）",
	"backupSchedule.customHint": "每周在选定星期与时刻各执行一次全量备份（错过的时间点不补跑）",
	"backupSchedule.weekday.sunday": "周日",
	"backupSchedule.weekday.monday": "周一",
	"backupSchedule.weekday.tuesday": "周二",
	"backupSchedule.weekday.wednesday": "周三",
	"backupSchedule.weekday.thursday": "周四",
	"backupSchedule.weekday.friday": "周五",
	"backupSchedule.weekday.saturday": "周六",
	"backupSchedule.save": "保存设置",
	"backupSchedule.saved": "设置已保存",
	"backupSchedule.runNow": "立即备份",
	"backupSchedule.running": "备份中…",
	"backupSchedule.lastRun": "上次运行",
	"backupSchedule.never": "从未运行",
	"backupSchedule.status.success": "成功",
	"backupSchedule.status.skipped": "已跳过",
	"backupSchedule.status.failed": "失败",
	"backupSchedule.consecutiveFailures": "定时备份连续失败 {count} 次，请检查配置（磁盘空间 / 权限 / 分区导出错误）",
	"backupSchedule.loading": "加载定时备份设置…",
	"backupSchedule.error": "定时备份设置加载失败",
	"retention.title": "保留策略",
	"retention.hint": "控制自动清理保留多少份（快照与定时备份共用）。置顶的快照与未收敛恢复点恒豁免自动清理。",
	"retention.keepLast": "最近保留",
	"retention.keepLastHint": "按时间保留最近 N 份；0 = 不按「最近」保留",
	"retention.keepMonthly": "每月保留",
	"retention.keepMonthlyHint": "每月额外保留最新 1 份，最多覆盖 N 个月；0 = 关闭",
	"retention.keepYearly": "每年保留",
	"retention.keepYearlyHint": "每年额外保留最新 1 份，最多覆盖 N 年；0 = 关闭",
	"retention.unit": "份",
	"retention.months": "个月",
	"retention.years": "年",
	"retention.tiersOff": "未启用分层（等价于「只保留最近 N 份」）",
	"retention.summary": "最近 {keepLast} 份 · 每月 {keepMonthly} · 每年 {keepYearly}",
	"retention.invalid": "保留策略取值非法，请检查各字段（整数且在允许范围内）",
	"retention.appliesTo": "生效于：导入前快照 + 定时备份产物",
	"backupFiles.title": "备份文件",
	"backupFiles.name": "文件名",
	"backupFiles.source": "来源",
	"backupFiles.size": "大小",
	"backupFiles.time": "修改时间",
	"backupFiles.hint": "导出产物（手动导出与定时备份）统一在此管理：可下载到本机、直接导入恢复，或删除。定时备份自动保留最近 10 个。",
	"backupFiles.empty": "暂无备份文件。手动导出或启用定时备份后此处会列出。",
	"backupFiles.loading": "加载备份文件…",
	"backupFiles.error": "备份文件加载失败",
	"backupFiles.source.auto": "定时备份",
	"backupFiles.source.manual": "手动导出",
	"backupFiles.download": "下载",
	"backupFiles.import": "导入",
	"backupFiles.delete": "删除",
	"backupFiles.deleteConfirmTitle": "删除备份文件",
	"backupFiles.deleteConfirm": "确认删除备份文件「{name}」？此操作不可恢复。",
	"backupFiles.deleted": "已删除备份文件「{name}」",
	"backupFiles.searchPlaceholder": "按文件名或备注搜索…",
	"backupFiles.searchEmpty": "没有匹配的备份文件",
	"backupFiles.inspect": "查看 / 对比",
	"backupFiles.inspectLoading": "正在分析备份内容…",
	"backupFiles.inspectEmpty": "该备份无法分析（文件损坏或格式不支持）",
	"backupFiles.inspectSections": "包含的分区",
	"backupFiles.inspectDiff": "与此备份的差异（只读预览）",
	"backupFiles.inspectItems": "变更明细",
	"backupFiles.inspectGroup.conflicts": "冲突（需决策）",
	"backupFiles.inspectGroup.changes": "变更（将写入）",
	"backupFiles.inspectGroup.paths": "路径映射（需处理）",
	"backupFiles.inspectGroup.skipped": "已一致（无需处理）",
	"backupFiles.inspectGroup.others": "其他",
	"report.export.title": "导出完成",
	"report.import.title": "导入结果",
	"report.rollback.title": "回滚报告",
	"report.action.fixIssues": "查看失败项",
	"report.action.viewDetails": "查看详情",
	"report.action.done": "完成",
	"report.needsRestart": "插件 / MCP 变更将在重启 DSH 后生效。",
	"nextSteps.title": "接下来需要处理",
	"nextSteps.done": "全部完成，无需额外处理",
	"nextSteps.restart.title": "重启 DSH 后生效（{count}）",
	"nextSteps.restart.hint": "以下变更需要重启 DSH 才会生效：",
	"nextSteps.secrets.title": "补录凭据（{count}）",
	"nextSteps.secrets.hint": "以下凭据未随备份导出，需在本机手动补录：",
	"nextSteps.unresolved.title": "失败 / 已跳过（{count}）",
	"nextSteps.unresolved.hint": "以下项未成功应用，可在结果页点击「重试」：",
	"error.title": "操作失败",
	"error.hint": "错误消息已自动脱敏，不会泄露任何密钥信息。",
	"starPrompt.title": "喜欢 Config Manager 吗？",
	"starPrompt.body": "如果你觉得这个插件有用，欢迎到 GitHub 点个 ⭐ Star 支持一下——你的支持是持续维护的最大动力！",
	"starPrompt.star": "去点 Star",
	"starPrompt.dismiss": "不再提示",
	"about.title": "关于 DSH Config Manager",
	"about.subtitle": "插件信息、作者与反馈入口",
	"about.official": "官方",
	"about.version": "版本 {version}",
	"about.dshVersion": "DSH {version}",
	"about.links": "相关链接",
	"about.star": "⭐ 在 GitHub 上点赞",
	"about.repo": "GitHub 仓库",
	"about.docs": "使用文档",
	"about.issues": "反馈问题",
	"about.authorLabel": "作者",
	"about.loading": "正在获取版本信息…",
	"about.retryStatus": "重新获取",
	"about.releaseNotes": "更新内容",
	"about.diag.label": "插件清单来源",
	"about.diag.profileDir": "目录：{path}",
	"about.diag.profile": "profile：{profile}",
	"about.diag.pluginCount": "已识别插件：{count} 个",
	"about.diag.manifestUnreadable": "该目录下读不到 package.json —— 插件清单必然为空；请确认 DSH 的 profile 与 DSH_HOME 是否与此处一致。",
	"about.diag.bundles": "bundles：{bundles}",
	"about.diag.hint": "若与实际不符，请据此检查 DSH 启动参数 --profile 与 DSH_HOME 环境变量。",
	"about.releaseNotes.title": "版本更新内容",
	"about.releaseNotes.loading": "正在获取更新内容…",
	"about.releaseNotes.loadingMore": "正在加载更多版本…",
	"about.releaseNotes.empty": "暂无版本发布记录。",
	"about.releaseNotes.error": "获取更新内容失败，请检查网络连接或稍后重试。",
	"about.releaseNotes.retry": "重试",
	"about.releaseNotes.viewOnGithub": "在 GitHub 上查看全部 Releases",
	"about.releaseNotes.viewSingleOnGithub": "在 GitHub 上查看此版本",
	"about.releaseNotes.allLoaded": "已加载全部版本记录",
	"about.releaseNotes.prerelease": "预发布",
	"about.releaseNotes.latest": "最新",
	"about.releaseNotes.noBody": "该版本暂无详细更新说明。",
	"about.releaseNotes.confirm": "确认",
	"about.releaseNotes.neverShow": "永不提示",
	"about.cli.title": "CLI 救援工具",
	"about.cli.hint": "GUI 运行在 DSH 内部——DSH 无法启动时，独立安装的 CLI（dsh-config-manager）是第一救援手段：列快照 / 离线恢复 / 一键重装 DSH，全程无需 DSH 运行。安装一次即可在任何机器上用：",
	"about.cli.docs": "CLI 使用文档",
	"profiles.title": "配置档案",
	"profiles.subtitle": "把当前 DSH 配置保存为可切换的档案（Work / Personal / …），随时切换；切换含预览 + 自动快照 + 失败回滚。",
	"profiles.save.title": "保存当前配置为档案",
	"profiles.save.hint": "输入档案名并保存：内容复用导出管道（不含密钥），文件类分区（技能/预设）一并内嵌。",
	"profiles.save.placeholder": "例如 Work / Personal / Minimal",
	"profiles.save.action": "保存档案",
	"profiles.save.saving": "保存中…",
	"profiles.save.done": "已保存档案「{name}」",
	"profiles.nameInvalid": "档案名不合法：仅允许字母数字与常见字符，禁止路径分隔符（/ \\）与 ..",
	"profiles.name": "档案名",
	"profiles.sections": "分区",
	"profiles.updatedAt": "更新时间",
	"profiles.loading": "加载档案中…",
	"profiles.empty": "暂无档案。先保存一份当前配置即可开始。",
	"profiles.switch": "切换",
	"profiles.previewHint": "点击查看切换预览（只读）",
	"profiles.rename": "重命名",
	"profiles.delete": "删除",
	"profiles.renameTitle": "重命名档案",
	"profiles.renameMessage": "将档案「{name}」重命名为：",
	"profiles.deleteTitle": "删除档案",
	"profiles.deleteMessage": "确认删除档案「{name}」？该组配置快照将被永久删除，不可恢复。",
	"profiles.delete.done": "已删除档案「{name}」",
	"profiles.import.title": "导入档案",
	"profiles.import.hint": "导入导出的 profile.json 文件（本机或他机导出的档案，含文件类分区内嵌数据）。",
	"profiles.import.choose": "选择 JSON 文件",
	"profiles.import.done": "已导入档案「{name}」",
	"profiles.switchPreviewTitle": "切换预览：{name}",
	"profiles.previewing": "正在分析切换计划…",
	"profiles.previewSummary": "切换影响",
	"profiles.previewWillChange": "将变更 {count} 项",
	"profiles.previewUnchanged": "已一致 {count} 项",
	"profiles.previewConflicts": "冲突 {count}",
	"profiles.previewSecrets": "需补录密钥 {count}",
	"profiles.previewRestart": "需重启 DSH 生效",
	"profiles.previewNote": "以上为只读预览（零写入）。确认后会自动创建快照并执行，失败时整体回滚。",
	"profiles.previewSections": "档案包含的分区",
	"profiles.previewItems": "变更明细",
	"profiles.switchConfirm": "确认切换",
	"profiles.switching": "切换中…（自动快照 + 分阶段应用）",
	"profiles.switchDone": "切换完成：{count} 项已应用",
	"profiles.switchFailed": "切换失败（部分项未应用）",
	"profiles.switchRolledBack": "切换失败，已整体回滚",
	"import.compatibility.sections": "{count} 个分区",
	"import.compatibility.plugins": "已装 {installed} · 待装 {toInstall}",
	"import.compatibility.paths": "{count} 项路径处理",
	"import.compatibility.secrets": "{count} 项密钥补录",
	"import.compatibility.score.excellent": "优秀",
	"import.compatibility.score.good": "良好",
	"import.compatibility.score.partial": "部分兼容",
	"import.compatibility.score.unsupported": "不支持",
	"import.compatibility.sectionsTitle": "备份包含的分区",
	"sync.status.lastSync": "上次同步",
	"sync.status.sections": "可同步分区",
	"nav.overview": "总览",
	"nav.backups": "备份",
	"nav.export": "导出",
	"nav.import": "导入",
	"nav.sync": "同步",
	"nav.market": "市场",
	"nav.profiles": "档案",
	"nav.activity": "活动记录",
	"nav.recovery": "灾备",
	"lifecycle.autoOn": "自动快照已开启",
	"lifecycle.autoOff": "自动快照未开启",
	"lifecycle.lastAuto": "最近自动快照",
	"lifecycle.never": "从未",
	"lifecycle.undo": "撤销",
	"lifecycle.redo": "重做",
	"lifecycle.undoTitle": "撤销上一步配置变更（回退到内容不同的最近快照）",
	"lifecycle.redoTitle": "重做上一次撤销（仅在撤销后没有新变更时可用）",
	"lifecycle.undoConfirm": "撤销会回滚配置到上一个不同状态。撤销前会自动保存当前状态，可随时重做。是否继续？",
	"lifecycle.undoOk": "已撤销到 {id}",
	"lifecycle.redoOk": "已重做到 {id}",
	"lifecycle.undoNone": "没有可撤销的变化",
	"lifecycle.redoNone": "没有可重做的撤销",
	"lifecycle.snapshotNow": "立即快照",
	"lifecycle.snapshotReason": "快照原因（可选）",
	"lifecycle.snapshotCreated": "已创建快照 {id}",
	"lifecycle.snapshots": "配置状态快照",
	"lifecycle.empty": "还没有配置状态快照。开启自动快照后，配置变更会自动存档。",
	"lifecycle.kind.auto": "自动",
	"lifecycle.kind.manual": "手动",
	"lifecycle.kind.undo": "撤销",
	"lifecycle.kind.baseline": "基线",
	"lifecycle.kind.pre-restore": "撤销前存档",
	"lifecycle.sections": "{count} 个分区",
	"lifecycle.delete": "删除",
	"lifecycle.deleteConfirm": "删除快照 {id}？该快照将无法再用于回退。",
	"lifecycle.crash.title": "上次启动未正常完成",
	"lifecycle.crash.lastGood": "最后正常状态：{time}",
	"lifecycle.crash.restoreLastGood": "回退到最后正常状态",
	"lifecycle.crash.reason.session-corrupt": "会话文件损坏",
	"lifecycle.crash.reason.bundle-check": "插件 bundle 无法解析",
	"lifecycle.crash.reason.patch-tree": "插件加载失败（挂载树冲突）",
	"lifecycle.crash.reason.unknown": "原因未知",
	"lifecycle.crash.advice.restore-last-good": "建议回退到最后正常状态。",
	"lifecycle.crash.advice.repair-session": "建议先用会话扫描修复损坏的会话文件。",
	"lifecycle.crash.advice.check-bundles": "建议进入救援模式，或检查 package.json 的 dsh.profile.bundles。",
	"lifecycle.crash.advice.check-patch-tree": "建议进入救援模式禁用插件后逐个排查。",
	"lifecycle.rescue.title": "救援模式",
	"lifecycle.rescue.desc": "DSH 因插件起不来时，把插件挂载收窄到「DSH 核心 + 本插件」：改写两层 cordis.patch.yml，并把 dsh.profile.bundles 里的其它用户插件临时移出。不卸载任何包，退出时从备份完整还原。",
	"lifecycle.rescue.active": "救援模式已开启（{time}）—— 请重启 DSH 使其生效。",
	"lifecycle.rescue.enter": "进入救援模式",
	"lifecycle.rescue.exit": "退出救援模式",
	"lifecycle.rescue.restartHint": "操作后需要重启 DSH 才能生效。",
	"lifecycle.rescue.confirm": "进入救援模式会改写 profile 的 cordis.patch.yml、置空 home 的 cordis.patch.yml，并把 dsh.profile.bundles 收窄为 DSH 核心与本插件（其它用户插件本次启动不挂载；包本身不删除）。退出时会从备份逐字节还原。请重启 DSH 使其生效。是否继续？",
	"lifecycle.rescue.exitConfirm": "退出救援模式将从备份还原 cordis.patch.yml 与 package.json，恢复之前的插件集。是否需要重启 DSH。是否继续？",
	"lifecycle.rescue.on": "已进入救援模式",
	"lifecycle.rescue.off": "已退出救援模式",
	"lifecycle.rescue.inactive": "救援模式未开启",
	"lifecycle.rescue.stale": "救援标记已失效（换机或重建 home）",
	"lifecycle.guided.title": "需要更完整的恢复流程？",
	"lifecycle.guided.desc": "本页是一键回退（撤销/重做）。若 DSH 因中断的事务或崩溃而无法正常恢复，请用「备份」页的恢复向导逐步确认后执行 —— 它会先预览影响、再校验结果。",
	"lifecycle.guided.action": "打开恢复向导",
	"nav.about": "关于",
	"nav.refresh": "刷新",
	"shell.status.idle": "就绪",
	"shell.status.running": "{count} 个任务进行中",
	"shell.status.recovery": "恢复待处理",
	"shell.version": "插件 {plugin} · DSH {dsh}",
	"shell.drawer.title": "活动与关于",
	"overview.result.success": "成功",
	"overview.result.failed": "失败",
	"overview.result.skipped": "跳过",
	"overview.activity.viewAll": "查看全部",
	"overview.activity.copy": "复制",
	"overview.activity.redacted": "（文件名已脱敏）",
	"overview.location.title": "备份位置",
	"overview.location.dir": "备份目录",
	"overview.location.totalSize": "备份总体积",
	"overview.location.retention": "快照保留",
	"overview.location.retentionValue": "{used} / {limit}",
	"overview.location.schedule": "定时备份",
	"overview.location.scheduleOn": "{interval} · 上次 {time}",
	"overview.location.scheduleOff": "未开启",
	"overview.location.nextRun": "下次备份",
	"overview.location.lastRun": "上次备份",
	"overview.sections.title": "分区构成",
	"overview.sections.hint": "按当前配置估算（只读预览，零写入）",
	"overview.sections.total": "合计",
	"overview.sections.entries": "{count} 项",
	"overview.quick.exportTitle": "生成可迁移的 ZIP 备份文件并下载",
	"overview.quick.importTitle": "从备份文件恢复或迁移到本机",
	"overview.quick.syncTitle": "跨设备保持配置一致（Git / WebDAV）",
	"overview.quick.backupTitle": "全量快照，随时可回滚",
	"overview.nav.activity": "活动",
	"overview.nav.about": "关于"
};
const en$4 = {
	"section.label": "Backup & Migration",
	"section.description": "Export / import / migrate DSH configuration (backups exclude secrets; encrypted backups optional)",
	"view.transfer": "Export & Import",
	"view.export": "Export",
	"view.import": "Import",
	"view.overview": "Overview",
	"view.snapshots": "Backup & Snapshots",
	"view.sync": "Remote Sync",
	"view.market": "Marketplace",
	"view.about": "About",
	"view.more": "More",
	"view.profiles": "Profiles",
	"common.close": "Close",
	"common.cancel": "Cancel",
	"common.back": "Back",
	"common.next": "Next",
	"common.done": "Done",
	"common.retry": "Retry",
	"common.confirm": "Confirm",
	"common.loading": "Loading…",
	"common.unknownError": "Unknown error",
	"toast.copied": "Copied to clipboard",
	"toast.copyFailed": "Copy failed — select the text and copy manually",
	"toast.refreshed": "Refreshed",
	"overview.subtitle": "Config health and quick actions at a glance (read-only data from each feature page)",
	"overview.refresh": "Refresh",
	"overview.loading": "Loading overview…",
	"overview.health.ok": "Configuration looks healthy",
	"overview.health.noBackup": "No backups yet — create a backup or snapshot first",
	"overview.health.scheduleFailed": "The last scheduled backup failed — check backup settings",
	"overview.health.recovery": "Unresolved recovery items need attention",
	"overview.health.recoveryAction": "Go to Incident recovery",
	"overview.metric.backups": "Backup files",
	"overview.metric.snapshots": "Safety snapshots",
	"overview.metric.schedule": "Scheduled backup",
	"overview.metric.sync": "Remote sync",
	"overview.state.on": "On",
	"overview.state.off": "Off",
	"overview.meta.lastBackup": "Last: {time}",
	"overview.meta.noBackup": "No records yet",
	"overview.meta.scheduleOn": "Enabled · last run {time}",
	"overview.meta.scheduleOff": "Disabled (enable for automatic protection)",
	"overview.meta.scheduleFail": "Last backup failed",
	"overview.meta.syncOn": "Configured · last sync {time}",
	"overview.meta.syncOff": "Not configured",
	"overview.meta.never": "Never run",
	"overview.time.now": "just now",
	"overview.time.min": "{n} min ago",
	"overview.time.hour": "{n} hr ago",
	"overview.time.day": "{n} d ago",
	"overview.quick.title": "Quick actions",
	"overview.quick.backup": "Back up now",
	"overview.quick.backupHint": "Full snapshot (no secrets), restorable anytime",
	"overview.quick.backupDone": "Backup finished",
	"overview.quick.backupFailed": "Backup failed",
	"overview.quick.export": "Export backup",
	"overview.quick.exportHint": "Create a portable ZIP backup file",
	"overview.quick.import": "Import / restore",
	"overview.quick.importHint": "Restore from a backup file onto this machine",
	"overview.quick.sync": "Remote sync",
	"overview.quick.syncHint": "Keep configs consistent across devices (Git / WebDAV)",
	"overview.activity.title": "Recent activity",
	"overview.activity.empty": "No activity yet (backups / imports / syncs will appear here)",
	"overview.suggest.title": "Suggestions",
	"overview.suggest.schedule": "Enable scheduled backup to protect your configuration automatically",
	"overview.suggest.sync": "Set up remote sync for painless cross-device recovery",
	"overview.empty.title": "Start protecting your configuration",
	"overview.empty.body": "Once you create your first backup or snapshot, config health and recent activity will appear here.",
	"overview.running": "{count} task(s) running",
	"overview.kind.import": "Import",
	"overview.kind.restore": "Restore",
	"overview.kind.rollback": "Rollback",
	"overview.kind.profile-switch": "Profile switch",
	"overview.kind.profile-delete": "Profile delete",
	"overview.kind.profile-rename": "Profile rename",
	"overview.kind.profile-save": "Profile save",
	"overview.kind.profile-import": "Profile import",
	"overview.kind.sync-apply": "Sync apply",
	"overview.kind.autosync": "Auto sync",
	"overview.kind.recovery": "Recovery",
	"overview.kind.backup": "Backup",
	"overview.kind.snapshot-delete": "Snapshot delete",
	"overview.kind.snapshot-prune": "Snapshot prune",
	"overview.kind.other": "Other operation",
	"status.ready": "Config Manager ready (plugin {version} · DSH {dsh} · {platform})",
	"status.unavailable": "Config Manager service unavailable — verify the plugin is mounted.",
	"export.mode.quick": "Quick Export",
	"export.mode.quickHint": "One-click export of recommended sections (portable, no device-specific data) for routine backups.",
	"export.mode.custom": "Custom Export",
	"export.mode.customHint": "Select sections per group.",
	"export.security": "Security options",
	"export.encrypt": "Encrypt backup",
	"export.encryptHint": "Encrypt the entire backup file with a password (AES-256-GCM). The password is used once and never written into the backup or any config file; it is required to unlock the backup on import.",
	"export.password": "Backup encryption password",
	"export.passwordConfirm": "Confirm password",
	"export.passwordMismatch": "Passwords do not match",
	"export.passwordRequired": "An encryption password is required when encrypting the backup",
	"export.includeSecrets": "Export secrets",
	"export.includeSecretsHint": "Write the real secrets (credential values) into the backup. Secrets must be stored encrypted: checking this also checks “Encrypt backup”; unchecking “Encrypt backup” unchecks this.",
	"export.run": "Start Export",
	"export.preview": "Preview export contents",
	"export.previewing": "Counting…",
	"export.previewSummary": "Will package {sections} section(s), approx. {size} (no secrets)",
	"export.previewSkipped": "{count} section(s) failed to export and were skipped",
	"export.running": "Exporting…",
	"export.download": "Download backup file",
	"export.saved": "Saved to downloads: {name}",
	"export.selectionWarnings": "Device-specific sections may not apply on another machine:",
	"export.group.unknown": "Other",
	"export.included": "Included",
	"export.excluded": "Excluded",
	"export.naming": "File name & note (optional)",
	"export.fileName": "Custom file name",
	"export.fileNameHint": "Leave empty to auto-name (dsh-config-<date>.zip); no need to type .zip — it is appended automatically. Letters, digits, spaces, - _ . only.",
	"export.fileNameInvalid": "Invalid file name: letters, digits, spaces, - _ . only, no path separators.",
	"export.note": "Note",
	"export.notePlaceholder": "e.g. Full backup before migration / 2026-08 archive",
	"export.noteHint": "The note is shown in the local backup list (and travels with the config backup) so you can tell exports apart.",
	"import.stage.select": "Select",
	"import.stage.analyze": "Analyze",
	"import.stage.decide": "Preview & decide",
	"import.stage.confirm": "Confirm",
	"import.stage.execute": "Execute",
	"import.stage.done": "Done",
	"import.stepper.label": "Step {current} of {total}: {label}",
	"import.select.title": "Select Backup File",
	"import.select.hint": "Pick a dsh-config-*.zip backup exported from DSH to begin. Analysis is read-only and changes nothing.",
	"import.select.browse": "Choose ZIP file",
	"import.select.reselect": "Reselect",
	"import.select.cancel": "Cancel selection",
	"import.select.file": "Selected: {name}",
	"import.analyzing": "Analyzing backup…",
	"import.compatibility.title": "Compatibility",
	"import.compatibility.score": "Compatibility score: {score}",
	"import.compatibility.ok": "The backup can be imported",
	"import.compatibility.fail": "Backup analysis failed: {reason}",
	"import.preview.title": "Import Preview",
	"import.preview.willChange": "{count} item(s) will change",
	"import.preview.unchanged": "{count} item(s) already identical (skipped)",
	"import.preview.settings": "{count} settings update(s)",
	"import.preview.plugins": "{count} plugin(s) to install",
	"import.preview.mcp": "{count} MCP server(s) added",
	"import.preview.prompts": "{count} prompt(s)",
	"import.preview.paths": "{count} path mapping(s) needed",
	"import.preview.secrets": "{count} secret(s) to re-enter",
	"import.preview.conflicts": "{count} conflict(s)",
	"import.preview.restart": "A DSH restart is required after import",
	"import.confirm.execute": "Confirm Import",
	"import.confirm.warning": "Import modifies the current DSH configuration; a safety snapshot is created first and everything rolls back on failure.",
	"import.confirm.encrypted": "The backup password will decrypt and restore {count} credential(s).",
	"import.rollbackOnError": "Roll back everything on failure (recommended)",
	"import.importing": "Importing… (installing many plugins may take a few minutes; keep this page open)",
	"import.log.title": "Import Log",
	"import.log.empty": "Waiting for command output…",
	"import.log.newOutput": "↓ New output",
	"import.skipCurrent": "Skip current plugin",
	"import.skipPending": "Skipping… the rest of the import continues",
	"import.retrySkipped": "Retry failed/skipped items ({count})",
	"import.secrets.title": "Re-enter Secrets",
	"import.secrets.hint": "These credentials were not exported with the backup (security by design). Enter them manually to use them here; leave blank to skip.",
	"import.secrets.optional": "(optional)",
	"import.secrets.required": "(required)",
	"import.decrypt.badge": "encrypted backup",
	"import.decryptArchive.title": "Unlock Encrypted Backup",
	"import.decryptArchive.hint": "This backup is fully encrypted (the whole file is password-protected). Enter the password set at export time to decrypt and continue — encrypted credentials inside are restored with the same password, so this is the only password prompt. It is used once and never written to disk.",
	"import.decryptArchive.passwordPlaceholder": "Enter backup encryption password",
	"import.decryptArchive.unlock": "Unlock & Continue",
	"import.decryptArchive.unlocking": "Unlocking…",
	"import.decrypt.previewHint": "Encrypted backup: credentials are restored automatically by the unlock password — no further password prompt.",
	"import.conflicts.title": "Resolve Conflicts",
	"import.conflicts.hint": "These items already exist on this machine and differ from the backup. Decide per item.",
	"import.conflicts.keepCurrent": "Keep current",
	"import.conflicts.useImported": "Use backup",
	"import.conflicts.review": "Decide later",
	"import.conflicts.unresolved": "{count} item(s) unresolved",
	"import.conflicts.keepCurrentAll": "Keep all current",
	"import.conflicts.useImportedAll": "Use all backup",
	"import.paths.title": "Path Mapping",
	"import.paths.hint": "Absolute paths in the backup may not exist on this machine. Map each path to a new location (leave blank to skip).",
	"import.paths.old": "Original path",
	"import.paths.new": "New path",
	"import.paths.unresolved": "{count} path(s) unmapped",
	"snapshots.title": "Backup & Snapshots",
	"snapshots.hint": "Export backups = portable ZIPs (download / one-click import / delete, incl. scheduled full backups). Snapshot restore = back to the pre-import state: whole-file restore of settings/patch, uninstall plugins added during import, compensate modified files; current files are backed up to a safe location first.",
	"snapshots.subTab.restore": "Snapshots",
	"snapshots.subTab.files": "Backup Files",
	"snapshots.subTab.schedule": "Schedule",
	"snapshots.subTab.recovery": "Incident Recovery",
	"snapshots.empty.title": "No snapshots yet",
	"snapshots.empty.body": "Snapshots are created automatically before import / restore for one-click rollback. You can also create one now.",
	"snapshots.empty.viewFiles": "View backup files",
	"snapshots.empty.runBackup": "Back up now",
	"backupFiles.noteUnreadable": "(note unreadable)",
	"snapshots.empty": "No snapshots yet. A safety snapshot is created automatically on import.",
	"snapshots.loading": "Loading snapshots…",
	"snapshots.selectHint": "Select a snapshot to preview its restore plan (read-only preview, changes nothing):",
	"snapshots.createdAt": "Created",
	"snapshots.sourceZip": "Source",
	"snapshots.status": "Status",
	"snapshots.entries": "Entries",
	"snapshots.plugins": "Plugins",
	"snapshots.actions": "Actions",
	"snapshots.retentionHint": "Up to {count} snapshots are kept automatically (oldest pruned); pinned snapshots are exempt from auto-pruning and can only be deleted manually.",
	"snapshots.pin": "Pin",
	"snapshots.unpin": "Unpin",
	"snapshots.delete": "Delete",
	"snapshots.deleted": "Snapshot deleted",
	"snapshots.deleteConfirmTitle": "Delete Snapshot",
	"snapshots.deleteConfirm": "Delete the snapshot created at {time}? This pre-import rollback point will be permanently removed and cannot be recovered.",
	"snapshots.status.pending": "Pending",
	"snapshots.status.done": "Done",
	"snapshots.status.rolled-back": "Rolled back",
	"snapshots.status.unknown": "Unknown",
	"snapshots.planTitle": "Restore Plan Preview",
	"snapshots.viewPlan": "View restore plan",
	"snapshots.noActions": "No restorable actions for this snapshot (or all skipped).",
	"snapshots.execute": "Restore now",
	"snapshots.executing": "Restoring…",
	"snapshots.confirmTitle": "Confirm restore",
	"snapshots.confirmRestore": "Confirm restore? Current files are first backed up to a safe location, then plugins added during the import are removed.",
	"snapshots.reportTitle": "Restore Report",
	"snapshots.restored": "Restored",
	"snapshots.removedPlugins": "Removed plugins",
	"snapshots.manualHints": "Manual action needed",
	"snapshots.failed": "Failed",
	"snapshots.skipped": "Skipped",
	"snapshots.kind.hostFileRestore": "Restore whole file",
	"snapshots.kind.hostFileRemove": "Remove whole file",
	"snapshots.kind.pluginRemove": "Uninstall plugin",
	"snapshots.kind.fileRestore": "Restore file",
	"snapshots.kind.fileRemove": "Remove file",
	"snapshots.kind.credentialHint": "Manual hint",
	"snapshots.kind.skip": "Skip",
	"snapshots.kind.unknown": "Unknown",
	"snapshots.summary": "{hostFileRestores} whole-file restore · {hostFileRemoves} whole-file remove · {pluginRemoves} plugin uninstall · {fileRestores} file restore · {fileRemoves} file remove · {credentialHints} credential hints · {skips} skip",
	"backupSchedule.title": "Scheduled Full Backups",
	"backupSchedule.hint": "Automatically export a full backup ZIP in the background on a fixed cadence (secrets are never included, never encrypted — use manual export for encryption). Config lives in sync/backup-schedule.json and migrates with the self section.",
	"backupSchedule.enabled": "Enable scheduled backups",
	"backupSchedule.enabledHint": "When on, DSH backs up automatically on the cadence below; one run fires on every startup (skipped if less than 1h since the last run).",
	"backupSchedule.interval": "Backup interval",
	"backupSchedule.interval.6h": "Every 6 hours",
	"backupSchedule.interval.12h": "Every 12 hours",
	"backupSchedule.interval.24h": "Every 24 hours",
	"backupSchedule.interval.7d": "Every 7 days",
	"backupSchedule.interval.custom": "Custom (weekly at a fixed time)",
	"backupSchedule.customHint": "Runs a full backup once a week at the selected weekday and time (missed triggers are not backfilled)",
	"backupSchedule.weekday.sunday": "Sunday",
	"backupSchedule.weekday.monday": "Monday",
	"backupSchedule.weekday.tuesday": "Tuesday",
	"backupSchedule.weekday.wednesday": "Wednesday",
	"backupSchedule.weekday.thursday": "Thursday",
	"backupSchedule.weekday.friday": "Friday",
	"backupSchedule.weekday.saturday": "Saturday",
	"backupSchedule.save": "Save settings",
	"backupSchedule.saved": "Settings saved",
	"backupSchedule.runNow": "Back up now",
	"backupSchedule.running": "Backing up…",
	"backupSchedule.lastRun": "Last run",
	"backupSchedule.never": "Never run",
	"backupSchedule.status.success": "Success",
	"backupSchedule.status.skipped": "Skipped",
	"backupSchedule.status.failed": "Failed",
	"backupSchedule.consecutiveFailures": "Scheduled backups failed {count} time(s) in a row — check the configuration (disk space / permissions / section export errors)",
	"backupSchedule.loading": "Loading scheduled backup settings…",
	"backupSchedule.error": "Failed to load scheduled backup settings",
	"retention.title": "Retention policy",
	"retention.hint": "Controls how many copies auto-cleanup keeps (shared by snapshots and scheduled backups). Pinned snapshots and unsettled recovery points are always exempt.",
	"retention.keepLast": "Keep last",
	"retention.keepLastHint": "Keep the newest N by time; 0 disables the \"recent\" tier",
	"retention.keepMonthly": "Keep monthly",
	"retention.keepMonthlyHint": "Additionally keep the newest copy of each month, for at most N months; 0 disables",
	"retention.keepYearly": "Keep yearly",
	"retention.keepYearlyHint": "Additionally keep the newest copy of each year, for at most N years; 0 disables",
	"retention.unit": "copies",
	"retention.months": "months",
	"retention.years": "years",
	"retention.tiersOff": "No tiers enabled (equivalent to \"keep only the newest N\")",
	"retention.summary": "Last {keepLast} · monthly {keepMonthly} · yearly {keepYearly}",
	"retention.invalid": "Invalid retention values — each field must be an integer within the allowed range",
	"retention.appliesTo": "Applies to: pre-import snapshots + scheduled backup artifacts",
	"backupFiles.title": "Backup Files",
	"backupFiles.name": "File",
	"backupFiles.source": "Source",
	"backupFiles.size": "Size",
	"backupFiles.time": "Modified",
	"backupFiles.hint": "All export artifacts (manual exports and scheduled backups) are managed here: download to your machine, import to restore, or delete. Scheduled backups auto-keep the latest 10.",
	"backupFiles.empty": "No backup files yet. They appear here after a manual export or once scheduled backups are enabled.",
	"backupFiles.loading": "Loading backup files…",
	"backupFiles.error": "Failed to load backup files",
	"backupFiles.source.auto": "Scheduled",
	"backupFiles.source.manual": "Manual",
	"backupFiles.download": "Download",
	"backupFiles.import": "Import",
	"backupFiles.delete": "Delete",
	"backupFiles.deleteConfirmTitle": "Delete backup file",
	"backupFiles.deleteConfirm": "Delete backup file \"{name}\"? This cannot be undone.",
	"backupFiles.deleted": "Deleted backup file “{name}”",
	"backupFiles.searchPlaceholder": "Search by file name or note…",
	"backupFiles.searchEmpty": "No matching backup files",
	"backupFiles.inspect": "Inspect / Compare",
	"backupFiles.inspectLoading": "Analyzing backup contents…",
	"backupFiles.inspectEmpty": "This backup could not be analyzed (corrupt or unsupported format)",
	"backupFiles.inspectSections": "Sections included",
	"backupFiles.inspectDiff": "Diff against this backup (read-only preview)",
	"backupFiles.inspectItems": "Change details",
	"backupFiles.inspectGroup.conflicts": "Conflicts (need decision)",
	"backupFiles.inspectGroup.changes": "Changes (will apply)",
	"backupFiles.inspectGroup.paths": "Path mappings (need handling)",
	"backupFiles.inspectGroup.skipped": "Identical (nothing to do)",
	"backupFiles.inspectGroup.others": "Others",
	"report.export.title": "Export Complete",
	"report.import.title": "Import Result",
	"report.rollback.title": "Rollback Report",
	"report.action.fixIssues": "View failures",
	"report.action.viewDetails": "View details",
	"report.action.done": "Done",
	"report.needsRestart": "Plugin / MCP changes take effect after restarting DSH.",
	"error.title": "Operation failed",
	"error.hint": "Error messages are auto-redacted and never leak secrets.",
	"starPrompt.title": "Enjoying Config Manager?",
	"starPrompt.body": "If you find this plugin useful, please give it a ⭐ on GitHub — your support keeps it maintained!",
	"starPrompt.star": "Star on GitHub",
	"starPrompt.dismiss": "Don't ask again",
	"about.title": "About DSH Config Manager",
	"about.subtitle": "Plugin info, author and feedback links",
	"about.official": "Official",
	"about.version": "Version {version}",
	"about.dshVersion": "DSH {version}",
	"about.links": "Links",
	"about.star": "⭐ Star on GitHub",
	"about.repo": "GitHub Repository",
	"about.docs": "Documentation",
	"about.issues": "Issues",
	"about.authorLabel": "Author",
	"about.loading": "Loading version info…",
	"about.retryStatus": "Retry",
	"about.releaseNotes": "Release Notes",
	"about.diag.label": "Plugin list source",
	"about.diag.profileDir": "Directory: {path}",
	"about.diag.profile": "profile: {profile}",
	"about.diag.pluginCount": "Plugins detected: {count}",
	"about.diag.manifestUnreadable": "No readable package.json in that directory — the plugin list will be empty. Check whether the DSH profile and DSH_HOME match this path.",
	"about.diag.bundles": "bundles: {bundles}",
	"about.diag.hint": "If this does not match your setup, check the DSH --profile argument and the DSH_HOME environment variable.",
	"about.releaseNotes.title": "Release Notes",
	"about.releaseNotes.loading": "Loading release notes…",
	"about.releaseNotes.loadingMore": "Loading more releases…",
	"about.releaseNotes.empty": "No releases found.",
	"about.releaseNotes.error": "Failed to load release notes. Please check your network connection or try again later.",
	"about.releaseNotes.retry": "Retry",
	"about.releaseNotes.viewOnGithub": "View all releases on GitHub",
	"about.releaseNotes.viewSingleOnGithub": "View on GitHub",
	"about.releaseNotes.allLoaded": "All releases loaded",
	"about.releaseNotes.prerelease": "Pre-release",
	"about.releaseNotes.latest": "Latest",
	"about.releaseNotes.noBody": "No description provided for this release.",
	"about.releaseNotes.confirm": "Confirm",
	"about.releaseNotes.neverShow": "Don't show again",
	"about.cli.title": "CLI Rescue Tool",
	"about.cli.hint": "The GUI lives inside DSH — when DSH cannot start, the separately installed CLI (dsh-config-manager) is your first rescue tool: list snapshots / offline restore / one-click DSH reinstall, no DSH runtime needed. Install once and use it on any machine:",
	"about.cli.docs": "CLI documentation",
	"profiles.title": "Profiles",
	"profiles.subtitle": "Save your current DSH configuration as a switchable profile (Work / Personal / …); switching includes preview + auto snapshot + rollback on failure.",
	"profiles.save.title": "Save current config as a profile",
	"profiles.save.hint": "Pick a name and save: contents reuse the export pipeline (no secrets), file sections (skills / presets) are embedded too.",
	"profiles.save.placeholder": "e.g. Work / Personal / Minimal",
	"profiles.save.action": "Save profile",
	"profiles.save.saving": "Saving…",
	"profiles.save.done": "Saved profile “{name}”",
	"profiles.nameInvalid": "Invalid profile name: letters, digits and common characters only; no path separators (/ \\) or \"..\"",
	"profiles.name": "Name",
	"profiles.sections": "Sections",
	"profiles.updatedAt": "Updated",
	"profiles.loading": "Loading profiles…",
	"profiles.empty": "No profiles yet. Save the current configuration to get started.",
	"profiles.switch": "Switch",
	"profiles.previewHint": "Click to preview the switch (read-only)",
	"profiles.rename": "Rename",
	"profiles.delete": "Delete",
	"profiles.renameTitle": "Rename profile",
	"profiles.renameMessage": "Rename profile \"{name}\" to:",
	"profiles.deleteTitle": "Delete profile",
	"profiles.deleteMessage": "Delete profile \"{name}\"? This group of configuration snapshots will be permanently removed.",
	"profiles.delete.done": "Deleted profile “{name}”",
	"profiles.import.title": "Import profile",
	"profiles.import.hint": "Import an exported profile.json (from this or another machine; file sections are embedded).",
	"profiles.import.choose": "Choose JSON file",
	"profiles.import.done": "Imported profile “{name}”",
	"profiles.switchPreviewTitle": "Switch preview: {name}",
	"profiles.previewing": "Analyzing switch plan…",
	"profiles.previewSummary": "Switch impact",
	"profiles.previewWillChange": "{count} item(s) will change",
	"profiles.previewUnchanged": "{count} identical",
	"profiles.previewConflicts": "{count} conflict(s)",
	"profiles.previewSecrets": "{count} secret(s) to re-enter",
	"profiles.previewRestart": "DSH restart required",
	"profiles.previewNote": "Read-only preview above (zero writes). After confirmation a snapshot is created automatically and everything rolls back on failure.",
	"profiles.previewSections": "Sections in this profile",
	"profiles.previewItems": "Change details",
	"profiles.switchConfirm": "Confirm switch",
	"profiles.switching": "Switching… (auto snapshot + staged apply)",
	"profiles.switchDone": "Switch complete: {count} item(s) applied",
	"profiles.switchFailed": "Switch failed (some items not applied)",
	"profiles.switchRolledBack": "Switch failed — fully rolled back",
	"import.compatibility.sections": "{count} section(s)",
	"import.compatibility.plugins": "installed {installed} · to install {toInstall}",
	"import.compatibility.paths": "{count} path issue(s)",
	"import.compatibility.secrets": "{count} secret(s) to re-enter",
	"import.compatibility.score.excellent": "Excellent",
	"import.compatibility.score.good": "Good",
	"import.compatibility.score.partial": "Partial",
	"import.compatibility.score.unsupported": "Unsupported",
	"import.compatibility.sectionsTitle": "Sections in this backup",
	"sync.status.lastSync": "Last sync",
	"sync.status.sections": "Syncable sections",
	"nextSteps.title": "Next steps",
	"nextSteps.done": "All done — nothing else to handle",
	"nextSteps.restart.title": "Restart DSH to apply ({count})",
	"nextSteps.restart.hint": "These changes only take effect after restarting DSH:",
	"nextSteps.secrets.title": "Re-enter credentials ({count})",
	"nextSteps.secrets.hint": "These credentials were not exported with the backup; re-enter them on this machine:",
	"nextSteps.unresolved.title": "Failed / skipped ({count})",
	"nextSteps.unresolved.hint": "These items were not applied; you can retry them from the result page:",
	"nav.overview": "Overview",
	"nav.backups": "Backups",
	"nav.export": "Export",
	"nav.import": "Import",
	"nav.sync": "Sync",
	"nav.market": "Market",
	"nav.profiles": "Profiles",
	"nav.activity": "Activity",
	"nav.recovery": "Recovery",
	"lifecycle.autoOn": "Auto snapshots on",
	"lifecycle.autoOff": "Auto snapshots off",
	"lifecycle.lastAuto": "Last auto snapshot",
	"lifecycle.never": "never",
	"lifecycle.undo": "Undo",
	"lifecycle.redo": "Redo",
	"lifecycle.undoTitle": "Undo the last config change (revert to the newest snapshot with different content)",
	"lifecycle.redoTitle": "Redo the last undo (only when nothing changed since)",
	"lifecycle.undoConfirm": "Undo reverts the configuration to the previous different state. The current state is saved first, so you can redo. Continue?",
	"lifecycle.undoOk": "Reverted to {id}",
	"lifecycle.redoOk": "Restored to {id}",
	"lifecycle.undoNone": "Nothing to undo",
	"lifecycle.redoNone": "Nothing to redo",
	"lifecycle.snapshotNow": "Snapshot now",
	"lifecycle.snapshotReason": "Snapshot reason (optional)",
	"lifecycle.snapshotCreated": "Created snapshot {id}",
	"lifecycle.snapshots": "Config state snapshots",
	"lifecycle.empty": "No config state snapshots yet. With auto snapshots on, changes are archived automatically.",
	"lifecycle.kind.auto": "auto",
	"lifecycle.kind.manual": "manual",
	"lifecycle.kind.undo": "undo",
	"lifecycle.kind.baseline": "baseline",
	"lifecycle.kind.pre-restore": "pre-undo",
	"lifecycle.sections": "{count} section(s)",
	"lifecycle.delete": "Delete",
	"lifecycle.deleteConfirm": "Delete snapshot {id}? It can no longer be used to roll back.",
	"lifecycle.crash.title": "The previous start did not finish",
	"lifecycle.crash.lastGood": "Last known good: {time}",
	"lifecycle.crash.restoreLastGood": "Revert to last known good",
	"lifecycle.crash.reason.session-corrupt": "Session file corrupted",
	"lifecycle.crash.reason.bundle-check": "Plugin bundle cannot be resolved",
	"lifecycle.crash.reason.patch-tree": "Plugin failed to load (mount tree conflict)",
	"lifecycle.crash.reason.unknown": "Cause unknown",
	"lifecycle.crash.advice.restore-last-good": "Reverting to the last known good state is recommended.",
	"lifecycle.crash.advice.repair-session": "Repair the corrupted session files first.",
	"lifecycle.crash.advice.check-bundles": "Enter rescue mode, or inspect dsh.profile.bundles in package.json.",
	"lifecycle.crash.advice.check-patch-tree": "Enter rescue mode to disable plugins, then bisect.",
	"lifecycle.rescue.title": "Rescue mode",
	"lifecycle.rescue.desc": "When DSH will not boot because of plugins, this narrows plugin mounting to \"DSH core + this plugin\": it rewrites both cordis.patch.yml layers and moves every other user plugin out of dsh.profile.bundles. No package is uninstalled, and exiting restores everything from backup.",
	"lifecycle.rescue.active": "Rescue mode is ON ({time}) — restart DSH to apply.",
	"lifecycle.rescue.enter": "Enter rescue mode",
	"lifecycle.rescue.exit": "Exit rescue mode",
	"lifecycle.rescue.restartHint": "DSH must be restarted for this to take effect.",
	"lifecycle.rescue.confirm": "Rescue mode rewrites the profile cordis.patch.yml, empties the home cordis.patch.yml, and narrows dsh.profile.bundles to DSH core plus this plugin (other user plugins are not mounted on the next start; their packages are NOT deleted). Exiting restores all of it byte-for-byte from backup. Restart DSH afterwards. Continue?",
	"lifecycle.rescue.exitConfirm": "Exiting rescue mode restores cordis.patch.yml and package.json from backups, bringing back the previous plugin set. DSH should be restarted afterwards. Continue?",
	"lifecycle.rescue.on": "Rescue mode enabled",
	"lifecycle.rescue.off": "Rescue mode disabled",
	"lifecycle.rescue.inactive": "Rescue mode off",
	"lifecycle.rescue.stale": "Rescue flag stale (moved machine or rebuilt home)",
	"lifecycle.guided.title": "Need a more guided recovery?",
	"lifecycle.guided.desc": "This page is one-click rollback (undo/redo). If DSH cannot recover because of an interrupted transaction or a crash, use the recovery wizard on the Backups page: it previews the impact first and verifies the result afterwards.",
	"lifecycle.guided.action": "Open recovery wizard",
	"nav.about": "About",
	"nav.refresh": "Refresh",
	"shell.status.idle": "Idle",
	"shell.status.running": "{count} task(s) running",
	"shell.status.recovery": "Recovery pending",
	"shell.version": "Plugin {plugin} · DSH {dsh}",
	"shell.drawer.title": "Activity & About",
	"overview.result.success": "OK",
	"overview.result.failed": "Failed",
	"overview.result.skipped": "Skipped",
	"overview.activity.viewAll": "View all",
	"overview.activity.copy": "Copy",
	"overview.activity.redacted": "(filename redacted)",
	"overview.location.title": "Backup location",
	"overview.location.dir": "Backup directory",
	"overview.location.totalSize": "Total size",
	"overview.location.retention": "Snapshots",
	"overview.location.retentionValue": "{used} / {limit}",
	"overview.location.schedule": "Schedule",
	"overview.location.scheduleOn": "{interval} · last {time}",
	"overview.location.scheduleOff": "Off",
	"overview.location.nextRun": "Next run",
	"overview.location.lastRun": "Last run",
	"overview.sections.title": "Section composition",
	"overview.sections.hint": "Estimated from current config (read-only preview, zero writes)",
	"overview.sections.total": "Total",
	"overview.sections.entries": "{count} item(s)",
	"overview.quick.exportTitle": "Generate a portable ZIP backup and download it",
	"overview.quick.importTitle": "Restore from a backup file or migrate to this machine",
	"overview.quick.syncTitle": "Keep configs consistent across devices (Git / WebDAV)",
	"overview.quick.backupTitle": "Full snapshot, rollback anytime",
	"overview.nav.activity": "Activity",
	"overview.nav.about": "About"
};
//#endregion
//#region src/client/sync/sync-locales.ts
/**
* 远程同步设置区块（config-manager-sync）表面文案：zh 为源语言，en 镜像每个键。
* 独立命名空间、独立文件：不触碰共享的 locales.ts（并行会话已改），零冲突。
* 键集合经 `SyncKey` 类型在 client/index.ts 注册处做编译期校验。
*/
const zh$3 = {
	"section.label": "远程同步",
	"section.description": "通过 Git 私有仓库在设备间同步可移植配置（密钥永不参与同步）",
	"privateRepoHint": "安全要求：同步仓库必须为私有仓库（public 仓库会公开你的配置内容）。认证 token 仅用于仓库访问，绝不写入同步文件、提交内容或日志。",
	"config.title": "仓库配置",
	"config.repoUrl": "仓库地址",
	"config.repoUrlHint": "Git 私有仓库地址（https / ssh / 本地路径）。认证 token 请使用下方凭据字段，不要拼入地址。",
	"config.token": "认证 token",
	"config.tokenHint": "将安全写入 DSH credentials（引用名 {ref}），不会写入同步文件或日志。留空表示沿用已保存的凭据。",
	"config.tokenSaved": "凭据已配置",
	"config.tokenPlaceholder": "ghp_…（可选）",
	"config.save": "保存配置",
	"config.saving": "保存中…",
	"config.saveHint": "表单改动会自动保存（密码/token 安全写入 DSH credentials，不会写入同步文件或日志）；也可点击按钮立即保存。",
	"channel.title": "同步通道",
	"channel.git": "Git 私有仓库",
	"channel.webdav": "WebDAV 服务器",
	"channel.perChannelHint": "GitHub 与 WebDAV 通道的自动同步、同步模式、加密与远端快照各自独立配置。",
	"channel.open": "配置同步通道",
	"channel.openHint": "远程同步通过「同步通道」进行：Git 私有仓库或 WebDAV 服务器。点击按钮在弹窗中配置或修改。",
	"channel.configured": "已配置",
	"channel.notConfigured": "未配置",
	"channel.currentUrl": "当前地址",
	"syncStatus.lastSync": "上次同步",
	"syncStatus.sections": "可同步分区",
	"syncStatus.state": "配置状态",
	"webdav.title": "WebDAV 配置",
	"webdav.url": "服务器地址",
	"webdav.urlHint": "WebDAV 服务器根地址（https://…）。同步快照与索引存放于该地址的 dsh-config-manager/ 子目录下。请勿在地址中包含用户名/密码。",
	"webdav.username": "用户名",
	"webdav.usernameHint": "HTTP Basic 认证用户名（非敏感，可回显）。",
	"webdav.password": "密码",
	"webdav.passwordHint": "将安全写入 DSH credentials（引用名 {ref}），不会写入同步文件或日志。留空表示沿用已保存的凭据。",
	"webdav.passwordSaved": "凭据已配置",
	"webdav.passwordPlaceholder": "密码（可选）",
	"webdav.presetHint": "选择常见 WebDAV 服务器可快速填入地址；含 <占位符> 的模板请替换为你的真实服务器/用户名。",
	"github.title": "GitHub 登录",
	"github.description": "通过 GitHub OAuth 设备码流程授权：无需手动输入 token，在浏览器中确认授权后，token 自动写入 DSH credentials。",
	"github.login": "使用 GitHub 登录",
	"github.retry": "重新登录",
	"github.cancel": "取消",
	"github.tokenInvalid": "GitHub 登录已失效，请重新登录。",
	"github.userCode": "一次性授权代码",
	"github.openAuth": "打开 GitHub 授权页面",
	"github.clientIdHint": "需要插件配置 githubClientId（GitHub OAuth App 的 client_id）才能使用 GitHub 登录。",
	"status.title": "同步状态",
	"status.never": "从未同步",
	"action.push": "推送到远端",
	"action.pull": "拉取差异预览",
	"action.pushing": "正在推送…",
	"action.pulling": "正在拉取…",
	"push.title": "推送结果",
	"pull.title": "拉取差异预览",
	"pull.previewHint": "以上为只读差异预览，不会执行导入。当前版本暂不支持一键导入；如需应用远端配置，请使用「导入恢复」向导手动导入导出的备份。",
	"pull.needsReview": "包含需要人工决策的项（冲突 / 密钥 / 依赖 / 安装）",
	"pull.empty": "远端快照与本地一致（无变更）",
	"change.total": "共 {total} 项变更",
	"sections.title": "同步分区",
	"warnings.title": "分区告警",
	"syncflow.title": "一键同步",
	"syncflow.button": "一键同步",
	"syncflow.syncing": "正在同步…",
	"syncflow.syncFailed": "同步失败",
	"syncflow.snapshotOption": "（{date} · {count} 分区）",
	"syncflow.selectSnapshot": "选择历史快照",
	"syncflow.refreshSnapshots": "刷新快照列表",
	"syncflow.refreshingSnapshots": "正在获取…",
	"syncflow.latestSnapshot": "最新快照",
	"syncflow.noSnapshots": "远端暂无快照",
	"syncflow.confirmImport": "确认导入",
	"syncflow.cancel": "取消",
	"syncflow.adoptRemote": "采用远端",
	"syncflow.adoptHint": "勾选 = 导入该项；取消 = 跳过",
	"syncflow.needsReviewBadge": "需人工决策",
	"syncflow.empty": "远端快照与本地一致（无变更）",
	"syncflow.diffCount": "共 {count} 项差异",
	"syncflow.keepLocalAll": "全部保留当前配置",
	"syncflow.useRemoteAll": "全部使用备份配置",
	"syncflow.bulkHint": "批量决策仅作用于冲突项；其余差异默认自动采用。",
	"syncflow.conflictTitle": "冲突解决",
	"syncflow.conflictUseLocal": "保留当前",
	"syncflow.conflictUseRemote": "使用备份",
	"syncflow.conflictLocalLabel": "当前",
	"syncflow.conflictRemoteLabel": "备份",
	"syncflow.conflictAncestorLabel": "共同祖先",
	"syncflow.conflictUnresolved": "冲突项 {itemId} 尚未选择解决方式（保留当前 / 使用备份）",
	"syncflow.diff": "差异",
	"syncflow.importDone": "已导入 {n} 个分区",
	"syncflow.importFailed": "导入失败（已整体回滚）",
	"syncflow.importedSections": "已写入",
	"syncflow.importWarnings": "导入告警",
	"syncflow.rollback": "回滚到应用前",
	"syncflow.rollingBack": "正在回滚…",
	"syncflow.rollbackDone": "已回滚到应用前",
	"syncflow.needsRestart": "部分改动需要重启 DSH 后生效",
	"syncflow.pushPreviewTitle": "确认推送",
	"syncflow.pushPreviewSections": "将推送的分区",
	"syncflow.pushConfirm": "确认推送",
	"syncflow.pushing": "正在推送…",
	"syncflow.pushFirstBaseline": "远端暂无快照：本次将创建首个同步基线",
	"mode.title": "同步模式",
	"mode.hint": "选择推送时导出哪些分区：默认 = 推荐分区一键推送（快速导出）；高级 = 自定义勾选（自定义导出）。",
	"mode.default": "默认（快速导出）",
	"mode.defaultHint": "一键推送全部推荐分区（settings、providers、plugins、prompts、skills 等），无需配置。",
	"mode.advanced": "高级（自定义导出）",
	"mode.advancedHint": "手动勾选要推送的分区（等同导出备份的自定义导出）；可移植分区恒可同步，工作区 / 会话属「选择性同步」，需显式勾选。",
	"mode.sectionsTitle": "同步分区",
	"mode.sectionsHint": "可移植分区恒可同步。「选择性同步」分区（Workspaces、Sessions）默认不参与 —— 勾选后才会随 WebDAV / Git 通道传输；其余设备 / 平台相关分区（插件文件、凭据状态、MCP）永不参与同步。",
	"mode.atLeastOne": "请至少勾选一个同步分区",
	"mode.defaultCount": "将同步 {n} 个推荐分区",
	"mode.sectionPortable": "可移植",
	"mode.sectionRecommended": "推荐",
	"mode.sectionOptIn": "选择性同步",
	"mode.optInHint": "「选择性同步」分区默认关闭：工作区记录含绝对路径，会话含完整对话内容（可能含敏感信息）—— 勾选后才会写入远端快照。",
	"mode.optInWarn": "已勾选「{names}」：其中的绝对路径与会话内容会写入远端快照，请确认远端为可信的私有仓库；换机后路径通常需要重新映射。",
	"mode.persistHint": "模式与分区选择已保存到本机：自动同步和手动推送都会使用此配置（重启后仍生效）。",
	"mode.security": "加密与密钥导出（安全选项）",
	"mode.encrypt": "加密备份",
	"mode.encryptHint": "用密码加密同步快照（AES-256-GCM）。密码仅本次推送使用、绝不落盘；自动同步无法解密加密快照，会自动跳过并在同步历史中提示。",
	"mode.password": "加密密码",
	"mode.passwordConfirm": "确认密码",
	"mode.passwordMismatch": "两次输入的密码不一致",
	"mode.passwordRequired": "加密必须设置密码",
	"mode.includeSecrets": "导出密钥",
	"mode.includeSecretsHint": "把真实凭据值写入加密快照（勾选时自动选中加密；密钥绝不进入未加密快照）。",
	"mode.encryptAutosyncNotice": "加密快照仅通过手动推送/拉取使用；自动同步无密码，遇到加密快照会跳过并在历史中提示。",
	"mode.decryptPassword": "解密密码（加密快照拉取/同步用，可选）",
	"mode.decryptPasswordHint": "拉取或一键同步遇到加密快照时输入；不输入则加密快照无法读取（自动同步会跳过并在历史中提示）。",
	"autosync.title": "自动同步",
	"autosync.description": "开启后，DSH 在后台保持配置一致：本地配置有改动时自动上传，检测到远端有新快照时才自动拉取合并；定时器仅作兜底轮询，无变化不重复动作。仅在无冲突且无需人工干预时才自动写入本地。",
	"autosync.enable": "启用自动同步",
	"autosync.interval": "兜底轮询间隔",
	"autosync.intervalHint": "间隔到点 / DSH 启动时检查远端是否有新快照，有才拉取合并（不上传本地）；本地配置改动会触发上传。",
	"autosync.interval5m": "5 分钟",
	"autosync.interval15m": "15 分钟",
	"autosync.interval30m": "30 分钟",
	"autosync.interval60m": "60 分钟",
	"autosync.interval6h": "6 小时",
	"autosync.interval12h": "12 小时",
	"autosync.interval24h": "24 小时",
	"autosync.status": "上次运行：{status}（{time}）",
	"autosync.statusNever": "从未运行",
	"autosync.nextRun": "下次约 {time} 后",
	"autosync.due": "已到同步时间，即将执行",
	"autosync.failCount": "连续失败 {n} 次",
	"autosync.running": "自动同步进行中…",
	"autosync.success": "成功",
	"autosync.skipped": "已跳过",
	"autosync.failed": "失败",
	"autosync.partial": "部分成功",
	"history.title": "同步历史",
	"history.empty": "尚无同步历史",
	"history.emptyHint": "完成首次 push / 一键同步 / 自动同步后，这里会显示记录。",
	"history.colTime": "时间",
	"history.colKind": "类型",
	"history.colDetail": "详情",
	"history.kindSnapshot": "快照",
	"history.kindAutosync": "自动同步",
	"history.sectionCount": "分区",
	"history.detail": "明细",
	"history.autosyncDirection": "方向：{direction}",
	"history.autosyncPull": "下载",
	"history.autosyncPush": "上传",
	"history.autosyncBoth": "双向",
	"history.autosyncSkipReason": "跳过原因：{reason}",
	"history.autosyncReasonConflict": "冲突",
	"history.autosyncReasonNoRemote": "无远端快照",
	"history.autosyncReasonNotConfigured": "未配置仓库",
	"history.autosyncReasonNetwork": "网络问题",
	"history.autosyncConflicted": "跳过冲突分区：{sections}",
	"history.autosyncApplied": "应用分区：{sections}",
	"history.autosyncError": "错误：{error}",
	"history.autosyncNotified": "已通知（连续失败 3 次）",
	"history.column.snapshot": "快照",
	"history.column.autosync": "自动同步",
	"history.channelGit": "GitHub",
	"history.channelWebdav": "WebDAV",
	"history.stats.total": "共 {count} 条",
	"history.stats.snapshots": "快照 {count}",
	"history.stats.autosync": "自动同步 {count}",
	"history.stats.failed": "失败 {count}",
	"history.stats.skipped": "跳过 {count}",
	"history.stats.summary": "同步历史统计",
	"toast.autosyncLoadFailed": "读取自动同步状态失败",
	"toast.configSaveFailed": "保存通道配置失败",
	"toast.configSaved": "通道配置已保存",
	"toast.configNothingToSave": "请先填写通道地址再保存",
	"toast.selectionSaveFailed": "同步设置保存失败",
	"toast.pushPreviewFailed": "推送预览失败",
	"toast.pushFailed": "推送失败",
	"toast.pushDone": "推送完成",
	"toast.pullFailed": "拉取失败",
	"toast.pullDone": "拉取完成",
	"toast.syncStartFailed": "一键同步失败",
	"toast.autosyncUpdateFailed": "自动同步设置更新失败",
	"toast.autosyncUpdated": "自动同步设置已更新",
	"toast.snapshotsLoadFailed": "读取远端快照失败",
	"toast.snapshotsRefreshed": "远端快照列表已刷新",
	"load.failed": "加载同步状态失败",
	"common.close": "关闭",
	"common.retry": "重试",
	"common.loading": "加载中…"
};
const en$3 = {
	"section.label": "Remote Sync",
	"section.description": "Sync portable configuration across devices via a private Git repository (secrets never sync)",
	"privateRepoHint": "Security requirement: the sync repository MUST be private (a public repo would expose your configuration). The auth token is only used for repository access and is never written into sync files, commit content, or logs.",
	"config.title": "Repository",
	"config.repoUrl": "Repository URL",
	"config.repoUrlHint": "Private Git repository URL (https / ssh / local path). Use the credential field below for the auth token; never embed it in the URL.",
	"config.token": "Auth token",
	"config.tokenHint": "Securely written into DSH credentials (ref {ref}); never written into sync files or logs. Leave blank to reuse the saved credential.",
	"config.tokenSaved": "Credential configured",
	"config.tokenPlaceholder": "ghp_… (optional)",
	"config.save": "Save config",
	"config.saving": "Saving…",
	"config.saveHint": "Form changes are saved automatically (password/token written securely into DSH credentials, never into sync files or logs); you can also save explicitly with the button.",
	"channel.title": "Sync Channel",
	"channel.git": "Git private repo",
	"channel.webdav": "WebDAV server",
	"channel.perChannelHint": "Auto sync, sync mode, encryption and remote snapshots are configured independently for GitHub and WebDAV channels.",
	"channel.open": "Configure sync channel",
	"channel.openHint": "Remote sync runs through a sync channel: a private Git repository or a WebDAV server. Click the button to configure or change it in the dialog.",
	"channel.configured": "Configured",
	"channel.notConfigured": "Not configured",
	"channel.currentUrl": "Current URL",
	"syncStatus.lastSync": "Last sync",
	"syncStatus.sections": "Syncable sections",
	"syncStatus.state": "State",
	"webdav.title": "WebDAV Configuration",
	"webdav.url": "Server URL",
	"webdav.urlHint": "WebDAV server root URL (https://…). Sync snapshots and the index are stored under a dsh-config-manager/ subdirectory of that URL. Do not include a username/password in the URL.",
	"webdav.username": "Username",
	"webdav.usernameHint": "HTTP Basic auth username (not sensitive, may be shown).",
	"webdav.password": "Password",
	"webdav.passwordHint": "Securely written into DSH credentials (ref {ref}); never written into sync files or logs. Leave blank to reuse the saved credential.",
	"webdav.passwordSaved": "Credential configured",
	"webdav.passwordPlaceholder": "Password (optional)",
	"webdav.presetHint": "Pick a common WebDAV server to prefill the URL; templates containing <placeholders> need to be replaced with your real server/username.",
	"github.title": "GitHub Sign-in",
	"github.description": "Authorize via the GitHub OAuth device flow: no manual token entry — after you approve in the browser, the token is written into DSH credentials automatically.",
	"github.login": "Sign in with GitHub",
	"github.retry": "Sign in again",
	"github.cancel": "Cancel",
	"github.tokenInvalid": "GitHub sign-in is no longer valid — please sign in again.",
	"github.userCode": "One-time code",
	"github.openAuth": "Open GitHub authorization page",
	"github.clientIdHint": "Requires the githubClientId plugin config (the client_id of your GitHub OAuth App).",
	"status.title": "Sync Status",
	"status.never": "Never synced",
	"action.push": "Push to remote",
	"action.pull": "Pull diff preview",
	"action.pushing": "Pushing…",
	"action.pulling": "Pulling…",
	"push.title": "Push Result",
	"pull.title": "Pull Diff Preview",
	"pull.previewHint": "Read-only diff preview above; nothing is imported. One-click import is not supported in this version; use the Import wizard to apply a downloaded backup if needed.",
	"pull.needsReview": "Contains items that need human decisions (conflicts / secrets / dependencies / installs)",
	"pull.empty": "Remote snapshot matches local (no changes)",
	"change.total": "{total} change(s)",
	"sections.title": "Synced Sections",
	"warnings.title": "Section Warnings",
	"syncflow.title": "One-Click Sync",
	"syncflow.button": "One-click sync",
	"syncflow.syncing": "Syncing…",
	"syncflow.syncFailed": "Sync failed",
	"syncflow.snapshotOption": "({date} · {count} sections)",
	"syncflow.selectSnapshot": "Select snapshot",
	"syncflow.refreshSnapshots": "Refresh snapshots",
	"syncflow.refreshingSnapshots": "Fetching…",
	"syncflow.latestSnapshot": "Latest snapshot",
	"syncflow.noSnapshots": "No remote snapshots",
	"syncflow.confirmImport": "Confirm import",
	"syncflow.cancel": "Cancel",
	"syncflow.adoptRemote": "Adopt remote",
	"syncflow.adoptHint": "Check = import item; uncheck = skip",
	"syncflow.needsReviewBadge": "Needs decision",
	"syncflow.empty": "Remote snapshot matches local (no changes)",
	"syncflow.diffCount": "{count} change(s)",
	"syncflow.keepLocalAll": "Keep all current",
	"syncflow.useRemoteAll": "Use all backup",
	"syncflow.bulkHint": "Bulk decisions only apply to conflict items; other changes are adopted by default.",
	"syncflow.conflictTitle": "Resolve conflict",
	"syncflow.conflictUseLocal": "Keep current",
	"syncflow.conflictUseRemote": "Use backup",
	"syncflow.conflictLocalLabel": "Current",
	"syncflow.conflictRemoteLabel": "Backup",
	"syncflow.conflictAncestorLabel": "Common ancestor",
	"syncflow.conflictUnresolved": "Conflict item {itemId} has no resolution yet (keep current / use backup)",
	"syncflow.diff": "Diff",
	"syncflow.importDone": "Imported {n} section(s)",
	"syncflow.importFailed": "Import failed (rolled back)",
	"syncflow.importedSections": "Written",
	"syncflow.importWarnings": "Import warnings",
	"syncflow.rollback": "Rollback",
	"syncflow.rollingBack": "Rolling back…",
	"syncflow.rollbackDone": "Rolled back",
	"syncflow.needsRestart": "Some changes require a DSH restart to take effect",
	"syncflow.pushPreviewTitle": "Confirm Push",
	"syncflow.pushPreviewSections": "Sections to push",
	"syncflow.pushConfirm": "Push",
	"syncflow.pushing": "Pushing…",
	"syncflow.pushFirstBaseline": "No remote snapshots yet: this push creates the first sync baseline",
	"mode.title": "Sync Mode",
	"mode.hint": "Choose which sections to export when pushing: Default = recommended sections in one click (Quick Export); Advanced = custom selection (Custom Export).",
	"mode.default": "Default (Quick Export)",
	"mode.defaultHint": "Push all recommended sections (settings, providers, plugins, prompts, skills, etc.) in one click — no configuration needed.",
	"mode.advanced": "Advanced (Custom Export)",
	"mode.advancedHint": "Manually select the sections to push (same as Custom Export in the Export tab); portable sections always sync, while Workspaces / Sessions are opt-in and must be ticked explicitly.",
	"mode.sectionsTitle": "Sync Sections",
	"mode.sectionsHint": "Portable sections always sync. Opt-in sections (Workspaces, Sessions) do NOT sync unless you tick them; all other device-/platform-specific sections (plugin files, credentials status, MCP) never participate in remote sync.",
	"mode.atLeastOne": "Select at least one section to sync",
	"mode.defaultCount": "Will sync {n} recommended section(s)",
	"mode.sectionPortable": "Portable",
	"mode.sectionRecommended": "Recommended",
	"mode.sectionOptIn": "Opt-in",
	"mode.optInHint": "Opt-in sections are OFF by default: workspace records carry absolute paths and sessions carry full conversation content (potentially sensitive) — they are written to the remote snapshot only after you tick them.",
	"mode.optInWarn": "Selected \"{names}\": absolute paths and session content will be written to the remote snapshot. Make sure the remote is a trusted private repository; paths usually need remapping on the other machine.",
	"mode.persistHint": "The mode and section selection are saved locally: both auto sync and manual push use this configuration (persists across restarts).",
	"mode.security": "Encryption & Secret Export (Security Options)",
	"mode.encrypt": "Encrypt backup",
	"mode.encryptHint": "Encrypt the sync snapshot with a password (AES-256-GCM). The password is memory-only for this push and never persisted; auto sync cannot decrypt encrypted snapshots, so it skips them and reports it in sync history.",
	"mode.password": "Encryption password",
	"mode.passwordConfirm": "Confirm password",
	"mode.passwordMismatch": "Passwords do not match",
	"mode.passwordRequired": "Encryption requires a password",
	"mode.includeSecrets": "Export secrets",
	"mode.includeSecretsHint": "Write real credential values into the encrypted snapshot (auto-selects encryption when checked; secrets never enter a plaintext snapshot).",
	"mode.encryptAutosyncNotice": "Encrypted snapshots are only produced/consumed by manual push/pull; auto sync has no password, so it skips encrypted snapshots and reports them in history.",
	"mode.decryptPassword": "Decryption password (for encrypted snapshot pull/sync, optional)",
	"mode.decryptPasswordHint": "Provide it when pulling or one-click syncing an encrypted snapshot; without it encrypted snapshots cannot be read (auto sync skips and reports them in history).",
	"autosync.title": "Auto Sync",
	"autosync.description": "When enabled, DSH keeps config in sync in the background: uploads locally-changed config automatically, pulls and merges only when it detects a new remote snapshot; the timer is just a fallback poll and no-ops when nothing changed. Local writes happen only when there are no conflicts or manual-decision items.",
	"autosync.enable": "Enable auto sync",
	"autosync.interval": "Fallback poll interval",
	"autosync.intervalHint": "On interval / DSH startup, checks for a new remote snapshot and pulls+merges only if one exists (no upload); local config changes trigger an upload.",
	"autosync.interval5m": "5 min",
	"autosync.interval15m": "15 min",
	"autosync.interval30m": "30 min",
	"autosync.interval60m": "60 min",
	"autosync.interval6h": "6 hr",
	"autosync.interval12h": "12 hr",
	"autosync.interval24h": "24 hr",
	"autosync.status": "Last run: {status} ({time})",
	"autosync.statusNever": "Never run",
	"autosync.nextRun": "Next in ~{time}",
	"autosync.due": "Due — running soon",
	"autosync.failCount": "{n} consecutive failure(s)",
	"autosync.running": "Auto sync running…",
	"autosync.success": "Success",
	"autosync.skipped": "Skipped",
	"autosync.failed": "Failed",
	"autosync.partial": "Partial",
	"history.title": "Sync History",
	"history.empty": "No sync history yet",
	"history.emptyHint": "Records appear here after your first push / one-click sync / auto sync.",
	"history.colTime": "Time",
	"history.colKind": "Kind",
	"history.colDetail": "Detail",
	"history.kindSnapshot": "Snapshot",
	"history.kindAutosync": "Auto Sync",
	"history.sectionCount": "sections",
	"history.detail": "Detail",
	"history.autosyncDirection": "Direction: {direction}",
	"history.autosyncPull": "Pull",
	"history.autosyncPush": "Push",
	"history.autosyncBoth": "Both",
	"history.autosyncSkipReason": "Skip reason: {reason}",
	"history.autosyncReasonConflict": "Conflict",
	"history.autosyncReasonNoRemote": "No remote snapshot",
	"history.autosyncReasonNotConfigured": "No repository configured",
	"history.autosyncReasonNetwork": "Network issue",
	"history.autosyncConflicted": "Skipped conflict sections: {sections}",
	"history.autosyncApplied": "Applied sections: {sections}",
	"history.autosyncError": "Error: {error}",
	"history.autosyncNotified": "Notified (3 consecutive failures)",
	"history.column.snapshot": "Snapshot",
	"history.column.autosync": "Auto Sync",
	"history.channelGit": "GitHub",
	"history.channelWebdav": "WebDAV",
	"history.stats.total": "{count} total",
	"history.stats.snapshots": "{count} snapshots",
	"history.stats.autosync": "{count} auto sync",
	"history.stats.failed": "{count} failed",
	"history.stats.skipped": "{count} skipped",
	"history.stats.summary": "Sync history statistics",
	"toast.autosyncLoadFailed": "Failed to load auto-sync status",
	"toast.configSaveFailed": "Failed to save channel config",
	"toast.configSaved": "Channel config saved",
	"toast.configNothingToSave": "Enter a channel URL before saving",
	"toast.selectionSaveFailed": "Failed to save sync settings",
	"toast.pushPreviewFailed": "Failed to build push preview",
	"toast.pushFailed": "Push failed",
	"toast.pushDone": "Push completed",
	"toast.pullFailed": "Pull failed",
	"toast.pullDone": "Pull completed",
	"toast.syncStartFailed": "One-click sync failed",
	"toast.autosyncUpdateFailed": "Failed to update auto-sync settings",
	"toast.autosyncUpdated": "Auto-sync settings updated",
	"toast.snapshotsLoadFailed": "Failed to load remote snapshots",
	"toast.snapshotsRefreshed": "Remote snapshot list refreshed",
	"load.failed": "Failed to load sync status",
	"common.close": "Close",
	"common.retry": "Retry",
	"common.loading": "Loading…"
};
//#endregion
//#region src/client/market/market-api.ts
/** 市场端点常量（与 Host 半 API 常量保持一致；内置单市场，无 add/remove） */
const MARKET_API = {
	base: "/api/dsh-config-manager/market",
	status: "/api/dsh-config-manager/market/status",
	refresh: "/api/dsh-config-manager/market/refresh",
	browse: "/api/dsh-config-manager/market/browse",
	download: "/api/dsh-config-manager/market/download",
	prepare: "/api/dsh-config-manager/market/prepare",
	/** 受控临时区文件下载端点（发布包 zip 下载复用；GET ?path=，无凭据） */
	fileDownload: "/api/dsh-config-manager/download"
};
/** 市场请求超时（ms）：git 拉取可能较慢，与 Host 半 ROUTE_TIMEOUT_MS 对齐量级 */
const MARKET_TIMEOUT_MS = 3e5;
/** 解析 JSON 响应；非 2xx 时抛出带路由 error 消息的 ConfigManagerApiError（与 api.ts 同款） */
async function readJson$3(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** POST JSON 请求（带超时：宿主卡死时 UI 拿到明确错误而不是永远转圈） */
async function postJson$3(path, body, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), MARKET_TIMEOUT_MS);
	try {
		return await readJson$3(await fetch(path, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
			signal: controller.signal
		}), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(t("error.syncTimeout", { minutes: String(Math.round(MARKET_TIMEOUT_MS / 6e4)) }));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/** 配置市场浏览器半数据入口（备份与迁移页第 5 个 tab 的注入业务面） */
var MarketApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** 读取内置市场摘要（条目数 / 最近拉取时间；无任何凭据） */
	async status() {
		return readJson$3(await fetch(MARKET_API.status), this.t);
	}
	/** 拉取市场最新 index.json（内置单市场；返回目录条目 + 市场缓存摘要） */
	async refresh() {
		return postJson$3(MARKET_API.refresh, {}, this.t);
	}
	/** 浏览内置市场（合并 index + 本地缓存状态 → 条目列表带 cacheState） */
	async browse() {
		return postJson$3(MARKET_API.browse, {}, this.t);
	}
	/** 下载 + 校验单条目（dry-run 预览：拉取 → §6 校验 → analyzeImport → createImportPlan）。
	*  repo 可选：条目来源仓库（作者自托管）。自托管条目（官方 index 带 repo 引用、或「我的配置」
	*  未收录条目）内容文件在作者自己的公开仓库，必须显式传 repo 才能从正确来源拉取；
	*  缺省 = 市场仓库（官方同仓条目）。
	*  真正落盘由用户对预览确认后走现有 executeImportPlan（confirm:true 安全阀 + 回滚）。 */
	async download(itemId, repo) {
		return postJson$3(MARKET_API.download, {
			itemId,
			...repo !== void 0 && repo !== "" ? { repo } : {}
		}, this.t);
	}
	/** 发布向导：由「上传 zip + 用户填写元数据」生成市场条目包（L2 manifest + SHA-256 + sections），
	*  供 UI 展示/复制与引导推送。零写入配置（发布目录在受控临时区）；不含任何凭据字段。 */
	async prepare(payload) {
		return postJson$3(MARKET_API.prepare, payload, this.t);
	}
	/** 发布包下载 URL（受控临时区 zip；经宿主 /download 端点，无凭据、无写操作） */
	downloadPublishUrl(zipPath) {
		return `${MARKET_API.fileDownload}?path=${encodeURIComponent(zipPath)}`;
	}
};
//#endregion
//#region src/client/market/my-configs-api.ts
/** 「我的配置」端点常量（与 Host 半 API 常量保持一致） */
const MY_CONFIGS_API = {
	base: "/api/dsh-config-manager/me",
	status: "/api/dsh-config-manager/me/status",
	upload: "/api/dsh-config-manager/me/upload",
	items: "/api/dsh-config-manager/me/items",
	update: "/api/dsh-config-manager/me/update",
	listing: "/api/dsh-config-manager/me/listing",
	relist: "/api/dsh-config-manager/me/relist",
	delete: "/api/dsh-config-manager/me/delete"
};
/** 「我的配置」请求超时（ms）：上传/更新含 git clone/push/fork/PR，与 market/sync 对齐量级 */
const MY_CONFIGS_TIMEOUT_MS = 3e5;
/** 解析 JSON 响应；非 2xx 时抛出带路由 error 消息的 ConfigManagerApiError（与 api.ts 同款） */
async function readJson$2(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** POST JSON 请求（带超时：宿主卡死时 UI 拿到明确错误而不是永远转圈） */
async function postJson$2(path, body, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), MY_CONFIGS_TIMEOUT_MS);
	try {
		return await readJson$2(await fetch(path, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
			signal: controller.signal
		}), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(t("error.syncTimeout", { minutes: String(Math.round(MY_CONFIGS_TIMEOUT_MS / 6e4)) }));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/**
* 「我的配置」浏览器半数据入口（MarketPanel 的「我的配置」子视图注入业务面）。
* 登录（GitHub device flow）不在此类 —— 复用 SyncApi.githubStart/githubPoll/githubCancel。
*/
var MyConfigsApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** 读取登录态 + 用户配置仓库状态（token 失效 → Host 返回 401/未登录，UI 引导重新登录） */
	async meStatus() {
		return postJson$2(MY_CONFIGS_API.status, {}, this.t);
	}
	/** 一键上传：校验 → 建/复用仓库 → 写入用户仓库 → fork → 改官方 index → 提收录 PR */
	async meUpload(payload) {
		return postJson$2(MY_CONFIGS_API.upload, payload, this.t);
	}
	/** 读取已上传条目列表（用户仓库 index.json；每条目含 Host 侧判定的收录状态） */
	async meItems() {
		return postJson$2(MY_CONFIGS_API.items, {}, this.t);
	}
	/** 一键更新：version 自动 +1，复用/重开收录 PR */
	async meUpdate(payload) {
		return postJson$2(MY_CONFIGS_API.update, payload, this.t);
	}
	/** 查询收录/下架任务状态（结果卡轮询；任务表未命中时 Host 回退 GitHub 实况推导；无任务无实况 → null） */
	async meListing(itemId) {
		return postJson$2(MY_CONFIGS_API.listing, { itemId }, this.t);
	}
	/** 重新提交收录（失败/重启丢失后重试；幂等复用已存在 fork/open PR） */
	async meRelist(itemId) {
		return postJson$2(MY_CONFIGS_API.relist, { itemId }, this.t);
	}
	/** 删除条目（同步删本地索引+文件；已收录自动后台提下架 PR；待审核自动关闭收录 PR） */
	async meDelete(itemId) {
		return postJson$2(MY_CONFIGS_API.delete, { itemId }, this.t);
	}
};
//#endregion
//#region src/client/market/market-locales.ts
/**
* 配置市场区块（config-manager-market）表面文案：zh 为源语言，en 镜像每个键。
* 独立命名空间、独立文件：与 config-manager / config-manager-sync 平行，不触碰共享字典。
*
* 双层文案分工（与 SyncSettingsView 同款）：
*  - 本命名空间（TranslateNS<'config-manager-market'>）= React 壳文案（标题 / 表单 / 按钮 / 列表控件）；
*  - 纯渲染模型文案（market-view.ts 产出，如供应链警示、状态行、条目徽章文本）走共享
*    `src/ui/i18n.ts` 的 `market.*` 键（UiT），由 MarketApi.t 提供 —— 与 sync-view.ts 用 `sync.*` 同构。
*
* 键集合经 `MarketKey` 类型在 client/index.ts 注册处做编译期校验。
*/
const zh$2 = {
	"section.label": "配置市场",
	"section.description": "浏览并下载社区共享的配置（公开 Git 仓库；下载内容一律视为不可信，导入前必经校验与确认）",
	"config.title": "市场仓库",
	"config.refresh": "拉取最新",
	"config.refreshing": "拉取中…",
	"config.refreshed": "已拉取最新市场目录",
	"list.empty": "内置市场尚未加载。请先「拉取最新」。",
	"list.browse": "浏览",
	"list.browsed": "已重新浏览市场",
	"list.loading": "正在读取市场…",
	"list.noItems": "该市场暂无条目。",
	"list.searchPlaceholder": "搜索名称 / 作者 / 描述…",
	"list.categoriesAll": "全部类别",
	"list.sectionsAll": "全部分区",
	"list.sectionsUnknown": "另有 {count} 个条目未下载，无法按分区匹配",
	"list.sourceAll": "全部来源",
	"list.sourceOfficial": "官方配置",
	"list.sourcePersonal": "个人配置",
	"list.sortDefault": "默认排序",
	"list.sortUpdated": "最新更新",
	"list.sortStars": "⭐ 最多",
	"list.sortName": "名称 A–Z",
	"list.stars": "⭐ {count}",
	"list.starsHint": "来源仓库 star 数（仓库级，非本条目）",
	"list.count": "共 {count} 个条目",
	"list.filtered": "（筛选后 {count} 个）",
	"list.cacheCached": "已缓存",
	"list.cacheFresh": "刚刚拉取",
	"list.cacheNone": "未缓存",
	"list.download": "查看详情",
	"detail.title": "条目详情",
	"detail.downloadedAt": "下载时间：{time}",
	"detail.version": "版本 {version}",
	"detail.errors": "校验错误：",
	"detail.emptySections": "该条目未包含任何可导入分区",
	"detail.needReview": "需要人工确认",
	"detail.previewHint": "以下为只读预览（不会改动任何设置）。确认导入将复用现有安全管道（快照 + 校验 + 失败回滚）。",
	"detail.impact.willChange": "将变更 {count} 项",
	"detail.impact.unchanged": "已一致 {count} 项",
	"detail.impact.conflicts": "冲突 {count}",
	"detail.impact.secrets": "需补录密钥 {count}",
	"detail.impact.paths": "路径映射 {count}",
	"detail.impact.restart": "需重启 DSH 生效",
	"detail.import": "确认导入",
	"detail.back": "返回列表",
	"detail.approval.title": "逐分区批准导入",
	"detail.approval.highRiskHint": "以下分区涉及安装插件 / 写入文件 / 注入全局指令 / 注册 MCP / 恢复会话，属高风险变更，默认不导入；如需导入请逐项勾选。",
	"detail.approval.requiresApproval": "需逐项批准",
	"detail.approval.safe": "可导入",
	"detail.approval.count": "已批准 {selected}/{total} 分区",
	"detail.noApproval": "未批准任何分区，无法导入",
	"import.done": "导入完成：{count} 项写入",
	"import.failed": "导入失败（{count} 项失败）",
	"import.needsRestart": "部分改动需重启 DSH 后生效",
	"detail.failed": "下载失败，请关闭弹窗后重试（详情见右下角提示）",
	"myconfigs.tab.browse": "浏览市场",
	"myconfigs.tab.myconfigs": "我的配置",
	"myconfigs.back": "返回市场",
	"myconfigs.login.title": "GitHub 登录",
	"myconfigs.login.hint": "登录后即可一键上传配置到你的公开仓库（自动创建 <login>/dsh-configs）并提交官方市场收录（目标仓库固定，不可修改）。",
	"myconfigs.login.checking": "正在检查登录状态…",
	"myconfigs.login.loggedInAs": "已登录：{login}",
	"myconfigs.login.targetRepo": "收录目标（固定）：{repo}",
	"myconfigs.login.repoMissing": "配置仓库尚未创建，首次上传将自动创建（公开）",
	"myconfigs.login.repoReady": "配置仓库：{repo}",
	"myconfigs.login.start": "使用 GitHub 登录",
	"myconfigs.login.relogin": "重新登录",
	"myconfigs.login.cancel": "取消登录",
	"myconfigs.login.userCode": "一次性代码：{code}",
	"myconfigs.login.openAuth": "打开授权页",
	"myconfigs.upload.title": "一键上传",
	"myconfigs.upload.selectHint": "选择导出的配置 zip（先在「导出」tab 生成备份文件，再回到这里选择）。市场通道永不携带秘密——包含密钥的备份将被拒绝。",
	"myconfigs.upload.select": "选择 ZIP…",
	"myconfigs.upload.reselect": "重新选择",
	"myconfigs.upload.selected": "已选择：{name}",
	"myconfigs.upload.validate": "开始校验",
	"myconfigs.upload.validating": "校验中…",
	"myconfigs.upload.validateOk": "校验通过：内容合法、不含密钥",
	"myconfigs.upload.validateSecrets": "包含密钥：市场通道永不携带秘密，拒绝上传",
	"myconfigs.upload.validateInvalid": "内容校验未通过，无法上传",
	"myconfigs.upload.form.title": "条目信息",
	"myconfigs.upload.form.name": "名称",
	"myconfigs.upload.form.nameHint": "预填 zip 文件名，可修改",
	"myconfigs.upload.form.description": "描述（可选）",
	"myconfigs.upload.form.categories": "类别（可选，逗号分隔）",
	"myconfigs.upload.form.autoHint": "以下字段由系统自动生成：",
	"myconfigs.upload.mode.title": "发布模式",
	"myconfigs.upload.mode.migrate": "迁移（保留全部内容）",
	"myconfigs.upload.mode.share": "分享（自动排除敏感内容）",
	"myconfigs.upload.mode.shareHint": "分享模式将自动排除设备/平台相关分区（凭据状态 / 会话 / MCP / 工作区等），并对隐私内容强制拦截——发现任何敏感痕迹将拒绝发布，而不是仅警告。",
	"myconfigs.upload.run": "一键上传",
	"myconfigs.upload.running": "上传中…",
	"myconfigs.update.title": "更新配置",
	"myconfigs.update.hint": "版本将自动 +1，已预填原条目信息（名称可改）。",
	"myconfigs.update.run": "一键更新",
	"myconfigs.update.running": "更新中…",
	"myconfigs.update.zipHint": "更新需要新的配置包：选择新 zip 后自动校验，通过后即可一键更新。",
	"myconfigs.update.selectZip": "选择新 ZIP…",
	"myconfigs.result.title": "上传/更新完成",
	"myconfigs.result.version": "版本 {version}",
	"myconfigs.result.sha256": "SHA-256：{hash}",
	"myconfigs.result.sections": "分区：{sections}",
	"myconfigs.result.repo": "配置仓库",
	"myconfigs.result.openRepo": "打开仓库",
	"myconfigs.result.pr": "收录 PR #{number}",
	"myconfigs.result.openPr": "查看 PR",
	"myconfigs.result.listingPending": "已上传 ✓ 正在后台提交收录（fork + 收录 PR），稍后列表状态自动更新",
	"myconfigs.result.listingFailed": "收录失败",
	"myconfigs.result.relist": "重新提交收录",
	"myconfigs.list.title": "已上传",
	"myconfigs.list.empty": "尚未上传任何配置",
	"myconfigs.list.loading": "正在读取…",
	"myconfigs.list.refresh": "刷新",
	"myconfigs.list.summary": "共 {total} 条 · {listed} 已收录 · {pending} 待审核 · {none} 未收录",
	"myconfigs.list.openRepo": "打开仓库",
	"myconfigs.item.update": "更新",
	"myconfigs.item.install": "装回本地",
	"myconfigs.item.openPr": "查看收录 PR",
	"myconfigs.install.failed": "下载失败，请关闭弹窗后重试（详情见右下角提示）",
	"myconfigs.delete.run": "删除",
	"myconfigs.delete.confirm": "确认删除",
	"myconfigs.delete.confirmTitle": "删除条目",
	"myconfigs.delete.confirmText": "确认删除？该操作会从配置仓库永久删除该条目的索引与文件（不可恢复）",
	"myconfigs.delete.delistStarted": "已删除本地条目，并自动提交「下架 PR」（官方市场移除需人工合并，期间市场可能仍显示该条目）",
	"myconfigs.delete.prClosed": "已删除本地条目，并关闭该条目的待审核收录 PR",
	"disclaimer.title": "免责声明",
	"disclaimer.upload.text": "你即将把配置上传到你的公开仓库（<login>/dsh-configs）并提交官方市场收录申请。\n\n上传后内容将对所有人公开可见，且需经过人工审核才能进入官方市场。请确保：\n· 内容不包含任何真实密钥 / 凭据（环境变量引用如 $VAR 是安全的）；\n· 内容不包含个人隐私或本地环境信息；\n· 你有权分享这些配置。",
	"disclaimer.download.text": "你即将从公共网络市场下载配置并导入本地。\n\n下载内容属于不可信输入：未经官方审核、可能包含风险（安装插件 / 写入文件 / 修改设置）。\n· 导入前会逐项展示并校验，高风险分区默认不导入、需逐项批准；\n· 导入会先自动创建快照，失败可回滚；\n· 请核对来源与内容后再确认导入。",
	"disclaimer.install.text": "你即将把配置从你的公开仓库装回本地。\n\n该内容属于你此前上传的配置，但同样会经过安全校验与逐分区批准：\n· 高风险分区默认不导入、需逐项批准；\n· 导入前自动创建快照，失败可回滚。",
	"disclaimer.confirm": "我已了解，继续",
	"disclaimer.dontAsk": "不再提示（该操作以后不再显示免责声明）",
	"myconfigs.error.loadStatus": "登录状态读取失败",
	"myconfigs.error.loadItems": "已上传列表读取失败",
	"common.cancel": "取消",
	"common.close": "关闭",
	"common.retry": "重试",
	"common.loading": "加载中…",
	"common.unknownError": "未知错误"
};
const en$2 = {
	"section.label": "Config Marketplace",
	"section.description": "Browse and download community-shared configs (public Git repos; downloaded content is always untrusted — validated and confirmed before import)",
	"config.title": "Market Repository",
	"config.refresh": "Refresh",
	"config.refreshing": "Refreshing…",
	"config.refreshed": "Market index refreshed",
	"list.empty": "The built-in market has not loaded yet. Click \"Refresh\" first.",
	"list.browse": "Browse",
	"list.browsed": "Market re-browsed",
	"list.loading": "Reading market…",
	"list.noItems": "This market has no items.",
	"list.searchPlaceholder": "Search name / author / description…",
	"list.categoriesAll": "All categories",
	"list.sectionsAll": "All sections",
	"list.sectionsUnknown": "{count} more item(s) not downloaded yet — cannot match by section",
	"list.sourceAll": "All sources",
	"list.sourceOfficial": "Official",
	"list.sourcePersonal": "Community",
	"list.sortDefault": "Default order",
	"list.sortUpdated": "Recently updated",
	"list.sortStars": "Most starred",
	"list.sortName": "Name A–Z",
	"list.stars": "⭐ {count}",
	"list.starsHint": "Stars of the source repo (repo-level, not per item)",
	"list.count": "{count} item(s)",
	"list.filtered": "({count} after filter)",
	"list.cacheCached": "cached",
	"list.cacheFresh": "just fetched",
	"list.cacheNone": "not cached",
	"list.download": "View details",
	"detail.title": "Item Details",
	"detail.downloadedAt": "Downloaded: {time}",
	"detail.version": "version {version}",
	"detail.errors": "Verification errors:",
	"detail.emptySections": "This item contains no importable sections",
	"detail.needReview": "Needs human confirmation",
	"detail.previewHint": "Read-only preview below (changes nothing). Confirming the import reuses the existing safe pipeline (snapshot + validation + rollback on failure).",
	"detail.impact.willChange": "{count} item(s) will change",
	"detail.impact.unchanged": "{count} identical",
	"detail.impact.conflicts": "{count} conflict(s)",
	"detail.impact.secrets": "{count} secret(s) to re-enter",
	"detail.impact.paths": "{count} path mapping(s)",
	"detail.impact.restart": "DSH restart required",
	"detail.import": "Confirm import",
	"detail.back": "Back to list",
	"detail.approval.title": "Approve sections to import",
	"detail.approval.highRiskHint": "These sections install plugins / write files / inject global instructions / register MCP / restore sessions — high-risk changes, not imported by default. Check each one to import it.",
	"detail.approval.requiresApproval": "Requires approval",
	"detail.approval.safe": "Importable",
	"detail.approval.count": "{selected}/{total} section(s) approved",
	"detail.noApproval": "No sections approved — cannot import",
	"import.done": "Import complete: {count} item(s) written",
	"import.failed": "Import failed ({count} item(s) failed)",
	"import.needsRestart": "Some changes need a DSH restart to take effect",
	"detail.failed": "Download failed — close this dialog and retry (see the notice at the bottom right)",
	"myconfigs.tab.browse": "Browse Market",
	"myconfigs.tab.myconfigs": "My Configs",
	"myconfigs.back": "Back to market",
	"myconfigs.login.title": "GitHub sign-in",
	"myconfigs.login.hint": "After signing in you can upload configs to your public repo (auto-created as <login>/dsh-configs) and submit a listing PR to the official market (target repo is fixed and not editable).",
	"myconfigs.login.checking": "Checking sign-in status…",
	"myconfigs.login.loggedInAs": "Signed in as {login}",
	"myconfigs.login.targetRepo": "Listing target (fixed): {repo}",
	"myconfigs.login.repoMissing": "Config repo not created yet — it will be auto-created (public) on first upload",
	"myconfigs.login.repoReady": "Config repo: {repo}",
	"myconfigs.login.start": "Sign in with GitHub",
	"myconfigs.login.relogin": "Sign in again",
	"myconfigs.login.cancel": "Cancel sign-in",
	"myconfigs.login.userCode": "One-time code: {code}",
	"myconfigs.login.openAuth": "Open authorization page",
	"myconfigs.upload.title": "Upload",
	"myconfigs.upload.selectHint": "Pick an exported config zip (create a backup on the \"Export\" tab first, then pick it here). The market channel never carries secrets — backups containing secrets are rejected.",
	"myconfigs.upload.select": "Choose ZIP…",
	"myconfigs.upload.reselect": "Choose again",
	"myconfigs.upload.selected": "Selected: {name}",
	"myconfigs.upload.validate": "Run validation",
	"myconfigs.upload.validating": "Validating…",
	"myconfigs.upload.validateOk": "Validation passed: valid content, no secrets",
	"myconfigs.upload.validateSecrets": "Contains secrets: the market channel never carries secrets — upload rejected",
	"myconfigs.upload.validateInvalid": "Content validation failed — cannot upload",
	"myconfigs.upload.form.title": "Item info",
	"myconfigs.upload.form.name": "Name",
	"myconfigs.upload.form.nameHint": "Prefilled from the zip file name; editable",
	"myconfigs.upload.form.description": "Description (optional)",
	"myconfigs.upload.form.categories": "Categories (optional, comma-separated)",
	"myconfigs.upload.form.autoHint": "These fields are generated automatically:",
	"myconfigs.upload.mode.title": "Publish mode",
	"myconfigs.upload.mode.migrate": "Migrate (keep everything)",
	"myconfigs.upload.mode.share": "Share (auto-exclude sensitive content)",
	"myconfigs.upload.mode.shareHint": "Share mode auto-excludes device/platform-specific sections (credentials status / sessions / MCP / workspaces, etc.) and enforces privacy scanning — any sensitive trace blocks publishing instead of just warning.",
	"myconfigs.upload.run": "Upload",
	"myconfigs.upload.running": "Uploading…",
	"myconfigs.update.title": "Update config",
	"myconfigs.update.hint": "The version will be bumped automatically (+1); item info is prefilled (name editable).",
	"myconfigs.update.run": "Update",
	"myconfigs.update.running": "Updating…",
	"myconfigs.update.zipHint": "Updating needs a new config zip: pick one and it will be validated automatically, then you can update.",
	"myconfigs.update.selectZip": "Choose new ZIP…",
	"myconfigs.result.title": "Upload/update complete",
	"myconfigs.result.version": "version {version}",
	"myconfigs.result.sha256": "SHA-256: {hash}",
	"myconfigs.result.sections": "Sections: {sections}",
	"myconfigs.result.repo": "Config repo",
	"myconfigs.result.openRepo": "Open repo",
	"myconfigs.result.pr": "Listing PR #{number}",
	"myconfigs.result.openPr": "View PR",
	"myconfigs.result.listingPending": "Uploaded ✓ submitting listing in the background (fork + PR) — list status will update shortly",
	"myconfigs.result.listingFailed": "Listing failed",
	"myconfigs.result.relist": "Resubmit listing",
	"myconfigs.list.title": "Uploaded",
	"myconfigs.list.empty": "No configs uploaded yet",
	"myconfigs.list.loading": "Loading…",
	"myconfigs.list.refresh": "Refresh",
	"myconfigs.list.summary": "{total} item(s) · {listed} listed · {pending} pending · {none} not listed",
	"myconfigs.list.openRepo": "Open repo",
	"myconfigs.item.update": "Update",
	"myconfigs.item.install": "Install locally",
	"myconfigs.item.openPr": "View listing PR",
	"myconfigs.install.failed": "Download failed — close this dialog and retry (see the notice at the bottom right)",
	"myconfigs.delete.run": "Delete",
	"myconfigs.delete.confirm": "Confirm delete",
	"myconfigs.delete.confirmTitle": "Delete item",
	"myconfigs.delete.confirmText": "Delete? This permanently removes the item index and files from your config repo (not recoverable)",
	"myconfigs.delete.delistStarted": "Local item deleted; a \"delist PR\" has been submitted (removal from the official market needs human merge; the item may still appear in the market meanwhile)",
	"myconfigs.delete.prClosed": "Local item deleted; its pending listing PR has been closed",
	"disclaimer.title": "Disclaimer",
	"disclaimer.upload.text": "You are about to upload configs to your public repo (<login>/dsh-configs) and submit a listing request to the official market.\n\nUploaded content becomes publicly visible and requires human review before entering the official market. Please ensure:\n· No real secrets / credentials are included (env-var references like $VAR are safe);\n· No personal privacy or local environment info is included;\n· You have the right to share these configs.",
	"disclaimer.download.text": "You are about to download configs from a public network market and import them locally.\n\nDownloaded content is untrusted input: not officially reviewed and may carry risks (installing plugins / writing files / changing settings).\n· Everything is validated and shown before import; high-risk sections are not imported by default and require individual approval;\n· A snapshot is auto-created before import and rollback is available on failure;\n· Please verify the source and content before confirming the import.",
	"disclaimer.install.text": "You are about to reinstall configs from your public repo to this machine.\n\nThis is content you uploaded before, but it still goes through the same validation and per-section approval:\n· High-risk sections are not imported by default and require individual approval;\n· A snapshot is auto-created before import and rollback is available on failure.",
	"disclaimer.confirm": "I understand, continue",
	"disclaimer.dontAsk": "Don't ask again (no more disclaimers for this action)",
	"myconfigs.error.loadStatus": "Failed to read sign-in status",
	"myconfigs.error.loadItems": "Failed to read uploaded items",
	"common.cancel": "Cancel",
	"common.close": "Close",
	"common.retry": "Retry",
	"common.loading": "Loading…",
	"common.unknownError": "Unknown error"
};
//#endregion
//#region src/client/recovery/recovery-api.ts
/** recovery 端点常量（与 Host 半 src/index.ts API.recovery 前缀保持一致）。 */
const RECOVERY_API = {
	base: "/api/dsh-config-manager/recovery",
	status: "/api/dsh-config-manager/recovery/status",
	/** issue #31：残留锁显式回收（非 operationId 路径；'lock' 不是 UUID）。 */
	lockRecover: "/api/dsh-config-manager/recovery/lock/recover"
};
/** recovery 请求超时（ms）：与 Host 半 ROUTE_TIMEOUT_MS 对齐（restore/rollback 可能较慢）。 */
const RECOVERY_TIMEOUT_MS = 3e5;
/** 解析 JSON 响应；非 2xx 时抛出带路由 error 消息的 ConfigManagerApiError（与 api.ts 同款）。 */
async function readJson$1(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** POST JSON 请求（带超时：宿主卡死时 UI 拿到明确错误而不是永远转圈）。 */
async function postJson$1(path, body, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), RECOVERY_TIMEOUT_MS);
	try {
		return await readJson$1(await fetch(path, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
			signal: controller.signal
		}), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(t("error.recoveryTimeout", { minutes: String(Math.round(RECOVERY_TIMEOUT_MS / 6e4)) }));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/** operationId 严格 UUID 校验（与 Host 侧 isValidOperationId 一致；防路径穿越）。 */
const OPERATION_ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function operationPath(operationId, action) {
	if (!OPERATION_ID_RE.test(operationId)) throw new ConfigManagerApiError("invalid operationId");
	return `${RECOVERY_API.base}/${operationId}/${action}`;
}
/** Recovery 浏览器半数据入口（实现 RecoveryPort 契约）。 */
var RecoveryApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** GET /recovery/status：列出未解决 operation + reconcile decision。 */
	async status() {
		return readJson$1(await fetch(RECOVERY_API.status), this.t);
	}
	/** GET /recovery/:operationId/preview：只读恢复预览（restore plan + verification plan）。 */
	async preview(operationId) {
		return readJson$1(await fetch(operationPath(operationId, "preview")), this.t);
	}
	/** POST /recovery/:operationId/confirm：确认恢复（journal 保持 NEEDS_ATTENTION）。 */
	async confirm(operationId, userConfirmed) {
		return postJson$1(operationPath(operationId, "confirm"), { userConfirmed }, this.t);
	}
	/** POST /recovery/:operationId/execute：执行恢复/回滚（NEEDS_ATTENTION → RECOVERING）。 */
	async execute(operationId, userConfirmed) {
		return postJson$1(operationPath(operationId, "execute"), { userConfirmed }, this.t);
	}
	/** POST /recovery/:operationId/verify：post-recovery verification（原子写 verification + terminal）。 */
	async verify(operationId) {
		return postJson$1(operationPath(operationId, "verify"), {}, this.t);
	}
	/** POST /recovery/:operationId/retry：验证失败后重跑 execute + verify。 */
	async retry(operationId, userConfirmed) {
		return postJson$1(operationPath(operationId, "retry"), { userConfirmed }, this.t);
	}
	/** POST /recovery/:operationId/dismiss：放弃恢复（quarantine，不销毁证据）。 */
	async dismiss(operationId, userConfirmed) {
		return postJson$1(operationPath(operationId, "dismiss"), { userConfirmed }, this.t);
	}
	/**
	* POST /recovery/lock/recover（issue #31）：显式回收 stale 残留配置锁。
	* 无 operationId（残留锁没有 journal）；userConfirmed 与其它危险动作同规，
	* 调用方必须先经过显式确认弹窗。
	*/
	async recoverStaleLock(userConfirmed) {
		return postJson$1(RECOVERY_API.lockRecover, { userConfirmed }, this.t);
	}
};
//#endregion
//#region src/client/recovery/recovery-locales.ts
/**
* Recovery 区块（config-manager-recovery）表面文案：zh 为源语言，en 镜像每个键。
* 独立命名空间、独立文件：不触碰共享的 locales.ts（并行会话已改），零冲突。
* 键集合经 `RecoveryKey` 类型在 client/index.ts 注册处做编译期校验。
*
* 覆盖（§10.2 / Step 8 要求）：Recovery Required / Rollback Recommended / Recovery In Progress /
* Verification / Verified / Partial Match / Mismatch / Verification Error / Needs Attention /
* Preview / Confirm / Execute / Verify / Retry / Dismiss / Quarantine / Snapshot / Operation /
* Environment / Manual Action Required。
*/
const zh$1 = {
	"common.cancel": "取消",
	"common.retry": "重试",
	"common.unknownError": "未知错误",
	"view.recovery": "恢复",
	"recovery.banner": "配置修改已被保护：存在未完成的恢复事项。请先处理后继续。",
	"recovery.bannerAction": "去处理",
	"recovery.required": "需要恢复",
	"recovery.requiredHint": "检测到一次操作未正常完成，为安全起见已暂停所有会修改配置的操作。请处理以下恢复事项以恢复正常。",
	"recovery.rollbackRecommended": "建议回滚",
	"recovery.rollbackContinue": "续跑回滚",
	"recovery.inProgress": "恢复进行中",
	"recovery.verified": "已验证",
	"recovery.partialMatch": "部分匹配",
	"recovery.mismatch": "不匹配",
	"recovery.verificationError": "验证错误",
	"recovery.needsAttention": "需要人工处理",
	"recovery.manualActionRequired": "需要人工处理",
	"recovery.incident.title": "发生了什么",
	"recovery.incident.operationId": "操作 ID",
	"recovery.incident.operationType": "操作类型",
	"recovery.incident.createdAt": "发生时间",
	"recovery.incident.reason": "原因",
	"recovery.incident.decision": "建议",
	"recovery.incident.state": "状态",
	"recovery.incident.state.recovering": "恢复中",
	"recovery.incident.state.needsAttention": "需人工处理",
	"recovery.incident.state.rolledBack": "已回滚",
	"recovery.incident.state.recovered": "已恢复",
	"recovery.incident.state.committed": "已完成",
	"recovery.incident.state.unknown": "未知",
	"recovery.decision.unknown": "未知",
	"recovery.verify.verdict.unknown": "未知",
	"recovery.currentState.title": "当前状态",
	"recovery.currentState.safeMode": "已进入安全模式（会修改配置的操作已暂停）",
	"recovery.currentState.hasSnapshot": "存在可信恢复快照",
	"recovery.currentState.noSnapshot": "无可信恢复快照",
	"recovery.snapshot.title": "恢复快照",
	"recovery.snapshot.id": "快照 ID",
	"recovery.snapshot.createdAt": "快照时间",
	"recovery.snapshot.operationType": "快照操作",
	"recovery.snapshot.verdict": "快照校验",
	"recovery.snapshot.verdict.trusted": "可信（与本次操作绑定）",
	"recovery.snapshot.verdict.manual": "手动/本地快照（本次操作外）",
	"recovery.snapshot.verdict.legacy": "旧快照（需显式确认）",
	"recovery.snapshot.verdict.wrongEnv": "环境不匹配",
	"recovery.snapshot.verdict.corrupt": "损坏",
	"recovery.snapshot.verdict.invalid": "非法",
	"recovery.snapshot.verdict.unsafe": "路径不安全",
	"recovery.snapshot.verdict.unknown": "未知",
	"recovery.environment.title": "环境",
	"recovery.environment.compatible": "环境匹配",
	"recovery.environment.incompatible": "环境不匹配（可能来自其他机器/安装）",
	"recovery.preview.title": "恢复预览",
	"recovery.preview.hint": "以下为只读预览（零写入）。确认后才会执行恢复。",
	"recovery.preview.loading": "正在生成预览…",
	"recovery.preview.empty": "该操作无可用恢复动作（或全部跳过）。",
	"recovery.preview.action": "动作",
	"recovery.preview.detail": "说明",
	"recovery.preview.summary": "将执行 {count} 个动作",
	"recovery.confirm.title": "确认恢复",
	"recovery.confirm.message": "恢复/回滚是危险操作。确认执行？系统会先把当前文件备份到一个安全位置。",
	"recovery.confirm.rollbackContinue": "继续完成刚才中断的撤销（已完成的部分会自动跳过，不重复执行）。",
	"recovery.confirm.retry": "验证失败后重试恢复。确认再次执行？",
	"recovery.confirm.dismiss": "放弃恢复？该操作会被隔离保存，相关快照与操作记录会保留，但不会自动恢复。",
	"recovery.confirm.dismissTitle": "放弃恢复",
	"recovery.execute": "执行恢复",
	"recovery.executing": "恢复执行中…",
	"recovery.retry": "重试",
	"recovery.retrying": "重试中…",
	"recovery.verify": "验证",
	"recovery.verifying": "验证中…",
	"recovery.dismiss": "放弃恢复",
	"recovery.dismissing": "放弃中…",
	"recovery.continue": "续跑",
	"recovery.verify.title": "验证结果",
	"recovery.verify.details": "检查明细",
	"recovery.verify.manualHints": "需人工处理",
	"recovery.verify.verdict.match": "验证通过：目标状态与可信快照匹配",
	"recovery.verify.verdict.partial": "验证通过（部分匹配）：核心状态匹配，但存在无法自动验证的项",
	"recovery.verify.verdict.mismatch": "验证失败：目标状态与可信快照不匹配，恢复未完成",
	"recovery.verify.verdict.error": "验证错误：无法可靠完成验证，恢复未完成",
	"recovery.verify.terminal.rolledBack": "已回滚",
	"recovery.verify.terminal.recovered": "已恢复",
	"recovery.verify.terminal.needsAttention": "需要人工处理",
	"recovery.completed": "恢复完成",
	"recovery.completed.rolledBack": "已回滚并验证通过",
	"recovery.completed.recovered": "已恢复并验证通过",
	"recovery.needsAttention.title": "需要人工处理",
	"recovery.needsAttention.hint": "恢复未能完成或验证失败。请查看原因，可重试或放弃。",
	"recovery.empty": "暂无需要处理的恢复事项。",
	"recovery.loading": "正在检查恢复状态…",
	"recovery.error": "恢复状态加载失败",
	"recovery.actionError": "操作失败",
	"recovery.running": "恢复任务进行中",
	"recovery.runningHint": "恢复/回滚正在执行，请勿关闭页面。",
	"recovery.lock.title": "残留配置锁",
	"recovery.lock.detailStale": "检测到上次异常退出的配置锁（其持有进程已不存在）。该锁不会自动清除：重试或重启 DSH 都不会恢复，必须在此显式回收，回收后所有操作立即恢复。",
	"recovery.lock.detailUnknown": "配置锁状态无法可靠判定（可能是崩溃残留）。回收前会再次确认其持有进程确已不存在；无法确认时不会删除任何内容。",
	"recovery.lock.action": "回收残留锁",
	"recovery.lock.busy": "正在回收…",
	"recovery.lock.done": "已回收残留配置锁，操作已恢复",
	"recovery.lock.refused": "未判定为残留锁，已拒绝回收（未做任何改动）",
	"recovery.lock.confirmTitle": "回收残留配置锁",
	"recovery.lock.confirmMessage": "将再次确认该锁的持有进程确已不存在，然后原子移除这把锁。若无法确认（例如锁仍被活跃进程持有），操作会被拒绝且不做任何改动。"
};
const en$1 = {
	"common.cancel": "Cancel",
	"common.retry": "Retry",
	"common.unknownError": "Unknown error",
	"view.recovery": "Recovery",
	"recovery.banner": "Configuration changes are protected: there is an unfinished recovery item. Resolve it before continuing.",
	"recovery.bannerAction": "Go to recovery",
	"recovery.required": "Recovery Required",
	"recovery.requiredHint": "An operation did not complete normally. To stay safe, all config-modifying operations are paused. Handle the recovery item(s) below to restore normal operation.",
	"recovery.rollbackRecommended": "Rollback recommended",
	"recovery.rollbackContinue": "Continue rollback",
	"recovery.inProgress": "Recovery in progress",
	"recovery.verified": "Verified",
	"recovery.partialMatch": "Partial match",
	"recovery.mismatch": "Mismatch",
	"recovery.verificationError": "Verification error",
	"recovery.needsAttention": "Needs attention",
	"recovery.manualActionRequired": "Manual action required",
	"recovery.incident.title": "What happened",
	"recovery.incident.operationId": "Operation ID",
	"recovery.incident.operationType": "Operation type",
	"recovery.incident.createdAt": "Occurred at",
	"recovery.incident.reason": "Reason",
	"recovery.incident.decision": "Recommendation",
	"recovery.incident.state": "State",
	"recovery.incident.state.recovering": "Recovering",
	"recovery.incident.state.needsAttention": "Manual action needed",
	"recovery.incident.state.rolledBack": "Rolled back",
	"recovery.incident.state.recovered": "Recovered",
	"recovery.incident.state.committed": "Completed",
	"recovery.incident.state.unknown": "Unknown",
	"recovery.decision.unknown": "Unknown",
	"recovery.verify.verdict.unknown": "Unknown",
	"recovery.currentState.title": "Current state",
	"recovery.currentState.safeMode": "Safe mode active (config-modifying operations paused)",
	"recovery.currentState.hasSnapshot": "Trusted recovery snapshot available",
	"recovery.currentState.noSnapshot": "No trusted recovery snapshot",
	"recovery.snapshot.title": "Recovery snapshot",
	"recovery.snapshot.id": "Snapshot ID",
	"recovery.snapshot.createdAt": "Snapshot time",
	"recovery.snapshot.operationType": "Snapshot operation",
	"recovery.snapshot.verdict": "Snapshot validation",
	"recovery.snapshot.verdict.trusted": "Trusted (bound to this operation)",
	"recovery.snapshot.verdict.manual": "Manual / local (outside this operation)",
	"recovery.snapshot.verdict.legacy": "Legacy snapshot (explicit confirmation required)",
	"recovery.snapshot.verdict.wrongEnv": "Environment mismatch",
	"recovery.snapshot.verdict.corrupt": "Corrupt",
	"recovery.snapshot.verdict.invalid": "Invalid",
	"recovery.snapshot.verdict.unsafe": "Unsafe path",
	"recovery.snapshot.verdict.unknown": "Unknown",
	"recovery.environment.title": "Environment",
	"recovery.environment.compatible": "Environment matches",
	"recovery.environment.incompatible": "Environment mismatch (may be from another machine / install)",
	"recovery.preview.title": "Recovery preview",
	"recovery.preview.hint": "Read-only preview below (zero writes). Recovery only runs after confirmation.",
	"recovery.preview.loading": "Generating preview…",
	"recovery.preview.empty": "No restorable actions for this operation (or all skipped).",
	"recovery.preview.action": "Action",
	"recovery.preview.detail": "Detail",
	"recovery.preview.summary": "Will execute {count} action(s)",
	"recovery.confirm.title": "Confirm recovery",
	"recovery.confirm.message": "Recovery / rollback is a dangerous operation. Confirm execution? Current files are backed up to a safe location first.",
	"recovery.confirm.rollbackContinue": "Continue the interrupted rollback (already-completed parts are skipped and not redone).",
	"recovery.confirm.retry": "Retry recovery after verification failure. Confirm running it again?",
	"recovery.confirm.dismiss": "Abandon recovery? The operation will be set aside (quarantined), and the related snapshot and operation records are kept, but it will not be auto-recovered.",
	"recovery.confirm.dismissTitle": "Abandon recovery",
	"recovery.execute": "Execute recovery",
	"recovery.executing": "Recovering…",
	"recovery.retry": "Retry",
	"recovery.retrying": "Retrying…",
	"recovery.verify": "Verify",
	"recovery.verifying": "Verifying…",
	"recovery.dismiss": "Abandon recovery",
	"recovery.dismissing": "Abandoning…",
	"recovery.continue": "Continue",
	"recovery.verify.title": "Verification result",
	"recovery.verify.details": "Check details",
	"recovery.verify.manualHints": "Manual action needed",
	"recovery.verify.verdict.match": "Verified: target state matches the trusted snapshot",
	"recovery.verify.verdict.partial": "Verified (partial match): core state matches, but some items could not be auto-verified",
	"recovery.verify.verdict.mismatch": "Verification failed: target state does not match the trusted snapshot; recovery incomplete",
	"recovery.verify.verdict.error": "Verification error: could not reliably complete verification; recovery incomplete",
	"recovery.verify.terminal.rolledBack": "Rolled back",
	"recovery.verify.terminal.recovered": "Recovered",
	"recovery.verify.terminal.needsAttention": "Needs attention",
	"recovery.completed": "Recovery complete",
	"recovery.completed.rolledBack": "Rolled back and verified",
	"recovery.completed.recovered": "Recovered and verified",
	"recovery.needsAttention.title": "Needs attention",
	"recovery.needsAttention.hint": "Recovery could not complete or verification failed. Review the reason, then retry or abandon.",
	"recovery.empty": "No recovery items to handle.",
	"recovery.loading": "Checking recovery status…",
	"recovery.error": "Failed to load recovery status",
	"recovery.actionError": "Operation failed",
	"recovery.running": "Recovery task in progress",
	"recovery.runningHint": "Recovery / rollback is running; keep this page open.",
	"recovery.lock.title": "Stale config lock",
	"recovery.lock.detailStale": "A config lock left behind by an earlier abnormal exit was detected (its owning process no longer exists). It is never cleared automatically: retrying or restarting DSH will not help — recover it here explicitly, and every operation resumes immediately afterwards.",
	"recovery.lock.detailUnknown": "The config lock state cannot be determined reliably (possibly a crash remnant). Before recovering, the owner process is re-verified as definitely gone; if that cannot be proven, nothing is deleted.",
	"recovery.lock.action": "Recover stale lock",
	"recovery.lock.busy": "Recovering…",
	"recovery.lock.done": "Stale config lock recovered; operations restored",
	"recovery.lock.refused": "Not confirmed as a stale lock — recovery refused (nothing was changed)",
	"recovery.lock.confirmTitle": "Recover stale config lock",
	"recovery.lock.confirmMessage": "The owning process will be re-verified as definitely gone, then the lock is removed atomically. If that cannot be confirmed (for example the lock is still held by a live process), the action is refused and nothing is changed."
};
//#endregion
//#region src/client/lifecycle/lifecycle-api.ts
/**
* 灾备（Phase 1）浏览器半数据入口：/api/dsh-config-manager/{lifecycle,crash,rescue} 的类型化 fetch 封装。
*
* 端点契约（Host 半 src/index.ts 的 makeRoutes 按此实现）：
* ```
* GET  /api/dsh-config-manager/lifecycle/status  → LifecycleStatus（含快照列表）
* POST /api/dsh-config-manager/lifecycle/snapshot → { ok, id, kind, totalBytes }
* POST /api/dsh-config-manager/lifecycle/undo    → LifecycleOutcome
* POST /api/dsh-config-manager/lifecycle/redo    → LifecycleOutcome
* POST /api/dsh-config-manager/lifecycle/remove  → { ok, removed }
* GET  /api/dsh-config-manager/crash             → CrashReport
* GET  /api/dsh-config-manager/rescue            → RescueStatus
* POST /api/dsh-config-manager/rescue            → RescueActionResult（body: {action:'on',confirm:true} | {action:'off'}）
* ```
*
* 安全约束：本文件不 import 任何 node 模块（纯浏览器 bundle）；错误文本由 Host 侧
* 已脱敏，UI 侧再经 ErrorBanner 兜底。`undo` / `redo` / `rescue` 属高风险动作，
* 请求体绝不自动置 confirm —— 由调用方经显式确认弹窗后传入。
*/
/** 端点常量（与 Host 半 src/index.ts 的 API.lifecycle / API.crash / API.rescue 保持一致）。 */
const LIFECYCLE_API = {
	base: "/api/dsh-config-manager/lifecycle",
	status: "/api/dsh-config-manager/lifecycle/status",
	snapshot: "/api/dsh-config-manager/lifecycle/snapshot",
	undo: "/api/dsh-config-manager/lifecycle/undo",
	redo: "/api/dsh-config-manager/lifecycle/redo",
	remove: "/api/dsh-config-manager/lifecycle/remove",
	crash: "/api/dsh-config-manager/crash",
	rescue: "/api/dsh-config-manager/rescue"
};
/**
* 请求超时：撤销/重做要回放全部分区（含插件安装），比普通查询慢得多；
* 与 recovery 的 5 分钟对齐，确保宿主卡死时 UI 拿到明确错误而不是永远转圈。
*/
const LIFECYCLE_TIMEOUT_MS = 3e5;
/** 超时文案（与既有 export/sync/recovery 同一形态，携带分钟数）。 */
function timeoutMessage(t) {
	return t("error.lifecycleTimeout", { minutes: String(Math.round(LIFECYCLE_TIMEOUT_MS / 6e4)) });
}
/** 解析 JSON 响应；非 2xx 抛出带路由 error 消息的 ConfigManagerApiError。 */
async function readJson(response, t) {
	const notMountedMessage = t("error.notMounted");
	let body;
	try {
		body = await response.json();
	} catch {
		if (response.status === 404) throw new ConfigManagerApiError(notMountedMessage);
		throw new ConfigManagerApiError(t("error.httpInvalidJson", { status: String(response.status) }));
	}
	if (!response.ok) throw new ConfigManagerApiError(typeof body === "object" && body !== null && typeof body.message === "string" ? body.message : typeof body === "object" && body !== null && typeof body.error === "string" ? body.error : response.status === 404 ? notMountedMessage : `HTTP ${response.status}`);
	return body;
}
/** GET 请求（带超时：宿主卡死时 UI 拿到明确错误而不是永远转圈）。 */
async function getJson(path, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), LIFECYCLE_TIMEOUT_MS);
	try {
		return await readJson(await fetch(path, { signal: controller.signal }), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(timeoutMessage(t));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/** POST JSON 请求（带超时；体内容由调用方决定，本层不注入任何隐式确认）。 */
async function postJson(path, body, t) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), LIFECYCLE_TIMEOUT_MS);
	try {
		return await readJson(await fetch(path, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body),
			signal: controller.signal
		}), t);
	} catch (err) {
		if (controller.signal.aborted) throw new ConfigManagerApiError(timeoutMessage(t));
		throw err;
	} finally {
		clearTimeout(timer);
	}
}
/** 灾备浏览器半数据入口。 */
var LifecycleApi = class {
	t;
	constructor(t = zhUiT) {
		this.t = t;
	}
	/** GET /lifecycle/status：撤销/重做可用性 + 快照列表 + 自动快照状态。 */
	async status() {
		return getJson(LIFECYCLE_API.status, this.t);
	}
	/** POST /lifecycle/snapshot：立即保存一份手动快照。 */
	async snapshot(req = {}) {
		const body = {};
		if (req.reason !== void 0 && req.reason !== "") body["reason"] = req.reason;
		if (req.note !== void 0) body["note"] = req.note;
		if (req.tags !== void 0) body["tags"] = req.tags;
		return postJson(LIFECYCLE_API.snapshot, body, this.t);
	}
	/**
	* POST /lifecycle/undo：回退到内容不同的最近快照。
	* 引擎会在撤销前自动落一份「撤销前存档」，因此该动作可重做。
	*/
	async undo() {
		return postJson(LIFECYCLE_API.undo, {}, this.t);
	}
	/** POST /lifecycle/redo：重做上一次撤销（仅当撤销后没有新变更时可成功）。 */
	async redo() {
		return postJson(LIFECYCLE_API.redo, {}, this.t);
	}
	/** POST /lifecycle/remove：删除单个配置状态快照。 */
	async remove(id) {
		return postJson(LIFECYCLE_API.remove, { id }, this.t);
	}
	/** GET /crash：上次启动是否异常 + 归因 + 建议动作 + 最后正常快照 id。 */
	async crash() {
		return getJson(LIFECYCLE_API.crash, this.t);
	}
	/** GET /rescue：救援模式状态。 */
	async rescueStatus() {
		return getJson(LIFECYCLE_API.rescue, this.t);
	}
	/**
	* POST /rescue {action:'on', confirm:true}：进入救援模式。
	* confirm 必须由调用方在显式确认弹窗后传入 —— 本层绝不代填。
	*/
	async rescueOn() {
		return postJson(LIFECYCLE_API.rescue, {
			action: "on",
			confirm: true
		}, this.t);
	}
	/** POST /rescue {action:'off'}：退出救援模式（从备份还原）。 */
	async rescueOff() {
		return postJson(LIFECYCLE_API.rescue, { action: "off" }, this.t);
	}
};
//#endregion
//#region src/client/history/history-locales.ts
const zh = {
	"view.history": "迁移历史",
	"history.title": "迁移与审计历史",
	"history.subtitle": "统一记录全部破坏性/迁移操作（导入/恢复/回滚/档案/同步/定时备份/快照操作），只可追加、不可修改或删除，跨重启持久，可查询可导出。",
	"history.empty": "暂无迁移记录。执行导入、恢复、档案切换、同步应用或定时备份后，这里会出现审计记录。",
	"history.loading": "加载迁移历史…",
	"history.corruptedBanner": "检测到无法读取/可能被篡改的历史条目",
	"history.corruptedCount": "{count} 条已被跳过（不计入导出）",
	"history.stats.total": "总数",
	"history.stats.success": "成功",
	"history.stats.failed": "失败",
	"history.stats.skipped": "跳过",
	"history.filter.kind": "操作类型",
	"history.filter.result": "结果",
	"history.filter.recent": "时间范围",
	"history.filter.recent.all": "全部",
	"history.filter.recent.50": "最近 50 条",
	"history.filter.recent.200": "最近 200 条",
	"history.filter.sections": "涉及分区",
	"history.filter.title": "筛选与导出",
	"history.search.placeholder": "搜索摘要 / 错误 / 分区…",
	"history.export.json": "导出 JSON",
	"history.export.markdown": "导出 Markdown",
	"history.exported": "已导出",
	"history.exporting": "导出中…",
	"history.exportError": "导出失败",
	"history.loadError": "加载迁移历史失败",
	"history.reload": "重新加载",
	"history.table.time": "时间",
	"history.table.kind": "操作",
	"history.table.result": "结果",
	"history.table.sections": "涉及分区",
	"history.table.summary": "摘要",
	"history.updatedAt": "更新于",
	"history.refresh": "刷新",
	"history.kind.import": "导入",
	"history.kind.restore": "快照恢复",
	"history.kind.rollback": "回滚",
	"history.kind.profile-switch": "档案切换",
	"history.kind.profile-delete": "档案删除",
	"history.kind.profile-rename": "档案重命名",
	"history.kind.profile-save": "档案保存",
	"history.kind.profile-import": "档案导入",
	"history.kind.sync-apply": "一键同步应用",
	"history.kind.autosync": "自动同步",
	"history.kind.recovery": "恢复/回滚编排",
	"history.kind.backup": "定时备份",
	"history.kind.snapshot-delete": "快照删除",
	"history.kind.snapshot-prune": "快照保留清理",
	"history.result.success": "成功",
	"history.result.failed": "失败",
	"history.result.skipped": "跳过"
};
const en = {
	"view.history": "Migration History",
	"history.title": "Migration & Audit History",
	"history.subtitle": "Unified append-only audit trail of all destructive/migration operations (import/restore/rollback/profile/sync/backup/snapshot), durable across restarts, queryable and exportable.",
	"history.empty": "No migration records yet. Executing an import, restore, profile switch, sync apply, or scheduled backup will create audit entries here.",
	"history.loading": "Loading migration history…",
	"history.corruptedBanner": "Detected unreadable or possibly tampered history entries",
	"history.corruptedCount": "{count} entry(s) were skipped (excluded from export)",
	"history.stats.total": "Total",
	"history.stats.success": "Success",
	"history.stats.failed": "Failed",
	"history.stats.skipped": "Skipped",
	"history.filter.kind": "Operation",
	"history.filter.result": "Result",
	"history.filter.recent": "Time range",
	"history.filter.recent.all": "All",
	"history.filter.recent.50": "Latest 50",
	"history.filter.recent.200": "Latest 200",
	"history.filter.sections": "Sections",
	"history.filter.title": "Filter & export",
	"history.search.placeholder": "Search summary / error / section…",
	"history.export.json": "Export JSON",
	"history.export.markdown": "Export Markdown",
	"history.exported": "Exported",
	"history.exporting": "Exporting…",
	"history.exportError": "Export failed",
	"history.loadError": "Failed to load migration history",
	"history.reload": "Reload",
	"history.table.time": "Time",
	"history.table.kind": "Operation",
	"history.table.result": "Result",
	"history.table.sections": "Sections",
	"history.table.summary": "Summary",
	"history.updatedAt": "Updated",
	"history.refresh": "Refresh",
	"history.kind.import": "Import",
	"history.kind.restore": "Snapshot restore",
	"history.kind.rollback": "Rollback",
	"history.kind.profile-switch": "Profile switch",
	"history.kind.profile-delete": "Profile delete",
	"history.kind.profile-rename": "Profile rename",
	"history.kind.profile-save": "Profile save",
	"history.kind.profile-import": "Profile import",
	"history.kind.sync-apply": "Sync apply",
	"history.kind.autosync": "Autosync",
	"history.kind.recovery": "Recovery/rollback",
	"history.kind.backup": "Scheduled backup",
	"history.kind.snapshot-delete": "Snapshot delete",
	"history.kind.snapshot-prune": "Snapshot retention",
	"history.result.success": "Success",
	"history.result.failed": "Failed",
	"history.result.skipped": "Skipped"
};
//#endregion
//#region src/client/index.ts
/** 本插件拥有的 locale namespace。 */
const NS = "config-manager";
/** 远程同步设置区块的独立 locale namespace（独立字典文件，不与共享 locales.ts 冲突）。 */
const SYNC_NS = "config-manager-sync";
/** 配置市场区块的独立 locale namespace（m-market-ui）。 */
const MARKET_NS = "config-manager-market";
/** Recovery 区块的独立 locale namespace（Phase 5）。 */
const RECOVERY_NS = "config-manager-recovery";
/** Migration History 区块的独立 locale namespace（Phase 6）。 */
const HISTORY_NS = "config-manager-history";
/** 必需服务（fiber inject 等待 —— slots/locale 必须先就绪）。 */
const inject = ["slots", "locale"];
/**
* 注册 Config Manager 设置页。
* @param ctx - client root context（slots + locale 服务）。
*/
function apply(ctx) {
	ctx.effect(() => ctx.locale.register(NS, {
		zh: zh$4,
		en: en$4
	}), "config-manager: dictionaries");
	ctx.effect(() => ctx.locale.register(SYNC_NS, {
		zh: zh$3,
		en: en$3
	}), "config-manager: sync dictionaries");
	ctx.effect(() => ctx.locale.register(MARKET_NS, {
		zh: zh$2,
		en: en$2
	}), "config-manager: market dictionaries");
	ctx.effect(() => ctx.locale.register(RECOVERY_NS, {
		zh: zh$1,
		en: en$1
	}), "config-manager: recovery dictionaries");
	ctx.effect(() => ctx.locale.register(HISTORY_NS, {
		zh,
		en
	}), "config-manager: history dictionaries");
	const t = ctx.locale.bind(NS);
	const uiT = makeUiT(ctx.locale.getLocale().active === "en" ? "en" : "zh");
	const api = new ConfigManagerApi(uiT);
	const syncT = ctx.locale.bind(SYNC_NS);
	const syncApi = new SyncApi(uiT);
	const marketT = ctx.locale.bind(MARKET_NS);
	const marketApi = new MarketApi(uiT);
	const myConfigsApi = new MyConfigsApi(uiT);
	const recoveryT = ctx.locale.bind(RECOVERY_NS);
	const recoveryApi = new RecoveryApi(uiT);
	const historyT = ctx.locale.bind(HISTORY_NS);
	const historyApi = new HistoryApi(uiT);
	const lifecycleApi = new LifecycleApi(uiT);
	ctx.slots.inject("settings.section", () => ctx.slots.register({
		name: "settings.section",
		id: "config-manager",
		order: 60,
		label: () => t("section.label"),
		locale: NS,
		inject: () => ({
			api,
			syncApi,
			syncT,
			marketApi,
			marketT,
			myConfigsApi,
			recoveryApi,
			recoveryT,
			historyApi,
			historyT,
			lifecycleApi
		})
	}, ConfigManagerSection));
}
//#endregion
exports.apply = apply;
exports.inject = inject;


		return module.exports;
	}
});
//# sourceMappingURL=client.js.map