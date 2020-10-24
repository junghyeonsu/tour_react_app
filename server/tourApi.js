var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tourApiSchema = new Schema({
    title: String,
    image1: String,
    image2: String,
    explain : String,
});

module.exports = mongoose.model('tourApi', tourApiSchema);