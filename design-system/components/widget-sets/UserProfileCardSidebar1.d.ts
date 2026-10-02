import * as React from 'react';
export interface UserProfileCardSidebar1Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover";
  collapsed?: "off" | "on";
  dropdown?: boolean;
  verified?: boolean;
  editText?: string;
  editDescription?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const UserProfileCardSidebar1: React.FC<UserProfileCardSidebar1Props>;
export default UserProfileCardSidebar1;
