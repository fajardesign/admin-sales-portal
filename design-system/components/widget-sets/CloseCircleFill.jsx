// figma node: 41:8882 close-circle-fill
export function _CloseCircleFill(_p = {}) {
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
        <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9 7.727 L 6.455 5.181 L 5.181 6.455 L 7.727 9 L 5.181 11.545 L 6.455 12.819 L 9 10.273 L 11.545 12.819 L 12.819 11.545 L 10.273 9 L 12.819 6.455 L 11.545 5.181 L 9 7.727 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _CloseCircleFill;
