// figma node: 3715:42049 Separator [Page] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function SeparatorPage(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Page Name", type: _p.type ?? "primary" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 104,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--primary-base)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "28px 40px 28px 40px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--static-static-white)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <span style={{
        position: "relative",
        opacity: 0.64,
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 40,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "48px",
        letterSpacing: "-0.010em",
        color: "var(--static-static-white)",
        flexShrink: 0,
      }}>{props.text1 ?? "[1.1]"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1440,
      height: 104,
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "var(--static-static-black)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "28px 40px 28px 40px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 40,
        whiteSpace: "nowrap",
        lineHeight: "48px",
        letterSpacing: "-0.010em",
        color: "var(--static-static-white)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <span style={{
        position: "relative",
        opacity: 0.64,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 24,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "32px",
        letterSpacing: "-0.015em",
        color: "var(--static-static-white)",
        flexShrink: 0,
      }}>{props.text1 ?? "[1.1]"}</span>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Primary
    "type=primary": __body0,
    // figma: 🧩 Type=Important
    "type=important": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SeparatorPage;
