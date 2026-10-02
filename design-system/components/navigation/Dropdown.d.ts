import * as React from 'react';
export interface DropdownProps { children?: React.ReactNode;
  width?: number;
  search?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function Dropdown(props: DropdownProps): React.ReactElement | null;
export interface DropdownItemProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: string | React.ReactNode;
  media?: React.ReactNode;
  trailing?: React.ReactNode;
  checkbox?: boolean;
  selected?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
  onClick?: () => void; }
export declare function DropdownItem(props: DropdownItemProps): React.ReactElement | null;
export interface DropdownSearchProps { value?: string;
  onChange?: (v: string) => void;
  placeholder?: string; }
export declare function DropdownSearch(props: DropdownSearchProps): React.ReactElement | null;
export interface DropdownGroupLabelProps { children?: React.ReactNode; }
export declare function DropdownGroupLabel(props: DropdownGroupLabelProps): React.ReactElement | null;
export default Dropdown;
