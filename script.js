var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Default to 1 slide per view on mobile
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
  breakpoints: {
    768: {
      slidesPerView: 2, // For tablets
    },
    1024: {
      slidesPerView: 4, // For desktops
    }
  }
});
