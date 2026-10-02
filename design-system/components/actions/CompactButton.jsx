import React from 'react';

/** Compact Button [1.1] — tiny icon-only button (close, more). variant: stroke | ghost | white | modifiable; size lg (24) | md (20). */
export function CompactButton({ icon, variant = 'stroke', size = 'lg', fullRadius = false, active = false, disabled = false, onClick, style, 'aria-label': ariaLabel }) {
  const [hover, setHover] = React.useState(false);
  const h = hover && !disabled;
  const map = {
    stroke: { bg: active ? 'var(--bg-surface-800)' : h ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', sh: h || active ? 'none' : 'var(--shadow-stroke-xs)', fg: active ? 'var(--text-white-0)' : h ? 'var(--icon-strong-950)' : 'var(--icon-sub-600)' },
    ghost: { bg: active ? 'var(--bg-surface-800)' : h ? 'var(--bg-weak-50)' : 'transparent', sh: 'none', fg: active ? 'var(--text-white-0)' : h ? 'var(--icon-strong-950)' : 'var(--icon-sub-600)' },
    white: { bg: h ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', sh: 'var(--shadow-xs)', fg: 'var(--icon-sub-600)' },
    modifiable: { bg: h || active ? 'rgba(255,255,255,0.16)' : 'transparent', sh: active ? 'inset 0 0 0 1px var(--neutral-slate-0)' : 'none', fg: 'var(--neutral-slate-0)' },
  }[variant];
  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: size === 'md' ? 1 : 2, gap: 2, border: 'none', borderRadius: fullRadius ? 999 : 6,
        background: map.bg, boxShadow: map.sh, color: disabled ? 'var(--icon-disabled-300)' : map.fg, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span style={{ width: size === 'md' ? 18 : 20, height: size === 'md' ? 18 : 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
    </button>
  );
}
/* Figma family aliases (source set names) */
export const CompactButton11 = CompactButton;
export default CompactButton;
