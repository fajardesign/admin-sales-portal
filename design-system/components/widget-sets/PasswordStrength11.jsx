import { _CloseCircleFill as CloseCircleFill } from './CloseCircleFill.jsx';
import { _SelectBoxCircleFill as SelectBoxCircleFill } from './SelectBoxCircleFill.jsx';

// figma node: 327:8202 Password Strength [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "strength=" + __venc(p.strength);

export function _PasswordStrength11(_p = {}) {
  const props = { ..._p, strength: _p.strength ?? "⚪️ empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 106,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Must contain at least;"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "At least 1 uppercase"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon2 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "At least 1 number"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "At least 8 characters"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 106,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-error-base)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Must contain at least;"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon1 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "At least 1 uppercase"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon2 ?? <CloseCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "At least 1 number"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <CloseCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "At least 8 characters"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 106,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-error-base)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-warning-base)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Must contain at least;"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon1 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "At least 1 uppercase"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon2 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "At least 1 number"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <CloseCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "At least 8 characters"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 106,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-error-base)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-warning-base)",
          flexGrow: 1,
        }} />
        <div style={{
          position: "relative",
          height: 4,
          borderRadius: 1.2000000476837158,
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "Must contain at least;"}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon1 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "At least 1 uppercase"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon2 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "At least 1 number"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon3 ?? <SelectBoxCircleFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "At least 8 characters"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 💪 Strength=⚪️ Empty
    "strength=⚪️ empty": __body0,
    // figma: 💪 Strength=🔴 Weak
    "strength=🔴 weak": __body1,
    // figma: 💪 Strength=🟡 Moderate
    "strength=🟡 moderate": __body2,
    // figma: 💪 Strength=🟢 Strong
    "strength=🟢 strong": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _PasswordStrength11;
