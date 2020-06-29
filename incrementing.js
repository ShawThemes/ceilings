'use strict';

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
        thousandSeparator: '',
      });
    }
  })
}

jQuery(function() {
  countup("count", $(".count").text());
});
