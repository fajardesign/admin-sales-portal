import * as React from 'react';
export interface DigitInputProps { length?: number;
  value?: string;
  onChange?: (v: string) => void;
  error?: boolean;
  disabled?: boolean;
  width?: number;
  style?: React.CSSProperties; }
export declare function DigitInput(props: DigitInputProps): React.ReactElement | null;
export interface InlineInputProps { value?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: string | React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange?: (v: string) => void;
  /** Called with the current value when the check button or Enter is pressed. */
  onSave?: (v: string) => void;
  /** Called with the restored value when the close button or Escape is pressed (value reverts to what it was on focus). */
  onCancel?: (v: string) => void;
  style?: React.CSSProperties; }
export declare function InlineInput(props: InlineInputProps): React.ReactElement | null;
export default DigitInput;
