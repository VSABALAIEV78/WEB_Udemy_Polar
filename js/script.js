$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="" class="prev1"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="" class="next"></img></button>',
        responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false,
                dots: true
            },
        }]

    });
});