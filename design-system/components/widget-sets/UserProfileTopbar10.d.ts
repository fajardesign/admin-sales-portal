import * as React from 'react';
export interface UserProfileTopbar10Props {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active";
  name?: boolean;
  editName?: string;
  verified?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const UserProfileTopbar10: React.FC<UserProfileTopbar10Props>;
export default UserProfileTopbar10;
