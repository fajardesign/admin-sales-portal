import * as React from 'react';
export interface CompactButtonProps { icon: React.ReactNode;
  variant?: "stroke" | "ghost" | "white" | "modifiable";
  size?: "lg" | "md";
  fullRadius?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  style?: React.CSSProperties; }
export declare function CompactButton(props: CompactButtonProps): React.ReactElement | null;
export default CompactButton;
