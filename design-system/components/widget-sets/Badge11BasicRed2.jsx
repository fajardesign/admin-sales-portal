// figma node: 119:1322 Badge [1.1]/📂 Basic/💔 Red/Small (16)/On/Off
export function _Badge11BasicRed2(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Badge", editNumber: _p.editNumber ?? "2" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-base)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--static-static-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
}
export default _Badge11BasicRed2;
