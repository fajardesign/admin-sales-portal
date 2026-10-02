import * as React from 'react';
export interface RatingProps { value?: number;
  max?: number;
  type?: "star" | "heart";
  size?: number;
  onChange?: (v: number) => void;
  showValue?: boolean;
  reviews?: number;
  style?: React.CSSProperties; }
export declare function Rating(props: RatingProps): React.ReactElement | null;
export interface RatingCellProps { type?: "star" | "heart";
  selected?: boolean;
  onClick?: () => void; }
export declare function RatingCell(props: RatingCellProps): React.ReactElement | null;
export interface RatingBarProps { items?: React.ReactNode[];
  value?: number;
  onChange?: (i: number) => void;
  style?: React.CSSProperties; }
export declare function RatingBar(props: RatingBarProps): React.ReactElement | null;
export default Rating;
