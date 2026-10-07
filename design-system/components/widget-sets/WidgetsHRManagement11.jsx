import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _AvatarGroup11 as AvatarGroup11 } from './AvatarGroup11.jsx';
import { _Badge11 as Badge11 } from './Badge11.jsx';
import { _Badge11BasicOrange13 as Badge11BasicOrange13 } from './Badge11BasicOrange13.jsx';
import { _Book3Line as Book3Line } from './Book3Line.jsx';
import { _BottomStatus11 as BottomStatus11 } from './BottomStatus11.jsx';
import { Buttons11NeutralStroke17 } from '../misc-sets/Buttons11NeutralStroke17.jsx';
import { _Buttons11NeutralStroke9 as Buttons11NeutralStroke9 } from './Buttons11NeutralStroke9.jsx';
import { _CalendarLine as CalendarLine } from './CalendarLine.jsx';
import { _ChartLegends11 as ChartLegends11 } from './ChartLegends11.jsx';
import { _CircularProgressBar11 as CircularProgressBar11 } from './CircularProgressBar11.jsx';
import { _CloseCircleFill as CloseCircleFill } from './CloseCircleFill.jsx';
import { _ContentDivider11 as ContentDivider11 } from './ContentDivider11.jsx';
import { _ContentDivider11Line as ContentDivider11Line } from './ContentDivider11Line.jsx';
import { _DateSelector11 as DateSelector11 } from './DateSelector11.jsx';
import { DaySelectionSchedule11 } from './DaySelectionSchedule11.jsx';
import { _DiscussLine as DiscussLine } from './DiscussLine.jsx';
import { EmployeeSpotlightTabsEmployeeSpotlight } from './EmployeeSpotlightTabsEmployeeSpotlight.jsx';
import { _EmptyStatesHRManagement1 as EmptyStatesHRManagement1 } from './EmptyStatesHRManagement1.jsx';
import { _Evernote as Evernote } from './Evernote.jsx';
import { _FileChartLine as FileChartLine } from './FileChartLine.jsx';
import { _FlashlightLine as FlashlightLine } from './FlashlightLine.jsx';
import { _FolderChartLine as FolderChartLine } from './FolderChartLine.jsx';
import { GaugeBarTimeOff1 } from './GaugeBarTimeOff1.jsx';
import { _InfoCustomFill as InfoCustomFill } from './InfoCustomFill.jsx';
import { _LinkButtons11 as LinkButtons11 } from './LinkButtons11.jsx';
import { _Loom as Loom } from './Loom.jsx';
import { _MacbookLine as MacbookLine } from './MacbookLine.jsx';
import { MondayCom } from './MondayCom.jsx';
import { _PencilLine as PencilLine } from './PencilLine.jsx';
import { _ProgressBarLine11 as ProgressBarLine11 } from './ProgressBarLine11.jsx';
import { _RatingBarArea11 as RatingBarArea11 } from './RatingBarArea11.jsx';
import { _RatingItems10 as RatingItems10 } from './RatingItems10.jsx';
import { ScheduleDetailTabsScheduleMenu } from './ScheduleDetailTabsScheduleMenu.jsx';
import { _Search2Line as Search2Line } from './Search2Line.jsx';
import { _SelectBoxCircleFill as SelectBoxCircleFill } from './SelectBoxCircleFill.jsx';
import { _StarSmileLine as StarSmileLine } from './StarSmileLine.jsx';
import { _StickyNoteLine as StickyNoteLine } from './StickyNoteLine.jsx';
import { _TableHeaderCell11 as TableHeaderCell11 } from './TableHeaderCell11.jsx';
import { _TableRowCell11 as TableRowCell11 } from './TableRowCell11.jsx';
import { _TextInput11 as TextInput11 } from './TextInput11.jsx';
import { _TimeFill as TimeFill } from './TimeFill.jsx';
import { _TimeLine as TimeLine } from './TimeLine.jsx';
import { _TimerFlashLine as TimerFlashLine } from './TimerFlashLine.jsx';
import { _TimerLine as TimerLine } from './TimerLine.jsx';
import { TimerTimeTracker11 } from './TimerTimeTracker11.jsx';
import { _Tooltip11 as Tooltip11 } from './Tooltip11.jsx';
import { _UserStarLine as UserStarLine } from './UserStarLine.jsx';
import { WidgetsFinanceBanking11 } from './WidgetsFinanceBanking11.jsx';

// figma node: 3851:32690 Widgets [HR Management] [1.1] (28 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "emptyState=" + __venc(p.emptyState);

