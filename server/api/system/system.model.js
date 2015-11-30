'use strict';

var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');

var Schema = mongoose.Schema;

var SystemSchema = new Schema({
  name: String,
  description: String,
  users: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

/**
 * Virtuals
 */
SystemSchema
  .virtual('systemData')
  .get(function() {
    return {
      'name': this.name,
      'description': this.description,
      'users': this.users
    }
  });
 	

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
SystemSchema.methods = {
};

SystemSchema.plugin(deepPopulate);
module.exports = mongoose.model('System', SystemSchema);
