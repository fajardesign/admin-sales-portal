import { _ArrowDownSLine as ArrowDownSLine } from './ArrowDownSLine.jsx';
import { _ArrowUpSLine as ArrowUpSLine } from './ArrowUpSLine.jsx';
import { MondayCom } from './MondayCom.jsx';

// figma node: 3849:32128 Time Tracker Dropdown [Time Tracker] [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TimeTrackerDropdownTimeTracker(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", company: _p.company ?? true, editText: _p.editText ?? "Monday.com Redesign" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 10px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.company && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.pickCompany ?? <MondayCom style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 10px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.company && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.pickCompany ?? <MondayCom style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 10px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.company && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.pickCompany ?? <MondayCom style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon1 ?? <ArrowUpSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 10px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.company && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.pickCompany ?? <MondayCom style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Hover
    "state=hover": __body1,
    // figma: 📌 State=Focus
    "state=focus": __body2,
    // figma: 📌 State=Active
    "state=active": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TimeTrackerDropdownTimeTracker;

/* Figma family alias */
export const TimeTrackerDropdownTimeTracker11 = TimeTrackerDropdownTimeTracker;
