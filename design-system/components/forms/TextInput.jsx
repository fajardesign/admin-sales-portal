import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Field, fieldBoxStyle, inputTextStyle, INPUT_CLASS } from './Field.jsx';
import { Tag } from '../display/Tag.jsx';

/** Text Input [1.1] — single-line input with label, leading icon, prefix/suffix slots, hint & error. */
export function TextInput({ label, required, sublabel, info, hint, error, disabled = false, size = 'md', leftIcon, prefix, suffix, rightIcon, type = 'text', placeholder, value, defaultValue, onChange, style, inputStyle, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const isPw = type === 'password';
  const box = fieldBoxStyle({ size, hover, focus, error: !!error, disabled });
  const icColor = disabled ? 'var(--icon-disabled-300)' : hover || focus || value || error ? 'var(--icon-sub-600)' : 'var(--icon-soft-400)';
  return (
    <Field label={label} required={required} sublabel={sublabel} info={info} hint={hint} error={error} disabled={disabled} style={style}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ...box, ...(prefix ? { padding: 0, overflow: 'hidden' } : null) }}>
        {prefix && <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'stretch', boxShadow: 'inset -1px 0 0 var(--stroke-soft-200)' }}>{prefix}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: box.gap, flex: 1, minWidth: 0, padding: prefix ? box.padding : 0 }}>
          {leftIcon && <span style={{ color: icColor }}>{typeof leftIcon === 'string' ? <Icon name={leftIcon} /> : leftIcon}</span>}
          <input className={INPUT_CLASS} data-hover={hover && !focus ? 'true' : undefined} type={isPw && show ? 'text' : type} disabled={disabled} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange}
            onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...inputTextStyle(disabled), ...inputStyle }} {...rest} />
          {isPw && <button type="button" onClick={() => setShow(!show)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: icColor }}><Icon name={show ? 'EyeOffLine' : 'EyeLine'} /></button>}
          {rightIcon && <span style={{ color: icColor }}>{typeof rightIcon === 'string' ? <Icon name={rightIcon} /> : rightIcon}</span>}
          {suffix && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-soft-400)' }}>{suffix}</span>}
        </div>
      </div>
    </Field>
  );
}

/** Tag Input [1.1] — type and press Enter to add tags. */
export function TagInput({ label, hint, error, disabled, size = 'md', placeholder = 'Add tag…', tags: initial = [], onChange, style }) {
  const [tags, setTags] = React.useState(initial);
  const [text, setText] = React.useState('');
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const update = (t) => { setTags(t); onChange && onChange(t); };
  return (
    <Field label={label} hint={hint} error={error} disabled={disabled} style={style}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ...fieldBoxStyle({ size, hover, focus, error: !!error, disabled }), flexWrap: 'wrap' }}>
        {tags.map((t, i) => <Tag key={t + i} onDismiss={() => update(tags.filter((_, j) => j !== i))}>{t}</Tag>)}
        <input disabled={disabled} value={text} placeholder={tags.length ? '' : placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && text.trim()) { update([...tags, text.trim()]); setText(''); } }}
          style={{ ...inputTextStyle(disabled), minWidth: 60 }} />
      </div>
    </Field>
  );
}

/** Counter Input [1.1] — numeric stepper with − / + buttons. */
export function CounterInput({ label, hint, error, disabled, size = 'md', value: v, defaultValue = 0, min = -Infinity, max = Infinity, step = 1, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const [hover, setHover] = React.useState(false);
  const set = (n) => { const c = Math.min(max, Math.max(min, n)); setInner(c); onChange && onChange(c); };
  const pad = { md: 8, sm: 6, xs: 4 }[size];
  const btn = (icon, fn) => <button type="button" disabled={disabled} onClick={fn} style={{ border: 'none', background: 'none', borderRadius: 6, padding: 2, display: 'flex', cursor: 'pointer', color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-sub-600)' }}><Icon name={icon} /></button>;
  return (
    <Field label={label} hint={hint} error={error} disabled={disabled} style={style}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ ...fieldBoxStyle({ size, hover, error: !!error, disabled }), padding: pad }}>
        {btn('SubtractLine', () => set(value - step))}
        <input disabled={disabled} value={value} onChange={(e) => set(Number(e.target.value) || 0)} style={{ ...inputTextStyle(disabled), textAlign: 'center' }} />
        {btn('AddLine', () => set(value + step))}
      </div>
    </Field>
  );
}
/* Figma family aliases (source set names) */
export const TextInput11 = TextInput;
export const TagInput11 = TagInput;
export const CounterInput11 = CounterInput;
export default TextInput;
