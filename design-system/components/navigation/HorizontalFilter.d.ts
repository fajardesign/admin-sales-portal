import * as React from 'react';
export interface HorizontalFilterProps { left?: React.ReactNode;
  search?: React.ReactNode;
  right?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function HorizontalFilter(props: HorizontalFilterProps): React.ReactElement | null;
export interface VerticalFilterItemProps { icon?: string;
  label?: React.ReactNode;
  value?: React.ReactNode;
  active?: boolean;
  onClick?: () => void; }
export declare function VerticalFilterItem(props: VerticalFilterItemProps): React.ReactElement | null;
export interface ScrollAreaProps { children?: React.ReactNode;
  height?: number | string;
  style?: React.CSSProperties; }
export declare function ScrollArea(props: ScrollAreaProps): React.ReactElement | null;
export default HorizontalFilter;
