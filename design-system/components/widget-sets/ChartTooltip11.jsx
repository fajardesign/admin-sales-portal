// figma node: 164968:62463 Chart Tooltip  [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "alignment=" + __venc(p.alignment);

export function ChartTooltip11(_p = {}) {
  const props = { ..._p, editText: _p.editText ?? "3,484", alignment: _p.alignment ?? "right" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "10px 12px 10px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>{props.text1 ?? "Thu, Jan 8"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "var(--state-success-base)",
            flexShrink: 0,
          }}>{"+7.1%"}<span style={{ color: "rgb(92,92,92)" }}>{" vs prev"}</span></span>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,1,0,0,26)",
          transformOrigin: "0 0",
          width: 12,
          height: 6,
        }}>
          <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,12,6)",
            transformOrigin: "0 0",
            width: 12,
            height: 6,
          }}>
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 12 6 L 12 7 L 14.414 7 L 12.707 5.293 L 12 6 Z M 0 6 L -0.707 5.293 L -2.414 7 L 0 7 L 0 6 Z M 6.354 1.768 L 11.293 6.707 L 12.707 5.293 L 7.768 0.354 L 6.354 1.768 Z M 12 5 L 0 5 L 0 7 L 12 7 L 12 5 Z M 0.707 6.707 L 5.646 1.768 L 4.232 0.354 L -0.707 5.293 L 0.707 6.707 Z M 7.768 0.354 C 6.791 -0.623 5.209 -0.623 4.232 0.354 L 5.646 1.768 C 5.842 1.573 6.158 1.573 6.354 1.768 L 7.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,15,-2)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,6,26)",
          transformOrigin: "0 0",
          width: 12,
          height: 6,
        }}>
          <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,12,6)",
            transformOrigin: "0 0",
            width: 12,
            height: 6,
          }}>
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 12 6 L 12 7 L 14.414 7 L 12.707 5.293 L 12 6 Z M 0 6 L -0.707 5.293 L -2.414 7 L 0 7 L 0 6 Z M 6.354 1.768 L 11.293 6.707 L 12.707 5.293 L 7.768 0.354 L 6.354 1.768 Z M 12 5 L 0 5 L 0 7 L 12 7 L 12 5 Z M 0.707 6.707 L 5.646 1.768 L 4.232 0.354 L -0.707 5.293 L 0.707 6.707 Z M 7.768 0.354 C 6.791 -0.623 5.209 -0.623 4.232 0.354 L 5.646 1.768 C 5.842 1.573 6.158 1.573 6.354 1.768 L 7.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,15,-2)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "10px 12px 10px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>{props.text1 ?? "Thu, Jan 8"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "var(--state-success-base)",
            flexShrink: 0,
          }}>{"+7.1%"}<span style={{ color: "rgb(92,92,92)" }}>{" vs prev"}</span></span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "10px 12px 10px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>{props.text1 ?? "Thu, Jan 8"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "var(--state-success-base)",
            flexShrink: 0,
          }}>{"+7.1%"}<span style={{ color: "rgb(92,92,92)" }}>{" vs prev"}</span></span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 12,
          height: 6,
          flexShrink: 0,
        }}>
          <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,12,6)",
            transformOrigin: "0 0",
            width: 12,
            height: 6,
          }}>
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 12 6 L 12 7 L 14.414 7 L 12.707 5.293 L 12 6 Z M 0 6 L -0.707 5.293 L -2.414 7 L 0 7 L 0 6 Z M 6.354 1.768 L 11.293 6.707 L 12.707 5.293 L 7.768 0.354 L 6.354 1.768 Z M 12 5 L 0 5 L 0 7 L 12 7 L 12 5 Z M 0.707 6.707 L 5.646 1.768 L 4.232 0.354 L -0.707 5.293 L 0.707 6.707 Z M 7.768 0.354 C 6.791 -0.623 5.209 -0.623 4.232 0.354 L 5.646 1.768 C 5.842 1.573 6.158 1.573 6.354 1.768 L 7.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,15,-2)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 12,
          height: 6,
          flexShrink: 0,
        }}>
          <svg width={12} height={6} viewBox="0 0 12 6" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,12,6)",
            transformOrigin: "0 0",
            width: 12,
            height: 6,
          }}>
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 12 6 L 12 7 L 14.414 7 L 12.707 5.293 L 12 6 Z M 0 6 L -0.707 5.293 L -2.414 7 L 0 7 L 0 6 Z M 6.354 1.768 L 11.293 6.707 L 12.707 5.293 L 7.768 0.354 L 6.354 1.768 Z M 12 5 L 0 5 L 0 7 L 12 7 L 12 5 Z M 0.707 6.707 L 5.646 1.768 L 4.232 0.354 L -0.707 5.293 L 0.707 6.707 Z M 7.768 0.354 C 6.791 -0.623 5.209 -0.623 4.232 0.354 L 5.646 1.768 C 5.842 1.573 6.158 1.573 6.354 1.768 L 7.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,15,-2)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "10px 12px 10px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>{props.text1 ?? "Thu, Jan 8"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "pre-wrap",
            lineHeight: "16px",
            color: "var(--state-success-base)",
            flexShrink: 0,
          }}>{"+7.1%"}<span style={{ color: "rgb(92,92,92)" }}>{" vs prev"}</span></span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Alignment=Right
    "alignment=right": __body0,
    // figma: Alignment=Left
    "alignment=left": __body1,
    // figma: Alignment=Bottom
    "alignment=bottom": __body2,
    // figma: Alignment=Top
    "alignment=top": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ChartTooltip11;
