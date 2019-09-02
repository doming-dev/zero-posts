const express = require('express');
const homeController = require('../controllers/home-controller');

const Router = express.Router();

Router.get('/', homeController.getHome);

module.exports = Router;