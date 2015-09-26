(function () {
	angular
		.module('nicholasNieves.writingPageModule')
		.controller('nicholasNieves.writingPageModule.writingPageController', writingPageController);

		function writingPageController () {
			var vm = this;
			vm.message = "it works";
		}

		
})();