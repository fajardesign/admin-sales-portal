import * as React from 'react';
export interface PaginationProps { page?: number;
  total?: number;
  onChange?: (p: number) => void;
  showSummary?: boolean;
  fullRadius?: boolean;
  style?: React.CSSProperties; }
export declare function Pagination(props: PaginationProps): React.ReactElement | null;
export interface PaginationCellProps { children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  fullRadius?: boolean;
  onClick?: () => void; }
export declare function PaginationCell(props: PaginationCellProps): React.ReactElement | null;
export default Pagination;
