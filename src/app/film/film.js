(function (){
	angular
		.module('nick.app.film')
		.controller('Film', controller);
		
		function controller () {
			var vm = this;
			vm.genre = 'Highlights';
			vm.videos = {
				highlights: {
					dramaReel: {
						url: 'https://www.youtube.com/embed/780smiEqmSc?autoplay=1'
					},
					trailer: {
						url: 'https://www.youtube.com/embed/5ffvzMr6aTc?autoplay=1'
					}
				},
				comedy: {
					textySketch: {
						url: 'https://www.youtube.com/embed/hyyp-3GNqnE?autoplay=1'
					},
					cupForYourLemonade: {

						url: 'https://www.youtube.com/embed/HPYD8K4OuRM?autoplay=1'

					},
					mitch: {

						url: 'https://www.youtube.com/embed/42fDDsnGzzE?autoplay=1'
					},
					chronicMisconception: {

						url: 'https://www.youtube.com/embed/qp3NJl7DLgQ?autoplay=1'
					},
					eliteDaily: {

						url: 'https://www.youtube.com/embed/7s9T1psZY5Y?autoplay=1'

					}
				},
				drama: {
					tenToSix: {
						url: 'https://www.youtube.com/embed/-eCertmgZRc?autoplay=1'
					},
					headlights: {
						url: 'https://www.youtube.com/embed/C6EEB_7NuvE?autoplay=1'
					},
					seanAndFrank: {
						url: 'https://www.youtube.com/embed/KbMFEAnZiTs?autoplay=1'
					},
					teddy: {
						url: 'https://www.youtube.com/embed/C9WOPIyXcmo?autoplay=1'
					},
					inTheEnd: {
						url: 'https://www.youtube.com/embed/weYV4p6rWFA?autoplay=1'
					}
				},
				miscellaneous: {
					withoutWords: {
						url: 'https://www.youtube.com/embed/Uq9nV2K2tHA?autoplay=1'
					},
					twix: {
						url: 'https://player.vimeo.com/video/60473648?color=ff9933&byline=0&portrait=0?autoplay=1'
					},
					listerine: {
						url: 'https://player.vimeo.com/video/51100163?color=ff9933&byline=0&portrait=0'
					},
					topFive: {
						url: 'https://www.youtube.com/embed/LbL-d9T45gI?autoplay=1'
					}
				}
		  	};
		}
})();