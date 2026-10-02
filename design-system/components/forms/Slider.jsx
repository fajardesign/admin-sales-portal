import React from 'react';

function useDrag(trackRef, onPct) {
  return (e) => {
    const move = (ev) => { const r = trackRef.current.getBoundingClientRect(); const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left; onPct(Math.min(100, Math.max(0, (x / r.width) * 100))); };
    move(e);
    const up = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); };
    window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
  };
}
const Thumb = ({ pct }) => (
  <span style={{ position: 'absolute', left: `calc(${pct}% - 8px)`, top: 0, width: 16, height: 16, borderRadius: '50%', background: 'var(--bg-white-0)', boxShadow: '0px 1px 2px 0px rgba(10,13,20,0.06), 0 0 0 1px var(--stroke-soft-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-base)' }} />
  </span>
);
const Head = ({ label, sublabel, valueText }) => (label || valueText) ? (
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
    <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{label} {sublabel && <span style={{ color: 'var(--text-soft-400)' }}>{sublabel}</span>}</span>
    <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{valueText}</span>
  </div>) : null;

/** Slider [1.1] — single value 0–100, 6px track. */
export function Slider({ label, sublabel, value: v, defaultValue = 50, onChange, format = (x) => `${Math.round(x)}%`, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const value = v ?? inner;
  const ref = React.useRef(null);
  const down = useDrag(ref, (p) => { setInner(p); onChange && onChange(p); });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      <Head label={label} sublabel={sublabel} valueText={format(value)} />
      <div ref={ref} onMouseDown={down} style={{ position: 'relative', height: 16, cursor: 'pointer' }}>
        <span style={{ position: 'absolute', top: 5, left: 0, right: 0, height: 6, borderRadius: 999, background: 'var(--bg-soft-200)' }} />
        <span style={{ position: 'absolute', top: 5, left: 0, width: `${value}%`, height: 6, borderRadius: 999, background: 'var(--primary-base)' }} />
        <Thumb pct={value} />
      </div>
    </div>
  );
}

/** Range Slider [1.1] — two thumbs selecting [min, max] in 0–100. */
export function RangeSlider({ label, sublabel, value: v, defaultValue = [25, 75], onChange, format = (a, b) => `${Math.round(a)}% – ${Math.round(b)}%`, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const [a, b] = v ?? inner;
  const ref = React.useRef(null);
  const down = useDrag(ref, (p) => { const next = Math.abs(p - a) < Math.abs(p - b) ? [Math.min(p, b), b] : [a, Math.max(p, a)]; setInner(next); onChange && onChange(next); });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      <Head label={label} sublabel={sublabel} valueText={format(a, b)} />
      <div ref={ref} onMouseDown={down} style={{ position: 'relative', height: 16, cursor: 'pointer' }}>
        <span style={{ position: 'absolute', top: 5, left: 0, right: 0, height: 6, borderRadius: 999, background: 'var(--bg-soft-200)' }} />
        <span style={{ position: 'absolute', top: 5, left: `${a}%`, width: `${b - a}%`, height: 6, borderRadius: 999, background: 'var(--primary-base)' }} />
        <Thumb pct={a} /><Thumb pct={b} />
      </div>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const Slider11 = Slider;
export const RangeSlider11 = RangeSlider;
export default Slider;
