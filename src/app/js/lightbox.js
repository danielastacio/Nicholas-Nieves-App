(function($) {

	$(document).ready(function () { 
		function openLightbox(elem) {
			$('html').addClass('no-scroll');
			$('' + elem + ' .overlay').fadeIn(200);
		}

		function closeLightbox() {
			$('html').removeClass('no-scroll');
			$('.overlay').fadeOut(200);

			for (var i = 0; i < $('.overlay').length; i++) {
				$('.overlay')[i].scrollTop = 0;
			}
		}

		$(document).click(function(e) {
			var target = $(e.target);

			if(target[0].className === 'viewStartingToday') {
				openLightbox('.StartingToday');
			}

			if(target[0].className === 'viewSpaceMolecules toggled') {
				openLightbox('.SpaceMolecules');
			}

			if(target[0].className === 'viewFuckPicasso toggled') {
				openLightbox('.FuckPicasso');
			}

			if(target[0].className === 'viewGirlNextDoor toggled') {
				openLightbox('.GirlNextDoor');
			}

			else if (target[0].className === 'closeLightbox') {
				closeLightbox();
			}
		});
	});
})(jQuery);