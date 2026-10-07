import { Apex } from '../brand-sets/Apex.jsx';
import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _AvatarGroup11 as AvatarGroup11 } from './AvatarGroup11.jsx';
import { _Badge11 as Badge11 } from './Badge11.jsx';
import { _Badge11BasicPurple13 as Badge11BasicPurple13 } from './Badge11BasicPurple13.jsx';
import { _Checkbox11 as Checkbox11 } from './Checkbox11.jsx';
import { _FileFormatIcons11 as FileFormatIcons11 } from './FileFormatIcons11.jsx';
import { _KeyIcons11 as KeyIcons11 } from './KeyIcons11.jsx';
import { _Mastercard2 as Mastercard2 } from './Mastercard2.jsx';
import { MondayCom } from './MondayCom.jsx';
import { _ProgressBarLabel11 as ProgressBarLabel11 } from './ProgressBarLabel11.jsx';
import { _Radio11 as Radio11 } from './Radio11.jsx';
import { _RatingReview10 as RatingReview10 } from './RatingReview10.jsx';
import { _StatusBadge11Completed as StatusBadge11Completed } from './StatusBadge11Completed.jsx';
import { _Switch11 as Switch11 } from './Switch11.jsx';

// figma node: 553:22175 Table Row Cell [1.1] (66 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "priority=" + __venc(p.priority) + '|' + "misc=" + __venc(p.misc) + '|' + "size=" + __venc(p.size);

