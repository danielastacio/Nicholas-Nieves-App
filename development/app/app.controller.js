(function (){
	angular
		.module('nick.app')
		.controller('Site', Site);

		function Site () {
			var vm = this;
			vm.message = "this is the site controller";	
		}
})();