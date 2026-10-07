import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _Badge11BasicBlue9 as Badge11BasicBlue9 } from './Badge11BasicBlue9.jsx';
import { _Badge11BasicOrange11 as Badge11BasicOrange11 } from './Badge11BasicOrange11.jsx';
import { _Badge11BasicPink11 as Badge11BasicPink11 } from './Badge11BasicPink11.jsx';
import { _Badge11BasicPurple11 as Badge11BasicPurple11 } from './Badge11BasicPurple11.jsx';
import { _CompactAvatarGroup11 as CompactAvatarGroup11 } from './CompactAvatarGroup11.jsx';
import { _MapPin2Fill as MapPin2Fill } from './MapPin2Fill.jsx';
import { _User6Fill as User6Fill } from './User6Fill.jsx';

// figma node: 3521:3090 Schedule Cards [Schedule] [1.1] (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "options=" + __venc(p.options);

export function ScheduleCardsSchedule11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "meetings", options: _p.options ?? "03 options" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text1 ?? "Meeting with James Brown"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "8:00 - 8:45 AM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        style2={"default"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
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
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "On Google Meet"}</span>
        <Badge11BasicOrange11
          style={{ position: "relative", width: 73, flexShrink: 0 }}
          editText={"Marketing"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text1 ?? "Tesla 4th year Celebration Party"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "7:00 - 11:00 PM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
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
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon2 ?? <MapPin2Fill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "341 Windy Ridge Road, LA"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "by Sofia Williams"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <User6Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>16/25</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Christmas Holiday"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "DEC 25 - DEC 27"}</span>
        </div>
        <Badge11BasicPurple11
          style={{ position: "relative", width: 91, flexShrink: 0 }}
          editText={"2-days break"}
        />
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "🎄"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "Happy Christmas!"}</span>
      </div>
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
      }}>Religious Holiday</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text1 ?? "Meeting with Laura Perez"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "9:00 - 9:45 AM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        editNumber={"+2"}
        icon3={<Avatar11 persona={"laura perez"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} style={{ width: "100%", height: "100%" }} />}
        style2={"default"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "On Zoom"}</span>
        <Badge11BasicBlue9
          style={{ position: "relative", width: 113, flexShrink: 0 }}
          editText={"Product Manager"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Designing Camp for AlignUI"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "9:00 AM - 10:00 PM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
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
              flexShrink: 0,
              color: "rgb(251,55,72)",
            }}>{props.icon2 ?? <MapPin2Fill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "928 Bagwell Avenue, FL"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "by Matthew Johnson"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <User6Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>12/15</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Woman’s Day"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "mar 08"}</span>
        </div>
        <Badge11BasicPink11
          style={{ position: "relative", width: 91, flexShrink: 0 }}
          editText={"1-days break"}
        />
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "🌸"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "Happy Women’s Day!"}</span>
      </div>
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
      }}>International Holiday</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Meeting with Arthur Taylor"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "10:00 - 11:00 AM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        editNumber={"+2"}
        style2={"default"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "On Slack"}</span>
        <Badge11BasicPurple11
          style={{ position: "relative", width: 82, flexShrink: 0 }}
          editText={"Partnership"}
        />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "AlignUI Launch Party"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "8:00 - 12:00 PM (UTC)"}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={9.546} height={5.833} viewBox="0 0 9.546 5.833" fill="none" style={{
              position: "absolute",
              left: 5.227,
              top: 7.167,
              width: 9.546,
              height: 5.833,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.773 3.712 L 8.486 0 L 9.546 1.06 L 4.773 5.833 L 0 1.06 L 1.061 0 L 4.773 3.712 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
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
              flexShrink: 0,
              color: "rgb(251,55,72)",
            }}>{props.icon2 ?? <MapPin2Fill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "148 Harley Brook Lane, VA"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "by Emma Wright"}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <User6Fill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
        }}>18/25</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
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
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Workers’ Day"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "MAY 01"}</span>
        </div>
        <Badge11BasicOrange11
          style={{ position: "relative", width: 91, flexShrink: 0 }}
          editText={"1-days break"}
        />
      </div>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 6,
          padding: "4px 4px 4px 4px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "🧑‍💻"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "Happy Workers’ Day!"}</span>
      </div>
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
      }}>International Holiday</span>
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Meetings, 📍 Options=01 Options
    "type=meetings|options=01 options": __body0,
    // figma: 🧩 Type=Events, 📍 Options=01 Options
    "type=events|options=01 options": __body1,
    // figma: 🧩 Type=Holiday, 📍 Options=01 Options
    "type=holiday|options=01 options": __body2,
    // figma: 🧩 Type=Meetings, 📍 Options=02 Options
    "type=meetings|options=02 options": __body3,
    // figma: 🧩 Type=Events, 📍 Options=02 Options
    "type=events|options=02 options": __body4,
    // figma: 🧩 Type=Holiday, 📍 Options=02 Options
    "type=holiday|options=02 options": __body5,
    // figma: 🧩 Type=Meetings, 📍 Options=03 Options
    "type=meetings|options=03 options": __body6,
    // figma: 🧩 Type=Events, 📍 Options=03 Options
    "type=events|options=03 options": __body7,
    // figma: 🧩 Type=Holiday, 📍 Options=03 Options
    "type=holiday|options=03 options": __body8,
  };
  return (__impls[__vkey(props)] ?? __body6)();
}
export default ScheduleCardsSchedule11;
