import React from 'react';
import { Checkbox } from './Checkbox.jsx';
import { Radio } from './Radio.jsx';
import { Switch } from './Switch.jsx';

function CardShell({ control, media, label, sublabel, description, badge, active, disabled, onToggle, width = 360, style }) {
  const [hover, setHover] = React.useState(false);
  const sh = active && !disabled ? 'inset 0 0 0 1px var(--primary-base)' : hover && !disabled ? 'none' : 'var(--shadow-stroke-xs)';
  return (
    <div onClick={() => !disabled && onToggle()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width, maxWidth: '100%', display: 'flex', alignItems: 'flex-start', gap: 14, padding: 16, borderRadius: 12, boxSizing: 'border-box', cursor: disabled ? 'not-allowed' : 'pointer',
        background: hover && !active && !disabled ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: sh, transition: 'background var(--duration-fast), box-shadow var(--duration-fast)', ...style }}>
      {media && <div style={{ flexShrink: 0 }}>{media}</div>}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-sub-600)' : 'var(--text-strong-950)' }}>{label}</span>
          {sublabel && <span style={{ font: 'var(--paragraph-xs)', color: disabled ? 'var(--text-soft-400)' : 'var(--text-sub-600)' }}>{sublabel}</span>}
          {badge}
        </div>
        {description && <span style={{ font: 'var(--paragraph-xs)', color: disabled ? 'var(--text-soft-400)' : 'var(--text-sub-600)' }}>{description}</span>}
      </div>
      <div onClick={(e) => e.stopPropagation()}>{control}</div>
    </div>
  );
}

/** Checkbox Card [1.1] — bordered card with a checkbox; media slot for icon / avatar / card / brand logo. */
export function CheckboxCard({ checked, defaultChecked = false, onChange, disabled, ...rest }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const set = (x) => { setInner(x); onChange && onChange(x); };
  return <CardShell {...rest} active={on} disabled={disabled} onToggle={() => set(!on)} control={<Checkbox checked={on} disabled={disabled} onChange={set} />} />;
}

/** Radio Card [1.1] — bordered option card with a radio. */
export function RadioCard({ checked = false, onChange, disabled, ...rest }) {
  return <CardShell {...rest} active={checked} disabled={disabled} onToggle={() => onChange && onChange(true)} control={<Radio checked={checked} disabled={disabled} onChange={() => onChange && onChange(true)} />} />;
}

/** Switch Card [1.1] — bordered setting card with a switch. */
export function SwitchCard({ checked, defaultChecked = false, onChange, disabled, ...rest }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const set = (x) => { setInner(x); onChange && onChange(x); };
  return <CardShell {...rest} active={on} disabled={disabled} onToggle={() => set(!on)} control={<Switch checked={on} disabled={disabled} onChange={set} />} />;
}
/* Figma family aliases (source set names) */
export const CheckboxCard11 = CheckboxCard;
export const RadioCard11 = RadioCard;
export const SwitchCard11 = SwitchCard;
export default CheckboxCard;
