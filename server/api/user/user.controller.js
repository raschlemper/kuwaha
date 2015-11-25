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

/**
 * Get user
 */
exports.show = function(req, res, next) {
    var userId = req.params.id;
    User.findById(userId, function(err, user) {
        if (err) return res.send(500, err);
        if (!user) return res.send(401);
        res.json(200, user);
    });
};

/**
 * Remove user
 */
exports.destroy = function(req, res, next) {
    var userId = req.params.id;
    User.findByIdAndRemove(userId, function(err, user) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};

/**
 * Create user
 */
exports.create = function(req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
        if (err) return res.send(500, err);
        res.json(200, user);
    });   
};

/**
 * Change user
 */
exports.change = function(req, res, next) {
    var userId = req.params.id;
    User.findByIdAndUpdate(userId, req.body, function(err, user) {
      if(err) return res.send(500, err);
      res.json(200, user);
    });
};
