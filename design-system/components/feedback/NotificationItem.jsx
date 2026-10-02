import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Avatar } from '../display/Avatar.jsx';
import { FileFormatIcon } from '../forms/FileUploadArea.jsx';

/** Notifications Items [1.1] — avatar + title + time; optional message bubble, file, or action buttons. Unread shows a primary dot. */
export function NotificationItem({ avatar, title, time, unread = false, message, file, actions, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', gap: 15, padding: 12, borderRadius: 12, background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', ...style }}>
      <Avatar size={40} {...avatar} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{time}</span>
        </div>
        {message && <div style={{ padding: '8px 12px', borderRadius: '4px 8px 10px 8px', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke)', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{message}</div>}
        {file && <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderRadius: 8, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke)' }}><FileFormatIcon format={file.format || 'PDF'} size={32} /><span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{file.name}</span><span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{file.size}</span></span></div>}
        {actions && <div style={{ display: 'flex', gap: 10 }}>{actions}</div>}
      </div>
      {unread && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary-base)', marginTop: 6, flexShrink: 0 }} />}
    </div>
  );
}

/** Activity Feed [1.1] item — timeline row: medallion/avatar, title, time, optional body (comment / file / status). Draws the connector line unless last. */
export function ActivityFeedItem({ avatar, icon = 'FlashlightLine', title, time, children, last = false, style }) {
  return (
    <div style={{ display: 'flex', gap: 16, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {avatar ? <Avatar size={32} {...avatar} /> : <span style={{ width: 32, height: 32, borderRadius: 96, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), 0 0 0 4px var(--stroke-white-0)', color: 'var(--icon-sub-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={16} /></span>}
        {!last && <span style={{ flex: 1, width: 1, background: 'var(--stroke-soft-200)', marginTop: 4, minHeight: 16 }} />}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: last ? 0 : 20, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, paddingTop: 6 }}>
          <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)', whiteSpace: 'nowrap' }}>{time}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** Activity Feed Selected Filter [1.1] — filter chip with leading icon. */
export function ActivityFeedFilter({ children, icon = 'FileList2Line', active = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 8, border: 'none', cursor: 'pointer', background: active ? 'var(--primary-alpha-10)' : hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: active || hover ? 'none' : 'var(--shadow-stroke)', color: active ? 'var(--primary-base)' : 'var(--text-sub-600)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)' }}>
      <span style={{ color: active ? 'var(--primary-base)' : 'var(--icon-soft-400)', display: 'flex' }}><Icon name={icon} size={18} /></span>{children}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const ActivityFeed11 = ActivityFeedItem;
export const ActivityFeedCommentItems11 = ActivityFeedItem;
export const ActivityFeedFileItems11 = ActivityFeedItem;
export const ActivityFeedTaskStatusItems11 = ActivityFeedItem;
export const ActivityFeedSelectedFilter11 = ActivityFeedFilter;
export const NotificationsItems11 = NotificationItem;
export default NotificationItem;
