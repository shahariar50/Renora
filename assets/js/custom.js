// :: Custom Javascript File ::
// :: 1.0 Smooth Scroll
// :: 2.0 Reference Slider
// :: 3.0 Hobby Slider
// :: 4.0 Portfolio Filter
// :: 5.0 filter items on button click
// :: 6.0 Wow Js
// :: 7.0 Preloader
// :: 7.0 Lightcase


$(function () {
  var headerHeight = $(".sticky-top").outerHeight();
  var html_body = $("html, body");


  // :: 1.0 Smooth Scroll
  $(".nav-link, .navbar-brand, .new-button").on("click", function() {
    var sectionTo = $(this).attr("href");
    html_body.animate({
      scrollTop: $(sectionTo).offset().top - headerHeight
    }, 1500);
  });


  // :: 2.0 Reference Slider
  var swiper = new Swiper(".swiper-reference", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  // :: 3.0 Hobby Slider
  $(document).ready(function(){
    $(".hobby-slider").slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:3000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    });
  });

  // :: 4.0 Portfolio Filter
   var $grid = $(".portfolio-item").isotope({
    // options
    layoutMode: "packery",
    itemSelector: ".grid-item",
    percentPosition: true,
    packery: {
      
    }
  });

  // :: 5.0 filter items on button click
  $(".filter-button-group").on( "click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // :: 6.0 Wow Js

  new WOW().init();

  // :: 7.0 Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('.sk-rotating-plane').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(450).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

    // :: 8.0 Lightcase
    $('a[data-rel^=lightcase]').lightcase();











})





