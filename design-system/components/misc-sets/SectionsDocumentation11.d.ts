import * as React from 'react';
export interface SectionsDocumentation11Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "default";
  docs?: boolean;
  links?: boolean;
  editSubheading?: string;
  editTitle?: string;
  pickBrand?: React.ReactNode;
  editDescription?: string;
  /** Text content; defaults to "www.alignui.com". */
  text1?: string;
  /** Text content; defaults to "Email". */
  text2?: string;
  /** Text content; defaults to "hi@alignui.com". */
  text3?: string;
  /** Text content; defaults to "BUY FROM". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const SectionsDocumentation11: React.FC<SectionsDocumentation11Props>;
export default SectionsDocumentation11;
