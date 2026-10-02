import * as React from 'react';
export interface TransactionIllustrationProps { property1?: "transaction-success" | "transaction-pending" | "transaction-failed";
  style?: React.CSSProperties;
  className?: string; }
export declare function TransactionIllustration(props: TransactionIllustrationProps): React.ReactElement | null;
export default TransactionIllustration;
