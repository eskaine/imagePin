const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/users');
const auth = require('./auth');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new TwitterStrategy({
      consumerKey: auth.twitterAuth.consumerKey,
      consumerSecret: auth.twitterAuth.consumerSecret,
      callbackURL: auth.twitterAuth.callbackURL
    },
    function(token, tokenSecret, profile, cb) {
      process.nextTick(function() {
        User.findOne({ 'twitter.id': profile.id }, function (err, user) {
          if(err)
            return cb(err);

          //TODO: create new user
          return cb(err, user);
        });
      });
    }
  ));

};
