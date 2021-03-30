
// default swiper library props

// declare swiper variable
var swiper = new Swiper('.swiper-container', {

    // cssMode: true,

    // default parameters
    slidesPerView: 1,

    // provide mouse scroll on desktop [ mobile functionality ]
    freemode: true,

    // if navigation is required
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },

    // if pagination is required
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        background: 'black',
        color: 'black',
    },

    // define page breakpoints
    breakpoints: {
        700: {
    
            slidesPerView: 1,
            spaceBetween: 0,
        },
        960: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    
    }

    // mousewheel: true,
    // keyboard: true,


});

// declare swiper2 variable
var swiper2 = new Swiper('.swiper-container2', {

    // cssMode: true,

    // default parameters
    slidesPerView: 1,

    // provide mouse scroll on desktop [ mobile functionality ]
    freemode: true,

    // if navigation is required
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        
    },

    // if pagination is required
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        background: 'black',
        color: 'black',
    },

    // define page breakpoints
    breakpoints: {
        700: {
    
            slidesPerView: 1,
            spaceBetween: 0,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    
    }

    // mousewheel: true,
    // keyboard: true,


});
