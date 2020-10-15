var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stageSchema = new Schema({
  name:String,
  count: Number,
  hint:Array,
  answer:String,
});

module.exports = mongoose.model('stage', stageSchema);