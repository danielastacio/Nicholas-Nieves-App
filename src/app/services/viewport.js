(function () {

  angular
    .module('nick.app.services')
    .service('viewportService', viewportService);

  viewportService.$inject = ['$window'];

  function viewportService($window) {

    var self = this;

    self.scrollToTop = scrollToTop;

    function scrollToTop() {
      $window.scrollTo(0, 0);
    }

  }

})();