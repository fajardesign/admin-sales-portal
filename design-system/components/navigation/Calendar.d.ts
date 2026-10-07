import * as React from 'react';
export interface CalendarProps { month?: Date;
  onMonthChange?: (month: Date) => void;
  value?: Date | [Date, Date | null];
  onChange?: (v: any) => void;
  mode?: "single" | "range";
  marked?: Date[];
  minDate?: Date;
  style?: React.CSSProperties; }
export declare function Calendar(props: CalendarProps): React.ReactElement | null;
export interface DateRangePickerProps { value?: [Date, Date | null];
  onChange?: (v: any) => void;
  presets?: string[] | null;
  mode?: "single" | "range";
  footer?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function DateRangePicker(props: DateRangePickerProps): React.ReactElement | null;
export interface DayCellProps { day?: number;
  active?: boolean;
  inRange?: boolean;
  marked?: boolean;
  disabled?: boolean;
  muted?: boolean;
  onClick?: () => void; }
export declare function DayCell(props: DayCellProps): React.ReactElement | null;
export interface DateSelectorProps { label?: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  style?: React.CSSProperties; }
export declare function DateSelector(props: DateSelectorProps): React.ReactElement | null;
export interface PeriodRangeProps { children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void; }
export declare function PeriodRange(props: PeriodRangeProps): React.ReactElement | null;
export interface DayLabelProps { children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function DayLabel(props: DayLabelProps): React.ReactElement | null;
export default Calendar;
