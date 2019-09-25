const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/user');

// TODO: continue with sign up logic

exports.getLogin = (req, res, next) => {
    res.render('login');
};

exports.postLogin = (req, res, next) => {

};

exports.getSignup = (req, res, next) => {
    res.render('signup');
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;


};