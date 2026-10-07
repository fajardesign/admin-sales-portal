import { Amazon } from './Amazon.jsx';
import { _DecorativeIcons as DecorativeIcons } from './DecorativeIcons.jsx';
import { _Mastercard2 as Mastercard2 } from './Mastercard2.jsx';
import { Shopify2 } from './Shopify2.jsx';
import { TransactionItemsRecentTransactions1 } from './TransactionItemsRecentTransactions1.jsx';
import { WalmartPay } from './WalmartPay.jsx';
import { Youtube } from '../misc-sets/Youtube.jsx';

// figma node: 3710:11511 Transaction Detail Tabs [Recent Transactions] [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function TransactionDetailTabsRecentTransactions(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "incoming" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
          width: 145,
          display: "flex",
          flexDirection: "row",
          gap: 1,
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
            }}>Incoming</span>
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
            }}>Outgoing</span>
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
            }}>Pending</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--bg-white-0)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "8px 0px 8px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 0 13.5 L 15 13.5 L 15 15 L 0 15 L 0 13.5 Z M 1.5 7.5 L 3 7.5 L 3 12.75 L 1.5 12.75 L 1.5 7.5 Z M 5.25 7.5 L 6.75 7.5 L 6.75 12.75 L 5.25 12.75 L 5.25 7.5 Z M 8.25 7.5 L 9.75 7.5 L 9.75 12.75 L 8.25 12.75 L 8.25 7.5 Z M 12 7.5 L 13.5 7.5 L 13.5 12.75 L 12 12.75 L 12 7.5 Z M 0 3.75 L 7.5 0 L 15 3.75 L 15 6.75 L 0 6.75 L 0 3.75 Z M 1.5 4.677 L 1.5 5.25 L 13.5 5.25 L 13.5 4.677 L 7.5 1.677 L 1.5 4.677 Z M 7.5 4.5 C 7.301 4.5 7.11 4.421 6.97 4.28 C 6.829 4.14 6.75 3.949 6.75 3.75 C 6.75 3.551 6.829 3.36 6.97 3.22 C 7.11 3.079 7.301 3 7.5 3 C 7.699 3 7.89 3.079 8.03 3.22 C 8.171 3.36 8.25 3.551 8.25 3.75 C 8.25 3.949 8.171 4.14 8.03 4.28 C 7.89 4.421 7.699 4.5 7.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
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
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Salary Deposit</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Monthly salary from Apex Finance</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-end",
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
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>$3,500.00</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Sep 18</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "1px 1px 1px 1px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 18,
              height: 18,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
                position: "absolute",
                left: 6.375,
                top: 4.704,
                width: 5.25,
                height: 8.591,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--bg-white-0)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "8px 0px 8px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
              <svg width={14.030} height={13.500} viewBox="0 0 14.030 13.500" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 3.25,
                width: 14.03,
                height: 13.5,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 1.5 0 L 1.5 12 L 13.5 12 L 13.5 13.5 L 0 13.5 L 0 0 L 1.5 0 Z M 12.97 2.47 L 14.03 3.53 L 9.75 7.81 L 7.5 5.561 L 4.28 8.78 L 3.22 7.72 L 7.5 3.439 L 9.75 5.689 L 12.97 2.47 L 12.97 2.47 Z"} fill="currentColor" fillRule="nonzero" />
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
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Stock Dividend</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Payment from stock investments.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-end",
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
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>$846.14</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Sep 18</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "1px 1px 1px 1px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 18,
              height: 18,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
                position: "absolute",
                left: 6.375,
                top: 4.704,
                width: 5.25,
                height: 8.591,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Rental Income"}
          editDescription={"Rental payment from Mr. Dudley."}
          text1={"$100.00"}
          text2={"Sep 17"}
          icon1={<DecorativeIcons type={"rent"} style={{ width: "100%", height: "100%" }} />}
          type={"💳 payment icons"}
          state={"default"}
        />
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Refund from Amazon"}
          editDescription={"Refund of Order No #124235"}
          pickBrand={<Amazon />}
          rightIcon={true}
          text1={"$36.24"}
          text2={"Sep 15"}
          type={"🎗️ brand"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
            }}>Incoming</span>
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
            }}>Outgoing</span>
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
            }}>Pending</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Baroque Painting"}
          editDescription={"Order No #234122"}
          pickBrand={<Shopify2 />}
          text1={"-$124.00"}
          text2={"Sep 18"}
          type={"🎗️ brand"}
          state={"default"}
        />
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Mastercard Payment"}
          editDescription={"Monthly Credit Card Payment"}
          pickBrand={<Mastercard2 />}
          text1={"-$963.62"}
          text2={"Sep 15"}
          type={"🎗️ brand"}
          state={"default"}
        />
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 12,
          backgroundColor: "var(--bg-white-0)",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          padding: "8px 0px 8px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
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
              <svg width={12.966} height={12.968} viewBox="0 0 12.966 12.968" fill="none" style={{
                position: "absolute",
                left: 3.254,
                top: 3.301,
                width: 12.966,
                height: 12.968,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 1.744 0.153 C 2.244 -0.026 2.787 -0.048 3.3 0.088 C 3.814 0.224 4.273 0.513 4.619 0.917 C 4.965 1.32 5.18 1.819 5.236 2.347 C 5.293 2.875 5.187 3.408 4.934 3.875 L 12.966 11.907 L 11.906 12.968 L 3.873 4.935 C 3.406 5.187 2.873 5.292 2.346 5.235 C 1.818 5.178 1.32 4.963 0.917 4.617 C 0.514 4.272 0.225 3.812 0.088 3.3 C -0.048 2.787 -0.026 2.244 0.152 1.744 L 1.829 3.422 C 1.933 3.529 2.057 3.615 2.195 3.674 C 2.332 3.733 2.479 3.764 2.629 3.765 C 2.778 3.767 2.926 3.738 3.065 3.682 C 3.203 3.625 3.328 3.542 3.434 3.436 C 3.54 3.33 3.623 3.205 3.68 3.066 C 3.736 2.928 3.765 2.78 3.764 2.631 C 3.762 2.481 3.731 2.334 3.672 2.196 C 3.613 2.059 3.528 1.935 3.42 1.831 L 1.743 0.152 L 1.744 0.153 Z M 9.519 1.566 L 11.906 0.24 L 12.966 1.3 L 11.64 3.687 L 10.314 3.952 L 8.724 5.543 L 7.663 4.482 L 9.254 2.892 L 9.519 1.566 L 9.519 1.566 Z M 4.481 7.665 L 5.541 8.725 L 1.564 12.702 C 1.429 12.838 1.247 12.917 1.055 12.923 C 0.864 12.928 0.677 12.861 0.534 12.733 C 0.391 12.606 0.302 12.429 0.286 12.238 C 0.269 12.047 0.326 11.857 0.445 11.707 L 0.503 11.642 L 4.481 7.665 Z"} fill="currentColor" fillRule="nonzero" />
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
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Car Repairing Expenses</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>RepairMyCar Co.</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-end",
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
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>-$640.00</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Sep 08</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "1px 1px 1px 1px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 18,
              height: 18,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
                position: "absolute",
                left: 6.375,
                top: 4.704,
                width: 5.25,
                height: 8.591,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Grocery Shopping"}
          editDescription={"Walmart Canada"}
          pickBrand={<WalmartPay />}
          rightIcon={true}
          text1={"-$146.31"}
          text2={"Sep 04"}
          type={"🎗️ brand"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
            }}>Incoming</span>
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
            }}>Outgoing</span>
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
            }}>Pending</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Electricity Bill"}
          editDescription={"3 days later"}
          text1={"-$86.00"}
          text2={"Sep 21"}
          icon1={<DecorativeIcons type={"electricity"} style={{ width: "100%", height: "100%" }} />}
          type={"💳 payment icons"}
          state={"default"}
        />
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Internet Service"}
          editDescription={"4 days later"}
          text1={"-$46.00"}
          text2={"Sep 22"}
          icon1={<DecorativeIcons type={"internet"} style={{ width: "100%", height: "100%" }} />}
          type={"💳 payment icons"}
          state={"default"}
        />
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"Spotify Premium"}
          editDescription={"5 days later"}
          text1={"-$19.99"}
          text2={"Sep 23"}
          type={"🎗️ brand"}
          state={"default"}
        />
        <TransactionItemsRecentTransactions1
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          editTitle={"YouTube Premium"}
          editDescription={"8 days later"}
          pickBrand={<Youtube />}
          text1={"-$14.99"}
          text2={"Sep 24"}
          type={"🎗️ brand"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: 💫 Variant=Incoming
    "variant=incoming": __body0,
    // figma: 💫 Variant=Outgoing
    "variant=outgoing": __body1,
    // figma: 💫 Variant=Pending
    "variant=pending": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TransactionDetailTabsRecentTransactions;

/* Figma family alias */
export const TransactionDetailTabsRecentTransactions11 = TransactionDetailTabsRecentTransactions;
