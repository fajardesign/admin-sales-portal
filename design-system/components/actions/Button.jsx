import React from 'react';

const SIZES = {
  md: { r: 10, p: 10, gap: 4 }, sm: { r: 8, p: 8, gap: 4 }, xs: { r: 8, p: 6, gap: 2 }, '2xs': { r: 8, p: '4px 6px', pIcon: 4, gap: 2 },
};
const TONES = {
  primary: { base: 'var(--primary-base)', hover: 'var(--primary-darker)', a10: 'var(--primary-alpha-10)', a16: 'var(--primary-alpha-16)', focus: 'var(--shadow-focus-primary)' },
  neutral: { base: 'var(--bg-strong-950)', hover: 'var(--bg-surface-800)', a10: 'var(--bg-weak-50)', a16: 'var(--bg-soft-200)', focus: 'var(--shadow-focus-neutral)', text: 'var(--text-sub-600)' },
  error: { base: 'var(--state-error-base)', hover: 'var(--red-700)', a10: 'var(--alpha-red-alpha-10)', a16: 'var(--alpha-red-alpha-16)', focus: '0px 0px 0px 2px var(--bg-white-0), 0px 0px 0px 4px var(--alpha-red-alpha-10)' },
};

function look(variant, tone, hover) {
  const t = TONES[tone] || TONES.primary;
  const fg = tone === 'neutral' ? (hover ? 'var(--text-strong-950)' : t.text) : t.base;
  switch (variant) {
    case 'stroke': return tone === 'neutral'
      ? { bg: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', fg, sh: hover ? 'none' : 'var(--shadow-stroke-xs)' }
      : { bg: hover ? t.a10 : 'var(--bg-white-0)', fg, sh: hover ? 'none' : `inset 0 0 0 1px ${t.base}` };
    case 'lighter': return { bg: hover ? (tone === 'neutral' ? 'var(--bg-white-0)' : t.a16) : t.a10, fg, sh: hover && tone === 'neutral' ? 'var(--shadow-stroke-xs)' : 'none' };
    case 'ghost': return { bg: hover ? t.a10 : 'transparent', fg, sh: 'none' };
    default: return { bg: hover ? t.hover : t.base, fg: tone === 'neutral' ? 'var(--text-white-0)' : 'var(--static-static-white)', sh: 'none' };
  }
}

/** Buttons [1.1] — action button, heights 44/40/36/32 (md/sm/xs/2xs). variant: filled | stroke | ghost (+ lighter, local only); tone: primary (+ neutral | error, local only).
 * Disabled: bg-weak-50 for every variant. Ghost focus: white bg + 1px tone stroke + focus ring. */
export function Button({ children, variant = 'filled', tone = 'primary', size = 'md', leftIcon, rightIcon, iconOnly = false, disabled = false, fullWidth = false, onClick, type = 'button', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const l = look(variant, tone, hover && !disabled);
  const t = TONES[tone] || TONES.primary;
  const pad = iconOnly ? (s.pIcon ?? s.p) : s.p;
  const ghostFocus = variant === 'ghost' && focus && !disabled;
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', justifyContent: 'center', gap: s.gap,
        padding: typeof pad === 'number' ? pad : pad, borderRadius: s.r, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : ghostFocus ? 'var(--bg-white-0)' : l.bg,
        color: disabled ? 'var(--text-disabled-300)' : l.fg,
        boxShadow: [disabled ? 'none' : l.sh, ghostFocus ? `inset 0 0 0 1px ${t.base}` : null, focus && !disabled ? t.focus : null].filter((x) => x && x !== 'none').join(', ') || 'none',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', whiteSpace: 'nowrap', boxSizing: 'border-box',
        transition: 'background var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast)', ...style,
      }} {...rest}>
      {leftIcon}
      {!iconOnly && children != null && <span style={{ padding: '0 4px' }}>{children}</span>}
      {iconOnly && !leftIcon && children}
      {rightIcon}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const Buttons11 = Button;
export default Button;
