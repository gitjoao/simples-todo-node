const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use([bodyParser.json(), bodyParser.urlencoded({extended: false})])

//Rotas
const index = require('./routes/index');
const todoRoute = require('./routes/todoRoute');

app.use('/', index);
app.use('/todo', todoRoute);

module.exports = app;