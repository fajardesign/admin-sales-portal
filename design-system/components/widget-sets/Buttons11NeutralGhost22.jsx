import { _FileCopyLine as FileCopyLine } from './FileCopyLine.jsx';

// figma node: 130:4491 Buttons [1.1]/Neutral/Ghost/Disabled/X-Small (32)/On
export function _Buttons11NeutralGhost22(_p = {}) {
  const props = { ..._p, leftIcon: _p.leftIcon ?? true, editText: _p.editText ?? "Button", rightIcon: _p.rightIcon ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
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
          color: "rgb(51,92,255)",
        }}>{props.changeIcon ?? <FileCopyLine />}</div>
    </div>
  );
}
export default _Buttons11NeutralGhost22;
