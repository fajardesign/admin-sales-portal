import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Avatar, CompactAvatarGroup } from '../display/Avatar.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';
import { LinkButton } from '../actions/LinkButton.jsx';
import { TabMenuHorizontal } from '../navigation/TabMenuHorizontal.jsx';
import { Badge } from '../display/Badge.jsx';

/* Figma: stroke soft-200 + regular-shadow/x-small (shared by message / file / attachment chips). */
const CHIP = { background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)' };

/** Notifications Items [1.1] — r12, pad 12, gap 15, white → hover weak-50. Avatar 40 + Label/Small strong title + Paragraph/X Small "time ∙ description" (sub-600, dot soft-400).
 * Optional body: message bubble (r 4/8/10/8, pad 8×12, Paragraph/Small sub-600), file chip (r8, pad 8, gap 4, attachment-2 + name + "(size)"), or action buttons (gap 10; content gap 16, else 12).
 * Hover shows a 24 ghost More Compact Button when `onMore` is set. Unread shows a primary dot (local only). */
export function NotificationItem({ avatar, title, time, description, unread = false, message, file, actions, onMore, style }) {
  const [hover, setHover] = React.useState(false);
  const meta = { font: 'var(--paragraph-xs)', letterSpacing: 'var(--paragraph-xs-ls)', color: 'var(--text-sub-600)' };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', gap: 15, padding: 12, borderRadius: 12, background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', ...style }}>
      <Avatar size={40} {...avatar} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: actions && !message && !file ? 16 : 12, minWidth: 0 }}>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          <span style={{ display: 'flex', gap: 4, ...meta }}>
            <span style={{ whiteSpace: 'nowrap' }}>{time}</span>
            {description && <><span style={{ color: 'var(--text-soft-400)' }}>∙</span><span style={{ minWidth: 0 }}>{description}</span></>}
          </span>
        </div>
        {message && <div style={{ padding: '8px 12px', borderRadius: '4px 8px 10px 8px', ...CHIP, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{message}</div>}
        {file && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: 8, borderRadius: 8, ...CHIP }}>
            <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="Attachment2" size={20} /></span>
            <span style={{ display: 'flex', gap: 2, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>
              {file.name}{file.size && <span style={{ color: 'var(--text-soft-400)' }}>({file.size})</span>}
            </span>
          </div>
        )}
        {actions && <div style={{ display: 'flex', gap: 10 }}>{actions}</div>}
      </div>
      {onMore && hover && <span style={{ padding: 8, display: 'flex', alignSelf: 'flex-start' }}><CompactButton variant="ghost" icon={<Icon name="More2Line" />} aria-label="Lainnya" onClick={onMore} /></span>}
      {unread && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary-base)', marginTop: 6, flexShrink: 0 }} />}
    </div>
  );
}

/** Notifications Tab Menu [1.1] — Quantity 02/03/04. Pad 14×20, gap 20, white, bottom stroke soft-200; Tab Menu Horizontal items (Label/Small, 2px primary indicator, optional red number Badge)
 * + optional `secondaryItems` after a 24px vertical divider (Quantity 04) + trailing 24 ghost full-radius Compact Button (Figma filter-3-fill; local Filter3Line). */
export function NotificationsTabMenu({ items = [], secondaryItems, value, onChange, actionIcon = 'Filter3Line', onAction, actionLabel = 'Saring', style }) {
  const tabs = { gap: 20, boxShadow: 'none' };
  /* A number/string badge becomes the red number Badge; a node is passed through. */
  const withBadge = (list) => list.map((it) => (typeof it.badge === 'number' || typeof it.badge === 'string' ? { ...it, badge: <Badge type="number" color="red">{String(it.badge)}</Badge> } : it));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '0 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', ...style }}>
      <TabMenuHorizontal items={withBadge(items)} value={value} onChange={onChange} style={tabs} />
      {secondaryItems && secondaryItems.length > 0 && <>
        <span style={{ width: 1, height: 24, background: 'var(--stroke-soft-200)', flexShrink: 0 }} />
        <TabMenuHorizontal items={withBadge(secondaryItems)} value={value} onChange={onChange} style={tabs} />
      </>}
      {onAction && <CompactButton variant="ghost" fullRadius icon={<Icon name={actionIcon} />} aria-label={actionLabel} onClick={onAction} style={{ marginLeft: 'auto' }} />}
    </div>
  );
}

/** Activity Feed File Items [1.1] — 32h chip, r8, stroke + x-small shadow. Content pad 4/10/4/6, gap 6, right divider: attachment-2 (20, soft-400) + name (Label/Small sub-600) + "(size)" (Paragraph/Small soft-400);
 * 28px download button (download-2-line 18, soft-400; bg white → weak-50 on hover). */
export function ActivityFeedFileItem({ name, size, onDownload, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'inline-flex', alignItems: 'center', height: 32, borderRadius: 8, overflow: 'hidden', ...CHIP, ...style }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, alignSelf: 'stretch', padding: '4px 10px 4px 6px', boxShadow: 'inset -1px 0 0 var(--stroke-soft-200)', minWidth: 0 }}>
        <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="Attachment2" size={20} /></span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-sub-600)' }}>{name}</span>
          {size && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-soft-400)' }}>({size})</span>}
        </span>
      </span>
      <button type="button" aria-label="Unduh" onClick={onDownload} style={{ width: 28, height: 28, padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', color: 'var(--icon-soft-400)' }}>
        <Icon name="Download2Line" size={18} />
      </button>
    </div>
  );
}

