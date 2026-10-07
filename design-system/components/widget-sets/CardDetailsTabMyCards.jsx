import { CreditCardsMyCards1 } from './CreditCardsMyCards1.jsx';

// figma node: 3931:6350 Card Details Tab [My Cards] [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function CardDetailsTabMyCards(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "virtual card" };
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
              whiteSpace: "pre-wrap",
            }}>{"Virtual "}<span style={{ color: "rgb(14,18,27)" }}>{"(2)"}</span></span>
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
            }}>Physical</span>
          </div>
        </div>
      </div>
      <CreditCardsMyCards1
        style={{
          position: "relative",
          height: 188,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"virtual card"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Card Number"}</span>
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
          }}>{props.text2 ?? "• • • •  1234"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Expiry Date"}</span>
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
          }}>{props.text4 ?? "06/27"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>CVC</span>
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
          }}>• • •</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>Spending Limit</span>
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
          }}>$12,000.00</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
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
              whiteSpace: "pre-wrap",
            }}>{"Virtual "}<span style={{ color: "rgb(14,18,27)" }}>{"(2)"}</span></span>
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
            }}>Physical</span>
          </div>
        </div>
      </div>
      <CreditCardsMyCards1
        style={{
          position: "relative",
          height: 188,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"physical card"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Card Number"}</span>
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
          }}>{props.text2 ?? "• • • •  3456"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Expiry Date"}</span>
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
          }}>{props.text4 ?? "08/28"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>CVC</span>
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
          }}>• • •</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>Spending Limit</span>
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
          }}>$24,000.00</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 💫 Variant=Virtual Card
    "variant=virtual card": __body0,
    // figma: 💫 Variant=Physical Card
    "variant=physical card": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CardDetailsTabMyCards;

/* Figma family alias */
export const CardDetailsTabMyCards11 = CardDetailsTabMyCards;
