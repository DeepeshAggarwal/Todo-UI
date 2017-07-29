var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Counter = new Schema({
    seq : Number
});

Counter.statics.findAndModify = function (name, callback) {
  return this.collection.findAndModify({'_id': name}, [], {$inc : {'seq' : 1}}, {}, callback);
};

mongoose.model("Counter", Counter);
module.exports = Counter;
