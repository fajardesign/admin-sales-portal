import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Vertical Filter Items [1.1] — filter row in a side filter panel: icon, label, value/count, chevron. */
export function VerticalFilterItem({ icon = 'CalendarLine', label, value, active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: 8, borderRadius: 8, border: 'none', cursor: 'pointer', textAlign: 'left', background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: hover ? 'none' : 'inset 0 0 0 1px var(--stroke-sub-300)' }}>
      <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>
      <span style={{ flex: 1, font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: active ? 'var(--text-strong-950)' : 'var(--text-sub-600)' }}>{label}</span>
      {value && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-soft-400)' }}>{value}</span>}
      <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="ArrowRightSLine" /></span>
    </button>
  );
}

/** Horizontal Filter [1.1] — toolbar row above tables/calendars: left slot (segmented / button group), search, right actions. */
export function HorizontalFilter({ left, search, right, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, flex: 1, minWidth: 0 }}>{left}</div>
      {search}
      {right && <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{right}</div>}
    </div>
  );
}

/** Scroll [1.1] — scroll container with the slim 4px rounded thumb (bg-sub-300). */
export function ScrollArea({ children, height = 240, style }) {
  const id = React.useMemo(() => 'ab-scroll-' + Math.random().toString(36).slice(2, 8), []);
  return (
    <div className={id} style={{ height, overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'var(--bg-sub-300) transparent', ...style }}>
      <style>{`.${id}::-webkit-scrollbar{width:12px}.${id}::-webkit-scrollbar-thumb{background:var(--bg-sub-300);border-radius:999px;border:4px solid transparent;background-clip:content-box}`}</style>
      {children}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const HorizontalFilter11 = HorizontalFilter;
export const VerticalFilterItems11 = VerticalFilterItem;
export const VerticalFilterHeader11 = HorizontalFilter;
export const VerticalFilterFooter11 = HorizontalFilter;
export const Scroll11 = ScrollArea;
export default HorizontalFilter;
