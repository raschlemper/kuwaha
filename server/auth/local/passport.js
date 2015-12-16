var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function(User, config) {
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password'
        },
        function(username, password, done) {
            User.findOne({ username: username }, function(err, user) {   
                if (err) return done(err);
                if (!user) return done(null, false);
                user.verifyPassword(password, function(isMatch) {
                    if (!isMatch) return done(null, false);
                });        
                return done(null, user);
            });
        }
    ));
};
