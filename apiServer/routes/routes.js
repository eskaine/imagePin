const pinsHandler = require('../handlers/pinsHandler');


module.exports = function(app, passport) {

  const PinsHandler = new pinsHandler();

  const appUrl = process.env.APP_URL;
  const loginRedirectUrl = appUrl + 'myPins';

  function authCheck(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }

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

  app.post('/myPins/add', PinsHandler.add);

  app.get('/myPins', authCheck, function(req, res) {
    console.log('mypins');
    console.log(req.isAuthenticated());
    //res.send('yourpins');
  });

  app.get('/user', function(req, res) {
    res.send(req.isAuthenticated());
  });

  app.get('/auth/twitter',
    passport.authenticate('twitter')
  );

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: loginRedirectUrl,
      failureRedirect: '/login'
    })
  );

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect(appUrl);
  });

  app.get('*', function(req, res) {
    res.redirect(appUrl);
  });

}
