$(function(){
    $('.blog__slider-inner').slick({
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots:false,
                }
            },
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    $('.menu a').on('click', function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate( { scrollTop:top }, 1500);
    });

    var mixer = mixitup('.gallery__content');
});


