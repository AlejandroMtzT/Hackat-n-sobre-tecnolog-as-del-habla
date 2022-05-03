import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './App';
import Audio from './components/Audio.js';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);

reportWebVitals();
