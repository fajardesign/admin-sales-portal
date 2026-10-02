import * as React from 'react';
export interface KeyIconProps { icon?: string | React.ReactNode;
  variant?: "stroke" | "lighter";
  color?: "gray" | "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "pink" | "teal" | "sky" | "primary";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  style?: React.CSSProperties; }
export declare function KeyIcon(props: KeyIconProps): React.ReactElement | null;
export default KeyIcon;
