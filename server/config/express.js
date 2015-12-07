/**
 * Express configuration
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var config = require('./environment');
var path = require('path');

module.exports = function(app) {
  var env = app.get('env');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(config.root, 'public')));
  app.set('appPath', config.root + '/public');
  
  if ('production' === env) {
  }

  if ('development' === env || 'test' === env) {
  }
};