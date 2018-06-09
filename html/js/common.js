$(function() {
    'use strict';

    //*******************************************************
    //MENU
    //*******************************************************

    var $headerMenuButton = $('.header__button-menu'),
        $headerMenu = $('.menu');
    $headerMenuButton.click(function() {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $headerMenu.fadeIn(600).css({'display': 'flex'});
        } else {
            $this.removeClass('active');
            $headerMenu.fadeOut(600);
        }
    });
    //Выключение при клике по ссылке
    $headerMenu.on('click', 'ul a', function() {
        $headerMenuButton.removeClass('active');
        $headerMenu.fadeOut(600);
    });

    //*******************************************************
    //SCROLL
    //*******************************************************

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
    });

    /*******************************************************/
    //CAROUSEL
    /*******************************************************/
    $('.carousel').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 5,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            361: {
                items: 2,
            },
            641: {
                items: 3
            },
            769: {
                items: 4
            },
            993: {
                items: 5
            }
        }
    });
});
