import { _ArrowDownSLine as ArrowDownSLine } from './ArrowDownSLine.jsx';
import { _ArrowUpSLine as ArrowUpSLine } from './ArrowUpSLine.jsx';
import { _GlobalLine as GlobalLine } from './GlobalLine.jsx';
import { _UnitedStates as UnitedStates } from './UnitedStates.jsx';

// figma node: 332:4537 Inline Select [1.1] (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function _InlineSelect11(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "USD", type: _p.type ?? "💠 icon", state: _p.state ?? "default", leftIcon: _p.leftIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(82,88,102)",
        }}>{props.pickLeft ?? <GlobalLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <GlobalLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(82,88,102)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <GlobalLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(82,88,102)",
          }}>{props.icon1 ?? <ArrowUpSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(82,88,102)",
        }}>{props.pickLeft ?? <GlobalLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-disabled-300)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.pickCountry ?? <UnitedStates style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.pickCountry ?? <UnitedStates style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(82,88,102)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.pickCountry ?? <UnitedStates style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(82,88,102)",
          }}>{props.icon1 ?? <ArrowUpSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.pickCountry ?? <UnitedStates style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-2) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-disabled-300)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=💠 Icon, 📌 State=Default
    "type=💠 icon|state=default": __body0,
    // figma: 🧩 Type=💠 Icon, 📌 State=Hover
    "type=💠 icon|state=hover": __body1,
    // figma: 🧩 Type=💠 Icon, 📌 State=Active
    "type=💠 icon|state=active": __body2,
    // figma: 🧩 Type=💠 Icon, 📌 State=Disabled
    "type=💠 icon|state=disabled": __body3,
    // figma: 🧩 Type=🌍 Country, 📌 State=Default
    "type=🌍 country|state=default": __body4,
    // figma: 🧩 Type=🌍 Country, 📌 State=Hover
    "type=🌍 country|state=hover": __body5,
    // figma: 🧩 Type=🌍 Country, 📌 State=Active
    "type=🌍 country|state=active": __body6,
    // figma: 🧩 Type=🌍 Country, 📌 State=Disabled
    "type=🌍 country|state=disabled": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _InlineSelect11;
