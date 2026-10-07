import { useEffect, useState } from 'react';
import { Select, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { aplProductivity, subordinateOptions } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { TL_LEVEL, areaName } from '../../lib/constants.js';
import { formatPct } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';
import { ProductivityDrawer } from './ProductivityDrawer.jsx';

const n = (v) => String(v);

/** B3 · Produktivitas (PRD v3): tab Absensi & Kunjungan per orang; klik baris untuk detail harian/mingguan/bulanan. */
export function AplProductivity(props) {
  const { tableState } = useScenario();
  return <AplProductivityView key={tableState} {...props} />;
}

function AplProductivityView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const tab = q.tab === 'kunjungan' ? 'kunjungan' : 'absensi';
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [person, setPerson] = useState(null);
  const set = (patch) => navigate(withQuery('/apl/produktivitas', { ...q, ...patch }));
  const key = JSON.stringify({ period, areaIds, tl: q.tl, role: q.role });
  const load = (retry) => { setView('loading'); aplProductivity(areaIds, period, { tl: q.tl, role: q.role }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const lead = { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `${r.role === 'TL' ? `TL ${TL_LEVEL[r.tlLevel]}` : r.role} · ${areaName(r.areaId)}${r.leader ? ` · Atasan ${r.leader}` : ''}` }) };
  const columns = tab === 'absensi' ? [
    lead,
    { key: 'days', header: 'Hari tercatat', align: 'right', render: (r) => n(r.attendance.days) },
    { key: 'present', header: 'Hadir', align: 'right', render: (r) => n(r.attendance.present) },
    { key: 'on', header: 'Tepat waktu', align: 'right', render: (r) => n(r.attendance.onTime) },
    { key: 'late', header: 'Terlambat', align: 'right', render: (r) => n(r.attendance.late) },
    { key: 'abs', header: 'Absen', align: 'right', render: (r) => n(r.attendance.absent) },
    { key: 'avg', header: 'Rata-rata check-in', align: 'right', render: (r) => r.attendance.avgCheckIn ?? '-' },
  ] : [
    lead,
    { key: 'plan', header: 'Direncanakan', align: 'right', render: (r) => n(r.visits.planned) },
    { key: 'done', header: 'Dikunjungi', align: 'right', render: (r) => n(r.visits.visited) },
    { key: 'on', header: 'Tepat waktu', align: 'right', render: (r) => n(r.visits.onTime) },
    { key: 'late', header: 'Terlambat', align: 'right', render: (r) => n(r.visits.late) },
    { key: 'miss', header: 'Terlewat', align: 'right', render: (r) => n(r.visits.missed) },
    { key: 'ach', header: 'Pencapaian', align: 'right', render: (r) => ({ priority: 'leading', title: formatPct(r.visits.achievement) }) },
  ];
  return (
    <AdminShell active="/apl/produktivitas" icon="TimeLine" title="Produktivitas" description="Absensi dan pencapaian kunjungan TL, SR, dan SA di area Anda." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/produktivitas" query={query} user={user} period={period}>
        <div style={{ width: 220 }}>
          <Select size="sm" value={q.tl ?? ''} placeholder="Semua TL" onChange={(v) => set({ tl: v })} options={[{ value: '', label: 'Semua TL' }, ...subordinateOptions(areaIds, ['TL'])]} />
        </div>
        <div style={{ width: 150 }}>
          <Select size="sm" value={q.role ?? ''} placeholder="Semua role" onChange={(v) => set({ role: v })} options={[{ value: '', label: 'Semua role' }, { value: 'TL', label: 'TL' }, { value: 'SR', label: 'SR' }, { value: 'SA', label: 'SA' }]} />
        </div>
      </PeriodFilter>
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v === 'absensi' ? '' : v })} items={[{ value: 'absensi', label: 'Absensi' }, { value: 'kunjungan', label: 'Kunjungan' }]} />
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada anggota tim yang sesuai dengan filter.">
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1000} onRowClick={setPerson} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        {tab === 'absensi' ? 'Hari kerja Senin–Sabtu. Check-in setelah 08:00 WIB dihitung terlambat (contoh; aturan jam kerja TBD).' : 'Pencapaian = dikunjungi / direncanakan (tanpa kunjungan dibatalkan dan yang belum jatuh tempo).'}
      </span>
      {person && <ProductivityDrawer person={person} tab={tab} period={period} onClose={() => setPerson(null)} />}
    </AdminShell>
  );
}
