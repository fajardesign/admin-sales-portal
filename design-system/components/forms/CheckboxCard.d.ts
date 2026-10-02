import * as React from 'react';
export interface CheckboxCardProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function CheckboxCard(props: CheckboxCardProps): React.ReactElement | null;
export interface RadioCardProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function RadioCard(props: RadioCardProps): React.ReactElement | null;
export interface SwitchCardProps { label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  media?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  width?: number | string;
  onChange?: (v: boolean) => void;
  style?: React.CSSProperties; }
export declare function SwitchCard(props: SwitchCardProps): React.ReactElement | null;
export default CheckboxCard;
