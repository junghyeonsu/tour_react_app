var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  stage: Array,
  quiz: Array,
});

module.exports =  mongoose.model("users", UserSchema);
