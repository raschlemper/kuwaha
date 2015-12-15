'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var auth = require('./auth.service');
var userController = require('../api/user/user.controller');
var User = require('../api/user/user.model');

require('./local/passport').setup(User, config);

var router = express.Router();
router.use('/local', require('./local'));
router.get('/authenticate', auth.isAuthenticated, userController.show);

module.exports = router;