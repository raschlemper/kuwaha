'use strict';

var _ = require('underscore');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var localStorage = require('localstorage');
var User = require('../user/user.model');
var secret = 'teratec';

/**
 * Get list of systems
 */
exports.login = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, function (err, user) {
        if (err) return res.send(500, err);
        if (!user) return res.send(401);

    	user.verifyPassword(password, function(isMatch) {
      		if (!isMatch) return res.send(401);
          var expires = moment().add(7,'days').valueOf();
          var token = jwt.sign({_id: user._id }, secret, { expiresInMinutes: expires });
	     localStorage.setItem('token', {
            token : token,
            expires: expires,
            user: user.toJSON()
          });
     		return res.json({
      			token : token,
      			expires: expires,
      			user: user.toJSON()
      		});
      	});
    });    
};
