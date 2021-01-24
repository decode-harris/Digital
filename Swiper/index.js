var swiper = new Swiper('.swiper-container', {
    
    
    cssMode: true,

    // if navigation is required
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    
    // if pagination is required
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },

    // if animation effects are required
    cubeEffect: {
        slideShadows: false,
    },

    mousewheel: true,
    keyboard: true,

    
  });

