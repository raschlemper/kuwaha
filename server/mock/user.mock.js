/**
 * Populate DB with sample data on Users
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
    User.create({
        _id: '55b77647a8d5d3070db4e892',
        name: 'Test',
        lastname: 'User',
        username: 'usertest',
        email: 'test@test.com',
        gender: 'masculino',
        password: 'test'
    }, {
        _id: '55b77647a8d5d3070db4e893',
        name: 'Rafael Augusto',
        lastname: 'Schlemper',
        username: 'raschlemper',
        email: 'raschlemper@gmail.com',
        gender: 'masculino',
        password: '123456'
    }, function() {
        console.log('finished populating users');
    });
});
