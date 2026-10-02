import * as React from 'react';
/**
 * @startingPoint section="Navigation" subtitle="272px app sidebar with grouped nav" viewport="300x600"
 */
export interface SidebarProps { logo?: React.ReactNode;
  company?: React.ReactNode;
  sections?: { title?: React.ReactNode;
  items: { label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode;
  chevron?: boolean }[] }[];
  value?: string;
  onChange?: (v: string) => void;
  footer?: React.ReactNode;
  collapsed?: boolean;
  theme?: "light" | "dark";
  style?: React.CSSProperties; }
export declare function Sidebar(props: SidebarProps): React.ReactElement | null;
export interface SidebarItemProps { icon?: string;
  label?: React.ReactNode;
  active?: boolean;
  collapsed?: boolean;
  badge?: React.ReactNode;
  chevron?: boolean;
  theme?: "light" | "dark";
  onClick?: () => void; }
export declare function SidebarItem(props: SidebarItemProps): React.ReactElement | null;
export default Sidebar;
