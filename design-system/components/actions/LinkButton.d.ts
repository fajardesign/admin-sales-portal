import * as React from 'react';
export interface LinkButtonProps { children?: React.ReactNode;
  /** Figma ships primary only; gray / black / error are local-only tones. */
  tone?: "primary" | "gray" | "black" | "error";
  /** md = Label/Small 16/24, sm = Label/X Small 12/16. */
  size?: "md" | "sm";
  /** Force underline. Without it, sm underlines on hover/keyboard focus; md never does. */
  underline?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function LinkButton(props: LinkButtonProps): React.ReactElement | null;
export default LinkButton;
