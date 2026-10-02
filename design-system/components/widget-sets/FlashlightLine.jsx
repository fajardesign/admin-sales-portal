// figma node: 41:9713 flashlight-line
export function _FlashlightLine(_p = {}) {
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
      <svg width={15.300} height={21.600} viewBox="0 0 15.300 21.600" fill="none" style={{
        position: "absolute",
        left: 4.8,
        top: 1.2,
        width: 15.3,
        height: 21.6,
      }}>
        <path d={"M 8.1 8.1 L 15.3 8.1 L 6.3 21.6 L 6.3 13.5 L 0 13.5 L 8.1 0 L 8.1 8.1 Z M 6.3 9.9 L 6.3 6.498 L 3.179 11.7 L 8.1 11.7 L 8.1 15.655 L 11.937 9.9 L 6.3 9.9 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _FlashlightLine;
