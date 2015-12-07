'use strict';

var compose = require('composable-middleware');
var _ = require('underscore');
var Usuario = require('../user/user.model');

/**
 * Get list of systems
 */
exports.login = function(req, res, next) {
    var username = req.body.username;
    console.log(username);
    Usuario.findOne({username: username}, function (err, user) {
        if (err) return res.send(500, err);
        if (!user) return res.send(401);
        console.log(user);
        res.json(200, user);
    });    
};
