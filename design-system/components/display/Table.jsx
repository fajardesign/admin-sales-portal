import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Sorting Icons [1.1] — up/down caret stack; dir: none | asc | desc. */
export function SortingIcon({ dir = 'none' }) {
  return <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name={dir === 'asc' ? 'ArrowUpSFill' : dir === 'desc' ? 'ArrowDownSFill' : 'ExpandUpDownFill'} size={16} /></span>;
}

/** Table Header Cell [1.1] — bg-weak-50, 12px sub text, optional sort. */
export function TableHeaderCell({ children, sort, onSort, align = 'left', width, first, last, style }) {
  return (
    <th onClick={onSort} style={{ padding: '8px 12px', background: 'var(--bg-weak-50)', textAlign: align, width, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', fontWeight: 400, cursor: onSort ? 'pointer' : 'default', whiteSpace: 'nowrap',
      borderRadius: first ? '8px 0 0 8px' : last ? '0 8px 8px 0' : 0, ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{children}{sort !== undefined && <SortingIcon dir={sort} />}</span>
    </th>
  );
}

/** Table Row Cell [1.1] — white cell, 1px bottom divider; size lg (48) | xl (64). */
export function TableRowCell({ children, size = 'xl', align = 'left', style }) {
  return <td style={{ height: size === 'xl' ? 64 : 48, padding: '12px', textAlign: align, borderBottom: '1px solid var(--stroke-soft-200)', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)', boxSizing: 'border-box', ...style }}>{children}</td>;
}

/** Table — columns: [{key, header, render?, align?, width?, sortable?}], rows: object[]. Hover highlights rows. */
export function Table({ columns = [], rows = [], size = 'xl', onRowClick, style }) {
  const [sort, setSort] = React.useState({ key: null, dir: 'none' });
  const [hover, setHover] = React.useState(-1);
  const sorted = React.useMemo(() => {
    if (!sort.key || sort.dir === 'none') return rows;
    return [...rows].sort((a, b) => (a[sort.key] > b[sort.key] ? 1 : -1) * (sort.dir === 'asc' ? 1 : -1));
  }, [rows, sort]);
  return (
    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, ...style }}>
      <thead><tr>{columns.map((c, i) => (
        <TableHeaderCell key={c.key} align={c.align} width={c.width} first={i === 0} last={i === columns.length - 1}
          sort={c.sortable ? (sort.key === c.key ? sort.dir : 'none') : undefined}
          onSort={c.sortable ? () => setSort({ key: c.key, dir: sort.key === c.key && sort.dir === 'asc' ? 'desc' : 'asc' }) : undefined}>{c.header}</TableHeaderCell>))}</tr></thead>
      <tbody>{sorted.map((r, ri) => (
        <tr key={r.id ?? ri} onMouseEnter={() => setHover(ri)} onMouseLeave={() => setHover(-1)} onClick={() => onRowClick && onRowClick(r)} style={{ background: hover === ri ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', cursor: onRowClick ? 'pointer' : 'default' }}>
          {columns.map((c) => <TableRowCell key={c.key} size={size} align={c.align}>{c.render ? c.render(r) : r[c.key]}</TableRowCell>)}
        </tr>))}</tbody>
    </table>
  );
}
/* Figma family aliases (source set names) */
export const TableRowCell11 = TableRowCell;
export const TableHeaderCell11 = TableHeaderCell;
export const SortingIcons11 = SortingIcon;
export default Table;
