// figma node: 414:4401 Content Divider [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function _ContentDivider11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "line", editText: _p.editText ?? "OR" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 480,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--stroke-sub-300)",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 480 1" fill="none" style={{ position: "relative", height: 1, flexGrow: 1 }}>
        <path d={"M 0 0 L 480 0 L 480 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 480,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--stroke-sub-300)",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 218 1" fill="none" style={{ position: "relative", height: 1, flexGrow: 1 }}>
        <path d={"M 0 -0.5 L 0 0 L 218 0 L 218 -0.5 L 218 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "0.040em",
        color: "var(--text-soft-400)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <svg height={1} viewBox="0 -0.500 218 1" fill="none" style={{ position: "relative", height: 1, flexGrow: 1 }}>
        <path d={"M 0 -0.5 L 0 0 L 218 0 L 218 -0.5 L 218 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 480,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
        lineHeight: "16px",
        letterSpacing: "0.040em",
        color: "var(--text-soft-400)",
        textTransform: "uppercase",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 480,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 20px 6px 20px",
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
        lineHeight: "16px",
        letterSpacing: "0.040em",
        color: "var(--text-sub-600)",
        textTransform: "uppercase",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "TITLE"}</span>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Line
    "type=line": __body0,
    // figma: 🧩 Type=Text & Line Divider
    "type=text & line divider": __body1,
    // figma: 🧩 Type=Text Divider
    "type=text divider": __body2,
    // figma: 🧩 Type=Solid Text Divider
    "type=solid text divider": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _ContentDivider11;
