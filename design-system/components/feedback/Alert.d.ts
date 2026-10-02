import * as React from 'react';
export interface AlertProps { status?: "error" | "warning" | "success" | "information" | "feature";
  size?: "sm" | "lg";
  title?: React.ReactNode;
  children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  secondaryLabel?: React.ReactNode;
  onSecondary?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties; }
export declare function Alert(props: AlertProps): React.ReactElement | null;
export interface ToastProps { status?: "error" | "warning" | "success" | "information" | "feature";
  title?: React.ReactNode;
  children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties; }
export declare function Toast(props: ToastProps): React.ReactElement | null;
export default Alert;
