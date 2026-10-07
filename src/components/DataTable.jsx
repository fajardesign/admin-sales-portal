import React, { useState } from 'react';
import { TableHeaderCell, TableRowCell, TableRowDivider } from '@ds/index.js';
import { bar } from '../lib/cells.jsx';

/**
 * Tabel daftar portal (komposisi TableHeaderCell/TableRowCell DS, pola "tabel kustom" di components.md).
 * columns: [{ key, header, sortKey?, render(row) → props TableRowCell atau node, width?, align? }]
 * sort: "key:asc|desc"; onSort(key). onRowClick → baris bisa diklik/Enter. highlight = rowKey baris baru yang disorot.
 */
export function DataTable({ columns, rows, rowKey = (r) => r.id, highlight, loading = false, sort, onSort, onRowClick, minWidth = 960, skeletonRows = 6 }) {
  const [sk, sd] = (sort || '').split(':');
  return (
    <table style={{ width: '100%', minWidth, borderCollapse: 'separate', borderSpacing: 0 }}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <TableHeaderCell key={c.key} first={i === 0} last={i === columns.length - 1} width={c.width} align={c.align}
              sort={c.sortKey ? (sk === c.sortKey ? sd : 'none') : undefined}
              onSort={c.sortKey && onSort ? () => onSort(c.sortKey) : undefined}>
              <span style={{ whiteSpace: 'nowrap' }}>{c.header}</span>
            </TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr aria-hidden="true" style={{ height: 'var(--space-8)' }} />
        {loading
          ? Array.from({ length: skeletonRows }, (_, k) => (
            <React.Fragment key={k}>{k > 0 && <TableRowDivider colSpan={columns.length} />}<SkeletonRow columns={columns} /></React.Fragment>
          ))
          : rows.map((r, ri) => (
            <React.Fragment key={rowKey(r)}>
              {ri > 0 && <TableRowDivider colSpan={columns.length} />}
              <Row columns={columns} row={r} highlighted={highlight != null && rowKey(r) === highlight} onClick={onRowClick ? () => onRowClick(r) : undefined} />
            </React.Fragment>
          ))}
      </tbody>
    </table>
  );
}

function Row({ columns, row, highlighted, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <tr
      onClick={onClick} tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter') onClick(); } : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: onClick ? 'pointer' : 'default', background: highlighted ? 'var(--primary-alpha-10)' : hover && onClick ? 'var(--bg-weak-50)' : 'transparent', outline: 'none', transition: 'background var(--duration-base) var(--ease-standard)' }}
    >
      {columns.map((c) => {
        const out = c.render ? c.render(row) : row[c.key];
        if (out && typeof out === 'object' && !React.isValidElement(out)) return <TableRowCell key={c.key} align={c.align} {...out} />;
        return <TableRowCell key={c.key} align={c.align} priority="passive" title={out ?? '-'} />;
      })}
    </tr>
  );
}

function SkeletonRow({ columns }) {
  return <tr>{columns.map((c, i) => <TableRowCell key={c.key}>{bar(i === 0 ? 140 : 90)}</TableRowCell>)}</tr>;
}

