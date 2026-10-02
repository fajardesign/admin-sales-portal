import * as React from 'react';
export interface FABProps { icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
  style?: React.CSSProperties; }
export declare function FAB(props: FABProps): React.ReactElement | null;
export default FAB;
