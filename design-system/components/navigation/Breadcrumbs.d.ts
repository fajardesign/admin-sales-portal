import * as React from 'react';
export interface BreadcrumbsProps { items?: { label: React.ReactNode;
  icon?: string;
  href?: string;
  onClick?: () => void }[];
  divider?: "arrow" | "slash" | "dot";
  style?: React.CSSProperties; }
export declare function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement | null;
export default Breadcrumbs;
