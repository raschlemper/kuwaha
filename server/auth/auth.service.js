'use strict';

var jwt = require('jsonwebtoken');
var config = require('../config/environment');
var User = require('../api/user/user.model');

exports.isAuthenticated = function(req, res, next) {
    var authorization = req.headers['authorization'];
    console.log('token', authorization);
    jwt.verify(authorization, config.secrets.session, function(err, decoded) {
        if(err) return res.send(401, err);
        console.log(decoded);
        next();
    });
}