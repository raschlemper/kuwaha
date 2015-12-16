/**
 * Main application routes
 */

'use strict';

var auth = require('./auth/auth.service');

module.exports = function(app) {

  // Insert routes below
  app.use('/auth', require('./auth'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/systems', require('./api/system'));
  app.use('/api/access', require('./api/access'));
  // All other routes should redirect to the index.html

  // para todas as rotas
  app.all('/api/*', auth.isAuthenticated);//.unless({path: ['/token']}));

  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
