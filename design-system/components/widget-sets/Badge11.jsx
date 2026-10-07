import { _FlashlightFill as FlashlightFill } from './FlashlightFill.jsx';

// figma node: 118:2324 Badge [1.1] (60 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "color=" + __venc(p.color) + '|' + "size=" + __venc(p.size) + '|' + "number=" + __venc(p.number) + '|' + "disabled=" + __venc(p.disabled);

export function _Badge11(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "Badge", editNumber: _p.editNumber ?? "2", type: _p.type ?? "📂 basic", color: _p.color ?? "🩶 gray", size: _p.size ?? "md", number: _p.number ?? "off", disabled: _p.disabled ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-faded-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--state-faded-base)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-information-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(113,119,132)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--state-information-base)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(113,119,132)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-error-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,145,71)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--state-error-base)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,145,71)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-success-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--state-success-base)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-away-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(31,193,107)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--state-away-base)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(31,193,107)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--text-disabled-300)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--icon-disabled-300)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--text-disabled-300)",
        textTransform: "uppercase",
        flexShrink: 0,
      }}>{props.editText}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(198,202,210)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--text-disabled-300)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 11,
        whiteSpace: "nowrap",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--text-disabled-300)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(198,202,210)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 11,
        textAlign: "center",
        lineHeight: "12px",
        letterSpacing: "0.020em",
        color: "var(--text-disabled-300)",
        textTransform: "uppercase",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-faded-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-faded-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-faded-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-information-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(113,119,132)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(113,119,132)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-information-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-information-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-error-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,145,71)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(255,145,71)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-error-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-error-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-success-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(251,55,72)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-success-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-success-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--state-away-base)",
        }} />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(31,193,107)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(31,193,107)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--state-away-lighter)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--state-away-base)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 8px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "var(--icon-disabled-300)",
        }} />
      </div>
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
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 8px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(198,202,210)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
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
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 8px",
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
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "rgb(198,202,210)",
        }}>{props.pickIcon ?? <FlashlightFill />}</div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 2px 2px 2px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 16,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editNumber}</span>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=🩶 gray|size=sm|number=off|disabled=off": __body0,
    // figma: 🧩 Type=• With Dot, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=🩶 gray|size=sm|number=off|disabled=off": __body1,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=🩶 gray|size=sm|number=off|disabled=off": __body2,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=🩶 gray|size=sm|number=off|disabled=off": __body3,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=🩶 gray|size=sm|number=on|disabled=off": __body4,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💙 Blue, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💙 blue|size=sm|number=off|disabled=off": __body5,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💙 Blue, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💙 blue|size=sm|number=off|disabled=off": __body6,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💙 Blue, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💙 blue|size=sm|number=off|disabled=off": __body7,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💙 Blue, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💙 blue|size=sm|number=off|disabled=off": __body8,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💙 Blue, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💙 blue|size=sm|number=on|disabled=off": __body9,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💔 Red, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💔 red|size=sm|number=off|disabled=off": __body10,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💔 Red, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💔 red|size=sm|number=off|disabled=off": __body11,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💔 Red, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💔 red|size=sm|number=off|disabled=off": __body12,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💔 Red, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💔 red|size=sm|number=off|disabled=off": __body13,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💔 Red, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💔 red|size=sm|number=on|disabled=off": __body14,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💚 Green, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💚 green|size=sm|number=off|disabled=off": __body15,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💚 Green, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💚 green|size=sm|number=off|disabled=off": __body16,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💚 Green, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💚 green|size=sm|number=off|disabled=off": __body17,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💚 Green, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💚 green|size=sm|number=off|disabled=off": __body18,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💚 Green, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💚 green|size=sm|number=on|disabled=off": __body19,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💛 Yellow, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💛 yellow|size=sm|number=off|disabled=off": __body20,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💛 Yellow, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💛 yellow|size=sm|number=off|disabled=off": __body21,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💛 Yellow, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💛 yellow|size=sm|number=off|disabled=off": __body22,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💛 Yellow, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💛 yellow|size=sm|number=off|disabled=off": __body23,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💛 Yellow, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💛 yellow|size=sm|number=on|disabled=off": __body24,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=On
    "type=📂 basic|color=🩶 gray|size=sm|number=off|disabled=on": __body25,
    // figma: 🧩 Type=• With Dot, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=On
    "type=• with dot|color=🩶 gray|size=sm|number=off|disabled=on": __body26,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=On
    "type=⬅️ left icon|color=🩶 gray|size=sm|number=off|disabled=on": __body27,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=Off, 🚫 Disabled=On
    "type=➡️ right icon|color=🩶 gray|size=sm|number=off|disabled=on": __body28,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Small (16), ⏺️ Number=On, 🚫 Disabled=On
    "type=📂 basic|color=🩶 gray|size=sm|number=on|disabled=on": __body29,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=🩶 gray|size=md|number=off|disabled=off": __body0,
    // figma: 🧩 Type=• With Dot, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=🩶 gray|size=md|number=off|disabled=off": __body30,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=🩶 gray|size=md|number=off|disabled=off": __body31,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=🩶 gray|size=md|number=off|disabled=off": __body32,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=🩶 gray|size=md|number=on|disabled=off": __body33,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💙 Blue, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💙 blue|size=md|number=off|disabled=off": __body5,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💙 Blue, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💙 blue|size=md|number=off|disabled=off": __body34,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💙 Blue, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💙 blue|size=md|number=off|disabled=off": __body35,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💙 Blue, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💙 blue|size=md|number=off|disabled=off": __body36,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💙 Blue, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💙 blue|size=md|number=on|disabled=off": __body37,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💔 Red, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💔 red|size=md|number=off|disabled=off": __body10,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💔 Red, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💔 red|size=md|number=off|disabled=off": __body38,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💔 Red, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💔 red|size=md|number=off|disabled=off": __body39,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💔 Red, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💔 red|size=md|number=off|disabled=off": __body40,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💔 Red, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💔 red|size=md|number=on|disabled=off": __body41,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💚 Green, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💚 green|size=md|number=off|disabled=off": __body15,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💚 Green, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💚 green|size=md|number=off|disabled=off": __body42,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💚 Green, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💚 green|size=md|number=off|disabled=off": __body43,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💚 Green, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💚 green|size=md|number=off|disabled=off": __body44,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💚 Green, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💚 green|size=md|number=on|disabled=off": __body45,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💛 Yellow, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=📂 basic|color=💛 yellow|size=md|number=off|disabled=off": __body20,
    // figma: 🧩 Type=• With Dot, 🎨 Color=💛 Yellow, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=• with dot|color=💛 yellow|size=md|number=off|disabled=off": __body46,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=💛 Yellow, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=⬅️ left icon|color=💛 yellow|size=md|number=off|disabled=off": __body47,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=💛 Yellow, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=Off
    "type=➡️ right icon|color=💛 yellow|size=md|number=off|disabled=off": __body48,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=💛 Yellow, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=Off
    "type=📂 basic|color=💛 yellow|size=md|number=on|disabled=off": __body49,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=On
    "type=📂 basic|color=🩶 gray|size=md|number=off|disabled=on": __body50,
    // figma: 🧩 Type=• With Dot, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=On
    "type=• with dot|color=🩶 gray|size=md|number=off|disabled=on": __body51,
    // figma: 🧩 Type=⬅️ Left Icon, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=On
    "type=⬅️ left icon|color=🩶 gray|size=md|number=off|disabled=on": __body52,
    // figma: 🧩 Type=➡️ Right Icon, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=Off, 🚫 Disabled=On
    "type=➡️ right icon|color=🩶 gray|size=md|number=off|disabled=on": __body53,
    // figma: 🧩 Type=📂 Basic, 🎨 Color=🩶 Gray, 📏 Size=Medium (20), ⏺️ Number=On, 🚫 Disabled=On
    "type=📂 basic|color=🩶 gray|size=md|number=on|disabled=on": __body54,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _Badge11;
