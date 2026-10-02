// figma node: 41:1889 pencil-line
export function _PencilLine(_p = {}) {
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
      <svg width={16.174} height={16.174} viewBox="0 0 16.174 16.174" fill="none" style={{
        position: "absolute",
        left: 3.9,
        top: 3.926,
        width: 16.174,
        height: 16.174,
      }}>
        <path d={"M 11.455 5.991 L 10.183 4.719 L 1.8 13.101 L 1.8 14.374 L 3.073 14.374 L 11.455 5.991 Z M 12.728 4.719 L 14 3.446 L 12.728 2.173 L 11.455 3.446 L 12.728 4.719 Z M 3.818 16.174 L 0 16.174 L 0 12.355 L 12.091 0.264 C 12.26 0.095 12.489 0 12.728 0 C 12.966 0 13.195 0.095 13.364 0.264 L 15.91 2.81 C 16.079 2.978 16.174 3.207 16.174 3.446 C 16.174 3.685 16.079 3.913 15.91 4.082 L 3.819 16.174 L 3.818 16.174 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _PencilLine;
