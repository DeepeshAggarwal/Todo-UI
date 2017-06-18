var mongoose = require('mongoose');
var Schema = mongoose.Schema; // <-- EDIT: missing in the original post
var Tasks = new Schema({
    name        : String
  , isCompleted : Boolean
  , date_added  : { type: Date, default: Date.now }
  , due_date_utc: Date
});
mongoose.model("Tasks", Tasks);

module.exports = Tasks;
