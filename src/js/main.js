// Add main scripts here
$(document).ready(function() {

	//animations

    var tlMobileNav = new TimelineMax({delay:0, paused:true});

    tlMobileNav.to($('#mobile-nav'), 0.5, {
        css: {bottom: '0', top: '0'},
        ease: Power1.easeInOut
    });


	var tlQuoteText = new TimelineMax({delay:0});

	tlQuoteText.fromTo($('.quote-text'), 0, {
		autoAlpha: 0,
		// y: '+=60px'
        y: '0'
	}, {
		autoAlpha: 1,
		y: '0'
	});

	var tlUrbanShape = new TimelineMax({delay:0});

	tlUrbanShape.fromTo($('.urban-shape'), 0.5, {
		autoAlpha: 0,
		x: '-=60px'
	}, {
		autoAlpha: 1,
		x: '0'
	});

    var tlHeaderSmall = new TimelineMax({delay:0, paused:true});

    tlHeaderSmall.to($('#header-small'), 0.5, {
        css: {top: '0'},
        ease: Power1.easeInOut
    });

    // venue-gallery animation

    var tlVenueGalleryOverlay = new TimelineMax({delay:0, paused:true});

    tlVenueGalleryOverlay.to($('.js-v1'), 0.8, {
        css: {right: '100%'},
        ease: Power1.easeInOut
    })
    .to($('#venue-gallery-overlay'), 0.8, {
        css: {transform: 'translate(0,0)'},
        ease: Power1.easeInOut
    
    }, '-=0.8');

    

    $( ".js-stay-updated" ).click(function() {    
      $.fn.fullpage.moveTo('newsletter');
    });

    $( ".scroll" ).click(function() {
      $.fn.fullpage.moveSectionDown();
    });

    $( ".hamburger" ).click(function() {
      tlMobileNav.play();
    });
    $( ".close-mobile-nav" ).click(function() {
      tlMobileNav.reverse();
    });
    $( ".map-preview" ).click(function() {
      $.fn.fullpage.moveTo(4);
    });


    var tlMouseScroll = new TimelineMax({delay:1, repeat:-1, yoyo: true});
    tlMouseScroll.fromTo($('.scroll-mouse'), 0.5, {
    	y: '0'
    }, {
    	y: '+=8px'
    });

   
    $('.team-slider').slick({
        arrows: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    $( ".js-view-gallery").click(function() {
            tlVenueGalleryOverlay.play();
            tlHeaderSmall.reverse();

            $('.carousel__container').slick({
                   arrows: true,
                   speed: 200,
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   dots: false,
                    adaptiveHeight: true,
                    onInit: function(){
                       // This runs after the slickgrid is first initialized.
                       this.$list.css('height',this.$slider.parents('.inner').outerHeight(true));
                   },
                });


    });

    $( ".close-gallery").click(function() {
            tlVenueGalleryOverlay.reverse();
            tlHeaderSmall.play();
    });


    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
           tlHeaderSmall.play();
        }
        else{
           tlHeaderSmall.reverse();
        }
    });



    $(function () {
        var austDay = new Date();
        austDay = new Date(2016, 10-1, 6);
        // austDay = new Date(2015, 10-1, 6);
        $('#defaultCountdown').countdown({until: austDay});
        $('#year').text(austDay);
    });
    


});
