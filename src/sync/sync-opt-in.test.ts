/**
 * 选择性可移植分区（syncOptIn = workspaces / sessions）同步测试。
 *
 * 验收点：
 * - **安全边界不变**：默认模式（构造未注入 sections）恒不含 workspaces / sessions；
 * - 高级模式显式勾选后才纳入 —— 工作区 id / 标题 / 绝对路径 / 会话 id 列表完整带走；
 * - 会话内容按文件级复制进入快照（含内容本身，非仅记录）；
 * - push 请求临时携带的 sections 同样能启用 opt-in 分区；
 * - 其余 deviceSpecific / platformSpecific 分区（如 mcp）仍被拒绝并告警。
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { SyncEngine } from './sync-engine.ts';
import { computeSnapshotMeta } from './transport.ts';
import type { SyncSnapshot, SyncSnapshotMeta, SyncTransport } from './transport.ts';
import { createAdapters } from '../adapters/index.ts';
import { makeContext } from '../adapters/test-helpers.ts';
import type { SectionId } from '../schema/types.ts';

/** 内存 transport（只在 push 断言用，不做网络）。 */
class MemSyncTransport implements SyncTransport {
  readonly type = 'memory';
  snapshots = new Map<string, SyncSnapshot>();
  metas: SyncSnapshotMeta[] = [];
  async list(): Promise<SyncSnapshotMeta[]> { return [...this.metas]; }
  async upload(snapshot: SyncSnapshot): Promise<SyncSnapshotMeta> {
    this.snapshots.set(snapshot.id, snapshot);
    const meta = computeSnapshotMeta(snapshot);
    this.metas.push(meta);
    return meta;
  }
  async download(id: string): Promise<SyncSnapshot> {
    const s = this.snapshots.get(id);
    if (s === undefined) throw new Error(`快照不存在: ${id}`);
    return s;
  }
  async delete(id: string): Promise<void> {
    this.snapshots.delete(id);
    this.metas = this.metas.filter((m) => m.id !== id);
  }
}

const NS = ['general'];

function makeEngine(opts: {
  ctx: ReturnType<typeof makeContext>;
  transport: MemSyncTransport;
  stateDir: string;
  sections?: SectionId[];
}): SyncEngine {
  const adapters = createAdapters({ namespaces: NS, includeSessions: true });
  return new SyncEngine({
    ctx: opts.ctx,
    transport: opts.transport,
    stateDir: opts.stateDir,
    adapters,
    now: () => new Date('2026-08-16T12:00:00.000Z'),
    ...(opts.sections === undefined ? {} : { sections: opts.sections }),
  } as ConstructorParameters<typeof SyncEngine>[0]);
}

/** 源端种子：一份 portable 设置 + 一条工作区记录 + 一个会话文件。 */
async function seed(ctx: ReturnType<typeof makeContext>): Promise<void> {
  ctx.settings.ns.set('general', { value: { theme: 'dark' }, revision: 1, secrets: [] });
  await ctx.workspace.writeRecord({
    id: 'ws-1',
    path: 'C:\\Users\\alice\\proj',
    title: 'proj',
    sessionIds: ['s1'],
  } as Parameters<typeof ctx.workspace.writeRecord>[0]);
  await ctx.fs.writeFile('sessions/proj/s1.jsonl', Buffer.from('{"role":"user","content":"hi"}\n', 'utf8'));
}

async function withTmp(fn: (dir: string) => Promise<void>): Promise<void> {
  const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'dsh-sync-optin-'));
  try {
    await fn(tmp);
  } finally {
    await fs.rm(tmp, { recursive: true, force: true });
  }
}

test('opt-in：默认模式（未注入 sections）绝不含 workspaces / sessions', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    const engine = makeEngine({ ctx, transport, stateDir: tmp });

    const report = await engine.push({ snapshotId: 'default-1' });
    assert.equal(report.ok, true);
    assert.ok(report.sections.includes('settings'), 'portable 分区照常进入同步');
    assert.ok(!report.sections.includes('workspaces'), '默认模式不得包含 workspaces（绝对路径不上远端）');
    assert.ok(!report.sections.includes('sessions'), '默认模式不得包含 sessions（会话内容不上远端）');
  });
});

