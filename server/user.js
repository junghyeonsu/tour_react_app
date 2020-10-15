var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stageClear: Array,
  stageVisit:Array,
  quiz: Array,
  prevGame: Number,
});

module.exports =  mongoose.model("users", userSchema);
