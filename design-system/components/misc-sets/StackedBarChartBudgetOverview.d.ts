import * as React from 'react';
export interface StackedBarChartBudgetOverviewProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "12-bar" | "7-bar" | "6-bar" | "4-bar";
  /** Text content; defaults to "20k". */
  text1?: string;
  /** Text content; defaults to "15k". */
  text2?: string;
  /** Text content; defaults to "10k". */
  text3?: string;
  /** Text content; defaults to "0". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const StackedBarChartBudgetOverview: React.FC<StackedBarChartBudgetOverviewProps>;
export default StackedBarChartBudgetOverview;