export function _TableRowCell11(_p = {}) {
  const props = { ..._p, description: _p.description ?? true, state: _p.state ?? "default", priority: _p.priority ?? "🥇 leading", misc: _p.misc ?? "🚫 none", size: _p.size ?? "xl", company: _p.company ?? false, checkbox: _p.checkbox ?? false, cardProvider: _p.cardProvider ?? false, fileFormat: _p.fileFormat ?? false, rdBadge3: _p.rdBadge3 ?? true, ndBadge2: _p.ndBadge2 ?? true, editTitle: _p.editTitle ?? "Insert Title", brand: _p.brand ?? false, radio: _p.radio ?? false, avatar: _p.avatar ?? false, editDescription: _p.editDescription ?? "Insert description", icon: _p.icon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
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
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={2.250} height={13.500} viewBox="0 0 2.250 13.500" fill="none" style={{
            position: "absolute",
            left: 8.875,
            top: 3.25,
            width: 2.25,
            height: 13.5,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 1.125 0 C 0.506 0 0 0.506 0 1.125 C 0 1.744 0.506 2.25 1.125 2.25 C 1.744 2.25 2.25 1.744 2.25 1.125 C 2.25 0.506 1.744 0 1.125 0 Z M 1.125 11.25 C 0.506 11.25 0 11.756 0 12.375 C 0 12.994 0.506 13.5 1.125 13.5 C 1.744 13.5 2.25 12.994 2.25 12.375 C 2.25 11.756 1.744 11.25 1.125 11.25 Z M 1.125 5.625 C 0.506 5.625 0 6.131 0 6.75 C 0 7.369 0.506 7.875 1.125 7.875 C 1.744 7.875 2.25 7.369 2.25 6.75 C 2.25 6.131 1.744 5.625 1.125 5.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={2.250} height={13.500} viewBox="0 0 2.250 13.500" fill="none" style={{
            position: "absolute",
            left: 8.875,
            top: 3.25,
            width: 2.25,
            height: 13.5,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 1.125 0 C 0.506 0 0 0.506 0 1.125 C 0 1.744 0.506 2.25 1.125 2.25 C 1.744 2.25 2.25 1.744 2.25 1.125 C 2.25 0.506 1.744 0 1.125 0 Z M 1.125 11.25 C 0.506 11.25 0 11.756 0 12.375 C 0 12.994 0.506 13.5 1.125 13.5 C 1.744 13.5 2.25 12.994 2.25 12.375 C 2.25 11.756 1.744 11.25 1.125 11.25 Z M 1.125 5.625 C 0.506 5.625 0 6.131 0 6.75 C 0 7.369 0.506 7.875 1.125 7.875 C 1.744 7.875 2.25 7.369 2.25 6.75 C 2.25 6.131 1.744 5.625 1.125 5.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
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
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={2.250} height={13.500} viewBox="0 0 2.250 13.500" fill="none" style={{
            position: "absolute",
            left: 8.875,
            top: 3.25,
            width: 2.25,
            height: 13.5,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 1.125 0 C 0.506 0 0 0.506 0 1.125 C 0 1.744 0.506 2.25 1.125 2.25 C 1.744 2.25 2.25 1.744 2.25 1.125 C 2.25 0.506 1.744 0 1.125 0 Z M 1.125 11.25 C 0.506 11.25 0 11.756 0 12.375 C 0 12.994 0.506 13.5 1.125 13.5 C 1.744 13.5 2.25 12.994 2.25 12.375 C 2.25 11.756 1.744 11.25 1.125 11.25 Z M 1.125 5.625 C 0.506 5.625 0 6.131 0 6.75 C 0 7.369 0.506 7.875 1.125 7.875 C 1.744 7.875 2.25 7.369 2.25 6.75 C 2.25 6.131 1.744 5.625 1.125 5.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={2.250} height={13.500} viewBox="0 0 2.250 13.500" fill="none" style={{
            position: "absolute",
            left: 8.875,
            top: 3.25,
            width: 2.25,
            height: 13.5,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 1.125 0 C 0.506 0 0 0.506 0 1.125 C 0 1.744 0.506 2.25 1.125 2.25 C 1.744 2.25 2.25 1.744 2.25 1.125 C 2.25 0.506 1.744 0 1.125 0 Z M 1.125 11.25 C 0.506 11.25 0 11.756 0 12.375 C 0 12.994 0.506 13.5 1.125 13.5 C 1.744 13.5 2.25 12.994 2.25 12.375 C 2.25 11.756 1.744 11.25 1.125 11.25 Z M 1.125 5.625 C 0.506 5.625 0 6.131 0 6.75 C 0 7.369 0.506 7.875 1.125 7.875 C 1.744 7.875 2.25 7.369 2.25 6.75 C 2.25 6.131 1.744 5.625 1.125 5.625 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 2.5,
            top: 2.5,
            width: 15,
            height: 15,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 11.25 3 L 15 3 L 15 4.5 L 13.5 4.5 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 L 2.25 15 C 2.051 15 1.86 14.921 1.72 14.78 C 1.579 14.64 1.5 14.449 1.5 14.25 L 1.5 4.5 L 0 4.5 L 0 3 L 3.75 3 L 3.75 0.75 C 3.75 0.551 3.829 0.36 3.97 0.22 C 4.11 0.079 4.301 0 4.5 0 L 10.5 0 C 10.699 0 10.89 0.079 11.03 0.22 C 11.171 0.36 11.25 0.551 11.25 0.75 L 11.25 3 Z M 12 4.5 L 3 4.5 L 3 13.5 L 12 13.5 L 12 4.5 Z M 5.25 6.75 L 6.75 6.75 L 6.75 11.25 L 5.25 11.25 L 5.25 6.75 Z M 8.25 6.75 L 9.75 6.75 L 9.75 11.25 L 8.25 11.25 L 8.25 6.75 Z M 5.25 1.5 L 5.25 3 L 9.75 3 L 9.75 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={13.478} height={13.478} viewBox="0 0 13.478 13.478" fill="none" style={{
            position: "absolute",
            left: 3.25,
            top: 3.272,
            width: 13.478,
            height: 13.478,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 9.546 4.993 L 8.486 3.932 L 1.5 10.918 L 1.5 11.978 L 2.561 11.978 L 9.546 4.993 Z M 10.607 3.932 L 11.667 2.872 L 10.607 1.811 L 9.546 2.872 L 10.607 3.932 Z M 3.181 13.478 L 0 13.478 L 0 10.296 L 10.076 0.22 C 10.217 0.079 10.408 0 10.607 0 C 10.805 0 10.996 0.079 11.137 0.22 L 13.258 2.341 C 13.399 2.482 13.478 2.673 13.478 2.872 C 13.478 3.07 13.399 3.261 13.258 3.402 L 3.182 13.478 L 3.181 13.478 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 96,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 2.5,
            top: 2.5,
            width: 15,
            height: 15,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 11.25 3 L 15 3 L 15 4.5 L 13.5 4.5 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 L 2.25 15 C 2.051 15 1.86 14.921 1.72 14.78 C 1.579 14.64 1.5 14.449 1.5 14.25 L 1.5 4.5 L 0 4.5 L 0 3 L 3.75 3 L 3.75 0.75 C 3.75 0.551 3.829 0.36 3.97 0.22 C 4.11 0.079 4.301 0 4.5 0 L 10.5 0 C 10.699 0 10.89 0.079 11.03 0.22 C 11.171 0.36 11.25 0.551 11.25 0.75 L 11.25 3 Z M 12 4.5 L 3 4.5 L 3 13.5 L 12 13.5 L 12 4.5 Z M 5.25 6.75 L 6.75 6.75 L 6.75 11.25 L 5.25 11.25 L 5.25 6.75 Z M 8.25 6.75 L 9.75 6.75 L 9.75 11.25 L 8.25 11.25 L 8.25 6.75 Z M 5.25 1.5 L 5.25 3 L 9.75 3 L 9.75 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.478} height={13.478} viewBox="0 0 13.478 13.478" fill="none" style={{
            position: "absolute",
            left: 3.25,
            top: 3.272,
            width: 13.478,
            height: 13.478,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 9.546 4.993 L 8.486 3.932 L 1.5 10.918 L 1.5 11.978 L 2.561 11.978 L 9.546 4.993 Z M 10.607 3.932 L 11.667 2.872 L 10.607 1.811 L 9.546 2.872 L 10.607 3.932 Z M 3.181 13.478 L 0 13.478 L 0 10.296 L 10.076 0.22 C 10.217 0.079 10.408 0 10.607 0 C 10.805 0 10.996 0.079 11.137 0.22 L 13.258 2.341 C 13.399 2.482 13.478 2.673 13.478 2.872 C 13.478 3.07 13.399 3.261 13.258 3.402 L 3.182 13.478 L 3.181 13.478 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 2.5,
            top: 2.5,
            width: 15,
            height: 15,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 11.25 3 L 15 3 L 15 4.5 L 13.5 4.5 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 L 2.25 15 C 2.051 15 1.86 14.921 1.72 14.78 C 1.579 14.64 1.5 14.449 1.5 14.25 L 1.5 4.5 L 0 4.5 L 0 3 L 3.75 3 L 3.75 0.75 C 3.75 0.551 3.829 0.36 3.97 0.22 C 4.11 0.079 4.301 0 4.5 0 L 10.5 0 C 10.699 0 10.89 0.079 11.03 0.22 C 11.171 0.36 11.25 0.551 11.25 0.75 L 11.25 3 Z M 12 4.5 L 3 4.5 L 3 13.5 L 12 13.5 L 12 4.5 Z M 5.25 6.75 L 6.75 6.75 L 6.75 11.25 L 5.25 11.25 L 5.25 6.75 Z M 8.25 6.75 L 9.75 6.75 L 9.75 11.25 L 8.25 11.25 L 8.25 6.75 Z M 5.25 1.5 L 5.25 3 L 9.75 3 L 9.75 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "6px 6px 6px 6px",
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
          <svg width={13.478} height={13.478} viewBox="0 0 13.478 13.478" fill="none" style={{
            position: "absolute",
            left: 3.25,
            top: 3.272,
            width: 13.478,
            height: 13.478,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 9.546 4.993 L 8.486 3.932 L 1.5 10.918 L 1.5 11.978 L 2.561 11.978 L 9.546 4.993 Z M 10.607 3.932 L 11.667 2.872 L 10.607 1.811 L 9.546 2.872 L 10.607 3.932 Z M 3.181 13.478 L 0 13.478 L 0 10.296 L 10.076 0.22 C 10.217 0.079 10.408 0 10.607 0 C 10.805 0 10.996 0.079 11.137 0.22 L 13.258 2.341 C 13.399 2.482 13.478 2.673 13.478 2.872 C 13.478 3.07 13.399 3.261 13.258 3.402 L 3.182 13.478 L 3.181 13.478 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 96,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
            position: "absolute",
            left: 2.5,
            top: 2.5,
            width: 15,
            height: 15,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 11.25 3 L 15 3 L 15 4.5 L 13.5 4.5 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 L 2.25 15 C 2.051 15 1.86 14.921 1.72 14.78 C 1.579 14.64 1.5 14.449 1.5 14.25 L 1.5 4.5 L 0 4.5 L 0 3 L 3.75 3 L 3.75 0.75 C 3.75 0.551 3.829 0.36 3.97 0.22 C 4.11 0.079 4.301 0 4.5 0 L 10.5 0 C 10.699 0 10.89 0.079 11.03 0.22 C 11.171 0.36 11.25 0.551 11.25 0.75 L 11.25 3 Z M 12 4.5 L 3 4.5 L 3 13.5 L 12 13.5 L 12 4.5 Z M 5.25 6.75 L 6.75 6.75 L 6.75 11.25 L 5.25 11.25 L 5.25 6.75 Z M 8.25 6.75 L 9.75 6.75 L 9.75 11.25 L 8.25 11.25 L 8.25 6.75 Z M 5.25 1.5 L 5.25 3 L 9.75 3 L 9.75 1.5 L 5.25 1.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
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
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={13.478} height={13.478} viewBox="0 0 13.478 13.478" fill="none" style={{
            position: "absolute",
            left: 3.25,
            top: 3.272,
            width: 13.478,
            height: 13.478,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 9.546 4.993 L 8.486 3.932 L 1.5 10.918 L 1.5 11.978 L 2.561 11.978 L 9.546 4.993 Z M 10.607 3.932 L 11.667 2.872 L 10.607 1.811 L 9.546 2.872 L 10.607 3.932 Z M 3.181 13.478 L 0 13.478 L 0 10.296 L 10.076 0.22 C 10.217 0.079 10.408 0 10.607 0 C 10.805 0 10.996 0.079 11.137 0.22 L 13.258 2.341 C 13.399 2.482 13.478 2.673 13.478 2.872 C 13.478 3.07 13.399 3.261 13.258 3.402 L 3.182 13.478 L 3.181 13.478 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"default"} active={"off"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"default"} active={"off"} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"hover"} active={"off"} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"hover"} active={"off"} />}</div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"default"} active={"on"} />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 64,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
          width: 32,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Switch11 state={"default"} active={"on"} />}</div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <RatingReview10
        style={{ position: "relative", flexShrink: 0 }}
        type={"⭐️ star"}
        alignment={"only ratings"}
      />
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <RatingReview10
        style={{ position: "relative", flexShrink: 0 }}
        type={"⭐️ star"}
        alignment={"only ratings"}
      />
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <RatingReview10
        style={{ position: "relative", flexShrink: 0 }}
        type={"⭐️ star"}
        alignment={"only ratings"}
      />
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <RatingReview10
        style={{ position: "relative", flexShrink: 0 }}
        type={"⭐️ star"}
        alignment={"only ratings"}
      />
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 196,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"➡️ on right"}
        showBottom={"off"}
      />
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 196,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"➡️ on right"}
        showBottom={"off"}
      />
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 196,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"➡️ on right"}
        showBottom={"off"}
      />
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 196,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{ position: "relative", flexGrow: 1, width: "auto" }}
        type={"➡️ on right"}
        showBottom={"off"}
      />
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StatusBadge11Completed
        style={{ position: "relative", width: 93, flexShrink: 0 }}
        editBadge={"Completed"}
      />
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StatusBadge11Completed
        style={{
          position: "relative",
          width: 93,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        editBadge={"Completed"}
      />
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StatusBadge11Completed
        style={{ position: "relative", width: 93, flexShrink: 0 }}
        editBadge={"Completed"}
      />
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 120,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <StatusBadge11Completed
        style={{
          position: "relative",
          width: 93,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        editBadge={"Completed"}
      />
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Badge11 type={"📂 basic"} color={"💙 blue"} size={"md"} number={"off"} disabled={"off"} />}</div>
      {props.ndBadge2 && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicPurple13 />}</div>
      )}
      {props.rdBadge3 && (
      <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon3 ?? <Badge11 editText={"+4"} type={"📂 basic"} color={"🩶 gray"} size={"md"} number={"off"} disabled={"off"} />}</div>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Badge11 type={"📂 basic"} color={"💙 blue"} size={"md"} number={"off"} disabled={"off"} />}</div>
      {props.ndBadge2 && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicPurple13 />}</div>
      )}
      {props.rdBadge3 && (
      <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon3 ?? <Badge11 editText={"+4"} type={"📂 basic"} color={"🩶 gray"} size={"md"} number={"off"} disabled={"off"} />}</div>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Badge11 type={"📂 basic"} color={"💙 blue"} size={"md"} number={"off"} disabled={"off"} />}</div>
      {props.ndBadge2 && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicPurple13 />}</div>
      )}
      {props.rdBadge3 && (
      <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon3 ?? <Badge11 editText={"+4"} type={"📂 basic"} color={"🩶 gray"} size={"md"} number={"off"} disabled={"off"} />}</div>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Badge11 type={"📂 basic"} color={"💙 blue"} size={"md"} number={"off"} disabled={"off"} />}</div>
      {props.ndBadge2 && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicPurple13 />}</div>
      )}
      {props.rdBadge3 && (
      <div style={{ position: "relative", width: 31, flexShrink: 0 }}>{props.icon3 ?? <Badge11 editText={"+4"} type={"📂 basic"} color={"🩶 gray"} size={"md"} number={"off"} disabled={"off"} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <AvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        size={"24"}
      />
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <AvatarGroup11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        size={"24"}
      />
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <AvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        size={"24"}
      />
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 156,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <AvatarGroup11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        size={"24"}
      />
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"hover"} active={"off"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"hover"} active={"off"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 64,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"md"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 6px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 28,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.pickBrand ?? <MondayCom />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 40,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.pickCompany ?? <Apex style2={"original"} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        {props.description && (
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editDescription}</span>
        )}
      </div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 256,
      height: 48,
      overflow: "hidden",
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 20px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.checkbox && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon1 ?? <Checkbox11 state={"default"} active={"on"} indeterminate={"off"} />}</div>
      )}
      {props.radio && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Radio11 state={"default"} active={"on"} />}</div>
      )}
      {props.icon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <KeyIcons11 style2={"stroke"} color={"🩶 gray"} size={"sm"} />}</div>
      )}
      {props.avatar && (
      <div style={{
          position: "relative",
          width: 24,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <Avatar11 persona={"james brown"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
      )}
      {props.brand && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.pickBrand ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.company && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickCompany ?? <Apex style2={"original"} style={{ transform: "scale(0.800, 0.800)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.cardProvider && (
      <div style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}>{props.pickProvider ?? <Mastercard2 />}</div>
      )}
      {props.fileFormat && (
      <FileFormatIcons11
        style={{
          position: "relative",
          width: 32,
          height: 32,
          flexShrink: 0,
        }}
        color={"🔴 red"}
        size={"xs"}
      />
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 📌 State=Default, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=default|priority=🥇 leading|misc=🚫 none|size=xl": __body0,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=🕹️ button|size=xl": __body1,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=🕹️ button|size=lg": __body2,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=🕹️ button|size=xl": __body3,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=🕹️ button|size=lg": __body4,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=🕹️ button|size=xl": __body1,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🕹️ Button, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=🕹️ button|size=lg": __body2,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=🎮 button group|size=xl": __body5,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=🎮 button group|size=lg": __body6,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=🎮 button group|size=xl": __body7,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=🎮 button group|size=lg": __body8,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=🎮 button group|size=xl": __body5,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🎮 Button Group, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=🎮 button group|size=lg": __body6,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=🔀 toggle|size=xl": __body9,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=🔀 toggle|size=lg": __body10,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=🔀 toggle|size=xl": __body11,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=🔀 toggle|size=lg": __body12,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=🔀 toggle|size=xl": __body13,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🔀 Toggle, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=🔀 toggle|size=lg": __body14,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=⭐️ rating|size=xl": __body15,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=⭐️ rating|size=lg": __body16,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=⭐️ rating|size=xl": __body17,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=⭐️ rating|size=lg": __body18,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=⭐️ rating|size=xl": __body15,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=⭐️ Rating, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=⭐️ rating|size=lg": __body16,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=📶 progress bar|size=xl": __body19,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=📶 progress bar|size=lg": __body20,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=📶 progress bar|size=xl": __body21,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=📶 progress bar|size=lg": __body22,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=📶 progress bar|size=xl": __body19,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=📶 Progress Bar, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=📶 progress bar|size=lg": __body20,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=✨ status badge|size=xl": __body23,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=✨ status badge|size=lg": __body24,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=✨ status badge|size=xl": __body25,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=✨ status badge|size=lg": __body26,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=✨ status badge|size=xl": __body23,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=✨ Status Badge, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=✨ status badge|size=lg": __body24,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=🎖️ badge group|size=xl": __body27,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=🎖️ badge group|size=lg": __body28,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=🎖️ badge group|size=xl": __body29,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=🎖️ badge group|size=lg": __body30,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=🎖️ badge group|size=xl": __body27,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=🎖️ Badge Group, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=🎖️ badge group|size=lg": __body28,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=X-Large (64)
    "state=default|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=xl": __body31,
    // figma: 📌 State=Default, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=Large (48)
    "state=default|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=lg": __body32,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=X-Large (64)
    "state=hover|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=xl": __body33,
    // figma: 📌 State=Hover, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=Large (48)
    "state=hover|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=lg": __body34,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=X-Large (64)
    "state=active|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=xl": __body31,
    // figma: 📌 State=Active, 🛡️ Priority=🚫 None, 🎲 Misc=👨‍👨‍👦 Avatar Group, 📏 Size=Large (48)
    "state=active|priority=🚫 none|misc=👨‍👨‍👦 avatar group|size=lg": __body32,
    // figma: 📌 State=Default, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=default|priority=🥇 leading|misc=🚫 none|size=lg": __body35,
    // figma: 📌 State=Hover, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=hover|priority=🥇 leading|misc=🚫 none|size=xl": __body36,
    // figma: 📌 State=Hover, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=hover|priority=🥇 leading|misc=🚫 none|size=lg": __body37,
    // figma: 📌 State=Active, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=active|priority=🥇 leading|misc=🚫 none|size=xl": __body38,
    // figma: 📌 State=Active, 🛡️ Priority=🥇 Leading, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=active|priority=🥇 leading|misc=🚫 none|size=lg": __body39,
    // figma: 📌 State=Default, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=default|priority=🌟 regular|misc=🚫 none|size=xl": __body40,
    // figma: 📌 State=Default, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=default|priority=🌟 regular|misc=🚫 none|size=lg": __body41,
    // figma: 📌 State=Hover, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=hover|priority=🌟 regular|misc=🚫 none|size=xl": __body42,
    // figma: 📌 State=Hover, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=hover|priority=🌟 regular|misc=🚫 none|size=lg": __body43,
    // figma: 📌 State=Active, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=active|priority=🌟 regular|misc=🚫 none|size=xl": __body44,
    // figma: 📌 State=Active, 🛡️ Priority=🌟 Regular, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=active|priority=🌟 regular|misc=🚫 none|size=lg": __body45,
    // figma: 📌 State=Default, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=default|priority=⚪️ passive|misc=🚫 none|size=xl": __body46,
    // figma: 📌 State=Default, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=default|priority=⚪️ passive|misc=🚫 none|size=lg": __body47,
    // figma: 📌 State=Hover, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=hover|priority=⚪️ passive|misc=🚫 none|size=xl": __body48,
    // figma: 📌 State=Hover, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=hover|priority=⚪️ passive|misc=🚫 none|size=lg": __body49,
    // figma: 📌 State=Active, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=X-Large (64)
    "state=active|priority=⚪️ passive|misc=🚫 none|size=xl": __body50,
    // figma: 📌 State=Active, 🛡️ Priority=⚪️ Passive, 🎲 Misc=🚫 None, 📏 Size=Large (48)
    "state=active|priority=⚪️ passive|misc=🚫 none|size=lg": __body51,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _TableRowCell11;
