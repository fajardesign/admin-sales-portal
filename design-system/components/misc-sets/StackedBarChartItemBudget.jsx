// figma node: 3963:6847 Stacked Bar Chart Item [Budget Overview] [1.1] (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function StackedBarChartItemBudget(_p = {}) {
  const props = { ..._p, type: _p.type ?? "income", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 80,
      backgroundColor: "var(--state-information-base)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 80,
      backgroundColor: "var(--state-verified-base)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 80,
      backgroundColor: "var(--state-feature-base)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: 🧩 Type=Income, 📌 State=Default
    "type=income|state=default": __body0,
    // figma: 🧩 Type=Expenses, 📌 State=Default
    "type=expenses|state=default": __body1,
    // figma: 🧩 Type=Scheduled, 📌 State=Default
    "type=scheduled|state=default": __body2,
    // figma: 🧩 Type=Income, 📌 State=Hover
    "type=income|state=hover": __body0,
    // figma: 🧩 Type=Expenses, 📌 State=Hover
    "type=expenses|state=hover": __body1,
    // figma: 🧩 Type=Scheduled, 📌 State=Hover
    "type=scheduled|state=hover": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StackedBarChartItemBudget;
