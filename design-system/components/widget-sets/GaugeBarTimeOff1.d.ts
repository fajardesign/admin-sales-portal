import * as React from 'react';
export interface GaugeBarTimeOff1Props {
  className?: string;
  style?: React.CSSProperties;
  percentage?: "0%" | "25%" | "50%" | "75%" | "100%";
  /** Text content; defaults to "0". */
  text1?: string;
  /** Text content; defaults to "OUT OF 20". */
  text2?: string;
}
export declare const GaugeBarTimeOff1: React.FC<GaugeBarTimeOff1Props>;
export default GaugeBarTimeOff1;
