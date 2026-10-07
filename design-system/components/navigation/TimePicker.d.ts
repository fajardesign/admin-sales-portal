import * as React from 'react';
export interface TimePickerSlot { time: string;
  period?: React.ReactNode;
  rightTime?: React.ReactNode;
  rightPeriod?: React.ReactNode;
  rightText?: boolean; }
export interface TimePickerProps { slots?: (string | TimePickerSlot)[];
  disabled?: string[];
  value?: string;
  onChange?: (s: string) => void;
  /** @deprecated Items are now full-width rows; ignored. */
  columns?: number;
  title?: React.ReactNode;
  durations?: string[];
  duration?: string;
  onDurationChange?: (d: string) => void;
  direction?: "right" | "center";
  footer?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function TimePicker(props: TimePickerProps): React.ReactElement | null;
export interface TimePickerItemProps { children?: React.ReactNode;
  time?: React.ReactNode;
  period?: React.ReactNode;
  rightTime?: React.ReactNode;
  rightPeriod?: React.ReactNode;
  rightText?: boolean;
  direction?: "right" | "center";
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function TimePickerItem(props: TimePickerItemProps): React.ReactElement | null;
export interface TimeSlotProps extends TimePickerItemProps {}
export declare function TimeSlot(props: TimeSlotProps): React.ReactElement | null;
export interface TimePickerSelectStatusProps { type?: "available" | "busy" | "meeting" | "offline";
  children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function TimePickerSelectStatus(props: TimePickerSelectStatusProps): React.ReactElement | null;
export interface TimePickerSelectDurationProps { children?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties; }
export declare function TimePickerSelectDuration(props: TimePickerSelectDurationProps): React.ReactElement | null;
export default TimePicker;
