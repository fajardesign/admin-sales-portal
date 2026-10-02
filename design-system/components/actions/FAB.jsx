import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** FAB [1.1] — 48px floating action button (default icon: customer service / help). */
export function FAB({ icon, disabled = false, onClick, style, 'aria-label': ariaLabel = 'Bantuan' }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={ariaLabel} disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 48, height: 48, borderRadius: 999, border: 'none', padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--text-disabled-300)' : hover ? 'var(--jewel-blue-700)' : 'var(--jewel-blue-500)', boxShadow: 'var(--shadow-fab)', color: 'var(--bg-white-0)', ...style }}>
      {icon || <Icon name="CustomerService2Line" size={24} />}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const FAB11 = FAB;
export default FAB;
