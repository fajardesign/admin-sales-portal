// figma node: 3789:9678 Gauge Bar [Time Off] [1.1] (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "percentage=" + __venc(p.percentage);

export function GaugeBarTimeOff1(_p = {}) {
  const props = { ..._p, percentage: _p.percentage ?? "0%" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      overflow: "hidden",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      position: "relative",
      color: "var(--bg-weak-50)",
      ...props.style,
    }}>
      <svg width={208} height={104} viewBox="0 0 208 104" fill="none" style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 104,
        borderRadius: 2,
      }}>
        <path d={"M 2 104 C 0.895 104 -0.002 103.104 0.019 102 C 0.269 89.024 2.945 76.203 7.917 64.201 C 13.143 51.583 20.804 40.118 30.461 30.461 C 40.118 20.804 51.583 13.143 64.201 7.917 C 76.819 2.69 90.343 0 104 0 C 117.657 0 131.181 2.69 143.799 7.917 C 156.417 13.143 167.882 20.804 177.539 30.461 C 187.196 40.118 194.857 51.583 200.083 64.201 C 205.055 76.203 207.731 89.024 207.981 102 C 208.002 103.104 207.105 104 206 104 L 185.04 104 C 183.935 104 183.043 103.104 183.015 102 C 182.769 92.302 180.74 82.726 177.023 73.753 C 173.051 64.163 167.229 55.45 159.89 48.11 C 152.55 40.771 143.837 34.949 134.247 30.977 C 124.658 27.004 114.38 24.96 104 24.96 C 93.62 24.96 83.342 27.004 73.753 30.977 C 64.163 34.949 55.45 40.771 48.11 48.11 C 40.771 55.45 34.949 64.163 30.977 73.753 C 27.26 82.726 25.231 92.302 24.985 102 C 24.957 103.104 24.065 104 22.96 104 L 2 104 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 208,
        borderRadius: "50%",
        backgroundColor: "var(--primary-base)",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 72,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 32,
          textAlign: "center",
          lineHeight: "40px",
          letterSpacing: "-0.005em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "0"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.040em",
          color: "var(--text-disabled-300)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OUT OF 20"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      overflow: "hidden",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      position: "relative",
      color: "var(--bg-weak-50)",
      ...props.style,
    }}>
      <svg width={208} height={104} viewBox="0 0 208 104" fill="none" style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 104,
        borderRadius: 2,
      }}>
        <path d={"M 2 104 C 0.895 104 -0.002 103.104 0.019 102 C 0.269 89.024 2.945 76.203 7.917 64.201 C 13.143 51.583 20.804 40.118 30.461 30.461 C 40.118 20.804 51.583 13.143 64.201 7.917 C 76.819 2.69 90.343 0 104 0 C 117.657 0 131.181 2.69 143.799 7.917 C 156.417 13.143 167.882 20.804 177.539 30.461 C 187.196 40.118 194.857 51.583 200.083 64.201 C 205.055 76.203 207.731 89.024 207.981 102 C 208.002 103.104 207.105 104 206 104 L 185.04 104 C 183.935 104 183.043 103.104 183.015 102 C 182.769 92.302 180.74 82.726 177.023 73.753 C 173.051 64.163 167.229 55.45 159.89 48.11 C 152.55 40.771 143.837 34.949 134.247 30.977 C 124.658 27.004 114.38 24.96 104 24.96 C 93.62 24.96 83.342 27.004 73.753 30.977 C 64.163 34.949 55.45 40.771 48.11 48.11 C 40.771 55.45 34.949 64.163 30.977 73.753 C 27.26 82.726 25.231 92.302 24.985 102 C 24.957 103.104 24.065 104 22.96 104 L 2 104 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 208,
        borderRadius: "50%",
        backgroundColor: "var(--primary-base)",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 72,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 32,
          textAlign: "center",
          lineHeight: "40px",
          letterSpacing: "-0.005em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "10"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.040em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OUT OF 20"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      overflow: "hidden",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      position: "relative",
      color: "var(--bg-weak-50)",
      ...props.style,
    }}>
      <svg width={208} height={104} viewBox="0 0 208 104" fill="none" style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 104,
        borderRadius: 2,
      }}>
        <path d={"M 2 104 C 0.895 104 -0.002 103.104 0.019 102 C 0.269 89.024 2.945 76.203 7.917 64.201 C 13.143 51.583 20.804 40.118 30.461 30.461 C 40.118 20.804 51.583 13.143 64.201 7.917 C 76.819 2.69 90.343 0 104 0 C 117.657 0 131.181 2.69 143.799 7.917 C 156.417 13.143 167.882 20.804 177.539 30.461 C 187.196 40.118 194.857 51.583 200.083 64.201 C 205.055 76.203 207.731 89.024 207.981 102 C 208.002 103.104 207.105 104 206 104 L 185.04 104 C 183.935 104 183.043 103.104 183.015 102 C 182.769 92.302 180.74 82.726 177.023 73.753 C 173.051 64.163 167.229 55.45 159.89 48.11 C 152.55 40.771 143.837 34.949 134.247 30.977 C 124.658 27.004 114.38 24.96 104 24.96 C 93.62 24.96 83.342 27.004 73.753 30.977 C 64.163 34.949 55.45 40.771 48.11 48.11 C 40.771 55.45 34.949 64.163 30.977 73.753 C 27.26 82.726 25.231 92.302 24.985 102 C 24.957 103.104 24.065 104 22.96 104 L 2 104 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 208,
        borderRadius: "50%",
        backgroundColor: "var(--primary-base)",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 72,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 32,
          textAlign: "center",
          lineHeight: "40px",
          letterSpacing: "-0.005em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "15"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.040em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OUT OF 20"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 160,
      overflow: "hidden",
      borderTop: "1px solid var(--stroke-soft-200)",
      borderRight: "1px solid var(--stroke-soft-200)",
      borderBottom: "1px solid var(--stroke-soft-200)",
      borderLeft: "1px solid var(--stroke-soft-200)",
      position: "relative",
      color: "var(--bg-weak-50)",
      ...props.style,
    }}>
      <svg width={208} height={104} viewBox="0 0 208 104" fill="none" style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 104,
        borderRadius: 2,
      }}>
        <path d={"M 2 104 C 0.895 104 -0.002 103.104 0.019 102 C 0.269 89.024 2.945 76.203 7.917 64.201 C 13.143 51.583 20.804 40.118 30.461 30.461 C 40.118 20.804 51.583 13.143 64.201 7.917 C 76.819 2.69 90.343 0 104 0 C 117.657 0 131.181 2.69 143.799 7.917 C 156.417 13.143 167.882 20.804 177.539 30.461 C 187.196 40.118 194.857 51.583 200.083 64.201 C 205.055 76.203 207.731 89.024 207.981 102 C 208.002 103.104 207.105 104 206 104 L 185.04 104 C 183.935 104 183.043 103.104 183.015 102 C 182.769 92.302 180.74 82.726 177.023 73.753 C 173.051 64.163 167.229 55.45 159.89 48.11 C 152.55 40.771 143.837 34.949 134.247 30.977 C 124.658 27.004 114.38 24.96 104 24.96 C 93.62 24.96 83.342 27.004 73.753 30.977 C 64.163 34.949 55.45 40.771 48.11 48.11 C 40.771 55.45 34.949 64.163 30.977 73.753 C 27.26 82.726 25.231 92.302 24.985 102 C 24.957 103.104 24.065 104 22.96 104 L 2 104 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 56,
        top: 28,
        width: 208,
        height: 208,
        borderRadius: "50%",
        backgroundColor: "var(--primary-base)",
      }} />
      <div style={{
        position: "absolute",
        left: 16,
        top: 72,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 32,
          textAlign: "center",
          lineHeight: "40px",
          letterSpacing: "-0.005em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "20"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "0.040em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OUT OF 20"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 💯 Percentage=0%
    "percentage=0%25": __body0,
    // figma: 💯 Percentage=25%
    "percentage=25%25": __body1,
    // figma: 💯 Percentage=50%
    "percentage=50%25": __body1,
    // figma: 💯 Percentage=75%
    "percentage=75%25": __body2,
    // figma: 💯 Percentage=100%
    "percentage=100%25": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default GaugeBarTimeOff1;

/* Figma family alias */
export const GaugeBarTimeOff11 = GaugeBarTimeOff1;
