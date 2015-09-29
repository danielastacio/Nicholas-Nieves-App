(function () {
	angular
		.module('nick.app.writing')
		.controller('Writing', controller);

		function controller () {
			var vm = this;
			vm.message = "it works";
		}

		
})();