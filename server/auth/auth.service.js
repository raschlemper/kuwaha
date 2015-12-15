'use strict';

var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var moment = require('moment');
var config = require('../config/environment');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({
  	secret: config.secrets.session
});

exports.signToken = function(id, role) {
   	var expires = moment().add(7,'days').valueOf();
  	return jwt.sign({ _id: id, role: role }, config.secrets.session, {
    	expiresInMinutes: expires
  	});
}

exports.isAuthenticated = function(req, res, next) {
	if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
    }
    validateJwt(req, res, next);
}