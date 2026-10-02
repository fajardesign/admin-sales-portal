import { _ArrowDownSFill as ArrowDownSFill } from './ArrowDownSFill.jsx';
import { _ArrowUpSFill as ArrowUpSFill } from './ArrowUpSFill.jsx';
import { _ExpandUpDownFill as ExpandUpDownFill } from './ExpandUpDownFill.jsx';

// figma node: 581:2327 Sorting Icons [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function _SortingIcons11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "⚪️ default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "var(--icon-soft-400)",
        }}>{props.icon1 ?? <ExpandUpDownFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "var(--icon-soft-400)",
        }}>{props.icon1 ?? <ArrowUpSFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "var(--icon-soft-400)",
        }}>{props.icon1 ?? <ArrowDownSFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=⚪️ Default
    "type=⚪️ default": __body0,
    // figma: 🧩 Type=🔼 Up
    "type=🔼 up": __body1,
    // figma: 🧩 Type=🔽 Down
    "type=🔽 down": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _SortingIcons11;
