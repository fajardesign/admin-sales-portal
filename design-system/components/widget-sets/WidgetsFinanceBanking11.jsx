import { _AmazonPrime as AmazonPrime } from './AmazonPrime.jsx';
import { _ArrowLeftDownLine as ArrowLeftDownLine } from './ArrowLeftDownLine.jsx';
import { _ArrowLeftRightLine as ArrowLeftRightLine } from './ArrowLeftRightLine.jsx';
import { _ArrowRightUpLine as ArrowRightUpLine } from './ArrowRightUpLine.jsx';
import { _Avatar11 as Avatar11 } from './Avatar11.jsx';
import { _Badge11 as Badge11 } from './Badge11.jsx';
import { _Badge11BasicGreen9 as Badge11BasicGreen9 } from './Badge11BasicGreen9.jsx';
import { _Badge11BasicOrange13 as Badge11BasicOrange13 } from './Badge11BasicOrange13.jsx';
import { _Badge11BasicRed9 as Badge11BasicRed9 } from './Badge11BasicRed9.jsx';
import { _BankCardLine as BankCardLine } from './BankCardLine.jsx';
import { _BarChartBoxLine as BarChartBoxLine } from './BarChartBoxLine.jsx';
import { Buttons11NeutralStroke17 } from '../misc-sets/Buttons11NeutralStroke17.jsx';
import { _Canada as Canada } from './Canada.jsx';
import { CardDetailsTabMyCards } from './CardDetailsTabMyCards.jsx';
import { _ChartLegends11 as ChartLegends11 } from './ChartLegends11.jsx';
import { _CircularProgressBar11 as CircularProgressBar11 } from './CircularProgressBar11.jsx';
import { _CompactSelect11 as CompactSelect11 } from './CompactSelect11.jsx';
import { _ContentDivider11 as ContentDivider11 } from './ContentDivider11.jsx';
import { _ContentDivider11Line as ContentDivider11Line } from './ContentDivider11Line.jsx';
import { CreditCardsMyCards1 } from './CreditCardsMyCards1.jsx';
import { _CurrencyLine as CurrencyLine } from './CurrencyLine.jsx';
import { _CursorPointer as CursorPointer } from './CursorPointer.jsx';
import { _DecorativeIcons as DecorativeIcons } from './DecorativeIcons.jsx';
import { DonationDetailsTabDonationProfile } from './DonationDetailsTabDonationProfile.jsx';
import { _EmptyStatesFinanceBanking1 as EmptyStatesFinanceBanking1 } from './EmptyStatesFinanceBanking1.jsx';
import { _EuropeanUnion as EuropeanUnion } from './EuropeanUnion.jsx';
import { _FileChartLine as FileChartLine } from './FileChartLine.jsx';
import { _FileListLine as FileListLine } from './FileListLine.jsx';
import { _FireFill as FireFill } from './FireFill.jsx';
import { _FlashlightLine as FlashlightLine } from './FlashlightLine.jsx';
import { _HandHeartFill as HandHeartFill } from './HandHeartFill.jsx';
import { _HandHeartLine as HandHeartLine } from './HandHeartLine.jsx';
import { _HomeSmileFill as HomeSmileFill } from './HomeSmileFill.jsx';
import { _InfoCustomFill as InfoCustomFill } from './InfoCustomFill.jsx';
import { _InlineSelect11 as InlineSelect11 } from './InlineSelect11.jsx';
import { _Japan as Japan } from './Japan.jsx';
import { _LineChartLine as LineChartLine } from './LineChartLine.jsx';
import { _Mastercard2 as Mastercard2 } from './Mastercard2.jsx';
import { MyContactsQuickTransfer1 } from './MyContactsQuickTransfer1.jsx';
import { _Netflix as Netflix } from './Netflix.jsx';
import { _PieChartLine as PieChartLine } from './PieChartLine.jsx';
import { PromotionalCardsMySubscriptions1 } from './PromotionalCardsMySubscriptions1.jsx';
import { _RefreshLine as RefreshLine } from './RefreshLine.jsx';
import { _Refund2Line as Refund2Line } from './Refund2Line.jsx';
import { _SmilingFaceWithSunglasses as SmilingFaceWithSunglasses } from './SmilingFaceWithSunglasses.jsx';
import { _SpeedUpLine as SpeedUpLine } from './SpeedUpLine.jsx';
import { _Spotify as Spotify } from './Spotify.jsx';
import { StackedBarChartBudgetOverview } from '../misc-sets/StackedBarChartBudgetOverview.jsx';
import { _TextInput11 as TextInput11 } from './TextInput11.jsx';
import { TimeTrackerDropdownTimeTracker } from './TimeTrackerDropdownTimeTracker.jsx';
import { _Tooltip11 as Tooltip11 } from './Tooltip11.jsx';
import { TransactionDetailTabsRecentTransactions } from './TransactionDetailTabsRecentTransactions.jsx';
import { TransactionItemsRecentTransactions1 } from './TransactionItemsRecentTransactions1.jsx';
import { _Turkey as Turkey } from './Turkey.jsx';
import { _UnitedStates as UnitedStates } from './UnitedStates.jsx';
import { _YoutubeMusic as YoutubeMusic } from './YoutubeMusic.jsx';

// figma node: 3963:7181 Widgets [Finance & Banking] [1.1] (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "emptyState=" + __venc(p.emptyState);

