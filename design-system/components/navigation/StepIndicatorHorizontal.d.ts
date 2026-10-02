import * as React from 'react';
export interface StepIndicatorHorizontalProps { steps?: React.ReactNode[];
  current?: number;
  onStepClick?: (i: number) => void;
  style?: React.CSSProperties; }
export declare function StepIndicatorHorizontal(props: StepIndicatorHorizontalProps): React.ReactElement | null;
export interface StepIndicatorVerticalProps { steps?: React.ReactNode[];
  current?: number;
  title?: React.ReactNode;
  onStepClick?: (i: number) => void;
  style?: React.CSSProperties; }
export declare function StepIndicatorVertical(props: StepIndicatorVerticalProps): React.ReactElement | null;
export default StepIndicatorHorizontal;
