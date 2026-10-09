import { useCallback, useEffect, useState } from 'react';
import { Select, TextInput } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard, ListPager } from '../../components/ListCard.jsx';
import { StatusRail } from '../../components/StatusRail.jsx';
import { PartnerStatusBadge } from '../../components/Badges.jsx';
import { FilterButton, FilterChips, FilterPanel, SearchField } from '../../components/FilterBar.jsx';
import { listPartners, submitterOptions } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { AREAS, CHANNEL, ENTITY, FINAL_STATUSES, PARTNER_STATUS, REVIEW_FLOW, areaName, statusFromSlug, statusSlug } from '../../lib/constants.js';
import { formatDateWIB } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';

const FILTER_KEYS = ['area', 'entity', 'channel', 'submitter', 'from', 'to'];
/** Query terakhir daftar — dipakai "Kembali"/breadcrumb di detail agar tampilan sebelumnya kembali. */
export let lastPipelineQuery = '';

const dateCell = (d) => { const f = formatDateWIB(d); return { title: nowrap(f.date), description: f.time, priority: 'regular' }; };

/** W3a · Partner Pipeline — daftar partner (PRD §2A). Status, filter, cari, sort, dan halaman disimpan di URL. */
export function PipelineList(props) {
  const { tableState } = useScenario();
  return <PipelineListView key={tableState} {...props} />;
}

