'use strict';

var express = require('express');
var controller = require('./system.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.change);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);

module.exports = router;
