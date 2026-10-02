import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

/** Dropdown Items [1.1] — menu row: optional checkbox, icon/avatar/logo media, label + sublabel, trailing text, selected check. */
export function DropdownItem({ label, sublabel, icon, media, trailing, checkbox = false, selected = false, disabled = false, size = 'sm', onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: size === 'md' ? '10px 8px' : 8, borderRadius: 8, border: 'none', textAlign: 'left', cursor: disabled ? 'not-allowed' : 'pointer', background: hover && !disabled ? 'var(--bg-weak-50)' : 'transparent' }}>
      {checkbox && <Checkbox checked={selected} disabled={disabled} />}
      {media || (icon && <span style={{ color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-sub-600)', display: 'flex' }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>)}
      <span style={{ flex: 1, display: 'flex', gap: 4, alignItems: 'baseline', minWidth: 0 }}>
        <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{label}</span>
        {sublabel && <span style={{ font: 'var(--paragraph-xs)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-soft-400)' }}>{sublabel}</span>}
      </span>
      {trailing && <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)' }}>{trailing}</span>}
      {selected && !checkbox && <span style={{ color: 'var(--primary-base)', display: 'flex' }}><Icon name="CheckFill" /></span>}
    </button>
  );
}

/** Dropdown Misc Items [1.1] — search row for the top of a menu. */
export function DropdownSearch({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
      <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="Search2Line" /></span>
      <input value={value} onChange={(e) => onChange && onChange(e.target.value)} placeholder={placeholder} style={{ flex: 1, border: 'none', outline: 'none', background: 'none', font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }} />
      {value && <button type="button" onClick={() => onChange && onChange('')} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="CloseLine" /></button>}
    </div>
  );
}

/** Dropdown — menu surface (radius 16, stroke + modal shadow). Use groups of DropdownItem; title renders an uppercase group label. */
export function Dropdown({ children, width = 280, search, style }) {
  return (
    <div role="menu" style={{ width, maxWidth: '100%', borderRadius: 16, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', animation: 'ab-pop-in var(--duration-fast) var(--ease-standard)', ...style }}>
      {search}
      <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</div>
    </div>
  );
}

export function DropdownGroupLabel({ children }) {
  return <span style={{ padding: '4px 8px', font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{children}</span>;
}
/* Figma family aliases (source set names) */
export const DropdownItems11 = DropdownItem;
export const DropdownMiscItems11 = DropdownSearch;
export default Dropdown;
