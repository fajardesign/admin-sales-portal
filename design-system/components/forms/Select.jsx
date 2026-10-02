import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Field, fieldBoxStyle, FIELD_SIZES } from './Field.jsx';

function useOutside(ref, fn) {
  React.useEffect(() => { const h = (e) => { if (ref.current && !ref.current.contains(e.target)) fn(); }; document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h); }, [ref, fn]);
}

function Menu({ options, value, onPick, width }) {
  return (
    <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 20, minWidth: width || '100%', padding: 8, borderRadius: 16, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', display: 'flex', flexDirection: 'column', gap: 4, animation: 'ab-pop-in var(--duration-fast) var(--ease-standard)' }}>
      {options.map((o) => { const ov = o.value ?? o.label; return <Option key={ov} o={o} active={ov === value} onClick={() => onPick(ov)} />; })}
    </div>
  );
}
function Option({ o, active, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderRadius: 8, border: 'none', textAlign: 'left', cursor: 'pointer', background: h ? 'var(--bg-weak-50)' : 'transparent', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>
      {o.icon && <span style={{ color: 'var(--icon-sub-600)' }}>{typeof o.icon === 'string' ? <Icon name={o.icon} /> : o.icon}</span>}
      <span style={{ flex: 1 }}>{o.label}</span>
      {active && <span style={{ color: 'var(--primary-base)' }}><Icon name="CheckFill" /></span>}
    </button>
  );
}

/** Select [1.1] — dropdown field. options: [{label, value, icon}]. */
export function Select({ label, required, sublabel, hint, error, disabled = false, size = 'md', options = [], value: v, defaultValue, placeholder = 'Select…', leftIcon, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  useOutside(ref, React.useCallback(() => setOpen(false), []));
  const sel = options.find((o) => (o.value ?? o.label) === value);
  const icon = leftIcon || sel?.icon;
  return (
    <Field label={label} required={required} sublabel={sublabel} hint={hint} error={error} disabled={disabled} style={style}>
      <div ref={ref} style={{ position: 'relative' }}>
        <button type="button" disabled={disabled} onClick={() => setOpen(!open)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{ ...fieldBoxStyle({ size, hover: hover && !open, focus: open, error: !!error, disabled }), width: '100%', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', textAlign: 'left' }}>
          {icon && <span style={{ color: 'var(--icon-sub-600)' }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>}
          <span style={{ flex: 1, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : sel ? 'var(--text-strong-950)' : 'var(--text-soft-400)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{sel ? sel.label : placeholder}</span>
          <span style={{ color: disabled ? 'var(--icon-disabled-300)' : 'var(--icon-sub-600)' }}><Icon name={open ? 'ArrowUpSLine' : 'ArrowDownSLine'} /></span>
        </button>
        {open && <Menu options={options} value={value} onPick={(x) => { setInner(x); setOpen(false); onChange && onChange(x); }} />}
      </div>
    </Field>
  );
}

/** Compact Select [1.1] — chip-sized select (icon / text / country). */
export function CompactSelect({ options = [], value: v, defaultValue, icon, size = 'md', error, disabled, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0].label)));
  const value = v ?? inner;
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  useOutside(ref, React.useCallback(() => setOpen(false), []));
  const sel = options.find((o) => (o.value ?? o.label) === value);
  const p = { md: 10, sm: 8, xs: 6 }[size];
  const ic = icon || sel?.icon;
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <button type="button" disabled={disabled} onClick={() => setOpen(!open)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ ...fieldBoxStyle({ size, hover: hover && !open, focus: open, error, disabled }), padding: p, gap: size === 'xs' ? 2 : 4, border: 'none', cursor: 'pointer' }}>
        {ic && <span style={{ color: 'var(--icon-sub-600)' }}>{typeof ic === 'string' ? <Icon name={ic} /> : ic}</span>}
        {sel && !icon && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)', padding: '0 2px' }}>{sel.label}</span>}
        <span style={{ color: 'var(--icon-sub-600)' }}><Icon name={open ? 'ArrowUpSLine' : 'ArrowDownSLine'} /></span>
      </button>
      {open && <Menu options={options} value={value} width={160} onPick={(x) => { setInner(x); setOpen(false); onChange && onChange(x); }} />}
    </div>
  );
}

/** Inline Select [1.1] — text-only select used inside sentences / toolbars. */
export function InlineSelect({ options = [], value: v, defaultValue, icon, disabled, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0].label)));
  const value = v ?? inner;
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  useOutside(ref, React.useCallback(() => setOpen(false), []));
  const sel = options.find((o) => (o.value ?? o.label) === value);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <button type="button" disabled={disabled} onClick={() => setOpen(!open)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: 'flex', alignItems: 'center', gap: 4, border: 'none', background: 'none', padding: 0, cursor: 'pointer', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : hover || open ? 'var(--text-strong-950)' : 'var(--text-sub-600)' }}>
        {icon && <span style={{ color: 'var(--icon-sub-600)' }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>}
        <span>{sel?.label}</span>
        <Icon name={open ? 'ArrowUpSLine' : 'ArrowDownSLine'} />
      </button>
      {open && <Menu options={options} value={value} width={160} onPick={(x) => { setInner(x); setOpen(false); onChange && onChange(x); }} />}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const Select11 = Select;
export const CompactSelect11 = CompactSelect;
export const InlineSelect11 = InlineSelect;
export const CompactSelectForInput11 = CompactSelect;
export default Select;
