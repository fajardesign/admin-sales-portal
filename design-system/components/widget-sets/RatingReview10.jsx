import { _LinkButtons11Gray5 as LinkButtons11Gray5 } from './LinkButtons11Gray5.jsx';
import { _RatingItems10 as RatingItems10 } from './RatingItems10.jsx';

// figma node: 532:4340 Rating & Review [1.0] (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "alignment=" + __venc(p.alignment);

export function _RatingReview10(_p = {}) {
  const props = { ..._p, description: _p.description ?? true, editText: _p.editText ?? "4.5 ∙ 5.2K Ratings", type: _p.type ?? "⭐️ star", alignment: _p.alignment ?? "only ratings", linkButton: _p.linkButton ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
      <RatingItems10
        style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"⭐️ star"}
        state={"half"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon4 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <RatingItems10
          style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}
          type={"⭐️ star"}
          state={"half"}
        />
      </div>
      {props.description && (
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
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
        {props.linkButton && (
        <LinkButtons11Gray5
          style={{ position: "relative", width: 71, flexShrink: 0 }}
          editText={"18 reviews"}
          leftIcon={false}
          rightIcon={false}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon4 ?? <RatingItems10 type={"⭐️ star"} state={"full"} />}</div>
        <RatingItems10
          style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}
          type={"⭐️ star"}
          state={"half"}
        />
      </div>
      {props.description && (
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.linkButton && (
        <LinkButtons11Gray5
          style={{ position: "relative", width: 71, flexShrink: 0 }}
          editText={"18 reviews"}
          leftIcon={false}
          rightIcon={false}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
      <div style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon4 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
      <RatingItems10
        style={{
          position: "relative",
          width: 20,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        type={"💜 heart"}
        state={"half"}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon4 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <RatingItems10
          style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}
          type={"💜 heart"}
          state={"half"}
        />
      </div>
      {props.description && (
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
          color: "var(--text-strong-950)",
          flexShrink: 0,
        }}>{props.editText}</span>
        {props.linkButton && (
        <LinkButtons11Gray5
          style={{ position: "relative", width: 71, flexShrink: 0 }}
          editText={"18 reviews"}
          leftIcon={false}
          rightIcon={false}
        />
        )}
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon2 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon3 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon4 ?? <RatingItems10 type={"💜 heart"} state={"full"} />}</div>
        <RatingItems10
          style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}
          type={"💜 heart"}
          state={"half"}
        />
      </div>
      {props.description && (
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
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-strong-950)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.editText}</span>
        {props.linkButton && (
        <LinkButtons11Gray5
          style={{ position: "relative", width: 71, flexShrink: 0 }}
          editText={"18 reviews"}
          leftIcon={false}
          rightIcon={false}
        />
        )}
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: 🧩 Type=⭐️ Star, 🎯 Alignment=Only Ratings
    "type=⭐️ star|alignment=only ratings": __body0,
    // figma: 🧩 Type=⭐️ Star, 🎯 Alignment=Vertical
    "type=⭐️ star|alignment=vertical": __body1,
    // figma: 🧩 Type=⭐️ Star, 🎯 Alignment=Horizontal
    "type=⭐️ star|alignment=horizontal": __body2,
    // figma: 🧩 Type=💜 Heart, 🎯 Alignment=Only Ratings
    "type=💜 heart|alignment=only ratings": __body3,
    // figma: 🧩 Type=💜 Heart, 🎯 Alignment=Vertical
    "type=💜 heart|alignment=vertical": __body4,
    // figma: 🧩 Type=💜 Heart, 🎯 Alignment=Horizontal
    "type=💜 heart|alignment=horizontal": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default _RatingReview10;
