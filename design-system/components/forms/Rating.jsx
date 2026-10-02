import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Rating Items [1.0] / Rating & Review [1.0] — 5 star (or heart) rating; interactive when onChange is set. */
export function Rating({ value = 0, max = 5, type = 'star', size = 20, onChange, showValue = false, reviews, style }) {
  const [hover, setHover] = React.useState(null);
  const shown = hover ?? value;
  const on = type === 'heart' ? 'var(--red-500)' : 'var(--yellow-500)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...style }}>
      <div style={{ display: 'flex', gap: 2 }} onMouseLeave={() => setHover(null)}>
        {Array.from({ length: max }).map((_, i) => {
          const fill = shown >= i + 1 ? 1 : shown > i ? 0.5 : 0;
          const name = type === 'heart' ? 'HeartFill' : 'StarFill';
          return (
            <span key={i} onMouseEnter={() => onChange && setHover(i + 1)} onClick={() => onChange && onChange(i + 1)} style={{ position: 'relative', width: size, height: size, cursor: onChange ? 'pointer' : 'default', color: 'var(--stroke-sub-300)' }}>
              <Icon name={name} size={size} />
              {fill > 0 && <span style={{ position: 'absolute', inset: 0, width: fill * size, overflow: 'hidden', color: on }}><Icon name={name} size={size} /></span>}
            </span>
          );
        })}
      </div>
      {showValue && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{value.toFixed(1)}{reviews != null && <span style={{ color: 'var(--text-sub-600)' }}> ({reviews} reviews)</span>}</span>}
    </div>
  );
}

/** Rating Cell [1.1] — bordered tile holding a single rating glyph (star / heart). */
export function RatingCell({ type = 'star', selected = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ padding: 12, borderRadius: 10, border: 'none', cursor: 'pointer', background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: hover ? 'none' : 'var(--shadow-stroke-xs)', color: selected ? (type === 'heart' ? 'var(--red-500)' : 'var(--yellow-500)') : 'var(--stroke-sub-300)', display: 'flex' }}>
      <Icon name={type === 'heart' ? 'HeartFill' : 'StarFill'} size={32} />
    </button>
  );
}

/** Rating Bar [1.1] — joined segmented scale (number 1–N or custom items like emoji). */
export function RatingBar({ items = [1, 2, 3, 4, 5], value, onChange, style }) {
  return (
    <div style={{ display: 'inline-flex', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow-stroke)', ...style }}>
      {items.map((it, i) => <RatingBarItem key={i} selected={value === i} onClick={() => onChange && onChange(i)}>{it}</RatingBarItem>)}
    </div>
  );
}
function RatingBarItem({ children, selected, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 64, padding: '8px 4px', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: 4, background: selected || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: 'inset 0 0 0 0.5px var(--stroke-soft-200), 0 0 0 0.5px var(--stroke-soft-200)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: selected || hover ? 'var(--text-strong-950)' : 'var(--text-sub-600)' }}>
      {children}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const RatingItems10 = Rating;
export const RatingReview10 = Rating;
export const RatingCell11 = RatingCell;
export const RatingBar11 = RatingBar;
export const RatingBarItems11 = RatingBar;
export const RatingBarArea11 = RatingBar;
export default Rating;
