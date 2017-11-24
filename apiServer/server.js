const express = require('express');
const session = require('express-session');
const routes = require('./routes/routes');
const passport = require('passport');
const cors = require('cors');

const app = express();
require('dotenv').load();
require('./auth/passport')(passport);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

routes(app, passport);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('API server initializing on port ' + port);
});
