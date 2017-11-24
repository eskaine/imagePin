import React from 'react';
import App from './App';
import HomeContainer from './containers/HomeContainer';
import BookListContainer from './containers/BookListContainer';

export default [
  {
    ...App,
    routes: [
      {
        ...HomeContainer,
        path: '/',
        exact: true
      },
      {
        ...BookListContainer,
        path: '/data'
      }
    ]
  }
];
