import * as React from 'react';
export interface FeatureCardsSidebar11Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "daily meeting" | "progress bar" | "icon & link" | "left icon" | "support" | "cloud storage";
  style2?: "stroke" | "gray" | "primary" | "neutral";
  dismissIcon?: boolean;
  /** Text content; defaults to "Daily Meeting". */
  text1?: string;
  /** Text content; defaults to "9:00 AM - 9:30 AM on Zoom". */
  text2?: string;
  /** Text content; defaults to "1.6 GB of 2 GB used". */
  text3?: string;
  /** Text content; defaults to "File Syncing". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const FeatureCardsSidebar11: React.FC<FeatureCardsSidebar11Props>;
export default FeatureCardsSidebar11;
