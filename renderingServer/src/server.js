import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import htmlTemplate from './server/htmlTemplate';
import createStore from './server/createStore';

import createApp from './server/index';

const app = express();
require('dotenv').config({path: '../.env'});

app.use(express.static(process.cwd() + '/public'));

app.get('*', function(req, res) {
  var store = createStore();

  var promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) :  null;
  });

  Promise.all(promises)
  .then(() => {
    let newApp = createApp(req, store);
    let page = htmlTemplate(newApp, store);
    res.send(page);
  });

});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('Rendering server initializing on port ' + port);
});
