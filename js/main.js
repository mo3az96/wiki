$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    ///////// landing header /////////
    $('.arrow-btn').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 30
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    ///////// **intiats Slider** ///////// 
    $('.intiats').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            500: {
                items: 2,
                margin: 10,
            },
            992: {
                items: 3,
                margin: 10,
            },
            1200: {
                items: 4,
                margin: 30,
            },
            1500: {
                items: 4,
                margin: 70,
            },
        }
    });
    ///////// **partners Slider** ///////// 
    $('.partners').owlCarousel({
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 30,
            },
            500: {
                items: 2,
                margin: 10,
            },
            992: {
                items: 2,
                margin: 30,
            },
            1200: {
                items: 3,
                margin: 10,
            },
            1500: {
                items: 3,
                margin: 30,
            },
        }
    });
    ///////// **states Slider** ///////// 
    if ($(window).width() <= 991) {
        $('.states-flex').addClass("owl-carousel")
        $('.states-flex').owlCarousel({
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 30,
                },
                500: {
                    items: 2,
                    margin: 30,
                },
            }
        });
    }

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".footer-head").addClass("mo-accordion");
        $(".twits-list").addClass("mo-panel");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })

    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **menu** /////////
    if ($(window).width() <= 767) {
        $('.menu-btn').click(function () {
            $("nav").fadeIn(300);
            $(".nav-cont").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.nav-cont').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".nav-cont").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
    ///////// **drop link** /////////
    if ($(window).width() <= 991) {
        $('.drop-btn .nav-a').click(function () {
            $(this).toggleClass("active");
            $(this).siblings().slideToggle(500);
        })
    }
});