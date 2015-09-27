(function (){
	angular
		.module('nick.app.home')
		.controller('Home', controller);

		function controller() {
			var vm = this;
			vm.greet = 'Welcome';
		}
})();