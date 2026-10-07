import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _SelectBoxCircleFill as SelectBoxCircleFill } from './SelectBoxCircleFill.jsx';

// figma node: 3948:25319 My Contacts [Quick Transfer] [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function MyContactsQuickTransfer1(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 12px 6px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar11 persona={"natalia nowak"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Natalia"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 12px 6px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar11 persona={"natalia nowak"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Natalia"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-weak-50)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "6px 8px 6px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar11 persona={"natalia nowak"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Natalia"}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.icon2 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
export default MyContactsQuickTransfer1;

/* Figma family alias */
export const MyContactsQuickTransfer11 = MyContactsQuickTransfer1;
