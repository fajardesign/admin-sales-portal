import * as React from 'react';
export interface ScheduleCardsSchedule11Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "meetings" | "events" | "holiday";
  options?: "03 options" | "01 options" | "02 options";
  /** Text content; defaults to "Meeting with James Brown". */
  text1?: string;
  /** Text content; defaults to "8:00 - 8:45 AM (UTC)". */
  text2?: string;
  /** Text content; defaults to "On Google Meet". */
  text3?: string;
  /** Text content; defaults to "by Sofia Williams". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const ScheduleCardsSchedule11: React.FC<ScheduleCardsSchedule11Props>;
export default ScheduleCardsSchedule11;
