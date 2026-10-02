import * as React from 'react';
export interface FileUploadAreaProps { title?: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: React.ReactNode;
  onFiles?: (files: File[]) => void;
  style?: React.CSSProperties; }
export declare function FileUploadArea(props: FileUploadAreaProps): React.ReactElement | null;
export interface FileUploadCardProps { name?: string;
  size?: string;
  progress?: number;
  state?: "uploading" | "success" | "error";
  onRemove?: () => void;
  onRetry?: () => void;
  style?: React.CSSProperties; }
export declare function FileUploadCard(props: FileUploadCardProps): React.ReactElement | null;
export interface FileFormatIconProps { format?: string;
  color?: "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "purple" | "pink" | "gray";
  size?: number; }
export declare function FileFormatIcon(props: FileFormatIconProps): React.ReactElement | null;
export interface ImageUploadProps { image?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  type?: "avatar" | "company";
  layout?: "horizontal" | "vertical";
  onUpload?: () => void;
  onRemove?: () => void;
  style?: React.CSSProperties; }
export declare function ImageUpload(props: ImageUploadProps): React.ReactElement | null;
export default FileUploadArea;
