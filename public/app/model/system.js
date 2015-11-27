'use strict';

app.factory('System', function() {

	return function() {

		var system = {
			id: null,
			name: null,
			description: null
		}

		system.create = function(obj) {
			system.id = obj.id;
			system.name = obj.name;
			system.description = obj.description;
		}

		return system;

	}

});