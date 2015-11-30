'use strict';

app.factory('SystemBuilder', function(System, LISTS) {

	var createSystemDefault = function() {
		var obj = new System();
		return obj;
	}

	var createWidgetSystem = function(system) {
		var obj = new System()
		obj.createWidget(system);
		return obj;
	}

	return {
		createSystemDefault: createSystemDefault,
		createWidgetSystem: createWidgetSystem
	}
});