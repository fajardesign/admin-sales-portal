import * as React from 'react';
export interface CardPositioningCalendarPage1Props {
  className?: string;
  style?: React.CSSProperties;
  positioning?: "half top" | "half bottom" | "half double" | "half + regular" | "half + large" | "regular" | "regular from mid" | "large" | "large from mid";
  empty?: "off" | "on";
  disabled?: "off" | "on";
}
export declare const CardPositioningCalendarPage1: React.FC<CardPositioningCalendarPage1Props>;
export default CardPositioningCalendarPage1;
