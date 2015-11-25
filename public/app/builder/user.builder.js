'use strict';

app.factory('UserBuilder', function(User, LISTS) {

	var createUserDefault = function() {
		var obj = new User();
		obj.gender = LISTS.gender[0].code;
		return obj;
	}

	var createUser = function(user) {
		var obj = new User()
		obj.create(user);
		return obj;
	}

	return {
		createUserDefault: createUserDefault,
		createUser: createUser
	}
});