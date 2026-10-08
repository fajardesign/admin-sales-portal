import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, Icon, LinkButton, SegmentedControl, StatusBadge } from '@ds/index.js';
import { attendanceDetail, visitDetail } from '../../api/mockApi.js';
import { DataTable } from '../../components/DataTable.jsx';
import { AREAS, ATTENDANCE_LABEL } from '../../lib/constants.js';
import { nowrap } from '../../lib/cells.jsx';
import { formatDate, formatKm, formatTimeLocal, monthLabel } from '../../lib/format.js';

const ATT = { ON_TIME: ['completed', ATTENDANCE_LABEL.ON_TIME], LATE: ['pending', ATTENDANCE_LABEL.LATE], ABSENT: ['failed', ATTENDANCE_LABEL.ABSENT] };
const WEEK = { true: ['completed', 'Lengkap'], false: ['pending', 'Belum lengkap'] };
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
  const area = AREAS.find((a) => a.id === person.areaId);
  const time = (d) => formatTimeLocal(d, area);
  const [rows, setRows] = useState(null);
  const [weeks, setWeeks] = useState([]);
  const [mode, setMode] = useState('harian');
  const key = `${person.id}|${tab}|${period.from}|${period.to}`;
  const fetchRows = () => (tab === 'kunjungan' ? visitDetail(person.id, period).then((r) => { setWeeks(r.weeks); return r.rows; }) : attendanceDetail(person.id, period));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setRows(null); fetchRows().then(setRows); }, [key]);

  const groupKey = (ymd) => (mode === 'mingguan' ? weekStart(ymd) : ymd.slice(0, 7));
  const groupLabel = (k) => (mode === 'mingguan' ? `Minggu ${day(k)}` : monthLabel(k, true));
  let columns; let data;
  if (!rows) { columns = [{ key: 'x', header: '' }]; data = []; } else if (mode === 'harian') {
    if (tab === 'kunjungan') {
      columns = [
        { key: 'date', header: 'Tanggal', render: (v) => ({ priority: 'regular', title: nowrap(day(v.date)) }) },
        { key: 'store', header: 'Toko', render: (v) => ({ priority: 'regular', title: v.storeName, description: v.partnerName }) },
        { key: 'in', header: 'Check in / out', render: (v) => nowrap(`${time(v.checkInAt)} – ${time(v.checkOutAt)}`) },
        { key: 'dur', header: 'Durasi', render: (v) => `${Math.round((new Date(v.checkOutAt) - new Date(v.checkInAt)) / 60000)} menit` },
        { key: 'dist', header: 'Jarak ke toko', align: 'right', render: (v) => formatKm(v.distanceKm) },
        { key: 'ev', header: 'Bukti', render: (v) => ({ misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie /><LinkButton size="sm" onClick={() => openMap(v.lat, v.lng)}>Peta</LinkButton></span> }) },
      ];
    } else {
      columns = [
        { key: 'date', header: 'Tanggal', render: (a) => ({ priority: 'regular', title: nowrap(day(a.date)) }) },
        { key: 'status', header: 'Status', render: (a) => ({ misc: true, children: <StatusBadge status={ATT[a.status][0]}>{ATT[a.status][1]}</StatusBadge> }) },
        { key: 'in', header: 'Check in', render: (a) => time(a.clockInAt) },
        { key: 'out', header: 'Check out', render: (a) => (a.clockOutAt ? time(a.clockOutAt) : a.clockInAt ? ATTENDANCE_LABEL.CHECKED_IN : '-') },
        { key: 'place', header: 'Lokasi', render: (a) => (a.place ? { priority: 'regular', title: a.place.name, description: `${a.place.kind === 'OFFICE' ? 'Kantor terdaftar' : 'Toko partner'} · ${formatKm(a.distanceKm)}` } : '-') },
        { key: 'ev', header: 'Bukti', render: (a) => (a.clockInAt ? { misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie /><LinkButton size="sm" onClick={() => openMap(a.lat, a.lng)}>Peta</LinkButton></span> } : '-') },
      ];
    }
    data = rows.map((r, i) => ({ ...r, id: r.id ?? `${r.date}-${i}` }));
  } else if (tab === 'kunjungan' && mode === 'mingguan') {
    data = weeks.map((w) => ({ ...w, id: w.start }));
    columns = [
      { key: 'p', header: 'Minggu', render: (w) => ({ priority: 'regular', title: nowrap(groupLabel(w.start)) }) },
      { key: 'v', header: 'Dikunjungi / target', align: 'right', render: (w) => `${w.visited}/${w.target}` },
      { key: 's', header: 'Status', render: (w) => (w.closed ? { misc: true, children: <StatusBadge status={WEEK[w.complete][0]}>{WEEK[w.complete][1]}</StatusBadge> } : 'Berjalan') },
    ];
  } else {
    const m = new Map();
    rows.forEach((r) => { const k = groupKey(r.date); m.set(k, [...(m.get(k) ?? []), r]); });
    data = [...m.entries()].map(([k, rs]) => ({ id: k, k, rs }));
    columns = tab === 'kunjungan' ? [
      { key: 'p', header: mode === 'mingguan' ? 'Minggu' : 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(groupLabel(g.k)) }) },
      { key: 'done', header: 'Hari dikunjungi', align: 'right', render: (g) => String(new Set(g.rs.map((v) => v.date)).size) },
      { key: 'weeks', header: 'Minggu lengkap', align: 'right', render: (g) => { const ws = weeks.filter((w) => w.closed && w.target > 0 && w.start.slice(0, 7) === g.k); return ws.length ? `${ws.filter((w) => w.complete).length}/${ws.length}` : '-'; } },
    ] : [
      { key: 'p', header: mode === 'mingguan' ? 'Minggu' : 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(groupLabel(g.k)) }) },
      { key: 'present', header: ATTENDANCE_LABEL.CHECKED_IN, align: 'right', render: (g) => String(g.rs.filter((a) => a.status !== 'ABSENT').length) },
      { key: 'on', header: ATTENDANCE_LABEL.ON_TIME, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ON_TIME').length) },
      { key: 'late', header: ATTENDANCE_LABEL.LATE, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'LATE').length) },
      { key: 'out', header: ATTENDANCE_LABEL.CHECKED_OUT, align: 'right', render: (g) => String(g.rs.filter((a) => a.clockOutAt).length) },
      { key: 'abs', header: ATTENDANCE_LABEL.ABSENT, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ABSENT').length) },
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
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Jam dalam waktu lokal {area?.tz ?? 'WIB'}. Foto selfie ditampilkan sebagai placeholder di prototipe ini.</span>
      </div>
    </Drawer>
  );
}
