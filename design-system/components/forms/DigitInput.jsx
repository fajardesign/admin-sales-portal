import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { fieldBoxStyle, inputTextStyle, INPUT_CLASS } from './Field.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';

/** Digit Input [1.1] — OTP / PIN boxes 80x64, padding 16/8, radius 10, Title/H5 digit. Default/Filled/Error: stroke + shadow x-small; Hover & Disabled: bg weak-50, no stroke; Focus: stroke-strong-950. */
export function DigitInput({ length = 4, value = '', onChange, error = false, disabled = false, width = 80, style }) {
  const refs = React.useRef([]);
  const [focus, setFocus] = React.useState(-1);
  const [hover, setHover] = React.useState(-1);
  const chars = value.split('');
  const setAt = (i, c) => { const a = value.padEnd(length, ' ').split(''); a[i] = c || ' '; const next = a.join('').trimEnd(); onChange && onChange(next); if (c && i < length - 1) refs.current[i + 1]?.focus(); };
  return (
    <div style={{ display: 'flex', gap: 10, ...style }}>
      {Array.from({ length }).map((_, i) => {
        const box = fieldBoxStyle({ hover: hover === i, focus: focus === i, error, disabled });
        return (
          <input key={i} ref={(el) => (refs.current[i] = el)} maxLength={1} inputMode="numeric" disabled={disabled} value={(chars[i] || '').trim()}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)}
            onFocus={() => setFocus(i)} onBlur={() => setFocus(-1)} onChange={(e) => setAt(i, e.target.value.slice(-1))}
            onKeyDown={(e) => { if (e.key === 'Backspace' && !chars[i] && i > 0) refs.current[i - 1]?.focus(); }}
            style={{ ...box, width, padding: '16px 8px', border: 'none', outline: 'none', textAlign: 'center', font: 'var(--title-h5)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)',
              ...(error && !disabled ? { boxShadow: 'inset 0 0 0 1px var(--state-error-base), var(--shadow-xs)' } : null) }} />
        );
      })}
    </div>
  );
}

/** Inline Input [1.1] — edit-in-place row (radius 8, padding 8/36/8/10; 8/64/8/10 while editing). Ghost Compact Button (24) pencil at rest; check + close while focused/error. Hover bg weak-50; focus bg white-0 + stroke-strong-950; error stroke error-base + shadow x-small. */
export function InlineInput({ value: v, defaultValue = '', placeholder = 'Ketik di sini…', icon = 'User3Line', error = false, disabled = false, onChange, onSave, onCancel, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  const start = React.useRef(value);
  const set = (x) => { setInner(x); onChange && onChange(x); };
  const editing = !disabled && (focus || error);
  const h = hover && !focus && !error && !disabled;
  const bg = disabled ? 'transparent' : focus || error ? 'var(--bg-white-0)' : h ? 'var(--bg-weak-50)' : 'transparent';
  const sh = disabled ? 'none' : error ? 'inset 0 0 0 1px var(--state-error-base), var(--shadow-xs)' : focus ? 'inset 0 0 0 1px var(--stroke-strong-950)' : 'none';
  const icColor = disabled ? 'var(--icon-disabled-300)' : focus || error || value ? 'var(--icon-strong-950)' : h ? 'var(--icon-sub-600)' : 'var(--icon-soft-400)';
  const keep = (e) => e.preventDefault(); // keep input focus while pressing the action buttons
  const save = () => { onSave && onSave(value); ref.current?.blur(); };
  const cancel = () => { set(start.current); onCancel && onCancel(start.current); ref.current?.blur(); };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, padding: `8px ${editing ? 64 : 36}px 8px 10px`, borderRadius: 8, background: bg, boxShadow: sh, boxSizing: 'border-box', transition: 'background var(--duration-fast), box-shadow var(--duration-fast)', ...style }}>
      {icon && <span style={{ display: 'flex', color: icColor }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>}
      <input ref={ref} className={INPUT_CLASS} data-hover={h ? 'true' : undefined} disabled={disabled} value={value} placeholder={placeholder}
        onFocus={() => { start.current = value; setFocus(true); }} onBlur={() => setFocus(false)}
        onChange={(e) => set(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') save(); else if (e.key === 'Escape') cancel(); }}
        style={inputTextStyle(disabled)} />
      <span onMouseDown={keep} style={{ position: 'absolute', right: 6, top: 8, display: 'flex', gap: 4 }}>
        {editing ? (
          <>
            <CompactButton variant="ghost" aria-label="Batal" onClick={cancel} icon={<Icon name="CloseLine" />} />
            <CompactButton variant="ghost" aria-label="Simpan" onClick={save} icon={<Icon name="CheckLine" />} />
          </>
        ) : (
          <CompactButton variant="ghost" aria-label="Ubah" disabled={disabled} onClick={() => ref.current?.focus()} icon={<Icon name="PencilLine" />} />
        )}
      </span>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const DigitInput11 = DigitInput;
export const InlineInput11 = InlineInput;
export default DigitInput;
