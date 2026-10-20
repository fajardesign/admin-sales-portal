import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, LinkButton, SegmentedControl, StatusBadge } from '@ds/index.js';
import { attendanceDetail, attendanceWeekDetail, isPresent, attendanceWeekLabel, todayDate, visitDetail, weekStatusLabel } from '../../api/mockApi.js';
import { DataTable } from '../../components/DataTable.jsx';
import { AREAS, ATTENDANCE_LABEL } from '../../lib/constants.js';
import { nowrap } from '../../lib/cells.jsx';
import { formatDate, formatDateTime, formatKm, formatTimeLocal, monthLabel } from '../../lib/format.js';
import { selfieUrl } from '../../lib/selfies.js';

const ATT = { ON_TIME: ['completed', ATTENDANCE_LABEL.ON_TIME], LATE: ['pending', ATTENDANCE_LABEL.LATE], ABSENT: ['failed', ATTENDANCE_LABEL.ABSENT], NO_CHECKIN: ['disabled', ATTENDANCE_LABEL.NO_CHECKIN] };
const WEEK = { true: ['completed', 'Lengkap'], false: ['pending', 'Belum lengkap'] };
const day = (ymd) => formatDate(new Date(`${ymd}T05:00:00Z`));
/** Senin awal minggu dari tanggal "YYYY-MM-DD". */
const weekStart = (ymd) => { const d = new Date(`${ymd}T12:00:00Z`); const w = (d.getUTCDay() + 6) % 7; return new Date(d.getTime() - w * 864e5).toISOString().slice(0, 10); };
const openMap = (lat, lng) => window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank', 'noopener');
/** Bukti selfie dari data check in (PRD Scope 2 §2.3); prototipe memakai foto contoh. */
const Selfie = ({ n }) => (n ? (
  <img src={selfieUrl(n)} alt="Foto selfie check in" width={32} height={32}
    style={{ width: 32, height: 32, borderRadius: 'var(--rounded-8)', boxShadow: 'var(--shadow-stroke)', objectFit: 'cover', display: 'block' }} />
) : '-');

