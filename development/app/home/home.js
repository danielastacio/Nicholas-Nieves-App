(function (){
	angular
		.module('nick.app.home')
		.controller('Home', Home);

		function Home() {
			var vm = this;
			vm.greet = 'Welcome';
		}
})();