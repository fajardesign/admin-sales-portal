import * as React from 'react';
export interface ChartLegendProps { color?: string;
  children?: React.ReactNode;
  size?: "sm" | "lg";
  disabled?: boolean;
  style?: React.CSSProperties; }
export declare function ChartLegend(props: ChartLegendProps): React.ReactElement | null;
export interface ChartLegendDotProps { color?: string;
  disabled?: boolean; }
export declare function ChartLegendDot(props: ChartLegendDotProps): React.ReactElement | null;
export default ChartLegend;
