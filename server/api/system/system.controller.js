'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var System = require('./system.model');
var accessCtrl = require('../access/access.controller');

/**
 * Get list of systems
 */
exports.index = function(req, res, next) {
    System.find({}, function(err, systems) {
        if (err) return res.send(500, err);
        res.json(200, systems);
    });
};

/**
 * Get system
 */
exports.show = function(req, res, next) {
    var systemId = req.params.id;
    System.findById(systemId, function(err, system) {
        if (err) return res.send(500, err);
        if (!system) return res.send(401);
        next(_.clone(system));
    });
};

/**
 * Get system size
 */
exports.showSize = function(system, req, res, next) {
    res.json(200, { 
        _id: system._id,
        name: system.name,
        size: {
            user: system.users.length
        }
    });
};

/**
 * Get system size
 */
exports.showFull = function(system, req, res, next) {
    res.json(200, { 
        _id: system._id,
        name: system.name,
        users: system.users
    });
};
