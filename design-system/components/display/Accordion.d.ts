import * as React from 'react';
export interface AccordionProps { title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: string | React.ReactNode | null;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  flipIcon?: boolean;
  style?: React.CSSProperties; }
export declare function Accordion(props: AccordionProps): React.ReactElement | null;
export default Accordion;
