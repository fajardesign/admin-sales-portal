import * as React from 'react';
export interface HeaderCardSidebar11Props {
  className?: string;
  style?: React.CSSProperties;
  dropdown?: boolean;
  editBrand?: string;
  state?: "default" | "hover";
  onlyIcon?: "off" | "on";
  editDescription?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeaderCardSidebar11: React.FC<HeaderCardSidebar11Props>;
export default HeaderCardSidebar11;
