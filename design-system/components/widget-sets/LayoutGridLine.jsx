// figma node: 41:2201 layout-grid-line
export function _LayoutGridLine(_p = {}) {
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
      <svg width={18} height={16.200} viewBox="0 0 18 16.200" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 3.9,
        width: 18,
        height: 16.2,
      }}>
        <path d={"M 17.1 0 C 17.339 0 17.568 0.095 17.736 0.264 C 17.905 0.432 18 0.661 18 0.9 L 18 15.3 C 18 15.539 17.905 15.768 17.736 15.936 C 17.568 16.105 17.339 16.2 17.1 16.2 L 0.9 16.2 C 0.661 16.2 0.432 16.105 0.264 15.936 C 0.095 15.768 0 15.539 0 15.3 L 0 0.9 C 0 0.661 0.095 0.432 0.264 0.264 C 0.432 0.095 0.661 0 0.9 0 L 17.1 0 Z M 8.1 9 L 1.8 9 L 1.8 14.4 L 8.1 14.4 L 8.1 9 Z M 16.2 9 L 9.9 9 L 9.9 14.4 L 16.2 14.4 L 16.2 9 Z M 8.1 1.8 L 1.8 1.8 L 1.8 7.2 L 8.1 7.2 L 8.1 1.8 Z M 16.2 1.8 L 9.9 1.8 L 9.9 7.2 L 16.2 7.2 L 16.2 1.8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _LayoutGridLine;
