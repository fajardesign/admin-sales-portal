import * as React from 'react';
export interface SeparatorPageProps {
  className?: string;
  style?: React.CSSProperties;
  editText?: string;
  type?: "primary" | "important";
  /** Text content; defaults to "[1.1]". */
  text1?: string;
}
export declare const SeparatorPage: React.FC<SeparatorPageProps>;
export default SeparatorPage;
