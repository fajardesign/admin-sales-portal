import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Radio } from '../forms/Radio.jsx';

/** Sorting Icons [1.1] — 20px caret stack; dir: none | asc | desc. */
export function SortingIcon({ dir = 'none', disabled }) {
  return <span style={{ color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-soft-400)', display: 'flex', flex: 'none' }}><Icon name={dir === 'asc' ? 'ArrowUpSFill' : dir === 'desc' ? 'ArrowDownSFill' : 'ExpandUpDownFill'} size={20} /></span>;
}

/** Table Header Cell [1.1] — 40px, bg-weak-50, Paragraph/Small sub-600, optional checkbox + sort. State Disabled greys text/icons; no children = State Empty (action column). */
export function TableHeaderCell({ children, sort, onSort, align = 'left', width, first, last, disabled, checkbox, style }) {
  const clickable = onSort && !disabled;
  return (
    <th onClick={clickable ? onSort : undefined} style={{ height: 40, padding: '8px 12px', background: 'var(--bg-weak-50)', textAlign: align, width, verticalAlign: 'middle', boxSizing: 'border-box',
      font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', fontWeight: 400, color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)', cursor: clickable ? 'pointer' : 'default', whiteSpace: 'nowrap',
      borderRadius: first && last ? 8 : first ? '8px 0 0 8px' : last ? '0 8px 8px 0' : 0, ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {checkbox && <span onClick={(e) => e.stopPropagation()} style={{ display: 'flex' }}><Checkbox {...checkbox} disabled={disabled || checkbox.disabled} /></span>}
        {(children != null || sort !== undefined) && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{children}{sort !== undefined && <SortingIcon dir={sort} disabled={disabled} />}</span>}
      </span>
    </th>
  );
}

const TITLE_FONT = { leading: ['var(--label-sm)', 'var(--label-sm-ls)', 'var(--text-strong-950)'], regular: ['var(--paragraph-sm)', 'var(--paragraph-sm-ls)', 'var(--text-strong-950)'], passive: ['var(--paragraph-sm)', 'var(--paragraph-sm-ls)', 'var(--text-sub-600)'] };

/** Table Row Cell [1.1] — size lg (48) | xl (64). Structured mode (title set): priority leading | regular | passive, optional checkbox/radio + media (KeyIcon md/Avatar 40 on xl, KeyIcon sm/Avatar 24 on lg), description on xl only. misc: tighter 12px padding for buttons, toggles, badges, progress, avatar groups. Hover bg comes from the row. */
export function TableRowCell({ children, size = 'xl', align = 'left', priority = 'regular', title, description, media, checkbox, radio, misc, style }) {
  const [font, ls, color] = TITLE_FONT[priority] || TITLE_FONT.regular;
  const structured = title != null || media || checkbox || radio;
  return (
    <td style={{ height: size === 'xl' ? 64 : 48, padding: misc ? 12 : '12px 20px 12px 12px', textAlign: align, verticalAlign: 'middle', boxSizing: 'border-box',
      font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)', ...style }}>
      {structured ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {checkbox && <span onClick={(e) => e.stopPropagation()} style={{ display: 'flex' }}><Checkbox {...checkbox} /></span>}
          {radio && <span onClick={(e) => e.stopPropagation()} style={{ display: 'flex' }}><Radio {...radio} /></span>}
          {media && <span style={{ display: 'flex', flex: 'none' }}>{media}</span>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
            {title != null && <span style={{ font, letterSpacing: ls, color }}>{title}</span>}
            {description != null && size === 'xl' && <span style={{ font: 'var(--paragraph-xs)', letterSpacing: 'var(--paragraph-xs-ls)', color: 'var(--text-sub-600)' }}>{description}</span>}
            {children}
          </div>
        </div>
      ) : misc ? <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: align === 'right' ? 'flex-end' : align === 'center' ? 'center' : 'flex-start' }}>{children}</div> : children}
    </td>
  );
}

/** Content Divider [1.1] between table rows — 4px gap, 1px stroke-soft-200 line, 4px gap. */
export function TableRowDivider({ colSpan }) {
  return <tr aria-hidden="true"><td colSpan={colSpan} style={{ padding: '4px 0' }}><div style={{ height: 4, display: 'flex', alignItems: 'center' }}><div style={{ flex: 1, height: 1, background: 'var(--stroke-soft-200)' }} /></div></td></tr>;
}

/** Table — columns: [{key, header, render?, align?, width?, sortable?, misc?}], rows: object[]. 8px gap under the header, dividers between rows, hover bg-weak-50. */
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
      <tbody>
        <tr aria-hidden="true" style={{ height: 8 }} />
        {sorted.map((r, ri) => (
          <React.Fragment key={r.id ?? ri}>
            {ri > 0 && <TableRowDivider colSpan={columns.length} />}
            <tr onMouseEnter={() => setHover(ri)} onMouseLeave={() => setHover(-1)} onClick={() => onRowClick && onRowClick(r)} style={{ background: hover === ri ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', cursor: onRowClick ? 'pointer' : 'default' }}>
              {columns.map((c) => <TableRowCell key={c.key} size={size} align={c.align} misc={c.misc}>{c.render ? c.render(r) : r[c.key]}</TableRowCell>)}
            </tr>
          </React.Fragment>))}
      </tbody>
    </table>
  );
}
/* Figma family aliases (source set names) */
export const TableRowCell11 = TableRowCell;
export const TableHeaderCell11 = TableHeaderCell;
export const SortingIcons11 = SortingIcon;
export default Table;
