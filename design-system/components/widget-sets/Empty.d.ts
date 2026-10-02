import * as React from 'react';
export interface EmptyProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "empty";
}
export declare const Empty: React.FC<EmptyProps>;
export default Empty;
