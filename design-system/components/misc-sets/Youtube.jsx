// figma node: 214:133 Youtube
export function Youtube(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,0,0)",
      ...props.style,
    }}>
      <svg width={28} height={20} viewBox="0 0 28 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 6,
        width: 28,
        height: 20,
      }}>
        <path d={"M 27.415 3.129 C 27.093 1.898 26.144 0.927 24.939 0.598 C 22.756 0 14 0 14 0 C 14 0 5.244 0 3.061 0.598 C 1.856 0.928 0.907 1.898 0.585 3.129 C 0 5.362 0 10.02 0 10.02 C 0 10.02 0 14.678 0.585 16.911 C 0.907 18.143 1.856 19.073 3.061 19.402 C 5.244 20 14 20 14 20 C 14 20 22.756 20 24.939 19.402 C 26.144 19.073 27.093 18.143 27.415 16.911 C 28 14.678 28 10.02 28 10.02 C 28 10.02 28 5.362 27.415 3.129 Z M 11.136 14.25 L 11.136 5.791 L 18.454 10.02 L 11.136 14.25 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default Youtube;
