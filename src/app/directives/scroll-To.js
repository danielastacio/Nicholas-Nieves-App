(function () {
    angular
        .module('nick.app.directives')
        .directive('scrollTo', ScrollTo);

    ScrollTo.$inject = ['$document','$window'];

    function ScrollTo($document, $window) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {

            $document.ready(function () {

                var valueOfAttr = attr.scrollTo;
                var arrayOfAttr = attr.scrollTo.split(',');
                var allElemArray = [];
                var allElemNodes = [];
                var allElemIds = [];
                var allElemClasses = [];
                var target;
                
                    element.on('click', function () {

                        allElemArray.push(document.body.querySelectorAll('*'));

                        for (i = 0; i < allElemArray[0].length; i++) {

                            allElemNodes.push(allElemArray[0][i]);
                            allElemIds.push(allElemArray[0][i].id);
                            allElemClasses.push(allElemArray[0][i].className);

                            if (allElemClasses[i].indexOf(valueOfAttr) > -1) {

                               target = allElemNodes[i];

                               console.log(target.offsetTop);

                               $('html, body').animate({
                                scrollTop: target.offsetTop
                               });

                            } // End of if statement

                            if (allElemIds[i].indexOf(valueOfAttr) > -1) {

                               target = allElemNodes[i];

                               $('html, body').animate({
                                scrollTop: target.offsetTop
                               });

                            } // End of if statement
                        } // End of for loop
                    }); // End of element click function

                }); // end of document ready
            } // end of link function
        }; // end of return
    }
})();