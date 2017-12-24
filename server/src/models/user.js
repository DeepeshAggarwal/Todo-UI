var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
    _id         : Number
  , name        : String
  , email       : String
  , password    : String
  , teamId      : [{ type: Number, ref: 'Team' }]
});

User.methods.getPublicFields = function () {
    var returnObject = {
        id: this._id,
        name: this.name,
        email: this.email,
        teamId: this.teamId
    };
    return returnObject;
};
mongoose.model("User", User);

module.exports = User;
