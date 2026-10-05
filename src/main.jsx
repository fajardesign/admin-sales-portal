import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ds/styles.core.css'; // tokens only; use styles.css if rendering Figma-generated sets
import './app.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
