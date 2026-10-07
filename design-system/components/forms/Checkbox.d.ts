import * as React from 'react';
export interface CheckboxProps { checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function Checkbox(props: CheckboxProps): React.ReactElement | null;
export interface CheckboxLabelProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function CheckboxLabel(props: CheckboxLabelProps): React.ReactElement | null;
export interface ChoiceTextProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  descriptionSize?: "sm" | "xs";
  disabled?: boolean;
  onClick?: () => void; }
export declare function ChoiceText(props: ChoiceTextProps): React.ReactElement | null;
export default Checkbox;
