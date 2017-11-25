import React from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from './components/Navbar';
import { fetchUser } from './actions/auth';

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchUser()),
  component: App
};
