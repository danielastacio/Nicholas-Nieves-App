(function () {
    angular
        .module('nick.app.directives')
        .directive('traverse', ['$document', function ($document) {

            function link(scope, element, attrs) {

                var prevButton, nextButton;
                var idx = 0; // default
                var maxIdx;
                var ulLists = [];
                var targetUlList = [];
                var position = 0;

                $document.ready(function () {

                    for (var i = 0; i < element.children().length; i++) {

                        /* 	Check the children of the element that has this directive
                        to see if there is more than one unordered list (<ul>). If so,
                        they will be pushed into an array so that they can be traversed
                        invidually. 
                        */

                        if (element.children().eq(i)[0].nodeName === 'UL') {
                            ulLists.push(angular.element(element.children().eq(i)[0]));
                        } //end of if

                        if (element.children().eq(i).hasClass('prevButton')) {
                            prevButton = element.children().eq(i);
                        }

                        if (element.children().eq(i).hasClass('nextButton')) {
                            nextButton = element.children().eq(i);
                        }

                    } //end of for

                    /* ----------------------------------------------------------------------- */
                    // Reset Carousel every time the data for "film.ctrl.genre" is changed 


                    $document.on('click', function (e) {
                        if (angular.element(e.target).hasClass('current') && ulLists.length > 1) {

                            idx = 0;
                            position = 0;

                            for (var i = 0; i < ulLists.length; i++) {

                                ulLists[i].css({
                                    'left': position + '%'
                                });
                            }
                        }
                    });

                    /* ----------------------------------------------------------------------- */

                    nextButton.on('click', function () {

                        function traverseForward() {

                            if (idx === maxIdx) {

                                idx = 0;
                                position = 0;

                                targetUlList[0].css({
                                    'left': position + '%',
                                });


                            } // end of inner if
                            else {

                                idx += 1;
                                position += 100;

                                targetUlList[0].css({

                                    'left': '-' + position + '%',

                                });

                            } // end of inner else
                        } // end of traverseForward	

                        if (ulLists.length === 1) {

                            maxIdx = ulLists[0].children().length - 1;

                            targetUlList.push(ulLists[0]);
                            traverseForward();
                        } // end of if
                        else {

                            /* ---------------------------------------------------------------------------- */

                            /* 	Make sure to reset "targetUlList" array to prevent the user from creating duplicates
                                of the same unordered list.
                            */
                            targetUlList.splice(0, 1);

                            /* ---------------------------------------------------------------------------- */



                            for (var i = 0; i < ulLists.length; i++) {

                                maxIdx = ulLists[i].children().length - 1;

                                if (scope.film.genre === 'Comedy' && ulLists[i].hasClass('Comedy')) {

                                    targetUlList.push(ulLists[i]);
                                    traverseForward();
                                } else if (scope.film.genre === 'Drama' && ulLists[i].hasClass('Drama')) {

                                    targetUlList.push(ulLists[i]);
                                    traverseForward();
                                } else if (scope.film.genre === 'Miscellaneous' && ulLists[i].hasClass('Miscellaneous')) {


                                    targetUlList.push(ulLists[i]);
                                    traverseForward();
                                }
                            }
                        }
                    });

                    prevButton.on('click', function () {
                        function traverseBackwards() {
                            if (idx === 0) {

                                idx = maxIdx;
                                position = parseInt(maxIdx + '00');

                                targetUlList[0].css({
                                    'left': '-' + position + '%',
                                });


                            } // end of if
                            else {

                                idx -= 1;
                                position -= 100;

                                targetUlList[0].css({
                                    'left': '-' + position + '%',
                                });

                            } // end of else
                        } // end of traverseBackwards

                        if (ulLists.length === 1) {

                            targetUlList.push(ulLists[0]);
                            traverseBackwards();
                        } // end of if
                        else {

                            /* ---------------------------------------------------------------------------- */

                            /* 	Make sure to reset "targetUlList" array to prevent the user from creating duplicates
                                of the same unordered list.
                            */
                            targetUlList.splice(0, 1);

                            /* ---------------------------------------------------------------------------- */

                            for (var i = 0; i < ulLists.length; i++) {

                                maxIdx = ulLists[i].children().length - 1;

                                if (scope.film.genre === 'Comedy' && ulLists[i].hasClass('Comedy')) {

                                    targetUlList.push(ulLists[i]);
                                    traverseBackwards();

                                } else if (scope.film.genre === 'Drama' && ulLists[i].hasClass('Drama')) {

                                    targetUlList.push(ulLists[i]);
                                    traverseBackwards();

                                } else if (scope.film.genre === 'Miscellaneous' && ulLists[i].hasClass('Miscellaneous')) {


                                    targetUlList.push(ulLists[i]);
                                    traverseBackwards();

                                }
                            }
                        }

                    }); // end of click function
                }); // end of ready function
            } // end of link function

            return {
                link: link
            };
        }]);
})();