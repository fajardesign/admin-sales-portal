// figma node: 41:2330 drop-fill
export function _DropFill(_p = {}) {
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
      <svg width={16.200} height={19.555} viewBox="0 0 16.200 19.555" fill="none" style={{
        position: "absolute",
        left: 3.9,
        top: 1.445,
        width: 16.2,
        height: 19.555,
      }}>
        <path d={"M 2.372 5.728 L 8.1 0 L 13.828 5.728 C 14.96 6.86 15.732 8.304 16.044 9.875 C 16.357 11.446 16.196 13.075 15.583 14.555 C 14.97 16.035 13.932 17.3 12.6 18.19 C 11.268 19.08 9.702 19.555 8.1 19.555 C 6.498 19.555 4.932 19.08 3.6 18.19 C 2.268 17.3 1.23 16.035 0.617 14.555 C 0.004 13.075 -0.157 11.446 0.156 9.875 C 0.468 8.304 1.24 6.86 2.372 5.728 L 2.372 5.728 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _DropFill;
