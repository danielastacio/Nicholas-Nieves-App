(function (){
	angular
		.module('nick.app.film')
		.controller('Film', controller);
		
		function controller () {
			var vm = this;
			vm.genre = 'Highlights';
			vm.videos = {
				highlights: {
					comedyReel: {
						url: 'https://www.youtube.com/embed/32PPuNM7qnk'
					},
					dramaReel: {
						url: 'https://www.youtube.com/embed/780smiEqmSc'
					},
					trailer: {
						url: 'https://www.youtube.com/embed/5ffvzMr6aTc'
					}
				},
				comedy: {
					textySketch: {
						url: 'https://www.youtube.com/embed/hyyp-3GNqnE'
					},
					cupForYourLemonade: {

						url: 'https://www.youtube.com/embed/HPYD8K4OuRM'

					},
					mitch: {

						url: 'https://www.youtube.com/embed/42fDDsnGzzE'
					},
					chronicMisconception: {

						url: 'https://www.youtube.com/embed/qp3NJl7DLgQ'
					},
					eliteDaily: {

						url: 'https://www.youtube.com/embed/7s9T1psZY5Y'

					}
				},
				drama: {
					tenToSix: {
						url: 'https://www.youtube.com/embed/-eCertmgZRc'
					},
					headlights: {
						url: 'https://www.youtube.com/embed/C6EEB_7NuvE'
					},
					seanAndFrank: {
						url: 'https://www.youtube.com/embed/KbMFEAnZiTs'
					},
					teddy: {
						url: 'https://www.youtube.com/embed/C9WOPIyXcmo'
					},
					inTheEnd: {
						url: 'https://www.youtube.com/embed/weYV4p6rWFA'
					}
				},
				miscellaneous: {
					withoutWords: {
						url: 'https://www.youtube.com/embed/Uq9nV2K2tHA'
					},
					twix: {
						url: 'https://player.vimeo.com/video/60473648?color=ff9933&byline=0&portrait=0'
					},
					listerine: {
						url: 'https://player.vimeo.com/video/51100163?color=ff9933&byline=0&portrait=0'
					},
					topFive: {
						url: 'https://www.youtube.com/embed/LbL-d9T45gI'
					}
				}
		  	};

		  	vm.back = back;
		  	vm.forward = forward;
		  	vm.videoIndex = 0;

		  	function back () {
		  		var maxCount = null;

		  		if(vm.genre === 'Highlights') {
		  			maxCount = Object.keys(vm.videos.highlights).length - 1;

		  			if(vm.videoIndex === 0) {
		  				vm.videoIndex = maxCount;
		  			}

		  			else {
		  				vm.videoIndex -= 1;
		  			}
		  		}

		  		if(vm.genre === 'Comedy') {
		  			maxCount = Object.keys(vm.videos.comedy).length - 1;

		  			if(vm.videoIndex === 0) {
		  				vm.videoIndex = maxCount;
		  			}

		  			else {
		  				vm.videoIndex -= 1;
		  			}
		  		}

		  		if(vm.genre === 'Drama') {
		  			maxCount = Object.keys(vm.videos.drama).length - 1;

		  			if(vm.videoIndex === 0) {
		  				vm.videoIndex = maxCount;
		  			}

		  			else {
		  				vm.videoIndex -= 1;
		  			}
		  		}

		  		if(vm.genre === 'Miscellaneous') {
		  			maxCount = Object.keys(vm.videos.miscellaneous).length - 1;

		  			if(vm.videoIndex === 0) {
		  				vm.videoIndex = maxCount;
		  			}

		  			else {
		  				vm.videoIndex -= 1;
		  			}
		  		}
		  	}

		  	function forward() {
		  		var maxCount = null;

		  		if(vm.genre === 'Highlights') {
		  			maxCount = Object.keys(vm.videos.highlights).length - 1;

		  			if(vm.videoIndex < maxCount) {
		  				vm.videoIndex += 1;
		  			}

		  			else {
		  				vm.videoIndex = 0;
		  			}
		  		}

		  		if(vm.genre === 'Comedy') {
		  			maxCount = Object.keys(vm.videos.comedy).length - 1;

		  			if(vm.videoIndex < maxCount) {
		  				vm.videoIndex += 1;
		  			}

		  			else {
		  				vm.videoIndex = 0;
		  			}
		  		}

		  		if(vm.genre === 'Drama') {
		  			maxCount = Object.keys(vm.videos.drama).length - 1;

		  			if(vm.videoIndex < maxCount) {
		  				vm.videoIndex += 1;
		  			}

		  			else {
		  				vm.videoIndex = 0;
		  			}
		  		}

		  		if(vm.genre === 'Miscellaneous') {
		  			maxCount = Object.keys(vm.videos.miscellaneous).length - 1;

		  			if(vm.videoIndex < maxCount) {
		  				vm.videoIndex += 1;
		  			}

		  			else {
		  				vm.videoIndex = 0;
		  			}
		  		}
		  	}

		}
})();