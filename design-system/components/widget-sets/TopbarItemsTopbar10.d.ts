import * as React from 'react';
export interface TopbarItemsTopbar10Props {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  state?: "default" | "hover" | "active";
  pickLeft?: React.ReactNode;
  pickRight?: React.ReactNode;
  rightIcon?: boolean;
  badge?: boolean;
  notification?: boolean;
  editText?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TopbarItemsTopbar10: React.FC<TopbarItemsTopbar10Props>;
export default TopbarItemsTopbar10;
