'use strict';

const filters = document.querySelector('.filters-container > ul');
const imgs = Array.from(document.querySelectorAll('.gallery-image'));
console.log(filters);

let currentFilter;


// filters.addEventListener('click', event => {
//   if (!event.target.classList.contains('filter')) {
//     return;
//   }

//   imgs.forEach(el => el.classList.add('hidden'));

//   currentFilter = event.target.dataset.tag;

//   if (currentFilter === 'all') {
//     imgs.forEach(el => el.classList.remove('hidden'));
//     return;
//   }
//   imgs.forEach(el => {
//     if (el.dataset.tag !== currentFilter) {
//       el.classList.add('hidden');
//     } else {
//       el.classList.remove('hidden');
//     }
//   })
// });

// document.addEventListener('DOMContentLoaded', () => {
//   imgs.forEach((el, i) => {
//     el.classList.remove('hidden');
//     let imgWidth = imgs[0].offsetWidth;
//     let imgHeight = imgs[0].offsetHeight;
//     let grid = (window.innerWidth - 200) / imgWidth;
//     el.style.position = 'absolute';
//     el.style.left = (i % grid) * imgWidth + 'px';
//     el.style.top = Math.ceil((i - grid) / grid + 0.1) * imgHeight + 'px';
//   });
// });

// filters.addEventListener('click', event => {
//   if (!event.target.classList.contains('filter')) {
//     return;
//   }
//   imgs.forEach(el => el.classList.add('hidden'));

//   currentFilter = event.target.dataset.tag;
//   filter(currentFilter);
// });

// function filter(value) {
//   let imgWidth = imgs[0].offsetWidth + 10;
//   let imgHeight = imgs[0].offsetHeight + 10;
//   //grid 4

//     const filtered = value === 'all' ? imgs : imgs.filter(el => el.dataset.tag === value);

//     console.log(filtered);

//     filtered.forEach((el, i) => {
//       if (value === 'all') {
//         el.classList.remove('hidden');
//         el.style.position = 'absolute';
//         el.style.left = (i % 4) * imgWidth + 'px';
//         el.style.top = Math.ceil((i - 4) / 4 + 0.1) * imgHeight + 'px';
//       } else if (el.dataset.tag === value) {
//         console.log('gocha');
//         el.classList.remove('hidden');
//         el.style.position = 'absolute';
//         el.style.left = (i % 4) * imgWidth + 'px';
//         el.style.top = Math.ceil((i - 4) / 4 + 0.1) * imgHeight + 'px';
//       } else {
//         el.classList.add('hidden');
//       }
//     })
  
// }


var elem = document.querySelector('.gallery-container > ul');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.gallery-image',
  layoutMode: 'fitRows',
  transitionDuration: '0.7s'
});


filters.addEventListener('click', event => {

  if (!event.target.classList.contains('filter')) {
    return;
  }
  Array.from(filters.children).forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  if (event.target.dataset.tag === 'all') {
    iso.arrange({filter: '*'});
    return;
  }
  iso.arrange({filter: '.' + event.target.dataset.tag});
});