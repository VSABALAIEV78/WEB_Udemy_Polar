$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
                $('.catalog-item__second').eq(i).toggleClass('catalog-item__second_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');



});