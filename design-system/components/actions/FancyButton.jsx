import React from 'react';

const P = { md: [10, 10], sm: [8, 8], xs: [8, 6] };
const TYPES = {
  neutral: { bg: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), var(--bg-strong-950)', sh: '0px 1px 2px 0px rgba(27,28,29,0.48), 0px 0px 0px 1px rgb(36,38,40)', fg: 'var(--text-white-0)' },
  primary: { bg: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), var(--primary-base)', sh: '0px 1px 2px 0px rgba(14,18,27,0.24), 0px 0px 0px 1px var(--primary-base)', fg: 'var(--static-static-white)' },
  error: { bg: 'linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 100%), var(--state-error-base)', sh: '0px 1px 2px 0px rgba(14,18,27,0.24), 0px 0px 0px 1px var(--state-error-base)', fg: 'var(--static-static-white)' },
  basic: { bg: 'var(--bg-white-0)', sh: '0px 1px 3px 0px rgba(14,18,27,0.12), 0px 0px 0px 1px rgb(235,235,235)', fg: 'var(--text-sub-600)' },
};

/** Fancy Buttons [1.1] — elevated button with inner highlight. type: neutral | primary | error | basic. */
export function FancyButton({ children, type = 'neutral', size = 'md', leftIcon, rightIcon, disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const t = TYPES[type] || TYPES.neutral;
  const [r, p] = P[size] || P.md;
  const h = hover && !disabled;
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: p, borderRadius: r, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : type === 'basic' && h ? 'var(--bg-weak-50)' : t.bg, boxShadow: disabled || (type === 'basic' && h) ? 'none' : t.sh,
        color: disabled ? 'var(--text-disabled-300)' : type === 'basic' && h ? 'var(--text-strong-950)' : t.fg, filter: h && type !== 'basic' ? 'brightness(1.08)' : 'none',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', whiteSpace: 'nowrap', ...style }}>
      {leftIcon}{children != null && <span style={{ padding: '0 4px' }}>{children}</span>}{rightIcon}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const FancyButtons11 = FancyButton;
export default FancyButton;
