import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _MapPin2Fill as MapPin2Fill } from './MapPin2Fill.jsx';

// figma node: 3877:58564 Calendar Card [Calendar Page] [1.1] (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "completed=" + __venc(p.completed);

export function CalendarCardCalendarPage1(_p = {}) {
  const props = { ..._p, type: _p.type ?? "📅 meetings", size: _p.size ?? "half", completed: _p.completed ?? "off", editTitle: _p.editTitle ?? "Insert your title right here", editTime: _p.editTime ?? "3:00 - 4:30 PM" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 184,
      borderRadius: 8,
      backgroundColor: "var(--state-information-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 12px 8px 12px",
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
        gap: 4,
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
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
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
        }}>{props.editTime}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 184,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 12px 8px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 184,
      borderRadius: 8,
      backgroundColor: "var(--state-warning-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 12px 8px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 104,
      borderRadius: 8,
      backgroundColor: "var(--state-information-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 104,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
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
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 104,
      borderRadius: 8,
      backgroundColor: "var(--state-warning-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 104,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
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
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 112,
      borderRadius: 8,
      backgroundColor: "var(--state-information-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 112,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 112,
      borderRadius: 8,
      backgroundColor: "var(--state-warning-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 112,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 168,
      borderRadius: 8,
      backgroundColor: "var(--state-information-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 168,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 999,
        boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -2,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon1 ?? <Avatar11 persona={"james brown"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon2 ?? <Avatar11 persona={"sophia williams"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
          <div style={{
              position: "relative",
              width: 20,
              height: 20,
              flexShrink: 0,
            }}>{props.icon3 ?? <Avatar11 persona={"arthur taylor"} size={"20"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "+4"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>{props.text2 ?? "on Zoom"}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 168,
      borderRadius: 8,
      backgroundColor: "var(--state-warning-lighter)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 184,
      height: 168,
      borderRadius: 8,
      backgroundColor: "var(--bg-weak-50)",
      backdropFilter: "blur(24px)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
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
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTitle}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 11,
          lineHeight: "12px",
          letterSpacing: "0.020em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editTime}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(251,55,72)",
          }}>{props.icon1 ?? <MapPin2Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
        }}>{props.text1 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Half, 🟢 Completed=Off
    "type=📅 meetings|size=half|completed=off": __body0,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Half, 🟢 Completed=On
    "type=📅 meetings|size=half|completed=on": __body1,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Half, 🟢 Completed=Off
    "type=🎉 events|size=half|completed=off": __body2,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Half, 🟢 Completed=On
    "type=🎉 events|size=half|completed=on": __body1,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Regular, 🟢 Completed=Off
    "type=📅 meetings|size=regular|completed=off": __body3,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Regular, 🟢 Completed=On
    "type=📅 meetings|size=regular|completed=on": __body4,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Regular, 🟢 Completed=Off
    "type=🎉 events|size=regular|completed=off": __body5,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Regular, 🟢 Completed=On
    "type=🎉 events|size=regular|completed=on": __body6,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Regular Extended, 🟢 Completed=Off
    "type=📅 meetings|size=regular extended|completed=off": __body7,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Regular Extended, 🟢 Completed=On
    "type=📅 meetings|size=regular extended|completed=on": __body8,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Regular Extended, 🟢 Completed=Off
    "type=🎉 events|size=regular extended|completed=off": __body9,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Regular Extended, 🟢 Completed=On
    "type=🎉 events|size=regular extended|completed=on": __body10,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Large, 🟢 Completed=Off
    "type=📅 meetings|size=lg|completed=off": __body11,
    // figma: 🧩 Type=📅 Meetings, 📏 Size=Large, 🟢 Completed=On
    "type=📅 meetings|size=lg|completed=on": __body12,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Large, 🟢 Completed=Off
    "type=🎉 events|size=lg|completed=off": __body13,
    // figma: 🧩 Type=🎉 Events, 📏 Size=Large, 🟢 Completed=On
    "type=🎉 events|size=lg|completed=on": __body14,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default CalendarCardCalendarPage1;

/* Figma family alias */
export const CalendarCardCalendarPage11 = CalendarCardCalendarPage1;
