$(function () {
  "use strict";

  $(window).on("load", function () {
    var preloader = $('#preloader');

    // Hide preloader and fade in content after a delay
    setTimeout(function () {
      preloader.fadeOut(500)
    }, 0); // Change the delay value as per your requirement

  });



  // function handlePreloader() {
  //   if ($(".loader-wrap").length) {
  //     $(".loader-wrap").delay(800).fadeOut(500);
  //   }
  //   TweenMax.to($(".loader-wrap .overlay"), 1.2, {
  //     force3D: true,
  //     left: "100%",
  //     ease: Expo.easeInOut,
  //   });
  // }

  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     handlePreloader();
  //   }, 0);
  // });

  // banner slider js
  // $(window).on("load", function () {
  //   setTimeout(function () {
  //     $(".banner").slick({
  //       dots: true,
  //       infinite: true,
  //       speed: 800,
  //       autoplaySpeed: 5000,
  //       slidesToShow: 1,
  //       fade: true,
  //       autoplay: false,
  //       slidesToScroll: 1,
  //       prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
  //       nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  //     }).slickAnimation();
  //   }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
  // });


  $(".banner").slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    fade: true,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  }).slickAnimation();

  // profile slider js
  $(".profile-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
    nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  // news slider js
  $(".news-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // team slider js
  $(".team-slider")
    .slick({
      dots: false,
      infinite: true,
      speed: 800,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
      nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    })
    .slickAnimation();

  $(".company-slider")
    .slick({
      dots: false,
      infinite: true,
      speed: 800,
      arrows: true,
      slidesToShow: 4,
      autoplay: true,
      slidesToScroll: 1,
      prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
      nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    })

  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        2000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });


  // Animation on scroll
  $(window).on("load", function () {
    setTimeout(() => {
      AOS.init({
        once: false,
      });
    }, 0);
  });

  // AOS.init({
  //   once: false,
  // });

  // function carousel() {
  //   let carouselSlider = document.querySelector(".carousel__slider");
  //   let list = document.querySelector(".carousel__list");
  //   let item = document.querySelectorAll(".carousel__item");
  //   let list2;

  //   const speed = 1;

  //   const width = list.offsetWidth;
  //   let x = 0;
  //   let x2 = width;

  //   function clone() {
  //     list2 = list.cloneNode(true);
  //     carouselSlider.appendChild(list2);
  //     list2.style.left = `${width}px`;
  //   }

  //   function moveFirst() {
  //     x -= speed;

  //     if (width >= Math.abs(x)) {
  //       list.style.left = `${x}px`;
  //     } else {
  //       x = width;
  //     }
  //   }

  //   function moveSecond() {
  //     x2 -= speed;

  //     if (list2.offsetWidth >= Math.abs(x2)) {
  //       list2.style.left = `${x2}px`;
  //     } else {
  //       x2 = width;
  //     }
  //   }

  //   function hover() {
  //     clearInterval(a);
  //     clearInterval(b);
  //   }

  //   function unhover() {
  //     a = setInterval(moveFirst, 10);
  //     b = setInterval(moveSecond, 10);
  //   }

  //   clone();

  //   let a = setInterval(moveFirst, 10);
  //   let b = setInterval(moveSecond, 10);

  //   carouselSlider.addEventListener("mouseenter", hover);
  //   carouselSlider.addEventListener("mouseleave", unhover);
  // }

  // carousel();



  $(".typed").typed({
    strings: ["Welcome to Masud Group", "Invest in quality, not quantity", ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 2000,
    // loop
    loop: true,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
  });

  // counter up js
  $('.counter').counterUp({
    delay: 50,
    time: 2000
  });

  // clients slider js
  $(".client-slider").slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 0,
    speed: 1500,
    arrows: false,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  
  // mobile menu js
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


});