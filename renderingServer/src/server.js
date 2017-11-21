import express from 'express';
import React from 'react';
import htmlTemplate from './htmlTemplate';

import Home from './client/components/Home';

const app = express();
require('dotenv').config({path: '../.env'});

app.use(express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  let page = htmlTemplate(<Home/>);
  res.send(page);
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('Rendering server initializing on port ' + port);
});
