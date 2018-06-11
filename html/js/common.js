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

    /*******************************************************/
    //SLIDER
    /*******************************************************/
    $('.slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 600
    });

    /*******************************************************/
    //POPUP
    /*******************************************************/

    $('.popup-with-move-anim').magnificPopup({
       type: 'inline',
       fixedContentPos: false,
       fixedBgPos: true,
       overflowY: 'auto',
       closeBtnInside: true,
       preloader: false,
       midClick: true,
       removalDelay: 300,
       mainClass: 'my-mfp-slide-bottom'
    });

    //------------------------------------------------------------
    // Google Map
    //------------------------------------------------------------
    var markerPositions = new Array();
    	markerPositions[1] = new google.maps.LatLng(55.817883, 37.440213);

    function initialize() {
        var loc, map;

        loc = new google.maps.LatLng(55.817883, 37.440213);

        map = new google.maps.Map(document.getElementById('map'), {
             zoom: 15,
             center: loc,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scrollwheel: false
        });

        var iconlink = 'img/';
        for(var i in markerPositions) {
          var markerPosition = markerPositions[i];

          var marker = new google.maps.Marker({
              map: map,
              position: markerPosition,
              visible: true,
              icon: iconlink + 'icon-map.png'
          });
        }

        map.set('styles', [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ccc"},{"lightness":20},{"saturation":-97}]}]);
    }
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);
});
