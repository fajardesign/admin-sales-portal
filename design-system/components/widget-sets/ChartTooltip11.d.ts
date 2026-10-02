import * as React from 'react';
export interface ChartTooltip11Props {
  className?: string;
  style?: React.CSSProperties;
  editText?: string;
  alignment?: "right" | "bottom" | "top" | "left";
  /** Text content; defaults to "Thu, Jan 8". */
  text1?: string;
}
export declare const ChartTooltip11: React.FC<ChartTooltip11Props>;
export default ChartTooltip11;
