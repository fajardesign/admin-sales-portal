import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Drawer, DrawerHeader, LinkButton, Select, StatusBadge } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, assignTl, releaseTl, storeTlHistory, tlCandidates, tlMapping } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { areaName } from '../../lib/constants.js';
import { formatDate, formatDateTime } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { AreaSelect } from './aplCommon.jsx';
import { useAplScope } from './aplPeriod.js';

/**
 * 1.7 APL Mapping TL (PRD Scope 1 v1.1): toko aktif di area APL per partner dengan TL dan SA/SR tiap toko; APL menugaskan TL
 * ke satu atau banyak toko dan melepas TL. Satu toko satu TL; toko dalam satu partner boleh dipegang TL berbeda.
 * Filter area, TL, dan cari disimpan di URL.
 */
export function AplMappingTl(props) {
  const { tableState } = useScenario();
  return <AplMappingTlView key={tableState} {...props} />;
}

function AplMappingTlView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const areaIds = useAplScope(user, query);
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [v, setV] = useState(0);
  const [picked, setPicked] = useState(() => new Set());
  const [assign, setAssign] = useState(null); // [storeId]
  const [release, setRelease] = useState(null); // toko
  const [history, setHistory] = useState(null); // toko
  const set = (patch) => navigate(withQuery('/apl/mapping-tl', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    tlMapping(user, areaIds, { tl: q.tl, q: q.q }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); setPicked(new Set()); }, [areaIds.join(), q.tl, q.q, v]);
  const sm = data?.summary;
  const val = (x) => (sm ? String(x) : '…');
  const toggle = (id) => setPicked((c) => { const n = new Set(c); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const done = () => { setAssign(null); setRelease(null); setV((x) => x + 1); };

  const flat = (data?.rows ?? []).flatMap((p) => [{ ...p, type: 'partner', key: p.id }, ...p.stores.map((s) => ({ ...s, type: 'store', key: s.id }))]);
  const stop = (node) => <span role="presentation" onClick={(e) => e.stopPropagation()}>{node}</span>;
  const columns = [
    { key: 'pick', header: '', render: (r) => (r.type === 'store' && r.tlId == null
      ? { misc: true, children: stop(<label style={{ display: 'flex' }} aria-label={`Pilih ${r.name}`}><Checkbox checked={picked.has(r.id)} onChange={() => toggle(r.id)} /></label>) } : '') },
    { key: 'name', header: 'Partner / Toko', render: (r) => (r.type === 'partner'
      ? { priority: 'leading', title: r.name, description: `${r.storeCount} toko · ${areaName(r.areaId)} · ${r.tlCount} TL` }
      : { priority: 'regular', title: <span style={{ paddingLeft: 'var(--space-24)', display: 'block' }}>{r.name}</span>, description: <span style={{ paddingLeft: 'var(--space-24)', display: 'block' }}>{r.primary ? 'Toko Utama' : 'Toko Tambahan'}{r.code ? ` · ${r.code}` : ''}</span> }) },
    { key: 'ref', header: 'Kode Referral', render: (r) => (r.type === 'store' ? nowrap(r.referralCode ?? '-') : '') },
    { key: 'tl', header: 'TL', render: (r) => (r.type !== 'store' ? '' : r.tlId != null
      ? { priority: 'regular', title: nowrap(r.tl), description: `sejak ${formatDate(r.tlSince)}` }
      : { misc: true, children: <StatusBadge status="pending">Belum ada TL</StatusBadge> }) },
    { key: 'sales', header: 'SA/SR', render: (r) => (r.type !== 'store' ? '' : r.tlId == null ? '-' : r.sales.join(', ') || 'Belum ditugaskan TL') },
    { key: 'act', header: 'Aksi', render: (r) => (r.type !== 'store' ? '' : { misc: true, children: stop(r.tlId == null
      ? <Button size="2xs" onClick={() => setAssign([r.id])}>Tugaskan TL</Button>
      : <Button size="2xs" variant="stroke" tone="error" onClick={() => setRelease(r)}>Lepas TL</Button>) }) },
  ];

  return (
    <AdminShell active="/apl/mapping-tl" icon="UserAddLine" title="Mapping TL" description="Tugaskan TL ke toko di area Anda. Satu toko dipegang satu TL; toko dalam satu partner boleh dipegang TL berbeda." user={user} onLogout={onLogout}>
      <StatGrid min={220}>
        <StatCard icon="TeamLine" color="purple" label="TL di bawah Anda" value={val(sm?.tlUnder)}
          hint={sm ? [...sm.tlByArea.map((a) => `${areaName(a.areaId)} ${a.count}`), ...(sm.tlInactive ? [`${sm.tlInactive} belum aktif`] : [])].join(' · ') || 'Belum ada TL aktif' : undefined}
          onClick={() => navigate(withQuery('/apl/tim', { role: 'TL', area: q.area }))} />
        <StatCard icon="ShoppingBagLine" color="blue" label="Toko aktif" value={val(sm?.stores)} />
        <StatCard icon="ErrorWarningFill" color="orange" label="Toko belum ada TL" value={val(sm?.noTl)} hint="Klik untuk menyaring" onClick={() => set({ tl: 'none' })} />
        <StatCard icon="UserLine" color="teal" label="Toko tanpa SA/SR" value={val(sm?.noSales)} hint="TL ada, SA/SR belum ditugaskan" />
      </StatGrid>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <AreaSelect path="/apl/mapping-tl" query={query} user={user} />
        <div style={{ width: 220 }}>
          <Select size="sm" value={q.tl ?? ''} placeholder="Semua toko" onChange={(x) => set({ tl: x })}
            options={[{ value: '', label: 'Semua toko' }, { value: 'none', label: 'Belum ada TL' }, ...(data?.tlOptions ?? [])]} />
        </div>
        <SearchField placeholder="Cari partner, toko, atau kode" value={q.q ?? ''} onChange={(x) => set({ q: x })} />
      </div>
      {picked.size > 0 && (
        <div role="region" aria-label="Toko dipilih" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', padding: 'var(--space-10) var(--space-16)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-weak-50)', boxShadow: 'var(--shadow-stroke)' }}>
          <span style={{ flex: 1, font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{picked.size} toko dipilih</span>
          <LinkButton size="sm" onClick={() => setPicked(new Set())}>Batalkan pilihan</LinkButton>
          <Button size="sm" onClick={() => setAssign([...picked])}>Tugaskan TL</Button>
        </div>
      )}
      <ListCard view={view} onRetry={() => load(true)}
        emptyMessage={q.q || q.tl ? 'Tidak ada toko yang sesuai dengan pencarian atau filter.' : 'Belum ada toko aktif di area Anda.'}>
        {(view === 'data' || view === 'loading') && (
          <DataTable loading={view === 'loading'} rows={view === 'data' ? flat : []} rowKey={(r) => r.key} columns={columns} minWidth={1100}
            onRowClick={(r) => r.type === 'store' && setHistory(r)} />
        )}
      </ListCard>
      {assign && <AssignTlModal storeIds={assign} user={user} onClose={() => setAssign(null)} onDone={() => { setPicked(new Set()); done(); }} onStale={done} />}
      {release && <ReleaseTlModal store={release} user={user} onClose={() => setRelease(null)} onDone={done} />}
      {history && <TlHistoryDrawer store={history} onClose={() => setHistory(null)} />}
    </AdminShell>
  );
}

/** SCR-TM-02 Tugaskan TL: satu atau banyak toko dari satu area; hanya TL Active di area itu. */
function AssignTlModal({ storeIds, user, onClose, onDone, onStale }) {
  const toast = useToast();
  const [tlId, setTlId] = useState('');
  const [busy, setBusy] = useState(false);
  const { areaId, options } = tlCandidates(storeIds);
  const many = storeIds.length > 1;
  async function save() {
    if (!tlId) return;
    setBusy(true);
    try {
      const r = await assignTl(storeIds, tlId, user);
      toast('success', `${r.tl} ditugaskan ke ${r.count} toko. Notifikasi dikirim ke aplikasi mobile.`);
      onDone();
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'STALE') { toast('error', `${e.field} sudah punya TL. Muat ulang daftar.`); onStale(); } else toast('error', 'Gagal menugaskan TL. Coba lagi.');
    }
  }
  return (
    <ActionModal open onClose={onClose} title={many ? `Tugaskan TL ke ${storeIds.length} toko` : 'Tugaskan TL'} icon="UserAddLine"
      confirmLabel="Tugaskan" busy={busy} onConfirm={save} confirmDisabled={!tlId || areaId == null || options.length === 0}>
      {areaId == null
        ? <Alert status="error" size="sm" title="Pilih toko dari satu area saja." />
        : options.length === 0
          ? <Alert status="error" size="sm" title="Belum ada TL aktif di area ini." />
          : <Select label="TL" required placeholder="Pilih TL" value={tlId || undefined} options={options} onChange={setTlId} hint={`Hanya TL aktif di area ${areaName(areaId)} yang bisa dipilih.`} />}
    </ActionModal>
  );
}

/** SCR-TM-03 Lepas TL: SA/SR toko itu ikut dilepas; toko kembali ke "Belum ada TL". */
function ReleaseTlModal({ store, user, onClose, onDone }) {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  async function save() {
    setBusy(true);
    try {
      await releaseTl(store.id, user);
      toast('success', 'TL dilepas. Toko kembali ke daftar Belum ada TL.');
      onDone();
    } catch {
      setBusy(false);
      toast('error', 'Gagal melepas TL. Coba lagi.');
    }
  }
  const sales = store.sales.map((x) => x.replace(/ \((SA|SR)\)$/, '')).join(', ');
  return (
    <ActionModal open onClose={onClose} title={`Lepas ${store.tl} dari ${store.name}?`} icon="SubtractLine" status="error"
      confirmLabel="Ya, lepas" confirmTone="error" busy={busy} onConfirm={save}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        {sales ? `${sales} juga akan dilepas dari toko ini. ` : ''}Toko kembali ke daftar &quot;Belum ada TL&quot;.
      </span>
    </ActionModal>
  );
}

/** SCR-TM-04 Riwayat TL: penugasan dan pelepasan TL serta SA/SR satu toko. */
function TlHistoryDrawer({ store, onClose }) {
  const rows = storeTlHistory(store.id);
  return (
    <Drawer open width={480} onClose={onClose} header={<DrawerHeader size="lg" title="Riwayat TL" description={`${store.name} · ${store.partnerName}`} icon="HistoryLine" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        {rows.length === 0 ? <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada riwayat TL.</span> : rows.map((e, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{e.text}</span>
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{e.by} · {formatDateTime(e.at)} · {e.source}</span>
          </div>
        ))}
      </div>
    </Drawer>
  );
}
