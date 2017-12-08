import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import Routes from '../client/routes';

export default (req, store, context) => {
  return renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
        </StaticRouter>
      </Provider>
  );
}
