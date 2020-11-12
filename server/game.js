var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
  type: String,
  title : String,
  imageOri : String,
  image : String,
  video : String,
  text : String,
  comment:String,
  answer : [String],
  choice : Array
});

module.exports =  mongoose.model("games", gameSchema);
