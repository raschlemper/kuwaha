'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var Access = require('./access.model');

/**
 * Get list of accesss
 */
exports.index = function(req, res, next) {
    Access.find({})    
    .deepPopulate('system user')
    .exec(function(err, accesss) {
        if (err) return res.send(500, err);
        res.json(200, accesss);
    });
};

/**
 * Get access
 */
exports.show = function(req, res, next) {
    var accessId = req.params.id;
    Access.findById(accessId) 
    .deepPopulate('system')
    .deepPopulate('user')
    .exec(function(err, access) {
        if (err) return res.send(500, err);
        if (!access) return res.send(401);
        res.json(200, access);
    });
};

/**
 * Remove access
 */
exports.destroy = function(req, res, next) {
    var accessId = req.params.id;
    Access.findByIdAndRemove(accessId, function(err, access) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};

/**
 * Create access
 */
exports.create = function(req, res, next) {
    var newAccess = new Access(req.body);
    newAccess.save(function(err, access) {
        if (err) return res.send(500, err);
        res.json(200, access);
    });   
};

/**
 * Change access
 */
exports.change = function(req, res, next) {
    var accessId = req.params.id;
    Access.findByIdAndUpdate(accessId, req.body, function(err, access) {
      if(err) return res.send(500, err);
      res.json(200, access);
    });
};
