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
AccessSchema
  .virtual('systemUser')
  .get(function() {
    return {
    	'name': this.user.name,
    	'fullname': this.user.name + ' ' + this.user.lastname,
      'shortname': this.user.name.charAt(0) + this.user.lastname.charAt(0),
      'username': this.user.username,
      'gender': this.user.gender,              
      'email': this.user.email,              
      'status': this.status,              
      'group': this.group,              
      'date': this.date
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
AccessSchema.methods = {
};

AccessSchema.plugin(deepPopulate);
module.exports = mongoose.model('Access', AccessSchema);
