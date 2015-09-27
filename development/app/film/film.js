(function (){
	angular
		.module('nick.app.film')
		.controller('Film', controller);
		
		function controller () {
			var vm = this;
			vm.genre = 'Comedy';
		}
})();