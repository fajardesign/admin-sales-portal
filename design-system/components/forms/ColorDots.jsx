import React from 'react';

export const DOT_COLORS = { gray: 'var(--neutral-slate-500)', blue: 'var(--jewel-blue-500)', orange: 'var(--orange-500)', red: 'var(--red-500)', green: 'var(--green-500)', yellow: 'var(--yellow-500)', purple: 'var(--purple-500)', sky: 'var(--blue-500)', pink: 'var(--pink-500)', teal: 'var(--teal-500)' };

/** Color Dots [1.1] — swatch picker dots (color picker / tag colors). */
export function ColorDot({ color = 'blue', selected = false, disabled = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  const c = DOT_COLORS[color] || color;
  const s = hover && !selected ? 14 : 16;
  return (
    <button type="button" onClick={onClick} disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 24, height: 24, padding: 0, border: 'none', background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <span style={{ width: s, height: s, borderRadius: '50%', background: disabled ? 'var(--bg-soft-200)' : c, boxShadow: selected ? `inset 0 0 0 2px var(--stroke-white-0), 0px 0px 0px 1.5px ${c}` : 'none', transition: 'width var(--duration-fast), height var(--duration-fast)' }} />
    </button>
  );
}

/** Color Dots row — single-select. */
export function ColorDots({ colors = Object.keys(DOT_COLORS), value, onChange, style }) {
  return <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', ...style }}>{colors.map((c) => <ColorDot key={c} color={c} selected={value === c} onClick={() => onChange && onChange(c)} />)}</div>;
}
/* Figma family aliases (source set names) */
export const ColorDots11 = ColorDots;
export default ColorDots;
