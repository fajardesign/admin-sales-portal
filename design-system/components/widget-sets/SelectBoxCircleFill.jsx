// figma node: 41:8870 select-box-circle-fill
export function _SelectBoxCircleFill(_p = {}) {
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
        <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 8.103 12.6 L 14.466 6.236 L 13.193 4.963 L 8.103 10.055 L 5.557 7.509 L 4.284 8.781 L 8.103 12.6 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _SelectBoxCircleFill;
