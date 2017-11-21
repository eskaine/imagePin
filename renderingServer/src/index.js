import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './client/routes';

export default (req) => {
  return renderToString(
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
  );
}
