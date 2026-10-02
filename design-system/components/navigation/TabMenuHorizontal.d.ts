import * as React from 'react';
export interface TabMenuHorizontalProps { items?: { label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }[];
  value?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties; }
export declare function TabMenuHorizontal(props: TabMenuHorizontalProps): React.ReactElement | null;
export interface TabMenuVerticalProps { items?: { label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }[];
  value?: string;
  onChange?: (v: string) => void;
  title?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function TabMenuVertical(props: TabMenuVerticalProps): React.ReactElement | null;
export interface SegmentedControlProps { items?: { label?: React.ReactNode;
  value?: string;
  icon?: string;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties; }
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement | null;
export default TabMenuHorizontal;
