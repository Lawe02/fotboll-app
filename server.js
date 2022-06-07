'use strict'

const { urlencoded } = require('body-parser');
const express = require('express');
const router = require ('./routes');
const app = express();
const port = 8020;
const indexRouter = require('./routes/index');
const dataRouter = require('./routes/data')

app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/data', dataRouter);

app.listen(port);

console.log('Server up and running, listning on port' + port);

module.exports = app;
