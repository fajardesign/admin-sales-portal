import * as React from 'react';
export interface AppStoreBadges11Props {
  className?: string;
  style?: React.CSSProperties;
  company?: "app store" | "mac app store" | "amazon appstore" | "galaxy store" | "huawei appgallery" | "f-droid" | "google play store" | "microsoft store";
  style2?: "preferred" | "alternative";
}
export declare const AppStoreBadges11: React.FC<AppStoreBadges11Props>;
export default AppStoreBadges11;
