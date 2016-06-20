var express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , config = require('./server/server').config
  , httpReq = require('./server/httpUtil')
  , serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + '/static'));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(httpReq.autoRequest);
module.exports = app;
