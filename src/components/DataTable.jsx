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

const RIGHT_FONT = { leading: ['var(--label-sm)', 'var(--text-strong-950)'], regular: ['var(--paragraph-sm)', 'var(--text-strong-950)'], passive: ['var(--paragraph-sm)', 'var(--text-sub-600)'] };

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
        const obj = out && typeof out === 'object' && !React.isValidElement(out);
        // TableRowCell DS menata title/description dalam flex (abaikan textAlign) — kolom rata kanan dirender manual.
        if (c.align === 'right' && !(obj && out.misc)) {
          const o = obj ? out : { title: out ?? '-', priority: 'passive' };
          return (
            <TableRowCell key={c.key} align="right">
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--space-2)' }}>
                <span style={{ font: RIGHT_FONT[o.priority ?? 'regular'][0], color: RIGHT_FONT[o.priority ?? 'regular'][1] }}>{o.title}</span>
                {o.description != null && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{o.description}</span>}
              </span>
            </TableRowCell>
          );
        }
        if (obj) return <TableRowCell key={c.key} align={c.align} {...out} />;
        return <TableRowCell key={c.key} align={c.align} priority="passive" title={out ?? '-'} />;
      })}
    </tr>
  );
}

function SkeletonRow({ columns }) {
  return <tr>{columns.map((c, i) => <TableRowCell key={c.key}>{bar(i === 0 ? 140 : 90)}</TableRowCell>)}</tr>;
}

