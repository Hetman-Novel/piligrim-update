if (window.matchMedia("(max-width: 640px)").matches) {

   const mobile_slider_services = document.getElementById('mobile-slider-services')
   new Swiper(mobile_slider_services, {
      navigation: {
         prevEl: '#services-slide-prev',
         nextEl: '#services-slide-next',
      },
      scrollbar: {
         el: '#services-slides-scrollbar',
         draggable: true,
      },
      autoHeight: false,
      simulateTouch: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: false,
      spaceBetween: 40,
      loop: false,
      speed: 800,
      effect: 'slide',
   })

   const mobile_slider_technologies = document.getElementById('mobile-slider-technologies')
   new Swiper(mobile_slider_technologies, {
      navigation: {
         prevEl: '#technologies-slide-prev',
         nextEl: '#technologies-slide-next',
      },
      scrollbar: {
         el: '#technologies-slides-scrollbar',
         draggable: true,
      },
      autoHeight: false,
      simulateTouch: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchOverflow: false,
      spaceBetween: 40,
      loop: false,
      speed: 800,
      effect: 'slide',
   })
}

const slider_clients_say = document.getElementById('slider-clients-say')
new Swiper(slider_clients_say, {
   navigation: {
      prevEl: '#clients-say-slide-prev',
      nextEl: '#clients-say-slide-next',
   },
   scrollbar: {
      el: '#clients-say-slides-scrollbar',
      draggable: true,
   },
   autoHeight: false,
   simulateTouch: false,
   slideToClickedSlide: false,
   slidesPerView: 3,
   slidesPerGroup: 1,
   watchOverflow: false,
   spaceBetween: 30,
   loop: false,
   speed: 800,
   effect: 'slide',breakpoints: {
      0: {
         autoHeight: true,
         slidesPerView: 1,
      },
      641: {
         autoHeight: false,
         slidesPerView: 2,
      },
      960: {
         autoHeight: false,
         slidesPerView: 3,
      }
   }
})
if (document.querySelectorAll('.js-clients-say-slide').length < 4) {
   document.getElementById('reviews-navigation-slider').remove();
}

/*if (window.matchMedia("(min-width: 641px)").matches) {
   function setEqualHeight(className) {
      var elements = document.querySelectorAll(className);
      var maxHeight = 0;
      for (var i = 0; i < elements.length; i++) {
         maxHeight = Math.max(maxHeight, elements[i].clientHeight);
      }
      for (var i = 0; i < elements.length; i++) {
         elements[i].style.height = maxHeight + "px";
      }
   }
   setEqualHeight(".clients-say__blockText")
}*/