"use strict";

document.addEventListener('DOMContentLoaded', function() {






//------------------------------------------------------------------------------------
//								COUNT UP SCRIPT
//------------------------------------------------------------------------------------

var benefits_4col_counter_3 = $('#benefits-4col-counter-3').waypoint({
	handler: function(direction) {
		$(this.element).find('.count-up-data').each(function(i, el){
			var endVal = el && Number.isInteger(el.textContent * 1) ? el.textContent * 1 : 100 ;
			$(el ).countup({endVal: endVal, options: { separator : ''}});
		});
        benefits_4col_counter_3[0].disable();
	},
	offset: '90%'
});

//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-3item-nogutters').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    navText: ['',''],
    dotsEach: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 3
        }
    }

});




});
