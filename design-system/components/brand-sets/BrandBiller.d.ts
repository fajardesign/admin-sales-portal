import * as React from 'react';
export interface BrandBillerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bpjsk" | "bpjstk" | "cbn" | "iconnet" | "indihome" | "myrepublic" | "pln";
}
export declare const BrandBiller: React.FC<BrandBillerProps>;
export default BrandBiller;
