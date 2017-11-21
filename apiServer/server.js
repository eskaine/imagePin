const express = require('express');
const routes = require('./routes/routes.js');

const app = express();
require('dotenv').load();

routes(app);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('API server initializing on port ' + port);
});
