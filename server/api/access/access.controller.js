'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var Access = require('./access.model');

/**
 * Get list of accesss
 */
exports.indexUser = function(system, req, res, next) {
    var systemId = req.params.id;
    Access.find({ 'system': systemId })
    .deepPopulate('user')
    .exec(function(err, access) {
        if (err) return res.send(500, err);
        if (!access) return res.send(401);
        system.users = _.map(access, function(item) {
            return item.systemUser;
        });
        next(system);
    });
};
