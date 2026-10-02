import * as React from 'react';
export interface AvatarProps { src?: string;
  name?: string;
  size?: 20 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
  color?: number;
  status?: "online" | "offline" | "busy" | "away";
  badge?: "verified" | "pin" | "favorite" | "add" | "remove" | "notification";
  icon?: boolean;
  style?: React.CSSProperties; }
export declare function Avatar(props: AvatarProps): React.ReactElement | null;
export interface AvatarStatusProps { status?: "online" | "offline" | "busy" | "away";
  size?: number; }
export declare function AvatarStatus(props: AvatarStatusProps): React.ReactElement | null;
export interface AvatarBadgeProps { type?: "verified" | "pin" | "favorite" | "add" | "remove" | "notification";
  size?: number; }
export declare function AvatarBadge(props: AvatarBadgeProps): React.ReactElement | null;
export interface AvatarGroupProps { avatars?: { src?: string;
  name?: string }[];
  size?: number;
  max?: number;
  style?: React.CSSProperties; }
export declare function AvatarGroup(props: AvatarGroupProps): React.ReactElement | null;
export interface CompactAvatarGroupProps { avatars?: { src?: string;
  name?: string }[];
  count?: number;
  size?: 24 | 32 | 40;
  variant?: "default" | "stroke";
  style?: React.CSSProperties; }
export declare function CompactAvatarGroup(props: CompactAvatarGroupProps): React.ReactElement | null;
export default Avatar;
