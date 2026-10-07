import { _CompactAvatarGroup11 as CompactAvatarGroup11 } from './CompactAvatarGroup11.jsx';
import { _CompactButton11 as CompactButton11 } from './CompactButton11.jsx';
import { _CustomerService2Fill as CustomerService2Fill } from './CustomerService2Fill.jsx';
import { _GiftLine as GiftLine } from './GiftLine.jsx';
import { _LinkButtons11 as LinkButtons11 } from './LinkButtons11.jsx';
import { _LinkButtons11Black5 as LinkButtons11Black5 } from './LinkButtons11Black5.jsx';
import { _LinkButtons11Modifiable5 as LinkButtons11Modifiable5 } from './LinkButtons11Modifiable5.jsx';
import { _PlayCircleFill as PlayCircleFill } from './PlayCircleFill.jsx';
import { _ProgressBar11 as ProgressBar11 } from './ProgressBar11.jsx';
import { _ProgressBarLabel11 as ProgressBarLabel11 } from './ProgressBarLabel11.jsx';
import { _UploadCloud2Line as UploadCloud2Line } from './UploadCloud2Line.jsx';

// figma node: 3789:3551 Feature Cards [Sidebar] [1.1] (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "style2=" + __venc(p.style2);

export function FeatureCardsSidebar11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "daily meeting", style2: _p.style2 ?? "stroke", dismissIcon: _p.dismissIcon ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
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
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        style2={"stroke"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Daily Meeting"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "9:00 AM - 9:30 AM on Zoom"}</span>
      </div>
      <LinkButtons11Black5
        style={{ position: "relative", width: 86, flexShrink: 0 }}
        editText={"Join Now"}
        leftIcon={false}
      />
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
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
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        style2={"stroke"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Daily Meeting"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "9:00 AM - 9:30 AM on Zoom"}</span>
      </div>
      <LinkButtons11Black5
        style={{ position: "relative", width: 86, flexShrink: 0 }}
        editText={"Join Now"}
        leftIcon={false}
      />
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
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
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        style2={"default"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          color: "var(--static-static-white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Daily Meeting"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--static-static-white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "9:00 AM - 9:30 AM on Zoom"}</span>
      </div>
      <LinkButtons11Modifiable5
        style={{ position: "relative", width: 86, flexShrink: 0 }}
        editText={"Join Now"}
        leftIcon={false}
      />
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon1 ?? <CompactButton11 style2={"modifiable"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
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
      <CompactAvatarGroup11
        style={{ position: "relative", flexShrink: 0 }}
        style2={"default"}
        size={"24"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Daily Meeting"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "9:00 AM - 9:30 AM on Zoom"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 86,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "rgb(244,247,250)",
          }}>
            <path d={"M 2.121 4.773 L 5.833 8.486 L 4.773 9.546 L 0 4.773 L 4.773 0 L 5.833 1.06 L 2.121 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-white-0)",
          textDecoration: "underline",
          flexShrink: 0,
        }}>Join Now</span>
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
            color: "var(--text-white-0)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon1 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
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
        flexDirection: "column",
        gap: 4,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Cloud Capacity"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "You're almost out of space."}</span>
      </div>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"90%"}
      />
      <LinkButtons11
        style={{ position: "relative", width: 112, flexShrink: 0 }}
        editText={"Upgrade Cloud"}
        leftIcon={false}
        rightIcon={false}
        state={"default"}
        size={"md"}
        underline={"on"}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
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
        flexDirection: "column",
        gap: 4,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Cloud Capacity"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "You're almost out of space."}</span>
      </div>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"90%"}
      />
      <LinkButtons11
        style={{ position: "relative", width: 112, flexShrink: 0 }}
        editText={"Upgrade Cloud"}
        leftIcon={false}
        rightIcon={false}
        state={"default"}
        size={"md"}
        underline={"on"}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
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
        flexDirection: "column",
        gap: 4,
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
          color: "var(--static-static-white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Cloud Capacity"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--static-static-white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "You're almost out of space."}</span>
      </div>
      <div style={{
        position: "relative",
        height: 6,
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--primary-dark)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 180,
          height: 6,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(1,0,0,-1,0,6)",
            transformOrigin: "0 0",
            width: 180,
            height: 6,
            borderRadius: 999,
            backgroundColor: "rgb(51,92,255)",
          }} />
        </div>
      </div>
      <LinkButtons11Modifiable5
        style={{ position: "relative", width: 100, flexShrink: 0 }}
        editText={"Upgrade Cloud"}
        leftIcon={false}
        rightIcon={false}
      />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
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
        flexDirection: "column",
        gap: 4,
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
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Cloud Capacity"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "You're almost out of space."}</span>
      </div>
      <ProgressBar11
        style={{
          position: "relative",
          height: 6,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"90%"}
      />
      <div style={{
        position: "relative",
        width: 100,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "rgb(244,247,250)",
          }}>
            <path d={"M 2.121 4.773 L 5.833 8.486 L 4.773 9.546 L 0 4.773 L 4.773 0 L 5.833 1.06 L 2.121 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-white-0)",
          textDecoration: "underline",
          flexShrink: 0,
        }}>Upgrade Cloud</span>
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
            color: "rgb(244,247,250)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
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
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <UploadCloud2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "16px",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "We have enhanced cloud plans for your needs."}</span>
      <LinkButtons11
        style={{ position: "relative", width: 83, flexShrink: 0 }}
        editText={"View Plans"}
        leftIcon={false}
        rightIcon={false}
        state={"default"}
        size={"md"}
        underline={"on"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
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
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <UploadCloud2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "We have enhanced cloud plans for your needs."}</span>
      <LinkButtons11
        style={{ position: "relative", width: 83, flexShrink: 0 }}
        editText={"View Plans"}
        leftIcon={false}
        rightIcon={false}
        state={"default"}
        size={"md"}
        underline={"on"}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
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
        backgroundColor: "var(--state-information-lighter)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <UploadCloud2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--static-static-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "We have enhanced cloud plans for your needs."}</span>
      <LinkButtons11Modifiable5
        style={{ position: "relative", width: 73, flexShrink: 0 }}
        editText={"View Plans"}
        leftIcon={false}
        rightIcon={false}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
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
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(255,255,255)",
          }}>{props.icon1 ?? <UploadCloud2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "We have enhanced cloud plans for your needs."}</span>
      <div style={{
        position: "relative",
        width: 73,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
            color: "rgb(244,247,250)",
          }}>
            <path d={"M 2.121 4.773 L 5.833 8.486 L 4.773 9.546 L 0 4.773 L 4.773 0 L 5.833 1.06 L 2.121 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-white-0)",
          textDecoration: "underline",
          flexShrink: 0,
        }}>View Plans</span>
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
            color: "rgb(244,247,250)",
          }}>
            <path d={"M 3.712 4.773 L 0 1.06 L 1.06 0 L 5.833 4.773 L 1.06 9.546 L 0 8.486 L 3.712 4.773 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
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
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <GiftLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
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
        }}>{props.text1 ?? "Claim your gift!"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Find it on Benefits page."}</span>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
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
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <GiftLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
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
        }}>{props.text1 ?? "Claim your gift!"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Find it on Benefits page."}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
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
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "var(--state-information-lighter)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <GiftLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--static-static-white)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Claim your gift!"}</span>
        <span style={{
          position: "relative",
          opacity: 0.8,
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Find it on Benefits page."}</span>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
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
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "rgba(0,159,175,0.1)",
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
            flexShrink: 0,
            color: "rgb(51,92,255)",
          }}>{props.icon1 ?? <GiftLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
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
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-white-0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Claim your gift!"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-disabled-300)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Find it on Benefits page."}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        editTitle={"Cloud Storage"}
        editDescription={"1.6 GB of 2 GB used"}
        linkButton={false}
        type={"🔼 on top"}
        showBottom={"on"}
      />
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--bg-weak-50)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.text1 ?? "File Syncing"}</span>
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
        }}>{props.text2 ?? "(Paused)"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <PlayCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ProgressBarLabel11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        editTitle={"Cloud Storage"}
        editDescription={"1.6 GB of 2 GB used"}
        linkButton={false}
        type={"🔼 on top"}
        showBottom={"on"}
      />
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.text1 ?? "File Syncing"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "(Paused)"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <PlayCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "0px 8px 0px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
            color: "var(--static-static-white)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Cloud Storage"}</span>
          <span style={{
            position: "relative",
            opacity: 0.8,
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-white-0)",
            flexShrink: 0,
          }}>{props.text2 ?? "80%"}</span>
        </div>
        <div style={{
          position: "relative",
          height: 6,
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--primary-dark)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 160,
            height: 6,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(1,0,0,-1,0,6)",
              transformOrigin: "0 0",
              width: 160,
              height: 6,
              borderRadius: 999,
              backgroundColor: "rgb(51,92,255)",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          opacity: 0.8,
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "flex-start",
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
            color: "var(--static-static-white)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "1.6 GB of 2 GB used"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--bg-weak-50)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.text4 ?? "File Syncing"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
        }}>(Paused)</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <PlayCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "0px 8px 0px 8px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
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
            color: "rgb(14,18,27)",
            flexGrow: 1,
          }}>Cloud Storage</span>
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
          }}>80%</span>
        </div>
        <div style={{
          position: "relative",
          height: 6,
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgb(225,228,234)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 160,
            height: 6,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(1,0,0,-1,0,6)",
              transformOrigin: "0 0",
              width: 160,
              height: 6,
              borderRadius: 999,
              backgroundColor: "var(--primary-base)",
            }} />
          </div>
        </div>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>1.6 GB of 2 GB used</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--bg-weak-50)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 6px 6px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.text1 ?? "File Syncing"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--text-sub-600)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "(Paused)"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <PlayCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CustomerService2Fill />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.011em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Need Support"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-sub-600)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Contact with one of our experts to get support."}</span>
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon2 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-weak-50)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <CustomerService2Fill />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.011em",
          color: "var(--text-strong-950)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Need Support"}</span>
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
      }}>{props.text2 ?? "Contact with one of our experts to get support."}</span>
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon2 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--primary-base)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <CustomerService2Fill />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.011em",
          color: "var(--static-static-white)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Need Support"}</span>
      </div>
      <span style={{
        position: "relative",
        opacity: 0.8,
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--static-static-white)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Contact with one of our experts to get support."}</span>
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon2 ?? <CompactButton11 style2={"modifiable"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 232,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "var(--bg-surface-800)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon1 ?? <CustomerService2Fill />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          letterSpacing: "-0.011em",
          color: "var(--text-white-0)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Need Support"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-disabled-300)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "Contact with one of our experts to get support."}</span>
      {props.dismissIcon && (
      <div style={{ position: "absolute", left: 196, top: 12 }}>{props.icon2 ?? <CompactButton11 style2={"ghost"} state={"default"} size={"lg"} fullRadius={"off"} />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=Daily Meeting, 🏵️ Style=Stroke
    "type=daily meeting|style2=stroke": __body0,
    // figma: 🧩 Type=Daily Meeting, 🏵️ Style=Gray
    "type=daily meeting|style2=gray": __body1,
    // figma: 🧩 Type=Daily Meeting, 🏵️ Style=Primary
    "type=daily meeting|style2=primary": __body2,
    // figma: 🧩 Type=Daily Meeting, 🏵️ Style=Neutral
    "type=daily meeting|style2=neutral": __body3,
    // figma: 🧩 Type=Progress Bar, 🏵️ Style=Stroke
    "type=progress bar|style2=stroke": __body4,
    // figma: 🧩 Type=Progress Bar, 🏵️ Style=Gray
    "type=progress bar|style2=gray": __body5,
    // figma: 🧩 Type=Progress Bar, 🏵️ Style=Primary
    "type=progress bar|style2=primary": __body6,
    // figma: 🧩 Type=Progress Bar, 🏵️ Style=Neutral
    "type=progress bar|style2=neutral": __body7,
    // figma: 🧩 Type=Icon & Link, 🏵️ Style=Stroke
    "type=icon & link|style2=stroke": __body8,
    // figma: 🧩 Type=Icon & Link, 🏵️ Style=Gray
    "type=icon & link|style2=gray": __body9,
    // figma: 🧩 Type=Icon & Link, 🏵️ Style=Primary
    "type=icon & link|style2=primary": __body10,
    // figma: 🧩 Type=Icon & Link, 🏵️ Style=Neutral
    "type=icon & link|style2=neutral": __body11,
    // figma: 🧩 Type=Left Icon, 🏵️ Style=Stroke
    "type=left icon|style2=stroke": __body12,
    // figma: 🧩 Type=Left Icon, 🏵️ Style=Gray
    "type=left icon|style2=gray": __body13,
    // figma: 🧩 Type=Left Icon, 🏵️ Style=Primary
    "type=left icon|style2=primary": __body14,
    // figma: 🧩 Type=Left Icon, 🏵️ Style=Neutral
    "type=left icon|style2=neutral": __body15,
    // figma: 🧩 Type=Cloud Storage, 🏵️ Style=Stroke
    "type=cloud storage|style2=stroke": __body16,
    // figma: 🧩 Type=Cloud Storage, 🏵️ Style=Gray
    "type=cloud storage|style2=gray": __body17,
    // figma: 🧩 Type=Cloud Storage, 🏵️ Style=Primary
    "type=cloud storage|style2=primary": __body18,
    // figma: 🧩 Type=Cloud Storage, 🏵️ Style=Neutral
    "type=cloud storage|style2=neutral": __body19,
    // figma: 🧩 Type=Support, 🏵️ Style=Stroke
    "type=support|style2=stroke": __body20,
    // figma: 🧩 Type=Support, 🏵️ Style=Gray
    "type=support|style2=gray": __body21,
    // figma: 🧩 Type=Support, 🏵️ Style=Primary
    "type=support|style2=primary": __body22,
    // figma: 🧩 Type=Support, 🏵️ Style=Neutral
    "type=support|style2=neutral": __body23,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default FeatureCardsSidebar11;
