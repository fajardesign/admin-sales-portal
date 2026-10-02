import * as React from 'react';
export interface TextAreaProps { label?: React.ReactNode;
  required?: boolean;
  sublabel?: React.ReactNode;
  hint?: React.ReactNode;
  error?: boolean | string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  rows?: number;
  onChange?: (v: string) => void;
  style?: React.CSSProperties; }
export declare function TextArea(props: TextAreaProps): React.ReactElement | null;
export default TextArea;
