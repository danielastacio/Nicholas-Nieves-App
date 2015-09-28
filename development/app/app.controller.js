(function () {
	angular
		.module('nick.app')
		.controller('Site', controller);

	controller.$inject = ['$scope', '$window','viewportService'];

	function controller($scope, $window, viewportService) {
		var vm = this;
		vm.assignClass = assignClass;
		vm.view = 'null';

		vm.banners = {
			home: 'http://localhost:5000/content/images/banners/Casual.png',
			resume: 'http://localhost:5000/content/images/banners/Vogue.png',
			writing: 'http://localhost:5000/content/images/banners/Corny.png',
			film: 'http://localhost:5000/content/images/banners/Eccentric.png',
			gallery: 'http://localhost:5000/content/images/banners/Thunder.png',

		};

		function assignClass() {
			return vm.view;
		}

		$scope.$watch(function () {
			return $window.location.hash;

		}, function (url) {
			
			viewportService.scrollToTop();

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