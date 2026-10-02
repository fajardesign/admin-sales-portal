import { _ConfusedFace as ConfusedFace } from './ConfusedFace.jsx';
import { _NeutralFace as NeutralFace } from './NeutralFace.jsx';
import { _PensiveFace as PensiveFace } from './PensiveFace.jsx';
import { _RatingBarItems11 as RatingBarItems11 } from './RatingBarItems11.jsx';
import { _SlightlySmilingFace as SlightlySmilingFace } from './SlightlySmilingFace.jsx';

// figma node: 535:4658 Rating Bar [1.1] (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "selected=" + __venc(p.selected);

export function _RatingBar11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "🙂 emoji", selected: _p.selected ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 pickEmoji={<PensiveFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 pickEmoji={<ConfusedFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 pickEmoji={<NeutralFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 pickEmoji={<SlightlySmilingFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"🙂 emoji"}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 pickEmoji={<PensiveFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 pickEmoji={<ConfusedFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 pickEmoji={<NeutralFace />} type={"🙂 emoji"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 pickEmoji={<SlightlySmilingFace />} type={"🙂 emoji"} state={"selected"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"🙂 emoji"}
        state={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 text1={"2"} type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 text1={"3"} type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 text1={"4"} type={"⏺️ number"} state={"default"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"5"}
        type={"⏺️ number"}
        state={"default"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 text1={"2"} type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 text1={"3"} type={"⏺️ number"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 text1={"4"} type={"⏺️ number"} state={"selected"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"5"}
        type={"⏺️ number"}
        state={"default"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"⭐️ star"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 type={"⭐️ star"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 type={"⭐️ star"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 type={"⭐️ star"} state={"default"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"⭐️ star"}
        state={"default"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"⭐️ star"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 type={"⭐️ star"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 type={"⭐️ star"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 type={"⭐️ star"} state={"selected"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"⭐️ star"}
        state={"selected"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"💜 heart"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 type={"💜 heart"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 type={"💜 heart"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 type={"💜 heart"} state={"default"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"💜 heart"}
        state={"default"}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingBarItems11 type={"💜 heart"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingBarItems11 type={"💜 heart"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingBarItems11 type={"💜 heart"} state={"selected"} />}</div>
      <div style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingBarItems11 type={"💜 heart"} state={"selected"} />}</div>
      <RatingBarItems11
        style={{
          position: "relative",
          width: 64,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"💜 heart"}
        state={"selected"}
      />
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=🙂 Emoji, ✅ Selected=Off
    "type=🙂 emoji|selected=off": __body0,
    // figma: 🧩 Type=🙂 Emoji, ✅ Selected=On
    "type=🙂 emoji|selected=on": __body1,
    // figma: 🧩 Type=⏺️ Number, ✅ Selected=Off
    "type=⏺️ number|selected=off": __body2,
    // figma: 🧩 Type=⏺️ Number, ✅ Selected=On
    "type=⏺️ number|selected=on": __body3,
    // figma: 🧩 Type=⭐️ Star, ✅ Selected=Off
    "type=⭐️ star|selected=off": __body4,
    // figma: 🧩 Type=⭐️ Star, ✅ Selected=On
    "type=⭐️ star|selected=on": __body5,
    // figma: 🧩 Type=💜 Heart, ✅ Selected=Off
    "type=💜 heart|selected=off": __body6,
    // figma: 🧩 Type=💜 Heart, ✅ Selected=On
    "type=💜 heart|selected=on": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _RatingBar11;
