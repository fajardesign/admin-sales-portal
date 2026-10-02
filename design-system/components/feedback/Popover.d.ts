import * as React from 'react';
export interface PopoverProps { trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (o: boolean) => void;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
  width?: number;
  media?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function Popover(props: PopoverProps): React.ReactElement | null;
export interface PopoverFooterProps { type?: "stretch" | "text-stepper" | "stepper";
  step?: number;
  steps?: number;
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function PopoverFooter(props: PopoverFooterProps): React.ReactElement | null;
export default Popover;
