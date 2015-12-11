'use strict';

var express = require('express');
var controller = require('./system.controller');
var accessCtrl = require('../access/access.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated, controller.index);
router.get('/:id', auth.isAuthenticated, controller.show, accessCtrl.indexUser, controller.showFull);
router.get('/:id/size', auth.isAuthenticated, controller.show, accessCtrl.indexUser, controller.showSize);

module.exports = router;
