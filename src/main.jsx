/*
 * Research Portfolio Template - Main Entry Point
 * © 2025 Surya GS Chitti
 * 
 * This file is part of the Research Portfolio Template.
 * Template design and original implementation by Surya GS Chitti.
 * 
 * Attribution required when using this template.
 * GitHub: https://github.com/codechitti216/TheDailyPush
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'katex/dist/katex.min.css';
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
