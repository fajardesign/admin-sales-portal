// figma node: 41:1933 sip-line
export function _SipLine(_p = {}) {
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
      <svg width={15.855} height={15.855} viewBox="0 0 15.855 15.855" fill="none" style={{
        position: "absolute",
        left: 3.9,
        top: 4.245,
        width: 15.855,
        height: 15.855,
      }}>
        <path d={"M 3.111 14.016 L 10.819 6.309 L 9.546 5.036 L 1.839 12.744 L 3.111 14.016 L 3.111 14.016 Z M 8.273 3.764 L 7 2.491 L 8.273 1.218 L 9.864 2.809 L 12.41 0.264 C 12.579 0.095 12.808 0 13.046 0 C 13.285 0 13.514 0.095 13.683 0.264 L 15.592 2.172 C 15.76 2.341 15.855 2.57 15.855 2.809 C 15.855 3.047 15.76 3.276 15.592 3.445 L 13.046 5.991 L 14.637 7.582 L 13.364 8.855 L 12.091 7.582 L 3.819 15.855 L 0 15.855 L 0 12.036 L 8.273 3.764 L 8.273 3.764 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _SipLine;
