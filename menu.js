'use strict';

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
