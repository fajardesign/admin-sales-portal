import * as React from 'react';
export interface TimeTrackerDropdownTimeTrackerProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "focus" | "active";
  company?: boolean;
  pickCompany?: React.ReactNode;
  editText?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TimeTrackerDropdownTimeTracker: React.FC<TimeTrackerDropdownTimeTrackerProps>;
export default TimeTrackerDropdownTimeTracker;
