'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var User = require('./user.model');

/**
 * Get list of users
 */
exports.index = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) return res.send(500, err);
        res.json(200, users);
    });
};
