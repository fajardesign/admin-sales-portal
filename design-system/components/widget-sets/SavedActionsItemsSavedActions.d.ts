import * as React from 'react';
export interface SavedActionsItemsSavedActionsProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "avatar" | "payment";
  state?: "default" | "hover";
  editTitle?: string;
  editDescription?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SavedActionsItemsSavedActions: React.FC<SavedActionsItemsSavedActionsProps>;
export default SavedActionsItemsSavedActions;
