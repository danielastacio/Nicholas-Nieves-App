(function (){
	angular
		.module('nick.app.directives')
		.directive('imageUrl', imageUrl);

		imageUrl.$inject = ['$document','$window'];

		function imageUrl ($document, $window) {
			return {
				restrict: 'A',
				link: function(scope, elem, attr) {
					$document.ready(function () {


							scope.$watch(function () {
							return scope.site.view;

							}, function (view) {

							if (view === 'Home') {
								elem[0].style.backgroundImage = 'url(' + scope.site.banners.home + ')';
							}

							if (view === 'Writing') {
								elem[0].style.backgroundImage = 'url(' + scope.site.banners.writing + ')';
							}

							if (view === 'Gallery') {
								elem[0].style.backgroundImage = 'url(' + scope.site.banners.gallery + ')';
							}

							if (view === 'Resume') {
								elem[0].style.backgroundImage = 'url(' + scope.site.banners.resume + ')';
							}

							if (view === 'Film') {
								elem[0].style.backgroundImage = 'url(' + scope.site.banners.film + ')';
							}
						});

					});

				}
			};
		}
})();