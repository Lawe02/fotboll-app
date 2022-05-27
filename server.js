'use strict'

const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 8020;

app.use(express.urlencoded());

app.use(express.static('public'));

app.listen(port);

console.log('Server up and running, listning on port' + port);
