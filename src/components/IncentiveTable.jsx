import { Badge } from '@ds/index.js';
import { DataTable } from './DataTable.jsx';
import { nowrap } from '../lib/cells.jsx';
import { achievementCell } from '../lib/achievement.jsx';
import { TL_LEVEL, areaName } from '../lib/constants.js';
import { formatRp } from '../lib/format.js';

/** Tabel hasil/estimasi insentif (APL B6, Super Admin E3): pencapaian, tier, komponen, total, versi skema. */
export function IncentiveTable({ rows, loading, showStatus = false }) {
  const columns = [
    { key: 'name', header: 'Penerima', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.role === 'TL' ? `TL ${TL_LEVEL[r.tlLevel]}` : r.role} · ${areaName(r.areaId)}` }) },
    { key: 'paid', header: 'Nominal Cair', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.paidOutAmount)), description: r.target ? nowrap(`Target ${formatRp(r.target)}`) : 'Target -' }) },
    { key: 'ach', header: 'Pencapaian', render: (r) => achievementCell(r.paidOutAmount, r.target) },
    { key: 'tier', header: 'Tier', render: (r) => nowrap(r.tier) },
    { key: 'components', header: 'Komponen', render: (r) => ({ priority: 'passive', title: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {r.components.map((c) => <span key={c.label}><span style={{ color: 'var(--text-strong-950)' }}>{c.label}: {nowrap(formatRp(c.amount))}</span> · {c.detail}</span>)}
      </span>
    ) }) },
    { key: 'total', header: 'Total', align: 'right', render: (r) => ({ priority: 'leading', title: nowrap(formatRp(r.total)) }) },
    { key: 'version', header: 'Versi', render: (r) => `Versi ${r.version}` },
    ...(showStatus ? [{ key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <Badge color={r.status === 'ESTIMATE' ? 'orange' : 'green'} size="md">{r.status === 'ESTIMATE' ? 'Estimasi' : 'Dibayar'}</Badge> }) }] : []),
  ];
  return <DataTable loading={loading} rows={rows} rowKey={(r) => `${r.kind}-${r.id}`} columns={columns} minWidth={1300} />;
}
