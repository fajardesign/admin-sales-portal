import { CalendarCardCalendarPage1 } from './CalendarCardCalendarPage1.jsx';

// figma node: 3877:58545 Card Positioning [Calendar Page] [1.1] (11 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "positioning=" + __venc(p.positioning) + '|' + "empty=" + __venc(p.empty) + '|' + "disabled=" + __venc(p.disabled);

export function CardPositioningCalendarPage1(_p = {}) {
  const props = { ..._p, positioning: _p.positioning ?? "half top", empty: _p.empty ?? "off", disabled: _p.disabled ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      position: "relative",
      color: "var(--stroke-soft-200)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 200,
        height: 120,
        overflow: "hidden",
      }}>
        <svg width={330.225} height={290.700} viewBox="0 0 330.225 290.700" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0.866,0.500,-0.500,0.866,29.834,-147.956)",
          transformOrigin: "0 0",
          width: 330.225,
          height: 290.7,
        }}>
          <path d={"M -0.5 0 L -0.5 290.7 L 0.5 290.7 L 0.5 0 L -0.5 0 Z M 8.425 0 L 8.425 290.7 L 9.425 290.7 L 9.425 0 L 8.425 0 Z M 17.35 0 L 17.35 290.7 L 18.35 290.7 L 18.35 0 L 17.35 0 Z M 26.275 0 L 26.275 290.7 L 27.275 290.7 L 27.275 0 L 26.275 0 Z M 35.2 0 L 35.2 290.7 L 36.2 290.7 L 36.2 0 L 35.2 0 Z M 44.125 0 L 44.125 290.7 L 45.125 290.7 L 45.125 0 L 44.125 0 Z M 53.05 0 L 53.05 290.7 L 54.05 290.7 L 54.05 0 L 53.05 0 Z M 61.975 0 L 61.975 290.7 L 62.975 290.7 L 62.975 0 L 61.975 0 Z M 70.9 0 L 70.9 290.7 L 71.9 290.7 L 71.9 0 L 70.9 0 Z M 79.825 0 L 79.825 290.7 L 80.825 290.7 L 80.825 0 L 79.825 0 Z M 88.75 0 L 88.75 290.7 L 89.75 290.7 L 89.75 0 L 88.75 0 Z M 97.675 0 L 97.675 290.7 L 98.675 290.7 L 98.675 0 L 97.675 0 Z M 106.6 0 L 106.6 290.7 L 107.6 290.7 L 107.6 0 L 106.6 0 Z M 115.525 0 L 115.525 290.7 L 116.525 290.7 L 116.525 0 L 115.525 0 Z M 124.45 0 L 124.45 290.7 L 125.45 290.7 L 125.45 0 L 124.45 0 Z M 133.375 0 L 133.375 290.7 L 134.375 290.7 L 134.375 0 L 133.375 0 Z M 142.3 0 L 142.3 290.7 L 143.3 290.7 L 143.3 0 L 142.3 0 Z M 151.225 0 L 151.225 290.7 L 152.225 290.7 L 152.225 0 L 151.225 0 Z M 160.15 0 L 160.15 290.7 L 161.15 290.7 L 161.15 0 L 160.15 0 Z M 169.075 0 L 169.075 290.7 L 170.075 290.7 L 170.075 0 L 169.075 0 Z M 178 0 L 178 290.7 L 179 290.7 L 179 0 L 178 0 Z M 186.925 0 L 186.925 290.7 L 187.925 290.7 L 187.925 0 L 186.925 0 Z M 195.85 0 L 195.85 290.7 L 196.85 290.7 L 196.85 0 L 195.85 0 Z M 204.775 0 L 204.775 290.7 L 205.775 290.7 L 205.775 0 L 204.775 0 Z M 213.7 0 L 213.7 290.7 L 214.7 290.7 L 214.7 0 L 213.7 0 Z M 222.625 0 L 222.625 290.7 L 223.625 290.7 L 223.625 0 L 222.625 0 Z M 231.55 0 L 231.55 290.7 L 232.55 290.7 L 232.55 0 L 231.55 0 Z M 240.475 0 L 240.475 290.7 L 241.475 290.7 L 241.475 0 L 240.475 0 Z M 249.4 0 L 249.4 290.7 L 250.4 290.7 L 250.4 0 L 249.4 0 Z M 258.325 0 L 258.325 290.7 L 259.325 290.7 L 259.325 0 L 258.325 0 Z M 267.25 0 L 267.25 290.7 L 268.25 290.7 L 268.25 0 L 267.25 0 Z M 276.175 0 L 276.175 290.7 L 277.175 290.7 L 277.175 0 L 276.175 0 Z M 285.1 0 L 285.1 290.7 L 286.1 290.7 L 286.1 0 L 285.1 0 Z M 294.025 0 L 294.025 290.7 L 295.025 290.7 L 295.025 0 L 294.025 0 Z M 302.95 0 L 302.95 290.7 L 303.95 290.7 L 303.95 0 L 302.95 0 Z M 311.875 0 L 311.875 290.7 L 312.875 290.7 L 312.875 0 L 311.875 0 Z M 320.8 0 L 320.8 290.7 L 321.8 290.7 L 321.8 0 L 320.8 0 Z M 329.725 0 L 329.725 290.7 L 330.725 290.7 L 330.725 0 L 329.725 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 112,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"regular extended"}
        completed={"off"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"half"}
        completed={"off"}
      />
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 168,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"lg"}
        completed={"off"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 104,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"regular"}
        completed={"off"}
      />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "64px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 104,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"regular"}
        completed={"off"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 168,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"lg"}
        completed={"off"}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 120,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "64px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <CalendarCardCalendarPage1
        style={{
          position: "relative",
          height: 168,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"📅 meetings"}
        size={"lg"}
        completed={"off"}
      />
    </div>
  );
  const __impls = {
    // figma: 🎯 Positioning=Half Top, ⚪️ Empty=On, 🚫 Disabled=Off
    "positioning=half top|empty=on|disabled=off": __body0,
    // figma: 🎯 Positioning=Half Top, ⚪️ Empty=Off, 🚫 Disabled=On
    "positioning=half top|empty=off|disabled=on": __body1,
    // figma: 🎯 Positioning=Half Top, ⚪️ Empty=Off, 🚫 Disabled=Off
    "positioning=half top|empty=off|disabled=off": __body2,
    // figma: 🎯 Positioning=Half Bottom, ⚪️ Empty=On, 🚫 Disabled=Off
    "positioning=half bottom|empty=on|disabled=off": __body3,
    // figma: 🎯 Positioning=Half Double, ⚪️ Empty=On, 🚫 Disabled=Off
    "positioning=half double|empty=on|disabled=off": __body4,
    // figma: 🎯 Positioning=Half + Regular, ⚪️ Empty=On, 🚫 Disabled=Off
    "positioning=half + regular|empty=on|disabled=off": __body5,
    // figma: 🎯 Positioning=Half + Large, ⚪️ Empty=On, 🚫 Disabled=Off
    "positioning=half + large|empty=on|disabled=off": __body6,
    // figma: 🎯 Positioning=Regular, ⚪️ Empty=Off, 🚫 Disabled=Off
    "positioning=regular|empty=off|disabled=off": __body7,
    // figma: 🎯 Positioning=Regular From Mid, ⚪️ Empty=Off, 🚫 Disabled=Off
    "positioning=regular from mid|empty=off|disabled=off": __body8,
    // figma: 🎯 Positioning=Large, ⚪️ Empty=Off, 🚫 Disabled=Off
    "positioning=large|empty=off|disabled=off": __body9,
    // figma: 🎯 Positioning=Large From Mid, ⚪️ Empty=Off, 🚫 Disabled=Off
    "positioning=large from mid|empty=off|disabled=off": __body10,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default CardPositioningCalendarPage1;

/* Figma family alias */
export const CardPositioningCalendarPage11 = CardPositioningCalendarPage1;
