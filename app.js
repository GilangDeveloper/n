const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const apirouter = require('./routes/api');
// const mainrouter = require('./routes/main.js');

app.use('/', express.static(__dirname + '/view/'))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apirouter);
// app.use('/main', mainrouter);


app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;