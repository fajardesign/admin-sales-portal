import * as React from 'react';
export interface CommandMenuProps { groups?: { title: string;
  items: { title: React.ReactNode;
  icon?: string;
  media?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md" }[] }[];
  query?: string;
  onQueryChange?: (q: string) => void;
  placeholder?: string;
  onSelect?: (item: any) => void;
  style?: React.CSSProperties; }
export declare function CommandMenu(props: CommandMenuProps): React.ReactElement | null;
export interface CommandMenuItemProps { icon?: string;
  media?: React.ReactNode;
  title?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  size?: "sm" | "md";
  active?: boolean;
  onClick?: () => void; }
export declare function CommandMenuItem(props: CommandMenuItemProps): React.ReactElement | null;
export default CommandMenu;
