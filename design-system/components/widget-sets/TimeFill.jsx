// figma node: 41:9134 time-fill
export function _TimeFill(_p = {}) {
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
        <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9.9 9 L 9.9 4.5 L 8.1 4.5 L 8.1 10.8 L 13.5 10.8 L 13.5 9 L 9.9 9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _TimeFill;
