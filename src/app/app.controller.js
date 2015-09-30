(function () {
	angular
		.module('nick.app')
		.controller('Site', controller);

	controller.$inject = ['$scope', '$window','viewportService'];

	function controller($scope, $window, viewportService) {
		var vm = this;
		vm.assignClass = assignClass;
		vm.view = null;

		vm.banners = {
			home: 'content/images/banners/Casual.png',
			resume: 'content/images/banners/Vogue.png',
			writing: 'content/images/banners/Corny.png',
			film: 'content/images/banners/Eccentric.png',
			gallery: 'content/images/banners/Thunder.png',

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