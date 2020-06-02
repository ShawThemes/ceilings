'use strict';

$('.main-slider.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots:true,
  items: 1,
  autoplay: true
})


$('.services-list.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 3
    }
  }
})