const User = require('../models/users');

function PinsHandler() {

  this.add = function(req, res) {

    User.findOneAndUpdate({ _id: req.user._id }, { $push: { myPins: req.body }})
      .exec(function(err, result) {
        if(err)
          throw err;

        res.end();
      });
  }

}

module.exports = PinsHandler;
