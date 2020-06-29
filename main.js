'use strict';

/* SCROLL TO TOP */
const scrollBtn = document.querySelector('.up-btn');
const header  = document.querySelector('header');
scrollBtn.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.dataset.id) {
    let top = header.offsetTop;
  }

  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
})


/* PARALLAX EFFECT FOR HOME SECTION */
const workSectionBanner = document.querySelector('.work-bcg__image');
if (workSectionBanner) {
  new simpleParallax(workSectionBanner, {
    scale: 1.8
  });
}

/* SUBMIT FORM */
const submitForm = document.querySelector('#submitForm');

submitForm.addEventListener('submit', event => {
  let url = event.currentTarget.classList.contains('homepage-form') ? 'mail.php' : '../mail.php';
  send(event , url);
});

function send(event, php){
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	let json = JSON.parse(this.response);
      if (json.result == "success") {
    	alert("Спасибо! Ваше сообщение отправлено!");
    } else {
    	alert("Ошибка. Сообщение не отправлено");
    	}
    } else {alert("Ошибка сервера. Номер: "+req.status);}};
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}


/* INPUT MASK */
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById("inputmask");
  const im = new Inputmask("+7 (999)-999-9999");
  im.mask(element);
});
