'use strict';

app.factory('System', function() {

	return function() {

		var system = {
			id: null,
			name: null,
			description: null,
			usersSize: null
		}

		system.createWidget = function(obj) {
			system.id = obj._id;
			system.name = obj.name;
			system.description = obj.description;
			system.usersSize = getSizeNameUser(obj.users);
		}

		var getSizeNameUser = function(users) {
			if(!users) return '0 Usuários ';
			if(users.length > 1) { return users.length + ' Usuários'; }
			return '1 Usuário';
		}

		return system;

	}

});