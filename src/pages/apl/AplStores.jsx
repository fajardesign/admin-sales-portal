import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Drawer, DrawerHeader, LinkButton, Select, StatusBadge } from '@ds/index.js';
import { ActionModal } from '../../components/ActionModal.jsx';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { MapPreview } from '../../components/MapPreview.jsx';
import { TlHistory } from '../../components/TlHistory.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { ApiError, aplStores, assignTl, releaseTl, tlCandidates } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { CHANNEL, ENTITY, areaName } from '../../lib/constants.js';
import { formatDate, formatPhone, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';

const openMap = (lat, lng) => window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank', 'noopener');

/**
 * APL · Toko Aktif (keputusan user 2026-10-17): menu Partner (B4) dan Mapping TL (1.7) digabung, sudut pandang toko seperti Toko
 * Aktif Admin; konflik dengan PRD (dua layar, daftar per partner) dicatat. Satu baris per toko dengan partner sebagai kolom;
 * APL menugaskan TL ke satu/banyak toko dan melepas TL. Klik baris: drawer toko (toko, partner, Riwayat TL). Filter di URL.
 * 2026-10-20: filter partner dan TL dihapus, diganti pencarian; "Belum ada TL" lewat kartu dan pengingat (?tl=none).
 */
export function AplStores(props) {
  const { tableState } = useScenario();
  return <AplStoresView key={tableState} {...props} />;
}

function AplStoresView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const canAssign = user.features.includes('TL_ASSIGNMENT');
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [v, setV] = useState(0);
  const [picked, setPicked] = useState(() => new Set());
  const [assign, setAssign] = useState(null); // [storeId]
  const [release, setRelease] = useState(null); // toko
  const [detail, setDetail] = useState(null); // toko
  const set = (patch) => navigate(withQuery('/apl/toko-aktif', { ...q, ...patch }));
  const key = JSON.stringify({ period, areaIds, partner: q.partner, tl: q.tl, channel: q.channel, s: q.q, v });
  const load = (retry) => {
    setView('loading');
    aplStores(user, areaIds, period, { partner: q.partner, tl: q.tl, channel: q.channel, q: q.q }, { retry })
      .then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); setPicked(new Set()); }, [key]);
  const sm = data?.summary;
  const val = (x) => (sm ? String(x) : '…');
  const toggle = (id) => setPicked((c) => { const n = new Set(c); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const done = () => { setAssign(null); setRelease(null); setV((x) => x + 1); };
  const stop = (node) => <span role="presentation" onClick={(e) => e.stopPropagation()}>{node}</span>;

  const columns = [
    ...(canAssign ? [{ key: 'pick', header: '', render: (r) => (r.tlId == null
      ? { misc: true, children: stop(<label style={{ display: 'flex' }} aria-label={`Pilih ${r.name}`}><Checkbox checked={picked.has(r.id)} onChange={() => toggle(r.id)} /></label>) } : '') }] : []),
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.primary ? 'Toko Utama' : 'Toko Tambahan'}${r.code ? ` · ${r.code}` : ''}` }) },
    { key: 'partner', header: 'Partner', render: (r) => ({ priority: 'regular', title: r.partner.name, description: `${areaName(r.partner.areaId)} · ${CHANNEL[r.partner.channel]}` }) },
    { key: 'ref', header: 'Kode Referral', render: (r) => nowrap(r.referralCode ?? '-') },
    { key: 'tl', header: 'TL', render: (r) => (r.tlId != null
      ? { priority: 'regular', title: nowrap(r.tl), description: `sejak ${formatDate(r.tlSince)}` }
      : { misc: true, children: <StatusBadge status="pending">Belum ada TL</StatusBadge> }) },
    { key: 'sales', header: 'SA/SR', render: (r) => (r.tlId == null ? '-' : r.sales.join(', ') || 'Belum ditugaskan TL') },
    { key: 'paid', header: 'Cair periode ini', align: 'right', render: (r) => nowrap(formatRp(r.paidOutAmount)) },
    ...(canAssign ? [{ key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: stop(r.tlId == null
      ? <Button size="2xs" onClick={() => setAssign([r.id])}>Tugaskan TL</Button>
      : <Button size="2xs" variant="stroke" tone="error" onClick={() => setRelease(r)}>Lepas TL</Button>) }) }] : []),
  ];

  return (
    <AdminShell active="/apl/toko-aktif" icon="ShoppingBagLine" title="Toko Aktif" description="Toko aktif di area Anda beserta partner, TL, dan SA/SR. Satu toko dipegang satu TL; toko dalam satu partner boleh dipegang TL berbeda." user={user} onLogout={onLogout}>
      <StatGrid min={220}>
        <StatCard icon="TeamLine" color="purple" label="TL di bawah Anda" value={val(sm?.tlUnder)}
          hint={sm ? [...sm.tlByArea.map((a) => `${areaName(a.areaId)} ${a.count}`), ...(sm.tlInactive ? [`${sm.tlInactive} belum aktif`] : [])].join(' · ') || 'Belum ada TL aktif' : undefined}
          onClick={() => navigate(withQuery('/apl/tim', { role: 'TL', area: q.area }))} />
        <StatCard icon="ShoppingBagLine" color="blue" label="Toko aktif" value={val(sm?.stores)} />
        <StatCard icon="ErrorWarningFill" color="orange" label="Toko belum ada TL" value={val(sm?.noTl)} hint="Klik untuk menyaring" onClick={() => set({ tl: 'none' })} />
        <StatCard icon="UserLine" color="teal" label="Toko tanpa SA/SR" value={val(sm?.noSales)} hint="TL ada, SA/SR belum ditugaskan" />
      </StatGrid>
      {sm?.noTl > 0 && (
        <Alert status="warning" size="sm" title={`${sm.noTl} toko belum ada TL`}
          actionLabel={q.tl === 'none' ? 'Tampilkan semua toko' : 'Lihat toko'} onAction={() => set({ tl: q.tl === 'none' ? '' : 'none' })}>
          Tugaskan TL agar toko tercakup dan SA/SR bisa ditugaskan.
        </Alert>
      )}
      <PeriodFilter path="/apl/toko-aktif" query={query} user={user} period={period}>
        <div style={{ width: 160 }}><Select size="sm" value={q.channel ?? ''} placeholder="Semua channel" onChange={(x) => set({ channel: x })} options={[{ value: '', label: 'Semua channel' }, ...Object.entries(CHANNEL).map(([value, label]) => ({ value, label }))]} /></div>
        <SearchField placeholder="Cari toko, partner, TL, SA/SR, atau kode" value={q.q ?? ''} onChange={(x) => set({ q: x })} />
      </PeriodFilter>
      {picked.size > 0 && (
        <div role="region" aria-label="Toko dipilih" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', padding: 'var(--space-10) var(--space-16)', borderRadius: 'var(--rounded-12)', background: 'var(--bg-weak-50)', boxShadow: 'var(--shadow-stroke)' }}>
          <span style={{ flex: 1, font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{picked.size} toko dipilih</span>
          <LinkButton size="sm" onClick={() => setPicked(new Set())}>Batalkan pilihan</LinkButton>
          <Button size="sm" onClick={() => setAssign([...picked])}>Tugaskan TL</Button>
        </div>
      )}
      <ListCard view={view} onRetry={() => load(true)}
        emptyMessage={q.q || q.tl || q.channel ? 'Tidak ada toko yang sesuai dengan pencarian atau filter.' : 'Belum ada toko aktif di area Anda.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{data.rows.length} toko · cair periode: {period.label}</span>}>
        {(view === 'data' || view === 'loading') && (
          <DataTable loading={view === 'loading'} rows={view === 'data' ? data.rows : []} columns={columns} minWidth={1200} onRowClick={setDetail} />
        )}
      </ListCard>
      {assign && <AssignTlModal storeIds={assign} user={user} onClose={() => setAssign(null)} onDone={() => { setPicked(new Set()); done(); }} onStale={done} />}
      {release && <ReleaseTlModal store={release} user={user} onClose={() => setRelease(null)} onDone={done} />}
      {detail && <StoreDrawer store={detail} period={period} onClose={() => setDetail(null)} />}
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
      await releaseTl(store.id, user, store.tlId);
      toast('success', 'TL dilepas. Toko kembali ke daftar Belum ada TL.');
      onDone();
    } catch (e) {
      setBusy(false);
      if (e instanceof ApiError && e.code === 'STALE') { toast('error', `TL ${store.name} sudah diubah. Daftar dimuat ulang.`); onDone(); } else toast('error', 'Gagal melepas TL. Coba lagi.');
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

/** Detail toko: data toko + peta, profil partner (PIC, kontak, alamat), dan Riwayat TL (SCR-TM-04). */
function StoreDrawer({ store: s, period, onClose }) {
  const p = s.partner;
  return (
    <Drawer open width={640} onClose={onClose} header={<DrawerHeader size="lg" title={s.name} description={`${p.name} · ${areaName(p.areaId)}`} icon="ShoppingBagLine" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SectionCard title="Toko">
          <KeyValueGrid items={[
            { label: 'Kode Toko', value: s.code }, { label: 'Kode Referral', value: s.referralCode },
            { label: 'TL', value: s.tl ? `${s.tl} · sejak ${formatDate(s.tlSince)}` : 'Belum ada TL' }, { label: 'SA/SR', value: s.sales.join(', ') || (s.tl ? 'Belum ditugaskan TL' : '-') },
            { label: 'Tanggal Aktif', value: formatDate(s.activeSince) }, { label: `Nominal cair · ${period.label}`, value: formatRp(s.paidOutAmount) },
            { label: 'Alamat', value: s.address, full: true },
          ]} />
          <MapPreview lat={s.lat} lng={s.lng} label={s.name} />
          <LinkButton size="sm" onClick={() => openMap(s.lat, s.lng)}>Buka di Maps</LinkButton>
        </SectionCard>
        <SectionCard title="Partner">
          <KeyValueGrid items={[
            { label: 'Nama Partner', value: p.name }, { label: 'Jenis Badan Usaha', value: ENTITY[p.entity] }, { label: 'Channel', value: CHANNEL[p.channel] },
            { label: 'Jumlah toko aktif', value: `${p.storeCount} toko` }, { label: 'TL', value: p.tls.join(', ') || '-' }, { label: 'Tanggal Aktif', value: formatDate(p.activatedAt) },
            { label: 'Nama PIC', value: p.picName }, { label: 'Kontak PIC', value: `${p.picEmail} · ${formatPhone(p.picPhone)}` },
            { label: 'Alamat', value: p.address, full: true },
          ]} />
        </SectionCard>
        <TlHistory storeId={s.id} />
      </div>
    </Drawer>
  );
}
