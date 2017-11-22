module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.send('API responding');
  });

  app.get('/auth/twitter',
    passport.authenticate('twitter')
  );

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  );

}
