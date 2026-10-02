import * as React from 'react';
export interface TaskStatusProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "failed" | "pending" | "success" | "schedule" | "partial";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TaskStatus: React.FC<TaskStatusProps>;
export default TaskStatus;
