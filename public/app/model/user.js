'use strict';

app.factory('User', function() {

	return function() {

		var user = {
			id: null,
			name: null,
			lastname: null,
			username: null,
			fullname: null,
			shortname: null,
			email: null,
			gender: null,
			password: null
		}

		user.create = function(obj) {
			user.id = obj.id;
			user.name = obj.name;
			user.lastname = obj.lastname;
			user.username = obj.username;
			user.fullname = obj.name + ' ' + obj.lastname;
			user.shortname = obj.name.charAt(0) + obj.lastname.charAt(0);
			user.email = obj.email;
			user.gender = obj.gender;
			user.password = obj.password;
		}

		return user;

	}

});