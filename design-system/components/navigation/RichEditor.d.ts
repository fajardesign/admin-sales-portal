import * as React from 'react';
export type RichEditorColorName = 'gray' | 'blue' | 'orange' | 'red' | 'green' | 'yellow' | 'purple' | 'sky' | 'pink' | 'teal';
export declare const RICH_EDITOR_COLORS: Record<RichEditorColorName, string>;
export interface RichEditorColorProps { color?: RichEditorColorName | string;
  style?: React.CSSProperties; }
export declare function RichEditorColor(props: RichEditorColorProps): React.ReactElement | null;
export interface RichEditorItemProps { icon?: string;
  label?: React.ReactNode;
  color?: RichEditorColorName | string;
  dropdown?: boolean;
  active?: boolean;
  onClick?: () => void;
  title?: string; }
export declare function RichEditorItem(props: RichEditorItemProps): React.ReactElement | null;
export declare function RichEditorDivider(): React.ReactElement | null;
export type RichEditorToolKey = 'heading' | 'size' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'align' | 'comment' | 'link' | 'mention' | 'more';
export interface RichEditorToolbarProps { variant?: '01' | '02' | '03' | '04';
  active?: RichEditorToolKey[];
  onAction?: (key: RichEditorToolKey) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties; }
export declare function RichEditorToolbar(props: RichEditorToolbarProps): React.ReactElement | null;
export interface RichEditorProps { defaultValue?: string;
  placeholder?: string;
  minHeight?: number;
  style?: React.CSSProperties; }
export declare function RichEditor(props: RichEditorProps): React.ReactElement | null;
export default RichEditor;
