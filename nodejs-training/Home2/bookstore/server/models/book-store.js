const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    isbn: { type: String, unique: true },
    name: String,
    author: String,
    authorID: Number,
    price: Number,
    country: String,
    Reviewers: [],
    published: Number,
    publisher: String,
    pages: Number,
    description: String
});

module.exports = mongoose.model('BookStore', BookSchema, 'BookStore');
