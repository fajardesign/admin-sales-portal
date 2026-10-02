// figma node: 4415:53671 Color Sliders [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ColorSliders11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "hue slider" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 232,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 4,
        width: 232,
        height: 8,
        borderRadius: 999,
        background: "linear-gradient(-90deg, rgb(240,0,0) -0.00%, rgb(255,0,94) 4.69%, rgb(252,0,114) 4.70%, rgb(234,0,250) 8.85%, rgb(224,0,251) 8.86%, rgb(154,0,255) 13.02%, rgb(49,0,255) 18.23%, rgb(45,1,255) 18.24%, rgb(6,12,255) 23.44%, rgb(4,49,255) 23.45%, rgb(0,124,255) 28.12%, rgb(0,142,255) 33.33%, rgb(34,139,222) 38.54%, rgb(0,219,255) 43.23%, rgb(0,245,255) 47.92%, rgb(0,255,181) 53.65%, rgb(0,255,104) 58.33%, rgb(0,255,34) 64.06%, rgb(42,255,0) 69.27%, rgb(172,255,0) 73.96%, rgb(240,246,0) 78.65%, rgb(255,195,0) 83.33%, rgb(255,129,0) 88.54%, rgb(255,79,0) 94.79%, rgb(255,0,0) 100.00%)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 179.075,
        height: 16,
      }}>
        <div style={{
          position: "absolute",
          left: 171,
          top: 0,
          width: 16,
          height: 16,
          boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "var(--jewel-blue-500)",
            boxShadow: "inset 0 0 0 2px var(--stroke-white-0)",
          }} />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 232,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-efe98099a0aa97c1-5ab3a7d6" style={{
        position: "absolute",
        left: 0,
        top: 4,
        width: 232,
        height: 8,
        borderRadius: 999,
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 232,
        height: 16,
      }}>
        <div style={{
          position: "absolute",
          left: 224,
          top: 0,
          width: 16,
          height: 16,
          boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
        }}>
          <div style={{
            position: "absolute",
            left: -8,
            top: 0,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "var(--jewel-blue-500)",
            boxShadow: "inset 0 0 0 2px var(--stroke-white-0)",
          }} />
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Hue Slider
    "type=hue slider": __body0,
    // figma: 🧩 Type=Opacity
    "type=opacity": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ColorSliders11;
