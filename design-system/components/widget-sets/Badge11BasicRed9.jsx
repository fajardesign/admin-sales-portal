// figma node: 119:2411 Badge [1.1]/📂 Basic/💔 Red/Medium (20)/Off/Off
export function _Badge11BasicRed9(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Badge", editNumber: _p.editNumber ?? "2" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-light)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-dark)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
}
export default _Badge11BasicRed9;
