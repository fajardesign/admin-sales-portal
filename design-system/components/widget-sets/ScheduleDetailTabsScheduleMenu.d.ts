import * as React from 'react';
export interface ScheduleDetailTabsScheduleMenuProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "meetings" | "events" | "holiday";
  emptyState?: "off" | "on";
  /** Text content; defaults to "No records of meetings yet.\nPlease check back later.". */
  text1?: string;
}
export declare const ScheduleDetailTabsScheduleMenu: React.FC<ScheduleDetailTabsScheduleMenuProps>;
export default ScheduleDetailTabsScheduleMenu;
