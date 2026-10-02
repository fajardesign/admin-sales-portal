import * as React from 'react';
export interface ProgressBarProps { value?: number;
  color?: "primary" | "red" | "orange" | "green" | string;
  style?: React.CSSProperties; }
export declare function ProgressBar(props: ProgressBarProps): React.ReactElement | null;
export interface ProgressBarLabelProps { title?: React.ReactNode;
  value?: number;
  color?: string;
  position?: "top" | "right";
  hint?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function ProgressBarLabel(props: ProgressBarLabelProps): React.ReactElement | null;
export interface CircularProgressProps { value?: number;
  size?: number;
  color?: string;
  label?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function CircularProgress(props: CircularProgressProps): React.ReactElement | null;
export interface StepperDotProps { count?: number;
  active?: number;
  size?: "sm" | "xs";
  onChange?: (i: number) => void;
  style?: React.CSSProperties; }
export declare function StepperDot(props: StepperDotProps): React.ReactElement | null;
export default ProgressBar;
