import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './containers/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Home />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


