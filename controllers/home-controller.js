const Post = require('../models/post');

exports.getHome = (req, res, next) => {
    Post.find().then(posts => {
        res.render('index', {
            posts: posts
        });
    });
};

