import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const same = (a, b) => a && b && a.toDateString() === b.toDateString();

/** Day Cells [1.1] — 40px calendar day. active (primary fill), inRange (primary text, alpha bg), marked (3px dot), disabled. */
export function DayCell({ day, active, inRange, marked, disabled, muted, onClick }) {
  const [hover, setHover] = React.useState(false);
  const color = disabled || muted ? 'var(--text-disabled-300)' : active ? 'var(--static-static-white)' : inRange ? 'var(--primary-base)' : hover ? 'var(--text-strong-950)' : 'var(--text-sub-600)';
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', width: 40, height: 40, padding: '10px 0', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', background: active ? 'var(--primary-base)' : inRange ? 'var(--primary-alpha-10)' : hover && !disabled ? 'var(--bg-weak-50)' : 'transparent', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color }}>
      {day}
      {marked && <span style={{ position: 'absolute', bottom: 5, left: '50%', marginLeft: -1.5, width: 3, height: 3, borderRadius: '50%', background: disabled ? 'var(--icon-disabled-300)' : active ? 'var(--primary-lighter)' : 'var(--primary-base)' }} />}
    </button>
  );
}

/** Date Selector [1.1] — month header with prev/next arrows (bg-weak-50 bar). */
export function DateSelector({ label, onPrev, onNext, style }) {
  const arrow = (name, fn) => <button type="button" onClick={fn} style={{ padding: 2, borderRadius: 6, border: 'none', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-xs)', cursor: 'pointer', display: 'flex', color: 'var(--icon-sub-600)' }}><Icon name={name} /></button>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: 6, borderRadius: 8, background: 'var(--bg-weak-50)', ...style }}>
      {onPrev && arrow('ArrowLeftSLine', onPrev)}
      <span style={{ flex: 1, textAlign: 'center', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-sub-600)' }}>{label}</span>
      {onNext && arrow('ArrowRightSLine', onNext)}
    </div>
  );
}

/** Calendar month grid (Day Labels + Day Cells). mode single | range. */
export function Calendar({ month: m0, value, onChange, mode = 'single', marked = [], minDate, style }) {
  const [month, setMonth] = React.useState(() => { const d = m0 || (Array.isArray(value) ? value[0] : value) || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const first = (month.getDay() + 6) % 7;
  const daysIn = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((first + daysIn) / 7) * 7 }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i - first + 1));
  const [a, b] = Array.isArray(value) ? value : [value, null];
  const pick = (d) => { if (mode !== 'range') return onChange && onChange(d); if (!a || b) return onChange && onChange([d, null]); onChange && onChange(d < a ? [d, a] : [a, d]); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 288, ...style }}>
      <DateSelector label={`${MONTHS[month.getMonth()]} ${month.getFullYear()}`} onPrev={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} onNext={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 40px)', gap: 1, justifyContent: 'space-between' }}>
        {DAYS.map((d) => <span key={d} style={{ width: 40, padding: '10px 0', textAlign: 'center', font: 'var(--label-sm)', color: 'var(--text-soft-400)' }}>{d}</span>)}
        {cells.map((d, i) => {
          const muted = d.getMonth() !== month.getMonth();
          const active = same(d, a) || same(d, b);
          const inRange = a && b && d > a && d < b;
          return <DayCell key={i} day={d.getDate()} muted={muted} active={active} inRange={inRange} marked={marked.some((x) => same(x, d))} disabled={minDate && d < minDate} onClick={() => pick(d)} />;
        })}
      </div>
    </div>
  );
}

/** Period Range [1.1] — preset list item (Today, Last 7 days…). */
export function PeriodRange({ children, active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 8px 8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', textAlign: 'left', background: active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: active ? 'var(--text-strong-950)' : 'var(--text-sub-600)' }}>
      <span style={{ flex: 1 }}>{children}</span>{active && <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="ArrowRightSLine" size={18} /></span>}
    </button>
  );
}

/** Date & Range Picker [1.1] — card with optional period presets column, calendar, and Cancel / Apply footer. */
export function DateRangePicker({ value, onChange, presets = ['Today', 'Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 12 months', 'Custom'], mode = 'range', footer, style }) {
  const [preset, setPreset] = React.useState('Custom');
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex' }}>
        {presets && <div style={{ width: 168, padding: 12, display: 'flex', flexDirection: 'column', gap: 4, boxShadow: 'inset -1px 0 0 var(--stroke-soft-200)' }}>{presets.map((p) => <PeriodRange key={p} active={p === preset} onClick={() => setPreset(p)}>{p}</PeriodRange>)}</div>}
        <div style={{ padding: 20 }}><Calendar mode={mode} value={value} onChange={onChange} /></div>
      </div>
      {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, padding: '16px 20px', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>{footer}</div>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const DateRangePicker11 = DateRangePicker;
export const DateSelector11 = DateSelector;
export const DayCells11 = DayCell;
export const DayLabels11 = Calendar;
export const PeriodRange11 = PeriodRange;
export default Calendar;