export function WidgetsHRManagement11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "⏰ time off", emptyState: _p.emptyState ?? "off" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <TimeLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Time Off"}</span>
        </div>
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
      <GaugeBarTimeOff1
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          height: "auto",
          width: "auto",
        }}
        percentage={"50%"}
      />
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
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(14,18,27)",
          }}>{props.icon3 ?? <TimeFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text2 ?? "Jan 15, 2024"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-soft-400)",
            flexShrink: 0,
          }}>{props.text3 ?? "(Casual)"}</span>
        </div>
        <div style={{ position: "relative", width: 62, flexShrink: 0 }}>{props.icon4 ?? <Badge11BasicOrange13 editText={"Pending"} />}</div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
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
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(255,145,71)",
          }}>
          <SelectBoxCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(255,145,71)" }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>{props.text4 ?? "Jan 15, 2024"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-soft-400)",
            flexShrink: 0,
          }}>(Casual)</span>
        </div>
        <Badge11
          style={{ position: "relative", width: 74, flexShrink: 0 }}
          editText={"Confirmed"}
          type={"📂 basic"}
          color={"💚 green"}
          size={"md"}
          number={"off"}
          disabled={"off"}
        />
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
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
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
            color: "rgb(31,193,107)",
          }}>
          <CloseCircleFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(31,193,107)" }} />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
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
          }}>Feb 12, 2024</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-soft-400)",
            flexShrink: 0,
          }}>(Casual)</span>
        </div>
        <Badge11
          style={{ position: "relative", width: 65, flexShrink: 0 }}
          editText={"Rejected"}
          type={"📂 basic"}
          color={"💔 red"}
          size={"md"}
          number={"off"}
          disabled={"off"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <TimeLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Time Off"}</span>
        </div>
      </div>
      <GaugeBarTimeOff1
        style={{
          position: "relative",
          height: 160,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        percentage={"0%"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 72,
            height: 72,
            flexShrink: 0,
          }}>{props.icon2 ?? <EmptyStatesHRManagement1 type={"⏰ time off"} style={{ transform: "scale(0.486, 0.486)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "No records of tracked time yet."}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <FlashlightLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Current Project"}</span>
        </div>
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Project Name"}</span>
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
                width: 24,
                height: 24,
                flexShrink: 0,
              }}>{props.icon3 ?? <MondayCom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
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
            }}>{props.text3 ?? "Monday.com Redesign"}</span>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-away-lighter)",
              display: "flex",
              flexDirection: "row",
              gap: 2,
              padding: "2px 8px 2px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 2,
                  width: 12,
                  height: 12,
                  color: "rgb(31,193,107)",
                }}>
                  <path d={"M 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 Z M 6.6 6 L 6.6 3 L 5.4 3 L 5.4 7.2 L 9 7.2 L 9 6 L 6.6 6 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--state-away-base)",
                flexShrink: 0,
              }}>In Progress</span>
            </div>
          </div>
        </div>
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
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.text4 ?? "Project Manager"}</span>
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
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                }}>{props.icon4 ?? <Avatar11 persona={"laura perez"} size={"24"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} />}</div>
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
              }}>Laura P.</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Design Lead</span>
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
              <Avatar11
                style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                }}
                persona={"arthur taylor"}
                size={"24"}
                image={"off"}
                solidBG={"off"}
                memoji={"off"}
                illustration={"on"}
                text={"off"}
                icon={"off"}
              />
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
              }}>Arthur G.</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
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
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Team</span>
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
            <AvatarGroup11
              style={{ position: "relative", width: 84, flexShrink: 0 }}
              showMore={false}
              size={"24"}
            />
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexGrow: 1,
            }}>+8 people</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
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
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Timeline</span>
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
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>
              <CalendarLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(14,18,27)" }} />
            </div>
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
            }}>12/10/2022 ∙ 01/04/2023</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 6,
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
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Description</span>
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
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>
              <PencilLine style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(14,18,27)" }} />
            </div>
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
            }}>Mobile and desktop app design for the new look of the brand.</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <FlashlightLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Current Project"}</span>
        </div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesHRManagement1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"⚡️ current project"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "No records of projects yet.\nPlease check back later."}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <MacbookLine />}</div>
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
          }}>{props.text1 ?? "Status Tracker"}</span>
        </div>
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "Absent"}</span>
        <div style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          gap: 14,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 40,
            height: 40,
            borderRadius: 999,
            backgroundColor: "var(--neutral-slate-200)",
            flexShrink: 0,
          }}>
            <div className="fig-asset-0539da85a66c9f42" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              borderRadius: 999,
            }} />
            <div style={{
                position: "absolute",
                left: 28,
                top: 22,
                width: 18,
                height: 18,
              }}>
              <BottomStatus11
                style={{ transform: "scale(0.563, 0.563)", transformOrigin: "0 0" }}
                type={"⚪️ offline"}
              />
            </div>
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
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
              }}>James Brown</span>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>🧠</span>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-sub-600)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>Replaced by Arthur T.</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-information-light)",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "2px 8px 2px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                position: "absolute",
                left: 3,
                top: 3,
                width: 18,
                height: 18,
                color: "var(--icon-strong-950)",
              }}>
                <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 4.5 8.1 L 4.5 9.9 L 13.5 9.9 L 13.5 8.1 L 4.5 8.1 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--state-faded-base)",
              flexShrink: 0,
            }}>Absent</span>
          </div>
          <div style={{
            position: "relative",
            width: 32,
            height: 20,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 28,
              height: 16,
              borderRadius: 999,
              backgroundColor: "var(--bg-soft-200)",
            }} />
            <div style={{
              position: "absolute",
              left: 4,
              top: 4,
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "var(--static-static-white)",
              boxShadow: "0px 4px 8px 0px rgba(27,28,29,0.06), 0px 2px 4px 0px rgba(14,18,27,0.08)",
            }} />
          </div>
        </div>
      </div>
      <ContentDivider11Line style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
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
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "Away"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: 999,
              backgroundColor: "var(--yellow-200)",
              flexShrink: 0,
            }}>
              <div className="fig-asset-bdd682b59941c548" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                borderRadius: 999,
              }} />
              <div style={{
                  position: "absolute",
                  left: 28,
                  top: 22,
                  width: 18,
                  height: 18,
                }}>
                <BottomStatus11
                  style={{ transform: "scale(0.563, 0.563)", transformOrigin: "0 0" }}
                  type={"🟡 away"}
                />
              </div>
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
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
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
                }}>Sophia Williams</span>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-sub-600)",
                  flexShrink: 0,
                }}>🧠</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "var(--text-sub-600)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Synergy</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-information-light)",
              display: "flex",
              flexDirection: "row",
              gap: 2,
              padding: "2px 8px 2px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 18,
                  height: 18,
                  color: "var(--icon-strong-950)",
                }}>
                  <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9.9 9 L 9.9 4.5 L 8.1 4.5 L 8.1 10.8 L 13.5 10.8 L 13.5 9 L 9.9 9 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--state-warning-base)",
                flexShrink: 0,
              }}>25m</span>
            </div>
            <div style={{
              position: "relative",
              width: 32,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 28,
                height: 16,
                borderRadius: 999,
                backgroundColor: "var(--bg-soft-200)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--static-static-white)",
                boxShadow: "0px 4px 8px 0px rgba(27,28,29,0.06), 0px 2px 4px 0px rgba(14,18,27,0.08)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: 999,
              backgroundColor: "var(--jewel-blue-200)",
              flexShrink: 0,
            }}>
              <div className="fig-asset-417942d6127e1fbb" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                borderRadius: 999,
              }} />
              <div style={{
                  position: "absolute",
                  left: 28,
                  top: 22,
                  width: 18,
                  height: 18,
                }}>
                <BottomStatus11
                  style={{ transform: "scale(0.563, 0.563)", transformOrigin: "0 0" }}
                  type={"🟡 away"}
                />
              </div>
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
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
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
                }}>Arthur Taylor</span>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-sub-600)",
                  flexShrink: 0,
                }}>🧠</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "var(--text-sub-600)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Apex</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-information-light)",
              display: "flex",
              flexDirection: "row",
              gap: 2,
              padding: "2px 8px 2px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 18,
                  height: 18,
                  color: "var(--icon-strong-950)",
                }}>
                  <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9.9 9 L 9.9 4.5 L 8.1 4.5 L 8.1 10.8 L 13.5 10.8 L 13.5 9 L 9.9 9 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--state-warning-base)",
                flexShrink: 0,
              }}>12m</span>
            </div>
            <div style={{
              position: "relative",
              width: 32,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 28,
                height: 16,
                borderRadius: 999,
                backgroundColor: "var(--bg-soft-200)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--static-static-white)",
                boxShadow: "0px 4px 8px 0px rgba(27,28,29,0.06), 0px 2px 4px 0px rgba(14,18,27,0.08)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 40,
              height: 40,
              borderRadius: 999,
              backgroundColor: "var(--gold-200)",
              flexShrink: 0,
            }}>
              <div className="fig-asset-839477ecfb128fb9" style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 40,
                height: 40,
                borderRadius: 999,
              }} />
              <div style={{
                  position: "absolute",
                  left: 28,
                  top: 22,
                  width: 18,
                  height: 18,
                }}>
                <BottomStatus11
                  style={{ transform: "scale(0.563, 0.563)", transformOrigin: "0 0" }}
                  type={"🟡 away"}
                />
              </div>
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
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
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
                }}>Emma Wright</span>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-sub-600)",
                  flexShrink: 0,
                }}>🧠</span>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "16px",
                color: "var(--text-sub-600)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Pulse</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--state-information-light)",
              display: "flex",
              flexDirection: "row",
              gap: 2,
              padding: "2px 8px 2px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 18,
                  height: 18,
                  color: "var(--icon-strong-950)",
                }}>
                  <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9.9 9 L 9.9 4.5 L 8.1 4.5 L 8.1 10.8 L 13.5 10.8 L 13.5 9 L 9.9 9 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                color: "var(--state-warning-base)",
                flexShrink: 0,
              }}>8m</span>
            </div>
            <div style={{
              position: "relative",
              width: 32,
              height: 20,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 28,
                height: 16,
                borderRadius: 999,
                backgroundColor: "var(--bg-soft-200)",
              }} />
              <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--static-static-white)",
                boxShadow: "0px 4px 8px 0px rgba(27,28,29,0.06), 0px 2px 4px 0px rgba(14,18,27,0.08)",
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <MacbookLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Status Tracker"}</span>
        </div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesHRManagement1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"💻 status tracker"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "No records of statuses yet.\nPlease check back later."}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <StickyNoteLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Notes"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 113,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={10.500} height={10.500} viewBox="0 0 10.500 10.500" fill="none" style={{
              position: "absolute",
              left: 4.75,
              top: 4.75,
              width: 10.5,
              height: 10.5,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.5 4.5 L 4.5 0 L 6 0 L 6 4.5 L 10.5 4.5 L 10.5 6 L 6 6 L 6 10.5 L 4.5 10.5 L 4.5 6 L 0 6 L 0 4.5 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 4px 0px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Add Note</span>
          </div>
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
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 18,
              height: 18,
              color: "rgb(14,18,27)",
            }}>
              <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 9 16.2 C 10.91 16.2 12.741 15.441 14.091 14.091 C 15.441 12.741 16.2 10.91 16.2 9 C 16.2 7.09 15.441 5.259 14.091 3.909 C 12.741 2.559 10.91 1.8 9 1.8 C 7.09 1.8 5.259 2.559 3.909 3.909 C 2.559 5.259 1.8 7.09 1.8 9 C 1.8 10.91 2.559 12.741 3.909 14.091 C 5.259 15.441 7.09 16.2 9 16.2 L 9 16.2 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
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
              }}>Text Inputs for Design System</span>
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
              }}>Search for inspiration to provide a rich content of text inputs for the design system.</span>
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
              <Badge11
                style={{ position: "relative", flexShrink: 0 }}
                editText={"Today"}
                type={"📂 basic"}
                color={"💔 red"}
                size={"md"}
                number={"off"}
                disabled={"off"}
              />
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 999,
                backgroundColor: "var(--state-warning-lighter)",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "2px 8px 2px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--state-warning-base)",
                  flexShrink: 0,
                }}>To-do</span>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: "rgb(14,18,27)",
                  }}>
                  <CalendarLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(14,18,27)" }} />
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-soft-400)",
                  flexShrink: 0,
                }}>Aug 03</span>
              </div>
            </div>
          </div>
        </div>
        <ContentDivider11Line style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
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
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 18,
              height: 18,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 8.103 12.6 L 14.466 6.236 L 13.193 4.963 L 8.103 10.055 L 5.557 7.509 L 4.284 8.781 L 8.103 12.6 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
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
                color: "var(--text-soft-400)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Meeting with Arthur Taylor</span>
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
                color: "var(--text-soft-400)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Discuss the MVP version of Apex Mobile and Desktop app.</span>
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
              <Badge11
                style={{ position: "relative", flexShrink: 0 }}
                editText={"Today"}
                type={"📂 basic"}
                color={"🩶 gray"}
                size={"md"}
                number={"off"}
                disabled={"on"}
              />
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 999,
                boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "2px 8px 2px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-disabled-300)",
                  flexShrink: 0,
                }}>Meeting</span>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: "rgb(14,18,27)",
                  }}>
                  <CalendarLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(14,18,27)" }} />
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-soft-400)",
                  flexShrink: 0,
                }}>Aug 02</span>
              </div>
            </div>
          </div>
        </div>
        <ContentDivider11Line style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
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
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 18,
              height: 18,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 9 18 C 4.029 18 0 13.971 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 Z M 8.103 12.6 L 14.466 6.236 L 13.193 4.963 L 8.103 10.055 L 5.557 7.509 L 4.284 8.781 L 8.103 12.6 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
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
                color: "var(--text-soft-400)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Check neutral and state colors</span>
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
                color: "var(--text-soft-400)",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>Button components will be revised and designed again due to a few errors.</span>
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
                boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "2px 8px 2px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-disabled-300)",
                  flexShrink: 0,
                }}>Yesterday</span>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 999,
                boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: "2px 8px 2px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-disabled-300)",
                  flexShrink: 0,
                }}>Important</span>
              </div>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                justifyContent: "flex-end",
                alignItems: "center",
                flexWrap: "nowrap",
                flexGrow: 1,
              }}>
                <div style={{
                    position: "relative",
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    color: "rgb(14,18,27)",
                  }}>
                  <CalendarLine style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(14,18,27)" }} />
                </div>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-soft-400)",
                  flexShrink: 0,
                }}>Aug 01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <StickyNoteLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Notes"}</span>
        </div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesHRManagement1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"📙 notes"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "There are no records of notes yet.\nPlease check back later."}</span>
        <div style={{
          position: "relative",
          width: 113,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={10.500} height={10.500} viewBox="0 0 10.500 10.500" fill="none" style={{
              position: "absolute",
              left: 4.75,
              top: 4.75,
              width: 10.5,
              height: 10.5,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 4.5 4.5 L 4.5 0 L 6 0 L 6 4.5 L 10.5 4.5 L 10.5 6 L 6 6 L 6 10.5 L 4.5 10.5 L 4.5 6 L 0 6 L 0 4.5 L 4.5 4.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 4px 0px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Add Note</span>
          </div>
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
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 352,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "16px 16px 16px 16px",
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
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon1 ?? <CalendarLine />}</div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "-0.011em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>{props.text1 ?? "Schedule"}</span>
          </div>
          <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
        </div>
        <DateSelector11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          leftIcon={"on"}
          rightIcon={"on"}
        />
        <DaySelectionSchedule11 style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <div style={{
          position: "relative",
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
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
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Search</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "rgb(0,159,175)",
              flexShrink: 0,
            }}>*</span>
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
            }}>(Optional)</span>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                position: "absolute",
                left: 3.75,
                top: 3.75,
                width: 12.5,
                height: 12.5,
                color: "var(--icon-disabled-300)",
              }}>
                <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                  position: "absolute",
                  left: 5.667,
                  top: 4.181,
                  width: 4.667,
                  height: 7.637,
                  color: "rgb(14,18,27)",
                }}>
                  <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Help?</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                  position: "absolute",
                  left: 5.667,
                  top: 4.181,
                  width: 4.667,
                  height: 7.637,
                  color: "rgb(14,18,27)",
                }}>
                  <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(82,88,102)",
              }}>
              <Search2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(82,88,102)" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Search...</span>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "2px 6px 2px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                letterSpacing: "0.040em",
                color: "var(--text-soft-400)",
                textTransform: "uppercase",
                flexShrink: 0,
              }}>⌘1</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={16.200} height={10.800} viewBox="0 0 16.200 10.800" fill="none" style={{
                position: "absolute",
                left: 3.9,
                top: 6.6,
                width: 16.2,
                height: 10.8,
                color: "var(--icon-strong-950)",
              }}>
                <path d={"M 6.3 10.8 L 9.9 10.8 L 9.9 9 L 6.3 9 L 6.3 10.8 Z M 0 0 L 0 1.8 L 16.2 1.8 L 16.2 0 L 0 0 Z M 2.7 6.3 L 13.5 6.3 L 13.5 4.5 L 2.7 4.5 L 2.7 6.3 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
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
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 12,
                height: 12,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 Z M 5.4 5.4 L 5.4 9 L 6.6 9 L 6.6 5.4 L 5.4 5.4 Z M 5.4 3 L 5.4 4.2 L 6.6 4.2 L 6.6 3 L 5.4 3 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-sub-600)",
              flexGrow: 1,
            }}>This is a hint text to help user.</span>
          </div>
        </div>
      </div>
      <ScheduleDetailTabsScheduleMenu
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"meetings"}
        emptyState={"off"}
      />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 352,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--bg-white-0)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "16px 16px 16px 16px",
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
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "4px 0px 4px 0px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
                color: "rgb(14,18,27)",
              }}>{props.icon1 ?? <CalendarLine />}</div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "-0.011em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>{props.text1 ?? "Schedule"}</span>
          </div>
          <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
        </div>
        <DateSelector11
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          leftIcon={"on"}
          rightIcon={"on"}
        />
        <DaySelectionSchedule11 style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <div style={{
          position: "relative",
          height: 44,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1,
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
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Search</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "rgb(0,159,175)",
              flexShrink: 0,
            }}>*</span>
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
            }}>(Optional)</span>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
                position: "absolute",
                left: 3.75,
                top: 3.75,
                width: 12.5,
                height: 12.5,
                color: "var(--icon-disabled-300)",
              }}>
                <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
              </svg>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                  position: "absolute",
                  left: 5.667,
                  top: 4.181,
                  width: 4.667,
                  height: 7.637,
                  color: "rgb(14,18,27)",
                }}>
                  <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>Help?</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                  position: "absolute",
                  left: 5.667,
                  top: 4.181,
                  width: 4.667,
                  height: 7.637,
                  color: "rgb(14,18,27)",
                }}>
                  <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            padding: "10px 10px 10px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
                color: "rgb(82,88,102)",
              }}>
              <Search2Line style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0", color: "rgb(82,88,102)" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Search...</span>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "2px 6px 2px 6px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "16px",
                letterSpacing: "0.040em",
                color: "var(--text-soft-400)",
                textTransform: "uppercase",
                flexShrink: 0,
              }}>⌘1</span>
            </div>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={16.200} height={10.800} viewBox="0 0 16.200 10.800" fill="none" style={{
                position: "absolute",
                left: 3.9,
                top: 6.6,
                width: 16.2,
                height: 10.8,
                color: "var(--icon-strong-950)",
              }}>
                <path d={"M 6.3 10.8 L 9.9 10.8 L 9.9 9 L 6.3 9 L 6.3 10.8 Z M 0 0 L 0 1.8 L 16.2 1.8 L 16.2 0 L 0 0 Z M 2.7 6.3 L 13.5 6.3 L 13.5 4.5 L 2.7 4.5 L 2.7 6.3 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
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
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
                position: "absolute",
                left: 2,
                top: 2,
                width: 12,
                height: 12,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 Z M 5.4 5.4 L 5.4 9 L 6.6 9 L 6.6 5.4 L 5.4 5.4 Z M 5.4 3 L 5.4 4.2 L 6.6 4.2 L 6.6 3 L 5.4 3 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-sub-600)",
              flexGrow: 1,
            }}>This is a hint text to help user.</span>
          </div>
        </div>
      </div>
      <ScheduleDetailTabsScheduleMenu
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"meetings"}
        emptyState={"on"}
      />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <TimerFlashLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Time Tracker"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 96,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
              <path d={"M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 L 1.5 7.5 C 1.5 10.814 4.186 13.5 7.5 13.5 C 10.814 13.5 13.5 10.814 13.5 7.5 C 13.5 4.186 10.814 1.5 7.5 1.5 C 5.438 1.5 3.618 2.54 2.539 4.125 L 4.5 4.125 L 4.5 5.625 L 0 5.625 L 0 1.125 L 1.5 1.125 L 1.5 3 C 2.868 1.178 5.047 0 7.5 0 Z M 8.25 3.75 L 8.25 7.189 L 10.682 9.621 L 9.621 10.682 L 6.75 7.81 L 6.75 3.75 L 8.25 3.75 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 4px 0px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>History</span>
          </div>
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
      </div>
      <TimerTimeTracker11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"default"}
      />
      <span style={{
        position: "relative",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--text-soft-400)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "Previous Tasks"}</span>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
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
            }}>{props.icon2 ?? <Loom style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
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
            fontWeight: 400,
            fontSize: 11,
            lineHeight: "12px",
            letterSpacing: "0.020em",
            color: "var(--text-strong-950)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Loom Rebranding"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 11,
            lineHeight: "12px",
            letterSpacing: "0.020em",
            color: "var(--text-sub-600)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "1:23:05"}</span>
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
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
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
            }}>{props.icon4 ?? <Evernote style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
        </div>
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
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Evernote App Redesign</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>3:14:26</span>
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
      <WidgetsFinanceBanking11
        style={{
          position: "relative",
          width: 352,
          height: 380,
          flexShrink: 0,
        }}
        type={"💰 exchange"}
        emptyState={"off"}
      />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <TimerFlashLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Time Tracker"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 96,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
              <path d={"M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 C 3.358 15 0 11.642 0 7.5 L 1.5 7.5 C 1.5 10.814 4.186 13.5 7.5 13.5 C 10.814 13.5 13.5 10.814 13.5 7.5 C 13.5 4.186 10.814 1.5 7.5 1.5 C 5.438 1.5 3.618 2.54 2.539 4.125 L 4.5 4.125 L 4.5 5.625 L 0 5.625 L 0 1.125 L 1.5 1.125 L 1.5 3 C 2.868 1.178 5.047 0 7.5 0 Z M 8.25 3.75 L 8.25 7.189 L 10.682 9.621 L 9.621 10.682 L 6.75 7.81 L 6.75 3.75 L 8.25 3.75 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 4px 0px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>History</span>
          </div>
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
      </div>
      <TimerTimeTracker11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 72,
            height: 72,
            flexShrink: 0,
          }}>{props.icon2 ?? <EmptyStatesHRManagement1 type={"🕐 time tracker"} style={{ transform: "scale(0.486, 0.486)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "No records of tracked time yet."}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <StarSmileLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Employee Spotlight"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 86,
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            <svg width={15.375} height={12.750} viewBox="0 0 15.375 12.750" fill="none" style={{
              position: "absolute",
              left: 3.25,
              top: 2.875,
              width: 15.375,
              height: 12.75,
              color: "rgb(153,160,174)",
            }}>
              <path d={"M 7.5 8.625 L 6 8.625 C 4.77 8.625 3.563 8.96 2.509 9.596 C 1.456 10.232 0.597 11.144 0.024 12.233 C 0.008 12.03 0 11.828 0 11.625 C 0 7.483 3.358 4.125 7.5 4.125 L 7.5 0 L 15.375 6.375 L 7.5 12.75 L 7.5 8.625 Z M 6 7.125 L 9 7.125 L 9 9.606 L 12.991 6.375 L 9 3.144 L 9 5.625 L 7.5 5.625 C 6.638 5.624 5.785 5.809 5.001 6.168 C 4.217 6.527 3.52 7.051 2.957 7.705 C 3.926 7.321 4.958 7.124 6 7.125 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            padding: "0px 4px 0px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Share</span>
          </div>
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
      </div>
      <EmployeeSpotlightTabsEmployeeSpotlight
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"overview"}
      />
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <StarSmileLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Employee Spotlight"}</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1,
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
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>Label</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "rgb(0,159,175)",
            flexShrink: 0,
          }}>*</span>
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
          }}>(Optional)</span>
          <div style={{
            position: "relative",
            width: 20,
            height: 20,
            overflow: "hidden",
            flexShrink: 0,
          }}>
            <svg width={12.500} height={12.500} viewBox="0 0 12.500 12.500" fill="none" style={{
              position: "absolute",
              left: 3.75,
              top: 3.75,
              width: 12.5,
              height: 12.5,
              color: "var(--icon-disabled-300)",
            }}>
              <path d={"M 6.25 12.5 C 9.702 12.5 12.5 9.702 12.5 6.25 C 12.5 2.798 9.702 0 6.25 0 C 2.798 0 0 2.798 0 6.25 C 0 9.702 2.798 12.5 6.25 12.5 Z M 7.366 9.459 L 7.466 9.051 C 7.414 9.075 7.331 9.103 7.216 9.134 C 7.102 9.166 6.999 9.182 6.908 9.182 C 6.715 9.182 6.58 9.15 6.501 9.087 C 6.422 9.023 6.383 8.903 6.383 8.728 C 6.383 8.659 6.395 8.555 6.42 8.42 C 6.444 8.284 6.471 8.163 6.502 8.057 L 6.874 6.738 C 6.911 6.617 6.936 6.483 6.949 6.338 C 6.963 6.193 6.969 6.092 6.969 6.034 C 6.969 5.756 6.872 5.53 6.677 5.356 C 6.482 5.182 6.204 5.095 5.844 5.095 C 5.644 5.095 5.432 5.131 5.208 5.202 C 4.984 5.273 4.749 5.358 4.504 5.458 L 4.404 5.867 C 4.477 5.839 4.564 5.81 4.666 5.78 C 4.767 5.75 4.867 5.735 4.963 5.735 C 5.161 5.735 5.294 5.769 5.364 5.835 C 5.433 5.901 5.468 6.02 5.468 6.189 C 5.468 6.282 5.457 6.386 5.434 6.499 C 5.412 6.613 5.383 6.733 5.35 6.86 L 4.976 8.184 C 4.943 8.323 4.918 8.448 4.903 8.558 C 4.888 8.669 4.881 8.777 4.881 8.883 C 4.881 9.155 4.981 9.379 5.182 9.556 C 5.383 9.733 5.665 9.821 6.028 9.821 C 6.264 9.821 6.471 9.791 6.649 9.729 C 6.827 9.667 7.066 9.577 7.366 9.459 Z M 7.299 4.1 C 7.474 3.939 7.56 3.743 7.56 3.513 C 7.56 3.283 7.474 3.087 7.299 2.923 C 7.126 2.76 6.917 2.679 6.672 2.679 C 6.426 2.679 6.216 2.76 6.041 2.923 C 5.866 3.087 5.778 3.283 5.778 3.513 C 5.778 3.743 5.866 3.939 6.041 4.1 C 6.217 4.262 6.426 4.343 6.672 4.343 C 6.917 4.343 7.126 4.262 7.299 4.1 Z"} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 1.697 3.818 L 4.667 6.788 L 3.818 7.637 L 0 3.818 L 3.818 0 L 4.667 0.848 L 1.697 3.818 Z"} fill="currentColor" fillRule="nonzero" />
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
              color: "var(--text-sub-600)",
              flexShrink: 0,
            }}>Help?</span>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={4.667} height={7.637} viewBox="0 0 4.667 7.637" fill="none" style={{
                position: "absolute",
                left: 5.667,
                top: 4.181,
                width: 4.667,
                height: 7.637,
                color: "rgb(14,18,27)",
              }}>
                <path d={"M 2.97 3.818 L 0 0.848 L 0.848 0 L 4.667 3.818 L 0.848 7.637 L 0 6.788 L 2.97 3.818 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 10,
          backgroundColor: "var(--bg-weak-50)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "4px 4px 4px 4px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "0px 6px 10px 0px rgba(14,18,27,0.06), 0px 2px 4px 0px rgba(14,18,27,0.03)",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Overview</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Comments</span>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            display: "flex",
            flexDirection: "row",
            gap: 6,
            padding: "4px 4px 4px 4px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexGrow: 1,
            }}>Rewards</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesHRManagement1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"👩‍💻 employee spotlight overview"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "No records of employee spotlight yet.\nPlease check back later."}</span>
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <DiscussLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Daily Feedback"}</span>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          letterSpacing: "-0.011em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>{props.text2 ?? "Question 1/4"}</span>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "rgba(0,159,175,0.16)",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "8px 8px 8px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
            lineHeight: "16px",
            color: "var(--primary-base)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "01"}</span>
        </div>
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
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text4 ?? "How would you rate your mood today?"}</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 16,
            textAlign: "center",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Share your mood to help us understand.</span>
        </div>
      </div>
      <RatingBarArea11
        style={{
          position: "relative",
          flexGrow: 1,
          alignSelf: "stretch",
          height: "auto",
          width: "auto",
        }}
        type={"🙂 emoji"}
      />
      <Buttons11NeutralStroke9
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        leftIcon={false}
        rightIcon={false}
        editText={"Next Question"}
      />
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <DiscussLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Daily Feedback"}</span>
        </div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesHRManagement1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"💬 daily feedback"}
          />
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text2 ?? "No records of feedback yet.\nPlease check back later."}</span>
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <FileChartLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Work Hour Analysis"}</span>
        </div>
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
              }}>{props.icon3 ?? <TimeFill style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
          </div>
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
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-soft-400)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Total Work"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "38 hours ∙ 12 mins"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
            alignContent: "space-between",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
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
              }}>5D</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>2W</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>1M</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>6M</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>1Y</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "var(--bg-white-0)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              height: 142,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <svg height={1} viewBox="0 -0.500 320 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 0 L 2 0 L 2 -1 L 0 -1 L 0 0 Z M 8 0 L 12 0 L 12 -1 L 8 -1 L 8 0 Z M 18 0 L 22 0 L 22 -1 L 18 -1 L 18 0 Z M 28 0 L 32 0 L 32 -1 L 28 -1 L 28 0 Z M 38 0 L 42 0 L 42 -1 L 38 -1 L 38 0 Z M 48 0 L 52 0 L 52 -1 L 48 -1 L 48 0 Z M 58 0 L 62 0 L 62 -1 L 58 -1 L 58 0 Z M 68 0 L 72 0 L 72 -1 L 68 -1 L 68 0 Z M 78 0 L 82 0 L 82 -1 L 78 -1 L 78 0 Z M 88 0 L 92 0 L 92 -1 L 88 -1 L 88 0 Z M 98 0 L 102 0 L 102 -1 L 98 -1 L 98 0 Z M 108 0 L 112 0 L 112 -1 L 108 -1 L 108 0 Z M 118 0 L 122 0 L 122 -1 L 118 -1 L 118 0 Z M 128 0 L 132 0 L 132 -1 L 128 -1 L 128 0 Z M 138 0 L 142 0 L 142 -1 L 138 -1 L 138 0 Z M 148 0 L 152 0 L 152 -1 L 148 -1 L 148 0 Z M 158 0 L 162 0 L 162 -1 L 158 -1 L 158 0 Z M 168 0 L 172 0 L 172 -1 L 168 -1 L 168 0 Z M 178 0 L 182 0 L 182 -1 L 178 -1 L 178 0 Z M 188 0 L 192 0 L 192 -1 L 188 -1 L 188 0 Z M 198 0 L 202 0 L 202 -1 L 198 -1 L 198 0 Z M 208 0 L 212 0 L 212 -1 L 208 -1 L 208 0 Z M 218 0 L 222 0 L 222 -1 L 218 -1 L 218 0 Z M 228 0 L 232 0 L 232 -1 L 228 -1 L 228 0 Z M 238 0 L 242 0 L 242 -1 L 238 -1 L 238 0 Z M 248 0 L 252 0 L 252 -1 L 248 -1 L 248 0 Z M 258 0 L 262 0 L 262 -1 L 258 -1 L 258 0 Z M 268 0 L 272 0 L 272 -1 L 268 -1 L 268 0 Z M 278 0 L 282 0 L 282 -1 L 278 -1 L 278 0 Z M 288 0 L 292 0 L 292 -1 L 288 -1 L 288 0 Z M 298 0 L 302 0 L 302 -1 L 298 -1 L 298 0 Z M 308 0 L 312 0 L 312 -1 L 308 -1 L 308 0 Z M 318 0 L 320 0 L 320 -1 L 318 -1 L 318 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg height={1} viewBox="0 -0.500 320 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 0 L 2 0 L 2 -1 L 0 -1 L 0 0 Z M 8 0 L 12 0 L 12 -1 L 8 -1 L 8 0 Z M 18 0 L 22 0 L 22 -1 L 18 -1 L 18 0 Z M 28 0 L 32 0 L 32 -1 L 28 -1 L 28 0 Z M 38 0 L 42 0 L 42 -1 L 38 -1 L 38 0 Z M 48 0 L 52 0 L 52 -1 L 48 -1 L 48 0 Z M 58 0 L 62 0 L 62 -1 L 58 -1 L 58 0 Z M 68 0 L 72 0 L 72 -1 L 68 -1 L 68 0 Z M 78 0 L 82 0 L 82 -1 L 78 -1 L 78 0 Z M 88 0 L 92 0 L 92 -1 L 88 -1 L 88 0 Z M 98 0 L 102 0 L 102 -1 L 98 -1 L 98 0 Z M 108 0 L 112 0 L 112 -1 L 108 -1 L 108 0 Z M 118 0 L 122 0 L 122 -1 L 118 -1 L 118 0 Z M 128 0 L 132 0 L 132 -1 L 128 -1 L 128 0 Z M 138 0 L 142 0 L 142 -1 L 138 -1 L 138 0 Z M 148 0 L 152 0 L 152 -1 L 148 -1 L 148 0 Z M 158 0 L 162 0 L 162 -1 L 158 -1 L 158 0 Z M 168 0 L 172 0 L 172 -1 L 168 -1 L 168 0 Z M 178 0 L 182 0 L 182 -1 L 178 -1 L 178 0 Z M 188 0 L 192 0 L 192 -1 L 188 -1 L 188 0 Z M 198 0 L 202 0 L 202 -1 L 198 -1 L 198 0 Z M 208 0 L 212 0 L 212 -1 L 208 -1 L 208 0 Z M 218 0 L 222 0 L 222 -1 L 218 -1 L 218 0 Z M 228 0 L 232 0 L 232 -1 L 228 -1 L 228 0 Z M 238 0 L 242 0 L 242 -1 L 238 -1 L 238 0 Z M 248 0 L 252 0 L 252 -1 L 248 -1 L 248 0 Z M 258 0 L 262 0 L 262 -1 L 258 -1 L 258 0 Z M 268 0 L 272 0 L 272 -1 L 268 -1 L 268 0 Z M 278 0 L 282 0 L 282 -1 L 278 -1 L 278 0 Z M 288 0 L 292 0 L 292 -1 L 288 -1 L 288 0 Z M 298 0 L 302 0 L 302 -1 L 298 -1 L 298 0 Z M 308 0 L 312 0 L 312 -1 L 308 -1 L 308 0 Z M 318 0 L 320 0 L 320 -1 L 318 -1 L 318 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg height={1} viewBox="0 -0.500 320 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 0 L 2 0 L 2 -1 L 0 -1 L 0 0 Z M 8 0 L 12 0 L 12 -1 L 8 -1 L 8 0 Z M 18 0 L 22 0 L 22 -1 L 18 -1 L 18 0 Z M 28 0 L 32 0 L 32 -1 L 28 -1 L 28 0 Z M 38 0 L 42 0 L 42 -1 L 38 -1 L 38 0 Z M 48 0 L 52 0 L 52 -1 L 48 -1 L 48 0 Z M 58 0 L 62 0 L 62 -1 L 58 -1 L 58 0 Z M 68 0 L 72 0 L 72 -1 L 68 -1 L 68 0 Z M 78 0 L 82 0 L 82 -1 L 78 -1 L 78 0 Z M 88 0 L 92 0 L 92 -1 L 88 -1 L 88 0 Z M 98 0 L 102 0 L 102 -1 L 98 -1 L 98 0 Z M 108 0 L 112 0 L 112 -1 L 108 -1 L 108 0 Z M 118 0 L 122 0 L 122 -1 L 118 -1 L 118 0 Z M 128 0 L 132 0 L 132 -1 L 128 -1 L 128 0 Z M 138 0 L 142 0 L 142 -1 L 138 -1 L 138 0 Z M 148 0 L 152 0 L 152 -1 L 148 -1 L 148 0 Z M 158 0 L 162 0 L 162 -1 L 158 -1 L 158 0 Z M 168 0 L 172 0 L 172 -1 L 168 -1 L 168 0 Z M 178 0 L 182 0 L 182 -1 L 178 -1 L 178 0 Z M 188 0 L 192 0 L 192 -1 L 188 -1 L 188 0 Z M 198 0 L 202 0 L 202 -1 L 198 -1 L 198 0 Z M 208 0 L 212 0 L 212 -1 L 208 -1 L 208 0 Z M 218 0 L 222 0 L 222 -1 L 218 -1 L 218 0 Z M 228 0 L 232 0 L 232 -1 L 228 -1 L 228 0 Z M 238 0 L 242 0 L 242 -1 L 238 -1 L 238 0 Z M 248 0 L 252 0 L 252 -1 L 248 -1 L 248 0 Z M 258 0 L 262 0 L 262 -1 L 258 -1 L 258 0 Z M 268 0 L 272 0 L 272 -1 L 268 -1 L 268 0 Z M 278 0 L 282 0 L 282 -1 L 278 -1 L 278 0 Z M 288 0 L 292 0 L 292 -1 L 288 -1 L 288 0 Z M 298 0 L 302 0 L 302 -1 L 298 -1 L 298 0 Z M 308 0 L 312 0 L 312 -1 L 308 -1 L 308 0 Z M 318 0 L 320 0 L 320 -1 L 318 -1 L 318 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg height={1} viewBox="0 -0.500 320 1" fill="none" style={{
                position: "relative",
                height: 1,
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <path d={"M 0 0 L 2 0 L 2 -1 L 0 -1 L 0 0 Z M 8 0 L 12 0 L 12 -1 L 8 -1 L 8 0 Z M 18 0 L 22 0 L 22 -1 L 18 -1 L 18 0 Z M 28 0 L 32 0 L 32 -1 L 28 -1 L 28 0 Z M 38 0 L 42 0 L 42 -1 L 38 -1 L 38 0 Z M 48 0 L 52 0 L 52 -1 L 48 -1 L 48 0 Z M 58 0 L 62 0 L 62 -1 L 58 -1 L 58 0 Z M 68 0 L 72 0 L 72 -1 L 68 -1 L 68 0 Z M 78 0 L 82 0 L 82 -1 L 78 -1 L 78 0 Z M 88 0 L 92 0 L 92 -1 L 88 -1 L 88 0 Z M 98 0 L 102 0 L 102 -1 L 98 -1 L 98 0 Z M 108 0 L 112 0 L 112 -1 L 108 -1 L 108 0 Z M 118 0 L 122 0 L 122 -1 L 118 -1 L 118 0 Z M 128 0 L 132 0 L 132 -1 L 128 -1 L 128 0 Z M 138 0 L 142 0 L 142 -1 L 138 -1 L 138 0 Z M 148 0 L 152 0 L 152 -1 L 148 -1 L 148 0 Z M 158 0 L 162 0 L 162 -1 L 158 -1 L 158 0 Z M 168 0 L 172 0 L 172 -1 L 168 -1 L 168 0 Z M 178 0 L 182 0 L 182 -1 L 178 -1 L 178 0 Z M 188 0 L 192 0 L 192 -1 L 188 -1 L 188 0 Z M 198 0 L 202 0 L 202 -1 L 198 -1 L 198 0 Z M 208 0 L 212 0 L 212 -1 L 208 -1 L 208 0 Z M 218 0 L 222 0 L 222 -1 L 218 -1 L 218 0 Z M 228 0 L 232 0 L 232 -1 L 228 -1 L 228 0 Z M 238 0 L 242 0 L 242 -1 L 238 -1 L 238 0 Z M 248 0 L 252 0 L 252 -1 L 248 -1 L 248 0 Z M 258 0 L 262 0 L 262 -1 L 258 -1 L 258 0 Z M 268 0 L 272 0 L 272 -1 L 268 -1 L 268 0 Z M 278 0 L 282 0 L 282 -1 L 278 -1 L 278 0 Z M 288 0 L 292 0 L 292 -1 L 288 -1 L 288 0 Z M 298 0 L 302 0 L 302 -1 L 298 -1 L 298 0 Z M 308 0 L 312 0 L 312 -1 L 308 -1 L 308 0 Z M 318 0 L 320 0 L 320 -1 L 318 -1 L 318 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 0,
              top: 23,
              width: 320,
              height: 96,
            }}>
              <svg width={320} height={94} viewBox="0 0 320 94" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 1,
                width: 320,
                height: 94,
                borderRadius: 4,
              }}>
                <path d={"M 5.476 93.011 L 0.495 93.011 C 0.222 93.011 0 93.232 0 93.505 C 0 93.779 0.222 94 0.495 94 L 316 94 C 318.209 94 320 92.209 320 90 L 320 4 C 320 1.791 318.209 0 316 0 L 303.38 0 C 302.189 0 301.06 0.53 300.3 1.447 L 263.7 45.599 C 262.94 46.516 261.811 47.046 260.62 47.046 L 251.344 47.046 C 249.838 47.046 248.459 46.2 247.777 44.857 L 226.112 2.189 C 225.43 0.846 224.051 0 222.545 0 L 202.912 0 C 201.301 0 199.848 0.966 199.224 2.451 L 181.529 44.595 C 180.906 46.08 179.461 47.046 177.85 47.046 L 150.759 47.046 C 149.354 47.046 148.058 47.783 147.335 48.989 L 129.47 78.774 C 128.747 79.979 127.445 80.716 126.039 80.716 L 116.628 80.716 C 115.214 80.716 113.905 79.969 113.185 78.752 L 95.597 49.01 C 94.877 47.793 93.568 47.046 92.154 47.046 L 79.18 47.046 C 77.559 47.046 76.097 46.067 75.481 44.567 L 58.177 2.479 C 57.56 0.979 56.099 0 54.477 0 L 36.891 0 C 35.086 0 33.505 1.209 33.031 2.95 L 9.336 90.06 C 8.862 91.802 7.281 93.011 5.476 93.011 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={320} height={94} viewBox="0 0 320 94" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 1,
                width: 320,
                height: 94,
                borderRadius: 4,
                color: "var(--primary-base)",
              }}>
                <path d={"M 300.3 1.463 L 301.073 2.097 L 300.3 1.463 Z M 263.7 46.083 L 262.927 45.449 L 263.7 46.083 Z M 247.781 45.342 L 248.675 44.893 L 247.781 45.342 Z M 226.107 2.204 L 225.214 2.653 L 226.107 2.204 Z M 199.229 2.465 L 198.306 2.082 L 199.229 2.465 Z M 181.524 45.081 L 182.448 45.465 L 181.524 45.081 Z M 147.338 49.505 L 146.478 48.995 L 147.338 49.505 Z M 129.467 79.616 L 130.327 80.127 L 129.467 79.616 Z M 113.188 79.595 L 114.051 79.09 L 113.188 79.595 Z M 95.594 49.526 L 94.731 50.031 L 95.594 49.526 Z M 75.486 45.054 L 76.412 44.677 L 75.486 45.054 Z M 9.33 91.04 L 8.364 90.78 L 9.33 91.04 Z M 0 95 L 5.468 95 L 5.468 93 L 0 93 L 0 95 Z M 10.296 91.3 L 34.002 3.22 L 32.071 2.7 L 8.364 90.78 L 10.296 91.3 Z M 36.899 1 L 54.467 1 L 54.467 -1 L 36.899 -1 L 36.899 1 Z M 57.246 2.87 L 74.56 45.431 L 76.412 44.677 L 59.098 2.116 L 57.246 2.87 Z M 79.191 48.547 L 92.142 48.547 L 92.142 46.547 L 79.191 46.547 L 79.191 48.547 Z M 94.731 50.031 L 112.325 80.1 L 114.051 79.09 L 96.457 49.021 L 94.731 50.031 Z M 150.771 48.547 C 150.787 48.547 150.803 48.547 150.818 48.547 C 150.834 48.547 150.85 48.547 150.866 48.547 C 150.882 48.547 150.897 48.547 150.913 48.547 C 150.929 48.547 150.945 48.547 150.961 48.547 C 150.977 48.547 150.993 48.547 151.009 48.547 C 151.025 48.547 151.041 48.547 151.057 48.547 C 151.073 48.547 151.089 48.547 151.105 48.547 C 151.121 48.547 151.137 48.547 151.153 48.547 C 151.169 48.547 151.185 48.547 151.201 48.547 C 151.217 48.547 151.233 48.547 151.249 48.547 C 151.266 48.547 151.282 48.547 151.298 48.547 C 151.314 48.547 151.33 48.547 151.347 48.547 C 151.363 48.547 151.379 48.547 151.395 48.547 C 151.412 48.547 151.428 48.547 151.444 48.547 C 151.46 48.547 151.477 48.547 151.493 48.547 C 151.509 48.547 151.526 48.547 151.542 48.547 C 151.558 48.547 151.575 48.547 151.591 48.547 C 151.608 48.547 151.624 48.547 151.641 48.547 C 151.657 48.547 151.673 48.547 151.69 48.547 C 151.706 48.547 151.723 48.547 151.739 48.547 C 151.756 48.547 151.772 48.547 151.789 48.547 C 151.806 48.547 151.822 48.547 151.839 48.547 C 151.855 48.547 151.872 48.547 151.889 48.547 C 151.905 48.547 151.922 48.547 151.939 48.547 C 151.955 48.547 151.972 48.547 151.989 48.547 C 152.005 48.547 152.022 48.547 152.039 48.547 C 152.055 48.547 152.072 48.547 152.089 48.547 C 152.106 48.547 152.123 48.547 152.139 48.547 C 152.156 48.547 152.173 48.547 152.19 48.547 C 152.207 48.547 152.223 48.547 152.24 48.547 C 152.257 48.547 152.274 48.547 152.291 48.547 C 152.308 48.547 152.325 48.547 152.342 48.547 C 152.359 48.547 152.376 48.547 152.393 48.547 C 152.41 48.547 152.427 48.547 152.444 48.547 C 152.461 48.547 152.478 48.547 152.495 48.547 C 152.512 48.547 152.529 48.547 152.546 48.547 C 152.563 48.547 152.58 48.547 152.597 48.547 C 152.614 48.547 152.631 48.547 152.649 48.547 C 152.666 48.547 152.683 48.547 152.7 48.547 C 152.717 48.547 152.734 48.547 152.752 48.547 C 152.769 48.547 152.786 48.547 152.803 48.547 C 152.821 48.547 152.838 48.547 152.855 48.547 C 152.872 48.547 152.89 48.547 152.907 48.547 C 152.924 48.547 152.942 48.547 152.959 48.547 C 152.976 48.547 152.994 48.547 153.011 48.547 C 153.028 48.547 153.046 48.547 153.063 48.547 C 153.081 48.547 153.098 48.547 153.115 48.547 C 153.133 48.547 153.15 48.547 153.168 48.547 C 153.185 48.547 153.203 48.547 153.22 48.547 C 153.238 48.547 153.255 48.547 153.273 48.547 C 153.29 48.547 153.308 48.547 153.325 48.547 C 153.343 48.547 153.36 48.547 153.378 48.547 C 153.396 48.547 153.413 48.547 153.431 48.547 C 153.448 48.547 153.466 48.547 153.484 48.547 C 153.501 48.547 153.519 48.547 153.537 48.547 C 153.554 48.547 153.572 48.547 153.59 48.547 C 153.607 48.547 153.625 48.547 153.643 48.547 C 153.661 48.547 153.678 48.547 153.696 48.547 C 153.714 48.547 153.732 48.547 153.75 48.547 C 153.767 48.547 153.785 48.547 153.803 48.547 C 153.821 48.547 153.839 48.547 153.856 48.547 C 153.874 48.547 153.892 48.547 153.91 48.547 C 153.928 48.547 153.946 48.547 153.964 48.547 C 153.982 48.547 154 48.547 154.018 48.547 C 154.035 48.547 154.053 48.547 154.071 48.547 C 154.089 48.547 154.107 48.547 154.125 48.547 C 154.143 48.547 154.161 48.547 154.179 48.547 C 154.197 48.547 154.215 48.547 154.233 48.547 C 154.251 48.547 154.269 48.547 154.288 48.547 C 154.306 48.547 154.324 48.547 154.342 48.547 C 154.36 48.547 154.378 48.547 154.396 48.547 C 154.414 48.547 154.432 48.547 154.451 48.547 C 154.469 48.547 154.487 48.547 154.505 48.547 C 154.523 48.547 154.541 48.547 154.56 48.547 C 154.578 48.547 154.596 48.547 154.614 48.547 C 154.633 48.547 154.651 48.547 154.669 48.547 C 154.687 48.547 154.706 48.547 154.724 48.547 C 154.742 48.547 154.76 48.547 154.779 48.547 C 154.797 48.547 154.815 48.547 154.834 48.547 C 154.852 48.547 154.87 48.547 154.889 48.547 C 154.907 48.547 154.925 48.547 154.944 48.547 C 154.962 48.547 154.981 48.547 154.999 48.547 C 155.017 48.547 155.036 48.547 155.054 48.547 C 155.073 48.547 155.091 48.547 155.11 48.547 C 155.128 48.547 155.147 48.547 155.165 48.547 C 155.183 48.547 155.202 48.547 155.22 48.547 C 155.239 48.547 155.257 48.547 155.276 48.547 C 155.295 48.547 155.313 48.547 155.332 48.547 C 155.35 48.547 155.369 48.547 155.387 48.547 C 155.406 48.547 155.424 48.547 155.443 48.547 C 155.462 48.547 155.48 48.547 155.499 48.547 C 155.518 48.547 155.536 48.547 155.555 48.547 C 155.573 48.547 155.592 48.547 155.611 48.547 C 155.629 48.547 155.648 48.547 155.667 48.547 C 155.685 48.547 155.704 48.547 155.723 48.547 C 155.742 48.547 155.76 48.547 155.779 48.547 C 155.798 48.547 155.816 48.547 155.835 48.547 C 155.854 48.547 155.873 48.547 155.892 48.547 C 155.91 48.547 155.929 48.547 155.948 48.547 C 155.967 48.547 155.985 48.547 156.004 48.547 C 156.023 48.547 156.042 48.547 156.061 48.547 C 156.08 48.547 156.098 48.547 156.117 48.547 C 156.136 48.547 156.155 48.547 156.174 48.547 C 156.193 48.547 156.212 48.547 156.231 48.547 C 156.249 48.547 156.268 48.547 156.287 48.547 C 156.306 48.547 156.325 48.547 156.344 48.547 C 156.363 48.547 156.382 48.547 156.401 48.547 C 156.42 48.547 156.439 48.547 156.458 48.547 C 156.477 48.547 156.496 48.547 156.515 48.547 C 156.534 48.547 156.553 48.547 156.572 48.547 C 156.591 48.547 156.61 48.547 156.629 48.547 C 156.648 48.547 156.667 48.547 156.686 48.547 C 156.705 48.547 156.724 48.547 156.743 48.547 C 156.762 48.547 156.781 48.547 156.8 48.547 C 156.82 48.547 156.839 48.547 156.858 48.547 C 156.877 48.547 156.896 48.547 156.915 48.547 C 156.934 48.547 156.953 48.547 156.973 48.547 C 156.992 48.547 157.011 48.547 157.03 48.547 C 157.049 48.547 157.068 48.547 157.088 48.547 C 157.107 48.547 157.126 48.547 157.145 48.547 C 157.164 48.547 157.183 48.547 157.203 48.547 C 157.222 48.547 157.241 48.547 157.26 48.547 C 157.28 48.547 157.299 48.547 157.318 48.547 C 157.337 48.547 157.357 48.547 157.376 48.547 C 157.395 48.547 157.414 48.547 157.434 48.547 C 157.453 48.547 157.472 48.547 157.492 48.547 C 157.511 48.547 157.53 48.547 157.549 48.547 C 157.569 48.547 157.588 48.547 157.607 48.547 C 157.627 48.547 157.646 48.547 157.665 48.547 C 157.685 48.547 157.704 48.547 157.723 48.547 C 157.743 48.547 157.762 48.547 157.782 48.547 C 157.801 48.547 157.82 48.547 157.84 48.547 C 157.859 48.547 157.878 48.547 157.898 48.547 C 157.917 48.547 157.937 48.547 157.956 48.547 C 157.976 48.547 157.995 48.547 158.014 48.547 C 158.034 48.547 158.053 48.547 158.073 48.547 C 158.092 48.547 158.112 48.547 158.131 48.547 C 158.15 48.547 158.17 48.547 158.189 48.547 C 158.209 48.547 158.228 48.547 158.248 48.547 C 158.267 48.547 158.287 48.547 158.306 48.547 C 158.326 48.547 158.345 48.547 158.365 48.547 C 158.384 48.547 158.404 48.547 158.423 48.547 C 158.443 48.547 158.463 48.547 158.482 48.547 C 158.502 48.547 158.521 48.547 158.541 48.547 C 158.56 48.547 158.58 48.547 158.599 48.547 C 158.619 48.547 158.638 48.547 158.658 48.547 C 158.678 48.547 158.697 48.547 158.717 48.547 C 158.736 48.547 158.756 48.547 158.776 48.547 C 158.795 48.547 158.815 48.547 158.834 48.547 C 158.854 48.547 158.874 48.547 158.893 48.547 C 158.913 48.547 158.933 48.547 158.952 48.547 C 158.972 48.547 158.991 48.547 159.011 48.547 C 159.031 48.547 159.05 48.547 159.07 48.547 C 159.09 48.547 159.109 48.547 159.129 48.547 C 159.149 48.547 159.168 48.547 159.188 48.547 C 159.208 48.547 159.227 48.547 159.247 48.547 C 159.267 48.547 159.286 48.547 159.306 48.547 C 159.326 48.547 159.346 48.547 159.365 48.547 C 159.385 48.547 159.405 48.547 159.424 48.547 C 159.444 48.547 159.464 48.547 159.484 48.547 C 159.503 48.547 159.523 48.547 159.543 48.547 C 159.562 48.547 159.582 48.547 159.602 48.547 C 159.622 48.547 159.641 48.547 159.661 48.547 C 159.681 48.547 159.701 48.547 159.72 48.547 C 159.74 48.547 159.76 48.547 159.78 48.547 C 159.8 48.547 159.819 48.547 159.839 48.547 C 159.859 48.547 159.879 48.547 159.898 48.547 C 159.918 48.547 159.938 48.547 159.958 48.547 C 159.978 48.547 159.997 48.547 160.017 48.547 C 160.037 48.547 160.057 48.547 160.077 48.547 C 160.096 48.547 160.116 48.547 160.136 48.547 C 160.156 48.547 160.176 48.547 160.196 48.547 C 160.215 48.547 160.235 48.547 160.255 48.547 C 160.275 48.547 160.295 48.547 160.315 48.547 C 160.334 48.547 160.354 48.547 160.374 48.547 C 160.394 48.547 160.414 48.547 160.434 48.547 C 160.453 48.547 160.473 48.547 160.493 48.547 C 160.513 48.547 160.533 48.547 160.553 48.547 C 160.573 48.547 160.592 48.547 160.612 48.547 C 160.632 48.547 160.652 48.547 160.672 48.547 C 160.692 48.547 160.712 48.547 160.732 48.547 C 160.751 48.547 160.771 48.547 160.791 48.547 C 160.811 48.547 160.831 48.547 160.851 48.547 C 160.871 48.547 160.891 48.547 160.911 48.547 C 160.931 48.547 160.95 48.547 160.97 48.547 C 160.99 48.547 161.01 48.547 161.03 48.547 C 161.05 48.547 161.07 48.547 161.09 48.547 C 161.11 48.547 161.13 48.547 161.149 48.547 C 161.169 48.547 161.189 48.547 161.209 48.547 C 161.229 48.547 161.249 48.547 161.269 48.547 C 161.289 48.547 161.309 48.547 161.329 48.547 C 161.349 48.547 161.369 48.547 161.389 48.547 C 161.408 48.547 161.428 48.547 161.448 48.547 C 161.468 48.547 161.488 48.547 161.508 48.547 C 161.528 48.547 161.548 48.547 161.568 48.547 C 161.588 48.547 161.608 48.547 161.628 48.547 C 161.648 48.547 161.668 48.547 161.688 48.547 C 161.707 48.547 161.727 48.547 161.747 48.547 C 161.767 48.547 161.787 48.547 161.807 48.547 C 161.827 48.547 161.847 48.547 161.867 48.547 C 161.887 48.547 161.907 48.547 161.927 48.547 C 161.947 48.547 161.967 48.547 161.987 48.547 C 162.007 48.547 162.027 48.547 162.047 48.547 C 162.067 48.547 162.086 48.547 162.106 48.547 C 162.126 48.547 162.146 48.547 162.166 48.547 C 162.186 48.547 162.206 48.547 162.226 48.547 C 162.246 48.547 162.266 48.547 162.286 48.547 C 162.306 48.547 162.326 48.547 162.346 48.547 C 162.366 48.547 162.386 48.547 162.406 48.547 C 162.426 48.547 162.446 48.547 162.466 48.547 C 162.486 48.547 162.505 48.547 162.525 48.547 C 162.545 48.547 162.565 48.547 162.585 48.547 C 162.605 48.547 162.625 48.547 162.645 48.547 C 162.665 48.547 162.685 48.547 162.705 48.547 C 162.725 48.547 162.745 48.547 162.765 48.547 C 162.785 48.547 162.805 48.547 162.825 48.547 C 162.845 48.547 162.865 48.547 162.885 48.547 C 162.904 48.547 162.924 48.547 162.944 48.547 C 162.964 48.547 162.984 48.547 163.004 48.547 C 163.024 48.547 163.044 48.547 163.064 48.547 C 163.084 48.547 163.104 48.547 163.124 48.547 C 163.144 48.547 163.164 48.547 163.184 48.547 C 163.204 48.547 163.224 48.547 163.243 48.547 C 163.263 48.547 163.283 48.547 163.303 48.547 C 163.323 48.547 163.343 48.547 163.363 48.547 C 163.383 48.547 163.403 48.547 163.423 48.547 C 163.443 48.547 163.463 48.547 163.483 48.547 C 163.503 48.547 163.522 48.547 163.542 48.547 C 163.562 48.547 163.582 48.547 163.602 48.547 C 163.622 48.547 163.642 48.547 163.662 48.547 C 163.682 48.547 163.702 48.547 163.722 48.547 C 163.741 48.547 163.761 48.547 163.781 48.547 C 163.801 48.547 163.821 48.547 163.841 48.547 C 163.861 48.547 163.881 48.547 163.901 48.547 C 163.921 48.547 163.94 48.547 163.96 48.547 C 163.98 48.547 164 48.547 164.02 48.547 C 164.04 48.547 164.06 48.547 164.08 48.547 C 164.099 48.547 164.119 48.547 164.139 48.547 C 164.159 48.547 164.179 48.547 164.199 48.547 C 164.219 48.547 164.238 48.547 164.258 48.547 C 164.278 48.547 164.298 48.547 164.318 48.547 C 164.338 48.547 164.358 48.547 164.377 48.547 C 164.397 48.547 164.417 48.547 164.437 48.547 C 164.457 48.547 164.477 48.547 164.496 48.547 C 164.516 48.547 164.536 48.547 164.556 48.547 C 164.576 48.547 164.596 48.547 164.615 48.547 C 164.635 48.547 164.655 48.547 164.675 48.547 C 164.695 48.547 164.714 48.547 164.734 48.547 C 164.754 48.547 164.774 48.547 164.794 48.547 C 164.813 48.547 164.833 48.547 164.853 48.547 C 164.873 48.547 164.893 48.547 164.912 48.547 C 164.932 48.547 164.952 48.547 164.972 48.547 C 164.992 48.547 165.011 48.547 165.031 48.547 C 165.051 48.547 165.071 48.547 165.09 48.547 C 165.11 48.547 165.13 48.547 165.15 48.547 C 165.169 48.547 165.189 48.547 165.209 48.547 C 165.229 48.547 165.248 48.547 165.268 48.547 C 165.288 48.547 165.307 48.547 165.327 48.547 C 165.347 48.547 165.367 48.547 165.386 48.547 C 165.406 48.547 165.426 48.547 165.445 48.547 C 165.465 48.547 165.485 48.547 165.504 48.547 C 165.524 48.547 165.544 48.547 165.563 48.547 C 165.583 48.547 165.603 48.547 165.622 48.547 C 165.642 48.547 165.662 48.547 165.681 48.547 C 165.701 48.547 165.721 48.547 165.74 48.547 C 165.76 48.547 165.78 48.547 165.799 48.547 C 165.819 48.547 165.839 48.547 165.858 48.547 C 165.878 48.547 165.897 48.547 165.917 48.547 C 165.937 48.547 165.956 48.547 165.976 48.547 C 165.995 48.547 166.015 48.547 166.035 48.547 C 166.054 48.547 166.074 48.547 166.093 48.547 C 166.113 48.547 166.133 48.547 166.152 48.547 C 166.172 48.547 166.191 48.547 166.211 48.547 C 166.23 48.547 166.25 48.547 166.269 48.547 C 166.289 48.547 166.309 48.547 166.328 48.547 C 166.348 48.547 166.367 48.547 166.387 48.547 C 166.406 48.547 166.426 48.547 166.445 48.547 C 166.465 48.547 166.484 48.547 166.504 48.547 C 166.523 48.547 166.543 48.547 166.562 48.547 C 166.581 48.547 166.601 48.547 166.62 48.547 C 166.64 48.547 166.659 48.547 166.679 48.547 C 166.698 48.547 166.718 48.547 166.737 48.547 C 166.757 48.547 166.776 48.547 166.795 48.547 C 166.815 48.547 166.834 48.547 166.854 48.547 C 166.873 48.547 166.892 48.547 166.912 48.547 C 166.931 48.547 166.951 48.547 166.97 48.547 C 166.989 48.547 167.009 48.547 167.028 48.547 C 167.047 48.547 167.067 48.547 167.086 48.547 C 167.105 48.547 167.125 48.547 167.144 48.547 C 167.163 48.547 167.183 48.547 167.202 48.547 C 167.221 48.547 167.241 48.547 167.26 48.547 C 167.279 48.547 167.298 48.547 167.318 48.547 C 167.337 48.547 167.356 48.547 167.376 48.547 C 167.395 48.547 167.414 48.547 167.433 48.547 C 167.453 48.547 167.472 48.547 167.491 48.547 C 167.51 48.547 167.529 48.547 167.549 48.547 C 167.568 48.547 167.587 48.547 167.606 48.547 C 167.626 48.547 167.645 48.547 167.664 48.547 C 167.683 48.547 167.702 48.547 167.721 48.547 C 167.741 48.547 167.76 48.547 167.779 48.547 C 167.798 48.547 167.817 48.547 167.836 48.547 C 167.855 48.547 167.874 48.547 167.894 48.547 C 167.913 48.547 167.932 48.547 167.951 48.547 C 167.97 48.547 167.989 48.547 168.008 48.547 C 168.027 48.547 168.046 48.547 168.065 48.547 C 168.084 48.547 168.103 48.547 168.122 48.547 C 168.141 48.547 168.161 48.547 168.18 48.547 C 168.199 48.547 168.218 48.547 168.237 48.547 C 168.256 48.547 168.275 48.547 168.293 48.547 C 168.312 48.547 168.331 48.547 168.35 48.547 C 168.369 48.547 168.388 48.547 168.407 48.547 C 168.426 48.547 168.445 48.547 168.464 48.547 C 168.483 48.547 168.502 48.547 168.521 48.547 C 168.54 48.547 168.559 48.547 168.577 48.547 C 168.596 48.547 168.615 48.547 168.634 48.547 C 168.653 48.547 168.672 48.547 168.691 48.547 C 168.709 48.547 168.728 48.547 168.747 48.547 C 168.766 48.547 168.785 48.547 168.803 48.547 C 168.822 48.547 168.841 48.547 168.86 48.547 C 168.879 48.547 168.897 48.547 168.916 48.547 C 168.935 48.547 168.954 48.547 168.972 48.547 C 168.991 48.547 169.01 48.547 169.028 48.547 C 169.047 48.547 169.066 48.547 169.085 48.547 C 169.103 48.547 169.122 48.547 169.141 48.547 C 169.159 48.547 169.178 48.547 169.196 48.547 C 169.215 48.547 169.234 48.547 169.252 48.547 C 169.271 48.547 169.29 48.547 169.308 48.547 C 169.327 48.547 169.345 48.547 169.364 48.547 C 169.382 48.547 169.401 48.547 169.42 48.547 C 169.438 48.547 169.457 48.547 169.475 48.547 C 169.494 48.547 169.512 48.547 169.531 48.547 C 169.549 48.547 169.568 48.547 169.586 48.547 C 169.605 48.547 169.623 48.547 169.642 48.547 C 169.66 48.547 169.679 48.547 169.697 48.547 C 169.715 48.547 169.734 48.547 169.752 48.547 C 169.771 48.547 169.789 48.547 169.807 48.547 C 169.826 48.547 169.844 48.547 169.862 48.547 C 169.881 48.547 169.899 48.547 169.918 48.547 C 169.936 48.547 169.954 48.547 169.972 48.547 C 169.991 48.547 170.009 48.547 170.027 48.547 C 170.046 48.547 170.064 48.547 170.082 48.547 C 170.1 48.547 170.119 48.547 170.137 48.547 C 170.155 48.547 170.173 48.547 170.192 48.547 C 170.21 48.547 170.228 48.547 170.246 48.547 C 170.264 48.547 170.282 48.547 170.301 48.547 C 170.319 48.547 170.337 48.547 170.355 48.547 C 170.373 48.547 170.391 48.547 170.409 48.547 C 170.427 48.547 170.445 48.547 170.464 48.547 C 170.482 48.547 170.5 48.547 170.518 48.547 C 170.536 48.547 170.554 48.547 170.572 48.547 C 170.59 48.547 170.608 48.547 170.626 48.547 C 170.644 48.547 170.662 48.547 170.68 48.547 C 170.698 48.547 170.716 48.547 170.734 48.547 C 170.752 48.547 170.769 48.547 170.787 48.547 C 170.805 48.547 170.823 48.547 170.841 48.547 C 170.859 48.547 170.877 48.547 170.895 48.547 C 170.912 48.547 170.93 48.547 170.948 48.547 C 170.966 48.547 170.984 48.547 171.002 48.547 C 171.019 48.547 171.037 48.547 171.055 48.547 C 171.073 48.547 171.09 48.547 171.108 48.547 C 171.126 48.547 171.144 48.547 171.161 48.547 C 171.179 48.547 171.197 48.547 171.214 48.547 C 171.232 48.547 171.25 48.547 171.267 48.547 C 171.285 48.547 171.303 48.547 171.32 48.547 C 171.338 48.547 171.355 48.547 171.373 48.547 C 171.391 48.547 171.408 48.547 171.426 48.547 C 171.443 48.547 171.461 48.547 171.478 48.547 C 171.496 48.547 171.513 48.547 171.531 48.547 C 171.548 48.547 171.566 48.547 171.583 48.547 C 171.601 48.547 171.618 48.547 171.636 48.547 C 171.653 48.547 171.67 48.547 171.688 48.547 C 171.705 48.547 171.723 48.547 171.74 48.547 C 171.757 48.547 171.775 48.547 171.792 48.547 C 171.809 48.547 171.827 48.547 171.844 48.547 C 171.861 48.547 171.879 48.547 171.896 48.547 C 171.913 48.547 171.93 48.547 171.948 48.547 C 171.965 48.547 171.982 48.547 171.999 48.547 C 172.016 48.547 172.034 48.547 172.051 48.547 C 172.068 48.547 172.085 48.547 172.102 48.547 C 172.119 48.547 172.137 48.547 172.154 48.547 C 172.171 48.547 172.188 48.547 172.205 48.547 C 172.222 48.547 172.239 48.547 172.256 48.547 C 172.273 48.547 172.29 48.547 172.307 48.547 C 172.324 48.547 172.341 48.547 172.358 48.547 C 172.375 48.547 172.392 48.547 172.409 48.547 C 172.426 48.547 172.443 48.547 172.46 48.547 C 172.477 48.547 172.494 48.547 172.51 48.547 C 172.527 48.547 172.544 48.547 172.561 48.547 C 172.578 48.547 172.595 48.547 172.612 48.547 C 172.628 48.547 172.645 48.547 172.662 48.547 C 172.679 48.547 172.695 48.547 172.712 48.547 C 172.729 48.547 172.746 48.547 172.762 48.547 C 172.779 48.547 172.796 48.547 172.812 48.547 C 172.829 48.547 172.846 48.547 172.862 48.547 C 172.879 48.547 172.895 48.547 172.912 48.547 C 172.929 48.547 172.945 48.547 172.962 48.547 C 172.978 48.547 172.995 48.547 173.011 48.547 C 173.028 48.547 173.044 48.547 173.061 48.547 C 173.077 48.547 173.094 48.547 173.11 48.547 C 173.127 48.547 173.143 48.547 173.159 48.547 C 173.176 48.547 173.192 48.547 173.209 48.547 C 173.225 48.547 173.241 48.547 173.258 48.547 C 173.274 48.547 173.29 48.547 173.307 48.547 C 173.323 48.547 173.339 48.547 173.355 48.547 C 173.372 48.547 173.388 48.547 173.404 48.547 C 173.42 48.547 173.437 48.547 173.453 48.547 C 173.469 48.547 173.485 48.547 173.501 48.547 C 173.517 48.547 173.534 48.547 173.55 48.547 C 173.566 48.547 173.582 48.547 173.598 48.547 C 173.614 48.547 173.63 48.547 173.646 48.547 C 173.662 48.547 173.678 48.547 173.694 48.547 C 173.71 48.547 173.726 48.547 173.742 48.547 C 173.758 48.547 173.774 48.547 173.79 48.547 C 173.806 48.547 173.821 48.547 173.837 48.547 C 173.853 48.547 173.869 48.547 173.885 48.547 C 173.901 48.547 173.917 48.547 173.932 48.547 C 173.948 48.547 173.964 48.547 173.98 48.547 C 173.995 48.547 174.011 48.547 174.027 48.547 C 174.043 48.547 174.058 48.547 174.074 48.547 C 174.09 48.547 174.105 48.547 174.121 48.547 C 174.136 48.547 174.152 48.547 174.168 48.547 C 174.183 48.547 174.199 48.547 174.214 48.547 C 174.23 48.547 174.245 48.547 174.261 48.547 C 174.276 48.547 174.292 48.547 174.307 48.547 C 174.323 48.547 174.338 48.547 174.354 48.547 C 174.369 48.547 174.384 48.547 174.4 48.547 C 174.415 48.547 174.431 48.547 174.446 48.547 C 174.461 48.547 174.477 48.547 174.492 48.547 C 174.507 48.547 174.522 48.547 174.538 48.547 C 174.553 48.547 174.568 48.547 174.583 48.547 C 174.599 48.547 174.614 48.547 174.629 48.547 C 174.644 48.547 174.659 48.547 174.674 48.547 C 174.689 48.547 174.705 48.547 174.72 48.547 C 174.735 48.547 174.75 48.547 174.765 48.547 C 174.78 48.547 174.795 48.547 174.81 48.547 C 174.825 48.547 174.84 48.547 174.855 48.547 C 174.87 48.547 174.885 48.547 174.9 48.547 C 174.914 48.547 174.929 48.547 174.944 48.547 C 174.959 48.547 174.974 48.547 174.989 48.547 C 175.003 48.547 175.018 48.547 175.033 48.547 C 175.048 48.547 175.063 48.547 175.077 48.547 C 175.092 48.547 175.107 48.547 175.121 48.547 C 175.136 48.547 175.151 48.547 175.165 48.547 C 175.18 48.547 175.195 48.547 175.209 48.547 C 175.224 48.547 175.238 48.547 175.253 48.547 C 175.267 48.547 175.282 48.547 175.296 48.547 C 175.311 48.547 175.325 48.547 175.34 48.547 C 175.354 48.547 175.369 48.547 175.383 48.547 C 175.398 48.547 175.412 48.547 175.426 48.547 C 175.441 48.547 175.455 48.547 175.469 48.547 C 175.484 48.547 175.498 48.547 175.512 48.547 C 175.526 48.547 175.541 48.547 175.555 48.547 C 175.569 48.547 175.583 48.547 175.597 48.547 C 175.612 48.547 175.626 48.547 175.64 48.547 C 175.654 48.547 175.668 48.547 175.682 48.547 C 175.696 48.547 175.71 48.547 175.724 48.547 C 175.738 48.547 175.752 48.547 175.766 48.547 C 175.78 48.547 175.794 48.547 175.808 48.547 C 175.822 48.547 175.836 48.547 175.85 48.547 C 175.864 48.547 175.878 48.547 175.891 48.547 C 175.905 48.547 175.919 48.547 175.933 48.547 C 175.947 48.547 175.96 48.547 175.974 48.547 C 175.988 48.547 176.002 48.547 176.015 48.547 C 176.029 48.547 176.043 48.547 176.056 48.547 C 176.07 48.547 176.084 48.547 176.097 48.547 C 176.111 48.547 176.124 48.547 176.138 48.547 C 176.151 48.547 176.165 48.547 176.178 48.547 C 176.192 48.547 176.205 48.547 176.219 48.547 C 176.232 48.547 176.246 48.547 176.259 48.547 C 176.272 48.547 176.286 48.547 176.299 48.547 C 176.312 48.547 176.326 48.547 176.339 48.547 C 176.352 48.547 176.366 48.547 176.379 48.547 C 176.392 48.547 176.405 48.547 176.418 48.547 C 176.432 48.547 176.445 48.547 176.458 48.547 C 176.471 48.547 176.484 48.547 176.497 48.547 C 176.51 48.547 176.523 48.547 176.536 48.547 C 176.549 48.547 176.563 48.547 176.575 48.547 C 176.588 48.547 176.601 48.547 176.614 48.547 C 176.627 48.547 176.64 48.547 176.653 48.547 C 176.666 48.547 176.679 48.547 176.692 48.547 C 176.704 48.547 176.717 48.547 176.73 48.547 C 176.743 48.547 176.755 48.547 176.768 48.547 C 176.781 48.547 176.794 48.547 176.806 48.547 C 176.819 48.547 176.832 48.547 176.844 48.547 C 176.857 48.547 176.869 48.547 176.882 48.547 C 176.895 48.547 176.907 48.547 176.92 48.547 C 176.932 48.547 176.945 48.547 176.957 48.547 C 176.969 48.547 176.982 48.547 176.994 48.547 C 177.007 48.547 177.019 48.547 177.031 48.547 C 177.044 48.547 177.056 48.547 177.068 48.547 C 177.081 48.547 177.093 48.547 177.105 48.547 C 177.117 48.547 177.13 48.547 177.142 48.547 C 177.154 48.547 177.166 48.547 177.178 48.547 C 177.19 48.547 177.202 48.547 177.214 48.547 C 177.227 48.547 177.239 48.547 177.251 48.547 C 177.263 48.547 177.275 48.547 177.286 48.547 C 177.298 48.547 177.31 48.547 177.322 48.547 C 177.334 48.547 177.346 48.547 177.358 48.547 C 177.37 48.547 177.382 48.547 177.393 48.547 C 177.405 48.547 177.417 48.547 177.429 48.547 C 177.44 48.547 177.452 48.547 177.464 48.547 C 177.475 48.547 177.487 48.547 177.499 48.547 C 177.51 48.547 177.522 48.547 177.533 48.547 C 177.545 48.547 177.557 48.547 177.568 48.547 C 177.58 48.547 177.591 48.547 177.603 48.547 C 177.614 48.547 177.625 48.547 177.637 48.547 C 177.648 48.547 177.66 48.547 177.671 48.547 C 177.682 48.547 177.694 48.547 177.705 48.547 C 177.716 48.547 177.727 48.547 177.739 48.547 C 177.75 48.547 177.761 48.547 177.772 48.547 C 177.783 48.547 177.794 48.547 177.805 48.547 C 177.817 48.547 177.828 48.547 177.839 48.547 L 177.839 46.547 C 177.828 46.547 177.817 46.547 177.805 46.547 C 177.794 46.547 177.783 46.547 177.772 46.547 C 177.761 46.547 177.75 46.547 177.739 46.547 C 177.727 46.547 177.716 46.547 177.705 46.547 C 177.694 46.547 177.682 46.547 177.671 46.547 C 177.66 46.547 177.648 46.547 177.637 46.547 C 177.625 46.547 177.614 46.547 177.603 46.547 C 177.591 46.547 177.58 46.547 177.568 46.547 C 177.557 46.547 177.545 46.547 177.533 46.547 C 177.522 46.547 177.51 46.547 177.499 46.547 C 177.487 46.547 177.475 46.547 177.464 46.547 C 177.452 46.547 177.44 46.547 177.429 46.547 C 177.417 46.547 177.405 46.547 177.393 46.547 C 177.382 46.547 177.37 46.547 177.358 46.547 C 177.346 46.547 177.334 46.547 177.322 46.547 C 177.31 46.547 177.298 46.547 177.286 46.547 C 177.275 46.547 177.263 46.547 177.251 46.547 C 177.239 46.547 177.227 46.547 177.214 46.547 C 177.202 46.547 177.19 46.547 177.178 46.547 C 177.166 46.547 177.154 46.547 177.142 46.547 C 177.13 46.547 177.117 46.547 177.105 46.547 C 177.093 46.547 177.081 46.547 177.068 46.547 C 177.056 46.547 177.044 46.547 177.031 46.547 C 177.019 46.547 177.007 46.547 176.994 46.547 C 176.982 46.547 176.969 46.547 176.957 46.547 C 176.945 46.547 176.932 46.547 176.92 46.547 C 176.907 46.547 176.895 46.547 176.882 46.547 C 176.869 46.547 176.857 46.547 176.844 46.547 C 176.832 46.547 176.819 46.547 176.806 46.547 C 176.794 46.547 176.781 46.547 176.768 46.547 C 176.755 46.547 176.743 46.547 176.73 46.547 C 176.717 46.547 176.704 46.547 176.692 46.547 C 176.679 46.547 176.666 46.547 176.653 46.547 C 176.64 46.547 176.627 46.547 176.614 46.547 C 176.601 46.547 176.588 46.547 176.575 46.547 C 176.563 46.547 176.549 46.547 176.536 46.547 C 176.523 46.547 176.51 46.547 176.497 46.547 C 176.484 46.547 176.471 46.547 176.458 46.547 C 176.445 46.547 176.432 46.547 176.418 46.547 C 176.405 46.547 176.392 46.547 176.379 46.547 C 176.366 46.547 176.352 46.547 176.339 46.547 C 176.326 46.547 176.312 46.547 176.299 46.547 C 176.286 46.547 176.272 46.547 176.259 46.547 C 176.246 46.547 176.232 46.547 176.219 46.547 C 176.205 46.547 176.192 46.547 176.178 46.547 C 176.165 46.547 176.151 46.547 176.138 46.547 C 176.124 46.547 176.111 46.547 176.097 46.547 C 176.084 46.547 176.07 46.547 176.056 46.547 C 176.043 46.547 176.029 46.547 176.015 46.547 C 176.002 46.547 175.988 46.547 175.974 46.547 C 175.96 46.547 175.947 46.547 175.933 46.547 C 175.919 46.547 175.905 46.547 175.891 46.547 C 175.878 46.547 175.864 46.547 175.85 46.547 C 175.836 46.547 175.822 46.547 175.808 46.547 C 175.794 46.547 175.78 46.547 175.766 46.547 C 175.752 46.547 175.738 46.547 175.724 46.547 C 175.71 46.547 175.696 46.547 175.682 46.547 C 175.668 46.547 175.654 46.547 175.64 46.547 C 175.626 46.547 175.612 46.547 175.597 46.547 C 175.583 46.547 175.569 46.547 175.555 46.547 C 175.541 46.547 175.526 46.547 175.512 46.547 C 175.498 46.547 175.484 46.547 175.469 46.547 C 175.455 46.547 175.441 46.547 175.426 46.547 C 175.412 46.547 175.398 46.547 175.383 46.547 C 175.369 46.547 175.354 46.547 175.34 46.547 C 175.325 46.547 175.311 46.547 175.296 46.547 C 175.282 46.547 175.267 46.547 175.253 46.547 C 175.238 46.547 175.224 46.547 175.209 46.547 C 175.195 46.547 175.18 46.547 175.165 46.547 C 175.151 46.547 175.136 46.547 175.121 46.547 C 175.107 46.547 175.092 46.547 175.077 46.547 C 175.063 46.547 175.048 46.547 175.033 46.547 C 175.018 46.547 175.003 46.547 174.989 46.547 C 174.974 46.547 174.959 46.547 174.944 46.547 C 174.929 46.547 174.914 46.547 174.9 46.547 C 174.885 46.547 174.87 46.547 174.855 46.547 C 174.84 46.547 174.825 46.547 174.81 46.547 C 174.795 46.547 174.78 46.547 174.765 46.547 C 174.75 46.547 174.735 46.547 174.72 46.547 C 174.705 46.547 174.689 46.547 174.674 46.547 C 174.659 46.547 174.644 46.547 174.629 46.547 C 174.614 46.547 174.599 46.547 174.583 46.547 C 174.568 46.547 174.553 46.547 174.538 46.547 C 174.522 46.547 174.507 46.547 174.492 46.547 C 174.477 46.547 174.461 46.547 174.446 46.547 C 174.431 46.547 174.415 46.547 174.4 46.547 C 174.384 46.547 174.369 46.547 174.354 46.547 C 174.338 46.547 174.323 46.547 174.307 46.547 C 174.292 46.547 174.276 46.547 174.261 46.547 C 174.245 46.547 174.23 46.547 174.214 46.547 C 174.199 46.547 174.183 46.547 174.168 46.547 C 174.152 46.547 174.136 46.547 174.121 46.547 C 174.105 46.547 174.09 46.547 174.074 46.547 C 174.058 46.547 174.043 46.547 174.027 46.547 C 174.011 46.547 173.995 46.547 173.98 46.547 C 173.964 46.547 173.948 46.547 173.932 46.547 C 173.917 46.547 173.901 46.547 173.885 46.547 C 173.869 46.547 173.853 46.547 173.837 46.547 C 173.821 46.547 173.806 46.547 173.79 46.547 C 173.774 46.547 173.758 46.547 173.742 46.547 C 173.726 46.547 173.71 46.547 173.694 46.547 C 173.678 46.547 173.662 46.547 173.646 46.547 C 173.63 46.547 173.614 46.547 173.598 46.547 C 173.582 46.547 173.566 46.547 173.55 46.547 C 173.534 46.547 173.517 46.547 173.501 46.547 C 173.485 46.547 173.469 46.547 173.453 46.547 C 173.437 46.547 173.42 46.547 173.404 46.547 C 173.388 46.547 173.372 46.547 173.355 46.547 C 173.339 46.547 173.323 46.547 173.307 46.547 C 173.29 46.547 173.274 46.547 173.258 46.547 C 173.241 46.547 173.225 46.547 173.209 46.547 C 173.192 46.547 173.176 46.547 173.159 46.547 C 173.143 46.547 173.127 46.547 173.11 46.547 C 173.094 46.547 173.077 46.547 173.061 46.547 C 173.044 46.547 173.028 46.547 173.011 46.547 C 172.995 46.547 172.978 46.547 172.962 46.547 C 172.945 46.547 172.929 46.547 172.912 46.547 C 172.895 46.547 172.879 46.547 172.862 46.547 C 172.846 46.547 172.829 46.547 172.812 46.547 C 172.796 46.547 172.779 46.547 172.762 46.547 C 172.746 46.547 172.729 46.547 172.712 46.547 C 172.695 46.547 172.679 46.547 172.662 46.547 C 172.645 46.547 172.628 46.547 172.612 46.547 C 172.595 46.547 172.578 46.547 172.561 46.547 C 172.544 46.547 172.527 46.547 172.51 46.547 C 172.494 46.547 172.477 46.547 172.46 46.547 C 172.443 46.547 172.426 46.547 172.409 46.547 C 172.392 46.547 172.375 46.547 172.358 46.547 C 172.341 46.547 172.324 46.547 172.307 46.547 C 172.29 46.547 172.273 46.547 172.256 46.547 C 172.239 46.547 172.222 46.547 172.205 46.547 C 172.188 46.547 172.171 46.547 172.154 46.547 C 172.137 46.547 172.119 46.547 172.102 46.547 C 172.085 46.547 172.068 46.547 172.051 46.547 C 172.034 46.547 172.016 46.547 171.999 46.547 C 171.982 46.547 171.965 46.547 171.948 46.547 C 171.93 46.547 171.913 46.547 171.896 46.547 C 171.879 46.547 171.861 46.547 171.844 46.547 C 171.827 46.547 171.809 46.547 171.792 46.547 C 171.775 46.547 171.757 46.547 171.74 46.547 C 171.723 46.547 171.705 46.547 171.688 46.547 C 171.67 46.547 171.653 46.547 171.636 46.547 C 171.618 46.547 171.601 46.547 171.583 46.547 C 171.566 46.547 171.548 46.547 171.531 46.547 C 171.513 46.547 171.496 46.547 171.478 46.547 C 171.461 46.547 171.443 46.547 171.426 46.547 C 171.408 46.547 171.391 46.547 171.373 46.547 C 171.355 46.547 171.338 46.547 171.32 46.547 C 171.303 46.547 171.285 46.547 171.267 46.547 C 171.25 46.547 171.232 46.547 171.214 46.547 C 171.197 46.547 171.179 46.547 171.161 46.547 C 171.144 46.547 171.126 46.547 171.108 46.547 C 171.09 46.547 171.073 46.547 171.055 46.547 C 171.037 46.547 171.019 46.547 171.002 46.547 C 170.984 46.547 170.966 46.547 170.948 46.547 C 170.93 46.547 170.912 46.547 170.895 46.547 C 170.877 46.547 170.859 46.547 170.841 46.547 C 170.823 46.547 170.805 46.547 170.787 46.547 C 170.769 46.547 170.752 46.547 170.734 46.547 C 170.716 46.547 170.698 46.547 170.68 46.547 C 170.662 46.547 170.644 46.547 170.626 46.547 C 170.608 46.547 170.59 46.547 170.572 46.547 C 170.554 46.547 170.536 46.547 170.518 46.547 C 170.5 46.547 170.482 46.547 170.464 46.547 C 170.445 46.547 170.427 46.547 170.409 46.547 C 170.391 46.547 170.373 46.547 170.355 46.547 C 170.337 46.547 170.319 46.547 170.301 46.547 C 170.282 46.547 170.264 46.547 170.246 46.547 C 170.228 46.547 170.21 46.547 170.192 46.547 C 170.173 46.547 170.155 46.547 170.137 46.547 C 170.119 46.547 170.1 46.547 170.082 46.547 C 170.064 46.547 170.046 46.547 170.027 46.547 C 170.009 46.547 169.991 46.547 169.972 46.547 C 169.954 46.547 169.936 46.547 169.918 46.547 C 169.899 46.547 169.881 46.547 169.862 46.547 C 169.844 46.547 169.826 46.547 169.807 46.547 C 169.789 46.547 169.771 46.547 169.752 46.547 C 169.734 46.547 169.715 46.547 169.697 46.547 C 169.679 46.547 169.66 46.547 169.642 46.547 C 169.623 46.547 169.605 46.547 169.586 46.547 C 169.568 46.547 169.549 46.547 169.531 46.547 C 169.512 46.547 169.494 46.547 169.475 46.547 C 169.457 46.547 169.438 46.547 169.42 46.547 C 169.401 46.547 169.382 46.547 169.364 46.547 C 169.345 46.547 169.327 46.547 169.308 46.547 C 169.29 46.547 169.271 46.547 169.252 46.547 C 169.234 46.547 169.215 46.547 169.196 46.547 C 169.178 46.547 169.159 46.547 169.141 46.547 C 169.122 46.547 169.103 46.547 169.085 46.547 C 169.066 46.547 169.047 46.547 169.028 46.547 C 169.01 46.547 168.991 46.547 168.972 46.547 C 168.954 46.547 168.935 46.547 168.916 46.547 C 168.897 46.547 168.879 46.547 168.86 46.547 C 168.841 46.547 168.822 46.547 168.803 46.547 C 168.785 46.547 168.766 46.547 168.747 46.547 C 168.728 46.547 168.709 46.547 168.691 46.547 C 168.672 46.547 168.653 46.547 168.634 46.547 C 168.615 46.547 168.596 46.547 168.577 46.547 C 168.559 46.547 168.54 46.547 168.521 46.547 C 168.502 46.547 168.483 46.547 168.464 46.547 C 168.445 46.547 168.426 46.547 168.407 46.547 C 168.388 46.547 168.369 46.547 168.35 46.547 C 168.331 46.547 168.312 46.547 168.293 46.547 C 168.275 46.547 168.256 46.547 168.237 46.547 C 168.218 46.547 168.199 46.547 168.18 46.547 C 168.161 46.547 168.141 46.547 168.122 46.547 C 168.103 46.547 168.084 46.547 168.065 46.547 C 168.046 46.547 168.027 46.547 168.008 46.547 C 167.989 46.547 167.97 46.547 167.951 46.547 C 167.932 46.547 167.913 46.547 167.894 46.547 C 167.874 46.547 167.855 46.547 167.836 46.547 C 167.817 46.547 167.798 46.547 167.779 46.547 C 167.76 46.547 167.741 46.547 167.721 46.547 C 167.702 46.547 167.683 46.547 167.664 46.547 C 167.645 46.547 167.626 46.547 167.606 46.547 C 167.587 46.547 167.568 46.547 167.549 46.547 C 167.529 46.547 167.51 46.547 167.491 46.547 C 167.472 46.547 167.453 46.547 167.433 46.547 C 167.414 46.547 167.395 46.547 167.376 46.547 C 167.356 46.547 167.337 46.547 167.318 46.547 C 167.298 46.547 167.279 46.547 167.26 46.547 C 167.241 46.547 167.221 46.547 167.202 46.547 C 167.183 46.547 167.163 46.547 167.144 46.547 C 167.125 46.547 167.105 46.547 167.086 46.547 C 167.067 46.547 167.047 46.547 167.028 46.547 C 167.009 46.547 166.989 46.547 166.97 46.547 C 166.951 46.547 166.931 46.547 166.912 46.547 C 166.892 46.547 166.873 46.547 166.854 46.547 C 166.834 46.547 166.815 46.547 166.795 46.547 C 166.776 46.547 166.757 46.547 166.737 46.547 C 166.718 46.547 166.698 46.547 166.679 46.547 C 166.659 46.547 166.64 46.547 166.62 46.547 C 166.601 46.547 166.581 46.547 166.562 46.547 C 166.543 46.547 166.523 46.547 166.504 46.547 C 166.484 46.547 166.465 46.547 166.445 46.547 C 166.426 46.547 166.406 46.547 166.387 46.547 C 166.367 46.547 166.348 46.547 166.328 46.547 C 166.309 46.547 166.289 46.547 166.269 46.547 C 166.25 46.547 166.23 46.547 166.211 46.547 C 166.191 46.547 166.172 46.547 166.152 46.547 C 166.133 46.547 166.113 46.547 166.093 46.547 C 166.074 46.547 166.054 46.547 166.035 46.547 C 166.015 46.547 165.995 46.547 165.976 46.547 C 165.956 46.547 165.937 46.547 165.917 46.547 C 165.897 46.547 165.878 46.547 165.858 46.547 C 165.839 46.547 165.819 46.547 165.799 46.547 C 165.78 46.547 165.76 46.547 165.74 46.547 C 165.721 46.547 165.701 46.547 165.681 46.547 C 165.662 46.547 165.642 46.547 165.622 46.547 C 165.603 46.547 165.583 46.547 165.563 46.547 C 165.544 46.547 165.524 46.547 165.504 46.547 C 165.485 46.547 165.465 46.547 165.445 46.547 C 165.426 46.547 165.406 46.547 165.386 46.547 C 165.367 46.547 165.347 46.547 165.327 46.547 C 165.307 46.547 165.288 46.547 165.268 46.547 C 165.248 46.547 165.229 46.547 165.209 46.547 C 165.189 46.547 165.169 46.547 165.15 46.547 C 165.13 46.547 165.11 46.547 165.09 46.547 C 165.071 46.547 165.051 46.547 165.031 46.547 C 165.011 46.547 164.992 46.547 164.972 46.547 C 164.952 46.547 164.932 46.547 164.912 46.547 C 164.893 46.547 164.873 46.547 164.853 46.547 C 164.833 46.547 164.813 46.547 164.794 46.547 C 164.774 46.547 164.754 46.547 164.734 46.547 C 164.714 46.547 164.695 46.547 164.675 46.547 C 164.655 46.547 164.635 46.547 164.615 46.547 C 164.596 46.547 164.576 46.547 164.556 46.547 C 164.536 46.547 164.516 46.547 164.496 46.547 C 164.477 46.547 164.457 46.547 164.437 46.547 C 164.417 46.547 164.397 46.547 164.377 46.547 C 164.358 46.547 164.338 46.547 164.318 46.547 C 164.298 46.547 164.278 46.547 164.258 46.547 C 164.238 46.547 164.219 46.547 164.199 46.547 C 164.179 46.547 164.159 46.547 164.139 46.547 C 164.119 46.547 164.099 46.547 164.08 46.547 C 164.06 46.547 164.04 46.547 164.02 46.547 C 164 46.547 163.98 46.547 163.96 46.547 C 163.94 46.547 163.921 46.547 163.901 46.547 C 163.881 46.547 163.861 46.547 163.841 46.547 C 163.821 46.547 163.801 46.547 163.781 46.547 C 163.761 46.547 163.741 46.547 163.722 46.547 C 163.702 46.547 163.682 46.547 163.662 46.547 C 163.642 46.547 163.622 46.547 163.602 46.547 C 163.582 46.547 163.562 46.547 163.542 46.547 C 163.522 46.547 163.503 46.547 163.483 46.547 C 163.463 46.547 163.443 46.547 163.423 46.547 C 163.403 46.547 163.383 46.547 163.363 46.547 C 163.343 46.547 163.323 46.547 163.303 46.547 C 163.283 46.547 163.263 46.547 163.243 46.547 C 163.224 46.547 163.204 46.547 163.184 46.547 C 163.164 46.547 163.144 46.547 163.124 46.547 C 163.104 46.547 163.084 46.547 163.064 46.547 C 163.044 46.547 163.024 46.547 163.004 46.547 C 162.984 46.547 162.964 46.547 162.944 46.547 C 162.924 46.547 162.904 46.547 162.885 46.547 C 162.865 46.547 162.845 46.547 162.825 46.547 C 162.805 46.547 162.785 46.547 162.765 46.547 C 162.745 46.547 162.725 46.547 162.705 46.547 C 162.685 46.547 162.665 46.547 162.645 46.547 C 162.625 46.547 162.605 46.547 162.585 46.547 C 162.565 46.547 162.545 46.547 162.525 46.547 C 162.505 46.547 162.486 46.547 162.466 46.547 C 162.446 46.547 162.426 46.547 162.406 46.547 C 162.386 46.547 162.366 46.547 162.346 46.547 C 162.326 46.547 162.306 46.547 162.286 46.547 C 162.266 46.547 162.246 46.547 162.226 46.547 C 162.206 46.547 162.186 46.547 162.166 46.547 C 162.146 46.547 162.126 46.547 162.106 46.547 C 162.086 46.547 162.067 46.547 162.047 46.547 C 162.027 46.547 162.007 46.547 161.987 46.547 C 161.967 46.547 161.947 46.547 161.927 46.547 C 161.907 46.547 161.887 46.547 161.867 46.547 C 161.847 46.547 161.827 46.547 161.807 46.547 C 161.787 46.547 161.767 46.547 161.747 46.547 C 161.727 46.547 161.707 46.547 161.688 46.547 C 161.668 46.547 161.648 46.547 161.628 46.547 C 161.608 46.547 161.588 46.547 161.568 46.547 C 161.548 46.547 161.528 46.547 161.508 46.547 C 161.488 46.547 161.468 46.547 161.448 46.547 C 161.428 46.547 161.408 46.547 161.389 46.547 C 161.369 46.547 161.349 46.547 161.329 46.547 C 161.309 46.547 161.289 46.547 161.269 46.547 C 161.249 46.547 161.229 46.547 161.209 46.547 C 161.189 46.547 161.169 46.547 161.149 46.547 C 161.13 46.547 161.11 46.547 161.09 46.547 C 161.07 46.547 161.05 46.547 161.03 46.547 C 161.01 46.547 160.99 46.547 160.97 46.547 C 160.95 46.547 160.931 46.547 160.911 46.547 C 160.891 46.547 160.871 46.547 160.851 46.547 C 160.831 46.547 160.811 46.547 160.791 46.547 C 160.771 46.547 160.751 46.547 160.732 46.547 C 160.712 46.547 160.692 46.547 160.672 46.547 C 160.652 46.547 160.632 46.547 160.612 46.547 C 160.592 46.547 160.573 46.547 160.553 46.547 C 160.533 46.547 160.513 46.547 160.493 46.547 C 160.473 46.547 160.453 46.547 160.434 46.547 C 160.414 46.547 160.394 46.547 160.374 46.547 C 160.354 46.547 160.334 46.547 160.315 46.547 C 160.295 46.547 160.275 46.547 160.255 46.547 C 160.235 46.547 160.215 46.547 160.196 46.547 C 160.176 46.547 160.156 46.547 160.136 46.547 C 160.116 46.547 160.096 46.547 160.077 46.547 C 160.057 46.547 160.037 46.547 160.017 46.547 C 159.997 46.547 159.978 46.547 159.958 46.547 C 159.938 46.547 159.918 46.547 159.898 46.547 C 159.879 46.547 159.859 46.547 159.839 46.547 C 159.819 46.547 159.8 46.547 159.78 46.547 C 159.76 46.547 159.74 46.547 159.72 46.547 C 159.701 46.547 159.681 46.547 159.661 46.547 C 159.641 46.547 159.622 46.547 159.602 46.547 C 159.582 46.547 159.562 46.547 159.543 46.547 C 159.523 46.547 159.503 46.547 159.484 46.547 C 159.464 46.547 159.444 46.547 159.424 46.547 C 159.405 46.547 159.385 46.547 159.365 46.547 C 159.346 46.547 159.326 46.547 159.306 46.547 C 159.286 46.547 159.267 46.547 159.247 46.547 C 159.227 46.547 159.208 46.547 159.188 46.547 C 159.168 46.547 159.149 46.547 159.129 46.547 C 159.109 46.547 159.09 46.547 159.07 46.547 C 159.05 46.547 159.031 46.547 159.011 46.547 C 158.991 46.547 158.972 46.547 158.952 46.547 C 158.933 46.547 158.913 46.547 158.893 46.547 C 158.874 46.547 158.854 46.547 158.834 46.547 C 158.815 46.547 158.795 46.547 158.776 46.547 C 158.756 46.547 158.736 46.547 158.717 46.547 C 158.697 46.547 158.678 46.547 158.658 46.547 C 158.638 46.547 158.619 46.547 158.599 46.547 C 158.58 46.547 158.56 46.547 158.541 46.547 C 158.521 46.547 158.502 46.547 158.482 46.547 C 158.463 46.547 158.443 46.547 158.423 46.547 C 158.404 46.547 158.384 46.547 158.365 46.547 C 158.345 46.547 158.326 46.547 158.306 46.547 C 158.287 46.547 158.267 46.547 158.248 46.547 C 158.228 46.547 158.209 46.547 158.189 46.547 C 158.17 46.547 158.15 46.547 158.131 46.547 C 158.112 46.547 158.092 46.547 158.073 46.547 C 158.053 46.547 158.034 46.547 158.014 46.547 C 157.995 46.547 157.976 46.547 157.956 46.547 C 157.937 46.547 157.917 46.547 157.898 46.547 C 157.878 46.547 157.859 46.547 157.84 46.547 C 157.82 46.547 157.801 46.547 157.782 46.547 C 157.762 46.547 157.743 46.547 157.723 46.547 C 157.704 46.547 157.685 46.547 157.665 46.547 C 157.646 46.547 157.627 46.547 157.607 46.547 C 157.588 46.547 157.569 46.547 157.549 46.547 C 157.53 46.547 157.511 46.547 157.492 46.547 C 157.472 46.547 157.453 46.547 157.434 46.547 C 157.414 46.547 157.395 46.547 157.376 46.547 C 157.357 46.547 157.337 46.547 157.318 46.547 C 157.299 46.547 157.28 46.547 157.26 46.547 C 157.241 46.547 157.222 46.547 157.203 46.547 C 157.183 46.547 157.164 46.547 157.145 46.547 C 157.126 46.547 157.107 46.547 157.088 46.547 C 157.068 46.547 157.049 46.547 157.03 46.547 C 157.011 46.547 156.992 46.547 156.973 46.547 C 156.953 46.547 156.934 46.547 156.915 46.547 C 156.896 46.547 156.877 46.547 156.858 46.547 C 156.839 46.547 156.82 46.547 156.8 46.547 C 156.781 46.547 156.762 46.547 156.743 46.547 C 156.724 46.547 156.705 46.547 156.686 46.547 C 156.667 46.547 156.648 46.547 156.629 46.547 C 156.61 46.547 156.591 46.547 156.572 46.547 C 156.553 46.547 156.534 46.547 156.515 46.547 C 156.496 46.547 156.477 46.547 156.458 46.547 C 156.439 46.547 156.42 46.547 156.401 46.547 C 156.382 46.547 156.363 46.547 156.344 46.547 C 156.325 46.547 156.306 46.547 156.287 46.547 C 156.268 46.547 156.249 46.547 156.231 46.547 C 156.212 46.547 156.193 46.547 156.174 46.547 C 156.155 46.547 156.136 46.547 156.117 46.547 C 156.098 46.547 156.08 46.547 156.061 46.547 C 156.042 46.547 156.023 46.547 156.004 46.547 C 155.985 46.547 155.967 46.547 155.948 46.547 C 155.929 46.547 155.91 46.547 155.892 46.547 C 155.873 46.547 155.854 46.547 155.835 46.547 C 155.816 46.547 155.798 46.547 155.779 46.547 C 155.76 46.547 155.742 46.547 155.723 46.547 C 155.704 46.547 155.685 46.547 155.667 46.547 C 155.648 46.547 155.629 46.547 155.611 46.547 C 155.592 46.547 155.573 46.547 155.555 46.547 C 155.536 46.547 155.518 46.547 155.499 46.547 C 155.48 46.547 155.462 46.547 155.443 46.547 C 155.424 46.547 155.406 46.547 155.387 46.547 C 155.369 46.547 155.35 46.547 155.332 46.547 C 155.313 46.547 155.295 46.547 155.276 46.547 C 155.257 46.547 155.239 46.547 155.22 46.547 C 155.202 46.547 155.183 46.547 155.165 46.547 C 155.147 46.547 155.128 46.547 155.11 46.547 C 155.091 46.547 155.073 46.547 155.054 46.547 C 155.036 46.547 155.017 46.547 154.999 46.547 C 154.981 46.547 154.962 46.547 154.944 46.547 C 154.925 46.547 154.907 46.547 154.889 46.547 C 154.87 46.547 154.852 46.547 154.834 46.547 C 154.815 46.547 154.797 46.547 154.779 46.547 C 154.76 46.547 154.742 46.547 154.724 46.547 C 154.706 46.547 154.687 46.547 154.669 46.547 C 154.651 46.547 154.633 46.547 154.614 46.547 C 154.596 46.547 154.578 46.547 154.56 46.547 C 154.541 46.547 154.523 46.547 154.505 46.547 C 154.487 46.547 154.469 46.547 154.451 46.547 C 154.432 46.547 154.414 46.547 154.396 46.547 C 154.378 46.547 154.36 46.547 154.342 46.547 C 154.324 46.547 154.306 46.547 154.288 46.547 C 154.269 46.547 154.251 46.547 154.233 46.547 C 154.215 46.547 154.197 46.547 154.179 46.547 C 154.161 46.547 154.143 46.547 154.125 46.547 C 154.107 46.547 154.089 46.547 154.071 46.547 C 154.053 46.547 154.035 46.547 154.018 46.547 C 154 46.547 153.982 46.547 153.964 46.547 C 153.946 46.547 153.928 46.547 153.91 46.547 C 153.892 46.547 153.874 46.547 153.856 46.547 C 153.839 46.547 153.821 46.547 153.803 46.547 C 153.785 46.547 153.767 46.547 153.75 46.547 C 153.732 46.547 153.714 46.547 153.696 46.547 C 153.678 46.547 153.661 46.547 153.643 46.547 C 153.625 46.547 153.607 46.547 153.59 46.547 C 153.572 46.547 153.554 46.547 153.537 46.547 C 153.519 46.547 153.501 46.547 153.484 46.547 C 153.466 46.547 153.448 46.547 153.431 46.547 C 153.413 46.547 153.396 46.547 153.378 46.547 C 153.36 46.547 153.343 46.547 153.325 46.547 C 153.308 46.547 153.29 46.547 153.273 46.547 C 153.255 46.547 153.238 46.547 153.22 46.547 C 153.203 46.547 153.185 46.547 153.168 46.547 C 153.15 46.547 153.133 46.547 153.115 46.547 C 153.098 46.547 153.081 46.547 153.063 46.547 C 153.046 46.547 153.028 46.547 153.011 46.547 C 152.994 46.547 152.976 46.547 152.959 46.547 C 152.942 46.547 152.924 46.547 152.907 46.547 C 152.89 46.547 152.872 46.547 152.855 46.547 C 152.838 46.547 152.821 46.547 152.803 46.547 C 152.786 46.547 152.769 46.547 152.752 46.547 C 152.734 46.547 152.717 46.547 152.7 46.547 C 152.683 46.547 152.666 46.547 152.649 46.547 C 152.631 46.547 152.614 46.547 152.597 46.547 C 152.58 46.547 152.563 46.547 152.546 46.547 C 152.529 46.547 152.512 46.547 152.495 46.547 C 152.478 46.547 152.461 46.547 152.444 46.547 C 152.427 46.547 152.41 46.547 152.393 46.547 C 152.376 46.547 152.359 46.547 152.342 46.547 C 152.325 46.547 152.308 46.547 152.291 46.547 C 152.274 46.547 152.257 46.547 152.24 46.547 C 152.223 46.547 152.207 46.547 152.19 46.547 C 152.173 46.547 152.156 46.547 152.139 46.547 C 152.123 46.547 152.106 46.547 152.089 46.547 C 152.072 46.547 152.055 46.547 152.039 46.547 C 152.022 46.547 152.005 46.547 151.989 46.547 C 151.972 46.547 151.955 46.547 151.939 46.547 C 151.922 46.547 151.905 46.547 151.889 46.547 C 151.872 46.547 151.855 46.547 151.839 46.547 C 151.822 46.547 151.806 46.547 151.789 46.547 C 151.772 46.547 151.756 46.547 151.739 46.547 C 151.723 46.547 151.706 46.547 151.69 46.547 C 151.673 46.547 151.657 46.547 151.641 46.547 C 151.624 46.547 151.608 46.547 151.591 46.547 C 151.575 46.547 151.558 46.547 151.542 46.547 C 151.526 46.547 151.509 46.547 151.493 46.547 C 151.477 46.547 151.46 46.547 151.444 46.547 C 151.428 46.547 151.412 46.547 151.395 46.547 C 151.379 46.547 151.363 46.547 151.347 46.547 C 151.33 46.547 151.314 46.547 151.298 46.547 C 151.282 46.547 151.266 46.547 151.249 46.547 C 151.233 46.547 151.217 46.547 151.201 46.547 C 151.185 46.547 151.169 46.547 151.153 46.547 C 151.137 46.547 151.121 46.547 151.105 46.547 C 151.089 46.547 151.073 46.547 151.057 46.547 C 151.041 46.547 151.025 46.547 151.009 46.547 C 150.993 46.547 150.977 46.547 150.961 46.547 C 150.945 46.547 150.929 46.547 150.913 46.547 C 150.897 46.547 150.882 46.547 150.866 46.547 C 150.85 46.547 150.834 46.547 150.818 46.547 C 150.803 46.547 150.787 46.547 150.771 46.547 L 150.771 48.547 Z M 182.448 45.465 L 200.153 2.849 L 198.306 2.082 L 180.601 44.697 L 182.448 45.465 Z M 202.923 1 L 222.533 1 L 222.533 -1 L 202.923 -1 L 202.923 1 Z M 225.214 2.653 L 246.888 45.791 L 248.675 44.893 L 227.001 1.755 L 225.214 2.653 Z M 251.356 48.547 L 260.608 48.547 L 260.608 46.547 L 251.356 46.547 L 251.356 48.547 Z M 264.473 46.717 L 301.073 2.097 L 299.527 0.829 L 262.927 45.449 L 264.473 46.717 Z M 303.392 1 L 320 1 L 320 -1 L 303.392 -1 L 303.392 1 Z M 116.641 82.575 L 126.027 82.575 L 126.027 80.575 L 116.641 80.575 L 116.641 82.575 Z M 130.327 80.127 L 148.198 50.015 L 146.478 48.995 L 128.607 79.106 L 130.327 80.127 Z M 301.073 2.097 C 301.643 1.403 302.494 1 303.392 1 L 303.392 -1 C 301.895 -1 300.476 -0.329 299.527 0.829 L 301.073 2.097 Z M 260.608 48.547 C 262.105 48.547 263.524 47.875 264.473 46.717 L 262.927 45.449 C 262.357 46.144 261.506 46.547 260.608 46.547 L 260.608 48.547 Z M 246.888 45.791 C 247.737 47.48 249.465 48.547 251.356 48.547 L 251.356 46.547 C 250.221 46.547 249.184 45.907 248.675 44.893 L 246.888 45.791 Z M 222.533 1 C 223.667 1 224.705 1.64 225.214 2.653 L 227.001 1.755 C 226.152 0.066 224.424 -1 222.533 -1 L 222.533 1 Z M 200.153 2.849 C 200.618 1.73 201.711 1 202.923 1 L 202.923 -1 C 200.903 -1 199.081 0.216 198.306 2.082 L 200.153 2.849 Z M 177.839 48.547 C 179.861 48.547 181.673 47.328 182.448 45.465 L 180.601 44.697 C 180.135 45.819 179.049 46.547 177.839 46.547 L 177.839 48.547 Z M 150.771 46.547 C 149.004 46.547 147.378 47.478 146.478 48.995 L 148.198 50.015 C 148.739 49.103 149.714 48.547 150.771 48.547 L 150.771 46.547 Z M 126.027 82.575 C 127.792 82.575 129.426 81.644 130.327 80.127 L 128.607 79.106 C 128.066 80.016 127.086 80.575 126.027 80.575 L 126.027 82.575 Z M 112.325 80.1 C 113.222 81.633 114.865 82.575 116.641 82.575 L 116.641 80.575 C 115.575 80.575 114.589 80.01 114.051 79.09 L 112.325 80.1 Z M 92.142 48.547 C 93.207 48.547 94.193 49.112 94.731 50.031 L 96.457 49.021 C 95.56 47.489 93.918 46.547 92.142 46.547 L 92.142 48.547 Z M 74.56 45.431 C 75.326 47.315 77.157 48.547 79.191 48.547 L 79.191 46.547 C 77.971 46.547 76.872 45.807 76.412 44.677 L 74.56 45.431 Z M 54.467 1 C 55.687 1 56.786 1.739 57.246 2.87 L 59.098 2.116 C 58.332 0.232 56.501 -1 54.467 -1 L 54.467 1 Z M 34.002 3.22 C 34.355 1.91 35.543 1 36.899 1 L 36.899 -1 C 34.638 -1 32.659 0.517 32.071 2.7 L 34.002 3.22 Z M 5.468 95 C 7.729 95 9.708 93.483 10.296 91.3 L 8.364 90.78 C 8.012 92.09 6.824 93 5.468 93 L 5.468 95 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <div style={{
              position: "absolute",
              left: 150,
              top: 61,
              width: 20,
              height: 20,
            }}>
              <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "var(--primary-base)",
                boxShadow: "0 0 0 2px var(--stroke-white-0), 0px 1px 2px 0px rgba(10,13,20,0.03)",
              }} />
              <Tooltip11
                style={{
                  position: "absolute",
                  left: -29,
                  top: -24,
                  width: 77,
                }}
                editText={"Monday, 6h"}
                type={"🔽 bottom center"}
                size={"2x-small"}
                darkMode={"off"}
              />
            </div>
          </div>
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
          <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>{props.icon4 ?? <InfoCustomFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-soft-400)",
            flexGrow: 1,
          }}>{props.text4 ?? "Total work hours include extra hours."}</span>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <FileChartLine />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Work Hour Analysis"}</span>
        </div>
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
      <ContentDivider11
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"line"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: "4px 0px 4px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
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
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                position: "absolute",
                left: 2.5,
                top: 2.5,
                width: 15,
                height: 15,
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 8.25 7.5 L 8.25 3.75 L 6.75 3.75 L 6.75 9 L 11.25 9 L 11.25 7.5 L 8.25 7.5 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
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
              fontSize: 11,
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "Total Work"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "24px",
              letterSpacing: "-0.015em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "0 hours ∙ 0 mins"}</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
            alignContent: "space-between",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>5D</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>2W</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>1M</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>6M</span>
            </div>
            <div style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 0.500px var(--stroke-soft-200), 0 0 0 0.500px var(--stroke-soft-200)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 12px 4px 12px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexGrow: 1,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                letterSpacing: "-0.006em",
                color: "var(--text-sub-600)",
                flexShrink: 0,
              }}>1Y</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
                position: "relative",
                width: 80,
                height: 80,
                flexShrink: 0,
              }}>
              <EmptyStatesHRManagement1
                style={{ transform: "scale(0.541, 0.541)", transformOrigin: "0 0" }}
                type={"📊 work hour analysis"}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-soft-400)",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "pre-wrap",
            }}>{props.text4 ?? "No records of work hours yet.\nPlease check back later."}</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 728,
      height: 380,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
              color: "rgb(14,18,27)",
            }}>{props.icon1 ?? <Book3Line />}</div>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text1 ?? "Courses"}</span>
        </div>
        <TextInput11
          style={{
            position: "relative",
            width: 300,
            height: 36,
            flexShrink: 0,
          }}
          label={false}
          hintText={false}
          rightIcon={false}
          type={"🔍 search"}
          state={"placeholder"}
          size={"xs"}
        />
        <div style={{ position: "relative", width: 71, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"See All"} />}</div>
      </div>
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
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-weak-50)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <TableHeaderCell11
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            checkbox={false}
            sorting={false}
            editText={"Instructor"}
            state={"default"}
          />
          <TableHeaderCell11
            style={{ position: "relative", width: 164, flexShrink: 0 }}
            checkbox={false}
            sorting={false}
            editText={"Course Name"}
            state={"default"}
          />
          <TableHeaderCell11
            style={{ position: "relative", width: 140, flexShrink: 0 }}
            checkbox={false}
            sorting={false}
            editText={"Progress"}
            state={"default"}
          />
          <TableHeaderCell11
            style={{ position: "relative", width: 120, flexShrink: 0 }}
            checkbox={false}
            sorting={false}
            editText={"Status"}
            state={"default"}
          />
          <div style={{
              position: "relative",
              width: 64,
              height: 36,
              flexShrink: 0,
            }}>{props.icon3 ?? <TableHeaderCell11 checkbox={false} sorting={false} editText={"Status"} state={"empty"} />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 12,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <TableRowCell11
              style={{
                position: "relative",
                height: 64,
                flexGrow: 1,
                width: "auto",
              }}
              checkbox={false}
              icon={false}
              avatar={true}
              editTitle={"Nuray Aksoy"}
              editDescription={"Product Manager"}
              icon4={<Avatar11 persona={"nuray aksoy"} size={"40"} image={"off"} solidBG={"off"} memoji={"off"} illustration={"on"} text={"off"} icon={"off"} style={{ width: "100%", height: "100%" }} />}
              state={"default"}
              priority={"🥇 leading"}
              misc={"🚫 none"}
              size={"xl"}
            />
            <TableRowCell11
              style={{
                position: "relative",
                width: 164,
                height: 64,
                flexShrink: 0,
              }}
              icon={false}
              editTitle={"Time Management"}
              editDescription={"Aug 21 - Sep 04"}
              state={"default"}
              priority={"🌟 regular"}
              misc={"🚫 none"}
              size={"xl"}
            />
            <div style={{
              position: "relative",
              width: 140,
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
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                flexWrap: "nowrap",
                flex