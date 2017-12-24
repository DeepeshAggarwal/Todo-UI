var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Team = new Schema({
    _id      : Number
  , name     : String
});

Team.methods.getPublicFields = function () {
    var returnObject = {
        id: this._id,
        name: name
    };
    return returnObject;
};
mongoose.model("Team", Team);

module.exports = Team;
