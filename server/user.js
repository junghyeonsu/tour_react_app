var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stageClear: Array,
  stageVisit:Array,
  gameIndex: Array,
  prevGame: Number,
});

module.exports =  mongoose.model("users", userSchema);
