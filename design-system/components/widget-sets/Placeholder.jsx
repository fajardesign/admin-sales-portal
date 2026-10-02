// figma node: 214:1291 Placeholder
export function Placeholder(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 32,
      height: 24,
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 3,
        top: 3,
        width: 26,
        height: 18,
        borderRadius: 4,
        backgroundColor: "var(--icon-disabled-300)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        borderLeft: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.04), inset 0px -2px 0px 0px rgba(255,255,255,0.16), inset 0px -3px 3px 0px rgba(255,255,255,0.16)",
      }} />
      <div style={{
        position: "absolute",
        left: 17,
        top: 15,
        width: 8,
        height: 2,
        opacity: 0.72,
        borderRadius: 96,
        backgroundColor: "var(--static-static-white)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.04)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 15,
        width: 8,
        height: 2,
        opacity: 0.72,
        borderRadius: 96,
        backgroundColor: "var(--static-static-white)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.04)",
      }} />
      <div style={{
        position: "absolute",
        left: 7,
        top: 7,
        width: 3,
        height: 3,
        opacity: 0.72,
        borderRadius: 3,
        backgroundColor: "var(--static-static-white)",
        boxShadow: "0px 2px 2px 0px rgba(27,28,29,0.04)",
      }} />
    </div>
  );
}
export default Placeholder;
