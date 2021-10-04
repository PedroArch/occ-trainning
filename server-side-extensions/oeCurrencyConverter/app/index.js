'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = new express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes')(app);

module.exports = app;
