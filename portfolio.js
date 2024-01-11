/*var swiper = new Swiper(".slide_content", {
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
  });*/

  // Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

/*Change Mode*/

function changeMode()
{
    let element = document.body;
      document.body.classList.toggle("dark");

}

'use strict';

function progressBarAndCountNumber () {
    const progress = document.querySelectorAll('.progressive');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 99;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progressive) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();