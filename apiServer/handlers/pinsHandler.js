const shortid = require('shortid');
const User = require('../models/users');


function PinsHandler() {

  this.add = function(req, res) {
    req.body.id = shortid.generate();
    User.findOneAndUpdate({ _id: req.user._id }, { $push: { myPins: req.body }})
      .exec(function(err, result) {
        if(err)
          throw err;

        res.send(req.body);
      });
  }

  this.delete = function(req, res) {
    User.findOneAndUpdate({ _id: req.user._id }, { $pull: { myPins: req.body }})
      .exec(function(err, result) {
        if(err)
          throw err;

        res.end();
      });
  }

}

module.exports = PinsHandler;
