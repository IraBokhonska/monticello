let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu__body");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
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

const swiperNews = new Swiper(".news__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // autoHeight: true,
  freeMode: true,

  loop: true,

  breakpoints: {
    1500:{
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1100: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
