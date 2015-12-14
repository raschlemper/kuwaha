'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var auth = require('./auth.service');
var userController = require('../api/user/user.controller');
var User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport').setup(User, config);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);

var router = express.Router();

router.use('/local', require('./local'));
// router.use('/facebook', require('./facebook'));
// router.use('/twitter', require('./twitter'));
// router.use('/google', require('./google'));

router.get('/authenticate', auth.isAuthenticated, userController.show);

module.exports = router;