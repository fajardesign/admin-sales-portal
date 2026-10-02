import * as React from 'react';
export interface ColorPicker11Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Hex". */
  text1?: string;
  /** Text content; defaults to "335CFF". */
  text2?: string;
  /** Text content; defaults to "100%". */
  text3?: string;
  /** Text content; defaults to "Recommended Colors". */
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
export declare const ColorPicker11: React.FC<ColorPicker11Props>;
export default ColorPicker11;
