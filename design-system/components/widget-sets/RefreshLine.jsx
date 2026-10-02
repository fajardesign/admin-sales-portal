// figma node: 41:8449 refresh-line
export function _RefreshLine(_p = {}) {
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
        <path d={"M 3.117 2.19 C 4.75 0.775 6.839 -0.003 9 0 C 13.971 0 18 4.029 18 9 C 18 10.922 17.397 12.704 16.371 14.166 L 13.5 9 L 16.2 9 C 16.2 7.588 15.785 6.208 15.007 5.03 C 14.229 3.853 13.122 2.93 11.823 2.376 C 10.525 1.823 9.092 1.663 7.704 1.917 C 6.315 2.171 5.032 2.828 4.014 3.805 L 3.117 2.19 Z M 14.883 15.81 C 13.25 17.225 11.161 18.003 9 18 C 4.029 18 0 13.971 0 9 C 0 7.078 0.603 5.296 1.629 3.834 L 4.5 9 L 1.8 9 C 1.8 10.412 2.215 11.792 2.993 12.97 C 3.771 14.147 4.878 15.07 6.177 15.624 C 7.475 16.177 8.908 16.337 10.296 16.083 C 11.685 15.829 12.968 15.172 13.986 14.195 L 14.883 15.81 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _RefreshLine;
