import * as React from 'react';
export interface FancyButtonProps { children?: React.ReactNode;
  type?: "neutral" | "primary" | "error" | "basic";
  size?: "md" | "sm" | "xs";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function FancyButton(props: FancyButtonProps): React.ReactElement | null;
export default FancyButton;
