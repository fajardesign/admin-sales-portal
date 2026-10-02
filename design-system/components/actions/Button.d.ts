import * as React from 'react';
/**
 * @startingPoint section="Actions" subtitle="Primary/secondary/destructive button in 4 sizes" viewport="700x200"
 */
export interface ButtonProps { children?: React.ReactNode;
  variant?: "filled" | "stroke" | "lighter" | "ghost";
  tone?: "primary" | "neutral" | "error";
  size?: "md" | "sm" | "xs" | "2xs";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: (e: any) => void;
  style?: React.CSSProperties; }
export declare function Button(props: ButtonProps): React.ReactElement | null;
export default Button;
