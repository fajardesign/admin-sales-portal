import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _VerifiedFill as VerifiedFill } from './VerifiedFill.jsx';

// figma node: 3802:11038 User Profile Card [Sidebar] [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "collapsed=" + __venc(p.collapsed);

export function UserProfileCardSidebar1(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", collapsed: _p.collapsed ?? "off", dropdown: _p.dropdown ?? true, verified: _p.verified ?? true, editText: _p.editText ?? "Sophia Williams", editDescription: _p.editDescription ?? "sophia@alignui.com" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"on"} icon={"off"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
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
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
          }}>{props.editText}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon2 ?? <VerifiedFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
      </div>
      {props.dropdown && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "2px 2px 2px 2px",
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
          <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
            position: "absolute",
            left: 7.083,
            top: 5.226,
            width: 5.833,
            height: 9.546,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"on"} icon={"off"} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 248,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--charcoal-900)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"on"} icon={"off"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
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
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-white-0)",
            flexShrink: 0,
          }}>{props.editText}</span>
          {props.verified && (
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon2 ?? <VerifiedFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
      </div>
      {props.dropdown && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "2px 2px 2px 2px",
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
          <svg width={5.833} height={9.546} viewBox="0 0 5.833 9.546" fill="none" style={{
            position: "absolute",
            left: 7.083,
            top: 5.226,
            width: 5.833,
            height: 9.546,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--charcoal-900)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Avatar11 persona={"sophia williams"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"on"} icon={"off"} />}</div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, ⏪ Collapsed=Off
    "state=default|collapsed=off": __body0,
    // figma: 📌 State=Default, ⏪ Collapsed=On
    "state=default|collapsed=on": __body1,
    // figma: 📌 State=Hover, ⏪ Collapsed=Off
    "state=hover|collapsed=off": __body2,
    // figma: 📌 State=Hover, ⏪ Collapsed=On
    "state=hover|collapsed=on": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default UserProfileCardSidebar1;

/* Figma family alias */
export const UserProfileCardSidebar11 = UserProfileCardSidebar1;
