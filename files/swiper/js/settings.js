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
}