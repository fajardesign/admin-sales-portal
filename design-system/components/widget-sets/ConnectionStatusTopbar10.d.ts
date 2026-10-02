import * as React from 'react';
export interface ConnectionStatusTopbar10Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "active" | "disconnect";
  name?: boolean;
  editName?: string;
  verified?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const ConnectionStatusTopbar10: React.FC<ConnectionStatusTopbar10Props>;
export default ConnectionStatusTopbar10;
