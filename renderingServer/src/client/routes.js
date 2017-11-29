import React from 'react';
import App from './App';
import HomeContainer from './containers/HomeContainer';
import BookListContainer from './containers/BookListContainer';
import MyPinsContainer from './containers/MyPinsContainer';
import PageNotFoundContainer from './containers/PageNotFoundContainer';

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
      },
      {
        ...MyPinsContainer,
        path: '/myPins'
      },
      {
        ...PageNotFoundContainer
      }
    ]
  }
];
