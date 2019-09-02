const mongoose = require('mongoose');
const Comment = require('./comment');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    author: String,
    createDate: Date,
    comments: [Comment],
    meta: {
        upvotes: Number,
        downvotes: Number
    }
});

module.exports = mongoose.model('Post', postSchema);