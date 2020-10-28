var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  title : String,
  imageOri : String,
  image : String,
  video : String,
  text : String,
  answer : String,
});

module.exports =  mongoose.model("games", gameSchema);
