'use strict';

/* INCREMENTING */
const achievements = document.querySelector('.achievements');
function countup(className){
  let achievements = $("."+className).offset().top;
  let windowHeight = window.innerHeight;
  let show = true;
        
  jQuery(window).scroll( function (){
    if(show && (achievements < $(window).scrollTop() + windowHeight)){ 
      show = false;
      jQuery('.'+className).spincrement({
        from: 1,
        duration: 5000,

      });
    }
  })
}

jQuery(function() {
  countup("count", $(".count").text());
});

/* PARALLAX EFFECT FOR HOME SECTION */
const workSectionBanner = document.querySelector('.work-bcg__image');
new simpleParallax(workSectionBanner, {
  scale: 1.8
});


/* MENU BUTTON */
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', event => {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  if (event.currentTarget.classList.contains('close')) {
    document.body.parentNode.style.overflowY = 'hidden';
  } else {
    document.body.parentNode.style.overflowY = 'visible';
  }
}); 