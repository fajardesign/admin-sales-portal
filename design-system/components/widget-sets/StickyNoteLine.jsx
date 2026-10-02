// figma node: 41:3519 sticky-note-line
export function _StickyNoteLine(_p = {}) {
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
      <svg width={16.200} height={16.200} viewBox="0 0 16.200 16.200" fill="none" style={{
        position: "absolute",
        left: 3.9,
        top: 3.9,
        width: 16.2,
        height: 16.2,
      }}>
        <path d={"M 16.2 10.8 L 10.8 16.196 L 0.902 16.2 C 0.664 16.201 0.435 16.107 0.266 15.94 C 0.097 15.772 0.001 15.544 0 15.306 L 0 0.894 C 0 0.401 0.401 0 0.894 0 L 15.306 0 C 15.8 0 16.2 0.41 16.2 0.902 L 16.2 10.8 L 16.2 10.8 Z M 14.4 1.8 L 1.8 1.8 L 1.8 14.4 L 9 14.4 L 9 9.9 C 9 9.68 9.081 9.467 9.227 9.302 C 9.374 9.137 9.576 9.032 9.795 9.006 L 9.9 9 L 14.4 8.999 L 14.4 1.8 Z M 13.654 10.799 L 10.8 10.8 L 10.8 13.652 L 13.654 10.799 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _StickyNoteLine;
