import * as React from 'react';
export interface CalendarCardCalendarPage1Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "📅 meetings" | "🎉 events";
  size?: "half" | "regular" | "regular extended" | "lg";
  completed?: "off" | "on";
  editTitle?: string;
  editTime?: string;
  /** Text content; defaults to "+4". */
  text1?: string;
  /** Text content; defaults to "on Zoom". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const CalendarCardCalendarPage1: React.FC<CalendarCardCalendarPage1Props>;
export default CalendarCardCalendarPage1;
