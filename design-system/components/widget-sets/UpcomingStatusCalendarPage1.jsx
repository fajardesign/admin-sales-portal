import { _LinkButtons11Gray10 as LinkButtons11Gray10 } from './LinkButtons11Gray10.jsx';
import { _SpamFill as SpamFill } from './SpamFill.jsx';
import { _TimeFill as TimeFill } from './TimeFill.jsx';

// figma node: 3873:40841 Upcoming Status [Calendar Page] [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "later=" + __venc(p.later) + '|' + "cancelled=" + __venc(p.cancelled) + '|' + "conflicted=" + __venc(p.conflicted) + '|' + "today=" + __venc(p.today);

export function UpcomingStatusCalendarPage1(_p = {}) {
  const props = { ..._p, later: _p.later ?? "off", cancelled: _p.cancelled ?? "off", conflicted: _p.conflicted ?? "off", today: _p.today ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 12px 8px 8px",
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
          color: "rgb(113,119,132)",
        }}>{props.icon1 ?? <TimeFill />}</div>
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
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "3 days later"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Feb 20, 2023"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 12px 8px 8px",
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
          color: "rgb(104,18,25)",
        }}>{props.icon1 ?? <TimeFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Cancelled"}</span>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Feb 20, 2023"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--state-warning-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 12px 8px 8px",
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
          color: "rgb(31,193,107)",
        }}>{props.icon1 ?? <SpamFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "2 Conflicted"}</span>
      <div style={{
          position: "relative",
          width: 70,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"See Conflict"} leftIcon={false} rightIcon={false} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 12px 8px 8px",
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
          color: "rgb(11,70,39)",
        }}>{props.icon1 ?? <TimeFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Today"}</span>
      <LinkButtons11Gray10
        style={{
          position: "relative",
          width: 75,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        editText={"Join Meeting"}
        leftIcon={false}
        rightIcon={false}
      />
    </div>
  );
  const __impls = {
    // figma: ⚪️ Later=On, 🔴 Cancelled=Off, 🟠 Conflicted=Off, 🟢 Today=Off
    "later=on|cancelled=off|conflicted=off|today=off": __body0,
    // figma: ⚪️ Later=Off, 🔴 Cancelled=On, 🟠 Conflicted=Off, 🟢 Today=Off
    "later=off|cancelled=on|conflicted=off|today=off": __body1,
    // figma: ⚪️ Later=Off, 🔴 Cancelled=Off, 🟠 Conflicted=On, 🟢 Today=Off
    "later=off|cancelled=off|conflicted=on|today=off": __body2,
    // figma: ⚪️ Later=Off, 🔴 Cancelled=Off, 🟠 Conflicted=Off, 🟢 Today=On
    "later=off|cancelled=off|conflicted=off|today=on": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default UpcomingStatusCalendarPage1;

/* Figma family alias */
export const UpcomingStatusCalendarPage11 = UpcomingStatusCalendarPage1;
