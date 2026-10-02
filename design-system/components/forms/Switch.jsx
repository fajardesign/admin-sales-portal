import React from 'react';
import { ChoiceText } from './Checkbox.jsx';

/** Switch [1.1] — 28×16 track, 12px knob. */
export function Switch({ checked = false, disabled = false, onChange, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const track = disabled ? 'var(--bg-white-0)' : checked ? (hover ? 'var(--primary-darker)' : 'var(--primary-base)') : hover ? 'var(--bg-sub-300)' : 'var(--bg-soft-200)';
  const k = press ? 10 : 12;
  return (
    <span role="switch" aria-checked={checked} tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange && onChange(!checked)} onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ width: 32, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span style={{ width: 28, height: 16, borderRadius: 999, background: track, boxShadow: disabled ? 'var(--shadow-stroke)' : 'none', position: 'relative', transition: 'background var(--duration-fast)' }}>
        <span style={{ position: 'absolute', top: (16 - k) / 2, left: checked ? 28 - 2 - k : 2, width: k, height: k, borderRadius: '50%', background: disabled ? 'var(--bg-soft-200)' : 'var(--static-static-white)', boxShadow: disabled ? 'none' : 'var(--shadow-toggle-knob)', transition: 'left var(--duration-base) var(--ease-standard), width var(--duration-fast), height var(--duration-fast)' }} />
      </span>
    </span>
  );
}

/** Switch Label [1.1] — switch + label (+ sublabel / description). */
export function SwitchLabel({ label, sublabel, description, checked, defaultChecked = false, disabled, flip = false, onChange, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const set = (x) => { setInner(x); onChange && onChange(x); };
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexDirection: flip ? 'row-reverse' : 'row', justifyContent: flip ? 'space-between' : 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <Switch checked={on} disabled={disabled} onChange={set} />
      <ChoiceText label={label} sublabel={sublabel} description={description} disabled={disabled} onClick={() => !disabled && set(!on)} />
    </label>
  );
}
/* Figma family aliases (source set names) */
export const Switch11 = Switch;
export const SwitchLabel11 = SwitchLabel;
export default Switch;
