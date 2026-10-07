import { _ChartLegendDots11 as ChartLegendDots11 } from './ChartLegendDots11.jsx';
import { _TopStatus11 as TopStatus11 } from './TopStatus11.jsx';

// figma node: 173456:10449 Connection Status [Topbar] [1.0] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ConnectionStatusTopbar10(_p = {}) {
  const props = { ..._p, state: _p.state ?? "active", name: _p.name ?? true, editName: _p.editName ?? "Active", verified: _p.verified ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.name && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editName}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <TopStatus11 type={"✅ verified"} style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        )}
      </div>
      <div style={{
        position: "relative",
        width: 20,
        height: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "var(--state-success-base)",
          boxShadow: "inset 0 0 0 2px var(--stroke-white-0), 0px 2px 4px 0px rgba(27,28,29,0.04)",
        }} />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.name && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editName}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <TopStatus11 type={"✅ verified"} style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <ChartLegendDots11 colors={"🩷 pink"} size={"md"} />}</div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Active
    "state=active": __body0,
    // figma: 📌 State=Disconnect
    "state=disconnect": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ConnectionStatusTopbar10;

/* Figma variant-symbol aliases */
export const ConnectionStatusTopbar10Active = (p = {}) => <ConnectionStatusTopbar10 state="active" {...p} />;
export const ConnectionStatusTopbar10Hover = (p = {}) => <ConnectionStatusTopbar10 state="hover" {...p} />;
