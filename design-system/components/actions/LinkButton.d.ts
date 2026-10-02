import * as React from 'react';
export interface LinkButtonProps { children?: React.ReactNode;
  tone?: "primary" | "gray" | "black" | "error";
  size?: "md" | "sm";
  underline?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function LinkButton(props: LinkButtonProps): React.ReactElement | null;
export default LinkButton;
