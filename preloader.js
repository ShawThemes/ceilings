'use strict';

const preloader = document.querySelector('.preloader');

document.addEventListener('DOMContentLoaded', () => {
  preloader.style.display = 'none';
  document.body.parentNode.style.overflow = 'visible';
})
