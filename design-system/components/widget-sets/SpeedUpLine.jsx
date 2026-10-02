// figma node: 41:7687 speed-up-line
export function _SpeedUpLine(_p = {}) {
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
      <svg width={17} height={14.500} viewBox="0 0 17 14.500" fill="none" style={{
        position: "absolute",
        left: 3.5,
        top: 4.75,
        width: 17,
        height: 14.5,
      }}>
        <path d={"M 15.3 8.494 C 15.3 10.37 14.539 12.069 13.308 13.299 L 14.51 14.5 C 16.049 12.963 17 10.839 17 8.494 C 17 3.803 13.194 0 8.5 0 C 3.806 0 0 3.803 0 8.494 C 0 10.839 0.951 12.963 2.49 14.5 L 3.692 13.299 C 2.461 12.069 1.7 10.37 1.7 8.494 C 1.7 4.741 4.744 1.699 8.5 1.699 C 12.256 1.699 15.3 4.741 15.3 8.494 Z M 11.299 4.496 L 7.474 8.318 L 8.676 9.519 L 12.501 5.697 L 11.299 4.496 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _SpeedUpLine;
