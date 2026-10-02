import * as React from 'react';
export interface TransactionItemsRecentTransactions1Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "💳 payment icons" | "👨🏻 avatar" | "🎗️ brand" | "💠 editable icons";
  state?: "default" | "hover";
  editTitle?: string;
  editDescription?: string;
  rightIcon?: boolean;
  pickBrand?: React.ReactNode;
  /** Text content; defaults to "$0.00". */
  text1?: string;
  /** Text content; defaults to "Feb 12". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TransactionItemsRecentTransactions1: React.FC<TransactionItemsRecentTransactions1Props>;
export default TransactionItemsRecentTransactions1;
