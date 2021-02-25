$('body').ready(function() {
	// Hide
	$('.filter').hide();
	$('.center').hide();
	$('.github').hide();
	$('.nav').hide();

	// Show
	$('.filter').slideDown(800, function(){
		$('.center').fadeIn(800);
		$('.github').fadeIn(800);
		$('.nav').fadeIn(800);
	});
});
