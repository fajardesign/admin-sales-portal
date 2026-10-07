import { UpcomingStatusCalendarPage1 } from './UpcomingStatusCalendarPage1.jsx';

// figma node: 3875:40906 Calendar Upcoming [Calendar Page] [1.1] (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function CalendarUpcomingCalendarPage1(_p = {}) {
  const props = { ..._p, status: _p.status ?? "default", editTitle: _p.editTitle ?? "Insert title here", editDescription: _p.editDescription ?? "Insert time or description here" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 264,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 8px 8px 8px",
      alignItems: "flex-start",
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
        padding: "0px 8px 0px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editTitle}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <UpcomingStatusCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        later={"on"}
        cancelled={"off"}
        conflicted={"off"}
        today={"off"}
      />
    </div>
  );
  const __impls = {
    // figma: ✨ Status=Default
    "status=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CalendarUpcomingCalendarPage1;

/* Figma family alias */
export const CalendarUpcomingCalendarPage11 = CalendarUpcomingCalendarPage1;
