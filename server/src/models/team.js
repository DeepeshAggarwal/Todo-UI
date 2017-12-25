var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Team = new Schema({
    _id      : Number
  , name     : String
  , userId   : [{type: Number, ref:'User'}]
});

Team.methods.getPublicFields = function () {
    var returnObject = {
        id: this._id,
        name: this.name,
        userId: this.userId
    };
    return returnObject;
};
mongoose.model("Team", Team);

module.exports = Team;
