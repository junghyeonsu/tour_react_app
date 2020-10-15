var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  stageClear: Array,
  stageVisit:Array,
  quiz: Array,
  prevGame: Number,
});

module.exports =  mongoose.model("users", UserSchema);
