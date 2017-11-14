/*==================

	SERVICES
*==================*/

/*document ready method */
$(function () {
	//animate on scroll
	new WOW().init();
	$('#work').magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});

	/*TEAM SECTION*/

	$('#team-members').owlCarousel({
		items:3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});

	/*Recent Events*/
	$('#recent-events').owlCarousel({
		items:1,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true
	});
});


