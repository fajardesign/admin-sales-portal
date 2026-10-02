import * as React from 'react';
export interface NotesContentNotes11Props {
  className?: string;
  style?: React.CSSProperties;
  editTitle?: string;
  editDescription?: string;
  state?: "default" | "checked";
  editDate?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const NotesContentNotes11: React.FC<NotesContentNotes11Props>;
export default NotesContentNotes11;
