import React from 'react';

/** Social Buttons [1.1] — sign-in with a provider. Pass the provider mark as `logo`. */
export function SocialButton({ children, logo, iconOnly = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: iconOnly ? 10 : '10px 16px 10px 10px', borderRadius: 10, border: 'none', cursor: 'pointer',
        background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: focus ? 'inset 0 0 0 1px var(--stroke-strong-950), var(--shadow-focus-neutral)' : hover ? 'none' : 'var(--shadow-stroke-xs)',
        color: 'var(--text-strong-950)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', whiteSpace: 'nowrap', ...style }}>
      <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{logo}</span>
      {!iconOnly && children}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const SocialButtons11 = SocialButton;
export default SocialButton;
