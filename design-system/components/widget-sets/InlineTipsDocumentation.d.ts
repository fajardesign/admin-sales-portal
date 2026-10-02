import * as React from 'react';
export interface InlineTipsDocumentationProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "gray" | "red" | "orange" | "yellow" | "green" | "blue" | "purple";
  editText?: string;
}
export declare const InlineTipsDocumentation: React.FC<InlineTipsDocumentationProps>;
export default InlineTipsDocumentation;
