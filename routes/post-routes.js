const express = require('express');
const postController = require('../controllers/post-controller');
const Router = express.Router();

Router.get('/newpost', postController.getNewPost);
Router.post('/newpost', postController.postNewPost);
Router.get('/viewpost/:id', postController.getPost);

module.exports = Router;
