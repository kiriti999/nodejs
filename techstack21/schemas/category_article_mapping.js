var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var category_article_Schema = new Schema({
    "article_id": { type: String, required: false, unique: false },
    "category": String,
    "articles": [{ type: mongoose.Schema.Types.ObjectId, ref: 'article'}],
});

var category_article_Schema = mongoose.model('category_article_Schema', category_article_Schema);

module.exports = category_article_Schema;