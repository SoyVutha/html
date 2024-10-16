import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { ResultContextProvider } from './Context/ResultContextProvider.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <ResultContextProvider> {/* Wrap with ResultContextProvider */}
        <App />
      </ResultContextProvider>
    </BrowserRouter>
  </StrictMode>
);
