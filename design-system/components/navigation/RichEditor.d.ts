import * as React from 'react';
export interface RichEditorProps { defaultValue?: string;
  placeholder?: string;
  minHeight?: number;
  style?: React.CSSProperties; }
export declare function RichEditor(props: RichEditorProps): React.ReactElement | null;
export interface RichEditorItemProps { icon?: string;
  label?: React.ReactNode;
  color?: string;
  active?: boolean;
  onClick?: () => void;
  title?: string; }
export declare function RichEditorItem(props: RichEditorItemProps): React.ReactElement | null;
export default RichEditor;
