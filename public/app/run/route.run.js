app.run(['$rootScope', function ($rootScope) {

  	$rootScope.$on('$stateChangeStart', function(event, currentRoute, previousRoute) {
  		console.log(currentRoute, previousRoute, getRoute(currentRoute, previousRoute));
  	});
  	$rootScope.$on('$stateChangeSuccess', function(event, currentRoute, previousRoute) {
  		
  	});

	var getRoute = function(currentRoute, previousRoute) {
	  	var routes = currentRoute.url.split('/');
	  	var states = [];
	  	var title = '';
	  	_.map(routes, function(route, index) {
	  		if(route === '') { 
	  			states.push({ name: 'Home', state: 'home' }); 
	  		} else if(route === 'systems') { 
	  			states.push({ name: 'Sistemas', state: 'systems' }); 
	  		} else if(route === ':idSystem') { 
	  			states.push({ name: previousRoute.idSystem, state: 'system', params: { idSystem: previousRoute.idSystem } }); 
	  		} else if(route === 'users') { 
	  			states.push({ name: 'Usuários', state: 'users' }); 
	  		}	
	  		if(index == routes.length - 1) { 
	  			var last = states[states.length - 1];
	  			title = last.name;  
	  			states.splice(states.length - 1, 1);
	  		}
	  	});	
		$rootScope.states = { 'title': title, 'routes': states };
	}

}]);