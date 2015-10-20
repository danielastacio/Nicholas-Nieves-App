(function () {
	angular
		.module('nick.app')
		.controller('Site', controller);

	controller.$inject = ['$scope', '$window','viewportService'];

	function controller($scope, $window, viewportService) {
		var vm = this;
		vm.assignClass = assignClass;
		vm.assignBannerSrc = assignBannerSrc;
		vm.assignBannerClass = assignBannerClass;
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

		function assignBannerSrc() {
			if(vm.view === 'Home') {
				return vm.banners.home;
			}

			if(vm.view === 'Resume') {
				return vm.banners.resume;
			}

			if(vm.view === 'Writing') {
				return vm.banners.writing;
			}

			if(vm.view === 'Film') {
				return vm.banners.film;
			}

			if(vm.view === 'Gallery') {
				return vm.banners.gallery;
			}
		}

		function assignBannerClass() {
			if(vm.view === 'Home') {
				return 'HomeBanner';
			}

			if(vm.view === 'Resume') {
				return 'ResumeBanner';
			}

			if(vm.view === 'Writing') {
				return "WritingBanner";
			}

			if(vm.view === 'Film') {
				return 'FilmBanner';
			}

			if(vm.view === 'Gallery') {
				return 'GalleryBanner';
			}
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