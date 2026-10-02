import * as React from 'react';
export interface MyContactsQuickTransfer1Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "selected";
  /** Text content; defaults to "Natalia". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const MyContactsQuickTransfer1: React.FC<MyContactsQuickTransfer1Props>;
export default MyContactsQuickTransfer1;
