const Post = require('../models/post');

exports.getNewPost = (req, res, next) => {
  res.render('new-post');
};

exports.postNewPost = (req, res, next) => {
  const postTitle = req.body.title;
  const postBody = req.body.postBody;

  const newPost = new Post({
    title: postTitle,
    body: postBody,
    author: 'zerofisher',
    createDate: new Date(),
    comments: [],
    meta: {
      upvotes: 0,
      downvotes: 0
    }
  });
  
  newPost
    .save()
    .then(result => {
      console.log('new post saved!');
      res.redirect('/newpost');
    })
    .catch(err => {
      console.log(err);
    });
};
