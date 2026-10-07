import * as React from 'react';
export interface ModalProps { open?: boolean;
  onClose?: () => void;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function Modal(props: ModalProps): React.ReactElement | null;
export interface ModalHeaderProps { title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: string | React.ReactNode;
  status?: "error" | "warning" | "success" | "information";
  size?: "md" | "sm";
  onClose?: () => void;
  style?: React.CSSProperties; }
export declare function ModalHeader(props: ModalHeaderProps): React.ReactElement | null;
export interface ModalFooterProps { left?: React.ReactNode;
  children?: React.ReactNode;
  stretch?: boolean;
  style?: React.CSSProperties; }
export declare function ModalFooter(props: ModalFooterProps): React.ReactElement | null;
export interface StatusModalProps { status?: "error" | "warning" | "success" | "information";
  title?: React.ReactNode;
  children?: React.ReactNode;
  alignment?: "horizontal" | "vertical";
  actions?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function StatusModal(props: StatusModalProps): React.ReactElement | null;
export default Modal;
