import * as React from 'react';
export interface ButtonGroupProps { items?: { label?: React.ReactNode;
  value?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  size?: "sm" | "xs" | "2xs";
  style?: React.CSSProperties; }
export declare function ButtonGroup(props: ButtonGroupProps): React.ReactElement | null;
export interface ButtonGroupItemProps { children?: React.ReactNode;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  size?: "sm" | "xs" | "2xs";
  first?: boolean;
  last?: boolean;
  onClick?: () => void; }
export declare function ButtonGroupItem(props: ButtonGroupItemProps): React.ReactElement | null;
export default ButtonGroup;
