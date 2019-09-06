const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    body: String,
    author: String,
    createDate: Date,
    comments: [{
        caption: String,
        author: String,
        createDate: Date,
        meta: {
            upvotes: Number,
            downvotes: Number
        }
    }],
    meta: {
        upvotes: Number,
        downvotes: Number
    }
});

module.exports = mongoose.model('Post', postSchema);