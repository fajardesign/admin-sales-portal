import * as React from 'react';
export interface BottomSheetProps { open?: boolean;
  onClose?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties; }
export declare function BottomSheet(props: BottomSheetProps): React.ReactElement | null;
export interface BottomSheetHeaderProps { title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string;
  status?: "error" | "warning" | "success" | "information";
  onClose?: () => void;
  style?: React.CSSProperties; }
export declare function BottomSheetHeader(props: BottomSheetHeaderProps): React.ReactElement | null;
export interface BottomSheetFooterProps { left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties; }
export declare function BottomSheetFooter(props: BottomSheetFooterProps): React.ReactElement | null;
export interface StatusBottomSheetProps { status?: "error" | "warning" | "success" | "information" | "feature";
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties; }
export declare function StatusBottomSheet(props: StatusBottomSheetProps): React.ReactElement | null;
export default BottomSheet;
