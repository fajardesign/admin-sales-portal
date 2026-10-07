import { StackedBarChartItemBudget } from './StackedBarChartItemBudget.jsx';

// figma node: 3963:6854 Stacked Bar Chart [Budget Overview] [1.1] (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "variant=" + __venc(p.variant);

export function StackedBarChartBudgetOverview(_p = {}) {
  const props = { ..._p, variant: _p.variant ?? "12-bar" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 696,
      height: 200,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        height: 162,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>{props.text1 ?? "20k"}</span>
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
        }}>{props.text2 ?? "15k"}</span>
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
        }}>{props.text3 ?? "10k"}</span>
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
        }}>{props.text4 ?? "0"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 8px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 12,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <div style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <StackedBarChartItemBudget type={"expenses"} state={"default"} />}</div>
            <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon2 ?? <StackedBarChartItemBudget type={"scheduled"} state={"default"} />}</div>
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
          }}>J</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 11,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <div style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon3 ?? <StackedBarChartItemBudget type={"expenses"} state={"default"} />}</div>
            <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon4 ?? <StackedBarChartItemBudget type={"scheduled"} state={"default"} />}</div>
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
          }}>F</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 10,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>M</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 9,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>A</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 8,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>M</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 7,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>J</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 6,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>J</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 5,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>A</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>S</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 3,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>O</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>N</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 1,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>D</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 696,
      height: 200,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        height: 162,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>{props.text1 ?? "20k"}</span>
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
        }}>{props.text2 ?? "15k"}</span>
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
        }}>{props.text3 ?? "10k"}</span>
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
        }}>{props.text4 ?? "0"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 8px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 7,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <div style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon1 ?? <StackedBarChartItemBudget type={"expenses"} state={"default"} />}</div>
            <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon2 ?? <StackedBarChartItemBudget type={"scheduled"} state={"default"} />}</div>
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
          }}>M</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 6,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <div style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon3 ?? <StackedBarChartItemBudget type={"expenses"} state={"default"} />}</div>
            <div style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}>{props.icon4 ?? <StackedBarChartItemBudget type={"scheduled"} state={"default"} />}</div>
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
          }}>T</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 5,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>W</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>T</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 3,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>F</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>S</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 1,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>S</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 696,
      height: 200,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        height: 162,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>{props.text1 ?? "20k"}</span>
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
        }}>{props.text2 ?? "15k"}</span>
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
        }}>{props.text3 ?? "10k"}</span>
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
        }}>{props.text4 ?? "0"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 8px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 6,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Jan - Feb</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 5,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Mar - Apr</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>May - June</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 3,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>July - Aug</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Sep - Oct</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 1,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Nov - Dec</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 696,
      height: 200,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 24,
        height: 162,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        }}>{props.text1 ?? "20k"}</span>
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
        }}>{props.text2 ?? "15k"}</span>
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
        }}>{props.text3 ?? "10k"}</span>
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
        }}>{props.text4 ?? "0"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 8px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        isolation: "isolate",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Q1</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 3,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Q2</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Q3</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          zIndex: 1,
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              backgroundColor: "var(--bg-weak-50)",
              flexGrow: 1,
              alignSelf: "stretch",
            }} />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 80,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"income"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 32,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"expenses"}
              state={"default"}
            />
            <StackedBarChartItemBudget
              style={{
                position: "relative",
                height: 16,
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              type={"scheduled"}
              state={"default"}
            />
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
          }}>Q4</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: 💫 Variant=12-bar
    "variant=12-bar": __body0,
    // figma: 💫 Variant=7-bar
    "variant=7-bar": __body1,
    // figma: 💫 Variant=6-bar
    "variant=6-bar": __body2,
    // figma: 💫 Variant=4-bar
    "variant=4-bar": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default StackedBarChartBudgetOverview;
