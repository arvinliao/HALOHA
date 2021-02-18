"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiper = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1.2
    },
    767: {
      slidesPerView: 2.2
    },
    992: {
      slidesPerView: 3.2
    }
  },
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2'
  }
});
var swiper = new Swiper('.swiper-container3', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1.2
    },
    767: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3'
  }
});
"use strict";

AOS.init({
  offset: 200,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 800 // values from 0 to 3000, with step 50ms

});
//# sourceMappingURL=all.js.map
