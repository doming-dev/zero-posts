const express = require('express');
const postController = require('../controllers/post-controller');
const Router = express.Router();

Router.get("/newpost", postController.getNewPost);

module.exports = Router;