/** Detail produktivitas satu orang (PRD v3 §B3) — tampilan harian, mingguan, bulanan. */
export function ProductivityDrawer({ person, tab, period, onClose }) {
  const area = AREAS.find((a) => a.id === person.areaId);
  // Jam = jam server dalam zona area pengguna yang tercatat di setiap check in (PRD Scope 2 S8: WIB/WITA/WIT).
  const time = (d, rec) => formatTimeLocal(d, rec?.tz ? rec : area);
  const [rows, setRows] = useState(null);
  const [weeks, setWeeks] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);
  const [attWeeks, setAttWeeks] = useState({ weeks: [], thisWeek: null });
  const [mode, setMode] = useState('harian');
  const key = `${person.id}|${tab}|${period.from}|${period.to}`;
  const fetchRows = () => (tab === 'kunjungan'
    ? visitDetail(person.id, period).then((r) => { setWeeks(r.weeks); setThisWeek(r.thisWeek); return r.rows; })
    : Promise.all([attendanceDetail(person.id, period), attendanceWeekDetail(person.id, period)]).then(([r, w]) => { setAttWeeks(w); return r; }));
  const today = todayDate();
  const corrections = tab === 'absensi' && rows ? rows.filter((a) => a.corrections?.length).flatMap((a) => a.corrections.map((c) => ({ ...c, date: a.date, tz: a }))) : [];
  const statusText = (st) => ATT[st]?.[1] ?? '-';
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
        // Check-out kunjungan opsional (PRD Scope 2 S13): toko dihitung saat check-in diterima.
        { key: 'in', header: 'Check in / out', render: (v) => nowrap(`${time(v.checkInAt, v)} – ${v.checkOutAt ? time(v.checkOutAt, v) : 'tanpa check-out'}`) },
        { key: 'dur', header: 'Durasi', render: (v) => (v.checkOutAt ? `${Math.round((new Date(v.checkOutAt) - new Date(v.checkInAt)) / 60000)} menit` : '-') },
        { key: 'dist', header: 'Jarak ke toko', align: 'right', render: (v) => formatKm(v.distanceKm) },
        { key: 'ev', header: 'Bukti', render: (v) => ({ misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie n={v.selfie} /><LinkButton size="sm" onClick={() => openMap(v.lat, v.lng)}>Peta</LinkButton></span> }) },
      ];
    } else {
      columns = [
        { key: 'date', header: 'Tanggal', render: (a) => ({ priority: 'regular', title: nowrap(day(a.date)) }) },
        { key: 'status', header: 'Status', render: (a) => ({ misc: true, children: (
          <span style={{ display: 'inline-flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <StatusBadge status={ATT[a.status][0]}>{ATT[a.status][1]}</StatusBadge>
            {a.corrections?.length > 0 && <StatusBadge status="information">Dikoreksi TL</StatusBadge>}
          </span>
        ) }) },
        { key: 'in', header: 'Check in', render: (a) => (a.clockInAt ? time(a.clockInAt, a) : '-') },
        // Check in tanpa check out sebelum 23:59 = Absen (PRD S13); kolom check out menandai "Tidak check out".
        { key: 'out', header: 'Check out', render: (a) => (a.clockOutAt ? time(a.clockOutAt, a) : a.clockInAt ? (a.date < today ? 'Tidak check out' : ATTENDANCE_LABEL.CHECKED_IN) : '-') },
        { key: 'place', header: 'Lokasi', render: (a) => (a.place ? { priority: 'regular', title: a.place.name, description: `${a.place.kind === 'OFFICE' ? 'Kantor terdaftar' : 'Toko partner'} · ${formatKm(a.distanceKm)}` } : '-') },
        { key: 'ev', header: 'Bukti', render: (a) => (a.clockInAt ? { misc: true, children: <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}><Selfie n={a.selfie} /><LinkButton size="sm" onClick={() => openMap(a.lat, a.lng)}>Peta</LinkButton></span> } : '-') },
      ];
    }
    data = rows.map((r, i) => ({ ...r, id: r.id ?? `${r.date}-${i}` }));
  } else if (tab === 'kunjungan' && mode === 'mingguan') {
    data = weeks.map((w) => ({ ...w, id: w.start }));
    columns = [
      { key: 'p', header: 'Minggu', render: (w) => ({ priority: 'regular', title: nowrap(groupLabel(w.start)) }) },
      { key: 's', header: 'Status', render: (w) => ({ misc: true, children: <StatusBadge status={WEEK[w.complete][0]}>{weekStatusLabel(w)}</StatusBadge> }) },
      { key: 'run', header: '', render: (w) => (w.closed ? '' : 'Minggu berjalan') },
    ];
  } else if (tab === 'kunjungan') {
    const m = new Map();
    weeks.filter((w) => w.closed).forEach((w) => { const k = w.start.slice(0, 7); m.set(k, [...(m.get(k) ?? []), w]); });
    data = [...m.entries()].map(([k, ws]) => ({ id: k, k, ws }));
    columns = [
      { key: 'p', header: 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(monthLabel(g.k, true)) }) },
      { key: 'weeks', header: 'Minggu lengkap', align: 'right', render: (g) => `${g.ws.filter((w) => w.complete).length}/${g.ws.length}` },
    ];
  } else {
    const m = new Map();
    rows.forEach((r) => { const k = groupKey(r.date); m.set(k, [...(m.get(k) ?? []), r]); });
    data = [...m.entries()].map(([k, rs]) => ({ id: k, k, rs }));
    columns = [
      { key: 'p', header: mode === 'mingguan' ? 'Minggu' : 'Bulan', render: (g) => ({ priority: 'regular', title: nowrap(groupLabel(g.k)) }) },
      { key: 'present', header: mode === 'mingguan' ? 'Check-in / target' : ATTENDANCE_LABEL.CHECKED_IN, align: 'right', render: (g) => {
        const c = new Set(g.rs.filter(isPresent).map((a) => a.date)).size;
        return mode === 'mingguan' ? attendanceWeekLabel({ checkIns: c, target: 6 }) : String(c);
      } },
      { key: 'on', header: ATTENDANCE_LABEL.ON_TIME, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ON_TIME').length) },
      { key: 'late', header: ATTENDANCE_LABEL.LATE, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'LATE').length) },
      { key: 'out', header: ATTENDANCE_LABEL.CHECKED_OUT, align: 'right', render: (g) => String(g.rs.filter((a) => a.clockOutAt).length) },
      { key: 'abs', header: ATTENDANCE_LABEL.ABSENT, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'ABSENT').length) },
      { key: 'nci', header: ATTENDANCE_LABEL.NO_CHECKIN, align: 'right', render: (g) => String(g.rs.filter((a) => a.status === 'NO_CHECKIN').length) },
    ];
  }

  return (
    <Drawer open width={860} onClose={onClose}
      header={<DrawerHeader size="lg" title={person.name} description={`${person.role} · ${tab === 'kunjungan' ? 'Kunjungan' : 'Absensi'} · ${period.label}`} icon={tab === 'kunjungan' ? 'MapPinLine' : 'CalendarLine'} onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        {tab === 'absensi' && attWeeks.thisWeek && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap', font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
            Absensi minggu ini
            <StatusBadge status={attWeeks.thisWeek.met ? 'completed' : 'pending'}>{attendanceWeekLabel(attWeeks.thisWeek)}</StatusBadge>
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
              Minggu tercapai pada periode: {attWeeks.weeks.filter((w) => w.closed && w.met).length}/{attWeeks.weeks.filter((w) => w.closed).length}
            </span>
          </div>
        )}
        {tab === 'kunjungan' && thisWeek.length > 0 && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {/* Satu baris per toko dengan partner sebagai keterangan, sama dengan Android (keputusan 2026-10-20 No 6). */}
            <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>Toko minggu ini</h3>
            {thisWeek.flatMap((g) => g.stores.map((st) => ({ ...st, partnerName: g.partnerName }))).map((st) => (
              <div key={st.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-8)', padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{st.name}</span>
                  <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{st.partnerName}</span>
                </span>
                <StatusBadge status={st.visited ? 'completed' : 'pending'}>{st.visited ? 'Sudah dikunjungi' : 'Belum dikunjungi'}</StatusBadge>
              </div>
            ))}
          </section>
        )}
        <SegmentedControl value={mode} onChange={setMode} items={[{ value: 'harian', label: 'Harian' }, { value: 'mingguan', label: 'Mingguan' }, { value: 'bulanan', label: 'Bulanan' }]} style={{ alignSelf: 'flex-start' }} />
        <div style={{ overflowX: 'auto' }}>
          <DataTable loading={!rows} rows={data} columns={columns} minWidth={720} />
          {rows && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada data pada periode ini.</span>}
        </div>
        {corrections.length > 0 && (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            <h3 style={{ margin: 0, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>Koreksi absensi oleh TL</h3>
            {corrections.map((c, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
                <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
                  {day(c.date)}: {statusText(c.from.status)}{c.from.clockInAt ? ` (${time(c.from.clockInAt, c.tz)})` : ''} menjadi {statusText(c.to.status)}{c.to.clockInAt ? ` (${time(c.to.clockInAt, c.tz)})` : ''}
                </span>
                <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{c.by} · {formatDateTime(c.at)} · Alasan: {c.reason}</span>
              </div>
            ))}
          </section>
        )}
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Jam memakai waktu server sesuai zona area pengguna (WIB/WITA/WIT). Foto selfie di prototipe ini adalah foto contoh.</span>
      </div>
    </Drawer>
  );
}
