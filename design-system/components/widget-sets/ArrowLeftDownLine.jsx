// figma node: 41:169 arrow-left-down-line
export function _ArrowLeftDownLine(_p = {}) {
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
      <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{
        position: "absolute",
        left: 6.5,
        top: 6.5,
        width: 11,
        height: 11,
      }}>
        <path d={"M 1.83 7.876 L 9.706 0 L 11 1.294 L 3.124 9.17 L 10.066 9.17 L 10.066 11 L 0 11 L 0 0.934 L 1.83 0.934 L 1.83 7.875 L 1.83 7.876 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _ArrowLeftDownLine;
