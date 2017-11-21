import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

ReactDOM.hydrate(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
  document.querySelector('#root')
);
