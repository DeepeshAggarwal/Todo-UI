var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = new Schema({
    _id         : Number
  , name        : String
  , email       : String
  , password    : String
});

Users.methods.getPublicFields = function () {
    var returnObject = {
        id: this._id,
        name: this.name,
        email: this.email,
    };
    return returnObject;
};
mongoose.model("Users", Users);

module.exports = Users;
