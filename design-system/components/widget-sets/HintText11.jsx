import { _InformationFill as InformationFill } from './InformationFill.jsx';

// figma node: 266:5284 Hint Text [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function _HintText11(_p = {}) {
  const props = { ..._p, leftIcon: _p.leftIcon ?? true, editHintText: _p.editHintText ?? "This is a hint text to help user.", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(82,88,102)",
        }}>{props.pickLeft ?? <InformationFill />}</div>
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
      }}>{props.editHintText}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(153,160,174)",
        }}>{props.pickLeft ?? <InformationFill />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editHintText}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 190,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickLeft ?? <InformationFill />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--text-disabled-300)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.editHintText}</span>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Error
    "state=error": __body1,
    // figma: 📌 State=Disabled
    "state=disabled": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _HintText11;
