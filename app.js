const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const dbConnect = require('./utility/db-connect');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);

const postRoutes = require('./routes/post-routes');
const homeRoutes = require('./routes/home-routes');
const metaRoutes = require('./routes/meta-routes');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const store = new MongoDbStore({
    uri: dbConnect,
    collection: 'sessions'
});

app.use(
    session({
        secret: 'dom-dev',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use(homeRoutes);
app.use(postRoutes);
app.use(authRoutes);
app.use(metaRoutes);

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
