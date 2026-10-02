import * as React from 'react';
export interface TransactionDetailTabsRecentTransactionsProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "incoming" | "outgoing" | "pending";
}
export declare const TransactionDetailTabsRecentTransactions: React.FC<TransactionDetailTabsRecentTransactionsProps>;
export default TransactionDetailTabsRecentTransactions;
