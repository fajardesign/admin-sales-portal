import { TimeTrackerDropdownTimeTracker } from './TimeTrackerDropdownTimeTracker.jsx';

// figma node: 3849:32209 Timer [Time Tracker] [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function TimerTimeTracker11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <TimeTrackerDropdownTimeTracker
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"default"}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 11,
            textAlign: "center",
            lineHeight: "12px",
            letterSpacing: "0.020em",
            color: "var(--text-soft-400)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Awaiting"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 40,
            textAlign: "center",
            lineHeight: "48px",
            letterSpacing: "-0.010em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "00:00:00"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 160,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={8.631} height={9.944} viewBox="0 0 8.631 9.944" fill="none" style={{
                position: "absolute",
                left: 6.25,
                top: 5.028,
                width: 8.631,
                height: 9.944,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 0.564 0.051 L 8.445 4.649 C 8.501 4.682 8.548 4.729 8.581 4.786 C 8.613 4.842 8.631 4.907 8.631 4.972 C 8.631 5.038 8.613 5.102 8.581 5.159 C 8.548 5.216 8.501 5.263 8.445 5.296 L 0.564 9.893 C 0.507 9.927 0.442 9.944 0.376 9.944 C 0.31 9.945 0.245 9.927 0.188 9.894 C 0.13 9.861 0.083 9.814 0.05 9.756 C 0.017 9.699 0 9.634 0 9.568 L 0 0.375 C 0 0.309 0.017 0.244 0.05 0.187 C 0.083 0.13 0.131 0.083 0.188 0.05 C 0.245 0.017 0.31 0 0.376 0 C 0.442 0 0.507 0.018 0.564 0.051 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
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
            }}>Start Time Tracker</span>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
                position: "absolute",
                left: 7.083,
                top: 5.226,
                width: 5.833,
                height: 9.546,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--stroke-soft-200)",
      ...props.style,
    }}>
      <TimeTrackerDropdownTimeTracker
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        state={"active"}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 16px 16px 16px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 11,
            textAlign: "center",
            lineHeight: "12px",
            letterSpacing: "0.020em",
            color: "var(--text-soft-400)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "ongoıng"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 40,
            textAlign: "center",
            lineHeight: "48px",
            letterSpacing: "-0.010em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "02:44:22"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 70,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 5.25 5.25 L 5.25 9.75 L 6.75 9.75 L 6.75 5.25 L 5.25 5.25 Z M 8.25 5.25 L 8.25 9.75 L 9.75 9.75 L 9.75 5.25 L 8.25 5.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Pause</span>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
                position: "absolute",
                left: 7.083,
                top: 5.226,
                width: 5.833,
                height: 9.546,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <svg width={12} height={1} viewBox="0 -0.500 12 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,149.500,6)",
            transformOrigin: "0 0",
            width: 12,
            height: 1,
          }}>
            <path d={"M 0 0 L 12 0 L 12 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "relative",
            width: 59,
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(71,108,255)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 5.25 5.25 L 5.25 9.75 L 9.75 9.75 L 9.75 5.25 L 5.25 5.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--state-error-base)",
              flexShrink: 0,
            }}>Stop</span>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
                position: "absolute",
                left: 7.083,
                top: 5.226,
                width: 5.833,
                height: 9.546,
                color: "rgb(71,108,255)",
              }}>
                <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Default
    "type=default": __body0,
    // figma: 🧩 Type=Ongoing
    "type=ongoing": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TimerTimeTracker11;
