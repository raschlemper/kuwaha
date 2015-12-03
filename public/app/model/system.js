'use strict';

app.factory('System', function() {

	return function() {

		var system = {
			id: null,
			name: null,
			description: null
		}

		system.createWidget = function(obj) {
			system.id = obj._id;
			system.name = obj.name;
			system.description = obj.description;
		}

		system.createMenu = function(obj) {
			system.id = obj._id;
			system.name = obj.name;
			system.values = {users : obj.users};
		}

		return system;

	}

});