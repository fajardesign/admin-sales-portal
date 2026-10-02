// figma node: 41:8601 time-line
export function _TimeLine(_p = {}) {
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
        top: 3,
        width: 18,
        height: 18,
      }}>
        <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9 16.2 C 10.91 16.2 12.741 15.441 14.091 14.091 C 15.441 12.741 16.2 10.91 16.2 9 C 16.2 7.09 15.441 5.259 14.091 3.909 C 12.741 2.559 10.91 1.8 9 1.8 C 7.09 1.8 5.259 2.559 3.909 3.909 C 2.559 5.259 1.8 7.09 1.8 9 C 1.8 10.91 2.559 12.741 3.909 14.091 C 5.259 15.441 7.09 16.2 9 16.2 L 9 16.2 Z M 9.9 9 L 13.5 9 L 13.5 10.8 L 8.1 10.8 L 8.1 4.5 L 9.9 4.5 L 9.9 9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _TimeLine;
