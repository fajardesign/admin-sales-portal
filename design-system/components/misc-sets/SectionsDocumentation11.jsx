import { Buttons11NeutralStroke17 } from './Buttons11NeutralStroke17.jsx';
import { _GlobalLine as GlobalLine } from '../widget-sets/GlobalLine.jsx';
import { LemonSqueezy } from './LemonSqueezy.jsx';
import { MailLine } from './MailLine.jsx';
import { Notion } from './Notion.jsx';

// figma node: 2675:380 Sections [Documentation] [1.1] (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function SectionsDocumentation11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", docs: _p.docs ?? true, links: _p.links ?? false, editSubheading: _p.editSubheading ?? "AlignUI Design System", editTitle: _p.editTitle ?? "Support & Feedback", editDescription: _p.editDescription ?? "If you need help or have questions about AlignUI, don't hesitate to get in touch with our dedicated support team. We're here to assist you!" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 980,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 56,
      padding: "72px 132px 72px 132px",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 44,
          height: 44,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={44} height={44} viewBox="0 0 44 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 44,
            height: 44,
            color: "rgb(240,80,35)",
          }}>
            <path d={"M 31.9 0 L 12.1 0 C 5.417 0 0 5.417 0 12.1 L 0 31.9 C 0 38.583 5.417 44 12.1 44 L 31.9 44 C 38.583 44 44 38.583 44 31.9 L 44 12.1 C 44 5.417 38.583 0 31.9 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={26.767} height={21.817} viewBox="0 0 26.767 21.817" fill="none" style={{
            position: "absolute",
            left: 8.617,
            top: 11.092,
            width: 26.767,
            height: 21.817,
            color: "rgb(255,255,255)",
          }}>
            <path d={"M 4.684 1.023 L 4.684 3.75 C 4.684 4.315 4.235 4.772 3.68 4.772 L 1.004 4.772 C 0.449 4.772 0 5.23 0 5.795 L 0 16.363 C 0 19.375 2.396 21.817 5.353 21.817 L 16.452 21.817 C 16.629 21.817 16.8 21.745 16.925 21.617 L 20.842 17.626 C 21.053 17.412 21.414 17.563 21.414 17.867 L 21.414 21.135 C 21.414 21.512 21.713 21.817 22.083 21.817 L 26.098 21.817 C 26.467 21.817 26.767 21.512 26.767 21.135 L 26.767 5.454 C 26.766 2.442 24.369 0 21.413 0 L 5.688 0 C 5.133 0 4.684 0.458 4.684 1.023 Z M 20.074 16.363 L 6.691 16.363 C 5.952 16.363 5.353 15.752 5.353 14.999 L 5.353 6.818 C 5.353 6.064 5.952 5.454 6.691 5.454 L 20.074 5.454 C 20.814 5.454 21.413 6.064 21.413 6.818 L 21.413 14.999 C 21.413 15.752 20.814 16.363 20.074 16.363 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <GlobalLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            textDecoration: "underline",
            flexShrink: 0,
          }}>{props.text1 ?? "www.alignui.com"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "6px 12px 6px 12px",
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
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>{props.editSubheading}</span>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "0.060em",
            color: "var(--text-strong-950)",
            textTransform: "uppercase",
            flexShrink: 0,
          }}>{props.editTitle}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 18,
          lineHeight: "32px",
          letterSpacing: "-0.015em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
      </div>
      {props.links && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "24px 8px 24px 8px",
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
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon2 ?? <MailLine />}</div>
          </div>
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
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              letterSpacing: "0.040em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Email"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "24px",
              letterSpacing: "-0.011em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "hi@alignui.com"}</span>
          </div>
          <Buttons11NeutralStroke17
            style={{ position: "relative", flexShrink: 0 }}
            leftIcon={false}
            rightIcon={false}
            editText={"Contact via"}
          />
        </div>
        <svg width={152} height={1} viewBox="0 -0.500 152 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,238.667,24)",
          transformOrigin: "0 0",
          width: 152,
          height: 1,
          color: "var(--stroke-soft-200)",
        }}>
          <path d={"M 0 -0.5 L 0 0 L 152 0 L 152 -0.5 L 152 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon3 ?? <LemonSqueezy style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          </div>
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
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              letterSpacing: "0.040em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "BUY FROM"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "24px",
              letterSpacing: "-0.011em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>LemonSqueezy</span>
          </div>
          <Buttons11NeutralStroke17
            style={{
              position: "relative",
              width: 91,
              height: 32,
              flexShrink: 0,
            }}
            leftIcon={false}
            rightIcon={false}
            editText={"Buy Now"}
          />
        </div>
        <svg width={152} height={1} viewBox="0 -0.500 152 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,477.333,24)",
          transformOrigin: "0 0",
          width: 152,
          height: 1,
          color: "var(--stroke-soft-200)",
        }}>
          <path d={"M 0 -0.5 L 0 0 L 152 0 L 152 -0.5 L 152 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "8px 8px 8px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon4 ?? <Notion style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
          </div>
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
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              letterSpacing: "0.040em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>DOCS</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              lineHeight: "24px",
              letterSpacing: "-0.011em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Notion</span>
          </div>
          <Buttons11NeutralStroke17
            style={{ position: "relative", width: 110, flexShrink: 0 }}
            leftIcon={false}
            rightIcon={false}
            editText={"Read docs"}
          />
        </div>
      </div>
      )}
      {props.docs && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.pickBrand ?? <Notion style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
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
        }}>Documentation</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>→</span>
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
        }}>Read on Notion</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Default
    "type=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SectionsDocumentation11;
