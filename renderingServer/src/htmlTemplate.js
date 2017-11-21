import React from 'react';
import { renderToString } from 'react-dom/server';

export default (pageContent) => {
  let content = renderToString(pageContent);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

}
