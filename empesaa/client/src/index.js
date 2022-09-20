import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker'
import swDev from './swDev'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
swDev()


