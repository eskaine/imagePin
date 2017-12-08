import React from 'react';
import App from './App';
import HomeContainer from './containers/HomeContainer';
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
        ...MyPinsContainer,
        path: '/myPins'
      },
      {
        ...PageNotFoundContainer
      }
    ]
  }
];
