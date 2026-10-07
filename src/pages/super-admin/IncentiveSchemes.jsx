import { useEffect, useState } from 'react';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { listSchemes } from '../../api/mockApi.js';
import { RECIPIENT_LABEL } from '../../api/db.js';
import { useScenario } from '../../dev/scenario.js';
import { preset } from '../../dev/presets.js';
import { formatDateWIB, monthLabel } from '../../lib/format.js';
import { componentSummary } from './schemeText.js';
import { SchemeDrawer } from './SchemeDrawer.jsx';

/** S1 · Skema Insentif (Super Admin): daftar skema per penerima; klik baris untuk melihat dan mengubah. */
export function IncentiveSchemes(props) {
  const { tableState } = useScenario();
  return <IncentiveSchemesView key={tableState} {...props} />;
}

function IncentiveSchemesView({ user, onLogout }) {
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [openId, setOpenId] = useState(preset?.scheme?.open ?? null);
  const [highlight, setHighlight] = useState(null);
  const load = (retry) => { listSchemes({ retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  useEffect(() => { load(false); }, []);

  const columns = [
    { key: 'name', header: 'Skema', render: (s) => ({ priority: 'leading', title: s.name, description: `Penerima: ${RECIPIENT_LABEL[s.recipient]}` }) },
    { key: 'components', header: 'Komponen', render: (s) => ({ priority: 'passive', title: <span style={{ display: 'flex', flexDirection: 'column' }}>{s.components.map((c) => <span key={c.key}>{componentSummary(c)}</span>)}</span> }) },
    { key: 'payday', header: 'Dibayar', render: (s) => nowrap(`Tgl ${s.payday} bulan berikutnya`) },
    { key: 'effective', header: 'Berlaku Mulai', render: (s) => nowrap(monthLabel(s.effectiveFrom, true)) },
    { key: 'updated', header: 'Terakhir Diubah', render: (s) => { const f = formatDateWIB(s.updatedAt); return { priority: 'regular', title: nowrap(f.date), description: s.updatedBy }; } },
  ];
  return (
    <AdminShell active="/skema-insentif" icon="CoinsLine" title="Skema Insentif" description="Kelola tarif insentif SA/SR, TL, dan Partner yang dipakai untuk menghitung estimasi insentif." user={user} onLogout={onLogout}>
      <ListCard view={view} onRetry={() => { setView('loading'); load(true); }} emptyMessage="Belum ada skema insentif.">
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} highlight={highlight} minWidth={1100} onRowClick={(s) => setOpenId(s.id)} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Semua skema dibayar sekali sebulan. Perubahan berlaku mulai bulan yang dipilih; bulan sebelumnya tetap memakai tarif lama.</span>
      {openId && <SchemeDrawer id={openId} user={user} startEditing={preset?.scheme?.editing} onClose={() => setOpenId(null)}
        onSaved={(s) => { setRows((r) => r.map((x) => (x.id === s.id ? s : x))); setHighlight(s.id); }} />}
    </AdminShell>
  );
}
