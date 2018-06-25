$(document).ready(function() {
	$('.chuot').click(function(event) {
		$('html, body').animate({
			scrollTop: $('.mt-5').offset().top
		})
	});
});