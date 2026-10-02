import * as React from 'react';
export interface EmployeeSpotlightTabsEmployeeSpotlightProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "overview" | "comments" | "rewards";
  /** Text content; defaults to "Matthew Johnson". */
  text1?: string;
  /** Text content; defaults to "Software Engineer". */
  text2?: string;
  /** Text content; defaults to "Top-performing employee of January!". */
  text3?: string;
  /** Text content; defaults to "Keep up the amazing work! 🤗". */
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
export declare const EmployeeSpotlightTabsEmployeeSpotlight: React.FC<EmployeeSpotlightTabsEmployeeSpotlightProps>;
export default EmployeeSpotlightTabsEmployeeSpotlight;
