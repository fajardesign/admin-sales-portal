import * as React from 'react';
export interface BadgeProps { children?: React.ReactNode;
  color?: "gray" | "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "pink" | "teal" | "sky";
  type?: "basic" | "dot" | "number";
  size?: "sm" | "md";
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  disabled?: boolean;
  /** @deprecated ignored — sm is always Subheading/2X Small uppercase, md Label/X Small. */
  uppercase?: boolean;
  style?: React.CSSProperties; }
export declare function Badge(props: BadgeProps): React.ReactElement | null;
export interface StatusBadgeProps { children?: React.ReactNode;
  status?: "completed" | "failed" | "pending" | "information" | "disabled";
  dot?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement | null;
export default Badge;
