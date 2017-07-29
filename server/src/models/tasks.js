var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Tasks = new Schema({
    _id         : Number
  , name        : String
  , isCompleted : Boolean
  , date_added  : { type: Date, default: Date.now }
  , due_date    : { type: Date, default: Date.now }
  , userId      : Number
});
mongoose.model("Tasks", Tasks);

module.exports = Tasks;
