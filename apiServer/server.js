const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').load();
require('./auth/passport')(passport);

mongoose.connect(process.env.MONGO_URL, {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('API server initializing on port ' + port);
});
