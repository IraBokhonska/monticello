const swiperHeader = new Swiper(".header__swiper", {
  // direction: "vertical",
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  loop: true,
});


var swiper = new Swiper(".mySwiper", {
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