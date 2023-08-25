import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import  { HomeApp } from './HomeApp';
import { HeaderApp } from './HeaderApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HomeApp/>
      <HeaderApp/>
    </React.StrictMode>
);