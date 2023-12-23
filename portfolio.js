var swiper = new Swiper(".slide_content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    centerSlide:'true',
    fade: 'true',
    grabcursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    },
  });