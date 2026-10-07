import { _CompactButton11 as CompactButton11 } from './CompactButton11.jsx';
import { _GlobalLine as GlobalLine } from './GlobalLine.jsx';

// figma node: 2604:269 Tooltip [1.1] (48 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "darkMode=" + __venc(p.darkMode);

export function _Tooltip11(_p = {}) {
  const props = { ..._p, tail: _p.tail ?? true, dismissIcon: _p.dismissIcon ?? true, editDescription: _p.editDescription ?? "Insert tooltip description here. It would look much better as three lines of text.", type: _p.type ?? "↖️ top left", size: _p.size ?? "2x-small", darkMode: _p.darkMode ?? "off", editText: _p.editText ?? "Insert Tooltip", leftIcon: _p.leftIcon ?? true };
  const __body0 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body1 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 280,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body5 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
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
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3.5,
            top: -2,
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body6 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body7 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body10 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body11 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body12 = () => (
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
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: -3,
            top: -2,
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body15 = () => (
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
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body16 = () => (
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
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body17 = () => (
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
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 16px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 12px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body20 = () => (
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
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-2.500,0)",
            transformOrigin: "0 0",
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body21 = () => (
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
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body22 = () => (
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
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body25 = () => (
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
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body26 = () => (
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
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body27 = () => (
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
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 16px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 12px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,-3,0)",
            transformOrigin: "0 0",
            width: 18,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        width: 4,
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
          transform: "matrix(0,1,1,0,0,6)",
          transformOrigin: "0 0",
          width: 8,
          height: 4,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,11,-2)",
            transformOrigin: "0 0",
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
      {props.tail && (
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
          transform: "matrix(0,1,1,0,0,10)",
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
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
      {props.tail && (
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
          transform: "matrix(0,1,1,0,0,44)",
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
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
      {props.tail && (
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
          transform: "matrix(0,1,1,0,0,68)",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
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
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
      {props.tail && (
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
          transform: "matrix(0,1,1,0,0,10)",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
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
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        width: 4,
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
          transform: "matrix(0,1,1,0,0,6)",
          transformOrigin: "0 0",
          width: 8,
          height: 4,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,8,0)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            <path d={"M 8 4 L 8 5 L 10.414 5 L 8.707 3.293 L 8 4 Z M 0 4 L -0.707 3.293 L -2.414 5 L 0 5 L 0 4 Z M 4.354 1.768 L 7.293 4.707 L 8.707 3.293 L 5.768 0.354 L 4.354 1.768 Z M 8 3 L 0 3 L 0 5 L 8 5 L 8 3 Z M 0.707 4.707 L 3.646 1.768 L 2.232 0.354 L -0.707 3.293 L 0.707 4.707 Z M 5.768 0.354 C 4.791 -0.623 3.209 -0.623 2.232 0.354 L 3.646 1.768 C 3.842 1.573 4.158 1.573 4.354 1.768 L 5.768 0.354 Z"} fill="rgb(235,235,235)" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,11,4)",
            transformOrigin: "0 0",
            width: 14,
            height: 2,
            borderRadius: 1.5,
            backgroundColor: "var(--bg-white-0)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      {props.tail && (
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
          transform: "matrix(0,1,-1,0,6,10)",
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
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-white-0)",
      ...props.style,
    }}>
      {props.tail && (
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
          transform: "matrix(0,1,-1,0,6,44)",
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
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "0 0 0 1px var(--stroke-soft-200), 0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
        )}
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
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
          transform: "matrix(0,1,-1,0,6,68)",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
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
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 12,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        padding: "12px 12px 12px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
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
          width: 180,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editText}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.editDescription}</span>
        </div>
        {props.dismissIcon && (
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 6,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "2px 2px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={9.546} height={9.546} viewBox="0 0 9.546 9.546" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 5.227,
              width: 9.546,
              height: 9.546,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 4.773 3.713 L 8.486 0 L 9.546 1.061 L 5.833 4.773 L 9.546 8.486 L 8.486 9.546 L 4.773 5.833 L 1.061 9.546 L 0 8.486 L 3.713 4.773 L 0 1.061 L 1.061 0 L 4.773 3.713 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        )}
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
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
          transform: "matrix(0,1,-1,0,6,10)",
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
            <path d={"M 4.939 1.061 C 5.525 0.475 6.475 0.475 7.061 1.061 L 12 6 L 0 6 L 4.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
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
            backgroundColor: "var(--bg-strong-950)",
          }} />
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "4px 10px 4px 10px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
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
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,-1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 8px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
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
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0px 8px 0px 0px",
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 8,
          height: 4,
          flexShrink: 0,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
      {props.tail && (
      <div style={{
        position: "relative",
        width: 4,
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
          transform: "matrix(0,1,1,0,0,6)",
          transformOrigin: "0 0",
          width: 8,
          height: 4,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,-1,8,4)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      isolation: "isolate",
      position: "relative",
      color: "var(--bg-strong-950)",
      ...props.style,
    }}>
      {props.tail && (
      <div style={{
        position: "relative",
        width: 4,
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
          transform: "matrix(0,1,1,0,0,6)",
          transformOrigin: "0 0",
          width: 8,
          height: 4,
        }}>
          <svg width={8} height={4} viewBox="0 0 8 4" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,8,0)",
            transformOrigin: "0 0",
            width: 8,
            height: 4,
          }}>
            <path d={"M 2.939 1.061 C 3.525 0.475 4.475 0.475 5.061 1.061 L 8 4 L 0 4 L 2.939 1.061 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        borderRadius: 4,
        backgroundColor: "var(--bg-strong-950)",
        boxShadow: "0px 12px 24px 0px rgba(14,18,27,0.06), 0px 1px 2px 0px rgba(14,18,27,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        padding: "2px 6px 2px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        zIndex: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=↖️ top left|size=2x-small|darkMode=off": __body0,
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=↖️ top left|size=xs|darkMode=off": __body1,
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=↖️ top left|size=lg|darkMode=off": __body2,
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=Large, 🌙 Dark Mode=On
    "type=↖️ top left|size=lg|darkMode=on": __body3,
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=↖️ top left|size=xs|darkMode=on": __body4,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=🔼 top center|size=2x-small|darkMode=off": __body5,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=🔼 top center|size=xs|darkMode=off": __body6,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=🔼 top center|size=lg|darkMode=off": __body7,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=Large, 🌙 Dark Mode=On
    "type=🔼 top center|size=lg|darkMode=on": __body8,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=🔼 top center|size=xs|darkMode=on": __body9,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=↗️ top right|size=2x-small|darkMode=off": __body10,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=↗️ top right|size=xs|darkMode=off": __body11,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=↗️ top right|size=lg|darkMode=off": __body12,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=Large, 🌙 Dark Mode=On
    "type=↗️ top right|size=lg|darkMode=on": __body13,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=↗️ top right|size=xs|darkMode=on": __body14,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=↙️ bottom left|size=2x-small|darkMode=off": __body15,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=↙️ bottom left|size=xs|darkMode=off": __body16,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=↙️ bottom left|size=lg|darkMode=off": __body17,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=Large, 🌙 Dark Mode=On
    "type=↙️ bottom left|size=lg|darkMode=on": __body18,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=↙️ bottom left|size=xs|darkMode=on": __body19,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=🔽 bottom center|size=2x-small|darkMode=off": __body20,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=🔽 bottom center|size=xs|darkMode=off": __body21,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=🔽 bottom center|size=lg|darkMode=off": __body22,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=Large, 🌙 Dark Mode=On
    "type=🔽 bottom center|size=lg|darkMode=on": __body23,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=🔽 bottom center|size=xs|darkMode=on": __body24,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=↘️ bottom right|size=2x-small|darkMode=off": __body25,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=↘️ bottom right|size=xs|darkMode=off": __body26,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=↘️ bottom right|size=lg|darkMode=off": __body27,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=Large, 🌙 Dark Mode=On
    "type=↘️ bottom right|size=lg|darkMode=on": __body28,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=↘️ bottom right|size=xs|darkMode=on": __body29,
    // figma: 🧩 Type=➡️ Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=➡️ right|size=2x-small|darkMode=off": __body30,
    // figma: 🧩 Type=➡️ Right, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=➡️ right|size=xs|darkMode=off": __body31,
    // figma: 🧩 Type=➡️ Right, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=➡️ right|size=lg|darkMode=off": __body32,
    // figma: 🧩 Type=➡️ Right, 📏 Size=Large, 🌙 Dark Mode=On
    "type=➡️ right|size=lg|darkMode=on": __body33,
    // figma: 🧩 Type=➡️ Right, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=➡️ right|size=xs|darkMode=on": __body34,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=Off
    "type=⬅️ left|size=2x-small|darkMode=off": __body35,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=X-Small (34), 🌙 Dark Mode=Off
    "type=⬅️ left|size=xs|darkMode=off": __body36,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=Large, 🌙 Dark Mode=Off
    "type=⬅️ left|size=lg|darkMode=off": __body37,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=Large, 🌙 Dark Mode=On
    "type=⬅️ left|size=lg|darkMode=on": __body38,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=X-Small (34), 🌙 Dark Mode=On
    "type=⬅️ left|size=xs|darkMode=on": __body39,
    // figma: 🧩 Type=↖️ Top Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=↖️ top left|size=2x-small|darkMode=on": __body40,
    // figma: 🧩 Type=🔼 Top Center, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=🔼 top center|size=2x-small|darkMode=on": __body41,
    // figma: 🧩 Type=↗️ Top Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=↗️ top right|size=2x-small|darkMode=on": __body42,
    // figma: 🧩 Type=↙️ Bottom Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=↙️ bottom left|size=2x-small|darkMode=on": __body43,
    // figma: 🧩 Type=🔽 Bottom Center, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=🔽 bottom center|size=2x-small|darkMode=on": __body44,
    // figma: 🧩 Type=↘️ Bottom Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=↘️ bottom right|size=2x-small|darkMode=on": __body45,
    // figma: 🧩 Type=➡️ Right, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=➡️ right|size=2x-small|darkMode=on": __body46,
    // figma: 🧩 Type=⬅️ Left, 📏 Size=2X-Small (24), 🌙 Dark Mode=On
    "type=⬅️ left|size=2x-small|darkMode=on": __body47,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _Tooltip11;
