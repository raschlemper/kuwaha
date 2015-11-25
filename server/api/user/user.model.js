'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  lastname: String,
  username: String,
  email: { type: String, lowercase: true },  
  password: String,
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


/**
 * Methods
 */

 // http://mongoosejs.com/docs/populate.html
UserSchema.methods = {
};

UserSchema.plugin(deepPopulate);
module.exports = mongoose.model('User', UserSchema);
