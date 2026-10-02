import * as React from 'react';
export interface CreditCardsMyCards1Props {
  className?: string;
  style?: React.CSSProperties;
  variant?: "virtual card" | "physical card";
  switch?: boolean;
  /** Text content; defaults to "$16,058.94". */
  text1?: string;
  /** Text content; defaults to "Savings Card". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const CreditCardsMyCards1: React.FC<CreditCardsMyCards1Props>;
export default CreditCardsMyCards1;
