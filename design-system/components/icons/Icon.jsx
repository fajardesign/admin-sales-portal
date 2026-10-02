import React from 'react';
import icons from './icon-data.js';

const toPascal = (n) => n.includes('-') ? n.split('-').map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('') : n;

/** System icon (Remix-style line/fill set from the Figma "System Icons" page). Paints with currentColor. */
export function Icon({ name, size = 20, color, style, ...rest }) {
  const d = icons[name] || icons[toPascal(name || '')];
  if (!d) return <span style={{ display: 'inline-block', width: size, height: size, flexShrink: 0, ...style }} />;
  return (
    <svg width={size} height={size} viewBox={d.viewBox} fill="none" aria-hidden="true"
      style={{ display: 'block', flexShrink: 0, color, ...style }}
      dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />
  );
}
export default Icon;
