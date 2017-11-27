import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import htmlTemplate from './server/htmlTemplate';
import createStore from './server/createStore';

import createApp from './server/index';

const app = express();
require('dotenv').config({path: '../.env'});

app.use('/api', proxy(process.env.API_URL));
app.use(express.static(process.cwd() + '/public'));


app.get('*', function(req, res) {
  var store = createStore(req);

  var promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) :  null;
  });

  Promise.all(promises)
  .then(() => {
    const context = {};

    //fetch data and embed into app
    let newApp = createApp(req, store, context);

    //embed app into html page
    let page = htmlTemplate(newApp, store);

    if(context.notFound) {
      res.status(404);
    }

    res.send(page);
  });

});

var port = process.env.PORT;
app.listen(port, function() {
  console.log('Rendering server initializing on port ' + port);
});
