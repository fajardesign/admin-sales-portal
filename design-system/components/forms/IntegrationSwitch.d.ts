import * as React from 'react';
export interface IntegrationSwitchProps { logo?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (v: boolean) => void;
  layout?: "horizontal" | "vertical";
  variant?: "card" | "list";
  action?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function IntegrationSwitch(props: IntegrationSwitchProps): React.ReactElement | null;
export default IntegrationSwitch;
