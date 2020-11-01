var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: String,
  stageClear: {
    type:Map,
    of:Boolean
  },
  // gameClear:{
  //   type:Map,
  //   of:Boolean
  // },
  // gameList:{
  //   type:Map,
  //   of:Boolean
  // },
  gameList:[Number],
  clearGame:[Number]
});

module.exports =  mongoose.model("users", userSchema);
