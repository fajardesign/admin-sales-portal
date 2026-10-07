import { _AppleMusic as AppleMusic } from './AppleMusic.jsx';
import { _CreativeCloud as CreativeCloud } from './CreativeCloud.jsx';
import { _GroveShark as GroveShark } from './GroveShark.jsx';
import { _LinkButtons11Gray10 as LinkButtons11Gray10 } from './LinkButtons11Gray10.jsx';
import { _Mailchimp as Mailchimp } from './Mailchimp.jsx';
import { _MicrosoftOffice as MicrosoftOffice } from './MicrosoftOffice.jsx';
import { _Netflix as Netflix } from './Netflix.jsx';
import { _Spotify as Spotify } from './Spotify.jsx';
import { _Twitch as Twitch } from './Twitch.jsx';
import { _YoutubeMusic as YoutubeMusic } from './YoutubeMusic.jsx';

// figma node: 3946:16805 Promotional Cards [My Subscriptions] [1.1] (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "brand=" + __venc(p.brand);

export function PromotionalCardsMySubscriptions1(_p = {}) {
  const props = { ..._p, brand: _p.brand ?? "apple music" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <AppleMusic />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <AppleMusic style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Apple Music"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Spotify />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <Spotify style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Spotify"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <GroveShark />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <GroveShark style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Grove Shark"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <YoutubeMusic />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <YoutubeMusic style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on YouTube Music"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Netflix />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <Netflix style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Netflix"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <MicrosoftOffice />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <MicrosoftOffice style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Microsoft Office"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <CreativeCloud />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <CreativeCloud style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Creative Cloud"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Twitch />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <Twitch style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Twitch"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 320,
      height: 124,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-weak-50)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 16,
          top: 16,
          width: 32,
          height: 32,
        }}>{props.icon1 ?? <Mailchimp />}</div>
      <div style={{
          position: "absolute",
          left: 232,
          top: -70,
          width: 164,
          height: 164,
        }}>
        <Mailchimp style={{ transform: "scale(5.125, 5.125)", transformOrigin: "0 0" }} />
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 64,
        width: 288,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
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
        }}>{props.text1 ?? "50% discount on Mailchimp"}</span>
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
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{props.text2 ?? "For only $4.99 per month!"}</span>
          <div style={{ position: "relative", width: 66, flexShrink: 0 }}>{props.icon2 ?? <LinkButtons11Gray10 editText={"Learn More"} leftIcon={false} rightIcon={false} />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 🎗️ Brand=Apple Music
    "brand=apple music": __body0,
    // figma: 🎗️ Brand=Spotify
    "brand=spotify": __body1,
    // figma: 🎗️ Brand=Grove Shark
    "brand=grove shark": __body2,
    // figma: 🎗️ Brand=YouTube Music
    "brand=youtube music": __body3,
    // figma: 🎗️ Brand=Netflix
    "brand=netflix": __body4,
    // figma: 🎗️ Brand=Microsoft Office
    "brand=microsoft office": __body5,
    // figma: 🎗️ Brand=Creative Cloud
    "brand=creative cloud": __body6,
    // figma: 🎗️ Brand=Twitch
    "brand=twitch": __body7,
    // figma: 🎗️ Brand=Mailchimp
    "brand=mailchimp": __body8,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PromotionalCardsMySubscriptions1;

/* Figma family alias */
export const PromotionalCardsMySubscriptions11 = PromotionalCardsMySubscriptions1;
