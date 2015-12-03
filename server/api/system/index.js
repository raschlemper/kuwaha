'use strict';

var express = require('express');
var controller = require('./system.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show, controller.showUsers, controller.showFull);
router.get('/:id/size', controller.show, controller.showUsers, controller.showSize);

module.exports = router;
