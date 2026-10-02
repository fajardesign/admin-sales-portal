import * as React from 'react';
export interface ContentCardProps { media?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  size?: "md" | "lg";
  action?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function ContentCard(props: ContentCardProps): React.ReactElement | null;
export interface ContentLabelProps { media?: React.ReactNode;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  size?: "md" | "lg";
  style?: React.CSSProperties; }
export declare function ContentLabel(props: ContentLabelProps): React.ReactElement | null;
export default ContentCard;
