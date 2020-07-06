'use strict';
const gallery = document.querySelector('.gallery-container > ul');
const filters = document.querySelector('.filters-container > ul');
let images = [], showingImages = [], iso, currentFilter;

/* FETCHING DATA */
fetch(window.location.origin +'/imagesdata.json')
  .then(res => res.json())
  .then(data => {
    gallery.innerHTML = data.map((el) => `
    <li class="gallery-image ${el.tag}" data-tag="${el.tag}"><img src="${el.src}" data-fullsize="${el.fullsize}" alt="${el.alt}"></li>`).join('');

    images = Array.from(document.querySelectorAll('.gallery-image'));
    showingImages = images.slice();

    //initialize Isotope
    iso = new Isotope( gallery, {
      itemSelector: '.gallery-image',
      layoutMode: 'fitRows',
      transitionDuration: '0.7s'
    });
    iso.arrange({filter: '*'});
  })
  .catch(e => console.log(e));



/* FILTERING IMAGES */
filters.addEventListener('click', event => {
  if (!event.target.classList.contains('filter')) {
    return;
  }
  
  //update the active filter
  Array.from(filters.children).forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
  currentFilter = event.target.dataset.tag;

  //update the list of the shown images
  showingImages =  updateImages(currentFilter, images);

  //rearrange the images
  if (event.target.dataset.tag === 'all') {
    iso.arrange({filter: '*'});
    return;
  }
  iso.arrange({filter: '.' + event.target.dataset.tag});
});


/* OPENING IMAGE */
const galleryFullscreen = document.querySelector('.gallery-fullscreen');
const fullImg = galleryFullscreen.querySelector('.fullscreen_image > img');

//Show fullscreen
gallery.addEventListener('click', event => {
  if (!event.target.parentElement.classList.contains('gallery-image')) {
    return;
  }
  galleryFullscreen.classList.add('visible');
  const targetImg = event.target;
  
  updateCurrentImage(targetImg);
  fullImg.setAttribute('src', targetImg.dataset.fullsize);
  
  disableBtn(targetImg.parentElement);
});

//Hide fullscreen
galleryFullscreen.addEventListener('click', event => {
  if (event.target.classList.contains('fullscreen_overlay') || event.target.classList.contains('fullscreen_close-btn')) {
    galleryFullscreen.classList.remove('visible');
  } 
});


/* NAVIGATION */
const navBtns = galleryFullscreen.querySelectorAll('.fullscreen_controls');

navBtns.forEach(el => el.addEventListener('click', event => {
  const currentImg = showingImages.find(el => el.firstElementChild.classList.contains('current-image'));
  const modifier = event.currentTarget.classList.contains('fullscreen_controls--left') ? -1 : 1;
  const targetIdx = currentImg ? showingImages.indexOf(currentImg) + modifier : -1;
  const targetImg = showingImages[targetIdx];
  fullImg.setAttribute('src', targetImg.firstElementChild.dataset.fullsize);
  disableBtn(targetImg);
  updateCurrentImage(targetImg.firstElementChild);
}));


function updateImages(filter, images) {
  if (filter === 'all') {
    return images;
  }
  return images.filter(el => el.dataset.tag === filter);
}


function updateCurrentImage(targetImage) {
  images.forEach(el => el.firstElementChild.classList.remove('current-image'));
  targetImage.classList.add('current-image');
}

function disableBtn(targetImg) {
  //disable navigation buttons if necessary;
  let isFirst = showingImages.indexOf(targetImg) === 0;
  let isLast = showingImages.indexOf(targetImg) === showingImages.length - 1;

  navBtns[0].disabled = isFirst;
  navBtns[1].disabled = isLast;
}

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

