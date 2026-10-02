import * as React from 'react';
export interface HorizonProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "original" | "black" | "white";
}
export declare const Horizon: React.FC<HorizonProps>;
export default Horizon;
