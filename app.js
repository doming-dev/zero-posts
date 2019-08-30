const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send('it works!');
});

app.listen(5000, result => {
    console.log('listening on port 5000');
});
