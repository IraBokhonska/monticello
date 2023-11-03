const menuLinks = document.querySelectorAll(".menu__link");
const header = document.querySelector(".header");
const headerScroll = document.querySelector(".header__scroll");
const projectSection = document.querySelector("#projects");
const newsSection = document.querySelector("#news");
const contactsSection = document.querySelector("#contacts");
const footerLogo = document.querySelector(".footer__logo a");

const sections = [header, projectSection, newsSection, contactsSection];

function smoothScrollToSection(section) {
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

menuLinks.forEach((menuLink, index) => {
  menuLink.addEventListener("click", (e) => {
    smoothScrollToSection(sections[index]);
    e.preventDefault();
  });
});

headerScroll.addEventListener("click", () => {
  smoothScrollToSection(projectSection);
});

footerLogo.addEventListener("click", (e) => {
  smoothScrollToSection(header);
  e.preventDefault();
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

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  freeMode: true,
  loop: true,
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

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  freeMode: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,

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
