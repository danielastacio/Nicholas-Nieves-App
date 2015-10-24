(function () {
    angular
        .module('nick.app.directives')
        .directive('youtubeUrl', YoutubeUrl);

    function YoutubeUrl() {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {

            	var iframe = elem.children().eq(0)[0];

	           	// set default src to iframe for each category 

	           	scope.$watch('film.genre', function() {
		  			// reset the carousel 
			  		scope.film.videoIndex = 0;
			  		// set default videos for each tab
			  		
			  		if(scope.film.genre === 'Highlights') {
			  			iframe.src = scope.film.videos.highlights.comedyReel.url;
			  		}
			  		if(scope.film.genre === 'Comedy') {
			  			iframe.src = scope.film.videos.comedy.textySketch.url;
			  		}
			  		if(scope.film.genre === 'Drama') {
			  			iframe.src = scope.film.videos.drama.tenToSix.url;
			  		}
			  		if(scope.film.genre === 'Miscellaneous') {
			  			iframe.src = scope.film.videos.miscellaneous.withoutWords.url;
			  		}
		  		});

		  		scope.$watch('film.videoIndex', function(videoIndex) {
		  			if(scope.film.genre === 'Highlights') {
		  				switch(videoIndex) {
		  					case 0:
		  					iframe.src = scope.film.videos.highlights.comedyReel.url;
		  					break;

		  					case 1: 
		  					iframe.src = scope.film.videos.highlights.dramaReel.url;
		  					break;
		  					
		  					case 2: 
		  					iframe.src = scope.film.videos.highlights.trailer.url;
		  					break;
		  				}
			  		}
			  		if(scope.film.genre === 'Comedy') {
			  			switch(videoIndex) {
		  					case 0:
		  					iframe.src = scope.film.videos.comedy.textySketch.url;
		  					break;

		  					case 1: 
		  					iframe.src = scope.film.videos.comedy.cupForYourLemonade.url;
		  					break;
		  					
		  					case 2: 
		  					iframe.src = scope.film.videos.comedy.mitch.url;
		  					break;

		  					case 3: 
		  					iframe.src = scope.film.videos.comedy.chronicMisconception.url;
		  					break;

		  					case 4: 
		  					iframe.src = scope.film.videos.comedy.eliteDaily.url;
		  					break;
		  				}
			  		}
			  		if(scope.film.genre === 'Drama') {
			  			switch(videoIndex) {
		  					case 0:
		  					iframe.src = scope.film.videos.drama.tenToSix.url;
		  					break;

		  					case 1: 
		  					iframe.src = scope.film.videos.drama.headlights.url;
		  					break;
		  					
		  					case 2: 
		  					iframe.src = scope.film.videos.drama.seanAndFrank.url;
		  					break;

		  					case 3: 
		  					iframe.src = scope.film.videos.drama.teddy.url;
		  					break;

		  					case 4: 
		  					iframe.src = scope.film.videos.drama.inTheEnd.url;
		  					break;
		  				}
			  		}
			  		if(scope.film.genre === 'Miscellaneous') {
			  			switch(videoIndex) {
		  					case 0:
		  					iframe.src = scope.film.videos.miscellaneous.withoutWords.url;
		  					break;

		  					case 1: 
		  					iframe.src = scope.film.videos.miscellaneous.twix.url;
		  					break;
		  					
		  					case 2: 
		  					iframe.src = scope.film.videos.miscellaneous.listerine.url;
		  					break;

		  					case 3: 
		  					iframe.src = scope.film.videos.miscellaneous.topFive.url;
		  					break;
		  				}
			  		}
		  		});

            } // end of link function
        }; // end of return
    }
})();