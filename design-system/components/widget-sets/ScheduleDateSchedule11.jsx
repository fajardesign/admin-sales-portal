// figma node: 3520:2550 Schedule Date [Schedule] [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ScheduleDateSchedule11(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 4px 8px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Fri"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--text-strong-950)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "31"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 4px 8px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Fri"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        letterSpacing: "-0.011em",
        color: "var(--text-strong-950)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "31"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 48,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--primary-base)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 4px 8px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--static-static-white)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Fri"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        lineHeight: "24px",
        letterSpacing: "-0.011em",
        color: "var(--static-static-white)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "31"}</span>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Hover
    "state=hover": __body1,
    // figma: 📌 State=Selected
    "state=selected": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ScheduleDateSchedule11;
