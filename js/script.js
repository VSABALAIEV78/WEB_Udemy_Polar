$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="" class="prev1"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="" class="next"></img></button>'

    });
});