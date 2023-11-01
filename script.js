const headerScroll = document.querySelector(".header__scroll");
const projectSection = document.querySelector("#projects");

headerScroll.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// --------------swiper------------------------------

const swiperHeader = new Swiper(".header__swiper", {
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
  spaceBetween: 30,
  slidesPerView: 3,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    1600: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1300: {
      spaceBetween: 20,
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 1,
    },
    0: {
      spaceBetween: 10,
    },
  },
});
