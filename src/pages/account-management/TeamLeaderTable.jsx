import { StatusBadge, TableHeaderCell, TableRowCell } from '@ds/index.js';
import { formatDateWIB, formatPhone, fullName, initials } from '../../lib/format.js';

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
        {loading ? [1, 2, 3, 4, 5].map((k) => <SkeletonRow key={k} />) : rows.map((u) => {
          const created = formatDateWIB(u.createdAt);
          return (
            <tr key={u.id} style={{ background: u.id === highlightId ? 'var(--primary-alpha-10)' : 'transparent', transition: 'background var(--duration-base) var(--ease-standard)' }}>
              <TableRowCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                  <div style={{ width: 32, height: 32, flex: 'none', borderRadius: 'var(--rounded-full)', background: 'var(--bg-weak-50)', boxShadow: 'var(--shadow-stroke)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--label-xs)', color: 'var(--text-sub-600)' }}>{initials(u)}</div>
                  <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{fullName(u)}</span>
                </div>
              </TableRowCell>
              <TableRowCell><span style={{ color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{u.email}</span></TableRowCell>
              <TableRowCell><span style={{ color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{formatPhone(u.phone)}</span></TableRowCell>
              <TableRowCell>
                <StatusBadge status={u.active ? 'completed' : 'pending'} dot>{u.active ? 'Aktif' : 'Belum aktif'}</StatusBadge>
              </TableRowCell>
              <TableRowCell>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{created.date}</span>
                  <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>{created.time}</span>
                </div>
              </TableRowCell>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const bar = (width, height = 12, round = 'var(--rounded-6)') => (
  <div style={{ width, height, borderRadius: round, background: 'var(--bg-soft-200)', animation: 'sk-pulse 1.4s ease-in-out infinite' }} />
);
const td = { height: 64, padding: 'var(--space-12)', borderBottom: '1px solid var(--stroke-soft-200)' };

function SkeletonRow() {
  return (
    <tr>
      <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>{bar(32, 32, 'var(--rounded-full)')}{bar(SKELETON_WIDTHS[0])}</div></td>
      {SKELETON_WIDTHS.slice(1).map((w, i) => <td key={i} style={td}>{bar(w, i === 2 ? 20 : 12)}</td>)}
    </tr>
  );
}
