import * as React from 'react';
export interface SwitchProps { checked?: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function Switch(props: SwitchProps): React.ReactElement | null;
export interface SwitchLabelProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  flip?: boolean;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function SwitchLabel(props: SwitchLabelProps): React.ReactElement | null;
export default Switch;
