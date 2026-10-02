import * as React from 'react';
export interface FieldProps { label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function Field(props: FieldProps): React.ReactElement | null;
export interface LabelProps { children?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  style?: React.CSSProperties; }
export declare function Label(props: LabelProps): React.ReactElement | null;
export interface HintTextProps { children?: React.ReactNode;
  state?: "default" | "error" | "disabled";
  icon?: boolean;
  style?: React.CSSProperties; }
export declare function HintText(props: HintTextProps): React.ReactElement | null;
export interface CharacterCounterProps { count?: number;
  max?: number;
  disabled?: boolean;
  style?: React.CSSProperties; }
export declare function CharacterCounter(props: CharacterCounterProps): React.ReactElement | null;
export default Field;
