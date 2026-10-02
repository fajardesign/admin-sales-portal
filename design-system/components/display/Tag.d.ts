import * as React from 'react';
export interface TagProps { children?: React.ReactNode;
  sublabel?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "stroke" | "gray";
  dismissible?: boolean;
  disabled?: boolean;
  onDismiss?: () => void;
  style?: React.CSSProperties; }
export declare function Tag(props: TagProps): React.ReactElement | null;
export default Tag;
