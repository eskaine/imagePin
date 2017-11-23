module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.send('API responding');
  });

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
