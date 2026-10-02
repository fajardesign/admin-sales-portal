import * as React from 'react';
export interface DonationDetailsTabDonationProfileProps {
  className?: string;
  style?: React.CSSProperties;
  variant?: "overview" | "goal" | "statistic";
  /** Text content; defaults to "Arthur Taylor". */
  text1?: string;
  /** Text content; defaults to "48 donations in the last year". */
  text2?: string;
  /** Text content; defaults to "$12,000.00". */
  text3?: string;
  /** Text content; defaults to "Total Donation". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const DonationDetailsTabDonationProfile: React.FC<DonationDetailsTabDonationProfileProps>;
export default DonationDetailsTabDonationProfile;
