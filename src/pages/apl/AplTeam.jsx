import { useEffect, useState } from 'react';
import { Avatar, Drawer, DrawerHeader, Select, StatusBadge } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { KeyValueGrid, SectionCard } from '../../components/KeyValueGrid.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { ATTENDANCE_TODAY, aplTeam, personSummary, weekStatusLabel } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { TL_LEVEL, areaName } from '../../lib/constants.js';
import { formatDate, formatNumber, formatPct, formatPhone, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';

const TODAY_BADGE = { ON_TIME: 'completed', LATE: 'pending', CHECKED_OUT: 'information', NONE: 'disabled', OFF: 'disabled' };

/** B5 · Tim (PRD v3): TL dan SA/SR aktif di area APL dengan atasan, partner, dan absensi hari ini; klik untuk detail orang. */
export function AplTeam(props) {
  const { tableState } = useScenario();
  return <AplTeamView key={tableState} {...props} />;
}

function AplTeamView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [person, setPerson] = useState(null);
  const set = (patch) => navigate(withQuery('/apl/tim', { ...q, ...patch }));
  const key = JSON.stringify({ areaIds, role: q.role, s: q.q });
  const load = (retry) => { setView('loading'); aplTeam(areaIds, { q: q.q, role: q.role }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const columns = [
    { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', media: <Avatar size={40} color={0} name={r.name} />, title: nowrap(r.name), description: r.leader ? `Atasan: ${r.leader}` : undefined }) },
    { key: 'role', header: 'Role', render: (r) => ({ priority: 'regular', title: r.role, description: r.role === 'TL' ? TL_LEVEL[r.tlLevel] : undefined }) },
    { key: 'area', header: 'Area', render: (r) => areaName(r.areaId) },
    { key: 'registered', header: 'Tanggal Terdaftar', render: (r) => nowrap(formatDate(r.registeredAt)) },
    { key: 'contact', header: 'Kontak', render: (r) => ({ priority: 'passive', title: nowrap(r.email), description: formatPhone(r.phone) }) },
    { key: 'partners', header: 'Partner', render: (r) => ({ priority: 'regular', title: `${r.partners.length} partner`, description: r.partners.slice(0, 2).join(', ') + (r.partners.length > 2 ? ', …' : '') }) },
    { key: 'today', header: 'Absensi hari ini', render: (r) => ({ misc: true, children: <StatusBadge status={TODAY_BADGE[r.today]}>{ATTENDANCE_TODAY[r.today]}</StatusBadge> }) },
  ];
  return (
    <AdminShell active="/apl/tim" icon="TeamLine" title="Tim" description="TL dan SA/SR aktif di area Anda." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/tim" query={query} user={user} period={period}>
        <div style={{ width: 150 }}><Select size="sm" value={q.role ?? ''} placeholder="Semua role" onChange={(v) => set({ role: v })} options={[{ value: '', label: 'Semua role' }, { value: 'TL', label: 'TL' }, { value: 'SR', label: 'SR' }, { value: 'SA', label: 'SA' }]} /></div>
      </PeriodFilter>
      <SearchField placeholder="Cari nama atau email" value={q.q ?? ''} onChange={(v) => set({ q: v })} />
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={q.q || q.role ? 'Tidak ada anggota tim yang sesuai dengan pencarian atau filter.' : 'Belum ada anggota tim aktif.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{rows.length} anggota aktif · periode ringkasan: {period.label}</span>}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1200} onRowClick={setPerson} />}
      </ListCard>
      {person && <PersonDrawer person={person} period={period} onClose={() => setPerson(null)} />}
    </AdminShell>
  );
}

/** Detail orang: profil, partner yang dipegang, ringkasan penjualan & produktivitas periode. */
function PersonDrawer({ person: r, period, onClose }) {
  const [s, setS] = useState(null);
  useEffect(() => { personSummary(r.id, period).then(setS); }, [r.id, period]);
  return (
    <Drawer open width={560} onClose={onClose} header={<DrawerHeader size="lg" title={r.name} description={`${r.role}${r.role === 'TL' ? ` ${TL_LEVEL[r.tlLevel]}` : ''} · ${areaName(r.areaId)}`} onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <SectionCard title="Profil">
          <KeyValueGrid items={[
            { label: 'Email', value: r.email, full: true }, { label: 'Telepon', value: formatPhone(r.phone) }, { label: 'Tanggal Terdaftar', value: formatDate(r.registeredAt) },
            { label: 'Atasan', value: r.leader }, { label: 'Absensi hari ini', value: ATTENDANCE_TODAY[r.today] },
            { label: 'Partner', value: r.partners.join(', ') || 'Belum ada', full: true },
          ]} />
        </SectionCard>
        <SectionCard title={`Penjualan · ${period.label}`}>
          <KeyValueGrid items={s ? [
            { label: 'Diajukan', value: formatNumber(s.sales.submitted) }, { label: 'Diterima', value: formatNumber(s.sales.accepted) },
            { label: 'Cair', value: formatNumber(s.sales.paidOut) }, { label: 'Nominal cair', value: formatRp(s.sales.paidOutAmount) },
          ] : [{ label: 'Memuat', value: '…' }]} />
        </SectionCard>
        <SectionCard title={`Produktivitas · ${period.label}`}>
          <KeyValueGrid items={s ? [
            { label: 'Tingkat kehadiran', value: formatPct(s.productivity.attendanceRate) }, { label: 'Tepat waktu', value: formatPct(s.productivity.onTimeRate) },
            { label: 'Minggu kunjungan lengkap', value: `${s.productivity.visitWeeksComplete}/${s.productivity.visitWeeks}` },
            { label: 'Kunjungan minggu ini', value: weekStatusLabel(s.thisWeek) },
          ] : [{ label: 'Memuat', value: '…' }]} />
        </SectionCard>
      </div>
    </Drawer>
  );
}
