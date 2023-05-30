let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu__body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

const swiperHeader = new Swiper(".header__swiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// keyboard: {
//   enabled: true,
//   onlyInViewport: true,
//   pageUpDown: true,
// },

// mousewheel: {
//   sensitivity: 1,
// },

// loop: true,

var swiper = new Swiper(".news__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
});
