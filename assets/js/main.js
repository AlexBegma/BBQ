window.addEventListener('scroll', function() {
document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 115);
});

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) => {
  e.preventDefault();
  offcanvasCart.toggle();
});

document.querySelectorAll('closecart').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.hide();
    let href = item.dataset.href;
    document.getElementById(href).scrollIntoView();
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#to-top').fadeIn();
    } else {
      $('#to-top').fadeOut();
    }
  });

  $('#to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  })
});


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