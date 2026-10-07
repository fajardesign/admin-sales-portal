import { _EmptyStatesHRManagement1 as EmptyStatesHRManagement1 } from './EmptyStatesHRManagement1.jsx';
import { ScheduleCardsSchedule11 } from './ScheduleCardsSchedule11.jsx';

// figma node: 3710:12493 Schedule Detail Tabs [Schedule - Menu] [1.1] (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant) + '|' + "emptyState=" + __venc(p.emptyState);

export function ScheduleDetailTabsScheduleMenu(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "meetings", emptyState: _p.emptyState ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Events</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"meetings"}
          options={"01 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"meetings"}
          options={"02 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"meetings"}
          options={"03 options"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Events</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"events"}
          options={"01 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"events"}
          options={"02 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"events"}
          options={"03 options"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Events</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"holiday"}
          options={"01 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"holiday"}
          options={"02 options"}
        />
        <ScheduleCardsSchedule11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"holiday"}
          options={"03 options"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Events</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 492,
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 108,
              height: 108,
              flexShrink: 0,
            }}>
            <EmptyStatesHRManagement1
              style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
              type={"📅 schedule meetings"}
            />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "No records of meetings yet.\nPlease check back later."}</span>
          <div style={{
            position: "relative",
            width: 103,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "6px 6px 6px 6px",
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
              <svg width={10.500} height={10.500} viewBox="0 0 10.500 10.500" fill="none" style={{
                position: "absolute",
                left: 4.75,
                top: 4.75,
                width: 10.5,
                height: 10.5,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 4.5 4.5 L 4.5 0 L 6 0 L 6 4.5 L 10.5 4.5 L 10.5 6 L 6 6 L 6 10.5 L 4.5 10.5 L 4.5 6 L 0 6 L 0 4.5 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 4px 0px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Request</span>
            </div>
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
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Events</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 492,
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 108,
              height: 108,
              flexShrink: 0,
            }}>
            <EmptyStatesHRManagement1
              style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
              type={"📅 schedule events"}
            />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "No records of events yet.\nPlease check back later."}</span>
          <div style={{
            position: "relative",
            width: 103,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "6px 6px 6px 6px",
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
              <svg width={10.500} height={10.500} viewBox="0 0 10.500 10.500" fill="none" style={{
                position: "absolute",
                left: 4.75,
                top: 4.75,
                width: 10.5,
                height: 10.5,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 4.5 4.5 L 4.5 0 L 6 0 L 6 4.5 L 10.5 4.5 L 10.5 6 L 6 6 L 6 10.5 L 4.5 10.5 L 4.5 6 L 0 6 L 0 4.5 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 4px 0px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Request</span>
            </div>
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
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--bg-white-0)",
        borderTop: "1px solid var(--stroke-soft-200)",
        borderRight: "1px solid var(--stroke-soft-200)",
        borderBottom: "1px solid var(--stroke-soft-200)",
        borderLeft: "1px solid var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "14px 16px 14px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={16.500} height={15.375} viewBox="0 0 16.500 15.375" fill="none" style={{
              position: "absolute",
              left: 1.75,
              top: 2.5,
              width: 16.5,
              height: 15.375,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 9.75 15.375 L 7.65 12.75 L 3.75 12.75 C 3.551 12.75 3.36 12.671 3.22 12.53 C 3.079 12.39 3 12.199 3 12 L 3 3.827 C 3 3.628 3.079 3.438 3.22 3.297 C 3.36 3.156 3.551 3.077 3.75 3.077 L 15.75 3.077 C 15.949 3.077 16.14 3.156 16.28 3.297 C 16.421 3.438 16.5 3.628 16.5 3.827 L 16.5 12 C 16.5 12.199 16.421 12.39 16.28 12.53 C 16.14 12.671 15.949 12.75 15.75 12.75 L 11.85 12.75 L 9.75 15.375 Z M 11.129 11.25 L 15 11.25 L 15 4.577 L 4.5 4.577 L 4.5 11.25 L 8.371 11.25 L 9.75 12.974 L 11.129 11.25 Z M 0.75 0 L 13.5 0 L 13.5 1.5 L 1.5 1.5 L 1.5 9.75 L 0 9.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Meetings</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
              top: 1.75,
              width: 15,
              height: 15,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 Z M 13.5 6 L 13.5 3 L 11.25 3 L 11.25 4.5 L 9.75 4.5 L 9.75 3 L 5.25 3 L 5.25 4.5 L 3.75 4.5 L 3.75 3 L 1.5 3 L 1.5 6 L 13.5 6 Z M 13.5 7.5 L 1.5 7.5 L 1.5 13.5 L 13.5 13.5 L 13.5 7.5 Z M 3 9 L 6.75 9 L 6.75 12 L 3 12 L 3 9 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Events</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={13.500} height={15.750} viewBox="0 0 13.500 15.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.5,
              width: 13.5,
              height: 15.75,
              color: "rgb(82,88,102)",
            }}>
              <path d={"M 11.25 15.75 L 9.75 15.75 L 9.75 15 L 3.75 15 L 3.75 15.75 L 2.25 15.75 L 2.25 15 L 1.5 15 C 0.671 15 0 14.329 0 13.5 L 0 3.75 C 0 2.921 0.671 2.25 1.5 2.25 L 3.75 2.25 L 3.75 0.75 C 3.75 0.336 4.086 0 4.5 0 L 9 0 C 9.414 0 9.75 0.336 9.75 0.75 L 9.75 2.25 L 12 2.25 C 12.829 2.25 13.5 2.921 13.5 3.75 L 13.5 13.5 C 13.5 14.329 12.829 15 12 15 L 11.25 15 L 11.25 15.75 Z M 12 3.75 L 1.5 3.75 L 1.5 13.5 L 12 13.5 L 12 3.75 Z M 5.25 5.25 L 5.25 12 L 3.75 12 L 3.75 5.25 L 5.25 5.25 Z M 9.75 5.25 L 9.75 12 L 8.25 12 L 8.25 5.25 L 9.75 5.25 Z M 8.25 1.5 L 5.25 1.5 L 5.25 2.25 L 8.25 2.25 L 8.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Holiday</span>
          </div>
          <svg width={104} height={2} viewBox="0 -1 104 2" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 38,
            width: 104,
            height: 2,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 -1 L 0 0 L 104 0 L 104 -1 L 104 -2 L 0 -2 L 0 -1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 492,
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 108,
              height: 108,
              flexShrink: 0,
            }}>
            <EmptyStatesHRManagement1
              style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
              type={"📅 schedule holiday"}
            />
          </div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "No records of holidays yet.\nPlease check back later."}</span>
          <div style={{
            position: "relative",
            width: 103,
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "6px 6px 6px 6px",
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
              <svg width={10.500} height={10.500} viewBox="0 0 10.500 10.500" fill="none" style={{
                position: "absolute",
                left: 4.75,
                top: 4.75,
                width: 10.5,
                height: 10.5,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 4.5 4.5 L 4.5 0 L 6 0 L 6 4.5 L 10.5 4.5 L 10.5 6 L 6 6 L 6 10.5 L 4.5 10.5 L 4.5 6 L 0 6 L 0 4.5 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              padding: "0px 4px 0px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Request</span>
            </div>
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
                color: "rgb(153,160,174)",
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
    // figma: 💫 Variant=Meetings, ⚪️ Empty State=Off
    "variant=meetings|emptyState=off": __body0,
    // figma: 💫 Variant=Events, ⚪️ Empty State=Off
    "variant=events|emptyState=off": __body1,
    // figma: 💫 Variant=Holiday, ⚪️ Empty State=Off
    "variant=holiday|emptyState=off": __body2,
    // figma: 💫 Variant=Meetings, ⚪️ Empty State=On
    "variant=meetings|emptyState=on": __body3,
    // figma: 💫 Variant=Events, ⚪️ Empty State=On
    "variant=events|emptyState=on": __body4,
    // figma: 💫 Variant=Holiday, ⚪️ Empty State=On
    "variant=holiday|emptyState=on": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ScheduleDetailTabsScheduleMenu;

/* Figma family alias */
export const ScheduleDetailTabsScheduleMenu11 = ScheduleDetailTabsScheduleMenu;
