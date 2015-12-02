/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/systems', require('./api/system'));
  app.use('/api/access', require('./api/access'));
  // All other routes should redirect to the index.html

  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
