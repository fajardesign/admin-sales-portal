import { useEffect, useState } from 'react';
import { CompactButton, Drawer, DrawerHeader, Icon, LinkButton, Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { MapPreview } from '../../components/MapPreview.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { aplPartners, subordinateOptions } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { CHANNEL, ENTITY, areaName } from '../../lib/constants.js';
import { formatDate, formatPhone, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';

const openMap = (lat, lng) => window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank', 'noopener');

/** B4 · Partner (PRD v3): partner aktif di area APL, bisa dibuka ke toko; klik baris partner untuk detail read-only. */
export function AplPartners(props) {
  const { tableState } = useScenario();
  return <AplPartnersView key={tableState} {...props} />;
}

function AplPartnersView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [open, setOpen] = useState({});
  const [detail, setDetail] = useState(null);
  const set = (patch) => navigate(withQuery('/apl/partner', { ...q, ...patch }));
  const key = JSON.stringify({ period, areaIds, tl: q.tl, channel: q.channel, s: q.q });
  const load = (retry) => { setView('loading'); aplPartners(areaIds, period, { tl: q.tl, channel: q.channel, q: q.q }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const flat = rows.flatMap((p) => [{ ...p, type: 'partner', key: p.id }, ...(open[p.id] ? p.stores.map((s) => ({ ...s, type: 'store', key: s.id, partner: p })) : [])]);
  const columns = [
    { key: 'name', header: 'Partner / Toko', render: (r) => (r.type === 'partner' ? {
      priority: 'leading',
      media: <span role="presentation" onClick={(e) => e.stopPropagation()}><CompactButton variant="ghost" icon={<Icon name={open[r.id] ? 'ArrowDownSLine' : 'ArrowRightSLine'} />} aria-label={`${open[r.id] ? 'Tutup' : 'Buka'} toko ${r.name}`} onClick={() => setOpen((o) => ({ ...o, [r.id]: !o[r.id] }))} /></span>,
      title: r.name, description: `${r.stores.length} toko · ${areaName(r.areaId)} · ${CHANNEL[r.channel]}`,
    } : { priority: 'regular', title: <span style={{ paddingLeft: 'var(--space-40)', display: 'block' }}>{r.name}</span>, description: <span style={{ paddingLeft: 'var(--space-40)', display: 'block' }}>{r.primary ? 'Toko Utama' : 'Toko Tambahan'} · {r.code}</span> }) },
    { key: 'pic', header: 'PIC & kontak', render: (r) => { const p = r.type === 'partner' ? r : r.partner; return { priority: 'regular', title: nowrap(p.picName), description: nowrap(`${p.picEmail} · ${formatPhone(p.picPhone)}`) }; } },
    { key: 'addr', header: 'Alamat & koordinat', render: (r) => (r.type === 'store' ? { priority: 'passive', title: <span style={{ display: 'block', maxWidth: 300 }}>{r.address}</span>, description: (
      <span role="presentation" onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
        {r.lat}, {r.lng}<LinkButton size="sm" onClick={() => openMap(r.lat, r.lng)} rightIcon={<Icon name="ExternalLinkLine" size={16} />}>Buka di Maps</LinkButton>
      </span>
    ) } : { priority: 'passive', title: <span style={{ display: 'block', maxWidth: 300 }}>{r.address}</span> }) },
    { key: 'active', header: 'Tanggal Aktif', render: (r) => nowrap(formatDate(r.type === 'partner' ? r.activatedAt : r.activeSince)) },
    { key: 'tl', header: 'TL Pemilik', render: (r) => (r.type === 'partner' ? nowrap(r.tl ?? '-') : '') },
    { key: 'sales', header: 'SA/SR', render: (r) => (r.type === 'store' ? (r.sales.join(', ') || 'Belum ditugaskan') : '') },
    { key: 'paid', header: 'Cair periode ini', align: 'right', render: (r) => ({ priority: r.type === 'partner' ? 'leading' : 'regular', title: nowrap(formatRp(r.paidOutAmount)) }) },
  ];

  return (
    <AdminShell active="/apl/partner" icon="Building2Line" title="Partner" description="Partner dan toko aktif di area Anda beserta TL pemilik dan SA/SR yang ditugaskan." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/partner" query={query} user={user} period={period}>
        <div style={{ width: 220 }}><Select size="sm" value={q.tl ?? ''} placeholder="Semua TL" onChange={(v) => set({ tl: v })} options={[{ value: '', label: 'Semua TL' }, ...subordinateOptions(areaIds, ['TL'])]} /></div>
        <div style={{ width: 160 }}><Select size="sm" value={q.channel ?? ''} placeholder="Semua channel" onChange={(v) => set({ channel: v })} options={[{ value: '', label: 'Semua channel' }, ...Object.entries(CHANNEL).map(([value, label]) => ({ value, label }))]} /></div>
      </PeriodFilter>
      <SearchField placeholder="Cari partner atau toko" value={q.q ?? ''} onChange={(v) => set({ q: v })} />
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={q.q || q.tl || q.channel ? 'Tidak ada partner yang sesuai dengan pencarian atau filter.' : 'Belum ada partner aktif di area Anda.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{rows.length} partner · {rows.reduce((a, p) => a + p.stores.length, 0)} toko aktif</span>}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={flat} rowKey={(r) => r.key} columns={columns} minWidth={1300} onRowClick={(r) => setDetail(r.type === 'partner' ? r : r.partner)} />}
      </ListCard>
      {detail && <PartnerDrawer p={detail} period={period} onClose={() => setDetail(null)} />}
    </AdminShell>
  );
}

/** Detail partner read-only untuk APL: profil, toko, SA/SR yang ditugaskan. */
function PartnerDrawer({ p, period, onClose }) {
  return (
    <Drawer open width={640} onClose={onClose} header={<DrawerHeader size="lg" title={p.name} description={`${p.id} · ${areaName(p.areaId)}`} icon="Building2Line" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SectionCard title="Profil">
          <KeyValueGrid items={[
            { label: 'Jenis Badan Usaha', value: ENTITY[p.entity] }, { label: 'Channel', value: CHANNEL[p.channel] },
            { label: 'Alamat', value: p.address, full: true }, { label: 'TL Pemilik', value: p.tl }, { label: 'Tanggal Aktif', value: formatDate(p.activatedAt) },
            { label: 'Nama PIC', value: p.picName }, { label: 'Kontak PIC', value: `${p.picEmail} · ${formatPhone(p.picPhone)}` },
            { label: `Nominal cair · ${period.label}`, value: formatRp(p.paidOutAmount), full: true },
          ]} />
        </SectionCard>
        {p.stores.map((s) => (
          <SectionCard key={s.id} title={s.name}>
            <KeyValueGrid items={[{ label: 'Kode Toko', value: s.code }, { label: 'Tanggal Aktif', value: formatDate(s.activeSince) }, { label: 'SA/SR ditugaskan', value: s.sales.join(', ') || 'Belum ditugaskan', full: true }, { label: 'Alamat', value: s.address, full: true }]} />
            <MapPreview lat={s.lat} lng={s.lng} label={s.name} />
          </SectionCard>
        ))}
      </div>
    </Drawer>
  );
}
