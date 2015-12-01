'use strict';

app.factory('SystemBuilder', function(System, LISTS) {

	var createSystemDefault = function() {
		var obj = new System();
		return obj;
	}

	var createScopeSystem = function(system) {
		return {
			id: system._id,
			name: system.name
		}
	}

	var createWidgetSystem = function(system) {
		var obj = new System();
		obj.createWidget(system);
		return obj;
	}

	var createWidgetSystemMenu = function(system) {
		var obj = new System();
		obj.createWidgetMenu(system);
		return obj;
	}

	return {
		createSystemDefault: createSystemDefault,
		createScopeSystem: createScopeSystem,
		createWidgetSystem: createWidgetSystem,
		createWidgetSystemMenu: createWidgetSystemMenu
	}
});