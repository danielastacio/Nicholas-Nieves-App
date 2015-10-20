(function () {
    angular
        .module('nick.app.directives')
        .directive('youtubeUrl', YoutubeUrl);

    function YoutubeUrl() {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {

	           	var Url = attr.youtubeUrl;
			    var parent = elem.parent();
		      
		      
			      elem.on('click', function() {
			        parent.css({
			          'width': '100%',
			          'height': '100%'
			        });
			        
			        elem.css({
			          'display': 'none'
			        });
			        
			        parent.append('<iframe src="' + Url + '" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>');
			      });

            } // end of link function
        }; // end of return
    }
})();