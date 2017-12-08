import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavbarContainer from './containers/NavbarContainer';
import { fetchUser } from './actions';

const App = ({ route }) => {
  return (
    <React.Fragment>
      <NavbarContainer />
      {renderRoutes(route.routes)}
    </React.Fragment>
  );
};

export default {
  loadData: ({ dispatch }) => dispatch(fetchUser()),
  component: App
};
