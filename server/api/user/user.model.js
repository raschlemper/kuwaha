'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var deepPopulate = require('mongoose-deep-populate');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    lastname: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
	    type: String,
	    required: true
	},
    gender: String
});


/**
 * Virtuals
 */


/**
 * Validations
 */


/**
 * Pre-save hook
 */

UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(5, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});


/**
 * Methods
 */

UserSchema.methods.verifyPassword = function(password, next) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return next(err);
        next(isMatch);
    });
};

UserSchema.plugin(deepPopulate);
module.exports = mongoose.model('User', UserSchema);
