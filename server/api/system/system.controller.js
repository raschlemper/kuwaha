'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var System = require('./system.model');

/**
 * Get list of systems
 */
exports.index = function(req, res, next) {
    System.find({})    
    .deepPopulate('users.user')
    .exec(function(err, systems) {
        if (err) return res.send(500, err);
        res.json(200, systems);
    });
};

/**
 * Get system
 */
exports.show = function(req, res, next) {
    var systemId = req.params.id;
    System.findById(systemId) 
    .deepPopulate('users.user')
    .exec(function(err, system) {
        if (err) return res.send(500, err);
        if (!system) return res.send(401);
        res.json(200, system);
    });
};

/**
 * Remove system
 */
exports.destroy = function(req, res, next) {
    var systemId = req.params.id;
    System.findByIdAndRemove(systemId, function(err, system) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};

/**
 * Create system
 */
exports.create = function(req, res, next) {
    var newSystem = new System(req.body);
    newSystem.save(function(err, system) {
        if (err) return res.send(500, err);
        res.json(200, system);
    });   
};

/**
 * Change system
 */
exports.change = function(req, res, next) {
    var systemId = req.params.id;
    System.findByIdAndUpdate(systemId, req.body, function(err, system) {
      if(err) return res.send(500, err);
      res.json(200, system);
    });
};
