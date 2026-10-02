// figma node: 41:977 pie-chart-line
export function _PieChartLine(_p = {}) {
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
        <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.97 2.649 1.559 6.3 0.412 L 6.3 2.324 C 4.753 2.952 3.472 4.098 2.677 5.567 C 1.881 7.035 1.621 8.734 1.94 10.373 C 2.259 12.012 3.137 13.489 4.425 14.552 C 5.713 15.615 7.33 16.198 9 16.2 C 10.434 16.2 11.836 15.772 13.026 14.97 C 14.215 14.168 15.138 13.03 15.676 11.7 L 17.588 11.7 C 16.441 15.351 13.03 18 9 18 L 9 18 Z M 17.955 9.9 L 8.1 9.9 L 8.1 0.045 C 8.396 0.015 8.697 0 9 0 C 13.971 0 18 4.029 18 9 C 18 9.303 17.985 9.604 17.955 9.9 Z M 9.9 1.856 L 9.9 8.1 L 16.144 8.1 C 15.944 6.514 15.222 5.039 14.091 3.909 C 12.961 2.778 11.486 2.056 9.9 1.856 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default _PieChartLine;
