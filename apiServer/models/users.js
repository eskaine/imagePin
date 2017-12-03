const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
  twitter: {
    id: String,
    name: String
  },
  myPins: []
});

module.exports = mongoose.model('User', User);
