import { Apex } from '../brand-sets/Apex.jsx';
import { ChipsMyCards11 } from './ChipsMyCards11.jsx';
import { _Mastercard2 as Mastercard2 } from './Mastercard2.jsx';
import { _StatusBadge11Completed as StatusBadge11Completed } from './StatusBadge11Completed.jsx';
import { _WifiLine as WifiLine } from './WifiLine.jsx';

// figma node: 3027:8986 Credit Cards [My Cards] [1.1] (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function CreditCardsMyCards1(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "virtual card", switch: _p.switch ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 188,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      position: "relative",
      color: "var(--stroke-soft-200)",
      ...props.style,
    }}>
      <svg width={316} height={209} viewBox="0 0 316 209" fill="none" style={{
        position: "absolute",
        left: 226,
        top: -141,
        width: 316,
        height: 209,
        borderRadius: 10.734055519104004,
      }}>
        <path d={"M 306.263 16.251 L 307.121 16.765 L 306.263 16.251 Z M 118.971 10.434 L 118.113 9.92 L 118.971 10.434 Z M 137.386 1 L 297.055 1 L 297.055 -1 L 137.386 -1 L 137.386 1 Z M 305.405 15.737 L 196.172 198.052 L 197.887 199.08 L 307.121 16.765 L 305.405 15.737 Z M 178.614 208 L 18.945 208 L 18.945 210 L 178.614 210 L 178.614 208 Z M 10.595 193.263 L 119.828 10.948 L 118.113 9.92 L 8.879 192.235 L 10.595 193.263 Z M 18.945 208 C 11.381 208 6.707 199.751 10.595 193.263 L 8.879 192.235 C 4.193 200.056 9.827 210 18.945 210 L 18.945 208 Z M 196.172 198.052 C 192.474 204.223 185.808 208 178.614 208 L 178.614 210 C 186.511 210 193.828 205.854 197.887 199.08 L 196.172 198.052 Z M 297.055 1 C 304.619 1 309.293 9.249 305.405 15.737 L 307.121 16.765 C 311.807 8.944 306.173 -1 297.055 -1 L 297.055 1 Z M 137.386 -1 C 129.489 -1 122.172 3.146 118.113 9.92 L 119.828 10.948 C 123.526 4.777 130.192 1 137.386 1 L 137.386 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={316} height={209} viewBox="0 0 316 209" fill="none" style={{
        position: "absolute",
        left: 264,
        top: -80,
        width: 316,
        height: 209,
        borderRadius: 10.734055519104004,
      }}>
        <path d={"M 306.263 16.251 L 307.121 16.765 L 306.263 16.251 Z M 118.971 10.434 L 118.113 9.92 L 118.971 10.434 Z M 137.386 1 L 297.055 1 L 297.055 -1 L 137.386 -1 L 137.386 1 Z M 305.405 15.737 L 196.172 198.052 L 197.887 199.08 L 307.121 16.765 L 305.405 15.737 Z M 178.614 208 L 18.945 208 L 18.945 210 L 178.614 210 L 178.614 208 Z M 10.595 193.263 L 119.828 10.948 L 118.113 9.92 L 8.879 192.235 L 10.595 193.263 Z M 18.945 208 C 11.381 208 6.707 199.751 10.595 193.263 L 8.879 192.235 C 4.193 200.056 9.827 210 18.945 210 L 18.945 208 Z M 196.172 198.052 C 192.474 204.223 185.808 208 178.614 208 L 178.614 210 C 186.511 210 193.828 205.854 197.887 199.08 L 196.172 198.052 Z M 297.055 1 C 304.619 1 309.293 9.249 305.405 15.737 L 307.121 16.765 C 311.807 8.944 306.173 -1 297.055 -1 L 297.055 1 Z M 137.386 -1 C 129.489 -1 122.172 3.146 118.113 9.92 L 119.828 10.948 C 123.526 4.777 130.192 1 137.386 1 L 137.386 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "absolute",
          left: 20,
          top: 20,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      <div style={{ position: "absolute", left: 100, top: 24 }}>{props.icon2 ?? <StatusBadge11Completed editBadge={"Active"} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          transform: "matrix(0,1,-1,0,84,24)",
          transformOrigin: "0 0",
          color: "rgb(14,18,27)",
        }}>{props.icon3 ?? <WifiLine />}</div>
      {props.switch && (
      <div style={{
        position: "absolute",
        left: 256,
        top: 148,
        width: 48,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "space-between",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={7.000} height={11.455} viewBox="0 0 7.000 11.455" fill="none" style={{
              position: "absolute",
              left: 8.5,
              top: 6.271,
              width: 7,
              height: 11.455,
              color: "var(--icon-strong-950)",
            }}>
              <path d={"M 2.545 5.728 L 7 10.183 L 5.728 11.455 L 0 5.728 L 5.728 0 L 7 1.273 L 2.545 5.728 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 16,
            height: 16,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={7.000} height={11.455} viewBox="0 0 7.000 11.455" fill="none" style={{
              position: "absolute",
              left: 8.5,
              top: 6.271,
              width: 7,
              height: 11.455,
              color: "var(--icon-strong-950)",
            }}>
              <path d={"M 4.455 5.728 L 0 1.273 L 1.273 0 L 7 5.728 L 1.273 11.455 L 0 10.183 L 4.455 5.728 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      )}
      <span style={{
        position: "absolute",
        left: 20,
        top: 130,
        width: 167,
        height: 40,
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-strong-950)",
      }}>{props.text1 ?? "$16,058.94"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 106,
        width: 98,
        height: 24,
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 24,
        whiteSpace: "nowrap",
        lineHeight: "32px",
        color: "var(--text-sub-600)",
      }}>{props.text2 ?? "Savings Card"}</span>
      <Mastercard2 style={{
          position: "absolute",
          left: 268,
          top: 20,
          width: 32,
          height: 32,
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 188,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-strong-950)",
      position: "relative",
      color: "var(--state-faded-dark)",
      ...props.style,
    }}>
      <svg width={316} height={209} viewBox="0 0 316 209" fill="none" style={{
        position: "absolute",
        left: 226,
        top: -141,
        width: 316,
        height: 209,
        borderRadius: 10.734055519104004,
      }}>
        <path d={"M 306.263 16.251 L 307.121 16.765 L 306.263 16.251 Z M 118.971 10.434 L 118.113 9.92 L 118.971 10.434 Z M 137.386 1 L 297.055 1 L 297.055 -1 L 137.386 -1 L 137.386 1 Z M 305.405 15.737 L 196.172 198.052 L 197.887 199.08 L 307.121 16.765 L 305.405 15.737 Z M 178.614 208 L 18.945 208 L 18.945 210 L 178.614 210 L 178.614 208 Z M 10.595 193.263 L 119.828 10.948 L 118.113 9.92 L 8.879 192.235 L 10.595 193.263 Z M 18.945 208 C 11.381 208 6.707 199.751 10.595 193.263 L 8.879 192.235 C 4.193 200.056 9.827 210 18.945 210 L 18.945 208 Z M 196.172 198.052 C 192.474 204.223 185.808 208 178.614 208 L 178.614 210 C 186.511 210 193.828 205.854 197.887 199.08 L 196.172 198.052 Z M 297.055 1 C 304.619 1 309.293 9.249 305.405 15.737 L 307.121 16.765 C 311.807 8.944 306.173 -1 297.055 -1 L 297.055 1 Z M 137.386 -1 C 129.489 -1 122.172 3.146 118.113 9.92 L 119.828 10.948 C 123.526 4.777 130.192 1 137.386 1 L 137.386 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <svg width={316} height={209} viewBox="0 0 316 209" fill="none" style={{
        position: "absolute",
        left: 264,
        top: -80,
        width: 316,
        height: 209,
        borderRadius: 10.734055519104004,
      }}>
        <path d={"M 306.263 16.251 L 307.121 16.765 L 306.263 16.251 Z M 118.971 10.434 L 118.113 9.92 L 118.971 10.434 Z M 137.386 1 L 297.055 1 L 297.055 -1 L 137.386 -1 L 137.386 1 Z M 305.405 15.737 L 196.172 198.052 L 197.887 199.08 L 307.121 16.765 L 305.405 15.737 Z M 178.614 208 L 18.945 208 L 18.945 210 L 178.614 210 L 178.614 208 Z M 10.595 193.263 L 119.828 10.948 L 118.113 9.92 L 8.879 192.235 L 10.595 193.263 Z M 18.945 208 C 11.381 208 6.707 199.751 10.595 193.263 L 8.879 192.235 C 4.193 200.056 9.827 210 18.945 210 L 18.945 208 Z M 196.172 198.052 C 192.474 204.223 185.808 208 178.614 208 L 178.614 210 C 186.511 210 193.828 205.854 197.887 199.08 L 196.172 198.052 Z M 297.055 1 C 304.619 1 309.293 9.249 305.405 15.737 L 307.121 16.765 C 311.807 8.944 306.173 -1 297.055 -1 L 297.055 1 Z M 137.386 -1 C 129.489 -1 122.172 3.146 118.113 9.92 L 119.828 10.948 C 123.526 4.777 130.192 1 137.386 1 L 137.386 -1 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          transform: "matrix(0,1,-1,0,84,24)",
          transformOrigin: "0 0",
          color: "rgb(14,18,27)",
        }}>{props.icon1 ?? <WifiLine />}</div>
      <span style={{
        position: "absolute",
        left: 20,
        top: 138,
        width: 148,
        height: 32,
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 32,
        whiteSpace: "nowrap",
        lineHeight: "40px",
        letterSpacing: "-0.005em",
        color: "var(--text-white-0)",
      }}>{props.text1 ?? "Arthur Taylor"}</span>
      <span style={{
        position: "absolute",
        left: 20,
        top: 114,
        width: 130,
        height: 24,
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-soft-400)",
      }}>{props.text2 ?? "Cardholder Name"}</span>
      <div style={{
          position: "absolute",
          left: 268,
          top: 20,
          width: 32,
          height: 32,
        }}>{props.icon2 ?? <Mastercard2 />}</div>
      <div style={{
          position: "absolute",
          left: 20,
          top: 24,
          width: 32,
          height: 24,
        }}>{props.icon3 ?? <ChipsMyCards11 color={"🧡 orange"} />}</div>
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
export default CreditCardsMyCards1;

/* Figma family alias */
export const CreditCardsMyCards11 = CreditCardsMyCards1;
