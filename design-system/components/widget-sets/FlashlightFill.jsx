// figma node: 41:9878 flashlight-fill
export function _FlashlightFill(_p = {}) {
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
      <svg width={14.400} height={19.800} viewBox="0 0 14.400 19.800" fill="none" style={{
        position: "absolute",
        left: 4.8,
        top: 2.1,
        width: 14.4,
        height: 19.8,
      }}>
        <path d={"M 8.1 8.1 L 14.4 8.1 L 6.3 19.8 L 6.3 11.7 L 0 11.7 L 8.1 0 L 8.1 8.1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _FlashlightFill;
