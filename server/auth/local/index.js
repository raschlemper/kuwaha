'use strict';

var express = require('express');
var passport = require('passport');
var auth = require("../auth.service");

var router = express.Router();

router.post('/', function(req, res, next) {
  	passport.authenticate('local', function (err, user, info) {
  		var error = err || info;
    	if (error) return res.json(401, error);
        if (!user) return res.send(401);
        var token = auth.signToken(user._id, 'user'/*user.role*/);
        res.json({ token: token });
  	})(req, res, next);
});

module.exports = router;