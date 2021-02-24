const express = require('express');
const app = express();

//Rotas
const index = require('./routes/index');
const todoRoute = require('./routes/todoRoute');

app.use('/', index);
app.use('/todo', todoRoute);

module.exports = app;