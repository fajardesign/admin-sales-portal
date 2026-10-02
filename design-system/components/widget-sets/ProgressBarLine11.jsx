// figma node: 450:17810 Progress Bar Line [1.1] (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "color=" + __venc(p.color);

export function _ProgressBarLine11(_p = {}) {
  const props = { ..._p, color: _p.color ?? "🔵 blue" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,0,6)",
        transformOrigin: "0 0",
        width: 32,
        height: 6,
        borderRadius: 999,
        backgroundColor: "var(--bg-soft-200)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,0,6)",
        transformOrigin: "0 0",
        width: 32,
        height: 6,
        borderRadius: 999,
        backgroundColor: "var(--primary-base)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,0,6)",
        transformOrigin: "0 0",
        width: 32,
        height: 6,
        borderRadius: 999,
        backgroundColor: "var(--state-error-base)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,0,6)",
        transformOrigin: "0 0",
        width: 32,
        height: 6,
        borderRadius: 999,
        backgroundColor: "var(--state-warning-base)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(1,0,0,-1,0,6)",
        transformOrigin: "0 0",
        width: 32,
        height: 6,
        borderRadius: 999,
        backgroundColor: "var(--state-success-base)",
      }} />
    </div>
  );
  const __impls = {
    // figma: 🎨 Color=⚪️ Empty
    "color=⚪️ empty": __body0,
    // figma: 🎨 Color=🔵 Blue
    "color=🔵 blue": __body1,
    // figma: 🎨 Color=🔴 Red
    "color=🔴 red": __body2,
    // figma: 🎨 Color=🟠 Orange
    "color=🟠 orange": __body3,
    // figma: 🎨 Color=🟢 Green
    "color=🟢 green": __body4,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default _ProgressBarLine11;
