'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#instafeed');
  (function(){
    new InstagramFeed({
        'username': 'potolki_79bir',
        'container': container,
        'display_profile': true,
        'display_biography': false,
        'display_gallery': true,
        'callback': null,
        'styling': false,
        'items': 6,
        'items_per_row': 3,
        'margin': 1
    });
  })();
});
