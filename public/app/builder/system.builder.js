'use strict';

app.factory('SystemBuilder', function(System, LISTS) {

	var createSystemDefault = function() {
		var obj = new System();
		return obj;
	}

	var createSystem = function(system) {
		var obj = new System()
		obj.create(system);
		return obj;
	}

	return {
		createSystemDefault: createSystemDefault,
		createSystem: createSystem
	}
});