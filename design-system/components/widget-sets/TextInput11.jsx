import React from 'react';
import { TextInput } from '../forms/TextInput.jsx';

// Lightweight stand-in for the Figma-generated "Text Input [1.1]" (1.7 MB) used inside widget parts.
export function _TextInput11(p = {}) {
  return <TextInput label={p.label ?? 'Label'} placeholder={p.editPlaceholder ?? 'Placeholder text…'} size={p.size === 'sm' || p.size === 'xs' ? p.size : 'md'} style={{ width: 300, ...p.style }} />;
}
export default _TextInput11;
