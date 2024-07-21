import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/Styles/index.css'; //cause 0 padding and margin
import Router from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router/>           // routes 
  </React.StrictMode>
);


