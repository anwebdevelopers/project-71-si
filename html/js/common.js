$(function() {
    'use strict';

    //*******************************************************
    //Меню
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
    // Плавный скролл
    //*******************************************************

    $('.scroll').click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) + 600), 'swing');
    });
});
