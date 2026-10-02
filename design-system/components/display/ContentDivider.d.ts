import * as React from 'react';
export interface ContentDividerProps { type?: "line" | "text-line" | "text" | "solid-text";
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function ContentDivider(props: ContentDividerProps): React.ReactElement | null;
export default ContentDivider;
