import { _Checkbox11 as Checkbox11 } from './Checkbox11.jsx';
import { _SortingIcons11 as SortingIcons11 } from './SortingIcons11.jsx';

// figma node: 587:5793 Table Header Cell [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function _TableHeaderCell11(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", checkbox: _p.checkbox ?? true, sorting: _p.sorting ?? true, editText: _p.editText ?? "Members" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 256,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.sorting && (
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <SortingIcons11 type={"⚪️ default"} />}</div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 256,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"disabled"} active={"off"} indeterminate={"off"} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-disabled-300)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.sorting && (
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
          }}>
            <svg width={8.333} height={12.500} viewBox="0 0 8.333 12.500" fill="none" style={{
              position: "absolute",
              left: 5.833,
              top: 3.75,
              width: 8.333,
              height: 12.5,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 8.333 4.167 L 4.167 0 L 0 4.167 L 8.333 4.167 Z M 8.333 8.333 L 4.167 12.5 L 0 8.333 L 8.333 8.333 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 36,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Disabled
    "state=disabled": __body1,
    // figma: 📌 State=Empty
    "state=empty": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _TableHeaderCell11;