/** Activity Feed Comment Items [1.1] — r 4/12/12/12, pad 8/14/8/8, gap 6; white + stroke + x-small shadow → hover weak-50 (no stroke).
 * chat-1-line (20, soft-400) + comment (Label/Small sub-600) + trailing Link Button (md, default "Balas"). */
export function ActivityFeedCommentItem({ children, actionLabel = 'Balas', onAction, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px 8px 8px', borderRadius: '4px 12px 12px 12px', background: hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: hover ? 'var(--shadow-xs)' : 'var(--shadow-stroke-xs)', maxWidth: '100%', ...style }}>
      <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
        <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="Chat1Line" size={20} /></span>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-sub-600)' }}>{children}</span>
      </span>
      {actionLabel && <LinkButton onClick={onAction}>{actionLabel}</LinkButton>}
    </div>
  );
}

const TASK = { success: ['SelectBoxCircleFill', 'var(--state-success-base)'], warning: ['AlertFill', 'var(--state-warning-base)'], pending: ['TimeFill', 'var(--state-away-base)'], error: ['ErrorWarningFill', 'var(--state-error-base)'] };

/** Activity Feed Task Status Items [1.1] — 32h chip, r8, pad 4/10/4/6, gap 6, stroke + x-small shadow; 20px status icon + Label/Small sub-600.
 * status: success (select-box-circle-fill, success) | warning (alert-fill, warning) | pending (time-fill, away) | error (error-warning-fill, error). */
export function ActivityFeedTaskStatusItem({ status = 'success', children, style }) {
  const [icon, color] = TASK[status] || TASK.success;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 32, boxSizing: 'border-box', padding: '4px 10px 4px 6px', borderRadius: 8, ...CHIP, ...style }}>
      <span style={{ color, display: 'flex' }}><Icon name={icon} size={20} /></span>
      <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{children}</span>
    </div>
  );
}

/** Activity Feed [1.1] item — gap 16: avatar/medallion 32 (white 4 ring) + content (gap 8) + optional trailing 20 ghost full-radius More Compact Button (`onMore`).
 * Title row (gap 2): [actor (Label/Small strong) · title (Paragraph/Small sub-600) · target (Label/Small strong), gap 3] "・" (Label/Small disabled-300) time (Paragraph/Small soft-400).
 * Type body from data: `files` (File Items, gap 8) | `comment` (Comment Items) | `avatars` (Compact Avatar Group stroke 24) | `tasks` (Task Status Items, gap 8); `children` still renders.
 * Connector line between rows is local (timeline), hidden when `last`. */
export function ActivityFeedItem({ avatar, icon = 'FlashlightLine', actor, title, target, time, files, comment, avatars, avatarCount, tasks, onMore, children, last = false, style }) {
  const strong = { font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' };
  const para = { font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)' };
  return (
    <div style={{ display: 'flex', gap: 16, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {avatar ? <Avatar size={32} {...avatar} /> : <span style={{ width: 32, height: 32, borderRadius: 96, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), 0 0 0 4px var(--stroke-white-0)', color: 'var(--icon-sub-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={16} /></span>}
        {!last && <span style={{ flex: 1, width: 1, background: 'var(--stroke-soft-200)', marginTop: 4, minHeight: 16 }} />}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 4, paddingBottom: last ? 0 : 20, minWidth: 0 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
          <span style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: 3, minWidth: 0 }}>
            {actor && <span style={strong}>{actor}</span>}
            {title && <span style={{ ...para, color: 'var(--text-sub-600)' }}>{title}</span>}
            {target && <span style={strong}>{target}</span>}
          </span>
          {time && <>
            <span aria-hidden="true" style={{ ...strong, color: 'var(--text-disabled-300)' }}>・</span>
            <span style={{ ...para, color: 'var(--text-soft-400)', whiteSpace: 'nowrap' }}>{time}</span>
          </>}
        </div>
        {files && files.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{files.map((f, i) => <ActivityFeedFileItem key={i} {...f} />)}</div>}
        {comment && <div><ActivityFeedCommentItem {...(typeof comment === 'object' && !React.isValidElement(comment) ? comment : { children: comment })} /></div>}
        {avatars && avatars.length > 0 && <div><CompactAvatarGroup variant="stroke" size={24} avatars={avatars} count={avatarCount} /></div>}
        {tasks && tasks.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{tasks.map((t, i) => <ActivityFeedTaskStatusItem key={i} status={t.status}>{t.label}</ActivityFeedTaskStatusItem>)}</div>}
        {children}
      </div>
      {onMore && <span style={{ display: 'flex', paddingTop: 6, alignSelf: 'flex-start' }}><CompactButton variant="ghost" size="md" fullRadius icon={<Icon name="More2Line" size={18} />} aria-label="Lainnya" onClick={onMore} /></span>}
    </div>
  );
}

/** Activity Feed Selected Filter [1.1] — r8, pad 4×10, gap 6, Label/Small; default white + stroke soft-200 (sub-600, icon soft-400) | hover weak-50 | active primary-alpha-10 (primary-base text + icon). */
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
export const ActivityFeedCommentItems11 = ActivityFeedCommentItem;
export const ActivityFeedFileItems11 = ActivityFeedFileItem;
export const ActivityFeedTaskStatusItems11 = ActivityFeedTaskStatusItem;
export const ActivityFeedSelectedFilter11 = ActivityFeedFilter;
export const NotificationsItems11 = NotificationItem;
export const NotificationsTabMenu11 = NotificationsTabMenu;
export default NotificationItem;
