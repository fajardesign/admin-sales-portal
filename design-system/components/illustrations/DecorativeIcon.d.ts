import * as React from 'react';
export interface DecorativeIconProps { type?: "water" | "gas" | "electricity" | "donate" | "internet" | "phone" | "rent" | "tax";
  style?: React.CSSProperties;
  className?: string; }
export declare function DecorativeIcon(props: DecorativeIconProps): React.ReactElement | null;
export default DecorativeIcon;
