import * as React from 'react';
export interface ColorDotsProps { colors?: string[];
  value?: string;
  onChange?: (c: string) => void;
  style?: React.CSSProperties; }
export declare function ColorDots(props: ColorDotsProps): React.ReactElement | null;
export interface ColorDotProps { color?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void; }
export declare function ColorDot(props: ColorDotProps): React.ReactElement | null;
export default ColorDots;
