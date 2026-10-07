import { _Badge11 as Badge11 } from './Badge11.jsx';
import { _Badge11BasicOrange13 as Badge11BasicOrange13 } from './Badge11BasicOrange13.jsx';
import { _CalendarLine as CalendarLine } from './CalendarLine.jsx';
import { _SelectBoxBlankCircleLine as SelectBoxBlankCircleLine } from './SelectBoxBlankCircleLine.jsx';
import { _SelectBoxCircleFill as SelectBoxCircleFill } from './SelectBoxCircleFill.jsx';

// figma node: 3872:24017 Notes Content [Notes] [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function NotesContentNotes11(_p = {}) {
  const props = { ..._p, editTitle: _p.editTitle ?? "Insert note title here.", editDescription: _p.editDescription ?? "Insert note description here.", state: _p.state ?? "default", editDate: _p.editDate ?? "Aug 02" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.icon1 ?? <SelectBoxBlankCircleLine />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
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
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11 editText={"Today"} type={"📂 basic"} color={"💔 red"} size={"md"} number={"off"} disabled={"off"} />}</div>
          <Badge11BasicOrange13
            style={{ position: "relative", width: 118, flexShrink: 0 }}
            editText={"Waiting Feedback"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon3 ?? <CalendarLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-soft-400)",
              flexShrink: 0,
            }}>{props.editDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon1 ?? <SelectBoxCircleFill />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editTitle}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11 editText={"Today"} type={"📂 basic"} color={"🩶 gray"} size={"md"} number={"off"} disabled={"on"} />}</div>
          <Badge11
            style={{ position: "relative", width: 118, flexShrink: 0 }}
            editText={"Waiting Feedback"}
            type={"📂 basic"}
            color={"🩶 gray"}
            size={"md"}
            number={"off"}
            disabled={"on"}
          />
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon3 ?? <CalendarLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-soft-400)",
              flexShrink: 0,
            }}>{props.editDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Checked
    "state=checked": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NotesContentNotes11;
