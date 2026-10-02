import * as React from 'react';
export interface TimerTimeTracker11Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "ongoing";
  /** Text content; defaults to "Awaiting". */
  text1?: string;
  /** Text content; defaults to "00:00:00". */
  text2?: string;
}
export declare const TimerTimeTracker11: React.FC<TimerTimeTracker11Props>;
export default TimerTimeTracker11;
