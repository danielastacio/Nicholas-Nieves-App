(function () {
	angular
		.module('nick.app')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'app/home/home.html'
				})
				.otherwise({
					redirectTo: '/'
				});
			}]);
})();