/**
 * sessions 分区 adapter（默认关，设计 §3.3/§15）：
 * 数据源 = ~/.dsh/sessions/<projectKey>/<sessionId>/…（zstd jsonl，含敏感信息）。
 * defaultIncluded=false：Quick Export 不包含，用户显式勾选才导出（v1 文件级复制）。
 * 研究报告 §4.9：DSH 无会话批量导出 API，逐会话文件复制是唯一通道。
 */
import { FileCollectionAdapter } from './file-collection.ts';
export declare class SessionsAdapter extends FileCollectionAdapter {
    readonly id: 'sessions';
    readonly displayName = "Sessions";
    readonly defaultIncluded = false;
    readonly portability: 'deviceSpecific';
    /**
     * 选择性可移植（syncOptIn）：会话文件体积大且含敏感内容，默认模式绝不参与同步；
     * 只有用户显式勾选「Sessions」时才随同步通道带走（文件级复制，含会话内容本身）。
     */
    readonly syncOptIn = true;
    readonly baseDir = "sessions";
}
