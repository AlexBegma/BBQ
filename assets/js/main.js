// window.addEventListener('scroll', function() {
// document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 115);
// });

$(document).ready(function(){
  $(".owl-carousel-full").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
          items: 2
      },
        600: {
            items: 3
        },
        900: {
          items: 4
      },
        1200: {
            items: 5
        }
      }
  });
});