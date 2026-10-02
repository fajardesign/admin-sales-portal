import { _CalendarScheduleFill as CalendarScheduleFill } from './CalendarScheduleFill.jsx';

// figma node: 172990:10727 Task Status (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function TaskStatus(_p = {}) {
  const props = { ..._p, status: _p.status ?? "failed" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 128,
      height: 128.003,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 128,
        height: 128,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 128,
          height: 128,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={128} height={128} viewBox="0 0 128 128" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 128,
            height: 128,
            color: "var(--orange-50)",
          }}>
            <path d={"M 64 128 C 99.346 128 128 99.346 128 64 C 128 28.654 99.346 0 64 0 C 28.654 0 0 28.654 0 64 C 0 99.346 28.654 128 64 128 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            width: 80,
            height: 120,
            borderRadius: 8,
            backgroundColor: "var(--orange-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 64,
            height: 102,
            borderRadius: 6,
            backgroundColor: "var(--icon-white-0)",
          }} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 42,
            width: 40,
            height: 40,
            overflow: "hidden",
          }}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              color: "var(--orange-500)",
            }}>
              <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={9.992} height={22} viewBox="0 0 9.992 22" fill="none" style={{
              position: "absolute",
              left: 13.008,
              top: 6,
              width: 9.992,
              height: 22,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 1.992 22 C 1.597 21.998 1.212 21.88 0.885 21.66 C 0.558 21.44 0.302 21.129 0.152 20.764 C 0.001 20.4 -0.039 19.999 0.038 19.612 C 0.114 19.225 0.304 18.87 0.582 18.59 L 5.992 13.17 L 5.992 2 C 5.992 1.47 6.202 0.961 6.577 0.586 C 6.952 0.211 7.461 0 7.992 0 C 8.522 0 9.031 0.211 9.406 0.586 C 9.781 0.961 9.992 1.47 9.992 2 L 9.992 14 C 9.989 14.53 9.777 15.037 9.402 15.41 L 3.402 21.41 C 3.028 21.786 2.521 21.998 1.992 22 L 1.992 22 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 89,
            width: 45,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 100,
            width: 37,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 111,
            width: 26,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 58,
            top: 14,
            width: 14,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 8,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--orange-500)",
            }} />
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 10,
              height: 4,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--icon-white-0)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 47,
            top: 20,
            width: 36,
            height: 14,
            borderRadius: 2,
            backgroundColor: "var(--orange-500)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 122,
        height: 116,
        overflow: "hidden",
      }}>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 32.31,
          width: 6,
          height: 6,
          color: "var(--orange-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 116,
          top: 102,
          width: 6,
          height: 6,
          color: "var(--orange-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 100,
          top: 0,
          width: 6,
          height: 6,
          color: "var(--orange-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 110,
          width: 6,
          height: 6,
          color: "var(--orange-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 128,
      height: 128.003,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 128,
        height: 128,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 128,
          height: 128,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={128} height={128} viewBox="0 0 128 128" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 128,
            height: 128,
            color: "var(--blue-50)",
          }}>
            <path d={"M 64 128 C 99.346 128 128 99.346 128 64 C 128 28.654 99.346 0 64 0 C 28.654 0 0 28.654 0 64 C 0 99.346 28.654 128 64 128 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            width: 80,
            height: 120,
            borderRadius: 8,
            backgroundColor: "var(--blue-200)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 64,
            height: 102,
            borderRadius: 6,
            backgroundColor: "var(--icon-white-0)",
          }} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 42,
            width: 40,
            height: 40,
            overflow: "hidden",
          }}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              color: "var(--blue-400)",
            }}>
              <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
                position: "absolute",
                left: 4,
                top: 4,
                width: 32,
                height: 32,
                color: "var(--icon-white-0)",
              }}>{props.icon1 ?? <CalendarScheduleFill style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 89,
            width: 45,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 100,
            width: 37,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 111,
            width: 26,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 58,
            top: 14,
            width: 14,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 8,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--blue-500)",
            }} />
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 10,
              height: 4,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--icon-white-0)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 47,
            top: 20,
            width: 36,
            height: 14,
            borderRadius: 2,
            backgroundColor: "var(--blue-500)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 122,
        height: 116,
        overflow: "hidden",
      }}>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 32.31,
          width: 6,
          height: 6,
          color: "var(--blue-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 116,
          top: 102,
          width: 6,
          height: 6,
          color: "var(--blue-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 100,
          top: 0,
          width: 6,
          height: 6,
          color: "var(--blue-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 110,
          width: 6,
          height: 6,
          color: "var(--blue-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 128,
      height: 128.003,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 128,
        height: 128,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 128,
          height: 128,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={128} height={128} viewBox="0 0 128 128" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 128,
            height: 128,
            color: "var(--green-50)",
          }}>
            <path d={"M 64 128 C 99.346 128 128 99.346 128 64 C 128 28.654 99.346 0 64 0 C 28.654 0 0 28.654 0 64 C 0 99.346 28.654 128 64 128 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            width: 80,
            height: 120,
            borderRadius: 8,
            backgroundColor: "var(--green-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 64,
            height: 102,
            borderRadius: 6,
            backgroundColor: "var(--icon-white-0)",
          }} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 42,
            width: 40,
            height: 40,
            overflow: "hidden",
          }}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              color: "var(--green-500)",
            }}>
              <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={23.438} height={16.257} viewBox="0 0 23.438 16.257" fill="none" style={{
              position: "absolute",
              left: 9.19,
              top: 12.826,
              width: 23.438,
              height: 16.257,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 7.71 15.728 L 0.437 8.455 C 0.139 8.108 -0.016 7.66 0.001 7.203 C 0.019 6.745 0.209 6.311 0.533 5.987 C 0.856 5.663 1.29 5.474 1.748 5.456 C 2.206 5.438 2.653 5.594 3.001 5.892 L 8.992 11.874 L 20.437 0.437 C 20.785 0.139 21.232 -0.016 21.69 0.001 C 22.148 0.019 22.582 0.209 22.905 0.533 C 23.229 0.856 23.419 1.29 23.437 1.748 C 23.454 2.206 23.299 2.653 23.001 3.001 L 10.274 15.728 C 9.933 16.067 9.472 16.257 8.992 16.257 C 8.511 16.257 8.051 16.067 7.71 15.728 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 89,
            width: 45,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 100,
            width: 37,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 111,
            width: 26,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 58,
            top: 14,
            width: 14,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 8,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--green-500)",
            }} />
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 10,
              height: 4,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--icon-white-0)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 47,
            top: 20,
            width: 36,
            height: 14,
            borderRadius: 2,
            backgroundColor: "var(--green-500)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 122,
        height: 116,
        overflow: "hidden",
      }}>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 32.31,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 116,
          top: 102,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 100,
          top: 0,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 110,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 128,
      height: 128.003,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 128,
        height: 128,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 128,
          height: 128,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={128} height={128} viewBox="0 0 128 128" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 128,
            height: 128,
            color: "var(--green-50)",
          }}>
            <path d={"M 64 128 C 99.346 128 128 99.346 128 64 C 128 28.654 99.346 0 64 0 C 28.654 0 0 28.654 0 64 C 0 99.346 28.654 128 64 128 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            width: 80,
            height: 120,
            borderRadius: 8,
            backgroundColor: "var(--green-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 64,
            height: 102,
            borderRadius: 6,
            backgroundColor: "var(--icon-white-0)",
          }} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 42,
            width: 40,
            height: 40,
            overflow: "hidden",
          }}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              color: "var(--green-500)",
            }}>
              <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={23.438} height={16.257} viewBox="0 0 23.438 16.257" fill="none" style={{
              position: "absolute",
              left: 9.19,
              top: 12.826,
              width: 23.438,
              height: 16.257,
              color: "var(--icon-white-0)",
            }}>
              <path d={"M 7.71 15.728 L 0.437 8.455 C 0.139 8.108 -0.016 7.66 0.001 7.203 C 0.019 6.745 0.209 6.311 0.533 5.987 C 0.856 5.663 1.29 5.474 1.748 5.456 C 2.206 5.438 2.653 5.594 3.001 5.892 L 8.992 11.874 L 20.437 0.437 C 20.785 0.139 21.232 -0.016 21.69 0.001 C 22.148 0.019 22.582 0.209 22.905 0.533 C 23.229 0.856 23.419 1.29 23.437 1.748 C 23.454 2.206 23.299 2.653 23.001 3.001 L 10.274 15.728 C 9.933 16.067 9.472 16.257 8.992 16.257 C 8.511 16.257 8.051 16.067 7.71 15.728 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 89,
            width: 45,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 100,
            width: 37,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 111,
            width: 26,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 58,
            top: 14,
            width: 14,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 8,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--green-500)",
            }} />
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 10,
              height: 4,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--icon-white-0)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 47,
            top: 20,
            width: 36,
            height: 14,
            borderRadius: 2,
            backgroundColor: "var(--green-500)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 122,
        height: 116,
        overflow: "hidden",
      }}>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 32.31,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 116,
          top: 102,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 100,
          top: 0,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 110,
          width: 6,
          height: 6,
          color: "var(--green-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "absolute",
        left: 84,
        top: -4,
        width: 48,
        height: 48,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          borderRadius: 36,
          backgroundColor: "var(--bg-white-0)",
          display: "flex",
          flexDirection: "row",
          gap: 10.909090995788574,
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <svg width={36} height={36} viewBox="0 0 36 36" fill="none" style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
            color: "var(--state-error-base)",
          }}>
            <path d={"M 18 36 C 8.059 36 0 27.941 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 Z M 16.2 23.4 L 16.2 27 L 19.8 27 L 19.8 23.4 L 16.2 23.4 Z M 16.2 9 L 16.2 19.8 L 19.8 19.8 L 19.8 9 L 16.2 9 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 128,
      height: 128.003,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 128,
        height: 128,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 128,
          height: 128,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={128} height={128} viewBox="0 0 128 128" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 128,
            height: 128,
            color: "var(--red-50)",
          }}>
            <path d={"M 64 128 C 99.346 128 128 99.346 128 64 C 128 28.654 99.346 0 64 0 C 28.654 0 0 28.654 0 64 C 0 99.346 28.654 128 64 128 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 24,
            top: 24,
            width: 80,
            height: 120,
            borderRadius: 8,
            backgroundColor: "var(--red-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 32,
            top: 32,
            width: 64,
            height: 102,
            borderRadius: 6,
            backgroundColor: "var(--icon-white-0)",
          }} />
          <div style={{
            position: "absolute",
            left: 44,
            top: 42,
            width: 40,
            height: 40,
            overflow: "hidden",
          }}>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 40,
              height: 40,
              color: "var(--red-400)",
            }}>
              <path d={"M 20 40 C 31.046 40 40 31.046 40 20 C 40 8.954 31.046 0 20 0 C 8.954 0 0 8.954 0 20 C 0 31.046 8.954 40 20 40 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <div style={{
              position: "absolute",
              left: 10.909,
              top: 10.909,
              width: 17.999,
              height: 17.999,
              overflow: "hidden",
            }}>
              <svg width={21.818} height={3.636} viewBox="0 0 21.818 3.636" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-0.707,0.707,-0.707,-0.707,17.999,2.571)",
                transformOrigin: "0 0",
                width: 21.818,
                height: 3.636,
                borderRadius: 90,
                color: "var(--icon-white-0)",
              }}>
                <path d={"M 20 0 C 21.004 0 21.818 0.814 21.818 1.818 C 21.818 2.822 21.004 3.636 20 3.636 L 1.818 3.636 C 0.814 3.636 0 2.822 0 1.818 C 0 0.814 0.814 0 1.818 0 L 20 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
              <svg width={21.818} height={3.636} viewBox="0 0 21.818 3.636" fill="none" style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: "matrix(-0.707,-0.707,0.707,-0.707,15.428,17.999)",
                transformOrigin: "0 0",
                width: 21.818,
                height: 3.636,
                borderRadius: 90,
                color: "var(--icon-white-0)",
              }}>
                <path d={"M 20 0 C 21.004 0 21.818 0.814 21.818 1.818 C 21.818 2.822 21.004 3.636 20 3.636 L 1.818 3.636 C 0.814 3.636 0 2.822 0 1.818 C 0 0.814 0.814 0 1.818 0 L 20 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <div style={{
            position: "absolute",
            left: 38,
            top: 89,
            width: 45,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 100,
            width: 37,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 38,
            top: 111,
            width: 26,
            height: 6,
            borderRadius: 0.7628865838050842,
            backgroundColor: "var(--bg-sub-300)",
          }} />
          <div style={{
            position: "absolute",
            left: 58,
            top: 14,
            width: 14,
            height: 8,
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 14,
              height: 8,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--red-500)",
            }} />
            <div style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 10,
              height: 4,
              borderRadius: "6px 6px 8px 8px",
              backgroundColor: "var(--icon-white-0)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 47,
            top: 20,
            width: 36,
            height: 14,
            borderRadius: 2,
            backgroundColor: "var(--red-500)",
          }} />
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 6,
        width: 122,
        height: 116,
        overflow: "hidden",
      }}>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 32.31,
          width: 6,
          height: 6,
          color: "var(--red-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 116,
          top: 102,
          width: 6,
          height: 6,
          color: "var(--red-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 100,
          top: 0,
          width: 6,
          height: 6,
          color: "var(--red-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
          position: "absolute",
          left: 10,
          top: 110,
          width: 6,
          height: 6,
          color: "var(--red-400)",
        }}>
          <path d={"M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
  const __impls = {
    // figma: Status=Pending
    "status=pending": __body0,
    // figma: Status=Schedule
    "status=schedule": __body1,
    // figma: Status=Success
    "status=success": __body2,
    // figma: Status=Partial
    "status=partial": __body3,
    // figma: Status=Failed
    "status=failed": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default TaskStatus;