export function WidgetsFinanceBanking11(_p = {}) {
  const props = { ..._p, type: _p.type ?? "📈 stock market tracker", emptyState: _p.emptyState ?? "off" };
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
            }}>{props.icon1 ?? <LineChartLine />}</div>
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
          }}>{props.text1 ?? "Stock Market Tracker"}</span>
        </div>
        <CompactSelect11
          style={{ position: "relative", width: 84, flexShrink: 0 }}
          editText={"ACME"}
          type={"📂 basic"}
          state={"filled"}
          size={"xs"}
        />
      </div>
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
          }}>1D</span>
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
          }}>1W</span>
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
          }}>3M</span>
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
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>1Y</span>
        </div>
      </div>
      <div style={{
        position: "relative",
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
          display: "flex",
          flexDirection: "row",
          gap: 8,
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
            lineHeight: "16px",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text2 ?? "$440,364.20"}</span>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-success-lighter)",
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
              <svg width={7.333} height={7.333} viewBox="0 0 7.333 7.333" fill="none" style={{
                position: "absolute",
                left: 4.333,
                top: 4.333,
                width: 7.333,
                height: 7.333,
                color: "rgb(251,55,72)",
              }}>
                <path d={"M 6.113 2.083 L 0.863 7.333 L 0 6.471 L 5.25 1.22 L 0.623 1.22 L 0.623 0 L 7.333 0 L 7.333 6.71 L 6.113 6.71 L 6.113 2.083 L 6.113 2.083 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--state-success-base)",
              flexShrink: 0,
            }}>0.48%</span>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "28px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "Acme Tech Inc. (ACME)"}</span>
      </div>
      <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
        <svg width={320} height={110} viewBox="0 0 320 110" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 19,
          width: 320,
          height: 110,
          borderRadius: 1,
          color: "var(--primary-base)",
        }}>
          <path d={"M 128 85.894 L 127.334 85.679 L 127.328 85.697 L 127.323 85.715 L 128 85.894 Z M 320.67 48.413 C 320.782 48.043 320.572 47.653 320.202 47.541 C 319.832 47.43 319.441 47.64 319.33 48.01 L 320.67 48.413 Z M 312.41 68.031 L 311.869 68.475 L 312.41 68.031 Z M 314.141 67.685 L 314.811 67.887 L 314.141 67.685 Z M 300.012 77.332 L 300.694 77.178 L 300.012 77.332 Z M 301.936 77.429 L 301.272 77.207 L 301.936 77.429 Z M 293.197 55.397 L 292.549 55.132 L 293.197 55.397 Z M 295.098 55.557 L 294.415 55.711 L 295.098 55.557 Z M 286.962 66.453 L 287.55 66.074 L 286.962 66.453 Z M 288.727 66.291 L 289.375 66.557 L 288.727 66.291 Z M 280.964 60.18 L 281.633 60.388 L 281.633 60.388 L 280.964 60.18 Z M 282.759 59.936 L 282.171 60.315 L 282.759 59.936 Z M 274.126 78.103 L 274.465 77.491 L 274.126 78.103 Z M 275.565 77.526 L 274.897 77.318 L 275.565 77.526 Z M 268.333 76.085 L 268.959 76.399 L 268.333 76.085 Z M 269.711 75.658 L 270.051 75.046 L 269.711 75.658 Z M 261.972 84.693 L 262.666 84.6 L 261.972 84.693 Z M 263.857 85.009 L 264.483 85.323 L 263.857 85.009 Z M 254.838 45.756 L 254.15 45.624 L 254.838 45.756 Z M 256.811 45.813 L 257.505 45.721 L 256.811 45.813 Z M 248.578 68.157 L 247.893 68.301 L 248.578 68.157 Z M 250.538 68.14 L 249.851 68.008 L 250.538 68.14 Z M 241.927 45.218 L 242.56 45.519 L 241.927 45.218 Z M 243.809 45.442 L 243.124 45.586 L 243.809 45.442 Z M 236.345 52.687 L 235.652 52.782 L 236.345 52.687 Z M 238.239 52.981 L 237.607 52.68 L 238.239 52.981 Z M 228.935 11.489 L 229.523 11.868 L 228.935 11.489 Z M 230.766 11.895 L 231.46 11.8 L 230.766 11.895 Z M 223.34 17.168 L 222.676 17.39 L 223.34 17.168 Z M 225.129 17.393 L 225.717 17.772 L 225.717 17.772 L 225.129 17.393 Z M 216.94 3.965 L 217.63 4.08 L 216.94 3.965 Z M 218.875 3.812 L 218.211 4.034 L 218.875 3.812 Z M 212.65 26.741 L 212.397 26.088 L 212.65 26.741 Z M 213.275 25.973 L 212.585 25.858 L 213.275 25.973 Z M 204.341 29.218 L 204.882 28.774 L 204.341 29.218 Z M 205.475 29.517 L 205.222 28.864 L 205.475 29.517 Z M 198.12 24.304 L 198.815 24.388 L 198.12 24.304 Z M 199.886 23.79 L 200.427 23.346 L 199.886 23.79 Z M 190.527 73.522 L 191.047 73.053 L 191.047 73.053 L 190.527 73.522 Z M 192.263 72.972 L 191.568 72.888 L 192.263 72.972 Z M 185.046 69.66 L 185.707 69.89 L 185.046 69.66 Z M 186.733 69.318 L 186.213 69.787 L 186.213 69.787 L 186.733 69.318 Z M 178.067 85.243 L 177.548 85.712 L 178.067 85.243 Z M 179.754 84.901 L 180.416 85.13 L 179.754 84.901 Z M 172.74 79.288 L 173.364 78.972 L 172.74 79.288 Z M 172.89 79.507 L 173.409 79.038 L 172.89 79.507 Z M 166.377 66.682 L 167.041 66.46 L 166.377 66.682 Z M 166.433 66.816 L 165.808 67.132 L 166.433 66.816 Z M 159.338 51.568 L 160.029 51.683 L 159.338 51.568 Z M 161.273 51.416 L 160.609 51.638 L 161.273 51.416 Z M 146.217 56.492 L 145.528 56.365 L 146.217 56.492 Z M 148.183 56.492 L 148.872 56.365 L 148.183 56.492 Z M 139.583 82.12 L 138.917 82.335 L 139.583 82.12 Z M 141.518 81.994 L 140.83 81.867 L 141.518 81.994 Z M 135.352 68.995 L 136.018 68.78 L 135.352 68.995 Z M 120.485 107.16 L 121.137 106.904 L 120.485 107.16 Z M 122.383 107.051 L 123.059 107.231 L 122.383 107.051 Z M 114.117 94.893 L 114.637 95.362 L 114.117 94.893 Z M 115.79 95.197 L 116.442 94.942 L 116.442 94.942 L 115.79 95.197 Z M 108.564 98.556 L 107.868 98.63 L 108.564 98.556 Z M 110.3 99.121 L 109.781 98.652 L 110.3 99.121 Z M 101.096 46.683 L 101.782 46.826 L 101.096 46.683 Z M 103.07 46.783 L 102.373 46.856 L 103.07 46.783 Z M 94.729 68.264 L 95.362 67.965 L 95.362 67.965 L 94.729 68.264 Z M 96.612 68.043 L 97.297 68.187 L 96.612 68.043 Z M 88.603 58.708 L 89.163 59.129 L 88.603 58.708 Z M 90.307 58.883 L 89.674 59.181 L 90.307 58.883 Z M 82.787 63.65 L 82.099 63.777 L 82.787 63.65 Z M 84.57 64.07 L 85.129 64.491 L 84.57 64.07 Z M 75.633 35.288 L 76.307 35.478 L 75.633 35.288 Z M 77.579 35.378 L 78.267 35.251 L 77.579 35.378 Z M 69.357 50.833 L 68.695 51.062 L 69.357 50.833 Z M 71.264 50.776 L 71.937 50.966 L 71.264 50.776 Z M 63.207 38.741 L 62.526 38.58 L 63.207 38.741 Z M 65.125 38.644 L 65.786 38.415 L 65.125 38.644 Z M 56.337 60.247 L 55.737 60.608 L 56.337 60.247 Z M 58.166 59.962 L 58.847 60.124 L 58.166 59.962 Z M 50.728 54.324 L 51.417 54.449 L 50.728 54.324 Z M 52.569 53.986 L 51.969 54.347 L 52.569 53.986 Z M 43.579 86.485 L 43.24 87.097 L 43.579 86.485 Z M 45.048 85.788 L 44.359 85.663 L 45.048 85.788 Z M 38.001 84.72 L 38.66 84.957 L 38.001 84.72 Z M 39.427 84.185 L 39.087 84.797 L 39.427 84.185 Z M 31.471 97.243 L 30.777 97.332 L 31.471 97.243 Z M 33.403 97.454 L 34.062 97.692 L 33.403 97.454 Z M 18.096 67.891 L 17.521 68.29 L 18.096 67.891 Z M 19.858 67.66 L 20.516 67.898 L 19.858 67.66 Z M 13.621 61.447 L 14.196 61.048 L 13.621 61.447 Z M 152.569 80.296 L 151.88 80.423 L 152.569 80.296 Z M 154.539 80.28 L 155.229 80.395 L 154.539 80.28 Z M 306.626 63.398 L 305.962 63.177 L 306.626 63.398 Z M 308.348 63.081 L 307.807 63.525 L 308.348 63.081 Z M 5.742 67.66 L 5.084 67.898 L 5.084 67.898 L 5.742 67.66 Z M 7.504 67.891 L 6.929 67.492 L 7.504 67.891 Z M -0.658 51.994 L 5.084 67.898 L 6.401 67.423 L 0.658 51.519 L -0.658 51.994 Z M 8.079 68.29 L 12.554 61.847 L 11.404 61.048 L 6.929 67.492 L 8.079 68.29 Z M 13.046 61.847 L 17.521 68.29 L 18.671 67.492 L 14.196 61.048 L 13.046 61.847 Z M 20.516 67.898 L 24.855 55.881 L 23.538 55.406 L 19.199 67.423 L 20.516 67.898 Z M 25.435 55.944 L 30.777 97.332 L 32.165 97.153 L 26.823 55.765 L 25.435 55.944 Z M 34.062 97.692 L 38.66 84.957 L 37.343 84.482 L 32.745 97.216 L 34.062 97.692 Z M 39.087 84.797 L 43.24 87.097 L 43.918 85.872 L 39.766 83.572 L 39.087 84.797 Z M 45.737 85.912 L 51.417 54.449 L 50.039 54.2 L 44.359 85.663 L 45.737 85.912 Z M 51.969 54.347 L 55.737 60.608 L 56.936 59.886 L 53.169 53.625 L 51.969 54.347 Z M 58.847 60.124 L 63.888 38.903 L 62.526 38.58 L 57.485 59.8 L 58.847 60.124 Z M 64.464 38.874 L 68.695 51.062 L 70.018 50.603 L 65.786 38.415 L 64.464 38.874 Z M 71.937 50.966 L 76.307 35.478 L 74.959 35.098 L 70.59 50.586 L 71.937 50.966 Z M 76.89 35.505 L 82.099 63.777 L 83.476 63.523 L 78.267 35.251 L 76.89 35.505 Z M 85.129 64.491 L 89.163 59.129 L 88.044 58.287 L 84.01 63.649 L 85.129 64.491 Z M 89.674 59.181 L 94.096 68.562 L 95.362 67.965 L 90.94 58.584 L 89.674 59.181 Z M 97.297 68.187 L 101.782 46.826 L 100.411 46.539 L 95.927 67.899 L 97.297 68.187 Z M 102.373 46.856 L 107.868 98.63 L 109.26 98.482 L 103.766 46.709 L 102.373 46.856 Z M 110.82 99.59 L 114.637 95.362 L 113.598 94.424 L 109.781 98.652 L 110.82 99.59 Z M 115.139 95.453 L 119.834 107.416 L 121.137 106.904 L 116.442 94.942 L 115.139 95.453 Z M 123.059 107.231 L 128.677 86.074 L 127.323 85.715 L 121.706 106.872 L 123.059 107.231 Z M 128.666 86.109 L 134.114 69.209 L 132.782 68.78 L 127.334 85.679 L 128.666 86.109 Z M 134.686 69.209 L 138.917 82.335 L 140.249 81.905 L 136.018 68.78 L 134.686 69.209 Z M 142.207 82.121 L 146.905 56.619 L 145.528 56.365 L 140.83 81.867 L 142.207 82.121 Z M 147.495 56.619 L 151.88 80.423 L 153.257 80.169 L 148.872 56.365 L 147.495 56.619 Z M 155.229 80.395 L 160.029 51.683 L 158.648 51.452 L 153.848 80.165 L 155.229 80.395 Z M 160.609 51.638 L 165.713 66.904 L 167.041 66.46 L 161.937 51.194 L 160.609 51.638 Z M 165.808 67.132 L 172.115 79.604 L 173.364 78.972 L 167.058 66.5 L 165.808 67.132 Z M 172.37 79.976 L 177.548 85.712 L 178.587 84.774 L 173.409 79.038 L 172.37 79.976 Z M 180.416 85.13 L 185.707 69.89 L 184.384 69.431 L 179.093 84.671 L 180.416 85.13 Z M 186.213 69.787 L 190.008 73.991 L 191.047 73.053 L 187.252 68.849 L 186.213 69.787 Z M 192.958 73.055 L 198.815 24.388 L 197.425 24.221 L 191.568 72.888 L 192.958 73.055 Z M 199.345 24.234 L 203.8 29.663 L 204.882 28.774 L 200.427 23.346 L 199.345 24.234 Z M 205.727 30.17 L 212.902 27.394 L 212.397 26.088 L 205.222 28.864 L 205.727 30.17 Z M 213.966 26.088 L 217.63 4.08 L 216.249 3.85 L 212.585 25.858 L 213.966 26.088 Z M 218.211 4.034 L 222.676 17.39 L 224.004 16.946 L 219.538 3.59 L 218.211 4.034 Z M 225.717 17.772 L 229.523 11.868 L 228.347 11.11 L 224.54 17.013 L 225.717 17.772 Z M 230.073 11.99 L 235.652 52.782 L 237.039 52.592 L 231.46 11.8 L 230.073 11.99 Z M 238.872 53.281 L 242.56 45.519 L 241.295 44.918 L 237.607 52.68 L 238.872 53.281 Z M 243.124 45.586 L 247.893 68.301 L 249.263 68.013 L 244.494 45.298 L 243.124 45.586 Z M 251.226 68.272 L 255.525 45.888 L 254.15 45.624 L 249.851 68.008 L 251.226 68.272 Z M 256.117 45.905 L 261.278 84.785 L 262.666 84.6 L 257.505 45.721 L 256.117 45.905 Z M 264.483 85.323 L 268.959 76.399 L 267.707 75.771 L 263.232 84.695 L 264.483 85.323 Z M 269.372 76.271 L 273.786 78.716 L 274.465 77.491 L 270.051 75.046 L 269.372 76.271 Z M 276.233 77.734 L 281.633 60.388 L 280.296 59.972 L 274.897 77.318 L 276.233 77.734 Z M 282.171 60.315 L 286.373 66.833 L 287.55 66.074 L 283.348 59.556 L 282.171 60.315 Z M 289.375 66.557 L 293.845 55.663 L 292.549 55.132 L 288.08 66.025 L 289.375 66.557 Z M 294.415 55.711 L 299.329 77.486 L 300.694 77.178 L 295.78 55.403 L 294.415 55.711 Z M 302.599 77.651 L 307.29 63.62 L 305.962 63.177 L 301.272 77.207 L 302.599 77.651 Z M 307.807 63.525 L 311.869 68.475 L 312.951 67.587 L 308.889 62.637 L 307.807 63.525 Z M 314.811 67.887 L 320.67 48.413 L 319.33 48.01 L 313.47 67.483 L 314.811 67.887 Z M 311.869 68.475 C 312.732 69.527 314.419 69.189 314.811 67.887 L 313.47 67.483 C 313.401 67.713 313.103 67.773 312.951 67.587 L 311.869 68.475 Z M 299.329 77.486 C 299.708 79.164 302.054 79.283 302.599 77.651 L 301.272 77.207 C 301.175 77.495 300.761 77.474 300.694 77.178 L 299.329 77.486 Z M 293.845 55.663 C 293.956 55.392 294.35 55.425 294.415 55.711 L 295.78 55.403 C 295.415 53.782 293.18 53.595 292.549 55.132 L 293.845 55.663 Z M 286.373 66.833 C 287.118 67.987 288.853 67.828 289.375 66.557 L 288.08 66.025 C 287.988 66.249 287.681 66.278 287.55 66.074 L 286.373 66.833 Z M 281.633 60.388 C 281.708 60.145 282.033 60.101 282.171 60.315 L 283.348 59.556 C 282.566 58.344 280.725 58.595 280.296 59.972 L 281.633 60.388 Z M 273.786 78.716 C 274.729 79.238 275.913 78.763 276.233 77.734 L 274.897 77.318 C 274.84 77.499 274.631 77.583 274.465 77.491 L 273.786 78.716 Z M 268.959 76.399 C 269.035 76.246 269.223 76.188 269.372 76.271 L 270.051 75.046 C 269.205 74.578 268.14 74.907 267.707 75.771 L 268.959 76.399 Z M 261.278 84.785 C 261.499 86.444 263.733 86.82 264.483 85.323 L 263.232 84.695 C 263.099 84.96 262.705 84.893 262.666 84.6 L 261.278 84.785 Z M 255.525 45.888 C 255.546 45.78 255.591 45.729 255.63 45.701 C 255.677 45.666 255.747 45.642 255.828 45.645 C 255.91 45.647 255.979 45.675 256.023 45.712 C 256.061 45.743 256.103 45.796 256.117 45.905 L 257.505 45.721 C 257.251 43.809 254.514 43.73 254.15 45.624 L 255.525 45.888 Z M 247.893 68.301 C 248.274 70.118 250.876 70.095 251.226 68.272 L 249.851 68.008 C 249.832 68.11 249.789 68.161 249.75 68.191 C 249.704 68.226 249.637 68.251 249.559 68.251 C 249.481 68.252 249.413 68.228 249.367 68.194 C 249.327 68.164 249.284 68.114 249.263 68.013 L 247.893 68.301 Z M 242.56 45.519 C 242.683 45.259 243.065 45.305 243.124 45.586 L 244.494 45.298 C 244.16 43.705 241.994 43.448 241.295 44.918 L 242.56 45.519 Z M 235.652 52.782 C 235.881 54.456 238.147 54.807 238.872 53.281 L 237.607 52.68 C 237.479 52.95 237.079 52.888 237.039 52.592 L 235.652 52.782 Z M 229.523 11.868 C 229.674 11.634 230.035 11.714 230.073 11.99 L 231.46 11.8 C 231.246 10.237 229.202 9.783 228.347 11.11 L 229.523 11.868 Z M 222.676 17.39 C 223.128 18.742 224.944 18.97 225.717 17.772 L 224.54 17.013 C 224.404 17.225 224.083 17.184 224.004 16.946 L 222.676 17.39 Z M 217.63 4.08 C 217.682 3.772 218.112 3.738 218.211 4.034 L 219.538 3.59 C 218.977 1.91 216.54 2.102 216.249 3.85 L 217.63 4.08 Z M 212.902 27.394 C 213.463 27.177 213.867 26.681 213.966 26.088 L 212.585 25.858 C 212.568 25.963 212.496 26.05 212.397 26.088 L 212.902 27.394 Z M 203.8 29.663 C 204.266 30.23 205.043 30.434 205.727 30.17 L 205.222 28.864 C 205.101 28.911 204.964 28.875 204.882 28.774 L 203.8 29.663 Z M 198.815 24.388 C 198.847 24.126 199.177 24.029 199.345 24.234 L 200.427 23.346 C 199.477 22.188 197.604 22.735 197.425 24.221 L 198.815 24.388 Z M 190.008 73.991 C 190.985 75.074 192.783 74.504 192.958 73.055 L 191.568 72.888 C 191.537 73.144 191.22 73.244 191.047 73.053 L 190.008 73.991 Z M 185.707 69.89 C 185.782 69.674 186.06 69.618 186.213 69.787 L 187.252 68.849 C 186.386 67.89 184.808 68.21 184.384 69.431 L 185.707 69.89 Z M 177.548 85.712 C 178.414 86.671 179.992 86.351 180.416 85.13 L 179.093 84.671 C 179.018 84.886 178.74 84.943 178.587 84.774 L 177.548 85.712 Z M 172.115 79.604 C 172.183 79.739 172.269 79.864 172.37 79.976 L 173.409 79.038 C 173.391 79.018 173.376 78.996 173.364 78.972 L 172.115 79.604 Z M 165.713 66.904 C 165.739 66.982 165.771 67.059 165.808 67.132 L 167.058 66.5 C 167.051 66.487 167.045 66.474 167.041 66.46 L 165.713 66.904 Z M 160.029 51.683 C 160.08 51.375 160.51 51.341 160.609 51.638 L 161.937 51.194 C 161.375 49.514 158.94 49.705 158.648 51.452 L 160.029 51.683 Z M 146.905 56.619 C 146.924 56.514 146.967 56.463 147.006 56.433 C 147.052 56.398 147.12 56.373 147.2 56.373 C 147.28 56.373 147.348 56.398 147.394 56.433 C 147.433 56.463 147.476 56.514 147.495 56.619 L 148.872 56.365 C 148.53 54.509 145.87 54.509 145.528 56.365 L 146.905 56.619 Z M 138.917 82.335 C 139.459 84.016 141.887 83.858 142.207 82.121 L 140.83 81.867 C 140.774 82.174 140.345 82.202 140.249 81.905 L 138.917 82.335 Z M 134.114 69.209 C 134.204 68.932 134.596 68.932 134.686 69.209 L 136.018 68.78 C 135.511 67.209 133.289 67.209 132.782 68.78 L 134.114 69.209 Z M 119.834 107.416 C 120.434 108.945 122.638 108.818 123.059 107.231 L 121.706 106.872 C 121.632 107.152 121.243 107.174 121.137 106.904 L 119.834 107.416 Z M 114.637 95.362 C 114.786 95.196 115.057 95.246 115.139 95.453 L 116.442 94.942 C 115.981 93.766 114.444 93.486 113.598 94.424 L 114.637 95.362 Z M 107.868 98.63 C 108.023 100.092 109.835 100.681 110.82 99.59 L 109.781 98.652 C 109.607 98.844 109.287 98.74 109.26 98.482 L 107.868 98.63 Z M 101.782 46.826 C 101.804 46.718 101.85 46.668 101.89 46.641 C 101.938 46.607 102.008 46.584 102.09 46.588 C 102.172 46.593 102.24 46.622 102.285 46.661 C 102.321 46.692 102.362 46.746 102.373 46.856 L 103.766 46.709 C 103.561 44.782 100.809 44.643 100.411 46.539 L 101.782 46.826 Z M 94.096 68.562 C 94.791 70.037 96.962 69.782 97.297 68.187 L 95.927 67.899 C 95.868 68.181 95.485 68.226 95.362 67.965 L 94.096 68.562 Z M 89.163 59.129 C 89.298 58.948 89.577 58.977 89.674 59.181 L 90.94 58.584 C 90.394 57.427 88.813 57.265 88.044 58.287 L 89.163 59.129 Z M 82.099 63.777 C 82.367 65.233 84.239 65.674 85.129 64.491 L 84.01 63.649 C 83.853 63.858 83.523 63.78 83.476 63.523 L 82.099 63.777 Z M 76.307 35.478 C 76.333 35.383 76.378 35.335 76.42 35.308 C 76.467 35.276 76.534 35.256 76.609 35.259 C 76.685 35.263 76.749 35.289 76.794 35.325 C 76.832 35.357 76.873 35.408 76.89 35.505 L 78.267 35.251 C 77.941 33.481 75.448 33.365 74.959 35.098 L 76.307 35.478 Z M 68.695 51.062 C 69.241 52.634 71.486 52.567 71.937 50.966 L 70.59 50.586 C 70.51 50.869 70.114 50.881 70.018 50.603 L 68.695 51.062 Z M 63.888 38.903 C 63.958 38.611 64.365 38.591 64.464 38.874 L 65.786 38.415 C 65.229 36.809 62.919 36.925 62.526 38.58 L 63.888 38.903 Z M 55.737 60.608 C 56.522 61.913 58.495 61.606 58.847 60.124 L 57.485 59.8 C 57.423 60.062 57.075 60.116 56.936 59.886 L 55.737 60.608 Z M 51.417 54.449 C 51.466 54.176 51.827 54.11 51.969 54.347 L 53.169 53.625 C 52.36 52.282 50.318 52.656 50.039 54.2 L 51.417 54.449 Z M 43.24 87.097 C 44.259 87.661 45.53 87.058 45.737 85.912 L 44.359 85.663 C 44.323 85.866 44.098 85.972 43.918 85.872 L 43.24 87.097 Z M 38.66 84.957 C 38.723 84.784 38.926 84.707 39.087 84.797 L 39.766 83.572 C 38.85 83.065 37.698 83.498 37.343 84.482 L 38.66 84.957 Z M 30.777 97.332 C 31.005 99.101 33.456 99.369 34.062 97.692 L 32.745 97.216 C 32.638 97.513 32.206 97.465 32.165 97.153 L 30.777 97.332 Z M 24.855 55.881 C 24.962 55.585 25.394 55.632 25.435 55.944 L 26.823 55.765 C 26.595 53.996 24.144 53.728 23.538 55.406 L 24.855 55.881 Z M 17.521 68.29 C 18.308 69.424 20.047 69.196 20.516 67.898 L 19.199 67.423 C 19.116 67.652 18.81 67.692 18.671 67.492 L 17.521 68.29 Z M 12.554 61.847 C 12.673 61.675 12.927 61.675 13.046 61.847 L 14.196 61.048 C 13.52 60.074 12.08 60.074 11.404 61.048 L 12.554 61.847 Z M 151.88 80.423 C 152.225 82.295 154.915 82.272 155.229 80.395 L 153.848 80.165 C 153.83 80.271 153.788 80.322 153.749 80.352 C 153.703 80.388 153.635 80.414 153.555 80.415 C 153.474 80.416 153.406 80.391 153.359 80.356 C 153.32 80.326 153.277 80.275 153.257 80.169 L 151.88 80.423 Z M 307.29 63.62 C 307.365 63.397 307.657 63.343 307.807 63.525 L 308.889 62.637 C 308.041 61.604 306.386 61.908 305.962 63.177 L 307.29 63.62 Z M 5.084 67.898 C 5.553 69.196 7.292 69.424 8.079 68.29 L 6.929 67.492 C 6.79 67.692 6.484 67.652 6.401 67.423 L 5.084 67.898 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 320,
          height: 148,
        }}>
          <svg width={148} height={1} viewBox="0 -0.500 148 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,159.500,0)",
            transformOrigin: "0 0",
            width: 148,
            height: 1,
          }}>
            <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 45 0 L 45 -1 L 43 -1 L 43 0 Z M 47 0 L 49 0 L 49 -1 L 47 -1 L 47 0 Z M 51 0 L 53 0 L 53 -1 L 51 -1 L 51 0 Z M 55 0 L 57 0 L 57 -1 L 55 -1 L 55 0 Z M 59 0 L 61 0 L 61 -1 L 59 -1 L 59 0 Z M 63 0 L 65 0 L 65 -1 L 63 -1 L 63 0 Z M 67 0 L 69 0 L 69 -1 L 67 -1 L 67 0 Z M 71 0 L 73 0 L 73 -1 L 71 -1 L 71 0 Z M 75 0 L 77 0 L 77 -1 L 75 -1 L 75 0 Z M 79 0 L 81 0 L 81 -1 L 79 -1 L 79 0 Z M 83 0 L 85 0 L 85 -1 L 83 -1 L 83 0 Z M 87 0 L 89 0 L 89 -1 L 87 -1 L 87 0 Z M 91 0 L 93 0 L 93 -1 L 91 -1 L 91 0 Z M 95 0 L 97 0 L 97 -1 L 95 -1 L 95 0 Z M 99 0 L 101 0 L 101 -1 L 99 -1 L 99 0 Z M 103 0 L 105 0 L 105 -1 L 103 -1 L 103 0 Z M 107 0 L 109 0 L 109 -1 L 107 -1 L 107 0 Z M 111 0 L 113 0 L 113 -1 L 111 -1 L 111 0 Z M 115 0 L 117 0 L 117 -1 L 115 -1 L 115 0 Z M 119 0 L 121 0 L 121 -1 L 119 -1 L 119 0 Z M 123 0 L 125 0 L 125 -1 L 123 -1 L 123 0 Z M 127 0 L 129 0 L 129 -1 L 127 -1 L 127 0 Z M 131 0 L 133 0 L 133 -1 L 131 -1 L 131 0 Z M 135 0 L 137 0 L 137 -1 L 135 -1 L 135 0 Z M 139 0 L 141 0 L 141 -1 L 139 -1 L 139 0 Z M 143 0 L 145 0 L 145 -1 L 143 -1 L 143 0 Z M 147 0 L 148 0 L 148 -1 L 147 -1 L 147 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <Tooltip11
            style={{
              position: "absolute",
              left: 108,
              top: 22,
              width: 104,
            }}
            editText={"$439,82.21"}
            type={"🔽 bottom center"}
            size={"xs"}
            darkMode={"on"}
          />
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
            position: "absolute",
            left: 154,
            top: 66,
            width: 12,
            height: 12,
            overflow: "hidden",
            borderRadius: 999,
            color: "var(--primary-base)",
          }}>
            <path d={"M 0 6 C 0 2.686 2.686 0 6 0 L 6 0 C 9.314 0 12 2.686 12 6 L 12 6 C 12 9.314 9.314 12 6 12 L 6 12 C 2.686 12 0 9.314 0 6 L 0 6 Z"} fill="rgb(0,159,175)" fillRule="nonzero" />
            <path d={"M 6 10.5 C 3.515 10.5 1.5 8.485 1.5 6 L -1.5 6 C -1.5 10.142 1.858 13.5 6 13.5 L 6 10.5 Z M 10.5 6 C 10.5 8.485 8.485 10.5 6 10.5 L 6 13.5 C 10.142 13.5 13.5 10.142 13.5 6 L 10.5 6 Z M 6 1.5 C 8.485 1.5 10.5 3.515 10.5 6 L 13.5 6 C 13.5 1.858 10.142 -1.5 6 -1.5 L 6 1.5 Z M 6 -1.5 C 1.858 -1.5 -1.5 1.858 -1.5 6 L 1.5 6 C 1.5 3.515 3.515 1.5 6 1.5 L 6 -1.5 Z"} fill="rgb(255,255,255)" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "row",
        padding: "6px 6px 6px 6px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{"Open "}<span style={{ color: "rgb(23,23,23)" }}>{"439,59"}</span></span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text4 ?? "∙"}</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{"High "}<span style={{ color: "rgb(23,23,23)" }}>{"442,23"}</span></span>
        <span style={{
          position: "relative",
          width: 10,
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexShrink: 0,
        }}>∙</span>
        <span style={{
          position: "relative",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          color: "var(--text-soft-400)",
          flexGrow: 1,
          whiteSpace: "pre-wrap",
        }}>{"Low "}<span style={{ color: "rgb(23,23,23)" }}>{"438,21"}</span></span>
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
            }}>{props.icon1 ?? <BankCardLine />}</div>
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
          }}>{props.text1 ?? "My Cards"}</span>
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
            }}>Add Card</span>
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
      <CreditCardsMyCards1
        style={{
          position: "relative",
          height: 188,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"virtual card"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
            }}>Daily</span>
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
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Weekly</span>
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
            }}>Monthly</span>
          </div>
        </div>
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
          <div style={{
              position: "relative",
              width: 48,
              height: 48,
              flexShrink: 0,
            }}>{props.icon2 ?? <CircularProgressBar11 percentage={"50%"} size={"48"} />}</div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
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
            }}>{props.text2 ?? "Spending Limit"}</span>
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
              }}>{props.text3 ?? "$1,500.00"}</span>
              <span style={{
                position: "relative",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 18,
                whiteSpace: "nowrap",
                lineHeight: "24px",
                letterSpacing: "-0.015em",
                color: "var(--text-soft-400)",
                flexShrink: 0,
              }}>{props.text4 ?? "/ week"}</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            backgroundColor: "var(--bg-white-0)",
            boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
            }}>{props.icon1 ?? <LineChartLine />}</div>
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
          }}>{props.text1 ?? "Stock Market Tracker"}</span>
        </div>
        <CompactSelect11
          style={{ position: "relative", width: 84, flexShrink: 0 }}
          editText={"ACME"}
          type={"📂 basic"}
          state={"disabled"}
          size={"xs"}
        />
      </div>
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
          }}>1D</span>
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
          }}>1W</span>
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
          }}>3M</span>
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
            width: 108,
            height: 108,
            flexShrink: 0,
          }}>
          <EmptyStatesFinanceBanking1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"📈 stock market tracker"}
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
        }}>{props.text2 ?? "Stock market is unavailable now.\nPlease check back later."}</span>
        <Buttons11NeutralStroke17
          style={{ position: "relative", width: 75, flexShrink: 0 }}
          leftIcon={false}
          rightIcon={false}
          editText={"Reflesh"}
        />
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
      color: "var(--stroke-soft-200)",
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
            }}>{props.icon1 ?? <PieChartLine />}</div>
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
          }}>{props.text1 ?? "Spending Summary"}</span>
        </div>
        <CompactSelect11
          style={{ position: "relative", width: 116, flexShrink: 0 }}
          editText={"Last Week"}
          type={"📂 basic"}
          state={"filled"}
          size={"xs"}
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
        height: 124,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 38,
          top: 0,
          width: 248,
          height: 248,
          borderRadius: "50%",
          backgroundColor: "var(--bg-soft-200)",
          boxShadow: "0 0 0 2px var(--stroke-white-0)",
        }} />
        <div style={{
          position: "absolute",
          left: 38,
          top: 0,
          width: 248,
          height: 248,
          borderRadius: "50%",
          backgroundColor: "var(--state-verified-base)",
          boxShadow: "0 0 0 2px var(--stroke-white-0)",
        }} />
        <div style={{
          position: "absolute",
          left: 38,
          top: 0,
          width: 248,
          height: 248,
          borderRadius: "50%",
          backgroundColor: "var(--state-information-base)",
          boxShadow: "0 0 0 2px var(--stroke-white-0)",
        }} />
        <span style={{
          position: "absolute",
          left: 138.5,
          top: 64,
          width: 43,
          height: 16,
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "16px",
          letterSpacing: "0.040em",
          color: "var(--text-sub-600)",
          textTransform: "uppercase",
        }}>{props.text2 ?? "SPEND"}</span>
        <span style={{
          position: "absolute",
          left: 104,
          top: 84,
          width: 112,
          height: 32,
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 32,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "40px",
          letterSpacing: "-0.005em",
          color: "var(--text-strong-950)",
        }}>{props.text3 ?? "$1,800.00"}</span>
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-information-lighter)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={13.500} height={15} viewBox="0 0 13.500 15" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.5,
                width: 13.5,
                height: 15,
                color: "rgb(82,88,102)",
              }}>
                <path d={"M 2.625 0 L 10.875 0 C 10.991 0 11.106 0.027 11.21 0.079 C 11.315 0.131 11.405 0.207 11.475 0.3 L 13.5 3 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 3 L 2.025 0.3 C 2.095 0.207 2.185 0.131 2.29 0.079 C 2.394 0.027 2.509 0 2.625 0 Z M 12 4.5 L 1.5 4.5 L 1.5 13.5 L 12 13.5 L 12 4.5 Z M 11.625 3 L 10.5 1.5 L 3 1.5 L 1.875 3 L 11.625 3 Z M 4.5 6 L 4.5 7.5 C 4.5 8.097 4.737 8.669 5.159 9.091 C 5.581 9.513 6.153 9.75 6.75 9.75 C 7.347 9.75 7.919 9.513 8.341 9.091 C 8.763 8.669 9 8.097 9 7.5 L 9 6 L 10.5 6 L 10.5 7.5 C 10.5 8.495 10.105 9.448 9.402 10.152 C 8.698 10.855 7.745 11.25 6.75 11.25 C 5.755 11.25 4.802 10.855 4.098 10.152 C 3.395 9.448 3 8.495 3 7.5 L 3 6 L 4.5 6 Z"} fill="currentColor" fillRule="nonzero" />
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
            flexShrink: 0,
          }}>
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
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "Shopping"}</span>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>$900.00</span>
          </div>
        </div>
        <svg width={88} height={1} viewBox="0 -0.500 88 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,104,0)",
          transformOrigin: "0 0",
          width: 88,
          height: 1,
        }}>
          <path d={"M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-verified-lighter)",
            display: "flex",
            flexDirection: "row",
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
              <svg width={13.500} height={15} viewBox="0 0 13.500 15" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.5,
                width: 13.5,
                height: 15,
                color: "rgb(251,75,163)",
              }}>
                <path d={"M 12.75 15 L 0.75 15 C 0.551 15 0.36 14.921 0.22 14.78 C 0.079 14.64 0 14.449 0 14.25 L 0 0.75 C 0 0.551 0.079 0.36 0.22 0.22 C 0.36 0.079 0.551 0 0.75 0 L 12.75 0 C 12.949 0 13.14 0.079 13.28 0.22 C 13.421 0.36 13.5 0.551 13.5 0.75 L 13.5 14.25 C 13.5 14.449 13.421 14.64 13.28 14.78 C 13.14 14.921 12.949 15 12.75 15 Z M 12 13.5 L 12 1.5 L 1.5 1.5 L 1.5 13.5 L 12 13.5 Z M 3.75 3.75 L 9.75 3.75 L 9.75 5.25 L 3.75 5.25 L 3.75 3.75 Z M 3.75 6.75 L 9.75 6.75 L 9.75 8.25 L 3.75 8.25 L 3.75 6.75 Z M 3.75 9.75 L 9.75 9.75 L 9.75 11.25 L 3.75 11.25 L 3.75 9.75 Z"} fill="currentColor" fillRule="nonzero" />
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
            flexShrink: 0,
          }}>
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
            }}>Utilities</span>
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
            }}>$600.00</span>
          </div>
        </div>
        <svg width={88} height={1} viewBox="0 -0.500 88 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          transform: "matrix(0,1,-1,0,216,0)",
          transformOrigin: "0 0",
          width: 88,
          height: 1,
        }}>
          <path d={"M 0 -0.5 L 0 0 L 88 0 L 88 -0.5 L 88 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: "var(--state-faded-lighter)",
            display: "flex",
            flexDirection: "row",
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
                color: "rgb(113,119,132)",
              }}>
                <path d={"M 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 3.358 3.358 0 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 11.642 11.642 15 7.5 15 Z M 7.5 13.5 C 9.091 13.5 10.617 12.868 11.743 11.743 C 12.868 10.617 13.5 9.091 13.5 7.5 C 13.5 5.909 12.868 4.383 11.743 3.257 C 10.617 2.132 9.091 1.5 7.5 1.5 C 5.909 1.5 4.383 2.132 3.257 3.257 C 2.132 4.383 1.5 5.909 1.5 7.5 C 1.5 9.091 2.132 10.617 3.257 11.743 C 4.383 12.868 5.909 13.5 7.5 13.5 L 7.5 13.5 Z M 4.875 9 L 9 9 C 9.099 9 9.195 8.96 9.265 8.89 C 9.335 8.82 9.375 8.724 9.375 8.625 C 9.375 8.526 9.335 8.43 9.265 8.36 C 9.195 8.29 9.099 8.25 9 8.25 L 6 8.25 C 5.503 8.25 5.026 8.052 4.674 7.701 C 4.323 7.349 4.125 6.872 4.125 6.375 C 4.125 5.878 4.323 5.401 4.674 5.049 C 5.026 4.698 5.503 4.5 6 4.5 L 6.75 4.5 L 6.75 3 L 8.25 3 L 8.25 4.5 L 10.125 4.5 L 10.125 6 L 6 6 C 5.901 6 5.805 6.04 5.735 6.11 C 5.665 6.18 5.625 6.276 5.625 6.375 C 5.625 6.474 5.665 6.57 5.735 6.64 C 5.805 6.71 5.901 6.75 6 6.75 L 9 6.75 C 9.497 6.75 9.974 6.948 10.326 7.299 C 10.677 7.651 10.875 8.128 10.875 8.625 C 10.875 9.122 10.677 9.599 10.326 9.951 C 9.974 10.302 9.497 10.5 9 10.5 L 8.25 10.5 L 8.25 12 L 6.75 12 L 6.75 10.5 L 4.875 10.5 L 4.875 9 Z"} fill="currentColor" fillRule="nonzero" />
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
            flexShrink: 0,
          }}>
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
            }}>Others</span>
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
            }}>$200.00</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 6,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "6px 4px 6px 10px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
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
          whiteSpace: "pre-wrap",
        }}>{"Your weekly spending limit is "}{"$2000."}</span>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "rgb(153,160,174)",
          }}>
          <InfoCustomFill style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0", color: "rgb(153,160,174)" }} />
        </div>
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
            }}>{props.icon1 ?? <BankCardLine />}</div>
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
          }}>{props.text1 ?? "My Cards"}</span>
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
            }}>Add Card</span>
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
          <EmptyStatesFinanceBanking1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"💳 my cards"}
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
        }}>{props.text2 ?? "You do not have any cards yet.\nClick the button to add one."}</span>
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
            }}>Add Card</span>
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
  const __body5 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 784,
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
            }}>{props.icon1 ?? <BankCardLine />}</div>
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
          }}>{props.text1 ?? "My Cards"}</span>
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
            }}>Add Card</span>
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
      <CardDetailsTabMyCards
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        variant={"virtual card"}
      />
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
        <Buttons11NeutralStroke17
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          leftIcon={false}
          rightIcon={false}
          editText={"Unhide"}
        />
        <Buttons11NeutralStroke17
          style={{ position: "relative", width: 120, flexShrink: 0 }}
          leftIcon={false}
          rightIcon={false}
          editText={"Adjust Limit"}
        />
        <Buttons11NeutralStroke17
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          leftIcon={false}
          rightIcon={false}
          editText={"More"}
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
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "16px",
            letterSpacing: "0.040em",
            color: "var(--text-soft-400)",
            textTransform: "uppercase",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Recent Transactions"}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 6,
            justifyContent: "flex-end",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <TransactionItemsRecentTransactions1
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              editTitle={"Netflix Cashback"}
              editDescription={"Cashback of September, 2023"}
              pickBrand={<Netflix />}
              text1={"$36.24"}
              text2={"Sep 18"}
              type={"🎗️ brand"}
              state={"default"}
            />
            <TransactionItemsRecentTransactions1
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              editTitle={"Rental Income"}
              editDescription={"Rental payment from Mr. Dudley."}
              text1={"$800.00"}
              text2={"Sep 17"}
              icon1={<DecorativeIcons type={"rent"} style={{ width: "100%", height: "100%" }} />}
              type={"💳 payment icons"}
              state={"default"}
            />
            <div style={{
              position: "relative",
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
                  <svg width={15.540} height={15.750} viewBox="0 0 15.540 15.750" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15.54,
                    height: 15.75,
                    color: "rgb(113,119,132)",
                  }}>
                    <path d={"M 1.5 10.5 L 1.5 1.5 L 0 1.5 L 0 0 L 2.25 0 C 2.449 0 2.64 0.079 2.78 0.22 C 2.921 0.36 3 0.551 3 0.75 L 3 9.75 L 12.329 9.75 L 13.829 3.75 L 4.5 3.75 L 4.5 2.25 L 14.79 2.25 C 14.904 2.25 15.017 2.276 15.119 2.326 C 15.221 2.376 15.311 2.449 15.381 2.539 C 15.451 2.628 15.5 2.733 15.524 2.845 C 15.547 2.956 15.545 3.072 15.518 3.182 L 13.643 10.682 C 13.602 10.844 13.508 10.988 13.376 11.091 C 13.245 11.194 13.082 11.25 12.915 11.25 L 2.25 11.25 C 2.051 11.25 1.86 11.171 1.72 11.03 C 1.579 10.89 1.5 10.699 1.5 10.5 L 1.5 10.5 Z M 3 15.75 C 2.602 15.75 2.221 15.592 1.939 15.311 C 1.658 15.029 1.5 14.648 1.5 14.25 C 1.5 13.852 1.658 13.471 1.939 13.189 C 2.221 12.908 2.602 12.75 3 12.75 C 3.398 12.75 3.779 12.908 4.061 13.189 C 4.342 13.471 4.5 13.852 4.5 14.25 C 4.5 14.648 4.342 15.029 4.061 15.311 C 3.779 15.592 3.398 15.75 3 15.75 Z M 12 15.75 C 11.602 15.75 11.221 15.592 10.939 15.311 C 10.658 15.029 10.5 14.648 10.5 14.25 C 10.5 13.852 10.658 13.471 10.939 13.189 C 11.221 12.908 11.602 12.75 12 12.75 C 12.398 12.75 12.779 12.908 13.061 13.189 C 13.342 13.471 13.5 13.852 13.5 14.25 C 13.5 14.648 13.342 15.029 13.061 15.311 C 12.779 15.592 12.398 15.75 12 15.75 Z"} fill="currentColor" fillRule="nonzero" />
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
                }}>Grocery Shopping</span>
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
                }}>Purchase of monthly groceries.</span>
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
                }}>-$84.14</span>
                <span style={{
                  position: "relative",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                  lineHeight: "16px",
                  color: "var(--text-sub-600)",
                  flexShrink: 0,
                }}>Sep 16</span>
              </div>
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
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "var(--bg-white-0)",
          boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: "8px 8px 8px 8px",
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
            }}>See All Transactions</span>
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
  const __body6 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 178,
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
            }}>{props.icon1 ?? <BarChartBoxLine />}</div>
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
          }}>{props.text1 ?? "Major Expenses"}</span>
        </div>
        <CompactSelect11
          style={{ position: "relative", width: 93, flexShrink: 0 }}
          editText={"Weekly"}
          type={"📂 basic"}
          state={"filled"}
          size={"xs"}
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
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 60,
          top: 0,
          width: 260,
          height: 86,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "0"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "2k"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "4k"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>6k</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>8k</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>10k</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          height: 66,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 309,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 48,
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Housing</span>
            <div style={{
              position: "relative",
              height: 16,
              borderRadius: 2,
              backgroundColor: "var(--state-information-base)",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 25,
            width: 220,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 48,
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Utilities</span>
            <div style={{
              position: "relative",
              height: 16,
              borderRadius: 2,
              backgroundColor: "var(--state-verified-base)",
              flexGrow: 1,
            }} />
          </div>
          <div style={{
            position: "absolute",
            left: 0,
            top: 50,
            width: 120,
            display: "flex",
            flexDirection: "row",
            gap: 14,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}>
            <span style={{
              position: "relative",
              width: 48,
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>Food</span>
            <div style={{
              position: "relative",
              height: 16,
              borderRadius: 2,
              backgroundColor: "var(--state-feature-base)",
              flexGrow: 1,
            }} />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 206,
          top: 27,
          width: 12,
          height: 12,
        }}>
          <div style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--state-verified-base)",
            boxShadow: "inset 0 0 0 1.500px var(--stroke-white-0), 0px 1.500px 3px 0px rgba(27,28,29,0.04)",
          }} />
          <div style={{
              position: "absolute",
              left: -1,
              top: 4,
              width: 24,
              height: 24,
            }}>{props.icon2 ?? <CursorPointer />}</div>
          <Tooltip11
            style={{
              position: "absolute",
              left: -46,
              top: -40,
              width: 104,
            }}
            editText={"$439,82.21"}
            type={"🔽 bottom center"}
            size={"xs"}
            darkMode={"on"}
          />
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 784,
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
            }}>{props.icon1 ?? <BankCardLine />}</div>
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
          }}>{props.text1 ?? "My Cards"}</span>
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
            }}>Add Card</span>
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
            }}>Virtual</span>
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
            }}>Physical</span>
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
          <EmptyStatesFinanceBanking1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"💳 my cards"}
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
        }}>{props.text2 ?? "You do not have any cards yet.\nClick the button to add one."}</span>
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
            }}>Add Card</span>
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
      height: 178,
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
            }}>{props.icon1 ?? <SpeedUpLine />}</div>
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
          }}>{props.text1 ?? "Credit Score"}</span>
        </div>
        <div style={{ position: "relative", width: 72, flexShrink: 0 }}>{props.icon2 ?? <Buttons11NeutralStroke17 leftIcon={false} rightIcon={false} editText={"Details"} />}</div>
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
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{"Your "}<span style={{ color: "rgb(23,23,23)" }}>{"credit score"}</span>{" is "}<span style={{ color: "rgb(23,23,23)" }}>{"710"}</span></span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "-0.011em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "This score is considered to be Excellent."}</span>
        </div>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 999,
          backgroundColor: "var(--state-warning-lighter)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "10px 10px 10px 10px",
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
            }}>{props.icon3 ?? <SmilingFaceWithSunglasses />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--state-success-base)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-soft-200)",
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 178,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "20px 20px 20px 20px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 56,
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
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Total Balance"}</span>
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
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 18,
              whiteSpace: "nowrap",
              lineHeight: "24px",
              letterSpacing: "-0.015em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>{props.text2 ?? "$14,480.24"}</span>
            <div style={{ position: "relative", width: 42, flexShrink: 0 }}>{props.icon1 ?? <Badge11BasicGreen9 editText={"+5%"} />}</div>
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <CompactSelect11 editText={"Weekly"} type={"🌍 country"} state={"filled"} size={"xs"} />}</div>
      </div>
      <div style={{
        position: "relative",
        height: 64,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 312,
          height: 64,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={44} height={1} viewBox="0 -0.500 44 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 44,
              height: 1,
            }}>
              <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 44 0 L 44 -1 L 43 -1 L 43 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}>{props.text3 ?? "0"}</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={44} height={1} viewBox="0 -0.500 44 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 44,
              height: 1,
            }}>
              <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 44 0 L 44 -1 L 43 -1 L 43 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}>{props.text4 ?? "2k"}</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={44} height={1} viewBox="0 -0.500 44 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 44,
              height: 1,
            }}>
              <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 44 0 L 44 -1 L 43 -1 L 43 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>3k</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={44} height={1} viewBox="0 -0.500 44 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 44,
              height: 1,
            }}>
              <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 44 0 L 44 -1 L 43 -1 L 43 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>4k</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={44} height={1} viewBox="0 -0.500 44 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 44,
              height: 1,
            }}>
              <path d={"M 0 0 L 1 0 L 1 -1 L 0 -1 L 0 0 Z M 3 0 L 5 0 L 5 -1 L 3 -1 L 3 0 Z M 7 0 L 9 0 L 9 -1 L 7 -1 L 7 0 Z M 11 0 L 13 0 L 13 -1 L 11 -1 L 11 0 Z M 15 0 L 17 0 L 17 -1 L 15 -1 L 15 0 Z M 19 0 L 21 0 L 21 -1 L 19 -1 L 19 0 Z M 23 0 L 25 0 L 25 -1 L 23 -1 L 23 0 Z M 27 0 L 29 0 L 29 -1 L 27 -1 L 27 0 Z M 31 0 L 33 0 L 33 -1 L 31 -1 L 31 0 Z M 35 0 L 37 0 L 37 -1 L 35 -1 L 35 0 Z M 39 0 L 41 0 L 41 -1 L 39 -1 L 39 0 Z M 43 0 L 44 0 L 44 -1 L 43 -1 L 43 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>5k</span>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={32} height={1} viewBox="0 -0.500 32 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,10,0)",
              transformOrigin: "0 0",
              width: 32,
              height: 1,
            }}>
              <path d={"M 0 -0.5 L 0 0 L 1 0 L 1 -0.5 L 1 -1 L 0 -1 L 0 -0.5 Z M 3 -0.5 L 3 0 L 5 0 L 5 -0.5 L 5 -1 L 3 -1 L 3 -0.5 Z M 7 -0.5 L 7 0 L 9 0 L 9 -0.5 L 9 -1 L 7 -1 L 7 -0.5 Z M 11 -0.5 L 11 0 L 13 0 L 13 -0.5 L 13 -1 L 11 -1 L 11 -0.5 Z M 15 -0.5 L 15 0 L 17 0 L 17 -0.5 L 17 -1 L 15 -1 L 15 -0.5 Z M 19 -0.5 L 19 0 L 21 0 L 21 -0.5 L 21 -1 L 19 -1 L 19 -0.5 Z M 23 -0.5 L 23 0 L 25 0 L 25 -0.5 L 25 -1 L 23 -1 L 23 -0.5 Z M 27 -0.5 L 27 0 L 29 0 L 29 -0.5 L 29 -1 L 27 -1 L 27 -0.5 Z M 31 -0.5 L 31 0 L 32 0 L 32 -0.5 L 32 -1 L 31 -1 L 31 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              width: 20,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>100</span>
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 312,
          height: 44,
          overflow: "hidden",
        }}>
          <svg width={312} height={44} viewBox="0 0 312 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 312,
            height: 44,
            borderRadius: 4,
          }}>
            <path d={"M 5.989 43.537 L 0.232 43.537 C 0.104 43.537 0 43.641 0 43.768 C 0 43.896 0.104 44 0.232 44 L 308 44 C 310.209 44 312 42.209 312 40 L 312 4 C 312 1.791 310.209 0 308 0 L 295.037 0 C 294.333 0 293.642 0.186 293.033 0.539 L 256.867 21.483 C 256.258 21.836 255.567 22.022 254.863 22.022 L 244.258 22.022 C 243.236 22.022 242.253 21.63 241.51 20.928 L 220.532 1.093 C 219.789 0.391 218.806 0 217.783 0 L 197.063 0 C 195.909 0 194.811 0.498 194.052 1.367 L 177.183 20.655 C 176.423 21.523 175.337 22.022 174.183 22.022 L 146.183 22.022 C 145.275 22.022 144.401 22.331 143.692 22.899 L 126.193 36.905 C 125.483 37.473 124.602 37.782 123.693 37.782 L 112.907 37.782 C 111.989 37.782 111.099 37.466 110.386 36.887 L 93.177 22.916 C 92.464 22.337 91.574 22.022 90.655 22.022 L 76.428 22.022 C 75.26 22.022 74.15 21.511 73.39 20.623 L 56.926 1.398 C 56.166 0.511 55.056 0 53.888 0 L 35.319 0 C 33.878 0 32.549 0.775 31.838 2.028 L 9.469 41.509 C 8.759 42.762 7.43 43.537 5.989 43.537 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={312} height={44} viewBox="0 0 312 44" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 312,
            height: 44,
            borderRadius: 8,
            color: "var(--state-information-base)",
          }}>
            <path d={"M 292.09 1.096 L 292.596 1.959 L 292.09 1.096 Z M 296.132 0 L 296.132 1 L 296.132 0 Z M 257.81 21.16 L 257.304 20.297 L 257.81 21.16 Z M 240.348 20.04 L 239.657 20.763 L 240.348 20.04 Z M 221.694 2.216 L 222.385 1.493 L 221.694 2.216 Z M 192.854 2.765 L 192.098 2.111 L 192.854 2.765 Z M 178.38 19.491 L 179.136 20.145 L 178.38 19.491 Z M 142.587 24.036 L 143.216 24.813 L 142.587 24.036 Z M 109.276 36.369 L 108.641 37.142 L 109.276 36.369 Z M 94.287 24.071 L 94.921 23.298 L 94.287 24.071 Z M 72.191 19.428 L 72.954 18.781 L 72.191 19.428 Z M 30.696 4.088 L 31.568 4.577 L 30.696 4.088 Z M 10.612 39.912 L 9.739 39.423 L 10.612 39.912 Z M 0 44 L 0 45 L 3.634 45 L 3.634 44 L 3.634 43 L 0 43 L 0 44 Z M 10.612 39.912 L 11.484 40.401 L 31.568 4.577 L 30.696 4.088 L 29.823 3.599 L 9.739 39.423 L 10.612 39.912 Z M 37.674 0 L 37.674 1 L 52.022 1 L 52.022 0 L 52.022 -1 L 37.674 -1 L 37.674 0 Z M 58.125 2.828 L 57.362 3.475 L 71.428 20.074 L 72.191 19.428 L 72.954 18.781 L 58.888 2.182 L 58.125 2.828 Z M 78.294 22.256 L 78.294 23.256 L 89.213 23.256 L 89.213 22.256 L 89.213 21.256 L 78.294 21.256 L 78.294 22.256 Z M 94.287 24.071 L 93.653 24.844 L 108.641 37.142 L 109.276 36.369 L 109.91 35.596 L 94.921 23.298 L 94.287 24.071 Z M 147.616 22.256 L 147.616 23.256 C 147.63 23.256 147.645 23.256 147.659 23.256 C 147.674 23.256 147.688 23.256 147.703 23.256 C 147.717 23.256 147.732 23.256 147.747 23.256 C 147.761 23.256 147.776 23.256 147.791 23.256 C 147.805 23.256 147.82 23.256 147.834 23.256 C 147.849 23.256 147.864 23.256 147.878 23.256 C 147.893 23.256 147.908 23.256 147.923 23.256 C 147.937 23.256 147.952 23.256 147.967 23.256 C 147.982 23.256 147.996 23.256 148.011 23.256 C 148.026 23.256 148.041 23.256 148.056 23.256 C 148.07 23.256 148.085 23.256 148.1 23.256 C 148.115 23.256 148.13 23.256 148.145 23.256 C 148.159 23.256 148.174 23.256 148.189 23.256 C 148.204 23.256 148.219 23.256 148.234 23.256 C 148.249 23.256 148.264 23.256 148.279 23.256 C 148.294 23.256 148.309 23.256 148.324 23.256 C 148.339 23.256 148.354 23.256 148.369 23.256 C 148.384 23.256 148.399 23.256 148.414 23.256 C 148.429 23.256 148.444 23.256 148.459 23.256 C 148.474 23.256 148.489 23.256 148.504 23.256 C 148.519 23.256 148.534 23.256 148.549 23.256 C 148.565 23.256 148.58 23.256 148.595 23.256 C 148.61 23.256 148.625 23.256 148.64 23.256 C 148.656 23.256 148.671 23.256 148.686 23.256 C 148.701 23.256 148.716 23.256 148.732 23.256 C 148.747 23.256 148.762 23.256 148.777 23.256 C 148.793 23.256 148.808 23.256 148.823 23.256 C 148.839 23.256 148.854 23.256 148.869 23.256 C 148.884 23.256 148.9 23.256 148.915 23.256 C 148.93 23.256 148.946 23.256 148.961 23.256 C 148.977 23.256 148.992 23.256 149.007 23.256 C 149.023 23.256 149.038 23.256 149.054 23.256 C 149.069 23.256 149.084 23.256 149.1 23.256 C 149.115 23.256 149.131 23.256 149.146 23.256 C 149.162 23.256 149.177 23.256 149.193 23.256 C 149.208 23.256 149.224 23.256 149.239 23.256 C 149.255 23.256 149.27 23.256 149.286 23.256 C 149.301 23.256 149.317 23.256 149.333 23.256 C 149.348 23.256 149.364 23.256 149.379 23.256 C 149.395 23.256 149.411 23.256 149.426 23.256 C 149.442 23.256 149.457 23.256 149.473 23.256 C 149.489 23.256 149.504 23.256 149.52 23.256 C 149.536 23.256 149.551 23.256 149.567 23.256 C 149.583 23.256 149.599 23.256 149.614 23.256 C 149.63 23.256 149.646 23.256 149.662 23.256 C 149.677 23.256 149.693 23.256 149.709 23.256 C 149.725 23.256 149.74 23.256 149.756 23.256 C 149.772 23.256 149.788 23.256 149.804 23.256 C 149.819 23.256 149.835 23.256 149.851 23.256 C 149.867 23.256 149.883 23.256 149.899 23.256 C 149.915 23.256 149.93 23.256 149.946 23.256 C 149.962 23.256 149.978 23.256 149.994 23.256 C 150.01 23.256 150.026 23.256 150.042 23.256 C 150.058 23.256 150.074 23.256 150.09 23.256 C 150.106 23.256 150.122 23.256 150.138 23.256 C 150.154 23.256 150.17 23.256 150.186 23.256 C 150.202 23.256 150.218 23.256 150.234 23.256 C 150.25 23.256 150.266 23.256 150.282 23.256 C 150.298 23.256 150.314 23.256 150.33 23.256 C 150.346 23.256 150.362 23.256 150.378 23.256 C 150.394 23.256 150.41 23.256 150.427 23.256 C 150.443 23.256 150.459 23.256 150.475 23.256 C 150.491 23.256 150.507 23.256 150.523 23.256 C 150.54 23.256 150.556 23.256 150.572 23.256 C 150.588 23.256 150.604 23.256 150.621 23.256 C 150.637 23.256 150.653 23.256 150.669 23.256 C 150.685 23.256 150.702 23.256 150.718 23.256 C 150.734 23.256 150.75 23.256 150.767 23.256 C 150.783 23.256 150.799 23.256 150.816 23.256 C 150.832 23.256 150.848 23.256 150.865 23.256 C 150.881 23.256 150.897 23.256 150.913 23.256 C 150.93 23.256 150.946 23.256 150.963 23.256 C 150.979 23.256 150.995 23.256 151.012 23.256 C 151.028 23.256 151.044 23.256 151.061 23.256 C 151.077 23.256 151.094 23.256 151.11 23.256 C 151.126 23.256 151.143 23.256 151.159 23.256 C 151.176 23.256 151.192 23.256 151.209 23.256 C 151.225 23.256 151.242 23.256 151.258 23.256 C 151.275 23.256 151.291 23.256 151.307 23.256 C 151.324 23.256 151.34 23.256 151.357 23.256 C 151.374 23.256 151.39 23.256 151.407 23.256 C 151.423 23.256 151.44 23.256 151.456 23.256 C 151.473 23.256 151.489 23.256 151.506 23.256 C 151.522 23.256 151.539 23.256 151.556 23.256 C 151.572 23.256 151.589 23.256 151.605 23.256 C 151.622 23.256 151.639 23.256 151.655 23.256 C 151.672 23.256 151.689 23.256 151.705 23.256 C 151.722 23.256 151.738 23.256 151.755 23.256 C 151.772 23.256 151.788 23.256 151.805 23.256 C 151.822 23.256 151.839 23.256 151.855 23.256 C 151.872 23.256 151.889 23.256 151.905 23.256 C 151.922 23.256 151.939 23.256 151.956 23.256 C 151.972 23.256 151.989 23.256 152.006 23.256 C 152.023 23.256 152.039 23.256 152.056 23.256 C 152.073 23.256 152.09 23.256 152.106 23.256 C 152.123 23.256 152.14 23.256 152.157 23.256 C 152.174 23.256 152.19 23.256 152.207 23.256 C 152.224 23.256 152.241 23.256 152.258 23.256 C 152.275 23.256 152.291 23.256 152.308 23.256 C 152.325 23.256 152.342 23.256 152.359 23.256 C 152.376 23.256 152.393 23.256 152.41 23.256 C 152.426 23.256 152.443 23.256 152.46 23.256 C 152.477 23.256 152.494 23.256 152.511 23.256 C 152.528 23.256 152.545 23.256 152.562 23.256 C 152.579 23.256 152.596 23.256 152.613 23.256 C 152.629 23.256 152.646 23.256 152.663 23.256 C 152.68 23.256 152.697 23.256 152.714 23.256 C 152.731 23.256 152.748 23.256 152.765 23.256 C 152.782 23.256 152.799 23.256 152.816 23.256 C 152.833 23.256 152.85 23.256 152.867 23.256 C 152.884 23.256 152.901 23.256 152.919 23.256 C 152.936 23.256 152.953 23.256 152.97 23.256 C 152.987 23.256 153.004 23.256 153.021 23.256 C 153.038 23.256 153.055 23.256 153.072 23.256 C 153.089 23.256 153.106 23.256 153.123 23.256 C 153.14 23.256 153.158 23.256 153.175 23.256 C 153.192 23.256 153.209 23.256 153.226 23.256 C 153.243 23.256 153.26 23.256 153.277 23.256 C 153.295 23.256 153.312 23.256 153.329 23.256 C 153.346 23.256 153.363 23.256 153.38 23.256 C 153.398 23.256 153.415 23.256 153.432 23.256 C 153.449 23.256 153.466 23.256 153.484 23.256 C 153.501 23.256 153.518 23.256 153.535 23.256 C 153.552 23.256 153.57 23.256 153.587 23.256 C 153.604 23.256 153.621 23.256 153.638 23.256 C 153.656 23.256 153.673 23.256 153.69 23.256 C 153.707 23.256 153.725 23.256 153.742 23.256 C 153.759 23.256 153.776 23.256 153.794 23.256 C 153.811 23.256 153.828 23.256 153.846 23.256 C 153.863 23.256 153.88 23.256 153.897 23.256 C 153.915 23.256 153.932 23.256 153.949 23.256 C 153.967 23.256 153.984 23.256 154.001 23.256 C 154.019 23.256 154.036 23.256 154.053 23.256 C 154.071 23.256 154.088 23.256 154.105 23.256 C 154.123 23.256 154.14 23.256 154.157 23.256 C 154.175 23.256 154.192 23.256 154.209 23.256 C 154.227 23.256 154.244 23.256 154.262 23.256 C 154.279 23.256 154.296 23.256 154.314 23.256 C 154.331 23.256 154.349 23.256 154.366 23.256 C 154.383 23.256 154.401 23.256 154.418 23.256 C 154.436 23.256 154.453 23.256 154.47 23.256 C 154.488 23.256 154.505 23.256 154.523 23.256 C 154.54 23.256 154.558 23.256 154.575 23.256 C 154.592 23.256 154.61 23.256 154.627 23.256 C 154.645 23.256 154.662 23.256 154.68 23.256 C 154.697 23.256 154.715 23.256 154.732 23.256 C 154.75 23.256 154.767 23.256 154.785 23.256 C 154.802 23.256 154.82 23.256 154.837 23.256 C 154.855 23.256 154.872 23.256 154.89 23.256 C 154.907 23.256 154.925 23.256 154.942 23.256 C 154.96 23.256 154.977 23.256 154.995 23.256 C 155.012 23.256 155.03 23.256 155.047 23.256 C 155.065 23.256 155.082 23.256 155.1 23.256 C 155.117 23.256 155.135 23.256 155.152 23.256 C 155.17 23.256 155.187 23.256 155.205 23.256 C 155.223 23.256 155.24 23.256 155.258 23.256 C 155.275 23.256 155.293 23.256 155.31 23.256 C 155.328 23.256 155.346 23.256 155.363 23.256 C 155.381 23.256 155.398 23.256 155.416 23.256 C 155.433 23.256 155.451 23.256 155.469 23.256 C 155.486 23.256 155.504 23.256 155.521 23.256 C 155.539 23.256 155.557 23.256 155.574 23.256 C 155.592 23.256 155.609 23.256 155.627 23.256 C 155.645 23.256 155.662 23.256 155.68 23.256 C 155.698 23.256 155.715 23.256 155.733 23.256 C 155.75 23.256 155.768 23.256 155.786 23.256 C 155.803 23.256 155.821 23.256 155.839 23.256 C 155.856 23.256 155.874 23.256 155.892 23.256 C 155.909 23.256 155.927 23.256 155.945 23.256 C 155.962 23.256 155.98 23.256 155.998 23.256 C 156.015 23.256 156.033 23.256 156.051 23.256 C 156.068 23.256 156.086 23.256 156.104 23.256 C 156.121 23.256 156.139 23.256 156.157 23.256 C 156.174 23.256 156.192 23.256 156.21 23.256 C 156.227 23.256 156.245 23.256 156.263 23.256 C 156.28 23.256 156.298 23.256 156.316 23.256 C 156.334 23.256 156.351 23.256 156.369 23.256 C 156.387 23.256 156.404 23.256 156.422 23.256 C 156.44 23.256 156.458 23.256 156.475 23.256 C 156.493 23.256 156.511 23.256 156.528 23.256 C 156.546 23.256 156.564 23.256 156.582 23.256 C 156.599 23.256 156.617 23.256 156.635 23.256 C 156.652 23.256 156.67 23.256 156.688 23.256 C 156.706 23.256 156.723 23.256 156.741 23.256 C 156.759 23.256 156.777 23.256 156.794 23.256 C 156.812 23.256 156.83 23.256 156.848 23.256 C 156.865 23.256 156.883 23.256 156.901 23.256 C 156.919 23.256 156.936 23.256 156.954 23.256 C 156.972 23.256 156.99 23.256 157.007 23.256 C 157.025 23.256 157.043 23.256 157.061 23.256 C 157.078 23.256 157.096 23.256 157.114 23.256 C 157.132 23.256 157.15 23.256 157.167 23.256 C 157.185 23.256 157.203 23.256 157.221 23.256 C 157.238 23.256 157.256 23.256 157.274 23.256 C 157.292 23.256 157.309 23.256 157.327 23.256 C 157.345 23.256 157.363 23.256 157.381 23.256 C 157.398 23.256 157.416 23.256 157.434 23.256 C 157.452 23.256 157.469 23.256 157.487 23.256 C 157.505 23.256 157.523 23.256 157.541 23.256 C 157.558 23.256 157.576 23.256 157.594 23.256 C 157.612 23.256 157.63 23.256 157.647 23.256 C 157.665 23.256 157.683 23.256 157.701 23.256 C 157.719 23.256 157.736 23.256 157.754 23.256 C 157.772 23.256 157.79 23.256 157.807 23.256 C 157.825 23.256 157.843 23.256 157.861 23.256 C 157.879 23.256 157.896 23.256 157.914 23.256 C 157.932 23.256 157.95 23.256 157.968 23.256 C 157.985 23.256 158.003 23.256 158.021 23.256 C 158.039 23.256 158.057 23.256 158.074 23.256 C 158.092 23.256 158.11 23.256 158.128 23.256 C 158.146 23.256 158.163 23.256 158.181 23.256 C 158.199 23.256 158.217 23.256 158.235 23.256 C 158.252 23.256 158.27 23.256 158.288 23.256 C 158.306 23.256 158.324 23.256 158.341 23.256 C 158.359 23.256 158.377 23.256 158.395 23.256 C 158.413 23.256 158.43 23.256 158.448 23.256 C 158.466 23.256 158.484 23.256 158.502 23.256 C 158.52 23.256 158.537 23.256 158.555 23.256 C 158.573 23.256 158.591 23.256 158.609 23.256 C 158.626 23.256 158.644 23.256 158.662 23.256 C 158.68 23.256 158.698 23.256 158.715 23.256 C 158.733 23.256 158.751 23.256 158.769 23.256 C 158.786 23.256 158.804 23.256 158.822 23.256 C 158.84 23.256 158.858 23.256 158.875 23.256 C 158.893 23.256 158.911 23.256 158.929 23.256 C 158.947 23.256 158.964 23.256 158.982 23.256 C 159 23.256 159.018 23.256 159.036 23.256 C 159.053 23.256 159.071 23.256 159.089 23.256 C 159.107 23.256 159.125 23.256 159.142 23.256 C 159.16 23.256 159.178 23.256 159.196 23.256 C 159.213 23.256 159.231 23.256 159.249 23.256 C 159.267 23.256 159.285 23.256 159.302 23.256 C 159.32 23.256 159.338 23.256 159.356 23.256 C 159.373 23.256 159.391 23.256 159.409 23.256 C 159.427 23.256 159.445 23.256 159.462 23.256 C 159.48 23.256 159.498 23.256 159.516 23.256 C 159.533 23.256 159.551 23.256 159.569 23.256 C 159.587 23.256 159.604 23.256 159.622 23.256 C 159.64 23.256 159.658 23.256 159.675 23.256 C 159.693 23.256 159.711 23.256 159.729 23.256 C 159.746 23.256 159.764 23.256 159.782 23.256 C 159.8 23.256 159.817 23.256 159.835 23.256 C 159.853 23.256 159.871 23.256 159.888 23.256 C 159.906 23.256 159.924 23.256 159.942 23.256 C 159.959 23.256 159.977 23.256 159.995 23.256 C 160.013 23.256 160.03 23.256 160.048 23.256 C 160.066 23.256 160.083 23.256 160.101 23.256 C 160.119 23.256 160.137 23.256 160.154 23.256 C 160.172 23.256 160.19 23.256 160.207 23.256 C 160.225 23.256 160.243 23.256 160.261 23.256 C 160.278 23.256 160.296 23.256 160.314 23.256 C 160.331 23.256 160.349 23.256 160.367 23.256 C 160.384 23.256 160.402 23.256 160.42 23.256 C 160.438 23.256 160.455 23.256 160.473 23.256 C 160.491 23.256 160.508 23.256 160.526 23.256 C 160.544 23.256 160.561 23.256 160.579 23.256 C 160.597 23.256 160.614 23.256 160.632 23.256 C 160.65 23.256 160.667 23.256 160.685 23.256 C 160.703 23.256 160.72 23.256 160.738 23.256 C 160.756 23.256 160.773 23.256 160.791 23.256 C 160.809 23.256 160.826 23.256 160.844 23.256 C 160.861 23.256 160.879 23.256 160.897 23.256 C 160.914 23.256 160.932 23.256 160.95 23.256 C 160.967 23.256 160.985 23.256 161.002 23.256 C 161.02 23.256 161.038 23.256 161.055 23.256 C 161.073 23.256 161.091 23.256 161.108 23.256 C 161.126 23.256 161.143 23.256 161.161 23.256 C 161.179 23.256 161.196 23.256 161.214 23.256 C 161.231 23.256 161.249 23.256 161.266 23.256 C 161.284 23.256 161.302 23.256 161.319 23.256 C 161.337 23.256 161.354 23.256 161.372 23.256 C 161.389 23.256 161.407 23.256 161.425 23.256 C 161.442 23.256 161.46 23.256 161.477 23.256 C 161.495 23.256 161.512 23.256 161.53 23.256 C 161.547 23.256 161.565 23.256 161.582 23.256 C 161.6 23.256 161.617 23.256 161.635 23.256 C 161.653 23.256 161.67 23.256 161.688 23.256 C 161.705 23.256 161.723 23.256 161.74 23.256 C 161.758 23.256 161.775 23.256 161.793 23.256 C 161.81 23.256 161.828 23.256 161.845 23.256 C 161.862 23.256 161.88 23.256 161.897 23.256 C 161.915 23.256 161.932 23.256 161.95 23.256 C 161.967 23.256 161.985 23.256 162.002 23.256 C 162.02 23.256 162.037 23.256 162.055 23.256 C 162.072 23.256 162.089 23.256 162.107 23.256 C 162.124 23.256 162.142 23.256 162.159 23.256 C 162.177 23.256 162.194 23.256 162.211 23.256 C 162.229 23.256 162.246 23.256 162.264 23.256 C 162.281 23.256 162.298 23.256 162.316 23.256 C 162.333 23.256 162.351 23.256 162.368 23.256 C 162.385 23.256 162.403 23.256 162.42 23.256 C 162.437 23.256 162.455 23.256 162.472 23.256 C 162.49 23.256 162.507 23.256 162.524 23.256 C 162.542 23.256 162.559 23.256 162.576 23.256 C 162.594 23.256 162.611 23.256 162.628 23.256 C 162.646 23.256 162.663 23.256 162.68 23.256 C 162.697 23.256 162.715 23.256 162.732 23.256 C 162.749 23.256 162.767 23.256 162.784 23.256 C 162.801 23.256 162.819 23.256 162.836 23.256 C 162.853 23.256 162.87 23.256 162.888 23.256 C 162.905 23.256 162.922 23.256 162.939 23.256 C 162.957 23.256 162.974 23.256 162.991 23.256 C 163.008 23.256 163.026 23.256 163.043 23.256 C 163.06 23.256 163.077 23.256 163.094 23.256 C 163.112 23.256 163.129 23.256 163.146 23.256 C 163.163 23.256 163.18 23.256 163.198 23.256 C 163.215 23.256 163.232 23.256 163.249 23.256 C 163.266 23.256 163.283 23.256 163.301 23.256 C 163.318 23.256 163.335 23.256 163.352 23.256 C 163.369 23.256 163.386 23.256 163.403 23.256 C 163.421 23.256 163.438 23.256 163.455 23.256 C 163.472 23.256 163.489 23.256 163.506 23.256 C 163.523 23.256 163.54 23.256 163.557 23.256 C 163.575 23.256 163.592 23.256 163.609 23.256 C 163.626 23.256 163.643 23.256 163.66 23.256 C 163.677 23.256 163.694 23.256 163.711 23.256 C 163.728 23.256 163.745 23.256 163.762 23.256 C 163.779 23.256 163.796 23.256 163.813 23.256 C 163.83 23.256 163.847 23.256 163.864 23.256 C 163.881 23.256 163.898 23.256 163.915 23.256 C 163.932 23.256 163.949 23.256 163.966 23.256 C 163.983 23.256 164 23.256 164.017 23.256 C 164.034 23.256 164.051 23.256 164.068 23.256 C 164.085 23.256 164.102 23.256 164.119 23.256 C 164.136 23.256 164.152 23.256 164.169 23.256 C 164.186 23.256 164.203 23.256 164.22 23.256 C 164.237 23.256 164.254 23.256 164.271 23.256 C 164.288 23.256 164.304 23.256 164.321 23.256 C 164.338 23.256 164.355 23.256 164.372 23.256 C 164.389 23.256 164.405 23.256 164.422 23.256 C 164.439 23.256 164.456 23.256 164.473 23.256 C 164.49 23.256 164.506 23.256 164.523 23.256 C 164.54 23.256 164.557 23.256 164.573 23.256 C 164.59 23.256 164.607 23.256 164.624 23.256 C 164.64 23.256 164.657 23.256 164.674 23.256 C 164.691 23.256 164.707 23.256 164.724 23.256 C 164.741 23.256 164.758 23.256 164.774 23.256 C 164.791 23.256 164.808 23.256 164.824 23.256 C 164.841 23.256 164.858 23.256 164.874 23.256 C 164.891 23.256 164.908 23.256 164.924 23.256 C 164.941 23.256 164.958 23.256 164.974 23.256 C 164.991 23.256 165.007 23.256 165.024 23.256 C 165.041 23.256 165.057 23.256 165.074 23.256 C 165.09 23.256 165.107 23.256 165.124 23.256 C 165.14 23.256 165.157 23.256 165.173 23.256 C 165.19 23.256 165.206 23.256 165.223 23.256 C 165.239 23.256 165.256 23.256 165.272 23.256 C 165.289 23.256 165.306 23.256 165.322 23.256 C 165.339 23.256 165.355 23.256 165.371 23.256 C 165.388 23.256 165.404 23.256 165.421 23.256 C 165.437 23.256 165.454 23.256 165.47 23.256 C 165.487 23.256 165.503 23.256 165.519 23.256 C 165.536 23.256 165.552 23.256 165.569 23.256 C 165.585 23.256 165.601 23.256 165.618 23.256 C 165.634 23.256 165.651 23.256 165.667 23.256 C 165.683 23.256 165.7 23.256 165.716 23.256 C 165.732 23.256 165.749 23.256 165.765 23.256 C 165.781 23.256 165.798 23.256 165.814 23.256 C 165.83 23.256 165.846 23.256 165.863 23.256 C 165.879 23.256 165.895 23.256 165.911 23.256 C 165.928 23.256 165.944 23.256 165.96 23.256 C 165.976 23.256 165.993 23.256 166.009 23.256 C 166.025 23.256 166.041 23.256 166.057 23.256 C 166.074 23.256 166.09 23.256 166.106 23.256 C 166.122 23.256 166.138 23.256 166.154 23.256 C 166.171 23.256 166.187 23.256 166.203 23.256 C 166.219 23.256 166.235 23.256 166.251 23.256 C 166.267 23.256 166.283 23.256 166.299 23.256 C 166.316 23.256 166.332 23.256 166.348 23.256 C 166.364 23.256 166.38 23.256 166.396 23.256 C 166.412 23.256 166.428 23.256 166.444 23.256 C 166.46 23.256 166.476 23.256 166.492 23.256 C 166.508 23.256 166.524 23.256 166.54 23.256 C 166.556 23.256 166.572 23.256 166.588 23.256 C 166.604 23.256 166.619 23.256 166.635 23.256 C 166.651 23.256 166.667 23.256 166.683 23.256 C 166.699 23.256 166.715 23.256 166.731 23.256 C 166.747 23.256 166.762 23.256 166.778 23.256 C 166.794 23.256 166.81 23.256 166.826 23.256 C 166.842 23.256 166.857 23.256 166.873 23.256 C 166.889 23.256 166.905 23.256 166.921 23.256 C 166.936 23.256 166.952 23.256 166.968 23.256 C 166.984 23.256 166.999 23.256 167.015 23.256 C 167.031 23.256 167.047 23.256 167.062 23.256 C 167.078 23.256 167.094 23.256 167.109 23.256 C 167.125 23.256 167.141 23.256 167.156 23.256 C 167.172 23.256 167.188 23.256 167.203 23.256 C 167.219 23.256 167.234 23.256 167.25 23.256 C 167.266 23.256 167.281 23.256 167.297 23.256 C 167.312 23.256 167.328 23.256 167.344 23.256 C 167.359 23.256 167.375 23.256 167.39 23.256 C 167.406 23.256 167.421 23.256 167.437 23.256 C 167.452 23.256 167.468 23.256 167.483 23.256 C 167.499 23.256 167.514 23.256 167.53 23.256 C 167.545 23.256 167.56 23.256 167.576 23.256 C 167.591 23.256 167.607 23.256 167.622 23.256 C 167.637 23.256 167.653 23.256 167.668 23.256 C 167.684 23.256 167.699 23.256 167.714 23.256 C 167.73 23.256 167.745 23.256 167.76 23.256 C 167.776 23.256 167.791 23.256 167.806 23.256 C 167.821 23.256 167.837 23.256 167.852 23.256 C 167.867 23.256 167.883 23.256 167.898 23.256 C 167.913 23.256 167.928 23.256 167.943 23.256 C 167.959 23.256 167.974 23.256 167.989 23.256 C 168.004 23.256 168.019 23.256 168.035 23.256 C 168.05 23.256 168.065 23.256 168.08 23.256 C 168.095 23.256 168.11 23.256 168.125 23.256 C 168.14 23.256 168.155 23.256 168.17 23.256 C 168.186 23.256 168.201 23.256 168.216 23.256 C 168.231 23.256 168.246 23.256 168.261 23.256 C 168.276 23.256 168.291 23.256 168.306 23.256 C 168.321 23.256 168.336 23.256 168.351 23.256 C 168.366 23.256 168.381 23.256 168.395 23.256 C 168.41 23.256 168.425 23.256 168.44 23.256 C 168.455 23.256 168.47 23.256 168.485 23.256 C 168.5 23.256 168.515 23.256 168.529 23.256 C 168.544 23.256 168.559 23.256 168.574 23.256 C 168.589 23.256 168.603 23.256 168.618 23.256 C 168.633 23.256 168.648 23.256 168.663 23.256 C 168.677 23.256 168.692 23.256 168.707 23.256 C 168.721 23.256 168.736 23.256 168.751 23.256 C 168.766 23.256 168.78 23.256 168.795 23.256 C 168.81 23.256 168.824 23.256 168.839 23.256 C 168.853 23.256 168.868 23.256 168.883 23.256 C 168.897 23.256 168.912 23.256 168.926 23.256 C 168.941 23.256 168.956 23.256 168.97 23.256 C 168.985 23.256 168.999 23.256 169.014 23.256 C 169.028 23.256 169.043 23.256 169.057 23.256 C 169.072 23.256 169.086 23.256 169.101 23.256 C 169.115 23.256 169.129 23.256 169.144 23.256 C 169.158 23.256 169.173 23.256 169.187 23.256 C 169.201 23.256 169.216 23.256 169.23 23.256 C 169.244 23.256 169.259 23.256 169.273 23.256 C 169.287 23.256 169.302 23.256 169.316 23.256 C 169.33 23.256 169.345 23.256 169.359 23.256 C 169.373 23.256 169.387 23.256 169.402 23.256 C 169.416 23.256 169.43 23.256 169.444 23.256 C 169.458 23.256 169.473 23.256 169.487 23.256 C 169.501 23.256 169.515 23.256 169.529 23.256 C 169.543 23.256 169.557 23.256 169.572 23.256 C 169.586 23.256 169.6 23.256 169.614 23.256 C 169.628 23.256 169.642 23.256 169.656 23.256 C 169.67 23.256 169.684 23.256 169.698 23.256 C 169.712 23.256 169.726 23.256 169.74 23.256 C 169.754 23.256 169.768 23.256 169.782 23.256 C 169.796 23.256 169.81 23.256 169.823 23.256 C 169.837 23.256 169.851 23.256 169.865 23.256 C 169.879 23.256 169.893 23.256 169.907 23.256 C 169.92 23.256 169.934 23.256 169.948 23.256 C 169.962 23.256 169.976 23.256 169.989 23.256 C 170.003 23.256 170.017 23.256 170.031 23.256 C 170.044 23.256 170.058 23.256 170.072 23.256 C 170.085 23.256 170.099 23.256 170.113 23.256 C 170.126 23.256 170.14 23.256 170.154 23.256 C 170.167 23.256 170.181 23.256 170.195 23.256 C 170.208 23.256 170.222 23.256 170.235 23.256 C 170.249 23.256 170.262 23.256 170.276 23.256 C 170.289 23.256 170.303 23.256 170.316 23.256 C 170.33 23.256 170.343 23.256 170.357 23.256 C 170.37 23.256 170.384 23.256 170.397 23.256 C 170.41 23.256 170.424 23.256 170.437 23.256 C 170.451 23.256 170.464 23.256 170.477 23.256 C 170.491 23.256 170.504 23.256 170.517 23.256 C 170.531 23.256 170.544 23.256 170.557 23.256 C 170.57 23.256 170.584 23.256 170.597 23.256 C 170.61 23.256 170.623 23.256 170.636 23.256 C 170.65 23.256 170.663 23.256 170.676 23.256 C 170.689 23.256 170.702 23.256 170.715 23.256 C 170.729 23.256 170.742 23.256 170.755 23.256 C 170.768 23.256 170.781 23.256 170.794 23.256 C 170.807 23.256 170.82 23.256 170.833 23.256 C 170.846 23.256 170.859 23.256 170.872 23.256 C 170.885 23.256 170.898 23.256 170.911 23.256 C 170.924 23.256 170.937 23.256 170.95 23.256 C 170.963 23.256 170.975 23.256 170.988 23.256 C 171.001 23.256 171.014 23.256 171.027 23.256 C 171.04 23.256 171.052 23.256 171.065 23.256 C 171.078 23.256 171.091 23.256 171.104 23.256 C 171.116 23.256 171.129 23.256 171.142 23.256 C 171.154 23.256 171.167 23.256 171.18 23.256 C 171.192 23.256 171.205 23.256 171.218 23.256 C 171.23 23.256 171.243 23.256 171.256 23.256 C 171.268 23.256 171.281 23.256 171.293 23.256 C 171.306 23.256 171.318 23.256 171.331 23.256 C 171.343 23.256 171.356 23.256 171.368 23.256 C 171.381 23.256 171.393 23.256 171.406 23.256 C 171.418 23.256 171.431 23.256 171.443 23.256 C 171.455 23.256 171.468 23.256 171.48 23.256 C 171.492 23.256 171.505 23.256 171.517 23.256 C 171.529 23.256 171.542 23.256 171.554 23.256 C 171.566 23.256 171.579 23.256 171.591 23.256 C 171.603 23.256 171.615 23.256 171.627 23.256 C 171.64 23.256 171.652 23.256 171.664 23.256 C 171.676 23.256 171.688 23.256 171.7 23.256 C 171.712 23.256 171.725 23.256 171.737 23.256 C 171.749 23.256 171.761 23.256 171.773 23.256 C 171.785 23.256 171.797 23.256 171.809 23.256 C 171.821 23.256 171.833 23.256 171.845 23.256 C 171.857 23.256 171.869 23.256 171.881 23.256 C 171.893 23.256 171.904 23.256 171.916 23.256 C 171.928 23.256 171.94 23.256 171.952 23.256 C 171.964 23.256 171.975 23.256 171.987 23.256 C 171.999 23.256 172.011 23.256 172.023 23.256 C 172.034 23.256 172.046 23.256 172.058 23.256 C 172.069 23.256 172.081 23.256 172.093 23.256 C 172.104 23.256 172.116 23.256 172.128 23.256 C 172.139 23.256 172.151 23.256 172.163 23.256 C 172.174 23.256 172.186 23.256 172.197 23.256 C 172.209 23.256 172.22 23.256 172.232 23.256 C 172.243 23.256 172.255 23.256 172.266 23.256 C 172.278 23.256 172.289 23.256 172.3 23.256 C 172.312 23.256 172.323 23.256 172.335 23.256 L 172.335 22.256 L 172.335 21.256 C 172.323 21.256 172.312 21.256 172.3 21.256 C 172.289 21.256 172.278 21.256 172.266 21.256 C 172.255 21.256 172.243 21.256 172.232 21.256 C 172.22 21.256 172.209 21.256 172.197 21.256 C 172.186 21.256 172.174 21.256 172.163 21.256 C 172.151 21.256 172.139 21.256 172.128 21.256 C 172.116 21.256 172.104 21.256 172.093 21.256 C 172.081 21.256 172.069 21.256 172.058 21.256 C 172.046 21.256 172.034 21.256 172.023 21.256 C 172.011 21.256 171.999 21.256 171.987 21.256 C 171.975 21.256 171.964 21.256 171.952 21.256 C 171.94 21.256 171.928 21.256 171.916 21.256 C 171.904 21.256 171.893 21.256 171.881 21.256 C 171.869 21.256 171.857 21.256 171.845 21.256 C 171.833 21.256 171.821 21.256 171.809 21.256 C 171.797 21.256 171.785 21.256 171.773 21.256 C 171.761 21.256 171.749 21.256 171.737 21.256 C 171.725 21.256 171.712 21.256 171.7 21.256 C 171.688 21.256 171.676 21.256 171.664 21.256 C 171.652 21.256 171.64 21.256 171.627 21.256 C 171.615 21.256 171.603 21.256 171.591 21.256 C 171.579 21.256 171.566 21.256 171.554 21.256 C 171.542 21.256 171.529 21.256 171.517 21.256 C 171.505 21.256 171.492 21.256 171.48 21.256 C 171.468 21.256 171.455 21.256 171.443 21.256 C 171.431 21.256 171.418 21.256 171.406 21.256 C 171.393 21.256 171.381 21.256 171.368 21.256 C 171.356 21.256 171.343 21.256 171.331 21.256 C 171.318 21.256 171.306 21.256 171.293 21.256 C 171.281 21.256 171.268 21.256 171.256 21.256 C 171.243 21.256 171.23 21.256 171.218 21.256 C 171.205 21.256 171.192 21.256 171.18 21.256 C 171.167 21.256 171.154 21.256 171.142 21.256 C 171.129 21.256 171.116 21.256 171.104 21.256 C 171.091 21.256 171.078 21.256 171.065 21.256 C 171.052 21.256 171.04 21.256 171.027 21.256 C 171.014 21.256 171.001 21.256 170.988 21.256 C 170.975 21.256 170.963 21.256 170.95 21.256 C 170.937 21.256 170.924 21.256 170.911 21.256 C 170.898 21.256 170.885 21.256 170.872 21.256 C 170.859 21.256 170.846 21.256 170.833 21.256 C 170.82 21.256 170.807 21.256 170.794 21.256 C 170.781 21.256 170.768 21.256 170.755 21.256 C 170.742 21.256 170.729 21.256 170.715 21.256 C 170.702 21.256 170.689 21.256 170.676 21.256 C 170.663 21.256 170.65 21.256 170.636 21.256 C 170.623 21.256 170.61 21.256 170.597 21.256 C 170.584 21.256 170.57 21.256 170.557 21.256 C 170.544 21.256 170.531 21.256 170.517 21.256 C 170.504 21.256 170.491 21.256 170.477 21.256 C 170.464 21.256 170.451 21.256 170.437 21.256 C 170.424 21.256 170.41 21.256 170.397 21.256 C 170.384 21.256 170.37 21.256 170.357 21.256 C 170.343 21.256 170.33 21.256 170.316 21.256 C 170.303 21.256 170.289 21.256 170.276 21.256 C 170.262 21.256 170.249 21.256 170.235 21.256 C 170.222 21.256 170.208 21.256 170.195 21.256 C 170.181 21.256 170.167 21.256 170.154 21.256 C 170.14 21.256 170.126 21.256 170.113 21.256 C 170.099 21.256 170.085 21.256 170.072 21.256 C 170.058 21.256 170.044 21.256 170.031 21.256 C 170.017 21.256 170.003 21.256 169.989 21.256 C 169.976 21.256 169.962 21.256 169.948 21.256 C 169.934 21.256 169.92 21.256 169.907 21.256 C 169.893 21.256 169.879 21.256 169.865 21.256 C 169.851 21.256 169.837 21.256 169.823 21.256 C 169.81 21.256 169.796 21.256 169.782 21.256 C 169.768 21.256 169.754 21.256 169.74 21.256 C 169.726 21.256 169.712 21.256 169.698 21.256 C 169.684 21.256 169.67 21.256 169.656 21.256 C 169.642 21.256 169.628 21.256 169.614 21.256 C 169.6 21.256 169.586 21.256 169.572 21.256 C 169.557 21.256 169.543 21.256 169.529 21.256 C 169.515 21.256 169.501 21.256 169.487 21.256 C 169.473 21.256 169.458 21.256 169.444 21.256 C 169.43 21.256 169.416 21.256 169.402 21.256 C 169.387 21.256 169.373 21.256 169.359 21.256 C 169.345 21.256 169.33 21.256 169.316 21.256 C 169.302 21.256 169.287 21.256 169.273 21.256 C 169.259 21.256 169.244 21.256 169.23 21.256 C 169.216 21.256 169.201 21.256 169.187 21.256 C 169.173 21.256 169.158 21.256 169.144 21.256 C 169.129 21.256 169.115 21.256 169.101 21.256 C 169.086 21.256 169.072 21.256 169.057 21.256 C 169.043 21.256 169.028 21.256 169.014 21.256 C 168.999 21.256 168.985 21.256 168.97 21.256 C 168.956 21.256 168.941 21.256 168.926 21.256 C 168.912 21.256 168.897 21.256 168.883 21.256 C 168.868 21.256 168.853 21.256 168.839 21.256 C 168.824 21.256 168.81 21.256 168.795 21.256 C 168.78 21.256 168.766 21.256 168.751 21.256 C 168.736 21.256 168.721 21.256 168.707 21.256 C 168.692 21.256 168.677 21.256 168.663 21.256 C 168.648 21.256 168.633 21.256 168.618 21.256 C 168.603 21.256 168.589 21.256 168.574 21.256 C 168.559 21.256 168.544 21.256 168.529 21.256 C 168.515 21.256 168.5 21.256 168.485 21.256 C 168.47 21.256 168.455 21.256 168.44 21.256 C 168.425 21.256 168.41 21.256 168.395 21.256 C 168.381 21.256 168.366 21.256 168.351 21.256 C 168.336 21.256 168.321 21.256 168.306 21.256 C 168.291 21.256 168.276 21.256 168.261 21.256 C 168.246 21.256 168.231 21.256 168.216 21.256 C 168.201 21.256 168.186 21.256 168.17 21.256 C 168.155 21.256 168.14 21.256 168.125 21.256 C 168.11 21.256 168.095 21.256 168.08 21.256 C 168.065 21.256 168.05 21.256 168.035 21.256 C 168.019 21.256 168.004 21.256 167.989 21.256 C 167.974 21.256 167.959 21.256 167.943 21.256 C 167.928 21.256 167.913 21.256 167.898 21.256 C 167.883 21.256 167.867 21.256 167.852 21.256 C 167.837 21.256 167.821 21.256 167.806 21.256 C 167.791 21.256 167.776 21.256 167.76 21.256 C 167.745 21.256 167.73 21.256 167.714 21.256 C 167.699 21.256 167.684 21.256 167.668 21.256 C 167.653 21.256 167.637 21.256 167.622 21.256 C 167.607 21.256 167.591 21.256 167.576 21.256 C 167.56 21.256 167.545 21.256 167.53 21.256 C 167.514 21.256 167.499 21.256 167.483 21.256 C 167.468 21.256 167.452 21.256 167.437 21.256 C 167.421 21.256 167.406 21.256 167.39 21.256 C 167.375 21.256 167.359 21.256 167.344 21.256 C 167.328 21.256 167.312 21.256 167.297 21.256 C 167.281 21.256 167.266 21.256 167.25 21.256 C 167.234 21.256 167.219 21.256 167.203 21.256 C 167.188 21.256 167.172 21.256 167.156 21.256 C 167.141 21.256 167.125 21.256 167.109 21.256 C 167.094 21.256 167.078 21.256 167.062 21.256 C 167.047 21.256 167.031 21.256 167.015 21.256 C 166.999 21.256 166.984 21.256 166.968 21.256 C 166.952 21.256 166.936 21.256 166.921 21.256 C 166.905 21.256 166.889 21.256 166.873 21.256 C 166.857 21.256 166.842 21.256 166.826 21.256 C 166.81 21.256 166.794 21.256 166.778 21.256 C 166.762 21.256 166.747 21.256 166.731 21.256 C 166.715 21.256 166.699 21.256 166.683 21.256 C 166.667 21.256 166.651 21.256 166.635 21.256 C 166.619 21.256 166.604 21.256 166.588 21.256 C 166.572 21.256 166.556 21.256 166.54 21.256 C 166.524 21.256 166.508 21.256 166.492 21.256 C 166.476 21.256 166.46 21.256 166.444 21.256 C 166.428 21.256 166.412 21.256 166.396 21.256 C 166.38 21.256 166.364 21.256 166.348 21.256 C 166.332 21.256 166.316 21.256 166.299 21.256 C 166.283 21.256 166.267 21.256 166.251 21.256 C 166.235 21.256 166.219 21.256 166.203 21.256 C 166.187 21.256 166.171 21.256 166.154 21.256 C 166.138 21.256 166.122 21.256 166.106 21.256 C 166.09 21.256 166.074 21.256 166.057 21.256 C 166.041 21.256 166.025 21.256 166.009 21.256 C 165.993 21.256 165.976 21.256 165.96 21.256 C 165.944 21.256 165.928 21.256 165.911 21.256 C 165.895 21.256 165.879 21.256 165.863 21.256 C 165.846 21.256 165.83 21.256 165.814 21.256 C 165.798 21.256 165.781 21.256 165.765 21.256 C 165.749 21.256 165.732 21.256 165.716 21.256 C 165.7 21.256 165.683 21.256 165.667 21.256 C 165.651 21.256 165.634 21.256 165.618 21.256 C 165.601 21.256 165.585 21.256 165.569 21.256 C 165.552 21.256 165.536 21.256 165.519 21.256 C 165.503 21.256 165.487 21.256 165.47 21.256 C 165.454 21.256 165.437 21.256 165.421 21.256 C 165.404 21.256 165.388 21.256 165.371 21.256 C 165.355 21.256 165.339 21.256 165.322 21.256 C 165.306 21.256 165.289 21.256 165.272 21.256 C 165.256 21.256 165.239 21.256 165.223 21.256 C 165.206 21.256 165.19 21.256 165.173 21.256 C 165.157 21.256 165.14 21.256 165.124 21.256 C 165.107 21.256 165.09 21.256 165.074 21.256 C 165.057 21.256 165.041 21.256 165.024 21.256 C 165.007 21.256 164.991 21.256 164.974 21.256 C 164.958 21.256 164.941 21.256 164.924 21.256 C 164.908 21.256 164.891 21.256 164.874 21.256 C 164.858 21.256 164.841 21.256 164.824 21.256 C 164.808 21.256 164.791 21.256 164.774 21.256 C 164.758 21.256 164.741 21.256 164.724 21.256 C 164.707 21.256 164.691 21.256 164.674 21.256 C 164.657 21.256 164.64 21.256 164.624 21.256 C 164.607 21.256 164.59 21.256 164.573 21.256 C 164.557 21.256 164.54 21.256 164.523 21.256 C 164.506 21.256 164.49 21.256 164.473 21.256 C 164.456 21.256 164.439 21.256 164.422 21.256 C 164.405 21.256 164.389 21.256 164.372 21.256 C 164.355 21.256 164.338 21.256 164.321 21.256 C 164.304 21.256 164.288 21.256 164.271 21.256 C 164.254 21.256 164.237 21.256 164.22 21.256 C 164.203 21.256 164.186 21.256 164.169 21.256 C 164.152 21.256 164.136 21.256 164.119 21.256 C 164.102 21.256 164.085 21.256 164.068 21.256 C 164.051 21.256 164.034 21.256 164.017 21.256 C 164 21.256 163.983 21.256 163.966 21.256 C 163.949 21.256 163.932 21.256 163.915 21.256 C 163.898 21.256 163.881 21.256 163.864 21.256 C 163.847 21.256 163.83 21.256 163.813 21.256 C 163.796 21.256 163.779 21.256 163.762 21.256 C 163.745 21.256 163.728 21.256 163.711 21.256 C 163.694 21.256 163.677 21.256 163.66 21.256 C 163.643 21.256 163.626 21.256 163.609 21.256 C 163.592 21.256 163.575 21.256 163.557 21.256 C 163.54 21.256 163.523 21.256 163.506 21.256 C 163.489 21.256 163.472 21.256 163.455 21.256 C 163.438 21.256 163.421 21.256 163.403 21.256 C 163.386 21.256 163.369 21.256 163.352 21.256 C 163.335 21.256 163.318 21.256 163.301 21.256 C 163.283 21.256 163.266 21.256 163.249 21.256 C 163.232 21.256 163.215 21.256 163.198 21.256 C 163.18 21.256 163.163 21.256 163.146 21.256 C 163.129 21.256 163.112 21.256 163.094 21.256 C 163.077 21.256 163.06 21.256 163.043 21.256 C 163.026 21.256 163.008 21.256 162.991 21.256 C 162.974 21.256 162.957 21.256 162.939 21.256 C 162.922 21.256 162.905 21.256 162.888 21.256 C 162.87 21.256 162.853 21.256 162.836 21.256 C 162.819 21.256 162.801 21.256 162.784 21.256 C 162.767 21.256 162.749 21.256 162.732 21.256 C 162.715 21.256 162.697 21.256 162.68 21.256 C 162.663 21.256 162.646 21.256 162.628 21.256 C 162.611 21.256 162.594 21.256 162.576 21.256 C 162.559 21.256 162.542 21.256 162.524 21.256 C 162.507 21.256 162.49 21.256 162.472 21.256 C 162.455 21.256 162.437 21.256 162.42 21.256 C 162.403 21.256 162.385 21.256 162.368 21.256 C 162.351 21.256 162.333 21.256 162.316 21.256 C 162.298 21.256 162.281 21.256 162.264 21.256 C 162.246 21.256 162.229 21.256 162.211 21.256 C 162.194 21.256 162.177 21.256 162.159 21.256 C 162.142 21.256 162.124 21.256 162.107 21.256 C 162.089 21.256 162.072 21.256 162.055 21.256 C 162.037 21.256 162.02 21.256 162.002 21.256 C 161.985 21.256 161.967 21.256 161.95 21.256 C 161.932 21.256 161.915 21.256 161.897 21.256 C 161.88 21.256 161.862 21.256 161.845 21.256 C 161.828 21.256 161.81 21.256 161.793 21.256 C 161.775 21.256 161.758 21.256 161.74 21.256 C 161.723 21.256 161.705 21.256 161.688 21.256 C 161.67 21.256 161.653 21.256 161.635 21.256 C 161.617 21.256 161.6 21.256 161.582 21.256 C 161.565 21.256 161.547 21.256 161.53 21.256 C 161.512 21.256 161.495 21.256 161.477 21.256 C 161.46 21.256 161.442 21.256 161.425 21.256 C 161.407 21.256 161.389 21.256 161.372 21.256 C 161.354 21.256 161.337 21.256 161.319 21.256 C 161.302 21.256 161.284 21.256 161.266 21.256 C 161.249 21.256 161.231 21.256 161.214 21.256 C 161.196 21.256 161.179 21.256 161.161 21.256 C 161.143 21.256 161.126 21.256 161.108 21.256 C 161.091 21.256 161.073 21.256 161.055 21.256 C 161.038 21.256 161.02 21.256 161.002 21.256 C 160.985 21.256 160.967 21.256 160.95 21.256 C 160.932 21.256 160.914 21.256 160.897 21.256 C 160.879 21.256 160.861 21.256 160.844 21.256 C 160.826 21.256 160.809 21.256 160.791 21.256 C 160.773 21.256 160.756 21.256 160.738 21.256 C 160.72 21.256 160.703 21.256 160.685 21.256 C 160.667 21.256 160.65 21.256 160.632 21.256 C 160.614 21.256 160.597 21.256 160.579 21.256 C 160.561 21.256 160.544 21.256 160.526 21.256 C 160.508 21.256 160.491 21.256 160.473 21.256 C 160.455 21.256 160.438 21.256 160.42 21.256 C 160.402 21.256 160.384 21.256 160.367 21.256 C 160.349 21.256 160.331 21.256 160.314 21.256 C 160.296 21.256 160.278 21.256 160.261 21.256 C 160.243 21.256 160.225 21.256 160.207 21.256 C 160.19 21.256 160.172 21.256 160.154 21.256 C 160.137 21.256 160.119 21.256 160.101 21.256 C 160.083 21.256 160.066 21.256 160.048 21.256 C 160.03 21.256 160.013 21.256 159.995 21.256 C 159.977 21.256 159.959 21.256 159.942 21.256 C 159.924 21.256 159.906 21.256 159.888 21.256 C 159.871 21.256 159.853 21.256 159.835 21.256 C 159.817 21.256 159.8 21.256 159.782 21.256 C 159.764 21.256 159.746 21.256 159.729 21.256 C 159.711 21.256 159.693 21.256 159.675 21.256 C 159.658 21.256 159.64 21.256 159.622 21.256 C 159.604 21.256 159.587 21.256 159.569 21.256 C 159.551 21.256 159.533 21.256 159.516 21.256 C 159.498 21.256 159.48 21.256 159.462 21.256 C 159.445 21.256 159.427 21.256 159.409 21.256 C 159.391 21.256 159.373 21.256 159.356 21.256 C 159.338 21.256 159.32 21.256 159.302 21.256 C 159.285 21.256 159.267 21.256 159.249 21.256 C 159.231 21.256 159.213 21.256 159.196 21.256 C 159.178 21.256 159.16 21.256 159.142 21.256 C 159.125 21.256 159.107 21.256 159.089 21.256 C 159.071 21.256 159.053 21.256 159.036 21.256 C 159.018 21.256 159 21.256 158.982 21.256 C 158.964 21.256 158.947 21.256 158.929 21.256 C 158.911 21.256 158.893 21.256 158.875 21.256 C 158.858 21.256 158.84 21.256 158.822 21.256 C 158.804 21.256 158.786 21.256 158.769 21.256 C 158.751 21.256 158.733 21.256 158.715 21.256 C 158.698 21.256 158.68 21.256 158.662 21.256 C 158.644 21.256 158.626 21.256 158.609 21.256 C 158.591 21.256 158.573 21.256 158.555 21.256 C 158.537 21.256 158.52 21.256 158.502 21.256 C 158.484 21.256 158.466 21.256 158.448 21.256 C 158.43 21.256 158.413 21.256 158.395 21.256 C 158.377 21.256 158.359 21.256 158.341 21.256 C 158.324 21.256 158.306 21.256 158.288 21.256 C 158.27 21.256 158.252 21.256 158.235 21.256 C 158.217 21.256 158.199 21.256 158.181 21.256 C 158.163 21.256 158.146 21.256 158.128 21.256 C 158.11 21.256 158.092 21.256 158.074 21.256 C 158.057 21.256 158.039 21.256 158.021 21.256 C 158.003 21.256 157.985 21.256 157.968 21.256 C 157.95 21.256 157.932 21.256 157.914 21.256 C 157.896 21.256 157.879 21.256 157.861 21.256 C 157.843 21.256 157.825 21.256 157.807 21.256 C 157.79 21.256 157.772 21.256 157.754 21.256 C 157.736 21.256 157.719 21.256 157.701 21.256 C 157.683 21.256 157.665 21.256 157.647 21.256 C 157.63 21.256 157.612 21.256 157.594 21.256 C 157.576 21.256 157.558 21.256 157.541 21.256 C 157.523 21.256 157.505 21.256 157.487 21.256 C 157.469 21.256 157.452 21.256 157.434 21.256 C 157.416 21.256 157.398 21.256 157.381 21.256 C 157.363 21.256 157.345 21.256 157.327 21.256 C 157.309 21.256 157.292 21.256 157.274 21.256 C 157.256 21.256 157.238 21.256 157.221 21.256 C 157.203 21.256 157.185 21.256 157.167 21.256 C 157.15 21.256 157.132 21.256 157.114 21.256 C 157.096 21.256 157.078 21.256 157.061 21.256 C 157.043 21.256 157.025 21.256 157.007 21.256 C 156.99 21.256 156.972 21.256 156.954 21.256 C 156.936 21.256 156.919 21.256 156.901 21.256 C 156.883 21.256 156.865 21.256 156.848 21.256 C 156.83 21.256 156.812 21.256 156.794 21.256 C 156.777 21.256 156.759 21.256 156.741 21.256 C 156.723 21.256 156.706 21.256 156.688 21.256 C 156.67 21.256 156.652 21.256 156.635 21.256 C 156.617 21.256 156.599 21.256 156.582 21.256 C 156.564 21.256 156.546 21.256 156.528 21.256 C 156.511 21.256 156.493 21.256 156.475 21.256 C 156.458 21.256 156.44 21.256 156.422 21.256 C 156.404 21.256 156.387 21.256 156.369 21.256 C 156.351 21.256 156.334 21.256 156.316 21.256 C 156.298 21.256 156.28 21.256 156.263 21.256 C 156.245 21.256 156.227 21.256 156.21 21.256 C 156.192 21.256 156.174 21.256 156.157 21.256 C 156.139 21.256 156.121 21.256 156.104 21.256 C 156.086 21.256 156.068 21.256 156.051 21.256 C 156.033 21.256 156.015 21.256 155.998 21.256 C 155.98 21.256 155.962 21.256 155.945 21.256 C 155.927 21.256 155.909 21.256 155.892 21.256 C 155.874 21.256 155.856 21.256 155.839 21.256 C 155.821 21.256 155.803 21.256 155.786 21.256 C 155.768 21.256 155.75 21.256 155.733 21.256 C 155.715 21.256 155.698 21.256 155.68 21.256 C 155.662 21.256 155.645 21.256 155.627 21.256 C 155.609 21.256 155.592 21.256 155.574 21.256 C 155.557 21.256 155.539 21.256 155.521 21.256 C 155.504 21.256 155.486 21.256 155.469 21.256 C 155.451 21.256 155.433 21.256 155.416 21.256 C 155.398 21.256 155.381 21.256 155.363 21.256 C 155.346 21.256 155.328 21.256 155.31 21.256 C 155.293 21.256 155.275 21.256 155.258 21.256 C 155.24 21.256 155.223 21.256 155.205 21.256 C 155.187 21.256 155.17 21.256 155.152 21.256 C 155.135 21.256 155.117 21.256 155.1 21.256 C 155.082 21.256 155.065 21.256 155.047 21.256 C 155.03 21.256 155.012 21.256 154.995 21.256 C 154.977 21.256 154.96 21.256 154.942 21.256 C 154.925 21.256 154.907 21.256 154.89 21.256 C 154.872 21.256 154.855 21.256 154.837 21.256 C 154.82 21.256 154.802 21.256 154.785 21.256 C 154.767 21.256 154.75 21.256 154.732 21.256 C 154.715 21.256 154.697 21.256 154.68 21.256 C 154.662 21.256 154.645 21.256 154.627 21.256 C 154.61 21.256 154.592 21.256 154.575 21.256 C 154.558 21.256 154.54 21.256 154.523 21.256 C 154.505 21.256 154.488 21.256 154.47 21.256 C 154.453 21.256 154.436 21.256 154.418 21.256 C 154.401 21.256 154.383 21.256 154.366 21.256 C 154.349 21.256 154.331 21.256 154.314 21.256 C 154.296 21.256 154.279 21.256 154.262 21.256 C 154.244 21.256 154.227 21.256 154.209 21.256 C 154.192 21.256 154.175 21.256 154.157 21.256 C 154.14 21.256 154.123 21.256 154.105 21.256 C 154.088 21.256 154.071 21.256 154.053 21.256 C 154.036 21.256 154.019 21.256 154.001 21.256 C 153.984 21.256 153.967 21.256 153.949 21.256 C 153.932 21.256 153.915 21.256 153.897 21.256 C 153.88 21.256 153.863 21.256 153.846 21.256 C 153.828 21.256 153.811 21.256 153.794 21.256 C 153.776 21.256 153.759 21.256 153.742 21.256 C 153.725 21.256 153.707 21.256 153.69 21.256 C 153.673 21.256 153.656 21.256 153.638 21.256 C 153.621 21.256 153.604 21.256 153.587 21.256 C 153.57 21.256 153.552 21.256 153.535 21.256 C 153.518 21.256 153.501 21.256 153.484 21.256 C 153.466 21.256 153.449 21.256 153.432 21.256 C 153.415 21.256 153.398 21.256 153.38 21.256 C 153.363 21.256 153.346 21.256 153.329 21.256 C 153.312 21.256 153.295 21.256 153.277 21.256 C 153.26 21.256 153.243 21.256 153.226 21.256 C 153.209 21.256 153.192 21.256 153.175 21.256 C 153.158 21.256 153.14 21.256 153.123 21.256 C 153.106 21.256 153.089 21.256 153.072 21.256 C 153.055 21.256 153.038 21.256 153.021 21.256 C 153.004 21.256 152.987 21.256 152.97 21.256 C 152.953 21.256 152.936 21.256 152.919 21.256 C 152.901 21.256 152.884 21.256 152.867 21.256 C 152.85 21.256 152.833 21.256 152.816 21.256 C 152.799 21.256 152.782 21.256 152.765 21.256 C 152.748 21.256 152.731 21.256 152.714 21.256 C 152.697 21.256 152.68 21.256 152.663 21.256 C 152.646 21.256 152.629 21.256 152.613 21.256 C 152.596 21.256 152.579 21.256 152.562 21.256 C 152.545 21.256 152.528 21.256 152.511 21.256 C 152.494 21.256 152.477 21.256 152.46 21.256 C 152.443 21.256 152.426 21.256 152.41 21.256 C 152.393 21.256 152.376 21.256 152.359 21.256 C 152.342 21.256 152.325 21.256 152.308 21.256 C 152.291 21.256 152.275 21.256 152.258 21.256 C 152.241 21.256 152.224 21.256 152.207 21.256 C 152.19 21.256 152.174 21.256 152.157 21.256 C 152.14 21.256 152.123 21.256 152.106 21.256 C 152.09 21.256 152.073 21.256 152.056 21.256 C 152.039 21.256 152.023 21.256 152.006 21.256 C 151.989 21.256 151.972 21.256 151.956 21.256 C 151.939 21.256 151.922 21.256 151.905 21.256 C 151.889 21.256 151.872 21.256 151.855 21.256 C 151.839 21.256 151.822 21.256 151.805 21.256 C 151.788 21.256 151.772 21.256 151.755 21.256 C 151.738 21.256 151.722 21.256 151.705 21.256 C 151.689 21.256 151.672 21.256 151.655 21.256 C 151.639 21.256 151.622 21.256 151.605 21.256 C 151.589 21.256 151.572 21.256 151.556 21.256 C 151.539 21.256 151.522 21.256 151.506 21.256 C 151.489 21.256 151.473 21.256 151.456 21.256 C 151.44 21.256 151.423 21.256 151.407 21.256 C 151.39 21.256 151.374 21.256 151.357 21.256 C 151.34 21.256 151.324 21.256 151.307 21.256 C 151.291 21.256 151.275 21.256 151.258 21.256 C 151.242 21.256 151.225 21.256 151.209 21.256 C 151.192 21.256 151.176 21.256 151.159 21.256 C 151.143 21.256 151.126 21.256 151.11 21.256 C 151.094 21.256 151.077 21.256 151.061 21.256 C 151.044 21.256 151.028 21.256 151.012 21.256 C 150.995 21.256 150.979 21.256 150.963 21.256 C 150.946 21.256 150.93 21.256 150.913 21.256 C 150.897 21.256 150.881 21.256 150.865 21.256 C 150.848 21.256 150.832 21.256 150.816 21.256 C 150.799 21.256 150.783 21.256 150.767 21.256 C 150.75 21.256 150.734 21.256 150.718 21.256 C 150.702 21.256 150.685 21.256 150.669 21.256 C 150.653 21.256 150.637 21.256 150.621 21.256 C 150.604 21.256 150.588 21.256 150.572 21.256 C 150.556 21.256 150.54 21.256 150.523 21.256 C 150.507 21.256 150.491 21.256 150.475 21.256 C 150.459 21.256 150.443 21.256 150.427 21.256 C 150.41 21.256 150.394 21.256 150.378 21.256 C 150.362 21.256 150.346 21.256 150.33 21.256 C 150.314 21.256 150.298 21.256 150.282 21.256 C 150.266 21.256 150.25 21.256 150.234 21.256 C 150.218 21.256 150.202 21.256 150.186 21.256 C 150.17 21.256 150.154 21.256 150.138 21.256 C 150.122 21.256 150.106 21.256 150.09 21.256 C 150.074 21.256 150.058 21.256 150.042 21.256 C 150.026 21.256 150.01 21.256 149.994 21.256 C 149.978 21.256 149.962 21.256 149.946 21.256 C 149.93 21.256 149.915 21.256 149.899 21.256 C 149.883 21.256 149.867 21.256 149.851 21.256 C 149.835 21.256 149.819 21.256 149.804 21.256 C 149.788 21.256 149.772 21.256 149.756 21.256 C 149.74 21.256 149.725 21.256 149.709 21.256 C 149.693 21.256 149.677 21.256 149.662 21.256 C 149.646 21.256 149.63 21.256 149.614 21.256 C 149.599 21.256 149.583 21.256 149.567 21.256 C 149.551 21.256 149.536 21.256 149.52 21.256 C 149.504 21.256 149.489 21.256 149.473 21.256 C 149.457 21.256 149.442 21.256 149.426 21.256 C 149.411 21.256 149.395 21.256 149.379 21.256 C 149.364 21.256 149.348 21.256 149.333 21.256 C 149.317 21.256 149.301 21.256 149.286 21.256 C 149.27 21.256 149.255 21.256 149.239 21.256 C 149.224 21.256 149.208 21.256 149.193 21.256 C 149.177 21.256 149.162 21.256 149.146 21.256 C 149.131 21.256 149.115 21.256 149.1 21.256 C 149.084 21.256 149.069 21.256 149.054 21.256 C 149.038 21.256 149.023 21.256 149.007 21.256 C 148.992 21.256 148.977 21.256 148.961 21.256 C 148.946 21.256 148.93 21.256 148.915 21.256 C 148.9 21.256 148.884 21.256 148.869 21.256 C 148.854 21.256 148.839 21.256 148.823 21.256 C 148.808 21.256 148.793 21.256 148.777 21.256 C 148.762 21.256 148.747 21.256 148.732 21.256 C 148.716 21.256 148.701 21.256 148.686 21.256 C 148.671 21.256 148.656 21.256 148.64 21.256 C 148.625 21.256 148.61 21.256 148.595 21.256 C 148.58 21.256 148.565 21.256 148.549 21.256 C 148.534 21.256 148.519 21.256 148.504 21.256 C 148.489 21.256 148.474 21.256 148.459 21.256 C 148.444 21.256 148.429 21.256 148.414 21.256 C 148.399 21.256 148.384 21.256 148.369 21.256 C 148.354 21.256 148.339 21.256 148.324 21.256 C 148.309 21.256 148.294 21.256 148.279 21.256 C 148.264 21.256 148.249 21.256 148.234 21.256 C 148.219 21.256 148.204 21.256 148.189 21.256 C 148.174 21.256 148.159 21.256 148.145 21.256 C 148.13 21.256 148.115 21.256 148.1 21.256 C 148.085 21.256 148.07 21.256 148.056 21.256 C 148.041 21.256 148.026 21.256 148.011 21.256 C 147.996 21.256 147.982 21.256 147.967 21.256 C 147.952 21.256 147.937 21.256 147.923 21.256 C 147.908 21.256 147.893 21.256 147.878 21.256 C 147.864 21.256 147.849 21.256 147.834 21.256 C 147.82 21.256 147.805 21.256 147.791 21.256 C 147.776 21.256 147.761 21.256 147.747 21.256 C 147.732 21.256 147.717 21.256 147.703 21.256 C 147.688 21.256 147.674 21.256 147.659 21.256 C 147.645 21.256 147.63 21.256 147.616 21.256 L 147.616 22.256 Z M 178.38 19.491 L 179.136 20.145 L 193.61 3.419 L 192.854 2.765 L 192.098 2.111 L 177.624 18.836 L 178.38 19.491 Z M 198.904 0 L 198.904 1 L 216.167 1 L 216.167 0 L 216.167 -1 L 198.904 -1 L 198.904 0 Z M 221.694 2.216 L 221.003 2.939 L 239.657 20.763 L 240.348 20.04 L 241.038 19.317 L 222.385 1.493 L 221.694 2.216 Z M 245.874 22.256 L 245.874 23.256 L 253.768 23.256 L 253.768 22.256 L 253.768 21.256 L 245.874 21.256 L 245.874 22.256 Z M 257.81 21.16 L 258.315 22.023 L 292.596 1.959 L 292.09 1.096 L 291.585 0.233 L 257.304 20.297 L 257.81 21.16 Z M 296.132 0 L 296.132 1 L 312 1 L 312 0 L 312 -1 L 296.132 -1 L 296.132 0 Z M 114.35 38.184 L 114.35 39.184 L 122.266 39.184 L 122.266 38.184 L 122.266 37.184 L 114.35 37.184 L 114.35 38.184 Z M 127.298 36.404 L 127.926 37.181 L 143.216 24.813 L 142.587 24.036 L 141.958 23.259 L 126.669 35.626 L 127.298 36.404 Z M 292.09 1.096 L 292.596 1.959 C 293.668 1.331 294.889 1 296.132 1 L 296.132 0 L 296.132 -1 C 294.534 -1 292.964 -0.575 291.585 0.233 L 292.09 1.096 Z M 253.768 22.256 L 253.768 23.256 C 255.366 23.256 256.936 22.83 258.315 22.023 L 257.81 21.16 L 257.304 20.297 C 256.232 20.925 255.011 21.256 253.768 21.256 L 253.768 22.256 Z M 240.348 20.04 L 239.657 20.763 C 241.331 22.363 243.558 23.256 245.874 23.256 L 245.874 22.256 L 245.874 21.256 C 244.073 21.256 242.341 20.561 241.038 19.317 L 240.348 20.04 Z M 216.167 0 L 216.167 1 C 217.969 1 219.701 1.694 221.003 2.939 L 221.694 2.216 L 222.385 1.493 C 220.71 -0.107 218.483 -1 216.167 -1 L 216.167 0 Z M 192.854 2.765 L 193.61 3.419 C 194.94 1.883 196.872 1 198.904 1 L 198.904 0 L 198.904 -1 C 196.291 -1 193.808 0.135 192.098 2.111 L 192.854 2.765 Z M 172.335 22.256 L 172.335 23.256 C 174.948 23.256 177.427 22.12 179.136 20.145 L 178.38 19.491 L 177.624 18.836 C 176.294 20.373 174.366 21.256 172.335 21.256 L 172.335 22.256 Z M 147.616 22.256 L 147.616 21.256 C 145.555 21.256 143.56 21.963 141.958 23.259 L 142.587 24.036 L 143.216 24.813 C 144.462 23.805 146.014 23.256 147.616 23.256 L 147.616 22.256 Z M 122.266 38.184 L 122.266 39.184 C 124.327 39.184 126.325 38.477 127.926 37.181 L 127.298 36.404 L 126.669 35.626 C 125.423 36.634 123.869 37.184 122.266 37.184 L 122.266 38.184 Z M 109.276 36.369 L 108.641 37.142 C 110.251 38.462 112.268 39.184 114.35 39.184 L 114.35 38.184 L 114.35 37.184 C 112.731 37.184 111.162 36.623 109.91 35.596 L 109.276 36.369 Z M 89.213 22.256 L 89.213 23.256 C 90.832 23.256 92.401 23.817 93.653 24.844 L 94.287 24.071 L 94.921 23.298 C 93.312 21.978 91.295 21.256 89.213 21.256 L 89.213 22.256 Z M 72.191 19.428 L 71.428 20.074 C 73.138 22.092 75.649 23.256 78.294 23.256 L 78.294 22.256 L 78.294 21.256 C 76.237 21.256 74.284 20.351 72.954 18.781 L 72.191 19.428 Z M 52.022 0 L 52.022 1 C 54.079 1 56.032 1.905 57.362 3.475 L 58.125 2.828 L 58.888 2.182 C 57.178 0.164 54.667 -1 52.022 -1 L 52.022 0 Z M 30.696 4.088 L 31.568 4.577 C 32.806 2.368 35.141 1 37.674 1 L 37.674 0 L 37.674 -1 C 34.418 -1 31.416 0.759 29.823 3.599 L 30.696 4.088 Z M 3.634 44 L 3.634 45 C 6.89 45 9.892 43.241 11.484 40.401 L 10.612 39.912 L 9.739 39.423 C 8.501 41.632 6.166 43 3.634 43 L 3.634 44 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
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
            }}>{props.icon1 ?? <PieChartLine />}</div>
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
          }}>{props.text1 ?? "Spending Summary"}</span>
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
          <EmptyStatesFinanceBanking1
            style={{ transform: "scale(0.730, 0.730)", transformOrigin: "0 0" }}
            type={"💸 spending summary"}
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
        }}>{props.text2 ?? "No records of spendings yet.\nPlease check back later."}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 178,
      overflow: "hidden",
      borderRadius: 16,
      backgroundColor: "var(--bg-white-0)",
      boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 34,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
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
          <svg width={9.167} height={9.167} viewBox="0 0 9.167 9.167" fill="none" style={{
            position: "absolute",
            left: 5.417,
            top: 5.417,
            width: 9.167,
            height: 9.167,
            color: "rgb(113,119,132)",
          }}>
            <path d={"M 1.525 6.563 L 8.088 0 L 9.167 1.078 L 2.603 7.642 L 8.388 7.642 L 8.388 9.167 L 0 9.167 L 0 0.779 L 1.525 0.779 L 1.525 6.563 L 1.525 6.563 Z"} fill="currentColor" fillRule="nonzero" />
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
        }}>{props.text1 ?? "Total Expenses"}</span>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 24,
            whiteSpace: "nowrap",
            lineHeight: "32px",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>{props.text2 ?? "$6,240.28"}</span>
          <div style={{ position: "relative", width: 40, flexShrink: 0 }}>{props.icon2 ?? <Badge11BasicRed9 editText={"-2%"} />}</div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 208,
        top: 32,
        width: 120,
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <div style={{ position: "relative", flexGrow: 1, alignSelf: "stretch" }}>
          <svg width={120} height={40} viewBox="0 0 120 40" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 120,
            height: 40,
            borderRadius: 68,
          }}>
            <path d={"M 1.789 39.579 L 0.211 39.579 C 0.094 39.579 0 39.673 0 39.789 C 0 39.906 0.094 40 0.211 40 L 100 40 C 111.046 40 120 31.046 120 20 L 120 4.601 C 120 2.06 117.94 0 115.399 0 C 113.931 0 112.55 0.701 111.684 1.887 L 99.76 18.209 C 98.929 19.347 97.604 20.02 96.195 20.02 C 94.454 20.02 92.876 18.997 92.165 17.408 L 86.202 4.084 C 85.091 1.599 82.623 0 79.901 0 C 77.013 0 74.43 1.799 73.427 4.508 L 69.92 13.986 C 68.578 17.612 66.342 20.02 62.475 20.02 C 59.051 20.02 54.686 21.914 53.086 24.941 L 49.333 32.041 C 48.583 33.46 47.11 34.347 45.506 34.347 C 43.892 34.347 42.412 33.45 41.667 32.019 L 36.855 22.786 C 35.969 21.086 34.211 20.02 32.294 20.02 C 30.129 20.02 28.196 18.664 27.459 16.629 L 22.837 3.871 C 21.995 1.547 19.788 0 17.317 0 C 14.602 0 12.241 1.862 11.608 4.502 L 3.529 38.207 C 3.336 39.012 2.617 39.579 1.789 39.579 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={120} height={40} viewBox="0 0 120 40" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 120,
            height: 40,
            borderRadius: 68,
            color: "var(--state-information-base)",
          }}>
            <path d={"M 108.998 5.622 L 109.809 6.208 L 108.998 5.622 Z M 99.753 18.413 L 98.942 17.827 L 99.753 18.413 Z M 92.176 17.618 L 93.09 17.213 L 92.176 17.618 Z M 86.187 4.092 L 87.101 3.687 L 86.187 4.092 Z M 73.443 4.512 L 74.382 4.856 L 73.443 4.512 Z M 53.106 25.169 L 52.22 24.706 L 53.106 25.169 Z M 41.677 32.379 L 40.788 32.837 L 41.677 32.379 Z M 36.844 23.007 L 35.955 23.465 L 36.844 23.007 Z M 27.471 16.839 L 26.53 17.177 L 27.471 16.839 Z M 4.912 37.117 L 12.593 4.733 L 10.647 4.271 L 2.966 36.656 L 4.912 37.117 Z M 21.883 4.215 L 26.53 17.177 L 28.412 16.502 L 23.766 3.54 L 21.883 4.215 Z M 35.955 23.465 L 40.788 32.837 L 42.565 31.921 L 37.733 22.548 L 35.955 23.465 Z M 70.837 14.539 L 74.382 4.856 L 72.504 4.168 L 68.959 13.851 L 70.837 14.539 Z M 85.272 4.497 L 91.261 18.023 L 93.09 17.213 L 87.101 3.687 L 85.272 4.497 Z M 100.563 18.999 L 109.809 6.208 L 108.188 5.037 L 98.942 17.827 L 100.563 18.999 Z M 50.209 32.865 L 53.992 25.632 L 52.22 24.706 L 48.437 31.938 L 50.209 32.865 Z M 109.809 6.208 C 112.173 2.937 115.964 1 120 1 L 120 -1 C 115.322 -1 110.928 1.245 108.188 5.037 L 109.809 6.208 Z M 96.193 21.233 C 97.923 21.233 99.549 20.402 100.563 18.999 L 98.942 17.827 C 98.304 18.71 97.281 19.233 96.193 19.233 L 96.193 21.233 Z M 91.261 18.023 C 92.125 19.974 94.059 21.233 96.193 21.233 L 96.193 19.233 C 94.85 19.233 93.634 18.441 93.09 17.213 L 91.261 18.023 Z M 79.9 1 C 82.225 1 84.331 2.371 85.272 4.497 L 87.101 3.687 C 85.84 0.838 83.016 -1 79.9 -1 L 79.9 1 Z M 74.382 4.856 C 75.23 2.54 77.434 1 79.9 1 L 79.9 -1 C 76.594 -1 73.641 1.064 72.504 4.168 L 74.382 4.856 Z M 62.48 21.233 C 64.641 21.233 66.401 20.55 67.798 19.326 C 69.174 18.121 70.139 16.444 70.837 14.539 L 68.959 13.851 C 68.329 15.573 67.516 16.914 66.48 17.821 C 65.467 18.71 64.182 19.233 62.48 19.233 L 62.48 21.233 Z M 62.48 19.233 C 60.599 19.233 58.501 19.751 56.658 20.668 C 54.824 21.581 53.142 22.942 52.22 24.706 L 53.992 25.632 C 54.656 24.362 55.95 23.254 57.55 22.458 C 59.142 21.665 60.937 21.233 62.48 21.233 L 62.48 19.233 Z M 45.506 35.713 C 47.481 35.713 49.294 34.615 50.209 32.865 L 48.437 31.938 C 47.866 33.029 46.737 33.713 45.506 33.713 L 45.506 35.713 Z M 40.788 32.837 C 41.698 34.603 43.519 35.713 45.506 35.713 L 45.506 33.713 C 44.267 33.713 43.133 33.021 42.565 31.921 L 40.788 32.837 Z M 32.292 21.233 C 33.835 21.233 35.248 22.094 35.955 23.465 L 37.733 22.548 C 36.683 20.512 34.583 19.233 32.292 19.233 L 32.292 21.233 Z M 26.53 17.177 C 27.402 19.61 29.708 21.233 32.292 21.233 L 32.292 19.233 C 30.552 19.233 29 18.14 28.412 16.502 L 26.53 17.177 Z M 17.315 1 C 19.363 1 21.192 2.287 21.883 4.215 L 23.766 3.54 C 22.789 0.817 20.208 -1 17.315 -1 L 17.315 1 Z M 12.593 4.733 C 13.112 2.545 15.066 1 17.315 1 L 17.315 -1 C 14.139 -1 11.379 1.182 10.647 4.271 L 12.593 4.733 Z M 0 41 C 2.339 41 4.372 39.393 4.912 37.117 L 2.966 36.656 C 2.64 38.03 1.412 39 0 39 L 0 41 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
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
      color: "var(--stroke-soft-200)",
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
            }}>{props.icon1 ?? <RefreshLine />}</div>
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
          }}>{props.text1 ?? "Exchange"}</span>
        </div>
        <div style={{
          position: "relative",
          width: 98,
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
            }}>Currencies</span>
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
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-white-0)",
          borderTop: "1px solid var(--stroke-soft-200)",
          borderRight: "1px solid var(--stroke-soft-200)",
          borderBottom: "1px solid var(--stroke-soft-200)",
          borderLeft: "1px solid var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>{props.icon2 ?? <UnitedStates style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "16px",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>{props.text2 ?? "USD"}</span>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
                <svg width={8.591} height={5.250} viewBox="0 0 8.591 5.250" fill="none" style={{
                  position: "absolute",
                  left: 4.704,
                  top: 6.45,
                  width: 8.591,
                  height: 5.25,
                  color: "rgb(153,160,174)",
                }}>
                  <path d={"M 4.296 3.341 L 7.637 0 L 8.591 0.954 L 4.296 5.25 L 0 0.954 L 0.954 0 L 4.296 3.341 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
          <svg width={24} height={1} viewBox="0 -0.500 24 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,132,8)",
            transformOrigin: "0 0",
            width: 24,
            height: 1,
          }}>
            <path d={"M 0 0 L 24 0 L 24 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
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
          }}>
            <div style={{
              position: "relative",
              width: 20,
              height: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.500} height={14.925} viewBox="0 0 13.500 14.925" fill="none" style={{
                position: "absolute",
                left: 3.25,
                top: 2.537,
                width: 13.5,
                height: 14.925,
                color: "rgb(153,160,174)",
              }}>
                <path d={"M 9.787 7.5 L 13.5 11.212 L 9.787 14.925 L 8.727 13.865 L 10.629 11.962 L 0.75 11.962 L 0.75 10.462 L 10.629 10.462 L 8.727 8.56 L 9.787 7.5 Z M 3.712 0 L 4.773 1.061 L 2.871 2.963 L 12.75 2.963 L 12.75 4.462 L 2.871 4.462 L 4.773 6.365 L 3.712 7.425 L 0 3.712 L 3.712 0 L 3.712 0 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
          <svg width={24} height={1} viewBox="0 -0.500 24 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,188,8)",
            transformOrigin: "0 0",
            width: 24,
            height: 1,
          }}>
            <path d={"M 0 0 L 24 0 L 24 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>
              <EuropeanUnion style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "20px",
              letterSpacing: "-0.006em",
              color: "var(--text-strong-950)",
              flexShrink: 0,
            }}>{props.text3 ?? "EUR"}</span>
            <div style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 999,
              backgroundColor: "var(--bg-white-0)",
              boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
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
                <svg width={8.591} height={5.250} viewBox="0 0 8.591 5.250" fill="none" style={{
                  position: "absolute",
                  left: 4.704,
                  top: 6.45,
                  width: 8.591,
                  height: 5.25,
                  color: "rgb(153,160,174)",
                }}>
                  <path d={"M 4.296 3.341 L 7.637 0 L 8.591 0.954 L 4.296 5.25 L 0 0.954 L 0.954 0 L 4.296 3.341 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-white-0)",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: "16px 16px 16px 16px",
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
            fontSize: 14,
            textAlign: "center",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-strong-950)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "$100.00"}</span>
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
            whiteSpace: "pre-wrap",
          }}>{"Available : "}<span style={{ color: "rgb(23,23,23)" }}>{"$16,058.94"}</span></span>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "var(--bg-weak-50)",
          borderTop: "1px solid var(--stroke-soft-200)",
          borderRight: "1px solid var(--stroke-soft-200)",
          borderBottom: "1px solid var(--stroke-soft-200)",
          borderLeft: "1px solid var(--stroke-soft-200)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "6px 16px 6px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            textAlign: "center",
            whiteSpace: "pre-wrap",
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexShrink: 0,
          }}>{"1 USD = "}<span style={{ color: "rgb(23,23,23)" }}>{"0.94 EUR"}</span></span>
        </div>
      </div>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: "-0.006em",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>Tax (2%)</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>$2.00</span>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>Exchange fee (1%)</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>$1.00</span>
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
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--text-sub-600)",
            flexGrow: 1,
          }}>Total amount</span>
          <span style={{
            position: "relative",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 12,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "16px",
            color: "var(--text-strong-950)",
            flexShrink: 0,
          }}>€90.7</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 8,
        backgroundColor: "var(--bg-white-0)",
        boxShadow: "inset 0 0 0 1px var(--stroke-soft-200), 0px 1px 2px 0px rgba(10,13,20,0.03)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "8px 8px 8px 8px",
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
            <path d={"M 2.597 1.825 C 3.958 0.646 5.699 -0.003 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 9.102 14.498 10.587 13.642 11.805 L 11.25 7.5 L 13.5 7.5 C 13.5 6.324 13.154 5.173 12.506 4.192 C 11.858 3.211 10.935 2.441 9.853 1.98 C 8.771 1.519 7.577 1.386 6.42 1.598 C 5.263 1.809 4.194 2.356 3.345 3.171 L 2.597 1.825 Z M 12.403 13.175 C 11.042 14.355 9.301 15.003 7.5 15 C 3.358 15 0 11.642 0 7.5 C 0 5.898 0.502 4.413 1.357 3.195 L 3.75 7.5 L 1.5 7.5 C 1.5 8.676 1.846 9.827 2.494 10.808 C 3.142 11.789 4.065 12.559 5.147 13.02 C 6.229 13.481 7.423 13.614 8.58 13.402 C 9.737 13.191 10.806 12.644 11.655 11.829 L 12.403 13.175 Z"} fill="currentColor" fillRule="nonzero" />
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
          }}>Exchange</span>
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
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 352,
      height: 178,
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
            }}>{props.icon1 ?? <BarChartBoxLine />}</div>
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
          }}>{props.text1 ?? "Major Expenses"}</span>
        </div>
        <CompactSelect11
          style={{ position: "relative", width: 93, flexShrink: 0 }}
          editText={"Weekly"}
          type={"📂 basic"}
          state={"filled"}
          size={"xs"}
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
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 60,
          top: 0,
          width: 260,
          height: 86,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              alignSelf: "stretch",
              whiteSpace: "nowrap",
            }}>{props.text2 ?? "0"}</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <svg width={66} height={1} viewBox="0 -0.500 66 1" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0,1,-1,0,12,0)",
              transformOrigin: "0 0",
              width: 66,
              height: 1,
            }}>
              <path d={"M 0 0 L 0.971 0 L 0.971 -1 L 0 -1 L 0 0 Z M 2.912 0 L 4.853 0 L 4.853 -1 L 2.912 -1 L 2.912 0 Z M 6.794 0 L 8.735 0 L 8.735 -1 L 6.794 -1 L 6.794 0 Z M 10.676 0 L 12.618 0 L 12.618 -1 L 10.676 -1 L 10.676 0 Z M 14.559 0 L 16.5 0 L 16.5 -1 L 14.559 -1 L 14.559 0 Z M 18.441 0 L 20.382 0 L 20.382 -1 L 18.441 -1 L 18.441 0 Z M 22.324 0 L 24.265 0 L 24.265 -1 L 22.324 -1 L 22.324 0 Z M 26.206 0 L 28.147 0 L 28.147 -1 L 26.206 -1 L 26.206 0 Z M 30.088 0 L 32.029 0 L 32.029 -1 L 30.088 -1 L 30.088 0 Z M 33.971 0 L 35.912 0 L 35.912 -1 L 33.971 -1 L 33.971 0 Z M 37.853 0 L 39.794 0 L 39.794 -1 L 37.853 -1 L 37.853 0 Z M 41.735 0 L 43.676 0 L 43.676 -1 L 41.735 -1 L 41.735 0 Z M 45.618 0 L 47.559 0 L 47.559 -1 L 45.618 -1 L 45.618 0 Z M 49.5 0 L 51.441 0 L 51.441 -1 L 49.5 -1 L 49.5 0 Z M 53.382 0 L 55.324 0 L 55.324 -1 L 53.382 -1 L 53.382 0 Z M 57.265 0 L 59.206 0 L 59.206 -1 L 57.265 -1 L 57.265 0 Z M 61.147 0 L 63.088 0 L 63.088 -1 L 61.147 -1 L 61.147 0 Z M 65.029 0 L 66 0 L 66 -1 L 65.029 -1 L 65.029 0 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <span style={{
              position: "relative",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "center",
              lineHeight: "12px",
              letterSpacing: "0.020em",
              color: "var(--text-soft-400)",
              textTransform: "uppercase",
              flexShrink: 0,
              