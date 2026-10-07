import { _AmarBankWithoutTitle as AmarBankWithoutTitle } from './AmarBankWithoutTitle.jsx';
import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { ConnectionStatusTopbar10 } from './ConnectionStatusTopbar10.jsx';
import { _TextInput11 as TextInput11 } from './TextInput11.jsx';
import { TopbarItemsTopbar10 } from './TopbarItemsTopbar10.jsx';
import { UserProfileTopbar10 } from './UserProfileTopbar10.jsx';

// figma node: 3814:25274 Topbar [Navigation] [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function TopbarNavigation11(_p = {}) {
  const props = { ..._p, quick: _p.quick ?? true, search: _p.search ?? true, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1440,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "20px 44px 20px 44px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <AmarBankWithoutTitle color={true} white={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <TopbarItemsTopbar10
            style={{ position: "relative", width: 107, flexShrink: 0 }}
            leftIcon={false}
            state={"active"}
          />
          <div style={{
            position: "relative",
            width: 86,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
              <svg width={15} height={13.500} viewBox="0 0 15 13.500" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 3.25,
                width: 15,
                height: 13.5,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 0.75 0 L 14.25 0 C 14.449 0 14.64 0.079 14.78 0.22 C 14.921 0.36 15 0.551 15 0.75 L 15 12.75 C 15 12.949 14.921 13.14 14.78 13.28 C 14.64 13.421 14.449 13.5 14.25 13.5 L 0.75 13.5 C 0.551 13.5 0.36 13.421 0.22 13.28 C 0.079 13.14 0 12.949 0 12.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z M 13.5 6 L 1.5 6 L 1.5 12 L 13.5 12 L 13.5 6 Z M 13.5 4.5 L 13.5 1.5 L 1.5 1.5 L 1.5 4.5 L 13.5 4.5 Z M 9 9 L 12 9 L 12 10.5 L 9 10.5 L 9 9 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>My Card</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 85,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
              <svg width={13.500} height={14.925} viewBox="0 0 13.500 14.925" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.537,
                width: 13.5,
                height: 14.925,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 9.787 7.5 L 13.5 11.212 L 9.787 14.925 L 8.727 13.865 L 10.629 11.962 L 0.75 11.962 L 0.75 10.462 L 10.629 10.462 L 8.727 8.56 L 9.787 7.5 Z M 3.712 0 L 4.773 1.061 L 2.871 2.963 L 12.75 2.963 L 12.75 4.462 L 2.871 4.462 L 4.773 6.365 L 3.712 7.425 L 0 3.712 L 3.712 0 L 3.712 0 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Transfer</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 119,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 L 1.5 7.5 C 1.5 10.814 4.186 13.5 7.5 13.5 C 10.814 13.5 13.5 10.814 13.5 7.5 C 13.5 4.186 10.814 1.5 7.5 1.5 C 5.438 1.5 3.618 2.54 2.539 4.125 L 4.5 4.125 L 4.5 5.625 L 0 5.625 L 0 1.125 L 1.5 1.125 L 1.5 3 C 2.868 1.178 5.047 0 7.5 0 Z M 8.25 3.75 L 8.25 7.189 L 10.682 9.621 L 9.621 10.682 L 6.75 7.81 L 6.75 3.75 L 8.25 3.75 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Transactions</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 98,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
              <svg width={13.500} height={15} viewBox="0 0 13.500 15" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.5,
                width: 13.5,
                height: 15,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 12.75 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 12.75 0 C 12.949 0 13.14 0.079 13.28 0.22 C 13.421 0.36 13.5 0.551 13.5 0.75 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 Z M 12 13.5 L 12 1.5 L 1.5 1.5 L 1.5 13.5 L 12 13.5 Z M 3.75 5.25 L 9.75 5.25 L 9.75 6.75 L 3.75 6.75 L 3.75 5.25 Z M 3.75 8.25 L 9.75 8.25 L 9.75 9.75 L 3.75 9.75 L 3.75 8.25 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Payments</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 97,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 12px",
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
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 7.5 13.5 C 9.091 13.5 10.617 12.868 11.743 11.743 C 12.868 10.617 13.5 9.091 13.5 7.5 C 13.5 5.909 12.868 4.383 11.743 3.257 C 10.617 2.132 9.091 1.5 7.5 1.5 C 5.909 1.5 4.383 2.132 3.257 3.257 C 2.132 4.383 1.5 5.909 1.5 7.5 C 1.5 9.091 2.132 10.617 3.257 11.743 C 4.383 12.868 5.909 13.5 7.5 13.5 L 7.5 13.5 Z M 3.75 8.25 L 10.5 8.25 L 10.5 9.75 L 7.5 9.75 L 7.5 12 L 3.75 8.25 Z M 7.5 5.25 L 7.5 3 L 11.25 6.75 L 4.5 6.75 L 4.5 5.25 L 7.5 5.25 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Exchange</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 98,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 8px 8px 12px",
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
              <svg width={14.625} height={14.250} viewBox="0 0 14.625 14.250" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.875,
                width: 14.625,
                height: 14.25,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 3.375 6.75 C 2.932 6.75 2.493 6.663 2.083 6.493 C 1.674 6.323 1.302 6.075 0.989 5.761 C 0.675 5.448 0.427 5.076 0.257 4.667 C 0.087 4.257 0 3.818 0 3.375 C 0 2.932 0.087 2.493 0.257 2.083 C 0.427 1.674 0.675 1.302 0.989 0.989 C 1.302 0.675 1.674 0.427 2.083 0.257 C 2.493 0.087 2.932 0 3.375 0 C 4.27 0 5.129 0.356 5.761 0.989 C 6.394 1.621 6.75 2.48 6.75 3.375 C 6.75 4.27 6.394 5.129 5.761 5.761 C 5.129 6.394 4.27 6.75 3.375 6.75 L 3.375 6.75 Z M 3.75 14.25 C 2.855 14.25 1.996 13.894 1.364 13.261 C 0.731 12.629 0.375 11.77 0.375 10.875 C 0.375 9.98 0.731 9.121 1.364 8.489 C 1.996 7.856 2.855 7.5 3.75 7.5 C 4.645 7.5 5.504 7.856 6.136 8.489 C 6.769 9.121 7.125 9.98 7.125 10.875 C 7.125 11.77 6.769 12.629 6.136 13.261 C 5.504 13.894 4.645 14.25 3.75 14.25 L 3.75 14.25 Z M 11.25 6.75 C 10.807 6.75 10.368 6.663 9.958 6.493 C 9.549 6.323 9.177 6.075 8.864 5.761 C 8.55 5.448 8.302 5.076 8.132 4.667 C 7.962 4.257 7.875 3.818 7.875 3.375 C 7.875 2.932 7.962 2.493 8.132 2.083 C 8.302 1.674 8.55 1.302 8.864 0.989 C 9.177 0.675 9.549 0.427 9.958 0.257 C 10.368 0.087 10.807 0 11.25 0 C 12.145 0 13.004 0.356 13.636 0.989 C 14.269 1.621 14.625 2.48 14.625 3.375 C 14.625 4.27 14.269 5.129 13.636 5.761 C 13.004 6.394 12.145 6.75 11.25 6.75 L 11.25 6.75 Z M 11.25 14.25 C 10.355 14.25 9.496 13.894 8.864 13.261 C 8.231 12.629 7.875 11.77 7.875 10.875 C 7.875 9.98 8.231 9.121 8.864 8.489 C 9.496 7.856 10.355 7.5 11.25 7.5 C 12.145 7.5 13.004 7.856 13.636 8.489 C 14.269 9.121 14.625 9.98 14.625 10.875 C 14.625 11.77 14.269 12.629 13.636 13.261 C 13.004 13.894 12.145 14.25 11.25 14.25 Z M 3.375 5.25 C 3.872 5.25 4.349 5.052 4.701 4.701 C 5.052 4.349 5.25 3.872 5.25 3.375 C 5.25 2.878 5.052 2.401 4.701 2.049 C 4.349 1.698 3.872 1.5 3.375 1.5 C 2.878 1.5 2.401 1.698 2.049 2.049 C 1.698 2.401 1.5 2.878 1.5 3.375 C 1.5 3.872 1.698 4.349 2.049 4.701 C 2.401 5.052 2.878 5.25 3.375 5.25 L 3.375 5.25 Z M 3.75 12.75 C 4.247 12.75 4.724 12.552 5.076 12.201 C 5.427 11.849 5.625 11.372 5.625 10.875 C 5.625 10.378 5.427 9.901 5.076 9.549 C 4.724 9.198 4.247 9 3.75 9 C 3.253 9 2.776 9.198 2.424 9.549 C 2.073 9.901 1.875 10.378 1.875 10.875 C 1.875 11.372 2.073 11.849 2.424 12.201 C 2.776 12.552 3.253 12.75 3.75 12.75 Z M 11.25 5.25 C 11.747 5.25 12.224 5.052 12.576 4.701 C 12.927 4.349 13.125 3.872 13.125 3.375 C 13.125 2.878 12.927 2.401 12.576 2.049 C 12.224 1.698 11.747 1.5 11.25 1.5 C 10.753 1.5 10.276 1.698 9.924 2.049 C 9.573 2.401 9.375 2.878 9.375 3.375 C 9.375 3.872 9.573 4.349 9.924 4.701 C 10.276 5.052 10.753 5.25 11.25 5.25 Z M 11.25 12.75 C 11.747 12.75 12.224 12.552 12.576 12.201 C 12.927 11.849 13.125 11.372 13.125 10.875 C 13.125 10.378 12.927 9.901 12.576 9.549 C 12.224 9.198 11.747 9 11.25 9 C 10.753 9 10.276 9.198 9.924 9.549 C 9.573 9.901 9.375 10.378 9.375 10.875 C 9.375 11.372 9.573 11.849 9.924 12.201 C 10.276 12.552 10.753 12.75 11.25 12.75 Z"} fill="currentColor" fillRule="nonzero" />
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
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Others</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {props.search && (
      <TextInput11
        style={{
          position: "relative",
          width: 232,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        label={false}
        hintText={false}
        rightIcon={false}
        type={"🔍 search"}
        state={"placeholder"}
        size={"md"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <ConnectionStatusTopbar10
          style={{ position: "relative", flexShrink: 0 }}
          state={"active"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          {props.quick && (
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 10px",
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
              <svg width={12.750} height={18} viewBox="0 0 12.750 18" fill="none" style={{
                position: "absolute",
                left: 4,
                top: 1,
                width: 12.75,
                height: 18,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 6.75 6.75 L 12.75 6.75 L 5.25 18 L 5.25 11.25 L 0 11.25 L 6.75 0 L 6.75 6.75 Z M 5.25 8.25 L 5.25 5.415 L 2.649 9.75 L 6.75 9.75 L 6.75 13.045 L 9.947 8.25 L 5.25 8.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          )}
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 10px",
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
              <svg width={15} height={15.750} viewBox="0 0 15 15.750" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15.75,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 13.5 11.25 L 15 11.25 L 15 12.75 L 0 12.75 L 0 11.25 L 1.5 11.25 L 1.5 6 C 1.5 4.409 2.132 2.883 3.257 1.757 C 4.383 0.632 5.909 0 7.5 0 C 9.091 0 10.617 0.632 11.743 1.757 C 12.868 2.883 13.5 4.409 13.5 6 L 13.5 11.25 Z M 12 11.25 L 12 6 C 12 4.807 11.526 3.662 10.682 2.818 C 9.838 1.974 8.693 1.5 7.5 1.5 C 6.307 1.5 5.162 1.974 4.318 2.818 C 3.474 3.662 3 4.807 3 6 L 3 11.25 L 12 11.25 Z M 5.25 14.25 L 9.75 14.25 L 9.75 15.75 L 5.25 15.75 L 5.25 14.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 24,
              top: 12,
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "var(--state-error-base)",
              boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            }} />
          </div>
        </div>
        <UserProfileTopbar10
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          editName={"Arthur"}
          icon1={<Avatar11 persona={"arthur taylor"} size={"32"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1440,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "20px 44px 20px 44px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <AmarBankWithoutTitle color={true} white={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TopbarItemsTopbar10
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}
            state={"active"}
          />
          <div style={{
            position: "relative",
            width: 110,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={15} height={13.500} viewBox="0 0 15 13.500" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 3.25,
                width: 15,
                height: 13.5,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 0.75 0 L 14.25 0 C 14.449 0 14.64 0.079 14.78 0.22 C 14.921 0.36 15 0.551 15 0.75 L 15 12.75 C 15 12.949 14.921 13.14 14.78 13.28 C 14.64 13.421 14.449 13.5 14.25 13.5 L 0.75 13.5 C 0.551 13.5 0.36 13.421 0.22 13.28 C 0.079 13.14 0 12.949 0 12.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z M 13.5 6 L 1.5 6 L 1.5 12 L 13.5 12 L 13.5 6 Z M 13.5 4.5 L 13.5 1.5 L 1.5 1.5 L 1.5 4.5 L 13.5 4.5 Z M 9 9 L 12 9 L 12 10.5 L 9 10.5 L 9 9 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>My Card</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 109,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.500} height={14.925} viewBox="0 0 13.500 14.925" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.537,
                width: 13.5,
                height: 14.925,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 9.787 7.5 L 13.5 11.212 L 9.787 14.925 L 8.727 13.865 L 10.629 11.962 L 0.75 11.962 L 0.75 10.462 L 10.629 10.462 L 8.727 8.56 L 9.787 7.5 Z M 3.712 0 L 4.773 1.061 L 2.871 2.963 L 12.75 2.963 L 12.75 4.462 L 2.871 4.462 L 4.773 6.365 L 3.712 7.425 L 0 3.712 L 3.712 0 L 3.712 0 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>Transfer</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 143,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
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
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 L 1.5 7.5 C 1.5 10.814 4.186 13.5 7.5 13.5 C 10.814 13.5 13.5 10.814 13.5 7.5 C 13.5 4.186 10.814 1.5 7.5 1.5 C 5.438 1.5 3.618 2.54 2.539 4.125 L 4.5 4.125 L 4.5 5.625 L 0 5.625 L 0 1.125 L 1.5 1.125 L 1.5 3 C 2.868 1.178 5.047 0 7.5 0 Z M 8.25 3.75 L 8.25 7.189 L 10.682 9.621 L 9.621 10.682 L 6.75 7.81 L 6.75 3.75 L 8.25 3.75 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>Transactions</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 122,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.500} height={15} viewBox="0 0 13.500 15" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.5,
                width: 13.5,
                height: 15,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 12.75 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 12.75 0 C 12.949 0 13.14 0.079 13.28 0.22 C 13.421 0.36 13.5 0.551 13.5 0.75 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 Z M 12 13.5 L 12 1.5 L 1.5 1.5 L 1.5 13.5 L 12 13.5 Z M 3.75 5.25 L 9.75 5.25 L 9.75 6.75 L 3.75 6.75 L 3.75 5.25 Z M 3.75 8.25 L 9.75 8.25 L 9.75 9.75 L 3.75 9.75 L 3.75 8.25 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>Payments</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 121,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
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
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 7.5 13.5 C 9.091 13.5 10.617 12.868 11.743 11.743 C 12.868 10.617 13.5 9.091 13.5 7.5 C 13.5 5.909 12.868 4.383 11.743 3.257 C 10.617 2.132 9.091 1.5 7.5 1.5 C 5.909 1.5 4.383 2.132 3.257 3.257 C 2.132 4.383 1.5 5.909 1.5 7.5 C 1.5 9.091 2.132 10.617 3.257 11.743 C 4.383 12.868 5.909 13.5 7.5 13.5 L 7.5 13.5 Z M 3.75 8.25 L 10.5 8.25 L 10.5 9.75 L 7.5 9.75 L 7.5 12 L 3.75 8.25 Z M 7.5 5.25 L 7.5 3 L 11.25 6.75 L 4.5 6.75 L 4.5 5.25 L 7.5 5.25 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>Exchange</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 126,
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 12px 8px 8px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={14.625} height={14.250} viewBox="0 0 14.625 14.250" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.875,
                width: 14.625,
                height: 14.25,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 3.375 6.75 C 2.932 6.75 2.493 6.663 2.083 6.493 C 1.674 6.323 1.302 6.075 0.989 5.761 C 0.675 5.448 0.427 5.076 0.257 4.667 C 0.087 4.257 0 3.818 0 3.375 C 0 2.932 0.087 2.493 0.257 2.083 C 0.427 1.674 0.675 1.302 0.989 0.989 C 1.302 0.675 1.674 0.427 2.083 0.257 C 2.493 0.087 2.932 0 3.375 0 C 4.27 0 5.129 0.356 5.761 0.989 C 6.394 1.621 6.75 2.48 6.75 3.375 C 6.75 4.27 6.394 5.129 5.761 5.761 C 5.129 6.394 4.27 6.75 3.375 6.75 L 3.375 6.75 Z M 3.75 14.25 C 2.855 14.25 1.996 13.894 1.364 13.261 C 0.731 12.629 0.375 11.77 0.375 10.875 C 0.375 9.98 0.731 9.121 1.364 8.489 C 1.996 7.856 2.855 7.5 3.75 7.5 C 4.645 7.5 5.504 7.856 6.136 8.489 C 6.769 9.121 7.125 9.98 7.125 10.875 C 7.125 11.77 6.769 12.629 6.136 13.261 C 5.504 13.894 4.645 14.25 3.75 14.25 L 3.75 14.25 Z M 11.25 6.75 C 10.807 6.75 10.368 6.663 9.958 6.493 C 9.549 6.323 9.177 6.075 8.864 5.761 C 8.55 5.448 8.302 5.076 8.132 4.667 C 7.962 4.257 7.875 3.818 7.875 3.375 C 7.875 2.932 7.962 2.493 8.132 2.083 C 8.302 1.674 8.55 1.302 8.864 0.989 C 9.177 0.675 9.549 0.427 9.958 0.257 C 10.368 0.087 10.807 0 11.25 0 C 12.145 0 13.004 0.356 13.636 0.989 C 14.269 1.621 14.625 2.48 14.625 3.375 C 14.625 4.27 14.269 5.129 13.636 5.761 C 13.004 6.394 12.145 6.75 11.25 6.75 L 11.25 6.75 Z M 11.25 14.25 C 10.355 14.25 9.496 13.894 8.864 13.261 C 8.231 12.629 7.875 11.77 7.875 10.875 C 7.875 9.98 8.231 9.121 8.864 8.489 C 9.496 7.856 10.355 7.5 11.25 7.5 C 12.145 7.5 13.004 7.856 13.636 8.489 C 14.269 9.121 14.625 9.98 14.625 10.875 C 14.625 11.77 14.269 12.629 13.636 13.261 C 13.004 13.894 12.145 14.25 11.25 14.25 Z M 3.375 5.25 C 3.872 5.25 4.349 5.052 4.701 4.701 C 5.052 4.349 5.25 3.872 5.25 3.375 C 5.25 2.878 5.052 2.401 4.701 2.049 C 4.349 1.698 3.872 1.5 3.375 1.5 C 2.878 1.5 2.401 1.698 2.049 2.049 C 1.698 2.401 1.5 2.878 1.5 3.375 C 1.5 3.872 1.698 4.349 2.049 4.701 C 2.401 5.052 2.878 5.25 3.375 5.25 L 3.375 5.25 Z M 3.75 12.75 C 4.247 12.75 4.724 12.552 5.076 12.201 C 5.427 11.849 5.625 11.372 5.625 10.875 C 5.625 10.378 5.427 9.901 5.076 9.549 C 4.724 9.198 4.247 9 3.75 9 C 3.253 9 2.776 9.198 2.424 9.549 C 2.073 9.901 1.875 10.378 1.875 10.875 C 1.875 11.372 2.073 11.849 2.424 12.201 C 2.776 12.552 3.253 12.75 3.75 12.75 Z M 11.25 5.25 C 11.747 5.25 12.224 5.052 12.576 4.701 C 12.927 4.349 13.125 3.872 13.125 3.375 C 13.125 2.878 12.927 2.401 12.576 2.049 C 12.224 1.698 11.747 1.5 11.25 1.5 C 10.753 1.5 10.276 1.698 9.924 2.049 C 9.573 2.401 9.375 2.878 9.375 3.375 C 9.375 3.872 9.573 4.349 9.924 4.701 C 10.276 5.052 10.753 5.25 11.25 5.25 Z M 11.25 12.75 C 11.747 12.75 12.224 12.552 12.576 12.201 C 12.927 11.849 13.125 11.372 13.125 10.875 C 13.125 10.378 12.927 9.901 12.576 9.549 C 12.224 9.198 11.747 9 11.25 9 C 10.753 9 10.276 9.198 9.924 9.549 C 9.573 9.901 9.375 10.378 9.375 10.875 C 9.375 11.372 9.573 11.849 9.924 12.201 C 10.276 12.552 10.753 12.75 11.25 12.75 Z"} fill="currentColor" fillRule="nonzero" />
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
              alignSelf: "stretch",
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
                alignSelf: "stretch",
              }}>Others</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-error-base)",
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
              <span style={{
                position: "relative",
                width: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                textAlign: "center",
                lineHeight: "16px",
                color: "var(--static-static-white)",
                flexShrink: 0,
              }}>2</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
                position: "absolute",
                left: 5.227,
                top: 7.167,
                width: 9.546,
                height: 5.833,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
          {props.search && (
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              overflow: "hidden",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={15.235} height={15.235} viewBox="0 0 15.235 15.235" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15.235,
                height: 15.235,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 6.75 0 C 10.476 0 13.5 3.024 13.5 6.75 C 13.5 10.476 10.476 13.5 6.75 13.5 C 3.024 13.5 0 10.476 0 6.75 C 0 3.024 3.024 0 6.75 0 Z M 6.75 12 C 9.65 12 12 9.65 12 6.75 C 12 3.849 9.65 1.5 6.75 1.5 C 3.849 1.5 1.5 3.849 1.5 6.75 C 1.5 9.65 3.849 12 6.75 12 Z M 13.114 12.053 L 15.235 14.174 L 14.174 15.235 L 12.053 13.114 L 13.114 12.053 L 13.114 12.053 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          )}
          {props.quick && (
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              overflow: "hidden",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={12.750} height={18} viewBox="0 0 12.750 18" fill="none" style={{
                position: "absolute",
                left: 4,
                top: 1,
                width: 12.75,
                height: 18,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 6.75 6.75 L 12.75 6.75 L 5.25 18 L 5.25 11.25 L 0 11.25 L 6.75 0 L 6.75 6.75 Z M 5.25 8.25 L 5.25 5.415 L 2.649 9.75 L 6.75 9.75 L 6.75 13.045 L 9.947 8.25 L 5.25 8.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          )}
          <div style={{
            position: "relative",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 10px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 20,
              overflow: "hidden",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg width={15} height={15.750} viewBox="0 0 15 15.750" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15.75,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 13.5 11.25 L 15 11.25 L 15 12.75 L 0 12.75 L 0 11.25 L 1.5 11.25 L 1.5 6 C 1.5 4.409 2.132 2.883 3.257 1.757 C 4.383 0.632 5.909 0 7.5 0 C 9.091 0 10.617 0.632 11.743 1.757 C 12.868 2.883 13.5 4.409 13.5 6 L 13.5 11.25 Z M 12 11.25 L 12 6 C 12 4.807 11.526 3.662 10.682 2.818 C 9.838 1.974 8.693 1.5 7.5 1.5 C 6.307 1.5 5.162 1.974 4.318 2.818 C 3.474 3.662 3 4.807 3 6 L 3 11.25 L 12 11.25 Z M 5.25 14.25 L 9.75 14.25 L 9.75 15.75 L 5.25 15.75 L 5.25 14.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 24,
              top: 12,
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "var(--state-error-base)",
              boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            }} />
          </div>
        </div>
        <UserProfileTopbar10
          style={{
            position: "relative",
            width: 127,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          editName={"Arthur"}
          icon1={<Avatar11 persona={"arthur taylor"} size={"32"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Default
    "type=default": __body0,
    // figma: 🧩 Type=With Icon
    "type=with icon": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TopbarNavigation11;
