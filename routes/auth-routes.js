const authController = require('../controllers/auth-controller');
const express = require('express');

const Router = express.Router();

Router.get('/login', authController.getLogin);
Router.get('/signup', authController.getSignup);
Router.post('/signup', authController.postSignup);
Router.post('/login', authController.postLogin);

module.exports = Router;