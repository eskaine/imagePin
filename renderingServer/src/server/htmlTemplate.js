import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default (pageContent, store) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title></title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${pageContent}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
