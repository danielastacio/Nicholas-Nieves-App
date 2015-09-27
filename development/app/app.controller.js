(function () {
	angular
		.module('nick.app')
		.controller('Site', controller);

	controller.$inject = ['$scope', '$window'];

	function controller($scope, $window) {
		var vm = this;
		vm.assignClass = assignClass;
		vm.view = null;

		function assignClass() {
			return vm.view;
		}

		$scope.$watch(function () {
			return $window.location.hash;

		}, function (url) {

			if (url === '#/') {
				vm.view = 'Home';
			}

			if (url === '#/writing') {
				vm.view = 'Writing';
			}

			if (url === '#/gallery') {
				vm.view = 'Gallery';
			}

			if (url === '#/resume') {
				vm.view = 'Resume';
			}

			if (url === '#/film') {
				vm.view = 'Film';
			}
		});
	}
})();