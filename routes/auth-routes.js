const authController = require('../controllers/auth-controller');
const express = require('express');

const Router = express.Router();

Router.get('/login', authController.getLogin);
Router.get('/signup', authController.getSignup);


module.exports = Router;