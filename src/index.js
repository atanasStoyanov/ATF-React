import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App> 
        <Navigation />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


