const express = require('express');
const routes = require('./routes/routes');
const passport = require('passport');


const app = express();
require('dotenv').load();
require('./auth/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('API server initializing on port ' + port);
});
