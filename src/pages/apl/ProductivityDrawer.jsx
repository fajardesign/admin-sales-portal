import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, Icon, LinkButton, SegmentedControl, StatusBadge } from '@ds/index.js';
import { attendanceDetail, visitDetail } from '../../api/mockApi.js';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { formatDate, formatDateWIB, formatPct, monthLabel } from '../../lib/format.js';

const ATT = { ON_TIME: ['completed', 'Tepat waktu'], LATE: ['pending', 'Terlambat'], ABSENT: ['failed', 'Absen'] };
const VIS = { DONE_ON_TIME: ['completed', 'Tepat waktu'], DONE_LATE: ['pending', 'Terlambat'], MISSED: ['failed', 'Terlewat'], CANCELLED: ['disabled', 'Dibatalkan'], SCHEDULED: ['information', 'Terjadwal'] };
const time = (d) => (d ? formatDateWIB(d).time.replace(' WIB', '') : '-');
const day = (ymd) => formatDate(new Date(`${ymd}T05:00:00Z`));
/** Senin awal minggu dari tanggal "YYYY-MM-DD". */
const weekStart = (ymd) => { const d = new Date(`${ymd}T12:00:00Z`); const w = (d.getUTCDay() + 6) % 7; return new Date(d.getTime() - w * 864e5).toISOString().slice(0, 10); };
const openMap = (lat, lng) => window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank', 'noopener');
/** Bukti selfie: prototipe tidak menyimpan foto — placeholder. */
const Selfie = () => (
  <span title="Selfie (placeholder)" style={{ width: 32, height: 32, borderRadius: 'var(--rounded-8)', background: 'var(--bg-weak-50)', boxShadow: 'var(--shadow-stroke)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-soft-400)' }}>
    <Icon name="User6Line" size={16} />
  </span>
);

/** Detail produktivitas satu orang (PRD v3 §B3) — tampilan harian, mingguan, bulanan. */
export function ProductivityDrawer({ person, tab, period, onClose }) {
  const [rows, setRows] = useState(null);
  const [mode, setMode] = useState('harian');
  const key = `${person.id}|${tab}|${period.from}|${period.to}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setRows(null); (tab === 'kunjungan' ? visitDetail : attendanceDetail)(person.id, period).then(setRows); }, [key]);

  const groupKey = (ymd) => (mode === 'mingguan' ? weekStart(ymd) : ymd.slice(0, 7));
  const groupLabel = (k) => (mode === 'mingguan' ? `Minggu ${day(k)}` : monthLabel(k, true));
  let columns; let data;
  if (!rows) { columns = [{ key: 'x', header: '' }]; data = []; } else if (mode === 'harian') {
    if (tab === 'kunjungan') {
      columns = [
        { key: 'date', header: 'Tanggal', render: (v) => ({ priority: 'regular', title: nowrap(day(v.date)), description: `Rencana ${time(v.plannedAt)}` }) },
        { key: 'store', header: 'Toko', render: (v) => ({ priority: 'regular', title: v.storeName, description: v.partnerName }) },
        { key: 'in', header: 'Check-in / out', render: (v) => nowrap(`${time(v.checkInAt)} – ${time(v.checkOutAt)}`) },
        { key: 'dur', header: 'Durasi', render: (v) => (v.checkInAt ? `${Math.round((new Date(v.checkOutAt) - new Date(v.checkInAt)) / 60000)} menit` : '-') },
        { key: 'status', header: 'Status', render: (v) => { const k = v.status === 'DONE' ? `DONE_${v.outcome}` : v.status; return { misc: true, children: <StatusBadge status={VIS[k][0]}>{VIS[k][1]}</StatusBadge> }; } },
        { key: 'ev', header: 'Bukti', render: (v) => (v.checkInAt ? { misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie /><LinkButton size="sm" onClick={() => openMap(v.lat, v.lng)}>Peta</LinkButton></span> } : '-') },
      ];
    } else {
      columns = [
        { key: 'date', header: 'Tanggal', render: (a) => ({ priority: 'regular', title: nowrap(day(a.date)) }) },
        { key: 'status', header: 'Status', render: (a) => ({ misc: true, children: <StatusBadge status={ATT[a.status][0]}>{ATT[a.status][1]}</StatusBadge> }) },
        { key: 'in', header: 'Check-in', render: (a) => time(a.clockInAt) },
        { key: 'out', header: 'Check-out', render: (a) => time(a.clockOutAt) },
        { key: 'ev', header: 'Lokasi & selfie', render: (a) => (a.clockInAt ? { misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie /><LinkButton size="sm" onClick={() => openMap(a.lat, a.lng)}>Peta</LinkButton></span> } : '-') },
      ];
    }
    data = rows.map((r, i) => ({ ...r, id: r.id ?? `${r.date}-${i}` }));
  } else {
    const m = new Map();
    rows.forEach((r) => { const k = groupKey(r.date); m.set(k, [...(m.get(k) ?? []), r]); });
    data = [...m.entries()].map(([k, rs]) => ({ id: k, k, rs }));
    columns = tab === 'kunjungan' ? [
      { key: 'p', header: mode === 'mingguan' ? 'Minggu' : 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(groupLabel(g.k)) }) },
      { key: 'plan', header: 'Direncanakan', align: 'right', render: (g) => String(g.rs.filter((v) => v.status !== 'CANCELLED').length) },
      { key: 'done', header: 'Dikunjungi', align: 'right', render: (g) => String(g.rs.filter((v) => v.status === 'DONE').length) },
      { key: 'late', header: 'Terlambat', align: 'right', render: (g) => String(g.rs.filter((v) => v.outcome === 'LATE').length) },
      { key: 'miss', header: 'Terlewat', align: 'right', render: (g) => String(g.rs.filter((v) => v.status === 'MISSED').length) },
      { key: 'ach', header: 'Pencapaian', align: 'right', render: (g) => { const c = g.rs.filter((v) => v.status !== 'CANCELLED' && v.status !== 'SCHEDULED'); return formatPct(c.length ? (c.filter((v) => v.status === 'DONE').length / c.length) * 100 : 0); } },
    ] : [
      { key: 'p', header: mode === 'mingguan' ? 'Minggu' : 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(groupLabel(g.k)) }) },
      { key: 'present', header: 'Hadir', align: 'right', render: (g) => String(g.rs.filter((a) => a.status !== 'ABSENT').length) },
      { key: 'on', header: 'Tepat waktu', align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ON_TIME').length) },
      { key: 'late', header: 'Terlambat', align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'LATE').length) },
      { key: 'abs', header: 'Absen', align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ABSENT').length) },
    ];
  }

  return (
    <Drawer open width={860} onClose={onClose}
      header={<DrawerHeader size="lg" title={person.name} description={`${person.role} · ${tab === 'kunjungan' ? 'Kunjungan' : 'Absensi'} · ${period.label}`} icon={tab === 'kunjungan' ? 'MapPinLine' : 'CalendarLine'} onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SegmentedControl value={mode} onChange={setMode} items={[{ value: 'harian', label: 'Harian' }, { value: 'mingguan', label: 'Mingguan' }, { value: 'bulanan', label: 'Bulanan' }]} style={{ alignSelf: 'flex-start' }} />
        <div style={{ overflowX: 'auto' }}>
          <DataTable loading={!rows} rows={data} columns={columns} minWidth={720} />
          {rows && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada data pada periode ini.</span>}
        </div>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Foto selfie ditampilkan sebagai placeholder di prototipe ini.</span>
      </div>
    </Drawer>
  );
}
