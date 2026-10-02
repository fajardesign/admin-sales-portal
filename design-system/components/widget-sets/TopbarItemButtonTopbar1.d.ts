import * as React from 'react';
export interface TopbarItemButtonTopbar1Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  notification?: boolean;
  pickIcon?: React.ReactNode;
}
export declare const TopbarItemButtonTopbar1: React.FC<TopbarItemButtonTopbar1Props>;
export default TopbarItemButtonTopbar1;
