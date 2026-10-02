import React from 'react';
import { Field, CharacterCounter } from './Field.jsx';

/** Text Area [1.1] — multi-line input with character counter (radius 12). */
export function TextArea({ label, required, sublabel, hint, error, disabled = false, placeholder = 'Type something…', value: v, defaultValue = '', maxLength = 200, rows = 4, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  let bg = 'var(--bg-white-0)', sh = 'var(--shadow-stroke-xs)';
  if (disabled) { bg = 'var(--bg-weak-50)'; sh = 'none'; }
  else if (error) sh = 'inset 0 0 0 1px var(--state-error-base)';
  else if (focus) sh = 'inset 0 0 0 1px var(--stroke-strong-950), var(--shadow-focus-neutral)';
  else if (hover) { bg = 'var(--bg-weak-50)'; sh = 'none'; }
  return (
    <Field label={label} required={required} sublabel={sublabel} hint={hint} error={error} disabled={disabled} style={style}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '10px 10px 10px 12px', borderRadius: 12, background: bg, boxShadow: sh }}>
        <textarea rows={rows} disabled={disabled} placeholder={placeholder} value={value} maxLength={maxLength} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onChange={(e) => { setInner(e.target.value); onChange && onChange(e.target.value); }}
          style={{ border: 'none', outline: 'none', resize: 'none', background: 'transparent', padding: 0, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}><CharacterCounter count={value.length} max={maxLength} disabled={disabled} /></div>
      </div>
    </Field>
  );
}
/* Figma family aliases (source set names) */
export const TextArea11 = TextArea;
export default TextArea;
