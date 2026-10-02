import * as React from 'react';
export interface HeaderFooterDocumentationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "header" | "footer";
  /** Text content; defaults to "AlignUI Design System". */
  text1?: string;
  /** Text content; defaults to "www.alignui.com". */
  text2?: string;
}
export declare const HeaderFooterDocumentation: React.FC<HeaderFooterDocumentationProps>;
export default HeaderFooterDocumentation;
