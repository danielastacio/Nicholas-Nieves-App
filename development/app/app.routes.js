(function () {
	angular
		.module('nick.app')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'app/home/home.html'
				})
				.when('/writing', {
					templateUrl: 'app/writing/writing.html'
				})
				.when('/gallery', {
					templateUrl: 'app/gallery/gallery.html'
				})
				.when('/film', {
					templateUrl: 'app/film/film.html'
				})
				.when('/resume', {
					templateUrl: 'app/resume/resume.html'
				})
				.otherwise({
					redirectTo: '/'
				});
			}]);
})();