// figma node: 4456:115425 Color Spectrum [1.1]
export function ColorSpectrum11(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 232,
      height: 232,
      overflow: "hidden",
      borderRadius: 8,
      background: "linear-gradient(88.568deg, rgb(255,255,255) 1.22%, rgba(255,255,255,0) 50.03%), linear-gradient(var(--primary-base),var(--primary-base))",
      position: "relative",
      ...props.style,
    }}>
      <svg width={232} height={148} viewBox="0 0 232 148" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 84,
        width: 232,
        height: 148,
        overflow: "hidden",
      }}>
        <path d={"M 0 0 L 232 0 L 232 148 L 0 148 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 192,
        top: 87,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "var(--jewel-blue-500)",
        boxShadow: "inset 0 0 0 2px var(--static-static-white)",
      }} />
    </div>
  );
}
export default ColorSpectrum11;
