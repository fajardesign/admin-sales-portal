import * as React from 'react';
export interface TimePickerProps { slots?: string[];
  disabled?: string[];
  value?: string;
  onChange?: (s: string) => void;
  columns?: number;
  title?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function TimePicker(props: TimePickerProps): React.ReactElement | null;
export interface TimeSlotProps { children?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void; }
export declare function TimeSlot(props: TimeSlotProps): React.ReactElement | null;
export default TimePicker;
