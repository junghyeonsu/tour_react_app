var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stageSchema = new Schema({
  name:String,
  count:Number,
  hint:Array,
  // hint:{
  //   type:Map,
  //   of:String
  // },
  comment:String,
  answer:[String],
  mission:Array,
});

module.exports = mongoose.model('stage', stageSchema);