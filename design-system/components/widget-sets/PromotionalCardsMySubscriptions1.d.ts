import * as React from 'react';
export interface PromotionalCardsMySubscriptions1Props {
  className?: string;
  style?: React.CSSProperties;
  brand?: "apple music" | "spotify" | "grove shark" | "youtube music" | "twitch" | "netflix" | "microsoft office" | "creative cloud" | "mailchimp";
  /** Text content; defaults to "50% discount on Apple Music". */
  text1?: string;
  /** Text content; defaults to "For only $4.99 per month!". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const PromotionalCardsMySubscriptions1: React.FC<PromotionalCardsMySubscriptions1Props>;
export default PromotionalCardsMySubscriptions1;
