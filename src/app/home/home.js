(function () {
	angular
		.module('nick.app.home')
		.controller('Home', controller);
		
	controller.$inject = ['$http','$window','viewportService'];

	function controller($http, $window, viewportService) {
		var vm = this;
		vm.input = {};
		vm.submitContact = submitContact;
		function submitContact() {
			if (vm.contactForm.$valid) {
				alert('Your message was successfully sent');
				vm.success = true;
				$http({
					method: 'POST',
					url: 'contactForm.php',
					data: $.param(vm.input),  // pass in data as strings
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
				});

				console.log(vm.input);
				vm.input = null;
				// viewportService.scrollToTop();
				// $window.location.reload();
			}
		}
	}
})();