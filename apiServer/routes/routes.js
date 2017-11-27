module.exports = function(app, passport) {

  //test route
  app.get('/data', function(req, res) {

    var data = [
      {
        book_id: 1,
        book_name: "GOT"
      },
      {
        book_id: 2,
        book_name: "LOTR"
      },
      {
        book_id: 3,
        book_name: "HP"
      }
    ];

    res.send(data);
  });

  app.get('/user', function(req, res) {
    res.send(req.isAuthenticated());
  });

  app.get('/auth/twitter',
    passport.authenticate('twitter')
  );

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: process.env.APP_URL,
      failureRedirect: '/login'
    })
  );

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect(process.env.APP_URL);
  });

  app.get('*', function(req, res) {
    res.redirect(process.env.APP_URL);
  });

}
