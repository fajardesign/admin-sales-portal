import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _DecorativeIcons as DecorativeIcons } from './DecorativeIcons.jsx';
import { _Spotify as Spotify } from './Spotify.jsx';

// figma node: 3167:153 Transaction Items [Recent Transactions] [1.1] (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function TransactionItemsRecentTransactions1(_p = {}) {
  const props = { ..._p, type: _p.type ?? "💳 payment icons", state: _p.state ?? "default", editTitle: _p.editTitle ?? "Insert title here...", editDescription: _p.editDescription ?? "Insert description here…", rightIcon: _p.rightIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DecorativeIcons type={"water"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 319,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DecorativeIcons type={"water"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"40"} image={"on"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"off"} icon={"off"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 319,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"40"} image={"on"} solidBG={"off"} memoji={"off"} illustration={"off"} text={"off"} icon={"off"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
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
          }}>{props.pickBrand ?? <Spotify style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 319,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
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
          }}>{props.pickBrand ?? <Spotify style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-white-0)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 10px 10px 10px",
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
          <svg width={12.966} height={12.968} viewBox="0 0 12.966 12.968" fill="none" style={{
            position: "absolute",
            left: 3.254,
            top: 3.301,
            width: 12.966,
            height: 12.968,
            color: "rgb(113,119,132)",
          }}>
            <path d={"M 1.744 0.153 C 2.244 -0.026 2.787 -0.048 3.3 0.088 C 3.814 0.224 4.273 0.513 4.619 0.917 C 4.965 1.32 5.18 1.819 5.236 2.347 C 5.293 2.875 5.187 3.408 4.934 3.875 L 12.966 11.907 L 11.906 12.968 L 3.873 4.935 C 3.406 5.187 2.873 5.292 2.346 5.235 C 1.818 5.178 1.32 4.963 0.917 4.617 C 0.514 4.272 0.225 3.812 0.088 3.3 C -0.048 2.787 -0.026 2.244 0.152 1.744 L 1.829 3.422 C 1.933 3.529 2.057 3.615 2.195 3.674 C 2.332 3.733 2.479 3.764 2.629 3.765 C 2.778 3.767 2.926 3.738 3.065 3.682 C 3.203 3.625 3.328 3.542 3.434 3.436 C 3.54 3.33 3.623 3.205 3.68 3.066 C 3.736 2.928 3.765 2.78 3.764 2.631 C 3.762 2.481 3.731 2.334 3.672 2.196 C 3.613 2.059 3.528 1.935 3.42 1.831 L 1.743 0.152 L 1.744 0.153 Z M 9.519 1.566 L 11.906 0.24 L 12.966 1.3 L 11.64 3.687 L 10.314 3.952 L 8.724 5.543 L 7.663 4.482 L 9.254 2.892 L 9.519 1.566 L 9.519 1.566 Z M 4.481 7.665 L 5.541 8.725 L 1.564 12.702 C 1.429 12.838 1.247 12.917 1.055 12.923 C 0.864 12.928 0.677 12.861 0.534 12.733 C 0.391 12.606 0.302 12.429 0.286 12.238 C 0.269 12.047 0.326 11.857 0.445 11.707 L 0.503 11.642 L 4.481 7.665 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 319,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        padding: "10px 10px 10px 10px",
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
          <svg width={12.966} height={12.968} viewBox="0 0 12.966 12.968" fill="none" style={{
            position: "absolute",
            left: 3.254,
            top: 3.301,
            width: 12.966,
            height: 12.968,
            color: "rgb(113,119,132)",
          }}>
            <path d={"M 1.744 0.153 C 2.244 -0.026 2.787 -0.048 3.3 0.088 C 3.814 0.224 4.273 0.513 4.619 0.917 C 4.965 1.32 5.18 1.819 5.236 2.347 C 5.293 2.875 5.187 3.408 4.934 3.875 L 12.966 11.907 L 11.906 12.968 L 3.873 4.935 C 3.406 5.187 2.873 5.292 2.346 5.235 C 1.818 5.178 1.32 4.963 0.917 4.617 C 0.514 4.272 0.225 3.812 0.088 3.3 C -0.048 2.787 -0.026 2.244 0.152 1.744 L 1.829 3.422 C 1.933 3.529 2.057 3.615 2.195 3.674 C 2.332 3.733 2.479 3.764 2.629 3.765 C 2.778 3.767 2.926 3.738 3.065 3.682 C 3.203 3.625 3.328 3.542 3.434 3.436 C 3.54 3.33 3.623 3.205 3.68 3.066 C 3.736 2.928 3.765 2.78 3.764 2.631 C 3.762 2.481 3.731 2.334 3.672 2.196 C 3.613 2.059 3.528 1.935 3.42 1.831 L 1.743 0.152 L 1.744 0.153 Z M 9.519 1.566 L 11.906 0.24 L 12.966 1.3 L 11.64 3.687 L 10.314 3.952 L 8.724 5.543 L 7.663 4.482 L 9.254 2.892 L 9.519 1.566 L 9.519 1.566 Z M 4.481 7.665 L 5.541 8.725 L 1.564 12.702 C 1.429 12.838 1.247 12.917 1.055 12.923 C 0.864 12.928 0.677 12.861 0.534 12.733 C 0.391 12.606 0.302 12.429 0.286 12.238 C 0.269 12.047 0.326 11.857 0.445 11.707 L 0.503 11.642 L 4.481 7.665 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "$0.00"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "Feb 12"}</span>
      </div>
      {props.rightIcon && (
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        padding: "1px 1px 1px 1px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 18,
          height: 18,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={5.250} height={8.591} viewBox="0 0 5.250 8.591" fill="none" style={{
            position: "absolute",
            left: 6.375,
            top: 4.704,
            width: 5.25,
            height: 8.591,
            color: "rgb(153,160,174)",
          }}>
            <path d={"M 3.341 4.296 L 0 0.954 L 0.954 0 L 5.25 4.296 L 0.954 8.591 L 0 7.637 L 3.341 4.296 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=💳 Payment Icons, 📌 State=Default
    "type=💳 payment icons|state=default": __body0,
    // figma: 🧩 Type=💳 Payment Icons, 📌 State=Hover
    "type=💳 payment icons|state=hover": __body1,
    // figma: 🧩 Type=👨🏻 Avatar, 📌 State=Default
    "type=👨🏻 avatar|state=default": __body2,
    // figma: 🧩 Type=👨🏻 Avatar, 📌 State=Hover
    "type=👨🏻 avatar|state=hover": __body3,
    // figma: 🧩 Type=🎗️ Brand, 📌 State=Default
    "type=🎗️ brand|state=default": __body4,
    // figma: 🧩 Type=🎗️ Brand, 📌 State=Hover
    "type=🎗️ brand|state=hover": __body5,
    // figma: 🧩 Type=💠 Editable Icons, 📌 State=Default
    "type=💠 editable icons|state=default": __body6,
    // figma: 🧩 Type=💠 Editable Icons, 📌 State=Hover
    "type=💠 editable icons|state=hover": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TransactionItemsRecentTransactions1;

/* Figma family alias */
export const TransactionItemsRecentTransactions11 = TransactionItemsRecentTransactions1;
