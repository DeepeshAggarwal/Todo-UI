var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Task = new Schema({
    _id         : Number
  , name        : String
  , isCompleted : Boolean
  , date_added  : { type: Date, default: Date.now }
  , due_date    : { type: Date, default: Date.now }
  , userId      : { type: Number, ref: 'User' }
  , teamId      : { type: Number, ref: 'Team' }
  , comments    : [{ type: Number, ref: 'Comment' }]
});
mongoose.model("Task", Task);

module.exports = Task;
