import React from 'react';
import { ChoiceText } from './Checkbox.jsx';

/** Radio [1.1] — 16px ring, 10px inner dot when active. */
export function Radio({ checked = false, disabled = false, onChange, style }) {
  const [hover, setHover] = React.useState(false);
  const ring = disabled ? 'var(--bg-soft-200)' : checked ? (hover ? 'var(--primary-darker)' : 'var(--primary-base)') : hover ? 'var(--bg-sub-300)' : 'var(--bg-soft-200)';
  return (
    <span role="radio" aria-checked={checked} tabIndex={disabled ? -1 : 0} onClick={() => !disabled && onChange && onChange(true)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <span style={{ width: 16, height: 16, borderRadius: 999, background: ring, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {checked
          ? <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--bg-white-0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          : <span style={{ width: 13, height: 13, borderRadius: 999, background: disabled ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: disabled ? 'none' : '0px 2px 4px -2px rgba(27,28,29,0.12)' }} />}
      </span>
    </span>
  );
}

/** Radio Label [1.1] — radio + label (+ sublabel / description). */
export function RadioLabel({ label, sublabel, description, checked = false, disabled, flip = false, onChange, style }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexDirection: flip ? 'row-reverse' : 'row', justifyContent: flip ? 'space-between' : 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <Radio checked={checked} disabled={disabled} onChange={onChange} />
      <ChoiceText label={label} sublabel={sublabel} description={description} disabled={disabled} onClick={() => !disabled && onChange && onChange(true)} />
    </label>
  );
}

/** RadioGroup — convenience wrapper rendering RadioLabel options. */
export function RadioGroup({ options = [], value, onChange, gap = 12, style }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
      {options.map((o) => { const v = o.value ?? o.label; return <RadioLabel key={v} {...o} checked={value === v} onChange={() => onChange && onChange(v)} />; })}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const Radio11 = Radio;
export const RadioLabel11 = RadioLabel;
export default Radio;
