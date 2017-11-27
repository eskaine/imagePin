import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavbarContainer from './containers/NavbarContainer';
import { fetchUser } from './actions/auth';

const App = ({ route }) => {
  return (
    <div>
      <NavbarContainer />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchUser()),
  component: App
};
