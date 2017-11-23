import 'babel-polyfill';
import express from 'express';
import React from 'react';
import htmlTemplate from './server/htmlTemplate';
import createStore from './server/createStore';

import createApp from './server/index';

const app = express();
require('dotenv').config({path: '../.env'});

app.use(express.static(process.cwd() + '/public'));

app.get('*', function(req, res) {
  const store = createStore();
  const page = htmlTemplate(createApp(req, store));
  res.send(page);
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('Rendering server initializing on port ' + port);
});
