const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    likedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    dislikedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('User', userSchema);