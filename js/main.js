jQuery(function($){

var bamyan = window.bamyan || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

bamyan.mobileNav = function(){
    var windowWidth = $(window).width();

    if( windowWidth <= 979 ) {
        if( $('#mobile-nav').length > 0 ) {
            mobileMenuClone.insertAfter('#menu');
            $('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
        }
    } else {
        $('#navigation-mobile').css('display', 'none');
        if ($('#mobile-nav').hasClass('open')) {
            $('#mobile-nav').removeClass('open');
        }
    }
}

bamyan.listenerMenu = function(){
    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');

        if ($('#mobile-nav').hasClass('open')) {
            $('#navigation-mobile').slideDown(500, 'easeOutExpo');
        } else {
            $('#navigation-mobile').slideUp(500, 'easeOutExpo');
        }
        e.preventDefault();
    });

    $('#menu-nav-mobile a').on('click', function(){
        $('#mobile-nav').removeClass('open');
        $('#navigation-mobile').slideUp(350, 'easeOutExpo');
    });
}


    bamyan.nav();
    bamyan.mobileNav();

$(window).resize(function(){
    bamyan.mobileNav();
});

});