'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var Schema = mongoose.Schema;

var AccessSchema = new Schema({
  system: { type: Schema.Types.ObjectId, ref: 'System' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  status: String,
  group: String,
  date: Date  
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
AccessSchema.methods = {
};

AccessSchema.plugin(deepPopulate);
module.exports = mongoose.model('Access', AccessSchema);
