// figma node: 41:542 expand-up-down-fill
export function _ExpandUpDownFill(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--icon-strong-950)",
      ...props.style,
    }}>
      <svg width={10} height={15} viewBox="0 0 10 15" fill="none" style={{
        position: "absolute",
        left: 7,
        top: 4.5,
        width: 10,
        height: 15,
      }}>
        <path d={"M 10 5 L 5 0 L 0 5 L 10 5 Z M 10 10 L 5 15 L 0 10 L 10 10 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _ExpandUpDownFill;
