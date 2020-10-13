var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stage: Array,
  quiz: Array,
});

module.exports =  mongoose.model("users", userSchema);
