import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Pagination Cells [1.1] — 32px page cell. state via selected/disabled; fullRadius for pill. */
export function PaginationCell({ children, selected = false, disabled = false, fullRadius = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ minWidth: 32, height: 32, padding: 6, borderRadius: fullRadius ? 999 : 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: selected ? 'var(--primary-lighter)' : hover && !disabled ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: selected ? 'inset 0 0 0 1px var(--primary-base)' : hover ? 'none' : 'var(--shadow-stroke)',
        color: disabled ? 'var(--text-disabled-300)' : selected ? 'var(--primary-base)' : 'var(--text-sub-600)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)' }}>
      {children}
    </button>
  );
}

function pages(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (cur >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '…', cur - 1, cur, cur + 1, '…', total];
}

/** Pagination Group [1.1] — "Page X of Y" + first/prev/pages/next/last. */
export function Pagination({ page = 1, total = 10, onChange, showSummary = true, fullRadius = false, style }) {
  const go = (p) => onChange && onChange(Math.min(total, Math.max(1, p)));
  const arrow = (name, p, dis) => <button type="button" disabled={dis} onClick={() => go(p)} style={{ border: 'none', background: 'none', borderRadius: 8, padding: 6, display: 'flex', cursor: dis ? 'not-allowed' : 'pointer', color: dis ? 'var(--icon-disabled-300)' : 'var(--icon-sub-600)' }}><Icon name={name} /></button>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, ...style }}>
      {showSummary && <span style={{ flex: 1, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>Page {page} of {total}</span>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {arrow('ArrowLeftSLine', page - 1, page <= 1)}
        {pages(page, total).map((p, i) => p === '…' ? <span key={'e' + i} style={{ width: 32, textAlign: 'center', color: 'var(--text-sub-600)', font: 'var(--label-sm)' }}>…</span> : <PaginationCell key={p} selected={p === page} fullRadius={fullRadius} onClick={() => go(p)}>{p}</PaginationCell>)}
        {arrow('ArrowRightSLine', page + 1, page >= total)}
      </div>
      {showSummary && <span style={{ flex: 1 }} />}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const PaginationCells11 = PaginationCell;
export const PaginationGroup11 = Pagination;
export default Pagination;
