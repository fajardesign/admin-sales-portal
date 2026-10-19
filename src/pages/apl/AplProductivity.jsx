import { useEffect, useState } from 'react';
import { StatusBadge } from '@ds/index.js';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { aplProductivity, attendanceWeekLabel, weekStatusLabel } from '../../api/mockApi.js';
import { nowrap } from '../../lib/cells.jsx';
import { ATTENDANCE_LABEL, TL_LEVEL, areaName } from '../../lib/constants.js';
import { navigate, withQuery } from '../../lib/router.js';
import { ProductivityDrawer } from './ProductivityDrawer.jsx';

const n = (v) => String(v);
const ABSENSI_NOTE = 'Setiap hari adalah hari kerja, termasuk akhir pekan, hari libur, dan cuti. Target 6 check-in per minggu (Senin–Minggu), hari apa saja; minggu tercapai = minggu yang sudah selesai dengan minimal 6 check-in. Check in dengan selfie dan lokasi dalam radius 3 km dari titik lokasi kantor atau toko partner yang terdaftar. Check in setelah 10:00 waktu setempat sesuai lokasi check-in (WIB/WITA/WIT) dihitung Terlambat; hari tanpa check-in dihitung Absen. Batas check out 23:59. TL dapat mengoreksi absensi sampai akhir minggu berikutnya dengan alasan.';
const KUNJUNGAN_NOTE = 'Target per minggu (Senin–Minggu) = setiap toko yang ditugaskan dikunjungi sekali (TL: toko yang ia pegang), hari apa saja; boleh lebih dari satu toko per hari. Target dikunci Senin 00:00 WIB: toko yang pindah di tengah minggu tetap menjadi target pemegang lama minggu itu, pemegang baru mulai minggu berikutnya; kunjungan dihitung untuk orang yang melakukannya. Check in kunjungan mulai 12:00 waktu setempat sesuai lokasi check-in, dalam radius 3 km dari titik lokasi toko yang terdaftar; check-out kunjungan opsional. Minggu lengkap = minggu yang sudah selesai dengan semua toko dikunjungi; minggu masuk periode yang memuat hari Seninnya.';

/**
 * B3 · Produktivitas (PRD v3) — sejak 2026-10-20 digabung ke menu Tim sebagai tab "Absensi" dan "Kunjungan" (konflik dengan PRD yang
 * memisahkan B3 dan B5 dicatat). Rute lama /apl/produktivitas dialihkan ke /apl/tim?tab=absensi|kunjungan.
 */
export function AplProductivity({ query }) {
  const q = Object.fromEntries(query.entries());
  useEffect(() => { navigate(withQuery('/apl/tim', { ...q, tab: q.tab === 'kunjungan' ? 'kunjungan' : 'absensi' })); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}

/** Daftar absensi atau kunjungan per orang (tab di menu Tim); klik baris untuk detail harian/mingguan/bulanan. Filter: role, cari nama atau TL. */
export function ProductivityList({ areaIds, period, tab, role, search }) {
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [person, setPerson] = useState(null);
  const key = JSON.stringify({ period, areaIds, role, search });
  const load = (retry) => { setView('loading'); aplProductivity(areaIds, period, { role, q: search }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const lead = { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `${r.role === 'TL' ? `TL ${TL_LEVEL[r.tlLevel]}` : r.role} · ${areaName(r.areaId)}${r.leader ? ` · Atasan ${r.leader}` : ''}` }) };
  const columns = tab === 'absensi' ? [
    lead,
    { key: 'week', header: 'Minggu ini', render: (r) => ({ misc: true, children: <StatusBadge status={r.attendance.thisWeek.met ? 'completed' : 'pending'}>{attendanceWeekLabel(r.attendance.thisWeek)}</StatusBadge> }) },
    { key: 'met', header: 'Minggu tercapai', align: 'right', render: (r) => (r.attendance.weeks ? `${r.attendance.weeksMet}/${r.attendance.weeks}` : '-') },
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
    <>
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={search || role ? 'Tidak ada anggota tim yang sesuai dengan pencarian atau filter.' : 'Belum ada anggota tim aktif.'}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1000} onRowClick={setPerson} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        {tab === 'absensi' ? ABSENSI_NOTE : KUNJUNGAN_NOTE}
      </span>
      {person && <ProductivityDrawer person={person} tab={tab} period={period} onClose={() => setPerson(null)} />}
    </>
  );
}
