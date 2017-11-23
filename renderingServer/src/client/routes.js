import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';

export default () => {
  return(
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/data" component={BookList} />
    </div>
  );
}
