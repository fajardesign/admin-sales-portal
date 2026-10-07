import { _LinkButtons11 as LinkButtons11 } from './LinkButtons11.jsx';
import { _ProgressBar11 as ProgressBar11 } from './ProgressBar11.jsx';

// figma node: 515:3758 Progress Bar Label [1.1] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "showBottom=" + __venc(p.showBottom);

export function _ProgressBarLabel11(_p = {}) {
  const props = { ..._p, showPercentage: _p.showPercentage ?? true, type: _p.type ?? "🔼 on top", showBottom: _p.showBottom ?? "off", linkButton: _p.linkButton ?? true, editTitle: _p.editTitle ?? "Data Storage", editPercentage: _p.editPercentage ?? "80%", editDescription: _p.editDescription ?? "to unlock unlimited" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
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
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.editTitle}</span>
        {props.showPercentage && (
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
        }}>{props.editPercentage}</span>
        )}
      </div>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"80%"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.linkButton && (
        <LinkButtons11
          style={{ position: "relative", width: 98, flexShrink: 0 }}
          editText={"Register here"}
          leftIcon={false}
          rightIcon={false}
          state={"default"}
          size={"md"}
          underline={"on"}
        />
        )}
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
        }}>{props.editDescription}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
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
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.editTitle}</span>
        {props.showPercentage && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.editPercentage}</span>
        )}
      </div>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"80%"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexGrow: 1,
          width: "auto",
        }}
        percentage={"80%"}
      />
      {props.showPercentage && (
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.editPercentage}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=🔼 On Top, ⬇️ Show Bottom=On
    "type=🔼 on top|showBottom=on": __body0,
    // figma: 🧩 Type=🔼 On Top, ⬇️ Show Bottom=Off
    "type=🔼 on top|showBottom=off": __body1,
    // figma: 🧩 Type=➡️ On Right, ⬇️ Show Bottom=Off
    "type=➡️ on right|showBottom=off": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default _ProgressBarLabel11;
