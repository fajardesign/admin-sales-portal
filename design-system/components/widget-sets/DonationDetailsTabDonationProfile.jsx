import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _InfoCustomFill as InfoCustomFill } from './InfoCustomFill.jsx';
import { _Tooltip11 as Tooltip11 } from './Tooltip11.jsx';
import { _TopStatus11 as TopStatus11 } from './TopStatus11.jsx';

// figma node: 3962:4438 Donation Details Tab [Donation Profile] [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function DonationDetailsTabDonationProfile(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "overview" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1,
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
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>Label</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "rgb(0,159,175)",
            flexShrink: 0,
          }}>*</span>
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
          }}>(Optional)</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
              position: "absolute",
              left: 3.75,
              top: 3.75,
              width: 12.5,
              height: 12.5,
              color: "var(--icon-disabled-300)",
            }}>
              <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Help?</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 10,
          backgroundColor: "var(--bg-weak-50)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexGrow: 1,
            }}>Overview</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Goal</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Statistic</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 56,
            height: 56,
            flexShrink: 0,
          }}>{props.icon1 ?? <Avatar11 topStatus={true} icon1={<TopStatus11 type={"⭐️ favorite"} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />} persona={"arthur taylor"} size={"56"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        <div style={{
          position: "relative",
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
            fontSize: 18,
            textAlign: "center",
            lineHeight: "24px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Arthur Taylor"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "48 donations in the last year"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 10,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={15} height={13.500} viewBox="0 0 15 13.500" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 3.25,
                width: 15,
                height: 13.5,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 0.75 0 L 14.25 0 C 14.449 0 14.64 0.079 14.78 0.22 C 14.921 0.36 15 0.551 15 0.75 L 15 12.75 C 15 12.949 14.921 13.14 14.78 13.28 C 14.64 13.421 14.449 13.5 14.25 13.5 L 0.75 13.5 C 0.551 13.5 0.36 13.421 0.22 13.28 C 0.079 13.14 0 12.949 0 12.75 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 0.75 0 Z M 1.5 1.5 L 1.5 12 L 13.5 12 L 13.5 1.5 L 1.5 1.5 Z M 4.875 8.25 L 9 8.25 C 9.099 8.25 9.195 8.21 9.265 8.14 C 9.335 8.07 9.375 7.974 9.375 7.875 C 9.375 7.776 9.335 7.68 9.265 7.61 C 9.195 7.54 9.099 7.5 9 7.5 L 6 7.5 C 5.503 7.5 5.026 7.302 4.674 6.951 C 4.323 6.599 4.125 6.122 4.125 5.625 C 4.125 5.128 4.323 4.651 4.674 4.299 C 5.026 3.948 5.503 3.75 6 3.75 L 6.75 3.75 L 6.75 2.25 L 8.25 2.25 L 8.25 3.75 L 10.125 3.75 L 10.125 5.25 L 6 5.25 C 5.901 5.25 5.805 5.29 5.735 5.36 C 5.665 5.43 5.625 5.526 5.625 5.625 C 5.625 5.724 5.665 5.82 5.735 5.89 C 5.805 5.96 5.901 6 6 6 L 9 6 C 9.497 6 9.974 6.198 10.326 6.549 C 10.677 6.901 10.875 7.378 10.875 7.875 C 10.875 8.372 10.677 8.849 10.326 9.201 C 9.974 9.552 9.497 9.75 9 9.75 L 8.25 9.75 L 8.25 11.25 L 6.75 11.25 L 6.75 9.75 L 4.875 9.75 L 4.875 8.25 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
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
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "$12,000.00"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "Total Donation"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 10,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: "14px 12px 14px 12px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 1.75,
                width: 15,
                height: 15,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 5.25 0 L 5.25 1.5 L 9.75 1.5 L 9.75 0 L 11.25 0 L 11.25 1.5 L 14.25 1.5 C 14.449 1.5 14.64 1.579 14.78 1.72 C 14.921 1.86 15 2.051 15 2.25 L 15 14.25 C 15 14.449 14.921 14.64 14.78 14.78 C 14.64 14.921 14.449 15 14.25 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 2.25 C 0 2.051 0.079 1.86 0.22 1.72 C 0.36 1.579 0.551 1.5 0.75 1.5 L 3.75 1.5 L 3.75 0 L 5.25 0 Z M 13.5 6.75 L 1.5 6.75 L 1.5 13.5 L 13.5 13.5 L 13.5 6.75 Z M 9.777 7.602 L 10.838 8.663 L 7.125 12.375 L 4.473 9.723 L 5.535 8.663 L 7.126 10.254 L 9.778 7.602 L 9.777 7.602 Z M 3.75 3 L 1.5 3 L 1.5 5.25 L 13.5 5.25 L 13.5 3 L 11.25 3 L 11.25 3.75 L 9.75 3.75 L 9.75 3 L 5.25 3 L 5.25 3.75 L 3.75 3.75 L 3.75 3 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
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
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>14-month</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Donation Streak</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 300,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1,
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
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>Label</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "rgb(0,159,175)",
            flexShrink: 0,
          }}>*</span>
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
          }}>(Optional)</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
              position: "absolute",
              left: 3.75,
              top: 3.75,
              width: 12.5,
              height: 12.5,
              color: "var(--icon-disabled-300)",
            }}>
              <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Help?</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 10,
          backgroundColor: "var(--bg-weak-50)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Overview</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexGrow: 1,
            }}>Goal</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Statistic</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
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
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Donation Goal for 2023"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"$12,000 / "}<span style={{ color: "rgb(23,23,23)" }}>{"$16,000"}</span></span>
      </div>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <svg width={320} height={160} viewBox="0 0 320 160" fill="none" style={{
          position: "absolute",
          left: 0,
          top: -4,
          width: 320,
          height: 160,
        }}>
          <path d={"M 0 0 L 0 -0.5 L -0.5 -0.5 L -0.5 0 L 0 0 Z M 0 160 L -0.5 160 L -0.5 160.5 L 0 160.5 L 0 160 Z M 320 0 L 320.5 0 L 320.5 -0.5 L 320 -0.5 L 320 0 Z M 320 160 L 320 160.5 L 320.5 160.5 L 320.5 160 L 320 160 Z M -0.5 0 L -0.5 26.667 L 0.5 26.667 L 0.5 0 L -0.5 0 Z M -0.5 26.667 L -0.5 53.333 L 0.5 53.333 L 0.5 26.667 L -0.5 26.667 Z M -0.5 53.333 L -0.5 80 L 0.5 80 L 0.5 53.333 L -0.5 53.333 Z M -0.5 80 L -0.5 106.667 L 0.5 106.667 L 0.5 80 L -0.5 80 Z M -0.5 106.667 L -0.5 133.333 L 0.5 133.333 L 0.5 106.667 L -0.5 106.667 Z M -0.5 133.333 L -0.5 160 L 0.5 160 L 0.5 133.333 L -0.5 133.333 Z M 0 0.5 L 26.667 0.5 L 26.667 -0.5 L 0 -0.5 L 0 0.5 Z M 26.167 0 L 26.167 26.667 L 27.167 26.667 L 27.167 0 L 26.167 0 Z M 26.667 26.167 L 0 26.167 L 0 27.167 L 26.667 27.167 L 26.667 26.167 Z M 26.167 26.667 L 26.167 53.333 L 27.167 53.333 L 27.167 26.667 L 26.167 26.667 Z M 26.667 52.833 L 0 52.833 L 0 53.833 L 26.667 53.833 L 26.667 52.833 Z M 26.167 53.333 L 26.167 80 L 27.167 80 L 27.167 53.333 L 26.167 53.333 Z M 26.667 79.5 L 0 79.5 L 0 80.5 L 26.667 80.5 L 26.667 79.5 Z M 26.167 80 L 26.167 106.667 L 27.167 106.667 L 27.167 80 L 26.167 80 Z M 26.667 106.167 L 0 106.167 L 0 107.167 L 26.667 107.167 L 26.667 106.167 Z M 26.167 106.667 L 26.167 133.333 L 27.167 133.333 L 27.167 106.667 L 26.167 106.667 Z M 26.667 132.833 L 0 132.833 L 0 133.833 L 26.667 133.833 L 26.667 132.833 Z M 26.167 133.333 L 26.167 160 L 27.167 160 L 27.167 133.333 L 26.167 133.333 Z M 26.667 159.5 L 0 159.5 L 0 160.5 L 26.667 160.5 L 26.667 159.5 Z M 26.667 0.5 L 53.333 0.5 L 53.333 -0.5 L 26.667 -0.5 L 26.667 0.5 Z M 52.833 0 L 52.833 26.667 L 53.833 26.667 L 53.833 0 L 52.833 0 Z M 53.333 26.167 L 26.667 26.167 L 26.667 27.167 L 53.333 27.167 L 53.333 26.167 Z M 52.833 26.667 L 52.833 53.333 L 53.833 53.333 L 53.833 26.667 L 52.833 26.667 Z M 53.333 52.833 L 26.667 52.833 L 26.667 53.833 L 53.333 53.833 L 53.333 52.833 Z M 52.833 53.333 L 52.833 80 L 53.833 80 L 53.833 53.333 L 52.833 53.333 Z M 53.333 79.5 L 26.667 79.5 L 26.667 80.5 L 53.333 80.5 L 53.333 79.5 Z M 52.833 80 L 52.833 106.667 L 53.833 106.667 L 53.833 80 L 52.833 80 Z M 53.333 106.167 L 26.667 106.167 L 26.667 107.167 L 53.333 107.167 L 53.333 106.167 Z M 52.833 106.667 L 52.833 133.333 L 53.833 133.333 L 53.833 106.667 L 52.833 106.667 Z M 53.333 132.833 L 26.667 132.833 L 26.667 133.833 L 53.333 133.833 L 53.333 132.833 Z M 52.833 133.333 L 52.833 160 L 53.833 160 L 53.833 133.333 L 52.833 133.333 Z M 53.333 159.5 L 26.667 159.5 L 26.667 160.5 L 53.333 160.5 L 53.333 159.5 Z M 53.333 0.5 L 80 0.5 L 80 -0.5 L 53.333 -0.5 L 53.333 0.5 Z M 79.5 0 L 79.5 26.667 L 80.5 26.667 L 80.5 0 L 79.5 0 Z M 80 26.167 L 53.333 26.167 L 53.333 27.167 L 80 27.167 L 80 26.167 Z M 79.5 26.667 L 79.5 53.333 L 80.5 53.333 L 80.5 26.667 L 79.5 26.667 Z M 80 52.833 L 53.333 52.833 L 53.333 53.833 L 80 53.833 L 80 52.833 Z M 79.5 53.333 L 79.5 80 L 80.5 80 L 80.5 53.333 L 79.5 53.333 Z M 80 79.5 L 53.333 79.5 L 53.333 80.5 L 80 80.5 L 80 79.5 Z M 79.5 80 L 79.5 106.667 L 80.5 106.667 L 80.5 80 L 79.5 80 Z M 80 106.167 L 53.333 106.167 L 53.333 107.167 L 80 107.167 L 80 106.167 Z M 79.5 106.667 L 79.5 133.333 L 80.5 133.333 L 80.5 106.667 L 79.5 106.667 Z M 80 132.833 L 53.333 132.833 L 53.333 133.833 L 80 133.833 L 80 132.833 Z M 79.5 133.333 L 79.5 160 L 80.5 160 L 80.5 133.333 L 79.5 133.333 Z M 80 159.5 L 53.333 159.5 L 53.333 160.5 L 80 160.5 L 80 159.5 Z M 80 0.5 L 106.667 0.5 L 106.667 -0.5 L 80 -0.5 L 80 0.5 Z M 106.167 0 L 106.167 26.667 L 107.167 26.667 L 107.167 0 L 106.167 0 Z M 106.667 26.167 L 80 26.167 L 80 27.167 L 106.667 27.167 L 106.667 26.167 Z M 106.167 26.667 L 106.167 53.333 L 107.167 53.333 L 107.167 26.667 L 106.167 26.667 Z M 106.667 52.833 L 80 52.833 L 80 53.833 L 106.667 53.833 L 106.667 52.833 Z M 106.167 53.333 L 106.167 80 L 107.167 80 L 107.167 53.333 L 106.167 53.333 Z M 106.667 79.5 L 80 79.5 L 80 80.5 L 106.667 80.5 L 106.667 79.5 Z M 106.167 80 L 106.167 106.667 L 107.167 106.667 L 107.167 80 L 106.167 80 Z M 106.667 106.167 L 80 106.167 L 80 107.167 L 106.667 107.167 L 106.667 106.167 Z M 106.167 106.667 L 106.167 133.333 L 107.167 133.333 L 107.167 106.667 L 106.167 106.667 Z M 106.667 132.833 L 80 132.833 L 80 133.833 L 106.667 133.833 L 106.667 132.833 Z M 106.167 133.333 L 106.167 160 L 107.167 160 L 107.167 133.333 L 106.167 133.333 Z M 106.667 159.5 L 80 159.5 L 80 160.5 L 106.667 160.5 L 106.667 159.5 Z M 106.667 0.5 L 133.333 0.5 L 133.333 -0.5 L 106.667 -0.5 L 106.667 0.5 Z M 132.833 0 L 132.833 26.667 L 133.833 26.667 L 133.833 0 L 132.833 0 Z M 133.333 26.167 L 106.667 26.167 L 106.667 27.167 L 133.333 27.167 L 133.333 26.167 Z M 132.833 26.667 L 132.833 53.333 L 133.833 53.333 L 133.833 26.667 L 132.833 26.667 Z M 133.333 52.833 L 106.667 52.833 L 106.667 53.833 L 133.333 53.833 L 133.333 52.833 Z M 132.833 53.333 L 132.833 80 L 133.833 80 L 133.833 53.333 L 132.833 53.333 Z M 133.333 79.5 L 106.667 79.5 L 106.667 80.5 L 133.333 80.5 L 133.333 79.5 Z M 132.833 80 L 132.833 106.667 L 133.833 106.667 L 133.833 80 L 132.833 80 Z M 133.333 106.167 L 106.667 106.167 L 106.667 107.167 L 133.333 107.167 L 133.333 106.167 Z M 132.833 106.667 L 132.833 133.333 L 133.833 133.333 L 133.833 106.667 L 132.833 106.667 Z M 133.333 132.833 L 106.667 132.833 L 106.667 133.833 L 133.333 133.833 L 133.333 132.833 Z M 132.833 133.333 L 132.833 160 L 133.833 160 L 133.833 133.333 L 132.833 133.333 Z M 133.333 159.5 L 106.667 159.5 L 106.667 160.5 L 133.333 160.5 L 133.333 159.5 Z M 133.333 0.5 L 160 0.5 L 160 -0.5 L 133.333 -0.5 L 133.333 0.5 Z M 159.5 0 L 159.5 26.667 L 160.5 26.667 L 160.5 0 L 159.5 0 Z M 160 26.167 L 133.333 26.167 L 133.333 27.167 L 160 27.167 L 160 26.167 Z M 159.5 26.667 L 159.5 53.333 L 160.5 53.333 L 160.5 26.667 L 159.5 26.667 Z M 160 52.833 L 133.333 52.833 L 133.333 53.833 L 160 53.833 L 160 52.833 Z M 159.5 53.333 L 159.5 80 L 160.5 80 L 160.5 53.333 L 159.5 53.333 Z M 160 79.5 L 133.333 79.5 L 133.333 80.5 L 160 80.5 L 160 79.5 Z M 159.5 80 L 159.5 106.667 L 160.5 106.667 L 160.5 80 L 159.5 80 Z M 160 106.167 L 133.333 106.167 L 133.333 107.167 L 160 107.167 L 160 106.167 Z M 159.5 106.667 L 159.5 133.333 L 160.5 133.333 L 160.5 106.667 L 159.5 106.667 Z M 160 132.833 L 133.333 132.833 L 133.333 133.833 L 160 133.833 L 160 132.833 Z M 159.5 133.333 L 159.5 160 L 160.5 160 L 160.5 133.333 L 159.5 133.333 Z M 160 159.5 L 133.333 159.5 L 133.333 160.5 L 160 160.5 L 160 159.5 Z M 160 0.5 L 186.667 0.5 L 186.667 -0.5 L 160 -0.5 L 160 0.5 Z M 186.167 0 L 186.167 26.667 L 187.167 26.667 L 187.167 0 L 186.167 0 Z M 186.667 26.167 L 160 26.167 L 160 27.167 L 186.667 27.167 L 186.667 26.167 Z M 186.167 26.667 L 186.167 53.333 L 187.167 53.333 L 187.167 26.667 L 186.167 26.667 Z M 186.667 52.833 L 160 52.833 L 160 53.833 L 186.667 53.833 L 186.667 52.833 Z M 186.167 53.333 L 186.167 80 L 187.167 80 L 187.167 53.333 L 186.167 53.333 Z M 186.667 79.5 L 160 79.5 L 160 80.5 L 186.667 80.5 L 186.667 79.5 Z M 186.167 80 L 186.167 106.667 L 187.167 106.667 L 187.167 80 L 186.167 80 Z M 186.667 106.167 L 160 106.167 L 160 107.167 L 186.667 107.167 L 186.667 106.167 Z M 186.167 106.667 L 186.167 133.333 L 187.167 133.333 L 187.167 106.667 L 186.167 106.667 Z M 186.667 132.833 L 160 132.833 L 160 133.833 L 186.667 133.833 L 186.667 132.833 Z M 186.167 133.333 L 186.167 160 L 187.167 160 L 187.167 133.333 L 186.167 133.333 Z M 186.667 159.5 L 160 159.5 L 160 160.5 L 186.667 160.5 L 186.667 159.5 Z M 186.667 0.5 L 213.333 0.5 L 213.333 -0.5 L 186.667 -0.5 L 186.667 0.5 Z M 212.833 0 L 212.833 26.667 L 213.833 26.667 L 213.833 0 L 212.833 0 Z M 213.333 26.167 L 186.667 26.167 L 186.667 27.167 L 213.333 27.167 L 213.333 26.167 Z M 212.833 26.667 L 212.833 53.333 L 213.833 53.333 L 213.833 26.667 L 212.833 26.667 Z M 213.333 52.833 L 186.667 52.833 L 186.667 53.833 L 213.333 53.833 L 213.333 52.833 Z M 212.833 53.333 L 212.833 80 L 213.833 80 L 213.833 53.333 L 212.833 53.333 Z M 213.333 79.5 L 186.667 79.5 L 186.667 80.5 L 213.333 80.5 L 213.333 79.5 Z M 212.833 80 L 212.833 106.667 L 213.833 106.667 L 213.833 80 L 212.833 80 Z M 213.333 106.167 L 186.667 106.167 L 186.667 107.167 L 213.333 107.167 L 213.333 106.167 Z M 212.833 106.667 L 212.833 133.333 L 213.833 133.333 L 213.833 106.667 L 212.833 106.667 Z M 213.333 132.833 L 186.667 132.833 L 186.667 133.833 L 213.333 133.833 L 213.333 132.833 Z M 212.833 133.333 L 212.833 160 L 213.833 160 L 213.833 133.333 L 212.833 133.333 Z M 213.333 159.5 L 186.667 159.5 L 186.667 160.5 L 213.333 160.5 L 213.333 159.5 Z M 213.333 0.5 L 240 0.5 L 240 -0.5 L 213.333 -0.5 L 213.333 0.5 Z M 239.5 0 L 239.5 26.667 L 240.5 26.667 L 240.5 0 L 239.5 0 Z M 240 26.167 L 213.333 26.167 L 213.333 27.167 L 240 27.167 L 240 26.167 Z M 239.5 26.667 L 239.5 53.333 L 240.5 53.333 L 240.5 26.667 L 239.5 26.667 Z M 240 52.833 L 213.333 52.833 L 213.333 53.833 L 240 53.833 L 240 52.833 Z M 239.5 53.333 L 239.5 80 L 240.5 80 L 240.5 53.333 L 239.5 53.333 Z M 240 79.5 L 213.333 79.5 L 213.333 80.5 L 240 80.5 L 240 79.5 Z M 239.5 80 L 239.5 106.667 L 240.5 106.667 L 240.5 80 L 239.5 80 Z M 240 106.167 L 213.333 106.167 L 213.333 107.167 L 240 107.167 L 240 106.167 Z M 239.5 106.667 L 239.5 133.333 L 240.5 133.333 L 240.5 106.667 L 239.5 106.667 Z M 240 132.833 L 213.333 132.833 L 213.333 133.833 L 240 133.833 L 240 132.833 Z M 239.5 133.333 L 239.5 160 L 240.5 160 L 240.5 133.333 L 239.5 133.333 Z M 240 159.5 L 213.333 159.5 L 213.333 160.5 L 240 160.5 L 240 159.5 Z M 240 0.5 L 266.667 0.5 L 266.667 -0.5 L 240 -0.5 L 240 0.5 Z M 266.167 0 L 266.167 26.667 L 267.167 26.667 L 267.167 0 L 266.167 0 Z M 266.667 26.167 L 240 26.167 L 240 27.167 L 266.667 27.167 L 266.667 26.167 Z M 266.167 26.667 L 266.167 53.333 L 267.167 53.333 L 267.167 26.667 L 266.167 26.667 Z M 266.667 52.833 L 240 52.833 L 240 53.833 L 266.667 53.833 L 266.667 52.833 Z M 266.167 53.333 L 266.167 80 L 267.167 80 L 267.167 53.333 L 266.167 53.333 Z M 266.667 79.5 L 240 79.5 L 240 80.5 L 266.667 80.5 L 266.667 79.5 Z M 266.167 80 L 266.167 106.667 L 267.167 106.667 L 267.167 80 L 266.167 80 Z M 266.667 106.167 L 240 106.167 L 240 107.167 L 266.667 107.167 L 266.667 106.167 Z M 266.167 106.667 L 266.167 133.333 L 267.167 133.333 L 267.167 106.667 L 266.167 106.667 Z M 266.667 132.833 L 240 132.833 L 240 133.833 L 266.667 133.833 L 266.667 132.833 Z M 266.167 133.333 L 266.167 160 L 267.167 160 L 267.167 133.333 L 266.167 133.333 Z M 266.667 159.5 L 240 159.5 L 240 160.5 L 266.667 160.5 L 266.667 159.5 Z M 266.667 0.5 L 293.333 0.5 L 293.333 -0.5 L 266.667 -0.5 L 266.667 0.5 Z M 292.833 0 L 292.833 26.667 L 293.833 26.667 L 293.833 0 L 292.833 0 Z M 293.333 26.167 L 266.667 26.167 L 266.667 27.167 L 293.333 27.167 L 293.333 26.167 Z M 292.833 26.667 L 292.833 53.333 L 293.833 53.333 L 293.833 26.667 L 292.833 26.667 Z M 293.333 52.833 L 266.667 52.833 L 266.667 53.833 L 293.333 53.833 L 293.333 52.833 Z M 292.833 53.333 L 292.833 80 L 293.833 80 L 293.833 53.333 L 292.833 53.333 Z M 293.333 79.5 L 266.667 79.5 L 266.667 80.5 L 293.333 80.5 L 293.333 79.5 Z M 292.833 80 L 292.833 106.667 L 293.833 106.667 L 293.833 80 L 292.833 80 Z M 293.333 106.167 L 266.667 106.167 L 266.667 107.167 L 293.333 107.167 L 293.333 106.167 Z M 292.833 106.667 L 292.833 133.333 L 293.833 133.333 L 293.833 106.667 L 292.833 106.667 Z M 293.333 132.833 L 266.667 132.833 L 266.667 133.833 L 293.333 133.833 L 293.333 132.833 Z M 292.833 133.333 L 292.833 160 L 293.833 160 L 293.833 133.333 L 292.833 133.333 Z M 293.333 159.5 L 266.667 159.5 L 266.667 160.5 L 293.333 160.5 L 293.333 159.5 Z M 293.333 0.5 L 320 0.5 L 320 -0.5 L 293.333 -0.5 L 293.333 0.5 Z M 319.5 0 L 319.5 26.667 L 320.5 26.667 L 320.5 0 L 319.5 0 Z M 320 26.167 L 293.333 26.167 L 293.333 27.167 L 320 27.167 L 320 26.167 Z M 319.5 26.667 L 319.5 53.333 L 320.5 53.333 L 320.5 26.667 L 319.5 26.667 Z M 320 52.833 L 293.333 52.833 L 293.333 53.833 L 320 53.833 L 320 52.833 Z M 319.5 53.333 L 319.5 80 L 320.5 80 L 320.5 53.333 L 319.5 53.333 Z M 320 79.5 L 293.333 79.5 L 293.333 80.5 L 320 80.5 L 320 79.5 Z M 319.5 80 L 319.5 106.667 L 320.5 106.667 L 320.5 80 L 319.5 80 Z M 320 106.167 L 293.333 106.167 L 293.333 107.167 L 320 107.167 L 320 106.167 Z M 319.5 106.667 L 319.5 133.333 L 320.5 133.333 L 320.5 106.667 L 319.5 106.667 Z M 320 132.833 L 293.333 132.833 L 293.333 133.833 L 320 133.833 L 320 132.833 Z M 319.5 133.333 L 319.5 160 L 320.5 160 L 320.5 133.333 L 319.5 133.333 Z M 320 159.5 L 293.333 159.5 L 293.333 160.5 L 320 160.5 L 320 159.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={160} height={140} viewBox="0 0 160 140" fill="none" style={{
          position: "absolute",
          left: 80,
          top: 6,
          width: 160,
          height: 140,
          filter: "drop-shadow(0px 16px 32px rgba(14,18,27,0.06))",
          color: "var(--bg-white-0)",
        }}>
          <path d={"M 116 0 C 140.304 0 160 18.919 160 45.405 C 160 98.378 100 128.649 80 140 C 60 128.649 0 98.378 0 45.405 C 0 18.919 20 0 44 0 C 58.88 0 72 7.568 80 15.135 C 88 7.568 101.12 0 116 0 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 80 140 L 77.532 144.348 L 80 145.749 L 82.468 144.348 L 80 140 Z M 80 15.135 L 76.564 18.767 L 80 22.018 L 83.436 18.767 L 80 15.135 Z M 116 5 C 137.496 5 155 21.634 155 45.405 L 165 45.405 C 165 16.204 143.112 -5 116 -5 L 116 5 Z M 155 45.405 C 155 69.848 141.179 89.411 124.172 104.579 C 107.161 119.751 87.716 129.872 77.532 135.652 L 82.468 144.348 C 92.284 138.777 112.839 128.087 130.828 112.042 C 148.821 95.995 165 73.936 165 45.405 L 155 45.405 Z M 82.468 135.652 C 72.284 129.872 52.839 119.751 35.828 104.579 C 18.821 89.411 5 69.848 5 45.405 L -5 45.405 C -5 73.936 11.179 95.995 29.172 112.042 C 47.161 128.087 67.716 138.777 77.532 144.348 L 82.468 135.652 Z M 5 45.405 C 5 21.656 22.785 5 44 5 L 44 -5 C 17.215 -5 -5 16.181 -5 45.405 L 5 45.405 Z M 44 5 C 57.24 5 69.191 11.793 76.564 18.767 L 83.436 11.503 C 74.809 3.342 60.52 -5 44 -5 L 44 5 Z M 83.436 18.767 C 90.809 11.793 102.76 5 116 5 L 116 -5 C 99.48 -5 85.191 3.342 76.564 11.503 L 83.436 18.767 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={160} height={140} viewBox="0 0 160 140" fill="none" style={{
          position: "absolute",
          left: 80,
          top: 6,
          width: 160,
          height: 140,
          color: "var(--state-error-lighter)",
        }}>
          <path d={"M 116 0 C 140.304 0 160 18.919 160 45.405 C 160 98.378 100 128.649 80 140 C 60 128.649 0 98.378 0 45.405 C 0 18.919 20 0 44 0 C 58.88 0 72 7.568 80 15.135 C 88 7.568 101.12 0 116 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 80,
          top: 6,
          width: 160,
          height: 140,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 160,
            height: 140,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={248} height={275} viewBox="0 0 248 275" fill="none" style={{
              position: "absolute",
              left: -24,
              top: 1,
              width: 248,
              height: 275,
            }}>
              <path d={"M 80.953 26.792 C 35.017 11.518 7.844 56.685 0 81.178 L 135.079 275 C 188.576 164.3 283.335 -44.025 234.387 8.278 C 173.202 73.656 138.373 45.885 80.953 26.792 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={248} height={275} viewBox="0 0 248 275" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,184,3)",
              transformOrigin: "0 0",
              width: 248,
              height: 275,
            }}>
              <path d={"M 80.953 26.792 C 35.017 11.518 7.844 56.685 0 81.178 L 135.079 275 C 188.576 164.3 283.335 -44.025 234.387 8.278 C 173.202 73.656 138.373 45.885 80.953 26.792 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={248} height={275} viewBox="0 0 248 275" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,184,16)",
              transformOrigin: "0 0",
              width: 248,
              height: 275,
              backdropFilter: "blur(36px)",
            }}>
              <path d={"M 80.953 26.792 C 35.017 11.518 7.844 56.685 0 81.178 L 135.079 275 C 188.576 164.3 283.335 -44.025 234.387 8.278 C 173.202 73.656 138.373 45.885 80.953 26.792 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "absolute",
              left: 12,
              top: 64,
              width: 136,
              height: 40,
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 32,
              textAlign: "center",
              lineHeight: "40px",
              letterSpacing: "-0.005em",
            }}>{props.text2 ?? "75%"}</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
      }}>{"Donate "}<span style={{ color: "rgb(23,23,23)" }}>{"$4,000"}</span>{" to reach your target."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1,
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
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>Label</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "rgb(0,159,175)",
            flexShrink: 0,
          }}>*</span>
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
          }}>(Optional)</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
              position: "absolute",
              left: 3.75,
              top: 3.75,
              width: 12.5,
              height: 12.5,
              color: "var(--icon-disabled-300)",
            }}>
              <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Help?</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 10,
          backgroundColor: "var(--bg-weak-50)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Overview</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Goal</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexGrow: 1,
            }}>Statistic</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 132,
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-warning-lighter)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={12} height={14.999} viewBox="0 0 12 14.999" fill="none" style={{
                position: "absolute",
                left: 4,
                top: 2.501,
                width: 12,
                height: 14.999,
                color: "rgb(71,108,255)",
              }}>
                <path d={"M 2.542 10.903 C 1.501 10.169 0.72 9.122 0.314 7.914 C -0.093 6.707 -0.105 5.401 0.281 4.186 C 0.666 2.972 1.428 1.911 2.456 1.158 C 3.484 0.406 4.726 0 6 0 C 7.274 0 8.516 0.406 9.544 1.158 C 10.572 1.911 11.334 2.972 11.719 4.186 C 12.105 5.401 12.093 6.707 11.686 7.914 C 11.28 9.122 10.499 10.169 9.458 10.903 L 11.02 14.473 C 11.045 14.531 11.056 14.593 11.05 14.655 C 11.045 14.717 11.025 14.777 10.99 14.83 C 10.956 14.882 10.91 14.925 10.855 14.954 C 10.8 14.984 10.738 14.999 10.676 14.999 L 1.323 14.999 C 1.261 14.999 1.2 14.984 1.145 14.954 C 1.09 14.925 1.043 14.882 1.009 14.83 C 0.975 14.778 0.954 14.718 0.949 14.656 C 0.944 14.594 0.954 14.531 0.979 14.474 L 2.541 10.903 L 2.542 10.903 Z M 3.089 6.727 C 3.252 7.375 3.627 7.95 4.154 8.361 C 4.682 8.772 5.331 8.996 6 8.996 C 6.668 8.996 7.318 8.772 7.845 8.361 C 8.372 7.95 8.747 7.375 8.91 6.727 L 7.455 6.363 C 7.375 6.688 7.187 6.977 6.924 7.183 C 6.66 7.389 6.335 7.501 6 7.501 C 5.665 7.501 5.339 7.389 5.076 7.183 C 4.812 6.977 4.625 6.688 4.544 6.363 L 3.089 6.727 L 3.089 6.727 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.text1 ?? "Public"}</span>
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
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "$8,000"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-information-lighter)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={15} height={13.500} viewBox="0 0 15 13.500" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 3.25,
                width: 15,
                height: 13.5,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 11.25 7.5 C 12.046 7.5 12.809 7.816 13.371 8.379 C 13.934 8.941 14.25 9.704 14.25 10.5 C 14.25 11.296 13.934 12.059 13.371 12.621 C 12.809 13.184 12.046 13.5 11.25 13.5 C 9.644 13.5 8.25 12.158 8.25 10.5 L 6.75 10.5 C 6.75 11.228 6.485 11.931 6.005 12.478 C 5.525 13.025 4.862 13.379 4.14 13.473 C 3.419 13.568 2.687 13.397 2.082 12.993 C 1.477 12.588 1.04 11.977 0.852 11.274 C 0.664 10.571 0.738 9.823 1.06 9.171 C 1.382 8.518 1.931 8.005 2.603 7.727 C 3.276 7.448 4.026 7.424 4.716 7.658 C 5.405 7.893 5.985 8.37 6.349 9 L 8.651 9 C 8.914 8.544 9.293 8.165 9.75 7.902 C 10.206 7.638 10.723 7.5 11.25 7.5 L 11.25 7.5 Z M 0 6.75 L 0 5.25 L 1.5 5.25 L 1.5 3 C 1.5 2.204 1.816 1.441 2.379 0.879 C 2.941 0.316 3.704 0 4.5 0 L 10.5 0 C 11.296 0 12.059 0.316 12.621 0.879 C 13.184 1.441 13.5 2.204 13.5 3 L 13.5 5.25 L 15 5.25 L 15 6.75 L 0 6.75 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.text3 ?? "Anonymous"}</span>
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
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "$4,000"}</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 148,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
          <div style={{ position: "relative", height: 124, flexGrow: 1 }}>
            <svg width={320} height={124} viewBox="0 0 320 124" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 320,
              height: 124,
              borderRadius: 6,
              color: "var(--stroke-soft-200)",
            }}>
              <path d={"M 6 0.5 L 53.333 0.5 L 53.333 -0.5 L 6 -0.5 L 6 0.5 Z M 52.833 0 L 52.833 31 L 53.833 31 L 53.833 0 L 52.833 0 Z M 53.333 30.5 L 0 30.5 L 0 31.5 L 53.333 31.5 L 53.333 30.5 Z M 0.5 31 L 0.5 6 L -0.5 6 L -0.5 31 L 0.5 31 Z M 52.833 31 L 52.833 62 L 53.833 62 L 53.833 31 L 52.833 31 Z M 53.333 61.5 L 0 61.5 L 0 62.5 L 53.333 62.5 L 53.333 61.5 Z M 0.5 62 L 0.5 31 L -0.5 31 L -0.5 62 L 0.5 62 Z M 52.833 62 L 52.833 93 L 53.833 93 L 53.833 62 L 52.833 62 Z M 53.333 92.5 L 0 92.5 L 0 93.5 L 53.333 93.5 L 53.333 92.5 Z M 0.5 93 L 0.5 62 L -0.5 62 L -0.5 93 L 0.5 93 Z M 52.833 93 L 52.833 124 L 53.833 124 L 53.833 93 L 52.833 93 Z M 53.333 123.5 L 6 123.5 L 6 124.5 L 53.333 124.5 L 53.333 123.5 Z M 0.5 118 L 0.5 93 L -0.5 93 L -0.5 118 L 0.5 118 Z M 53.333 0.5 L 106.667 0.5 L 106.667 -0.5 L 53.333 -0.5 L 53.333 0.5 Z M 106.167 0 L 106.167 31 L 107.167 31 L 107.167 0 L 106.167 0 Z M 106.667 30.5 L 53.333 30.5 L 53.333 31.5 L 106.667 31.5 L 106.667 30.5 Z M 106.167 31 L 106.167 62 L 107.167 62 L 107.167 31 L 106.167 31 Z M 106.667 61.5 L 53.333 61.5 L 53.333 62.5 L 106.667 62.5 L 106.667 61.5 Z M 106.167 62 L 106.167 93 L 107.167 93 L 107.167 62 L 106.167 62 Z M 106.667 92.5 L 53.333 92.5 L 53.333 93.5 L 106.667 93.5 L 106.667 92.5 Z M 106.167 93 L 106.167 124 L 107.167 124 L 107.167 93 L 106.167 93 Z M 106.667 123.5 L 53.333 123.5 L 53.333 124.5 L 106.667 124.5 L 106.667 123.5 Z M 106.667 0.5 L 160 0.5 L 160 -0.5 L 106.667 -0.5 L 106.667 0.5 Z M 159.5 0 L 159.5 31 L 160.5 31 L 160.5 0 L 159.5 0 Z M 160 30.5 L 106.667 30.5 L 106.667 31.5 L 160 31.5 L 160 30.5 Z M 159.5 31 L 159.5 62 L 160.5 62 L 160.5 31 L 159.5 31 Z M 160 61.5 L 106.667 61.5 L 106.667 62.5 L 160 62.5 L 160 61.5 Z M 159.5 62 L 159.5 93 L 160.5 93 L 160.5 62 L 159.5 62 Z M 160 92.5 L 106.667 92.5 L 106.667 93.5 L 160 93.5 L 160 92.5 Z M 159.5 93 L 159.5 124 L 160.5 124 L 160.5 93 L 159.5 93 Z M 160 123.5 L 106.667 123.5 L 106.667 124.5 L 160 124.5 L 160 123.5 Z M 160 0.5 L 213.333 0.5 L 213.333 -0.5 L 160 -0.5 L 160 0.5 Z M 212.833 0 L 212.833 31 L 213.833 31 L 213.833 0 L 212.833 0 Z M 213.333 30.5 L 160 30.5 L 160 31.5 L 213.333 31.5 L 213.333 30.5 Z M 212.833 31 L 212.833 62 L 213.833 62 L 213.833 31 L 212.833 31 Z M 213.333 61.5 L 160 61.5 L 160 62.5 L 213.333 62.5 L 213.333 61.5 Z M 212.833 62 L 212.833 93 L 213.833 93 L 213.833 62 L 212.833 62 Z M 213.333 92.5 L 160 92.5 L 160 93.5 L 213.333 93.5 L 213.333 92.5 Z M 212.833 93 L 212.833 124 L 213.833 124 L 213.833 93 L 212.833 93 Z M 213.333 123.5 L 160 123.5 L 160 124.5 L 213.333 124.5 L 213.333 123.5 Z M 213.333 0.5 L 266.667 0.5 L 266.667 -0.5 L 213.333 -0.5 L 213.333 0.5 Z M 266.167 0 L 266.167 31 L 267.167 31 L 267.167 0 L 266.167 0 Z M 266.667 30.5 L 213.333 30.5 L 213.333 31.5 L 266.667 31.5 L 266.667 30.5 Z M 266.167 31 L 266.167 62 L 267.167 62 L 267.167 31 L 266.167 31 Z M 266.667 61.5 L 213.333 61.5 L 213.333 62.5 L 266.667 62.5 L 266.667 61.5 Z M 266.167 62 L 266.167 93 L 267.167 93 L 267.167 62 L 266.167 62 Z M 266.667 92.5 L 213.333 92.5 L 213.333 93.5 L 266.667 93.5 L 266.667 92.5 Z M 266.167 93 L 266.167 124 L 267.167 124 L 267.167 93 L 266.167 93 Z M 266.667 123.5 L 213.333 123.5 L 213.333 124.5 L 266.667 124.5 L 266.667 123.5 Z M 266.667 0.5 L 314 0.5 L 314 -0.5 L 266.667 -0.5 L 266.667 0.5 Z M 319.5 6 L 319.5 31 L 320.5 31 L 320.5 6 L 319.5 6 Z M 320 30.5 L 266.667 30.5 L 266.667 31.5 L 320 31.5 L 320 30.5 Z M 319.5 31 L 319.5 62 L 320.5 62 L 320.5 31 L 319.5 31 Z M 320 61.5 L 266.667 61.5 L 266.667 62.5 L 320 62.5 L 320 61.5 Z M 319.5 62 L 319.5 93 L 320.5 93 L 320.5 62 L 319.5 62 Z M 320 92.5 L 266.667 92.5 L 266.667 93.5 L 320 93.5 L 320 92.5 Z M 319.5 93 L 319.5 118 L 320.5 118 L 320.5 93 L 319.5 93 Z M 314 123.5 L 266.667 123.5 L 266.667 124.5 L 314 124.5 L 314 123.5 Z M 319.5 118 C 319.5 121.038 317.038 123.5 314 123.5 L 314 124.5 C 317.59 124.5 320.5 121.59 320.5 118 L 319.5 118 Z M 6 123.5 C 2.962 123.5 0.5 121.038 0.5 118 L -0.5 118 C -0.5 121.59 2.41 124.5 6 124.5 L 6 123.5 Z M 314 0.5 C 317.038 0.5 319.5 2.962 319.5 6 L 320.5 6 C 320.5 2.41 317.59 -0.5 314 -0.5 L 314 0.5 Z M 6 -0.5 C 2.41 -0.5 -0.5 2.41 -0.5 6 L 0.5 6 C 0.5 2.962 2.962 0.5 6 0.5 L 6 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={304} height={116} viewBox="0 0 304 116" fill="none" style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 304,
              height: 116,
              color: "var(--state-warning-base)",
            }}>
              <path d={"M -0.083 115.003 C -0.633 115.049 -1.042 115.532 -0.997 116.083 C -0.951 116.633 -0.468 117.042 0.083 116.997 L -0.083 115.003 Z M 159.703 23.289 L 158.899 22.695 L 159.703 23.289 Z M 304 117 C 304.552 117 305 116.552 305 116 C 305 115.448 304.552 115 304 115 L 304 117 Z M 0.083 116.997 C 28.427 114.645 109.601 92.748 160.507 23.884 L 158.899 22.695 C 108.439 90.955 27.888 112.683 -0.083 115.003 L 0.083 116.997 Z M 160.507 23.884 C 168.4 13.207 174.985 6.755 180.628 3.536 C 186.207 0.353 190.809 0.351 194.938 2.506 C 199.167 4.713 203.04 9.252 206.895 15.487 C 210.737 21.701 214.477 29.453 218.503 37.935 C 226.531 54.848 235.667 74.603 248.873 90.11 C 262.114 105.659 279.499 117 304 117 L 304 115 C 280.231 115 263.362 104.04 250.396 88.814 C 237.395 73.547 228.369 54.055 220.31 37.077 C 216.292 28.614 212.507 20.76 208.596 14.435 C 204.698 8.132 200.59 3.2 195.863 0.733 C 191.037 -1.786 185.709 -1.666 179.637 1.798 C 173.63 5.226 166.844 11.946 158.899 22.695 L 160.507 23.884 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={304} height={84} viewBox="0 0 304 84" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(-1,0,0,1,312,40)",
              transformOrigin: "0 0",
              width: 304,
              height: 84,
              color: "var(--state-information-base)",
            }}>
              <path d={"M -0.06 83.002 C -0.611 83.035 -1.031 83.509 -0.998 84.06 C -0.965 84.611 -0.491 85.031 0.06 84.998 L -0.06 83.002 Z M 159.703 16.865 L 159.003 16.15 L 159.703 16.865 Z M 304 85 C 304.552 85 305 84.552 305 84 C 305 83.448 304.552 83 304 83 L 304 85 Z M 0.06 84.998 C 14.234 84.147 41.578 79.756 71.73 69.362 C 101.881 58.968 134.917 42.544 160.402 17.579 L 159.003 16.15 C 133.805 40.834 101.069 57.132 71.078 67.471 C 41.089 77.809 13.923 82.162 -0.06 83.002 L 0.06 84.998 Z M 160.402 17.579 C 176.201 2.103 186.688 -1.051 195.047 2.108 C 199.296 3.714 203.155 6.998 206.985 11.483 C 210.813 15.967 214.542 21.564 218.57 27.708 C 234.636 52.216 255.139 85 304 85 L 304 83 C 256.321 83 236.352 51.186 220.243 26.611 C 216.226 20.485 212.43 14.781 208.506 10.185 C 204.583 5.591 200.46 2.016 195.754 0.237 C 186.202 -3.373 174.882 0.596 159.003 16.15 L 160.402 17.579 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 201,
            top: 47,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            flexWrap: "nowrap",
          }}>
            <Tooltip11
              style={{ position: "relative", width: 94, flexShrink: 0 }}
              editText={"$1,000.00"}
              type={"🔽 bottom center"}
              size={"xs"}
              darkMode={"on"}
            />
            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
              position: "relative",
              width: 12,
              height: 12,
              overflow: "hidden",
              borderRadius: 999,
              flexShrink: 0,
              filter: "drop-shadow(0px 1px 2px rgba(10,13,20,0.03))",
              color: "var(--state-warning-base)",
            }}>
              <path d={"M 0 6 C 0 2.686 2.686 0 6 0 L 6 0 C 9.314 0 12 2.686 12 6 L 12 6 C 12 9.314 9.314 12 6 12 L 6 12 C 2.686 12 0 9.314 0 6 L 0 6 Z"} fill="rgb(249,156,28)" fillRule="nonzero" />
              <path d={"M 6 10.5 C 3.515 10.5 1.5 8.485 1.5 6 L -1.5 6 C -1.5 10.142 1.858 13.5 6 13.5 L 6 10.5 Z M 10.5 6 C 10.5 8.485 8.485 10.5 6 10.5 L 6 13.5 C 10.142 13.5 13.5 10.142 13.5 6 L 10.5 6 Z M 6 1.5 C 8.485 1.5 10.5 3.515 10.5 6 L 13.5 6 C 13.5 1.858 10.142 -1.5 6 -1.5 L 6 1.5 Z M 6 -1.5 C 1.858 -1.5 -1.5 1.858 -1.5 6 L 1.5 6 C 1.5 3.515 3.515 1.5 6 1.5 L 6 -1.5 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
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
            flexGrow: 1,
          }}>feB</span>
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
            flexGrow: 1,
          }}>MAR</span>
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
            flexGrow: 1,
          }}>APR</span>
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
            flexGrow: 1,
          }}>May</span>
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
            flexGrow: 1,
          }}>JUN</span>
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
            flexGrow: 1,
          }}>JUL</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 4px 6px 10px",
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
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{"You have donated "}<span style={{ color: "rgb(23,23,23)" }}>{"$12,000"}</span>{" in total."}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>{props.icon3 ?? <InfoCustomFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 💫 Variant=Overview
    "variant=overview": __body0,
    // figma: 💫 Variant=Goal
    "variant=goal": __body1,
    // figma: 💫 Variant=Statistic
    "variant=statistic": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DonationDetailsTabDonationProfile;

/* Figma family alias */
export const DonationDetailsTabDonationProfile11 = DonationDetailsTabDonationProfile;
