import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const DAYS = ['S', 'S', 'R', 'K', 'J', 'S', 'M'];
const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const same = (a, b) => a && b && a.toDateString() === b.toDateString();

/** Day Cells [1.1] — 40x44 calendar day (pad 10/0, r8, label-sm). active (primary fill), inRange (primary text, alpha bg), marked (3px dot, 6px from bottom), disabled. */
export function DayCell({ day, active, inRange, marked, disabled, muted, onClick }) {
  const [hover, setHover] = React.useState(false);
  const color = disabled || muted ? 'var(--text-disabled-300)' : active ? 'var(--static-static-white)' : inRange && !hover ? 'var(--primary-base)' : hover && !marked ? 'var(--text-strong-950)' : 'var(--text-sub-600)';
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', width: 40, height: 44, padding: '10px 0', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', background: active ? 'var(--primary-base)' : hover && !disabled ? 'var(--bg-weak-50)' : inRange ? 'var(--primary-alpha-10)' : 'transparent', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color }}>
      {day}
      {marked && <span style={{ position: 'absolute', bottom: 6, left: '50%', marginLeft: -1.5, width: 3, height: 3, borderRadius: '50%', background: disabled ? 'var(--icon-disabled-300)' : active ? 'var(--primary-lighter)' : 'var(--primary-base)' }} />}
    </button>
  );
}

/** Day Labels [1.1] — 40x44 weekday label (pad 10/0, r10, label-sm, text-soft-400). Single letter, e.g. S S R K J S M. */
export function DayLabel({ children, style }) {
  return <span style={{ width: 40, height: 44, padding: '10px 0', boxSizing: 'border-box', borderRadius: 10, textAlign: 'center', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-soft-400)', ...style }}>{children}</span>;
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

/** Calendar month grid (Day Labels + Day Cells) — 328 wide: 7 x 40 columns, 8px column & row gap, Date Selector on top. Weeks start Monday. mode single | range.
 * month is the initial month; pass onMonthChange to control it (month then follows the prop). */
export function Calendar({ month: m0, onMonthChange, value, onChange, mode = 'single', marked = [], minDate, style }) {
  const [own, setOwn] = React.useState(() => { const d = m0 || (Array.isArray(value) ? value[0] : value) || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const month = onMonthChange && m0 ? new Date(m0.getFullYear(), m0.getMonth(), 1) : own;
  const setMonth = onMonthChange || setOwn;
  const first = (month.getDay() + 6) % 7;
  const daysIn = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((first + daysIn) / 7) * 7 }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i - first + 1));
  const [a, b] = Array.isArray(value) ? value : [value, null];
  const pick = (d) => { if (mode !== 'range') return onChange && onChange(d); if (!a || b) return onChange && onChange([d, null]); onChange && onChange(d < a ? [d, a] : [a, d]); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 328, ...style }}>
      <DateSelector label={`${MONTHS[month.getMonth()]} ${month.getFullYear()}`} onPrev={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} onNext={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 40px)', gap: 8, justifyContent: 'space-between' }}>
        {DAYS.map((d, i) => <DayLabel key={i}>{d}</DayLabel>)}
        {cells.map((d, i) => {
          const muted = d.getMonth() !== month.getMonth();
          const active = !muted && (same(d, a) || same(d, b));
          const inRange = !muted && a && b && d > a && d < b;
          return <DayCell key={i} day={d.getDate()} muted={muted} active={active} inRange={inRange} marked={marked.some((x) => same(x, d))} disabled={minDate && d < minDate} onClick={() => pick(d)} />;
        })}
      </div>
    </div>
  );
}

/** Period Range [1.1] — preset list item (Hari ini, 7 hari terakhir…). */
export function PeriodRange({ children, active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 8px 8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', textAlign: 'left', background: active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: active ? 'var(--text-strong-950)' : 'var(--text-sub-600)' }}>
      <span style={{ flex: 1 }}>{children}</span>{active && <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="ArrowRightSLine" size={18} /></span>}
    </button>
  );
}

/** Date & Range Picker [1.1] — card (r20, stroke + regular-shadow/medium = --shadow-modal): optional 200px presets column (pad 20/16/2/16, gap 8);
 * mode single = one 368 panel, mode range = two 368 panels (consecutive months, divider between, arrows move both); panels pad 20; footer pad 16 (16/16/16/24 with presets), gap 16. */
export function DateRangePicker({ value, onChange, presets = ['Hari ini', '7 hari terakhir', '30 hari terakhir', '3 bulan terakhir', '12 bulan terakhir', 'Kustom'], mode = 'range', footer, style }) {
  const [preset, setPreset] = React.useState(() => (presets ? presets[presets.length - 1] : null));
  const [month, setMonth] = React.useState(() => { const d = (Array.isArray(value) ? value[0] : value) || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const two = mode === 'range';
  const next = new Date(month.getFullYear(), month.getMonth() + 1, 1);
  const panel = { padding: 20 };
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex' }}>
        {presets && <div style={{ width: 200, boxSizing: 'border-box', padding: '20px 16px 2px', display: 'flex', flexDirection: 'column', gap: 8, boxShadow: 'inset -1px 0 0 var(--stroke-soft-200)' }}>{presets.map((p) => <PeriodRange key={p} active={p === preset} onClick={() => setPreset(p)}>{p}</PeriodRange>)}</div>}
        <div style={two ? { ...panel, boxShadow: 'inset -1px 0 0 var(--stroke-soft-200)' } : panel}><Calendar mode={mode} value={value} onChange={onChange} month={month} onMonthChange={setMonth} /></div>
        {two && <div style={panel}><Calendar mode={mode} value={value} onChange={onChange} month={next} onMonthChange={(m) => setMonth(new Date(m.getFullYear(), m.getMonth() - 1, 1))} /></div>}
      </div>
      {footer && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16, padding: presets ? '16px 16px 16px 24px' : 16, boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>{footer}</div>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const DateRangePicker11 = DateRangePicker;
export const DateSelector11 = DateSelector;
export const DayCells11 = DayCell;
export const DayLabels11 = DayLabel;
export const PeriodRange11 = PeriodRange;
export default Calendar;
