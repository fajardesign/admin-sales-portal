import * as React from 'react';
export interface DrawerProps { open?: boolean;
  onClose?: () => void;
  width?: number;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function Drawer(props: DrawerProps): React.ReactElement | null;
export interface DrawerHeaderProps { title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  badge?: React.ReactNode;
  size?: "sm" | "lg";
  onClose?: () => void;
  style?: React.CSSProperties; }
export declare function DrawerHeader(props: DrawerHeaderProps): React.ReactElement | null;
export interface DrawerFooterProps { left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties; }
export declare function DrawerFooter(props: DrawerFooterProps): React.ReactElement | null;
export default Drawer;
