import { useEffect, useState } from 'react';
import { Select, StatusBadge, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { aplProductivity, subordinateOptions, weekStatusLabel } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { ATTENDANCE_LABEL, TL_LEVEL, areaName } from '../../lib/constants.js';
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
    { key: 'present', header: ATTENDANCE_LABEL.CHECKED_IN, align: 'right', render: (r) => n(r.attendance.present) },
    { key: 'on', header: ATTENDANCE_LABEL.ON_TIME, align: 'right', render: (r) => n(r.attendance.onTime) },
    { key: 'late', header: ATTENDANCE_LABEL.LATE, align: 'right', render: (r) => n(r.attendance.late) },
    { key: 'out', header: ATTENDANCE_LABEL.CHECKED_OUT, align: 'right', render: (r) => n(r.attendance.checkedOut) },
    { key: 'abs', header: ATTENDANCE_LABEL.ABSENT, align: 'right', render: (r) => n(r.attendance.absent) },
    { key: 'avg', header: 'Rata-rata check in', align: 'right', render: (r) => r.attendance.avgCheckIn ?? '-' },
  ] : [
    lead,
    { key: 'week', header: 'Minggu ini', render: (r) => ({ misc: true, children: <StatusBadge status={r.visits.thisWeek.complete ? 'completed' : 'pending'}>{weekStatusLabel(r.visits.thisWeek)}</StatusBadge> }) },
    { key: 'weeks', header: 'Minggu lengkap', align: 'right', render: (r) => ({ priority: 'leading', title: r.visits.weeks ? `${r.visits.weeksComplete}/${r.visits.weeks}` : '-' }) },
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
        {tab === 'absensi'
          ? 'Hari kerja Senin–Sabtu. Check in dengan selfie dan lokasi dalam radius 3 km dari titik lokasi kantor atau toko partner yang terdaftar. Check in setelah 10:00 waktu lokal perangkat (WIB/WITA/WIT) dihitung Terlambat; tidak check in sampai akhir hari dihitung Absen.'
          : 'Target per minggu = setiap toko yang ditugaskan dikunjungi sekali (TL: toko partner miliknya), tanpa jumlah hari tetap; boleh lebih dari satu toko per hari. Check in kunjungan mulai 12:00 waktu lokal, dalam radius 3 km dari titik lokasi toko yang terdaftar. Minggu lengkap = minggu yang sudah selesai dengan semua toko dikunjungi; minggu masuk periode yang memuat hari Seninnya.'}
      </span>
      {person && <ProductivityDrawer person={person} tab={tab} period={period} onClose={() => setPerson(null)} />}
    </AdminShell>
  );
}
