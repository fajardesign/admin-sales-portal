import { _ArrowLeftSLine as ArrowLeftSLine } from './ArrowLeftSLine.jsx';
import { _ArrowRightSLine as ArrowRightSLine } from './ArrowRightSLine.jsx';

// figma node: 169:1371 Link Buttons [1.1]/Gray/Default/Medium (20)/On
export function _LinkButtons11Gray5(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Link Button", leftIcon: _p.leftIcon ?? true, rightIcon: _p.rightIcon ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <ArrowLeftSLine />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowRightSLine />}</div>
      )}
    </div>
  );
}
export default _LinkButtons11Gray5;
