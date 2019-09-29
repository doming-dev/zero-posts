const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('login', { email: '', error: '' });
};

exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne();

    if (user) {
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (passwordMatches === true) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        } else {
            res.render('login', {
                email: email,
                error: 'Email or Password is incorrect'
            });
        }
    } else {
        res.render('login', {
            email: email,
            error: 'Email or Password is incorrect'
        });
    }
};

exports.getSignup = (req, res, next) => {
    res.render('signup', { email: '', error: '' });
};

exports.postSignup = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const existingUser = await User.findOne({ email: email });
    if (existingUser != null) {
        res.render('signup', {
            email: email,
            error: 'This email is already registered'
        });
        return;
    }
    if (password === confirmPassword) {
        var hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            email: email,
            password: hashedPassword,
            posts: [],
            likedPosts: [],
            dislikedPosts: []
        });

        await newUser.save();

        res.render('login', {
            email: email,
            error: ''
        });
    } else {
        res.render('signup', {
            email: email,
            error: 'Passwords do not match!'
        });
    }
};
