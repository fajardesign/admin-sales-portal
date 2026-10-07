import { HeroImagesDocumentation } from './HeroImagesDocumentation.jsx';
import { React } from './React.jsx';
import { Youtube } from './Youtube.jsx';

// figma node: 594:10 Hero [Documentation] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function HeroDocumentation(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", editText: _p.editText ?? "Technical features and capabilities of the Accordion component" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 540,
      height: 900,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 56,
      padding: "100px 100px 100px 100px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Overview"}</span>
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
        }}>{props.text2 ?? "Description"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.011em",
        color: "var(--text-sub-600)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
      }}>{props.text3 ?? "The Color Palette is a fundamental aspect of our design system that empowers you to create visually captivating and harmonious interfaces. It serves as the foundation for consistent color usage throughout your designs, ensuring a coherent and appealing visual identity.\n\nAdditionally, the Color Palette enables you to streamline your design workflow by offering pre-defined color tokens that carry specific meanings and roles. This standardized approach simplifies the process of selecting and applying colors, fostering consistency and reducing the risk of color-related inconsistencies."}</span>
      <svg height={1} viewBox="0 -0.500 340 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--stroke-soft-200)",
      }}>
        <path d={"M 0 0 L 340 0 L 340 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            color: "var(--bg-soft-200)",
          }}>
            <path d={"M 14.5 0 L 5.5 0 C 2.462 0 0 2.462 0 5.5 L 0 14.5 C 0 17.538 2.462 20 5.5 20 L 14.5 20 C 17.538 20 20 17.538 20 14.5 L 20 5.5 C 20 2.462 17.538 0 14.5 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={12.269} height={10} viewBox="0 0 12.269 10" fill="none" style={{
            position: "absolute",
            left: 3.866,
            top: 5,
            width: 12.269,
            height: 10,
            color: "var(--icon-sub-600)",
          }}>
            <path d={"M 2.147 0.469 L 2.147 1.719 C 2.147 1.978 1.941 2.187 1.687 2.187 L 0.46 2.187 C 0.206 2.187 0 2.397 0 2.656 L 0 7.5 C 0 8.881 1.098 10 2.454 10 L 7.541 10 C 7.622 10 7.7 9.967 7.758 9.909 L 9.553 8.079 C 9.65 7.981 9.815 8.05 9.815 8.19 L 9.815 9.688 C 9.815 9.86 9.952 10 10.122 10 L 11.962 10 C 12.132 10 12.269 9.86 12.269 9.688 L 12.269 2.5 C 12.269 1.12 11.17 0 9.815 0 L 2.607 0 C 2.353 0 2.147 0.21 2.147 0.469 Z M 9.201 7.5 L 3.067 7.5 C 2.728 7.5 2.454 7.22 2.454 6.875 L 2.454 3.125 C 2.454 2.78 2.728 2.5 3.067 2.5 L 9.201 2.5 C 9.54 2.5 9.815 2.78 9.815 3.125 L 9.815 6.875 C 9.815 7.22 9.54 7.5 9.201 7.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
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
        }}>{props.text4 ?? "Guide & Best Practices"}</span>
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
        }}>Color Palette</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 900,
      height: 900,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "column",
      padding: "100px 100px 100px 100px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "core elements"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 56,
          textAlign: "center",
          lineHeight: "64px",
          letterSpacing: "-0.010em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Color Palette"}</span>
      </div>
      <HeroImagesDocumentation
        style={{
          position: "relative",
          width: 668,
          height: 304,
          flexShrink: 0,
        }}
        image={"01-color palette"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
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
            }}>{props.icon1 ?? <Youtube style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
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
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text3 ?? "Learn more about Color Palette"}</span>
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
          }}>{props.text4 ?? "Youtube Channel"}</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 540,
      height: 900,
      backgroundColor: "var(--bg-white-0)",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 56,
      padding: "100px 100px 100px 100px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--stroke-soft-200)",
      ...props.style,
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "0.060em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Free component"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 56,
          lineHeight: "64px",
          letterSpacing: "-0.010em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Code Library"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "24px",
        letterSpacing: "-0.011em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editText}</span>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Radix UI Integration"}</span>
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
          }}>{props.text4 ?? "Built on Radix UI's accessible primitives"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Polymorphic Components</span>
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
          }}>Customizable elements with 'as' prop support</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Built with React</span>
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
          }}>Built with modern React architecture</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Styled with Tailwind</span>
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
          }}>Built-in animations and responsive styles</span>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 340 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 0 L 340 0 L 340 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
          }}>{props.icon1 ?? <React style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
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
        }}>View in Code Library</span>
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
        }}>Learn More</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Default
    "type=default": __body0,
    // figma: 🧩 Type=Hero
    "type=hero": __body1,
    // figma: 🧩 Type=Spotlight
    "type=spotlight": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeroDocumentation;
