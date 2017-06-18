var mongoose = require('mongoose');
var Schema = mongoose.Schema; // <-- EDIT: missing in the original post
var Users = new Schema({
    name        : String
  , email       : String
  , password    : String
});
mongoose.model("Users", Users);

module.exports = Users;
