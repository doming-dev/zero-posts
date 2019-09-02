const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: String,
    author: String,
    createDate: Date,
    meta: {
        upvotes: Number,
        downvotes: Number
    }
});

module.exports = mongoose.model('Comment', commentSchema);