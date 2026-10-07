import { _ArrowDownSFill as ArrowDownSFill } from './ArrowDownSFill.jsx';
import { _ArrowUpSFill as ArrowUpSFill } from './ArrowUpSFill.jsx';
import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _TopStatus11 as TopStatus11 } from './TopStatus11.jsx';

// figma node: 3814:24667 User Profile [Topbar] [1.0] (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function UserProfileTopbar10(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", name: _p.name ?? true, editName: _p.editName ?? "Sophia", verified: _p.verified ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 8px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"32"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        {props.name && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
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
          }}>{props.editName}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <TopStatus11 type={"✅ verified"} style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon3 ?? <ArrowDownSFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 8px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"32"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        {props.name && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
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
          }}>{props.editName}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <TopStatus11 type={"✅ verified"} style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(153,160,174)",
        }}>{props.icon3 ?? <ArrowDownSFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 8px 4px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
            width: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"32"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        {props.name && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
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
          }}>{props.editName}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <TopStatus11 type={"✅ verified"} style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        )}
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
          color: "rgb(82,88,102)",
        }}>{props.icon3 ?? <ArrowUpSFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default
    "state=default": __body0,
    // figma: 📌 State=Hover
    "state=hover": __body1,
    // figma: 📌 State=Active
    "state=active": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default UserProfileTopbar10;
