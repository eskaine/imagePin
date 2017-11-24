import React from 'react';
import HomeContainer from './containers/HomeContainer';
import BookListContainer from './containers/BookListContainer';

export default [
  {
    ...HomeContainer,
    path: '/',
    exact: true
  },
  {
    ...BookListContainer,
    path: '/data'
  }
];
