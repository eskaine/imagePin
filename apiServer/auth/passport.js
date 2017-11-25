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
      callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },
    function(token, tokenSecret, profile, done) {

      console.log('creating user');

      process.nextTick(function() {
        User.findOne({ 'twitter.id': profile.id }, function (err, user) {
          if(err)
            return done(err);

          if(user) {
            return done(null, user);
          } else {
            var newUser = new User();
            newUser.twitter.id = profile.id;
            newUser.twitter.name = profile.displayName;
            newUser.save(function(err) {
              if (err) {
                throw err;
              }

              return done(null, newUser);
            });
          }
        });
      });
    }
  ));

};
