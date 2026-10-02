// figma node: 41:1033 calendar-line
export function _CalendarLine(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-strong-950)",
      ...props.style,
    }}>
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 2.1,
        width: 18,
        height: 18,
      }}>
        <path d={"M 13.5 1.8 L 17.1 1.8 C 17.339 1.8 17.568 1.895 17.736 2.064 C 17.905 2.232 18 2.461 18 2.7 L 18 17.1 C 18 17.339 17.905 17.568 17.736 17.736 C 17.568 17.905 17.339 18 17.1 18 L 0.9 18 C 0.661 18 0.432 17.905 0.264 17.736 C 0.095 17.568 0 17.339 0 17.1 L 0 2.7 C 0 2.461 0.095 2.232 0.264 2.064 C 0.432 1.895 0.661 1.8 0.9 1.8 L 4.5 1.8 L 4.5 0 L 6.3 0 L 6.3 1.8 L 11.7 1.8 L 11.7 0 L 13.5 0 L 13.5 1.8 Z M 11.7 3.6 L 6.3 3.6 L 6.3 5.4 L 4.5 5.4 L 4.5 3.6 L 1.8 3.6 L 1.8 7.2 L 16.2 7.2 L 16.2 3.6 L 13.5 3.6 L 13.5 5.4 L 11.7 5.4 L 11.7 3.6 Z M 16.2 9 L 1.8 9 L 1.8 16.2 L 16.2 16.2 L 16.2 9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _CalendarLine;
