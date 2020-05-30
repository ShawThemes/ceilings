'use strict';

const filters = document.querySelector('.filters-container > ul');
const imgs = document.querySelectorAll('.gallery-image');
console.log(filters);

let currentFilter;

//imgs.forEach((el, i) => el.style['transition-delay'] = '0.' + i / 2 + 's');

filters.addEventListener('click', event => {
  if (!event.target.classList.contains('filter')) {
    return;
  }

  imgs.forEach(el => el.classList.add('hidden'));

  currentFilter = event.target.dataset.tag;

  if (currentFilter === 'all') {
    imgs.forEach(el => el.classList.remove('hidden'));
    return;
  }
  imgs.forEach(el => {
    if (el.dataset.tag !== currentFilter) {
      el.classList.add('hidden');
    } else {
      el.classList.remove('hidden');
    }
  })
});