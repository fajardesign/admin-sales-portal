import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ds/styles.core.css'; // tokens only; use styles.css if rendering Figma-generated sets
import './app.css';
import App from './App.jsx';
import { DEMO } from './lib/env.js';

// Capture ke Figma (html-to-design): muat script capture hanya bila URL membawa #figmacapture=… di mode demo.
if (DEMO && window.location.hash.includes('figmacapture=')) {
  const s = document.createElement('script');
  s.src = 'https://mcp.figma.com/mcp/html-to-design/capture.js';
  s.async = true;
  document.head.appendChild(s);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
