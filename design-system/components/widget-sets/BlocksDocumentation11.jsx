import { _GlobalLine as GlobalLine } from './GlobalLine.jsx';

// figma node: 166639:32377 Blocks [Documentation] [1.1]
export function BlocksDocumentation11(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1440,
      borderRadius: 40,
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
            flexShrink: 0,
          }}>{props.text1 ?? "pro.alignui.com/blocks/accordion"}</span>
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
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
              letterSpacing: "0.060em",
              color: "var(--text-sub-600)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>{props.text2 ?? "accordıon"}</span>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 56,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "64px",
            letterSpacing: "-0.010em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text3 ?? "Blocks"}</span>
        </div>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "32px",
            letterSpacing: "-0.015em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text4 ?? "Speed up your project with components designed for instant implementation"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "32px",
            letterSpacing: "-0.015em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>→</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 18,
            whiteSpace: "nowrap",
            lineHeight: "32px",
            letterSpacing: "-0.015em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>Get Premium Blocks</span>
        </div>
      </div>
    </div>
  );
}
export default BlocksDocumentation11;
