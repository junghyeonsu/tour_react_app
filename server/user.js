var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stageClear: Object,
  stageVisit:Object,
  gameIndex: Array,
  prevGame: Number,
});

module.exports =  mongoose.model("users", userSchema);
