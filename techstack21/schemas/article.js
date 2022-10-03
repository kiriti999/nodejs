
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    "title": { type: String, required: true, unique: false },
    "details": String,
    "username": { type: String, required: true, unique: false },
    "postImageUrl": String,
    "url": {type: String},
    "categories": [String],
    "created_at": { type: Date, default: Date.now }
});

var article = mongoose.model('article', articleSchema);
module.exports = article;