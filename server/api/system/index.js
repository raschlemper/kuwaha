'use strict';

var express = require('express');
var controller = require('./system.controller');
var accessCtrl = require('../access/access.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show, accessCtrl.indexUser, controller.showFull);
router.get('/:id/size', controller.show, accessCtrl.indexUser, controller.showSize);

module.exports = router;
