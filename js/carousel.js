$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      dots: false,
      margin: 20,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  });