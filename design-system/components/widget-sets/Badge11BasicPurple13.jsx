// figma node: 119:2671 Badge [1.1]/📂 Basic/💜 Purple/Medium (20)/Off/Off
export function _Badge11BasicPurple13(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-feature-lighter)",
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
        color: "var(--state-feature-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
}
export default _Badge11BasicPurple13;
