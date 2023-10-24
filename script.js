const headerScroll = document.querySelector(".header__scroll");
const projectSection = document.querySelector("#projects");

headerScroll.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// --------------swiper------------------------------

const swiperHeader = new Swiper(".header__swiper", {
  // direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    992: {
      direction: "vertical",
    },
    320: {
      direction: "horizontal",
    },
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

  freeMode: true,

  loop: true,
  // centeredSlides: true,
  spaceBetween: 30,

  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: true,
  // },

  breakpoints: {
    1550: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
