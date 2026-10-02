import * as React from 'react';
export interface CardDetailsTabMyCardsProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "virtual card" | "physical card";
  /** Text content; defaults to "Card Number". */
  text1?: string;
  /** Text content; defaults to "• • • •  1234". */
  text2?: string;
  /** Text content; defaults to "Expiry Date". */
  text3?: string;
  /** Text content; defaults to "06/27". */
  text4?: string;
}
export declare const CardDetailsTabMyCards: React.FC<CardDetailsTabMyCardsProps>;
export default CardDetailsTabMyCards;
