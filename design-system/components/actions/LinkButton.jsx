import React from 'react';

/* [rest, hover]. Figma only ships the primary tone; gray / black / error are local-only extras (e.g. Alert uses tone="black"). */
const TONE = { primary: ['var(--primary-base)', 'var(--primary-darker)'], gray: ['var(--text-sub-600)', 'var(--text-strong-950)'], black: ['var(--text-strong-950)', 'var(--text-sub-600)'], error: ['var(--state-error-base)', 'var(--red-700)'] };

/** Link Buttons [1.1] — inline text action, gap 4. size md = Label/Small (16/24, icons 20) | sm = Label/X Small (12/16, icons 16). States: default (primary-base), hover (primary-darker), focus (keyboard; primary-base), disabled (text/icon disabled-300). Underline: sm underlines on hover/focus; md never auto-underlines (the `underline` prop forces it on either size). */
export function LinkButton({ children, tone = 'primary', size = 'md', underline = false, leftIcon, rightIcon, disabled = false, onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const pointer = React.useRef(false);
  const [c, ch] = TONE[tone] || TONE.primary;
  const sm = size === 'sm';
  const Tag = href ? 'a' : 'button';
  const active = !disabled && (hover || focus);
  return (
    <Tag href={disabled ? undefined : href} type={href ? undefined : 'button'} disabled={href ? undefined : disabled} aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onMouseDown={() => { pointer.current = true; }} onFocus={() => { if (!pointer.current) setFocus(true); pointer.current = false; }} onBlur={() => setFocus(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, padding: 0, border: 'none', background: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        font: sm ? 'var(--label-xs)' : 'var(--label-sm)', letterSpacing: sm ? 'var(--label-xs-ls)' : 'var(--label-sm-ls)',
        color: disabled ? 'var(--text-disabled-300)' : hover ? ch : c,
        textDecoration: underline || (sm && active) ? 'underline' : 'none', textUnderlineOffset: 3, ...style,
      }}>
      {leftIcon}{children}{rightIcon}
    </Tag>
  );
}
/* Figma family aliases (source set names) */
export const LinkButtons11 = LinkButton;
export default LinkButton;
