import * as React from 'react';
export interface BrandsEWalletProps {
  className?: string;
  style?: React.CSSProperties;
  brands?: "lg-linkaja" | "lg-ovo" | "lg-gopay" | "lg-shopeepay" | "lg-dana";
}
export declare const BrandsEWallet: React.FC<BrandsEWalletProps>;
export default BrandsEWallet;
