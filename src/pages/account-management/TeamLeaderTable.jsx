import React from 'react';
import { Avatar, StatusBadge, TableHeaderCell, TableRowCell, TableRowDivider } from '@ds/index.js';
import { formatDateWIB, formatPhone, fullName } from '../../lib/format.js';

const COLS = ['Nama', 'Email', 'Telepon', 'Status', 'Dibuat'];
const SKELETON_WIDTHS = [120, 160, 110, 72, 90];

/** Tabel Team Leader (W2a). Baris baru disorot primary-alpha-10 selama 3 detik. */
export function TeamLeaderTable({ rows, loading, highlightId }) {
  return (
    <table style={{ width: '100%', minWidth: 860, borderCollapse: 'separate', borderSpacing: 0, marginTop: 'var(--space-12)' }}>
      <thead>
        <tr>
          {COLS.map((c, i) => (
            <TableHeaderCell key={c} first={i === 0} last={i === COLS.length - 1} sort={i === COLS.length - 1 ? 'desc' : undefined}>{c}</TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr aria-hidden="true" style={{ height: 'var(--space-8)' }} />
        {loading ? [1, 2, 3, 4, 5].map((k) => (
          <React.Fragment key={k}>{k > 1 && <TableRowDivider colSpan={COLS.length} />}<SkeletonRow /></React.Fragment>
        )) : rows.map((u, ri) => {
          const created = formatDateWIB(u.createdAt);
          return (
            <React.Fragment key={u.id}>
            {ri > 0 && <TableRowDivider colSpan={COLS.length} />}
            <tr style={{ background: u.id === highlightId ? 'var(--primary-alpha-10)' : 'transparent', transition: 'background var(--duration-base) var(--ease-standard)' }}>
              <TableRowCell priority="leading" media={<Avatar size={40} color={0} name={fullName(u)} />} title={<span style={{ whiteSpace: 'nowrap' }}>{fullName(u)}</span>} />
              <TableRowCell priority="passive" title={<span style={{ whiteSpace: 'nowrap' }}>{u.email}</span>} />
              <TableRowCell priority="passive" title={<span style={{ whiteSpace: 'nowrap' }}>{formatPhone(u.phone)}</span>} />
              <TableRowCell misc>
                <StatusBadge status={u.active ? 'completed' : 'pending'} dot>{u.active ? 'Aktif' : 'Belum aktif'}</StatusBadge>
              </TableRowCell>
              <TableRowCell title={<span style={{ whiteSpace: 'nowrap' }}>{created.date}</span>} description={created.time} />
            </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

const bar = (width, height = 12, round = 'var(--rounded-6)') => (
  <div style={{ width, height, borderRadius: round, background: 'var(--bg-soft-200)', animation: 'sk-pulse 1.4s ease-in-out infinite' }} />
);

function SkeletonRow() {
  return (
    <tr>
      <TableRowCell media={bar(40, 40, 'var(--rounded-full)')} title={bar(SKELETON_WIDTHS[0])} />
      {SKELETON_WIDTHS.slice(1).map((w, i) => <TableRowCell key={i} misc={i === 2}>{bar(w, i === 2 ? 20 : 12)}</TableRowCell>)}
    </tr>
  );
}
