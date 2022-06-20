"use strict";
window.addEventListener('load', function() {
	AOS.init({
		easing: 'ease-in-out-sine'
	});
});

document.addEventListener('DOMContentLoaded', function() {







//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-4item').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ['',''],
    dotsEach: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    startPosition:1,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1200: {
            items: 3
        },
        1600: {
            items: 4
        }
    }

});




});
