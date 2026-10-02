import React from 'react';

const SZ = { sm: { p: [8, 16], pi: [8, 14], gap: 8, icon: 20 }, xs: { p: [6, 14], pi: [6, 12], gap: 6, icon: 20 }, '2xs': { p: [4, 12], pi: [4, 10], gap: 4, icon: 16 } };

/** Button Group Items [1.1] — one segment inside a ButtonGroup. */
export function ButtonGroupItem({ children, icon, iconRight, active = false, disabled = false, size = 'sm', onClick, first, last }) {
  const [hover, setHover] = React.useState(false);
  const s = SZ[size] || SZ.sm;
  const hasIcon = icon || iconRight;
  const p = !children ? `${s.p[0]}px` : hasIcon ? `${s.pi[0]}px ${s.pi[1]}px` : `${s.p[0]}px ${s.p[1]}px`;
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, padding: p, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: 'inset 0 0 0 0.5px var(--stroke-soft-200), 0 0 0 0.5px var(--stroke-soft-200)',
        borderRadius: first ? '8px 0 0 8px' : last ? '0 8px 8px 0' : 0,
        color: disabled ? 'var(--text-disabled-300)' : active ? 'var(--text-strong-950)' : 'var(--text-sub-600)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', whiteSpace: 'nowrap' }}>
      {icon}{children}{iconRight}
    </button>
  );
}

/** Button Group [1.1] — 2–6 joined segments; controlled via value/onChange or static items. */
export function ButtonGroup({ items = [], value, onChange, size = 'sm', style }) {
  return (
    <div style={{ display: 'inline-flex', borderRadius: 8, boxShadow: 'var(--shadow-xs)', ...style }}>
      {items.map((it, i) => {
        const key = it.value ?? it.label ?? i;
        return <ButtonGroupItem key={key} size={size} icon={it.icon} iconRight={it.iconRight} disabled={it.disabled} active={value === key}
          first={i === 0} last={i === items.length - 1} onClick={() => onChange && onChange(key)}>{it.label}</ButtonGroupItem>;
      })}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const ButtonGroup11 = ButtonGroup;
export const ButtonGroupItems11 = ButtonGroupItem;
export default ButtonGroup;
