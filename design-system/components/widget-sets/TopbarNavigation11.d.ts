import * as React from 'react';
export interface TopbarNavigation11Props {
  className?: string;
  style?: React.CSSProperties;
  quick?: boolean;
  search?: boolean;
  type?: "default" | "with icon";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TopbarNavigation11: React.FC<TopbarNavigation11Props>;
export default TopbarNavigation11;
