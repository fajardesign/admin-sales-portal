import * as React from 'react';
/**
 * @startingPoint section="Data" subtitle="Sortable data table with header cells" viewport="700x300"
 */
export interface TableProps { columns?: { key: string;
  header: React.ReactNode;
  render?: (row: any) => React.ReactNode;
  align?: "left" | "right" | "center";
  width?: number | string;
  sortable?: boolean }[];
  rows?: any[];
  size?: "lg" | "xl";
  onRowClick?: (row: any) => void;
  style?: React.CSSProperties; }
export declare function Table(props: TableProps): React.ReactElement | null;
export interface TableHeaderCellProps { children?: React.ReactNode;
  sort?: "none" | "asc" | "desc";
  onSort?: () => void;
  align?: string;
  width?: number | string;
  first?: boolean;
  last?: boolean;
  style?: React.CSSProperties; }
export declare function TableHeaderCell(props: TableHeaderCellProps): React.ReactElement | null;
export interface TableRowCellProps { children?: React.ReactNode;
  size?: "lg" | "xl";
  align?: string;
  style?: React.CSSProperties; }
export declare function TableRowCell(props: TableRowCellProps): React.ReactElement | null;
export interface SortingIconProps { dir?: "none" | "asc" | "desc"; }
export declare function SortingIcon(props: SortingIconProps): React.ReactElement | null;
export default Table;
