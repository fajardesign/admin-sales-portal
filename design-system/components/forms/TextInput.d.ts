import * as React from 'react';
/**
 * @startingPoint section="Forms" subtitle="Labeled text input with icon, hint and error" viewport="700x260"
 */
export interface TextInputProps { label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  info?: boolean;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  leftIcon?: string | React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  rightIcon?: string | React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties; }
export declare function TextInput(props: TextInputProps): React.ReactElement | null;
export interface TagInputProps { label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  placeholder?: string;
  tags?: string[];
  onChange?: (tags: string[]) => void;
  style?: React.CSSProperties; }
export declare function TagInput(props: TagInputProps): React.ReactElement | null;
export interface CounterInputProps { label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  size?: "md" | "sm" | "xs";
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (n: number) => void;
  style?: React.CSSProperties; }
export declare function CounterInput(props: CounterInputProps): React.ReactElement | null;
export default TextInput;