function PipelineListView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const statusParam = q.status ?? 'semua'; // default tab Semua (PRD Scope 1 AC-002)
  const status = statusParam === 'semua' ? null : statusFromSlug(statusParam);
  const page = Number(q.page) || 1;
  const sort = q.sort || 'submittedAt:desc';
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [filterOpen, setFilterOpen] = useState(false);
  const qs = query.toString();
  lastPipelineQuery = qs;

  const set = (patch, keepPage = false) => navigate(withQuery('/partner-pipeline', { ...q, status: statusParam, ...(keepPage ? {} : { page: '' }), ...patch }));

  const load = useCallback((retry) => {
    setView('loading');
    listPartners({ ...q, status }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qs]);
  useEffect(() => { load(false); }, [load]);

  const counts = data?.counts ?? {};
  const activeCount = ['area', 'entity', 'channel', 'submitter'].filter((k) => q[k]).length + (q.from || q.to ? 1 : 0);
  const submitters = submitterOptions();
  const chipLabel = {
    area: () => `Area: ${areaName(Number(q.area))}`,
    entity: () => `Badan usaha: ${ENTITY[q.entity]}`,
    channel: () => `Channel: ${CHANNEL[q.channel]}`,
    submitter: () => `Diajukan oleh: ${submitters.find((s) => s.value === q.submitter)?.label ?? '-'}`,
  };
  const chips = ['area', 'entity', 'channel', 'submitter'].filter((k) => q[k]).map((k) => ({ key: k, label: chipLabel[k]() }));
  if (q.from || q.to) chips.push({ key: 'from', label: `Tanggal: ${q.from || '…'} s/d ${q.to || '…'}` });

  const columns = [
    { key: 'reg', header: 'No. Registrasi', sortKey: 'registrationNumber', render: (p) => ({ priority: 'leading', title: nowrap(p.registrationNumber) }) },
    { key: 'name', header: 'Nama Partner', sortKey: 'partnerName', render: (p) => ({ priority: 'regular', title: p.partnerName }) },
    { key: 'entity', header: 'Jenis Badan Usaha', render: (p) => ENTITY[p.businessEntityType] },
    { key: 'channel', header: 'Channel', render: (p) => CHANNEL[p.channel] },
    { key: 'sub', header: 'Diajukan oleh', sortKey: 'submittedBy', render: (p) => ({ priority: 'regular', title: nowrap(p.submitter?.name ?? '-'), description: p.submitter?.role }) },
    { key: 'stores', header: 'Jumlah Toko', sortKey: 'storeCount', align: 'right', render: (p) => String(p.stores.length) },
    { key: 'area', header: 'Area', sortKey: 'area', render: (p) => areaName(p.areaId) },
    { key: 'submittedAt', header: 'Tanggal Diajukan', sortKey: 'submittedAt', render: (p) => dateCell(p.submittedAt) },
    { key: 'updated', header: 'Terakhir Diperbarui', sortKey: 'statusUpdatedAt', render: (p) => dateCell(p.statusUpdatedAt) },
    { key: 'status', header: 'Status', render: (p) => ({ misc: true, children: <PartnerStatusBadge status={p.status} /> }) },
  ];
  const onSort = (key) => { const [k, d] = sort.split(':'); set({ sort: `${key}:${k === key && d === 'desc' ? 'asc' : 'desc'}` }); };

  return (
    <AdminShell active="/partner-pipeline" icon="Building2Line" title="Partner Pipeline" description="Tinjau pengajuan partner, verifikasi dokumen, catat PKS, dan ubah status partner." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', gap: 'var(--space-16)', alignItems: 'flex-start' }}>
        <StatusRail ariaLabel="Status partner" value={statusParam} onChange={(v) => set({ status: v })}
          groups={[
            { items: [{ value: 'semua', label: 'Semua', count: counts.ALL }] },
            { title: 'Alur review', items: REVIEW_FLOW.map((s) => ({ value: statusSlug(s), label: PARTNER_STATUS[s].label, count: counts[s] })) },
            { title: 'Status akhir', items: FINAL_STATUSES.map((s) => ({ value: statusSlug(s), label: PARTNER_STATUS[s].label, count: counts[s] })) },
          ]} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <SearchField placeholder="Cari nama partner, no. registrasi, atau kode referral" value={q.q ?? ''} onChange={(v) => set({ q: v })} />
            <FilterButton count={activeCount} open={filterOpen} onClick={() => setFilterOpen((o) => !o)} />
          </div>
          <FilterPanel key={`${qs}-${filterOpen}`} open={filterOpen} onOpenChange={setFilterOpen}
            initial={Object.fromEntries(FILTER_KEYS.map((k) => [k, q[k] ?? '']))}
            onApply={(f) => set(f)}
            fields={(d, setD) => (
              <>
                <Select label="Area" size="sm" placeholder="Semua area" value={d.area} onChange={(v) => setD({ area: v })}
                  options={[{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))]} />
                <Select label="Jenis Badan Usaha" size="sm" placeholder="Semua" value={d.entity} onChange={(v) => setD({ entity: v })}
                  options={[{ value: '', label: 'Semua' }, ...Object.entries(ENTITY).map(([value, label]) => ({ value, label }))]} />
                <Select label="Channel" size="sm" placeholder="Semua" value={d.channel} onChange={(v) => setD({ channel: v })}
                  options={[{ value: '', label: 'Semua' }, ...Object.entries(CHANNEL).map(([value, label]) => ({ value, label }))]} />
                <Select label="Diajukan oleh" size="sm" placeholder="Semua TL/SR" value={d.submitter} onChange={(v) => setD({ submitter: v })}
                  options={[{ value: '', label: 'Semua TL/SR' }, ...submitters]} />
                <TextInput label="Tanggal diajukan dari" size="sm" type="date" value={d.from} onChange={(e) => setD({ from: e.target.value })} />
                <TextInput label="Sampai" size="sm" type="date" value={d.to} onChange={(e) => setD({ to: e.target.value })} />
              </>
            )} />
          <FilterChips chips={chips} onRemove={(k) => set(k === 'from' ? { from: '', to: '' } : { [k]: '' })} />
          <ListCard view={view} emptyMessage="Belum ada partner dengan status ini." onRetry={() => load(true)}
            footer={view === 'data' && <ListPager page={page} total={data.total} noun="partner" onChange={(p) => set({ page: String(p) }, true)} />}>
            {(view === 'data' || view === 'loading') && (
              <DataTable columns={columns} rows={view === 'data' ? data.rows : []} loading={view === 'loading'} sort={sort} onSort={onSort} minWidth={1240}
                onRowClick={(p) => navigate(`/partner-pipeline/${p.registrationNumber}`)} />
            )}
          </ListCard>
        </div>
      </div>
    </AdminShell>
  );
}
