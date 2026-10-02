import React from 'react';

/** Selected Button [1.1] — toggleable pill/chip (filters, quick picks). */
export function SelectedButton({ children, selected = false, disabled = false, icon, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : selected ? 'var(--primary-alpha-10)' : hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: disabled || selected ? 'none' : hover ? 'var(--shadow-stroke)' : 'var(--shadow-stroke-xs)',
        color: disabled ? 'var(--text-disabled-300)' : selected ? 'var(--primary-base)' : 'var(--text-sub-600)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', whiteSpace: 'nowrap', ...style }}>
      {icon}{children}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const SelectedButton11 = SelectedButton;
export default SelectedButton;
