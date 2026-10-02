import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { fieldBoxStyle } from './Field.jsx';

/** Digit Input [1.1] — OTP / PIN boxes (80px wide, 24px Inter Display digits). */
export function DigitInput({ length = 4, value = '', onChange, error = false, disabled = false, width = 80, style }) {
  const refs = React.useRef([]);
  const [focus, setFocus] = React.useState(-1);
  const chars = value.split('');
  const setAt = (i, c) => { const a = value.padEnd(length, ' ').split(''); a[i] = c || ' '; const next = a.join('').trimEnd(); onChange && onChange(next); if (c && i < length - 1) refs.current[i + 1]?.focus(); };
  return (
    <div style={{ display: 'flex', gap: 10, ...style }}>
      {Array.from({ length }).map((_, i) => (
        <input key={i} ref={(el) => (refs.current[i] = el)} maxLength={1} inputMode="numeric" disabled={disabled} value={(chars[i] || '').trim()}
          onFocus={() => setFocus(i)} onBlur={() => setFocus(-1)} onChange={(e) => setAt(i, e.target.value.slice(-1))}
          onKeyDown={(e) => { if (e.key === 'Backspace' && !chars[i] && i > 0) refs.current[i - 1]?.focus(); }}
          style={{ ...fieldBoxStyle({ focus: focus === i, error, disabled }), width, padding: '16px 8px', border: 'none', outline: 'none', textAlign: 'center',
            font: 'var(--title-h5)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)', boxShadow: focus === i ? 'inset 0 0 0 1px var(--stroke-strong-950)' : error ? 'inset 0 0 0 1px var(--state-error-base)' : 'var(--shadow-stroke)' }} />
      ))}
    </div>
  );
}

/** Inline Input [1.1] — borderless edit-in-place field that reveals a box on hover/focus. */
export function InlineInput({ value: v, defaultValue = '', placeholder = 'Placeholder text…', icon = 'User3Line', error = false, disabled = false, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const bg = disabled ? 'transparent' : focus ? 'var(--bg-white-0)' : hover ? 'var(--bg-weak-50)' : 'transparent';
  const sh = error ? 'inset 0 0 0 1px var(--state-error-base), var(--shadow-focus-neutral)' : focus ? 'inset 0 0 0 1px var(--stroke-strong-950)' : 'none';
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderRadius: 8, background: bg, boxShadow: sh, ...style }}>
      {icon && <span style={{ color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-soft-400)' }}><Icon name={icon} /></span>}
      <input disabled={disabled} value={value} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChange={(e) => { setInner(e.target.value); onChange && onChange(e.target.value); }}
        style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', padding: 0, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)' }} />
      {focus && <span style={{ color: 'var(--icon-soft-400)' }}><Icon name="CheckLine" size={18} /></span>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const DigitInput11 = DigitInput;
export const InlineInput11 = InlineInput;
export default DigitInput;
