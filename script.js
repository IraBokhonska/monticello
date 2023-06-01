const headerScroll = document.querySelector(".header__scroll");
const projectSection = document.querySelector("#projects");

headerScroll.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// ------------------menu---------------------------

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__body");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// --------------swiper------------------------------

const swiperHeader = new Swiper(".header__swiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperNews = new Swiper(".news__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  loop: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
});
