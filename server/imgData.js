var mongoose = require("mongoose"); // MongoDB를 사용하기위해 mongoose 모듈 호출​
var Schema = mongoose.Schema; 

var imgDataSchema = new Schema({ 
  title: String, 
  orgFileName: String, 
  saveFileName: String

});
module.exports = mongoose.model("imgData", imgDataSchema); 