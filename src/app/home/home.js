(function () {
	angular
		.module('nick.app.home')
		.controller('Home', controller);
		
	controller.$inject = ['$http'];

	function controller($http) {
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
				})
					.success(function (data) {
						console.log(data);
						if (!data.success) {
							// if not successful, bind errors to error variables
							vm.message = 'success';
						} else {
							// if successful, bind success message to message
							vm.message = 'error';
						}
					});
			}
		}
	}
})();