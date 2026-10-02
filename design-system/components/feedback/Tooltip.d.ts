import * as React from 'react';
export interface TooltipProps { content?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  size?: "2xs" | "xs" | "lg";
  dark?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  style?: React.CSSProperties; }
export declare function Tooltip(props: TooltipProps): React.ReactElement | null;
export default Tooltip;
