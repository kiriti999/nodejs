var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    "category": String
});

var category = mongoose.model('category', categorySchema);

module.exports = category;