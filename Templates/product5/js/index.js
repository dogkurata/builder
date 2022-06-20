"use strict";

document.addEventListener('DOMContentLoaded', function() {



//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-single-autoh').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 1,
    dots: true,
    navText: ['',''],
    rewind: true
});




//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-single-autoheight').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 1,
    dots: true,
    navText: ['',''],
    rewind: true
});





//------------------------------------------------------------------------------------
//								COUNT UP SCRIPT
//------------------------------------------------------------------------------------

var benefits_single_counter = $('#benefits-single-counter').waypoint({
	handler: function(direction) {
		$(this.element).find('.count-up-data').each(function(i, el){
			var endVal = el && Number.isInteger(el.textContent * 1) ? el.textContent * 1 : 100 ;
			$(el ).countup({endVal: endVal, options: { separator : ''}});
		});
        benefits_single_counter[0].disable();
	},
	offset: '90%'
});

});
