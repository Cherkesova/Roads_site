$(function () {

    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH){
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
         }
    }

    //Smooth scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();
        
        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top;

        nav.removeClass('show');
        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 700);

    });

    // Burger

    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click',function(event){
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $('#reviewSlider');
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

});