test('opt-in：显式勾选 workspaces + sessions 后进入同步，且工作区字段与会话内容完整', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    const engine = makeEngine({
      ctx, transport, stateDir: tmp,
      sections: ['settings', 'workspaces', 'sessions'],
    });

    const report = await engine.push({ snapshotId: 'optin-1' });
    assert.equal(report.ok, true);
    assert.ok(report.sections.includes('workspaces'), '勾选后 workspaces 进入同步');
    assert.ok(report.sections.includes('sessions'), '勾选后 sessions 进入同步');

    const uploaded = transport.snapshots.get('optin-1');
    assert.ok(uploaded, '快照已上传');
    const sections = uploaded.sections as unknown as Record<string, unknown>;

    const ws = sections['workspaces'] as { workspaces: { id: string; title?: string; path: string; sessionIds?: string[] }[] };
    assert.equal(ws.workspaces.length, 1);
    assert.equal(ws.workspaces[0]!.id, 'ws-1', '工作区 id 随同步带走');
    assert.equal(ws.workspaces[0]!.title, 'proj', '工作区标题随同步带走');
    assert.equal(ws.workspaces[0]!.path, 'C:\\Users\\alice\\proj', '工作区绝对路径随同步带走（供目标机路径映射）');
    assert.deepEqual(ws.workspaces[0]!.sessionIds, ['s1'], '工作区会话 id 列表随同步带走');

    const sess = sections['sessions'] as { files: { relativePath: string; data: Uint8Array }[] };
    assert.equal(sess.files.length, 1, '会话文件随同步带走');
    assert.equal(sess.files[0]!.relativePath, 'proj/s1.jsonl');
    assert.match(Buffer.from(sess.files[0]!.data).toString('utf8'), /"content":"hi"/, '会话内容本身进入快照');
  });
});

test('opt-in：只勾选 portable 分区时，opt-in 分区不搭便车', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    const engine = makeEngine({ ctx, transport, stateDir: tmp, sections: ['settings'] });

    const report = await engine.push({ snapshotId: 'settings-only' });
    assert.deepEqual(report.sections, ['settings'], '作用域内只有勾选的 settings');
  });
});

test('opt-in：push 请求携带 sections 也能启用（构造未注入作用域时）', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    const engine = makeEngine({ ctx, transport, stateDir: tmp });

    const report = await engine.push({ snapshotId: 'call-1', sections: ['workspaces'] });
    assert.deepEqual(report.sections, ['workspaces'], '仅勾选 workspaces 时只推 workspaces');
  });
});

test('opt-in：不可同步分区（mcp）仍被拒绝并告警', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    // 经 push 请求携带 sections：这条路径才会走到 pushTargets 的「逐项校验 + 告警」
    const engine = makeEngine({ ctx, transport, stateDir: tmp });

    const report = await engine.push({ snapshotId: 'mcp-1', sections: ['settings', 'mcp'] });
    assert.equal(report.ok, true);
    assert.ok(!report.sections.includes('mcp'), 'mcp 永不参与同步');
    assert.ok(report.warnings.some((w) => w.includes('mcp')), '不可同步分区应产生告警（不静默）');
  });
});

test('opt-in：注入作用域含不可同步分区时，静默按作用域裁剪（不误报）', async () => {
  await withTmp(async (tmp) => {
    const ctx = makeContext('win32', 'C:\\Users\\alice');
    await seed(ctx);
    const transport = new MemSyncTransport();
    const engine = makeEngine({ ctx, transport, stateDir: tmp, sections: ['settings', 'mcp'] });

    const report = await engine.push({ snapshotId: 'scope-1' });
    assert.equal(report.ok, true);
    assert.deepEqual(report.sections, ['settings'], '注入作用域里不可同步的分区被裁剪掉');
  });
});
