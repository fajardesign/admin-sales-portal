import { _AmarBankBisnisVertical as AmarBankBisnisVertical } from './AmarBankBisnisVertical.jsx';

// figma node: 3802:10204 Header Card [Sidebar] [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "onlyIcon=" + __venc(p.onlyIcon);

export function HeaderCardSidebar11(_p = {}) {
  const props = { ..._p, dropdown: _p.dropdown ?? true, editBrand: _p.editBrand ?? "User Name", state: _p.state ?? "default", onlyIcon: _p.onlyIcon ?? "off", editDescription: _p.editDescription ?? "Company Name" };
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
          width: 43,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AmarBankBisnisVertical colorText={"off"} />}</div>
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
          }}>{props.editBrand}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
      </div>
      {props.dropdown && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
          <svg width={8.621} height={12.728} viewBox="0 0 8.621 12.728" fill="none" style={{
            position: "absolute",
            left: 5.69,
            top: 3.636,
            width: 8.621,
            height: 12.728,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 8.621 4.31 L 4.311 0 L 0 4.31 L 0.982 5.293 L 4.311 1.964 L 7.639 5.293 L 8.621 4.31 Z M 0 8.418 L 4.311 12.728 L 8.621 8.418 L 7.639 7.436 L 4.311 10.764 L 0.982 7.436 L 0 8.418 Z"} fill="currentColor" fillRule="nonzero" />
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
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 43,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AmarBankBisnisVertical colorText={"off"} />}</div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, 🔳 Only Icon=Off
    "state=default|onlyIcon=off": __body0,
    // figma: 📌 State=Default, 🔳 Only Icon=On
    "state=default|onlyIcon=on": __body1,
    // figma: 📌 State=Hover, 🔳 Only Icon=Off
    "state=hover|onlyIcon=off": __body0,
    // figma: 📌 State=Hover, 🔳 Only Icon=On
    "state=hover|onlyIcon=on": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default HeaderCardSidebar11;
