var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stageClear: {
    type:Map,
    of:Boolean
  },
  stageVisit:{
    type:Map,
    of:Boolean
  },
  // testSetting:{
  //   type:Map,
  //   of:Boolean
  // },
  gameIndex: Array,
  prevGame: Number,
});

module.exports =  mongoose.model("users", userSchema);
