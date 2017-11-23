import React from 'react';
import Home from './components/Home';
import BookList from './components/BookList';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    ...BookList,
    path: '/data'
  }
];
