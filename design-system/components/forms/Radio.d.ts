import * as React from 'react';
export interface RadioProps { checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function Radio(props: RadioProps): React.ReactElement | null;
export interface RadioLabelProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function RadioLabel(props: RadioLabelProps): React.ReactElement | null;
export interface RadioGroupProps { options?: { label: React.ReactNode;
  value?: string;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean }[];
  value?: string;
  onChange?: (v: string) => void;
  gap?: number;
  style?: React.CSSProperties; }
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement | null;
export default Radio;
