import React from 'react';

const TONE = { primary: ['var(--primary-base)', 'var(--primary-darker)'], gray: ['var(--text-sub-600)', 'var(--text-strong-950)'], black: ['var(--text-strong-950)', 'var(--text-sub-600)'], error: ['var(--state-error-base)', 'var(--red-700)'] };

/** Link Buttons [1.1] — inline text action (Mulish 500). size md (14/20) | sm (12/16). */
export function LinkButton({ children, tone = 'primary', size = 'md', underline = false, leftIcon, rightIcon, disabled = false, onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const [c, ch] = TONE[tone] || TONE.primary;
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={disabled ? undefined : onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, padding: 0, border: 'none', background: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-alt)', fontWeight: 500, fontSize: size === 'sm' ? 12 : 14, lineHeight: size === 'sm' ? '16px' : '20px', letterSpacing: size === 'sm' ? 0 : '-0.006em',
        color: disabled ? 'var(--text-disabled-300)' : hover ? ch : c, textDecoration: underline || hover ? 'underline' : 'none', textUnderlineOffset: 3, ...style,
      }}>
      {leftIcon}{children}{rightIcon}
    </Tag>
  );
}
/* Figma family aliases (source set names) */
export const LinkButtons11 = LinkButton;
export default LinkButton;
