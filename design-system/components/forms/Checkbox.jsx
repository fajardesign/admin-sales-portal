import React from 'react';

/** Checkbox [1.1] — 20px hit area, 16px box (radius 4). States: default, hover, focused (keyboard; off = primary-base, on = primary-dark), disabled (soft-200, no inner box). Supports indeterminate. */
export function Checkbox({ checked = false, indeterminate = false, disabled = false, onChange, style }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const pointer = React.useRef(false);
  const on = checked || indeterminate;
  const bg = disabled ? 'var(--bg-soft-200)'
    : focus ? (on ? 'var(--primary-dark)' : 'var(--primary-base)')
    : on ? (hover ? 'var(--primary-darker)' : 'var(--primary-base)') : hover ? 'var(--bg-sub-300)' : 'var(--bg-soft-200)';
  return (
    <span role="checkbox" aria-checked={indeterminate ? 'mixed' : checked} aria-disabled={disabled} tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange && onChange(!checked)} onKeyDown={(e) => { if (e.key === ' ') { e.preventDefault(); !disabled && onChange && onChange(!checked); } }}
      onMouseDown={() => { pointer.current = true; }} onFocus={() => { if (!pointer.current) setFocus(true); pointer.current = false; }} onBlur={() => setFocus(false)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 20, height: 20, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: disabled ? 'not-allowed' : 'pointer', outline: 'none', ...style }}>
      <span style={{ width: 16, height: 16, borderRadius: 4, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--duration-fast)' }}>
        {!on && !disabled && <span style={{ width: 13, height: 13, borderRadius: 2.6, background: 'var(--bg-white-0)', boxShadow: '0px 2px 2px 0px rgba(27,28,29,0.12)' }} />}
        {checked && !indeterminate && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.8 2.8L9 1.2" stroke="var(--static-static-white)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        {indeterminate && <span style={{ width: 8, height: 1.5, borderRadius: 1, background: 'var(--static-static-white)' }} />}
      </span>
    </span>
  );
}

/** Checkbox Label [1.1] — checkbox + label (+ sublabel / description). flip puts the control on the right. */
export function CheckboxLabel({ label, sublabel, description, checked, defaultChecked = false, disabled, flip = false, onChange, style }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const set = (x) => { setInner(x); onChange && onChange(x); };
  return (
    <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, flexDirection: flip ? 'row-reverse' : 'row', justifyContent: flip ? 'space-between' : 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>
      <Checkbox checked={on} disabled={disabled} onChange={set} />
      <ChoiceText label={label} sublabel={sublabel} description={description} disabled={disabled} onClick={() => !disabled && set(!on)} />
    </label>
  );
}

/** Shared label text for Checkbox/Radio/Switch Label [1.1]: label (Label/Small with description, else Paragraph/Small) + sublabel (Paragraph/X Small) + description.
 * descriptionSize: 'sm' Paragraph/Small (Checkbox, Switch) | 'xs' Paragraph/X Small (Radio). */
export function ChoiceText({ label, sublabel, description, descriptionSize = 'sm', disabled, onClick }) {
  const d = descriptionSize === 'xs' ? 'paragraph-xs' : 'paragraph-sm';
  return (
    <span onClick={onClick} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 0 }}>
      <span style={{ display: 'flex', gap: 4, alignItems: 'baseline' }}>
        <span style={{ font: description ? 'var(--label-sm)' : 'var(--paragraph-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)' }}>{label}</span>
        {sublabel && <span style={{ font: 'var(--paragraph-xs)', letterSpacing: 'var(--paragraph-xs-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)' }}>{sublabel}</span>}
      </span>
      {description && <span style={{ font: `var(--${d})`, letterSpacing: `var(--${d}-ls)`, color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)' }}>{description}</span>}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Checkbox11 = Checkbox;
export const CheckboxLabel11 = CheckboxLabel;
export default Checkbox;
