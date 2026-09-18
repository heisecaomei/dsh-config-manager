import type { MsgFunc } from '../core/messages.ts';
import type { WorkspacesSection } from '../schema/types.ts';
import type { ApplyResult, ConfigAdapter, ExportOptions, ExportSection, HostContext, ImportContext, PlanItem, ValidationResult } from '../core/types.ts';
export declare class WorkspacesAdapter implements ConfigAdapter<WorkspacesSection> {
    readonly id: 'workspaces';
    readonly displayName = "Workspaces";
    readonly defaultIncluded = true;
    readonly portability: 'platformSpecific';
    /**
     * 选择性可移植（syncOptIn）：工作区记录含**绝对路径**，且目标机路径通常不同，
     * 因此不参与默认同步；只有用户在「远程同步 → 高级 → 分区勾选」里显式勾选
     * 「Workspaces」时，才随同步通道带走 id / 标题 / 绝对路径 / 会话 id 列表。
     */
    readonly syncOptIn = true;
    export(ctx: HostContext, _options: ExportOptions): Promise<ExportSection<WorkspacesSection>>;
    analyzeImport(data: WorkspacesSection, ctx: ImportContext): Promise<PlanItem[]>;
    applyItem(item: PlanItem, ctx: ImportContext): Promise<ApplyResult>;
    validate(data: WorkspacesSection, msg?: MsgFunc): Promise<ValidationResult>;
}
