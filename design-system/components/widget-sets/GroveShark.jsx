// figma node: 214:385 Grove Shark
export function _GroveShark(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      overflow: "hidden",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: "rgb(248,89,26)",
      }} />
      <svg width={21.995} height={22} viewBox="0 0 21.995 22" fill="none" style={{
        position: "absolute",
        left: 5.003,
        top: 5,
        width: 21.995,
        height: 22,
      }}>
        <path d={"M 17.446 13.207 C 16.615 12.856 15.921 12.143 15.405 11.421 C 14.812 10.592 14.204 9.777 13.54 9.005 C 12.915 8.279 12.25 7.583 11.529 6.955 C 10.808 6.327 10.024 5.73 9.161 5.315 C 8.582 5.036 7.986 4.826 7.369 4.65 C 7.299 4.63 7.111 4.545 7.055 4.63 C 7.021 4.684 7.047 4.783 7.055 4.842 C 7.07 4.97 7.085 5.098 7.101 5.225 C 7.285 6.756 7.355 8.373 6.88 9.859 C 6.624 10.661 6.159 11.393 5.539 11.961 C 5.025 12.43 4.291 12.906 3.562 12.872 C 1.454 12.783 2.4 9.303 2.798 8.131 C 3.992 4.669 7.351 2.27 10.997 2.27 C 15.75 2.27 19.698 6.281 19.667 11 C 19.656 12.403 19.206 13.949 17.446 13.207 Z M 21.564 7.944 C 20.24 3.356 16.012 0 10.997 0 C 5.984 0 1.755 3.356 0.431 7.944 C -0.042 9.582 -0.127 11.318 0.182 12.995 C 1.12 18.118 5.604 22 10.997 22 C 16.392 22 20.875 18.118 21.814 12.995 C 22.122 11.318 22.035 9.582 21.564 7.944 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _GroveShark;
