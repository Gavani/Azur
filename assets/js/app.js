(function ($) {


  // Header hover
  (function () {
    var item = $('.header__nav-item_hover'),
        header = $('.header'),
        hero = $('.hero');
    $(item).on('mouseenter', function(){
      $(header).addClass('header_item-hover');
      $(hero).addClass('hero_blur');
      $('section, footer').addClass('blur');
    });
    $(item).on('mouseleave', function(){
      $(header).removeClass('header_item-hover');
      $('section, footer').removeClass('blur');
      if ( $('.header__sub-nav-item_visible').length ) {
        $('.header__sub-nav-item_visible').fadeOut(400);
        $('.header__sub-nav-wrapp').delay(398).fadeIn(400)
      } 
    });
  })();

  // header tabs
  (function(){
    var villLink = $('.header__sub-nav-item_vill a'),
        appLink = $('.header__sub-nav-item_app a'),
        villTab = $('.header__sub-type_vill'),
        appTab = $('.header__sub-type_app'),
        subNavHead = $('.header__sub-nav-wrapp');
    
    $(villLink).on('click', function(e){
      e.preventDefault();
      $(subNavHead).fadeOut(400);
      $(villTab).delay(398).fadeIn(400).addClass('header__sub-nav-item_visible');
    })
    $(appLink).on('click', function(e){
      e.preventDefault();
      $(subNavHead).fadeOut(400);
      $(appTab).delay(398).fadeIn(400).addClass('header__sub-nav-item_visible');
    })
  })();

  // hero search
  (function(){
    var searchBtn = $('.hero__search-btn button'),
        searchOption = $('.hero__search-option'),
        heroPopup = $('.hero__popup'),
        heroLocationBtn = $('.hero__search-option-location-input-fake'),
        heroLocationBtnText = $('.hero__search-option-location-input-fake p'),
        heroRegion = $('.hero__search-region'),
        colRight = $('.hero__col-right'),
        heroRegionItem = $('.hero__search-region-item'),
        heroFilter = $('.hero__search-option-filter-link a'),
        heroFilterOption = $('.hero__search-filter-option');

    $(searchBtn).on('click', function(e){
      e.preventDefault();
    });

    $(searchBtn).on('mouseenter', function(e){
      e.preventDefault();
      $(heroPopup).fadeIn();
      $(searchOption).fadeIn().addClass('hero__search-option_visible');
      $(colRight).delay(150).addClass('hero__col-right_hide').fadeOut();
    });




    $(heroLocationBtn).on('click', function(){
      if( $(heroFilterOption).hasClass('hero__search-filter-option_visible') ){
        $(heroFilterOption).removeClass('hero__search-filter-option_visible').fadeOut();
        $(heroRegion).addClass('hero__search-region_visible').delay(420).fadeIn();
      }
      else {
        $(heroRegion).fadeIn().addClass('hero__search-region_visible');
      }

      $(heroPopup).addClass('hero__popup_visible-all')
    });
    $(heroRegionItem).on('click', function(){
      var regionName = $(this).find('a p').text();
      $(heroLocationBtnText).text(regionName);
      $(heroRegion).removeClass('hero__search-region_visible').delay(100).fadeOut();
      setTimeout(function() {
        $(heroPopup).removeClass('hero__popup_visible-all');
      }, 300);
    });



    $(heroFilter).on('click', function(e){
      e.preventDefault();
      if($(heroRegion).hasClass('hero__search-region_visible')){
        $(heroRegion).removeClass('hero__search-region_visible').fadeOut();
        $(heroFilterOption).addClass('hero__search-filter-option_visible').delay(420).fadeIn();
      }
      else{
        $(heroFilterOption).addClass('hero__search-filter-option_visible').fadeIn();
      }

      $(heroPopup).addClass('hero__popup_visible-all')
    })

  })();



  // Testimonilas slider
  (function () {
    var testimonialsItem = $('.testimonials__slider-item').length;
    var arrowLeft = '<p>→</p>';
    var arrowRight = '<p>→</p>';
    $('.testimonials__slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: testimonialsItem - 1,
      dots: true,
      appendArrows: $('.testimonials__slider-arrows'),
      appendDots: $('.testimonials__slider-dots'),
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrowLeft + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrowRight + '</button>',
    });
  })();


  // Location carousel left
  (function () {
    var locationsItem = $('.location-carousel__left-slider-item').length;
    var arrowLeft = '<p>→</p>';
    var arrowRight = '<p>→</p>';
    var slider = $('.location-carousel__left-slider');
    $('.location-carousel__left-slider').slick({
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: locationsItem - 1,
      dots: true,
      variableWidth: true,
      appendArrows: $('.location-carousel__left-arrows'),
      appendDots: $('.location-carousel__left-dots'),
      prevArrow: '<button type="button" class="slider-prev btn-style-none outline" alt="Go to previous slide">' + arrowLeft + '</button>',
      nextArrow: '<button type="button" class="slider-next white btn-style-none outline" alt="Go to next slide">' + arrowRight + '</button>',
      asNavFor: '.location-carousel__right-slider',
      focusOnSelect: true,
    });
    
    $(document).on('wheel', (function(e) {
      // e.preventDefault();
    
      if (e.originalEvent.deltaY < 0) {
        $(slider).slick('slickNext');
      } else {
        $(slider).slick('slickPrev');
      }
    }));

  })();

  // Location carousel right
  (function () {
    var locationsItem = $('.location-carousel__right-slider-item').length;
    $('.location-carousel__right-slider').slick({
      infinite: false,
      fade: true,
      initialSlide: locationsItem - 1,
      speed: 700,
      dots: false,
      arrows: false,
      asNavFor: '.location-carousel__left-slider'
    });
  })();

  // Call
  (function () {
    if($('#phone').length){
      var input = document.querySelector("#phone");
      window.intlTelInput(input);
    }
  })();

  // Team
  (function(){
    var teamWrapp = $('.team__wrapp'),
        teamExpand = $('.team__expand'),
        teamItem = $('.team__item'),
        popup = $('.team__popup'),
        popoupClose = $('.team__popup-close a');
    
    var teamName = $('.team__about-name p'),
        teamAvatar = $('.team__avatar img'),
        teamPosition = $('.team__about-position p'),
        teamDesc = $('.team__about-desc p'),
        teamContact = $('.team__about-contact-links');

    var teamPopupName = $('.team__popup-about-name'),
        teamPopupAvatar = $('.team__popup-avatar'),
        teamPopupPosition = $('.team__popup-about-position'),
        teamPopupDesc = $('.team__popup-about-desc_bar'),
        teamPopupContact = $('.team__popup-about-contact');

    $(teamExpand).on('click', function(){
      var item = $(this).closest('.team__item');
      $(item).find(teamName).clone().appendTo(teamPopupName);
      $(item).find(teamAvatar).clone().appendTo(teamPopupAvatar);
      $(item).find(teamPosition).clone().appendTo(teamPopupPosition);
      $(item).find(teamDesc).clone().appendTo(teamPopupDesc);
      $(item).find(teamContact).clone().appendTo(teamPopupContact);
      $(popup).fadeIn().addClass('team__popup_visible');
      $('.wrapper').addClass('wrapper_hide');
      $('header, section, footer').addClass('blur');
    });

    $(popoupClose).on('click', function(e){
      e.preventDefault();
      var item = $(this).closest('.team__popup');
      setTimeout(function() {
        $(item).find(teamPopupName).find('p').delay(200).remove();
        $(item).find(teamPopupAvatar).find('img').delay(200).remove();
        $(item).find(teamPopupPosition).find('p').delay(200).remove();
        $(item).find(teamPopupDesc).find(' p').delay(200).remove();
        $(item).find(teamPopupContact).find('div').delay(200).remove();
      }, 400);
      $(popup).fadeOut().removeClass('team__popup_visible');
      $('.wrapper').removeClass('wrapper_hide');
      $('header, section, footer').removeClass('blur');
    })
    
    


    $(teamWrapp).on('mouseenter', function(){
      $(this).closest(teamItem).addClass('team__item_hover');
    });
    $(teamWrapp).on('mouseleave', function(){
      $(teamItem).removeClass('team__item_hover');
    });
  })();


  // About property popup
  (function(){
    var popupOpen = $('.property-popup__triger a'),
        popupClose = $('.property-popup__content-close a'),
        popup = $('.property-popup__content-wrapp');
    $(popupOpen).on('click', function(e){
      e.preventDefault();
      $(popup).fadeIn().addClass('property-popup__content-wrapp_visible');
      // $('body').addClass('body_overflow');
    });
    $(popupClose).on('click', function(e){
      e.preventDefault();
      $(popup).fadeOut().removeClass('property-popup__content-wrapp_visible');
      // $('body').removeClass('body_overflow');
    });
  })();

  // Favorites popup
  (function(){
    var favOpen = $('.header__fav-icon a'),
        favClose = $('.favorites-popup__close a'),
        popup = $('.favorites-popup');
    
    $(favOpen).on('click', function(e){
      e.preventDefault();
      $(popup).fadeIn(400).addClass('favorites-popup_visible');
      $('.wrapper').addClass('wrapper_hide-bg');
      $('body').addClass('body_overflow');
    })
    $(favClose).on('click', function(e){
      e.preventDefault();
      $(popup).fadeOut(400).removeClass('favorites-popup_visible');
      $('.wrapper').removeClass('wrapper_hide-bg');
      $('body').removeClass('body_overflow');
    })
  })();

})(jQuery)

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cclxuICAvLyBIZWFkZXIgaG92ZXJcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGl0ZW0gPSAkKCcuaGVhZGVyX19uYXYtaXRlbV9ob3ZlcicpLFxyXG4gICAgICAgIGhlYWRlciA9ICQoJy5oZWFkZXInKSxcclxuICAgICAgICBoZXJvID0gJCgnLmhlcm8nKTtcclxuICAgICQoaXRlbSkub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKGhlYWRlcikuYWRkQ2xhc3MoJ2hlYWRlcl9pdGVtLWhvdmVyJyk7XHJcbiAgICAgICQoaGVybykuYWRkQ2xhc3MoJ2hlcm9fYmx1cicpO1xyXG4gICAgICAkKCdzZWN0aW9uLCBmb290ZXInKS5hZGRDbGFzcygnYmx1cicpO1xyXG4gICAgfSk7XHJcbiAgICAkKGl0ZW0pLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgJChoZWFkZXIpLnJlbW92ZUNsYXNzKCdoZWFkZXJfaXRlbS1ob3ZlcicpO1xyXG4gICAgICAkKCdzZWN0aW9uLCBmb290ZXInKS5yZW1vdmVDbGFzcygnYmx1cicpO1xyXG4gICAgICBpZiAoICQoJy5oZWFkZXJfX3N1Yi1uYXYtaXRlbV92aXNpYmxlJykubGVuZ3RoICkge1xyXG4gICAgICAgICQoJy5oZWFkZXJfX3N1Yi1uYXYtaXRlbV92aXNpYmxlJykuZmFkZU91dCg0MDApO1xyXG4gICAgICAgICQoJy5oZWFkZXJfX3N1Yi1uYXYtd3JhcHAnKS5kZWxheSgzOTgpLmZhZGVJbig0MDApXHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBoZWFkZXIgdGFic1xyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHZpbGxMaW5rID0gJCgnLmhlYWRlcl9fc3ViLW5hdi1pdGVtX3ZpbGwgYScpLFxyXG4gICAgICAgIGFwcExpbmsgPSAkKCcuaGVhZGVyX19zdWItbmF2LWl0ZW1fYXBwIGEnKSxcclxuICAgICAgICB2aWxsVGFiID0gJCgnLmhlYWRlcl9fc3ViLXR5cGVfdmlsbCcpLFxyXG4gICAgICAgIGFwcFRhYiA9ICQoJy5oZWFkZXJfX3N1Yi10eXBlX2FwcCcpLFxyXG4gICAgICAgIHN1Yk5hdkhlYWQgPSAkKCcuaGVhZGVyX19zdWItbmF2LXdyYXBwJyk7XHJcbiAgICBcclxuICAgICQodmlsbExpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoc3ViTmF2SGVhZCkuZmFkZU91dCg0MDApO1xyXG4gICAgICAkKHZpbGxUYWIpLmRlbGF5KDM5OCkuZmFkZUluKDQwMCkuYWRkQ2xhc3MoJ2hlYWRlcl9fc3ViLW5hdi1pdGVtX3Zpc2libGUnKTtcclxuICAgIH0pXHJcbiAgICAkKGFwcExpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoc3ViTmF2SGVhZCkuZmFkZU91dCg0MDApO1xyXG4gICAgICAkKGFwcFRhYikuZGVsYXkoMzk4KS5mYWRlSW4oNDAwKS5hZGRDbGFzcygnaGVhZGVyX19zdWItbmF2LWl0ZW1fdmlzaWJsZScpO1xyXG4gICAgfSlcclxuICB9KSgpO1xyXG5cclxuICAvLyBoZXJvIHNlYXJjaFxyXG4gIChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHNlYXJjaEJ0biA9ICQoJy5oZXJvX19zZWFyY2gtYnRuIGJ1dHRvbicpLFxyXG4gICAgICAgIHNlYXJjaE9wdGlvbiA9ICQoJy5oZXJvX19zZWFyY2gtb3B0aW9uJyksXHJcbiAgICAgICAgaGVyb1BvcHVwID0gJCgnLmhlcm9fX3BvcHVwJyksXHJcbiAgICAgICAgaGVyb0xvY2F0aW9uQnRuID0gJCgnLmhlcm9fX3NlYXJjaC1vcHRpb24tbG9jYXRpb24taW5wdXQtZmFrZScpLFxyXG4gICAgICAgIGhlcm9Mb2NhdGlvbkJ0blRleHQgPSAkKCcuaGVyb19fc2VhcmNoLW9wdGlvbi1sb2NhdGlvbi1pbnB1dC1mYWtlIHAnKSxcclxuICAgICAgICBoZXJvUmVnaW9uID0gJCgnLmhlcm9fX3NlYXJjaC1yZWdpb24nKSxcclxuICAgICAgICBjb2xSaWdodCA9ICQoJy5oZXJvX19jb2wtcmlnaHQnKSxcclxuICAgICAgICBoZXJvUmVnaW9uSXRlbSA9ICQoJy5oZXJvX19zZWFyY2gtcmVnaW9uLWl0ZW0nKSxcclxuICAgICAgICBoZXJvRmlsdGVyID0gJCgnLmhlcm9fX3NlYXJjaC1vcHRpb24tZmlsdGVyLWxpbmsgYScpLFxyXG4gICAgICAgIGhlcm9GaWx0ZXJPcHRpb24gPSAkKCcuaGVyb19fc2VhcmNoLWZpbHRlci1vcHRpb24nKTtcclxuXHJcbiAgICAkKHNlYXJjaEJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoc2VhcmNoQnRuKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQoaGVyb1BvcHVwKS5mYWRlSW4oKTtcclxuICAgICAgJChzZWFyY2hPcHRpb24pLmZhZGVJbigpLmFkZENsYXNzKCdoZXJvX19zZWFyY2gtb3B0aW9uX3Zpc2libGUnKTtcclxuICAgICAgJChjb2xSaWdodCkuZGVsYXkoMTUwKS5hZGRDbGFzcygnaGVyb19fY29sLXJpZ2h0X2hpZGUnKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKGhlcm9Mb2NhdGlvbkJ0bikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgaWYoICQoaGVyb0ZpbHRlck9wdGlvbikuaGFzQ2xhc3MoJ2hlcm9fX3NlYXJjaC1maWx0ZXItb3B0aW9uX3Zpc2libGUnKSApe1xyXG4gICAgICAgICQoaGVyb0ZpbHRlck9wdGlvbikucmVtb3ZlQ2xhc3MoJ2hlcm9fX3NlYXJjaC1maWx0ZXItb3B0aW9uX3Zpc2libGUnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgJChoZXJvUmVnaW9uKS5hZGRDbGFzcygnaGVyb19fc2VhcmNoLXJlZ2lvbl92aXNpYmxlJykuZGVsYXkoNDIwKS5mYWRlSW4oKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAkKGhlcm9SZWdpb24pLmZhZGVJbigpLmFkZENsYXNzKCdoZXJvX19zZWFyY2gtcmVnaW9uX3Zpc2libGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJChoZXJvUG9wdXApLmFkZENsYXNzKCdoZXJvX19wb3B1cF92aXNpYmxlLWFsbCcpXHJcbiAgICB9KTtcclxuICAgICQoaGVyb1JlZ2lvbkl0ZW0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciByZWdpb25OYW1lID0gJCh0aGlzKS5maW5kKCdhIHAnKS50ZXh0KCk7XHJcbiAgICAgICQoaGVyb0xvY2F0aW9uQnRuVGV4dCkudGV4dChyZWdpb25OYW1lKTtcclxuICAgICAgJChoZXJvUmVnaW9uKS5yZW1vdmVDbGFzcygnaGVyb19fc2VhcmNoLXJlZ2lvbl92aXNpYmxlJykuZGVsYXkoMTAwKS5mYWRlT3V0KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChoZXJvUG9wdXApLnJlbW92ZUNsYXNzKCdoZXJvX19wb3B1cF92aXNpYmxlLWFsbCcpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKGhlcm9GaWx0ZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmKCQoaGVyb1JlZ2lvbikuaGFzQ2xhc3MoJ2hlcm9fX3NlYXJjaC1yZWdpb25fdmlzaWJsZScpKXtcclxuICAgICAgICAkKGhlcm9SZWdpb24pLnJlbW92ZUNsYXNzKCdoZXJvX19zZWFyY2gtcmVnaW9uX3Zpc2libGUnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgJChoZXJvRmlsdGVyT3B0aW9uKS5hZGRDbGFzcygnaGVyb19fc2VhcmNoLWZpbHRlci1vcHRpb25fdmlzaWJsZScpLmRlbGF5KDQyMCkuZmFkZUluKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAkKGhlcm9GaWx0ZXJPcHRpb24pLmFkZENsYXNzKCdoZXJvX19zZWFyY2gtZmlsdGVyLW9wdGlvbl92aXNpYmxlJykuZmFkZUluKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoaGVyb1BvcHVwKS5hZGRDbGFzcygnaGVyb19fcG9wdXBfdmlzaWJsZS1hbGwnKVxyXG4gICAgfSlcclxuXHJcbiAgfSkoKTtcclxuXHJcblxyXG5cclxuICAvLyBUZXN0aW1vbmlsYXMgc2xpZGVyXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXN0aW1vbmlhbHNJdGVtID0gJCgnLnRlc3RpbW9uaWFsc19fc2xpZGVyLWl0ZW0nKS5sZW5ndGg7XHJcbiAgICB2YXIgYXJyb3dMZWZ0ID0gJzxwPuKGkjwvcD4nO1xyXG4gICAgdmFyIGFycm93UmlnaHQgPSAnPHA+4oaSPC9wPic7XHJcbiAgICAkKCcudGVzdGltb25pYWxzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBpbml0aWFsU2xpZGU6IHRlc3RpbW9uaWFsc0l0ZW0gLSAxLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBhcHBlbmRBcnJvd3M6ICQoJy50ZXN0aW1vbmlhbHNfX3NsaWRlci1hcnJvd3MnKSxcclxuICAgICAgYXBwZW5kRG90czogJCgnLnRlc3RpbW9uaWFsc19fc2xpZGVyLWRvdHMnKSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXItcHJldiBidG4tc3R5bGUtbm9uZSBvdXRsaW5lXCIgYWx0PVwiR28gdG8gcHJldmlvdXMgc2xpZGVcIj4nICsgYXJyb3dMZWZ0ICsgJzwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyLW5leHQgd2hpdGUgYnRuLXN0eWxlLW5vbmUgb3V0bGluZVwiIGFsdD1cIkdvIHRvIG5leHQgc2xpZGVcIj4nICsgYXJyb3dSaWdodCArICc8L2J1dHRvbj4nLFxyXG4gICAgfSk7XHJcbiAgfSkoKTtcclxuXHJcblxyXG4gIC8vIExvY2F0aW9uIGNhcm91c2VsIGxlZnRcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxvY2F0aW9uc0l0ZW0gPSAkKCcubG9jYXRpb24tY2Fyb3VzZWxfX2xlZnQtc2xpZGVyLWl0ZW0nKS5sZW5ndGg7XHJcbiAgICB2YXIgYXJyb3dMZWZ0ID0gJzxwPuKGkjwvcD4nO1xyXG4gICAgdmFyIGFycm93UmlnaHQgPSAnPHA+4oaSPC9wPic7XHJcbiAgICB2YXIgc2xpZGVyID0gJCgnLmxvY2F0aW9uLWNhcm91c2VsX19sZWZ0LXNsaWRlcicpO1xyXG4gICAgJCgnLmxvY2F0aW9uLWNhcm91c2VsX19sZWZ0LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzcGVlZDogNzAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICBpbml0aWFsU2xpZGU6IGxvY2F0aW9uc0l0ZW0gLSAxLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICBhcHBlbmRBcnJvd3M6ICQoJy5sb2NhdGlvbi1jYXJvdXNlbF9fbGVmdC1hcnJvd3MnKSxcclxuICAgICAgYXBwZW5kRG90czogJCgnLmxvY2F0aW9uLWNhcm91c2VsX19sZWZ0LWRvdHMnKSxcclxuICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGlkZXItcHJldiBidG4tc3R5bGUtbm9uZSBvdXRsaW5lXCIgYWx0PVwiR28gdG8gcHJldmlvdXMgc2xpZGVcIj4nICsgYXJyb3dMZWZ0ICsgJzwvYnV0dG9uPicsXHJcbiAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpZGVyLW5leHQgd2hpdGUgYnRuLXN0eWxlLW5vbmUgb3V0bGluZVwiIGFsdD1cIkdvIHRvIG5leHQgc2xpZGVcIj4nICsgYXJyb3dSaWdodCArICc8L2J1dHRvbj4nLFxyXG4gICAgICBhc05hdkZvcjogJy5sb2NhdGlvbi1jYXJvdXNlbF9fcmlnaHQtc2xpZGVyJyxcclxuICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignd2hlZWwnLCAoZnVuY3Rpb24oZSkge1xyXG4gICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgaWYgKGUub3JpZ2luYWxFdmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgJChzbGlkZXIpLnNsaWNrKCdzbGlja05leHQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKHNsaWRlcikuc2xpY2soJ3NsaWNrUHJldicpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gIH0pKCk7XHJcblxyXG4gIC8vIExvY2F0aW9uIGNhcm91c2VsIHJpZ2h0XHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsb2NhdGlvbnNJdGVtID0gJCgnLmxvY2F0aW9uLWNhcm91c2VsX19yaWdodC1zbGlkZXItaXRlbScpLmxlbmd0aDtcclxuICAgICQoJy5sb2NhdGlvbi1jYXJvdXNlbF9fcmlnaHQtc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgIGluaXRpYWxTbGlkZTogbG9jYXRpb25zSXRlbSAtIDEsXHJcbiAgICAgIHNwZWVkOiA3MDAsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBhc05hdkZvcjogJy5sb2NhdGlvbi1jYXJvdXNlbF9fbGVmdC1zbGlkZXInXHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBDYWxsXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQoJyNwaG9uZScpLmxlbmd0aCl7XHJcbiAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XHJcbiAgICAgIHdpbmRvdy5pbnRsVGVsSW5wdXQoaW5wdXQpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcblxyXG4gIC8vIFRlYW1cclxuICAoZnVuY3Rpb24oKXtcclxuICAgIHZhciB0ZWFtV3JhcHAgPSAkKCcudGVhbV9fd3JhcHAnKSxcclxuICAgICAgICB0ZWFtRXhwYW5kID0gJCgnLnRlYW1fX2V4cGFuZCcpLFxyXG4gICAgICAgIHRlYW1JdGVtID0gJCgnLnRlYW1fX2l0ZW0nKSxcclxuICAgICAgICBwb3B1cCA9ICQoJy50ZWFtX19wb3B1cCcpLFxyXG4gICAgICAgIHBvcG91cENsb3NlID0gJCgnLnRlYW1fX3BvcHVwLWNsb3NlIGEnKTtcclxuICAgIFxyXG4gICAgdmFyIHRlYW1OYW1lID0gJCgnLnRlYW1fX2Fib3V0LW5hbWUgcCcpLFxyXG4gICAgICAgIHRlYW1BdmF0YXIgPSAkKCcudGVhbV9fYXZhdGFyIGltZycpLFxyXG4gICAgICAgIHRlYW1Qb3NpdGlvbiA9ICQoJy50ZWFtX19hYm91dC1wb3NpdGlvbiBwJyksXHJcbiAgICAgICAgdGVhbURlc2MgPSAkKCcudGVhbV9fYWJvdXQtZGVzYyBwJyksXHJcbiAgICAgICAgdGVhbUNvbnRhY3QgPSAkKCcudGVhbV9fYWJvdXQtY29udGFjdC1saW5rcycpO1xyXG5cclxuICAgIHZhciB0ZWFtUG9wdXBOYW1lID0gJCgnLnRlYW1fX3BvcHVwLWFib3V0LW5hbWUnKSxcclxuICAgICAgICB0ZWFtUG9wdXBBdmF0YXIgPSAkKCcudGVhbV9fcG9wdXAtYXZhdGFyJyksXHJcbiAgICAgICAgdGVhbVBvcHVwUG9zaXRpb24gPSAkKCcudGVhbV9fcG9wdXAtYWJvdXQtcG9zaXRpb24nKSxcclxuICAgICAgICB0ZWFtUG9wdXBEZXNjID0gJCgnLnRlYW1fX3BvcHVwLWFib3V0LWRlc2NfYmFyJyksXHJcbiAgICAgICAgdGVhbVBvcHVwQ29udGFjdCA9ICQoJy50ZWFtX19wb3B1cC1hYm91dC1jb250YWN0Jyk7XHJcblxyXG4gICAgJCh0ZWFtRXhwYW5kKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRlYW1fX2l0ZW0nKTtcclxuICAgICAgJChpdGVtKS5maW5kKHRlYW1OYW1lKS5jbG9uZSgpLmFwcGVuZFRvKHRlYW1Qb3B1cE5hbWUpO1xyXG4gICAgICAkKGl0ZW0pLmZpbmQodGVhbUF2YXRhcikuY2xvbmUoKS5hcHBlbmRUbyh0ZWFtUG9wdXBBdmF0YXIpO1xyXG4gICAgICAkKGl0ZW0pLmZpbmQodGVhbVBvc2l0aW9uKS5jbG9uZSgpLmFwcGVuZFRvKHRlYW1Qb3B1cFBvc2l0aW9uKTtcclxuICAgICAgJChpdGVtKS5maW5kKHRlYW1EZXNjKS5jbG9uZSgpLmFwcGVuZFRvKHRlYW1Qb3B1cERlc2MpO1xyXG4gICAgICAkKGl0ZW0pLmZpbmQodGVhbUNvbnRhY3QpLmNsb25lKCkuYXBwZW5kVG8odGVhbVBvcHVwQ29udGFjdCk7XHJcbiAgICAgICQocG9wdXApLmZhZGVJbigpLmFkZENsYXNzKCd0ZWFtX19wb3B1cF92aXNpYmxlJyk7XHJcbiAgICAgICQoJy53cmFwcGVyJykuYWRkQ2xhc3MoJ3dyYXBwZXJfaGlkZScpO1xyXG4gICAgICAkKCdoZWFkZXIsIHNlY3Rpb24sIGZvb3RlcicpLmFkZENsYXNzKCdibHVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHBvcG91cENsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRlYW1fX3BvcHVwJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChpdGVtKS5maW5kKHRlYW1Qb3B1cE5hbWUpLmZpbmQoJ3AnKS5kZWxheSgyMDApLnJlbW92ZSgpO1xyXG4gICAgICAgICQoaXRlbSkuZmluZCh0ZWFtUG9wdXBBdmF0YXIpLmZpbmQoJ2ltZycpLmRlbGF5KDIwMCkucmVtb3ZlKCk7XHJcbiAgICAgICAgJChpdGVtKS5maW5kKHRlYW1Qb3B1cFBvc2l0aW9uKS5maW5kKCdwJykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcclxuICAgICAgICAkKGl0ZW0pLmZpbmQodGVhbVBvcHVwRGVzYykuZmluZCgnIHAnKS5kZWxheSgyMDApLnJlbW92ZSgpO1xyXG4gICAgICAgICQoaXRlbSkuZmluZCh0ZWFtUG9wdXBDb250YWN0KS5maW5kKCdkaXYnKS5kZWxheSgyMDApLnJlbW92ZSgpO1xyXG4gICAgICB9LCA0MDApO1xyXG4gICAgICAkKHBvcHVwKS5mYWRlT3V0KCkucmVtb3ZlQ2xhc3MoJ3RlYW1fX3BvcHVwX3Zpc2libGUnKTtcclxuICAgICAgJCgnLndyYXBwZXInKS5yZW1vdmVDbGFzcygnd3JhcHBlcl9oaWRlJyk7XHJcbiAgICAgICQoJ2hlYWRlciwgc2VjdGlvbiwgZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ2JsdXInKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbiAgICAkKHRlYW1XcmFwcCkub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QodGVhbUl0ZW0pLmFkZENsYXNzKCd0ZWFtX19pdGVtX2hvdmVyJyk7XHJcbiAgICB9KTtcclxuICAgICQodGVhbVdyYXBwKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGVhbUl0ZW0pLnJlbW92ZUNsYXNzKCd0ZWFtX19pdGVtX2hvdmVyJyk7XHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuXHJcbiAgLy8gQWJvdXQgcHJvcGVydHkgcG9wdXBcclxuICAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBwb3B1cE9wZW4gPSAkKCcucHJvcGVydHktcG9wdXBfX3RyaWdlciBhJyksXHJcbiAgICAgICAgcG9wdXBDbG9zZSA9ICQoJy5wcm9wZXJ0eS1wb3B1cF9fY29udGVudC1jbG9zZSBhJyksXHJcbiAgICAgICAgcG9wdXAgPSAkKCcucHJvcGVydHktcG9wdXBfX2NvbnRlbnQtd3JhcHAnKTtcclxuICAgICQocG9wdXBPcGVuKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHBvcHVwKS5mYWRlSW4oKS5hZGRDbGFzcygncHJvcGVydHktcG9wdXBfX2NvbnRlbnQtd3JhcHBfdmlzaWJsZScpO1xyXG4gICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHlfb3ZlcmZsb3cnKTtcclxuICAgIH0pO1xyXG4gICAgJChwb3B1cENsb3NlKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkKHBvcHVwKS5mYWRlT3V0KCkucmVtb3ZlQ2xhc3MoJ3Byb3BlcnR5LXBvcHVwX19jb250ZW50LXdyYXBwX3Zpc2libGUnKTtcclxuICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5X292ZXJmbG93Jyk7XHJcbiAgICB9KTtcclxuICB9KSgpO1xyXG5cclxuICAvLyBGYXZvcml0ZXMgcG9wdXBcclxuICAoZnVuY3Rpb24oKXtcclxuICAgIHZhciBmYXZPcGVuID0gJCgnLmhlYWRlcl9fZmF2LWljb24gYScpLFxyXG4gICAgICAgIGZhdkNsb3NlID0gJCgnLmZhdm9yaXRlcy1wb3B1cF9fY2xvc2UgYScpLFxyXG4gICAgICAgIHBvcHVwID0gJCgnLmZhdm9yaXRlcy1wb3B1cCcpO1xyXG4gICAgXHJcbiAgICAkKGZhdk9wZW4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICQocG9wdXApLmZhZGVJbig0MDApLmFkZENsYXNzKCdmYXZvcml0ZXMtcG9wdXBfdmlzaWJsZScpO1xyXG4gICAgICAkKCcud3JhcHBlcicpLmFkZENsYXNzKCd3cmFwcGVyX2hpZGUtYmcnKTtcclxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5X292ZXJmbG93Jyk7XHJcbiAgICB9KVxyXG4gICAgJChmYXZDbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgJChwb3B1cCkuZmFkZU91dCg0MDApLnJlbW92ZUNsYXNzKCdmYXZvcml0ZXMtcG9wdXBfdmlzaWJsZScpO1xyXG4gICAgICAkKCcud3JhcHBlcicpLnJlbW92ZUNsYXNzKCd3cmFwcGVyX2hpZGUtYmcnKTtcclxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5X292ZXJmbG93Jyk7XHJcbiAgICB9KVxyXG4gIH0pKCk7XHJcblxyXG59KShqUXVlcnkpXHJcbiJdfQ==
