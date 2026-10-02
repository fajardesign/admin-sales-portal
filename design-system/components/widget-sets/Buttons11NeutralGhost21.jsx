import { _FileCopyLine as FileCopyLine } from './FileCopyLine.jsx';

// figma node: 130:4485 Buttons [1.1]/Neutral/Ghost/Default/X-Small (32)/On
export function _Buttons11NeutralGhost21(_p = {}) {
  const props = { ..._p, leftIcon: _p.leftIcon ?? true, editText: _p.editText ?? "Button", rightIcon: _p.rightIcon ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
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
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(153,160,174)",
        }}>{props.changeIcon ?? <FileCopyLine />}</div>
    </div>
  );
}
export default _Buttons11NeutralGhost21;
