import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default (pageContent, store) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="root">${pageContent}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
