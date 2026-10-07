import { useEffect, useState } from 'react';
import { Avatar, Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { aplTeam } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { TL_LEVEL, areaName } from '../../lib/constants.js';
import { formatDate, formatPhone } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';

/** A3 · Tim: TL dan SA/SR aktif di bawah APL (hierarki APL → TL → SA/SR). */
export function AplTeam(props) {
  const { tableState } = useScenario();
  return <AplTeamView key={tableState} {...props} />;
}

function AplTeamView({ user, onLogout, query }) {
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const term = query.get('q') ?? '';
  const role = query.get('role') ?? '';
  const key = `${term}|${role}`;
  const load = (retry) => { setView('loading'); aplTeam(user.userId, { q: term, role }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const set = (patch) => navigate(withQuery('/apl/tim', { ...Object.fromEntries(query.entries()), ...patch }));

  const columns = [
    { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', media: <Avatar size={40} color={0} name={r.name} />, title: nowrap(r.name), description: r.leader ? `Atasan: ${r.leader}` : undefined }) },
    { key: 'role', header: 'Role', render: (r) => ({ priority: 'regular', title: r.role, description: r.role === 'TL' ? TL_LEVEL[r.tlLevel] : `${r.stores} toko` }) },
    { key: 'area', header: 'Area', render: (r) => areaName(r.areaId) },
    { key: 'registered', header: 'Tanggal Terdaftar', render: (r) => nowrap(formatDate(r.registeredAt)) },
    { key: 'email', header: 'Email', render: (r) => nowrap(r.email) },
    { key: 'phone', header: 'Telepon', render: (r) => nowrap(formatPhone(r.phone)) },
  ];
  return (
    <AdminShell active="/apl/tim" icon="TeamLine" title="Tim" description="TL dan SA/SR aktif di bawah supervisi Anda." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <SearchField placeholder="Cari nama atau email" value={term} onChange={(v) => set({ q: v })} />
        <div style={{ width: 180 }}>
          <Select size="sm" value={role} placeholder="Semua role" onChange={(v) => set({ role: v })}
            options={[{ value: '', label: 'Semua role' }, { value: 'TL', label: 'TL' }, { value: 'SR', label: 'SR' }, { value: 'SA', label: 'SA' }]} />
        </div>
      </div>
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={term || role ? 'Tidak ada anggota tim yang sesuai dengan pencarian atau filter.' : 'Belum ada anggota tim aktif.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{rows.length} anggota aktif</span>}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1100} />}
      </ListCard>
    </AdminShell>
  );
}
