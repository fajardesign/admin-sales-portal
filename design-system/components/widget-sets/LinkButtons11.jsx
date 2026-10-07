import { _ArrowLeftSLine as ArrowLeftSLine } from './ArrowLeftSLine.jsx';
import { _ArrowRightSLine as ArrowRightSLine } from './ArrowRightSLine.jsx';

// figma node: 168:4889 Link Buttons [1.1] (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size) + '|' + "underline=" + __venc(p.underline);

export function _LinkButtons11(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Link Button", leftIcon: _p.leftIcon ?? true, rightIcon: _p.rightIcon ?? true, state: _p.state ?? "default", size: _p.size ?? "md", underline: _p.underline ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
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
        }}>{props.pickLeft ?? <ArrowLeftSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--primary-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowRightSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <ArrowLeftSLine />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--primary-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowRightSLine />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
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
        }}>{props.pickLeft ?? <ArrowLeftSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--primary-base)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowRightSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickLeft ?? <ArrowLeftSLine />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--primary-base)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(14,18,27)",
        }}>{props.pickRight ?? <ArrowRightSLine />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
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
          color: "rgb(71,108,255)",
        }}>{props.pickLeft ?? <ArrowLeftSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--primary-darker)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(71,108,255)",
        }}>{props.pickRight ?? <ArrowRightSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(71,108,255)",
        }}>{props.pickLeft ?? <ArrowLeftSLine />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--primary-darker)",
        textDecoration: "underline",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(71,108,255)",
        }}>{props.pickRight ?? <ArrowRightSLine />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
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
        }}>{props.pickLeft ?? <ArrowLeftSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(82,88,102)",
        }}>{props.pickRight ?? <ArrowRightSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      {props.leftIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(82,88,102)",
        }}>{props.pickLeft ?? <ArrowLeftSLine />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      {props.rightIcon && (
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(82,88,102)",
        }}>{props.pickRight ?? <ArrowRightSLine />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, 📏 Size=Medium (20), 〰️ Underline=Off
    "state=default|size=md|underline=off": __body0,
    // figma: 📌 State=Default, 📏 Size=Small (16), 〰️ Underline=Off
    "state=default|size=sm|underline=off": __body1,
    // figma: 📌 State=Default, 📏 Size=Medium (20), 〰️ Underline=On
    "state=default|size=md|underline=on": __body2,
    // figma: 📌 State=Default, 📏 Size=Small (16), 〰️ Underline=On
    "state=default|size=sm|underline=on": __body3,
    // figma: 📌 State=Hover, 📏 Size=Medium (20), 〰️ Underline=Off
    "state=hover|size=md|underline=off": __body4,
    // figma: 📌 State=Hover, 📏 Size=Small (16), 〰️ Underline=Off
    "state=hover|size=sm|underline=off": __body5,
    // figma: 📌 State=Hover, 📏 Size=Medium (20), 〰️ Underline=On
    "state=hover|size=md|underline=on": __body4,
    // figma: 📌 State=Hover, 📏 Size=Small (16), 〰️ Underline=On
    "state=hover|size=sm|underline=on": __body5,
    // figma: 📌 State=Focus, 📏 Size=Medium (20), 〰️ Underline=Off
    "state=focus|size=md|underline=off": __body2,
    // figma: 📌 State=Focus, 📏 Size=Small (16), 〰️ Underline=Off
    "state=focus|size=sm|underline=off": __body3,
    // figma: 📌 State=Focus, 📏 Size=Medium (20), 〰️ Underline=On
    "state=focus|size=md|underline=on": __body2,
    // figma: 📌 State=Focus, 📏 Size=Small (16), 〰️ Underline=On
    "state=focus|size=sm|underline=on": __body3,
    // figma: 📌 State=Disabled, 📏 Size=Medium (20), 〰️ Underline=Off
    "state=disabled|size=md|underline=off": __body6,
    // figma: 📌 State=Disabled, 📏 Size=Small (16), 〰️ Underline=Off
    "state=disabled|size=sm|underline=off": __body7,
    // figma: 📌 State=Disabled, 📏 Size=Medium (20), 〰️ Underline=On
    "state=disabled|size=md|underline=on": __body6,
    // figma: 📌 State=Disabled, 📏 Size=Small (16), 〰️ Underline=On
    "state=disabled|size=sm|underline=on": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _LinkButtons11;
