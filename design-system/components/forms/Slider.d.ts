import * as React from 'react';
export interface SliderProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  value?: number;
  defaultValue?: number;
  onChange?: (v: number) => void;
  format?: (v: number) => string;
  style?: React.CSSProperties; }
export declare function Slider(props: SliderProps): React.ReactElement | null;
export interface RangeSliderProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (v: [number, number]) => void;
  format?: (a: number, b: number) => string;
  style?: React.CSSProperties; }
export declare function RangeSlider(props: RangeSliderProps): React.ReactElement | null;
export default Slider;
