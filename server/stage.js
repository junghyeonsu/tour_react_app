var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stageSchema = new Schema({
    totalStage: {}
});

module.exports = mongoose.model('stage', stageSchema);