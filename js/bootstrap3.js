/*global $,document,window*/
$(document).ready(function () {
    "use strict";
    $('html').niceScroll();
    $('.carousel').carousel({
        interval: 3000
    });

    //Show Color Option Div When Click on Gear
    $('.gear-check').click(function () {

        $('.color-option').fadeToggle(500);
        $('.gear-check').toggleClass('fa-spin');
    });

    //Change Theme Color On Click
    var colorLi = $('.color-option ul li'),
        scrollButton;
    $('.color-option ul li')
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#FFD500").end()
        .eq(2).css("backgroundColor", "#E426D5").end()
        .eq(3).css("backgroundColor", "#009AFF");

    colorLi.click(function () {
        $('html').niceScroll().remove();
        $('html').niceScroll({
            cursorcolor: $(this).attr('data-scroll')
        });
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });
    //Caching The Scroll Element 
    scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        //console.log(($(this).scrollTop()))
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn(500);
        } else {
            scrollButton.fadeOut(500);
        }

    });
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });
    $('.navbar .collapse .nav li').click(function () {
        $('.navbar .collapse .nav li').removeClass('active');
        $(this).addClass('active');
    })
});
//LoadingScreen

$(window).load('$(this)', function () {
    //alert("window load occurred!");
    "use strict";
    $(".loading-overlay .loader").fadeOut(1000, function () {
        $('body').css("overflow", "auto");
        $(".loading-overlay").fadeOut(1000, function () {
            $(this).remove();
        });
    });

});