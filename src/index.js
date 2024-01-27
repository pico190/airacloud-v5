import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
  document.body
);
