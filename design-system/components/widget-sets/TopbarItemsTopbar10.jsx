import { _ArrowDownSLine as ArrowDownSLine } from './ArrowDownSLine.jsx';
import { _Badge11BasicOrange3 as Badge11BasicOrange3 } from './Badge11BasicOrange3.jsx';
import { _Badge11BasicRed2 as Badge11BasicRed2 } from './Badge11BasicRed2.jsx';
import { _LayoutGridLine as LayoutGridLine } from './LayoutGridLine.jsx';

// figma node: 3802:24588 Topbar Items [Topbar] [1.0] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TopbarItemsTopbar10(_p = {}) {
  const props = { ..._p, leftIcon: _p.leftIcon ?? true, state: _p.state ?? "default", rightIcon: _p.rightIcon ?? false, badge: _p.badge ?? false, notification: _p.notification ?? false, editText: _p.editText ?? "Dashboard" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <LayoutGridLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.badge && (
        <div style={{ position: "relative", width: 43, flexShrink: 0 }}>{props.icon1 ?? <Badge11BasicOrange3 editText={"New"} />}</div>
        )}
      </div>
      {props.notification && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicRed2 editText={"New"} />}</div>
      )}
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <LayoutGridLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.badge && (
        <div style={{ position: "relative", width: 43, flexShrink: 0 }}>{props.icon1 ?? <Badge11BasicOrange3 editText={"New"} />}</div>
        )}
      </div>
      {props.notification && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicRed2 editText={"New"} />}</div>
      )}
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.pickRight ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--jewel-blue-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(82,88,102)",
        }}>{props.pickLeft ?? <LayoutGridLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
        }}>{props.editText}</span>
        {props.badge && (
        <div style={{ position: "relative", width: 43, flexShrink: 0 }}>{props.icon1 ?? <Badge11BasicOrange3 editText={"New"} />}</div>
        )}
      </div>
      {props.notification && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicRed2 editText={"New"} />}</div>
      )}
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.pickRight ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
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
export default TopbarItemsTopbar10;
