import { _GrinningFaceWithSmilingEyes as GrinningFaceWithSmilingEyes } from './GrinningFaceWithSmilingEyes.jsx';
import { _RatingItems10 as RatingItems10 } from './RatingItems10.jsx';

// figma node: 535:4535 Rating Bar Items [1.1] (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function _RatingBarItems11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "🙂 emoji", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.pickEmoji ?? <GrinningFaceWithSmilingEyes />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"empty line"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"empty line"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"empty filled"} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"empty filled"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.pickEmoji ?? <GrinningFaceWithSmilingEyes />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-strong-950)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 4px 8px 4px",
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
        }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=🙂 Emoji, 📌 State=Default
    "type=🙂 emoji|state=default": __body0,
    // figma: 🧩 Type=⏺️ Number, 📌 State=Default
    "type=⏺️ number|state=default": __body1,
    // figma: 🧩 Type=⭐️ Star, 📌 State=Default
    "type=⭐️ star|state=default": __body2,
    // figma: 🧩 Type=💜 Heart, 📌 State=Default
    "type=💜 heart|state=default": __body3,
    // figma: 🧩 Type=🙂 Emoji, 📌 State=Hover
    "type=🙂 emoji|state=hover": __body0,
    // figma: 🧩 Type=⏺️ Number, 📌 State=Hover
    "type=⏺️ number|state=hover": __body4,
    // figma: 🧩 Type=⭐️ Star, 📌 State=Hover
    "type=⭐️ star|state=hover": __body5,
    // figma: 🧩 Type=💜 Heart, 📌 State=Hover
    "type=💜 heart|state=hover": __body6,
    // figma: 🧩 Type=🙂 Emoji, 📌 State=Selected
    "type=🙂 emoji|state=selected": __body7,
    // figma: 🧩 Type=⏺️ Number, 📌 State=Selected
    "type=⏺️ number|state=selected": __body8,
    // figma: 🧩 Type=⭐️ Star, 📌 State=Selected
    "type=⭐️ star|state=selected": __body9,
    // figma: 🧩 Type=💜 Heart, 📌 State=Selected
    "type=💜 heart|state=selected": __body10,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _RatingBarItems11;
