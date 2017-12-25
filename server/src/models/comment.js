var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = new Schema({
    _id         : Number
  , comment     : String
  , commentAt   : { type: Date, default: Date.now }
  , userId      : { type: Number, ref: 'User' }
});

Comment.methods.getPublicFields = function () {
    var returnObject = {
        id: this._id,
        comment: comment,
        commentAt: this.commentAt,
    };
    return returnObject;
};
mongoose.model("Comment", Comment);

module.exports = Comment;
