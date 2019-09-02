const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dbConnect = require('./utility/db-connect');

const postRoutes = require('./routes/post-routes');
const homeRoutes = require('./routes/home-routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(postRoutes);

mongoose
    .connect(dbConnect, { useNewUrlParser: true })
    .then(result => {
        app.listen(5000, result => {
            console.log('listening on port 5000');
        });
    })
    .catch(err => {
        console.log(err);
    });
