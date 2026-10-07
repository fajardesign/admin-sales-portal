import React from 'react';
import { ChoiceText } from './Checkbox.jsx';

/** Radio [1.1] — 20px hit area, 16px ring. Off: 13px white inner disc. On: ring → 13px white ring → 10px dot in the ring colour. States: default (off soft-200 / on primary-base), hover (off sub-300 / on primary-darker), focused (keyboard; primary-dark, off inner jewel-blue-50), disabled (soft-200; off has no inner disc, on keeps the white ring + soft-200 dot). */
export function Radio({ checked = false, disabled = false, onChange, style }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const pointer = React.useRef(false);
  const ring = disabled ? 'var(--bg-soft-200)'
    : focus ? 'var(--primary-dark)'
    : checked ? (hover ? 'var(--primary-darker)' : 'var(--primary-base)') : hover ? 'var(--bg-sub-300)' : 'var(--bg-soft-200)';
  const shadow = '0px 2px 4px -2px rgba(27,28,29,0.12)';
  const select = () => !disabled && onChange && onChange(true);
  return (
    <span role="radio" aria-checked={checked} aria-disabled={disabled} tabIndex={disabled ? -1 : 0}
      onClick={select} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); select(); } }}
      onMouseDown={() => { pointer.current = true; }} onFocus={() => { if (!pointer.current) setFocus(true); pointer.current = false; }} onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: disabled ? 'not-allowed' : 'pointer', outline: 'none', ...style }}>
      <span style={{ width: 16, height: 16, borderRadius: 999, background: ring, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--duration-fast)' }}>
        {(checked || !disabled) && (
          <span style={{ width: 13, height: 13, borderRadius: 999, background: !checked && focus ? 'var(--jewel-blue-50)' : 'var(--bg-white-0)', boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {checked && <span style={{ width: 10, height: 10, borderRadius: 999, background: ring, boxShadow: shadow }} />}
          </span>
        )}
      </span>
    </span>
  );
}

/** Radio Label [1.1] — radio + label (+ sublabel / description), gap 8. Label: Paragraph/Small (Label/Small with description). Description: Paragraph/X Small. */
export function RadioLabel({ label, sublabel, description, checked = false, disabled, flip = false, onChange, style }) {
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexDirection: flip ? 'row-reverse' : 'row', justifyContent: flip ? 'space-between' : 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <Radio checked={checked} disabled={disabled} onChange={onChange} />
      <ChoiceText label={label} sublabel={sublabel} description={description} descriptionSize="xs" disabled={disabled} onClick={() => !disabled && onChange && onChange(true)} />
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
