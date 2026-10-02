import * as React from 'react';
export interface PasswordStrengthProps { password?: string;
  rules?: { label: string;
  test: (s: string) => boolean }[];
  style?: React.CSSProperties; }
export declare function PasswordStrength(props: PasswordStrengthProps): React.ReactElement | null;
export default PasswordStrength;
