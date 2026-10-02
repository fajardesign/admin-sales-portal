import { _LayoutGridLine as LayoutGridLine } from './LayoutGridLine.jsx';

// figma node: 3814:25156 Topbar Item Button [Topbar] [1.0] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TopbarItemButtonTopbar1(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", notification: _p.notification ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickIcon ?? <LayoutGridLine />}</div>
      {props.notification && (
      <div style={{
        position: "absolute",
        left: 24,
        top: 12,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "var(--state-error-base)",
        boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      }} />
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickIcon ?? <LayoutGridLine />}</div>
      {props.notification && (
      <div style={{
        position: "absolute",
        left: 24,
        top: 12,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "var(--state-error-base)",
        boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      }} />
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 10,
      backgroundColor: "var(--jewel-blue-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(82,88,102)",
        }}>{props.pickIcon ?? <LayoutGridLine />}</div>
      {props.notification && (
      <div style={{
        position: "absolute",
        left: 24,
        top: 12,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "var(--state-error-base)",
        boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      }} />
      )}
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Hover
    "state=hover": __body1,
    // figma: 📌 State=Active
    "state=active": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TopbarItemButtonTopbar1;

/* Figma family alias */
export const TopbarItemButtonTopbar10 = TopbarItemButtonTopbar1;
