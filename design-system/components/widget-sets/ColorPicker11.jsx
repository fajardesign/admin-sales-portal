import { _ArrowDownSLine as ArrowDownSLine } from './ArrowDownSLine.jsx';
import { _ColorDots11 as ColorDots11 } from './ColorDots11.jsx';
import { ColorSliders11 } from '../misc-sets/ColorSliders11.jsx';
import { ColorSpectrum11 } from './ColorSpectrum11.jsx';
import { _SipLine as SipLine } from './SipLine.jsx';

// figma node: 4456:115795 Color Picker [1.1]
export function ColorPicker11(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 272,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
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
        gap: 12,
        padding: "16px 16px 16px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ColorSpectrum11 style={{
            position: "relative",
            height: 232,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <ColorSliders11
          style={{
            position: "relative",
            height: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"hue slider"}
        />
        <ColorSliders11
          style={{
            position: "relative",
            height: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"opacity"}
        />
        <div style={{
          position: "relative",
          height: 56,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 2,
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
            }}>{props.text1 ?? "Hex"}</span>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon1 ?? <ArrowDownSLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 8,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
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
              gap: 8,
              padding: "6px 6px 6px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  color: "rgb(14,18,27)",
                }}>{props.icon2 ?? <SipLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              borderTop: "1px solid var(--stroke-soft-200)",
              borderRight: "1px solid var(--stroke-soft-200)",
              borderBottom: "1px solid var(--stroke-soft-200)",
              borderLeft: "1px solid var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "6px 10px 6px 10px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-strong-950)",
                flexGrow: 1,
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "335CFF"}</span>
            </div>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-white-0)",
              display: "flex",
              flexDirection: "row",
              gap: 8,
              padding: "6px 10px 6px 10px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
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
              }}>{props.text3 ?? "100%"}</span>
            </div>
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
        }}>{props.text4 ?? "Recommended Colors"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "wrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon3 ?? <ColorDots11 color={"🩶 gray"} state={"default"} />}</div>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon4 ?? <ColorDots11 color={"💙 blue"} state={"selected"} />}</div>
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"🧡 orange"}
            state={"default"}
          />
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"💔 red"}
            state={"default"}
          />
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"💚 green"}
            state={"default"}
          />
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"💛 yellow"}
            state={"default"}
          />
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"💜 purple"}
            state={"default"}
          />
          <ColorDots11
            style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}
            color={"🩵 sky"}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
}
export default ColorPicker11;
