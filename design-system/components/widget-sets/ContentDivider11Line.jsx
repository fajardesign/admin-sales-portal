// figma node: 414:4400 Content Divider [1.1]/Line Spacing
export function _ContentDivider11Line(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "OR" };
  return (
    <div className={props.className} style={{
      width: 480,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "1.500px 0px 1.500px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--stroke-soft-200)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
}
export default _ContentDivider11Line;
