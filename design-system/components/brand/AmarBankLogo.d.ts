import * as React from 'react';
export interface AmarBankLogoProps { lockup?: "horizontal" | "vertical" | "mark" | "bisnis-horizontal" | "bisnis-vertical"; color?: "color" | "white" | "black" | "default"; height?: number; title?: string; style?: React.CSSProperties; }
export declare function AmarBankLogo(props: AmarBankLogoProps): React.ReactElement;
export declare function AmarBankHorizontal(props: Omit<AmarBankLogoProps, "lockup">): React.ReactElement;
export declare function AmarBankVertical(props: Omit<AmarBankLogoProps, "lockup">): React.ReactElement;
export declare function AmarBankWithoutTitle(props: Omit<AmarBankLogoProps, "lockup">): React.ReactElement;
export declare function AmarBankBisnisHorizontal(props: Omit<AmarBankLogoProps, "lockup">): React.ReactElement;
export declare function AmarBankBisnisVertical(props: Omit<AmarBankLogoProps, "lockup">): React.ReactElement;
export default AmarBankLogo;
