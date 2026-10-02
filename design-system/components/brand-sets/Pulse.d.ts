import * as React from 'react';
export interface PulseProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "original" | "black" | "white";
}
export declare const Pulse: React.FC<PulseProps>;
export default Pulse;
