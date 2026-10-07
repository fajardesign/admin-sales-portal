import * as React from 'react';
export interface NotificationItemProps { avatar?: { src?: string;
  name?: string };
  title?: React.ReactNode;
  time?: React.ReactNode;
  description?: React.ReactNode;
  unread?: boolean;
  message?: React.ReactNode;
  file?: { name: string;
  size?: string;
  /** @deprecated Figma uses the attachment-2 icon; ignored. */
  format?: string };
  actions?: React.ReactNode;
  onMore?: () => void;
  style?: React.CSSProperties; }
export declare function NotificationItem(props: NotificationItemProps): React.ReactElement | null;
export interface NotificationsTabMenuItem { label: React.ReactNode;
  value?: string;
  icon?: string;
  badge?: React.ReactNode }
export interface NotificationsTabMenuProps { items?: NotificationsTabMenuItem[];
  secondaryItems?: NotificationsTabMenuItem[];
  value?: string;
  onChange?: (v: string) => void;
  actionIcon?: string;
  onAction?: () => void;
  actionLabel?: string;
  style?: React.CSSProperties; }
export declare function NotificationsTabMenu(props: NotificationsTabMenuProps): React.ReactElement | null;
export interface ActivityFeedFileItemProps { name?: React.ReactNode;
  size?: React.ReactNode;
  onDownload?: () => void;
  style?: React.CSSProperties; }
export declare function ActivityFeedFileItem(props: ActivityFeedFileItemProps): React.ReactElement | null;
export interface ActivityFeedCommentItemProps { children?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  style?: React.CSSProperties; }
export declare function ActivityFeedCommentItem(props: ActivityFeedCommentItemProps): React.ReactElement | null;
export type ActivityFeedTaskStatus = 'success' | 'warning' | 'pending' | 'error';
export interface ActivityFeedTaskStatusItemProps { status?: ActivityFeedTaskStatus;
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function ActivityFeedTaskStatusItem(props: ActivityFeedTaskStatusItemProps): React.ReactElement | null;
export interface ActivityFeedItemProps { avatar?: { src?: string;
  name?: string };
  icon?: string;
  actor?: React.ReactNode;
  title?: React.ReactNode;
  target?: React.ReactNode;
  time?: React.ReactNode;
  files?: ActivityFeedFileItemProps[];
  comment?: React.ReactNode | ActivityFeedCommentItemProps;
  avatars?: { src?: string;
  name?: string }[];
  avatarCount?: number;
  tasks?: { status?: ActivityFeedTaskStatus;
  label?: React.ReactNode }[];
  onMore?: () => void;
  children?: React.ReactNode;
  last?: boolean;
  style?: React.CSSProperties; }
export declare function ActivityFeedItem(props: ActivityFeedItemProps): React.ReactElement | null;
export interface ActivityFeedFilterProps { children?: React.ReactNode;
  icon?: string;
  active?: boolean;
  onClick?: () => void; }
export declare function ActivityFeedFilter(props: ActivityFeedFilterProps): React.ReactElement | null;
export default NotificationItem;
