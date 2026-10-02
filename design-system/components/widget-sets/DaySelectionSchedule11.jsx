import { ScheduleDateSchedule11 } from './ScheduleDateSchedule11.jsx';

// figma node: 3520:2567 Day Selection [Schedule] [1.1]
export function DaySelectionSchedule11(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
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
          <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
            position: "absolute",
            left: 7.083,
            top: 5.226,
            width: 5.833,
            height: 9.546,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 2.121 4.773 L 5.833 8.486 L 4.773 9.546 L 0 4.773 L 4.773 0 L 5.833 1.06 L 2.121 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}>{props.icon2 ?? <ScheduleDateSchedule11 state={"default"} />}</div>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}>{props.icon3 ?? <ScheduleDateSchedule11 text1={"Sat"} text2={"01"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}>{props.icon4 ?? <ScheduleDateSchedule11 text1={"Sun"} text2={"02"} state={"selected"} />}</div>
        <ScheduleDateSchedule11
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          text1={"Mon"}
          text2={"03"}
          state={"default"}
        />
        <ScheduleDateSchedule11
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          text1={"Tue"}
          text2={"04"}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
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
          <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
            position: "absolute",
            left: 7.083,
            top: 5.226,
            width: 5.833,
            height: 9.546,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default DaySelectionSchedule11;
