import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Tag [1.1] — radius-6 chip with optional icon/avatar and dismiss ×. variant: stroke | gray. */
export function Tag({ children, sublabel, icon, variant = 'stroke', dismissible = true, disabled = false, onDismiss, style }) {
  const [hover, setHover] = React.useState(false);
  const gray = variant === 'gray';
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: icon ? 4 : 2, padding: icon ? 4 : dismissible ? '4px 4px 4px 8px' : '4px 8px', borderRadius: 6,
        background: disabled ? 'var(--bg-weak-50)' : gray || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: disabled || gray || hover ? 'none' : 'var(--shadow-stroke)',
        font: 'var(--label-xs)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)', whiteSpace: 'nowrap', ...style }}>
      {icon && <span style={{ display: 'flex', color: 'var(--icon-sub-600)' }}>{icon}</span>}
      <span style={{ display: 'flex', gap: 2 }}>{children}{sublabel && <span style={{ font: 'var(--paragraph-xs)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-soft-400)' }}>{sublabel}</span>}</span>
      {dismissible && <button type="button" onClick={onDismiss} disabled={disabled} aria-label="Remove" style={{ border: 'none', background: 'none', padding: 0, display: 'flex', cursor: 'pointer', color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-soft-400)' }}><Icon name="CloseLine" size={16} /></button>}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Tag11 = Tag;
export default Tag;
