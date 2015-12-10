'use strict';

var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var config = require('../../config/environment');

var router = express.Router();

router.post('/', function(req, res, next) {
  	passport.authenticate('local', function (err, user, info) {
  		var error = err || info;
    	if (error) return res.json(401, error);
        if (!user) return res.send(401);
    		var expires = moment().add(7,'days').valueOf();
        var token = jwt.sign({ _id: user._id }, config.secrets.session);
     		return res.json({
      			token : token,
      			expires: expires,
      			user: user.toJSON()
      	});
  	})(req, res, next);
});

module.exports = router;