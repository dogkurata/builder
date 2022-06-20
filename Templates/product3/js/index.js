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

$('.carousel-5item-nogutters').owlCarousel({
    loop: false,
    margin: 0,
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
        400: {
            items: 3
        },
        700: {
            items: 3
        },
        1200: {
            items: 5
        }
    }

});






});
