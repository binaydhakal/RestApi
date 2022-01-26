const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

//app.use(bodyParser.urlencoded()); //x-www-from-urlencoded <form>
app.use(bodyParser.json()); //application/json

// Middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// GET  /feed/posts
app.use('/feed', feedRoutes);

app.listen(8080);