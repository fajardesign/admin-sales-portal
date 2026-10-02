import * as React from 'react';
export interface HeroDocumentationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "hero" | "spotlight";
  editText?: string;
  /** Text content; defaults to "Overview". */
  text1?: string;
  /** Text content; defaults to "Description". */
  text2?: string;
  /** Text content; defaults to "The Color Palette is a fundamental aspect of our design system that empowers you to create visually captivating and harmonious interfaces. It serves as the foundation for consistent color usage throughout your designs, ensuring a coherent and appealing visual identity.\n\nAdditionally, the Color Palette enables you to streamline your design workflow by offering pre-defined color tokens that carry specific meanings and roles. This standardized approach simplifies the process of selecting and applying colors, fostering consistency and reducing the risk of color-related inconsistencies.". */
  text3?: string;
  /** Text content; defaults to "Guide & Best Practices". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const HeroDocumentation: React.FC<HeroDocumentationProps>;
export default HeroDocumentation;
