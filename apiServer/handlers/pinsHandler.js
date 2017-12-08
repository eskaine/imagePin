const shortid = require('shortid');
const User = require('../models/users');

const projection = {
  _id: 0,
  __v: 0,
  twitter: 0
};

function PinsHandler() {

  this.allPins = function(req, res) {
    User.aggregate([
      {$unwind: "$myPins"},
      {$project: { _id: 0, profileImage: "$twitter.profileImage", id: "$myPins.id", date: "$myPins.dateCreated", title: "$myPins.title", imageUrl: "$myPins.imageUrl", likes: "$myPins.likes"}},
      {$sort: {date: -1 }},
      {$project: {date: 0}}
    ]).exec(function(err, result) {
        if(err)
          throw err;

          res.send(result);
      });
  }

  this.add = function(req, res) {

    //prepare new pin data
    req.body.id = shortid.generate();
    req.body.dateCreated = new Date();
    req.body.likes = 0;

    User.findOneAndUpdate({ _id: req.user._id }, { $push: { myPins: req.body }}, { projection: projection })
      .exec(function(err, result) {
        if(err)
          throw err;

        res.send(req.body);
      });
  }

  this.delete = function(req, res) {
    User.findOneAndUpdate({ _id: req.user._id }, { $pull: { myPins: req.body }}, { projection: projection })
      .exec(function(err, result) {
        if(err)
          throw err;

        res.end();
      });
  }

  this.like = function(req, res) {
    User.findOneAndUpdate({ "myPins.id": req.body.id }, { $inc: { "myPins.$.likes" : 1 }}, { projection: projection })
      .exec(function(err, result) {
        if(err)
          throw err;

        res.end();
      });
  }

}


module.exports = PinsHandler;
