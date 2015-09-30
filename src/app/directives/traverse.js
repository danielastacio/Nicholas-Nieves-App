(function () {
    angular
        .module('nick.app.directives')
        .directive('traverse', Traverse);
        
        Traverse.$inject = ['$document'];
        
        function Traverse ($document) {
            return {
                restrict: 'A',
                link: function (scope, element) {
    
                    // var prevButton, nextButton;
                    var idx = 0; // default
                    var maxIdx;
                    var ulLists = [];
                    var targetUlList = [];
                    var position = 0;
    
                    $document.ready(function () {
    
                        for (var i = 0; i < element.children().length; i++) {
    
                            /*  Check the children of the element that has this directive
                            to see if there is more than one unordered list (<ul>). If so,
                            they will be pushed into an array so that they can be traversed
                            invidually. 
                            */
    
                            if (element.children().eq(i)[0].nodeName === 'UL') {
                                ulLists.push(angular.element(element.children().eq(i)[0]));
                            } //end of if
    
                        } //end of for


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
    
                        /* ----------------------------------------------------------------------- */
                        // Reset Carousel every time the data for "film.ctrl.genre" is changed 
    
    
                        $document.on('click', function (e) {

                            target = angular.element(e.target);

                            if (target.hasClass('current') && ulLists.length > 1) {
    
                                idx = 0;
                                position = 0;
    
                                for (var i = 0; i < ulLists.length; i++) {
    
                                    ulLists[i].css({
                                        'left': position + '%'
                                    });
                                }
                            }

                            if (ulLists.length === 1) {

                                maxIdx = ulLists[0].children().length - 1;
    
                                targetUlList.push(ulLists[0]);

                                if (target.hasClass('nextButton')) {                                    
                                    traverseForward();
                                }

                                if (target.hasClass('prevButton')) {                                    
                                    traverseBackwards();
                                }
                            } // end of if

                            else {
    
                                /* ---------------------------------------------------------------------------- */
    
                                /*  Make sure to reset "targetUlList" array to prevent the user from creating duplicates
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
    
                        /* ----------------------------------------------------------------------- */
    

    
                            
                        // prevButton.on('click', function () {
    
                        //     if (ulLists.length === 1) {

                        //         maxIdx = ulLists[0].children().length - 1;

                        //         targetUlList.push(ulLists[0]);
                        //         traverseBackwards();
                        //     } // end of if
                        //     else {

                        //         /* --------------------------------------------------------------------------- */
    
                        //           Make sure to reset "targetUlList" array to prevent the user from creating duplicates
                        //             of the same unordered list.
                                
                        //         targetUlList.splice(0, 1);
    
                        //         /* ---------------------------------------------------------------------------- */
    
                        //         for (var i = 0; i < ulLists.length; i++) {
    
                        //             maxIdx = ulLists[i].children().length - 1;
    
                        //             if (scope.film.genre === 'Comedy' && ulLists[i].hasClass('Comedy')) {
    
                        //                 targetUlList.push(ulLists[i]);
                        //                 traverseBackwards();
    
                        //             } else if (scope.film.genre === 'Drama' && ulLists[i].hasClass('Drama')) {
    
                        //                 targetUlList.push(ulLists[i]);
                        //                 traverseBackwards();
    
                        //             } else if (scope.film.genre === 'Miscellaneous' && ulLists[i].hasClass('Miscellaneous')) {
    
    
                        //                 targetUlList.push(ulLists[i]);
                        //                 traverseBackwards();
    
                        //             }
                        //         }
                        //     }
    
                        // }); // end of click function
                    }); // end of ready function
                } // end of link function
        } // end of return
    }
})();