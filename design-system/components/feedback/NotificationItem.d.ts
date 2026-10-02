import * as React from 'react';
export interface NotificationItemProps { avatar?: { src?: string;
  name?: string };
  title?: React.ReactNode;
  time?: React.ReactNode;
  unread?: boolean;
  message?: React.ReactNode;
  file?: { name: string;
  size?: string;
  format?: string };
  actions?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function NotificationItem(props: NotificationItemProps): React.ReactElement | null;
export interface ActivityFeedItemProps { avatar?: { src?: string;
  name?: string };
  icon?: string;
  title?: React.ReactNode;
  time?: React.ReactNode;
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
