new Swiper(".swiper-container", {
  speed: 600,
  spaceBetween: 100,
  effect: "cube",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
