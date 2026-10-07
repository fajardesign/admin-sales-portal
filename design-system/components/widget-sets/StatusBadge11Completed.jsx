import { _SelectBoxCircleFill as SelectBoxCircleFill } from './SelectBoxCircleFill.jsx';

// figma node: 171:5109 Status Badge [1.1]/❇️ Completed/Off
export function _StatusBadge11Completed(_p = {}) {
  const props = { ..._p, editBadge: _p.editBadge ?? "Badge" };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "4px 8px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,255,255)",
        }}>{props.icon1 ?? <SelectBoxCircleFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editBadge}</span>
    </div>
  );
}
export default _StatusBadge11Completed;
