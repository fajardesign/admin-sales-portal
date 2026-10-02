import * as React from 'react';
export interface SocialButtonProps { children?: React.ReactNode;
  logo?: React.ReactNode;
  iconOnly?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function SocialButton(props: SocialButtonProps): React.ReactElement | null;
export default SocialButton;
