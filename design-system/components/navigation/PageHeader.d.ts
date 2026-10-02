import * as React from 'react';
export interface PageHeaderProps { media?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function PageHeader(props: PageHeaderProps): React.ReactElement | null;
export interface SectionHeaderProps { media?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  divider?: boolean;
  style?: React.CSSProperties; }
export declare function SectionHeader(props: SectionHeaderProps): React.ReactElement | null;
export interface WidgetCardProps { icon?: React.ReactNode;
  title?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  padding?: number;
  style?: React.CSSProperties; }
export declare function WidgetCard(props: WidgetCardProps): React.ReactElement | null;
export default PageHeader;
