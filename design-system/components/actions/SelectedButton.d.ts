import * as React from 'react';
export interface SelectedButtonProps { children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function SelectedButton(props: SelectedButtonProps): React.ReactElement | null;
export default SelectedButton;
