const express = require('express');
const metaController = require('../controllers/meta-controller');
const Router = express.Router();

Router.post('/like/:id', metaController.postLike);

module.exports = Router;