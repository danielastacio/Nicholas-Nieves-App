(function () {

  angular
    .module('nick.app.directives')
    .directive('toggleElm', function () {
      return {
        restrict: 'A',
        link: function (scope, element, attr) {
          var valueOfAttr = attr.toggleElm;
          var arrayOfAttr = attr.toggleElm.split(',');
          var allElemArray = [];
          allElemArray.push(document.body.querySelectorAll('*'));

          var allElemNodes = [];
          var allElemClasses = [];
          var targetElemNodes = [];
          var i, b;

          if (arrayOfAttr.length === 1) {

            for (i = 0; i < allElemArray[0].length; i++) {
              allElemClasses.push(allElemArray[0][i].className);
              if (allElemClasses[i].indexOf(valueOfAttr) > -1) {
                allElemNodes.push(allElemArray[0][i]);
              } // End of if statement
            } // End of for loop
      
        
            element.on('click', function () {
              for (i = 0; i < allElemNodes.length; i++) {
                allElemNodes[i].classList.toggle('toggled');
              }   // End of for loop
            }); // End of element click function
          } // End of if Statement  
        
          if (arrayOfAttr.length > 1) {

            for (i = 0; i < allElemArray[0].length; i++) {
              if (allElemArray[0][i].className !== '') {
                allElemClasses.push(allElemArray[0][i].className);
                allElemNodes.push(allElemArray[0][i]);
              } // End of if statement
            } // End of for loop
  
            for (i = 0; i < allElemNodes.length; i++) {
              for (b = 0; b < allElemNodes.length; b++) {
                if (allElemClasses[b].indexOf(arrayOfAttr[i]) > -1) {
                  targetElemNodes.push(allElemNodes[b]);
                } // End of if statement
              } // End of inner loop
            } // End of outer loop
          
            element.on('click', function () {
              for (i = 0; i < targetElemNodes.length; i++) {
                targetElemNodes[i].classList.toggle('toggled');
              } // End of for loop
            }); // End of element click function
          } // End of if statement
        } // End of link function
      }; // End of Return
    });

})();