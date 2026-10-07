import { _ArrowLeftSLine as ArrowLeftSLine } from '../widget-sets/ArrowLeftSLine.jsx';
import { _ArrowRightSLine as ArrowRightSLine } from '../widget-sets/ArrowRightSLine.jsx';

// figma node: 130:4263 Buttons [1.1]/Neutral/Stroke/Default/X-Small (32)/Off
export function Buttons11NeutralStroke17(_p = {}) {
  const props = { ..._p, leftIcon: _p.leftIcon ?? true, editText: _p.editText ?? "Button", rightIcon: _p.rightIcon ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "6px 6px 6px 6px",
      justifyContent: "center",
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
          color: "rgb(153,160,174)",
        }}>{props.pickLeft ?? <ArrowLeftSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        padding: "0px 4px 0px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
      </div>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.pickRight ?? <ArrowRightSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
}
export default Buttons11NeutralStroke17;
