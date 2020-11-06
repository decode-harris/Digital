// set slideIndex value to 1
var slideIndex = 1;

// function [ controls ]
function controls(n) {

    slideshow(slideIndex += n);
}

// function [ current ]
function current(n) {

    slideshow(slideIndex = n);
}

// function [ slideshow ]
const slideshow = (n) => {

    // loop iterator
    let i;

    // slides selector
    let slides = document.getElementsByClassName('slides');

    // test number of slides
    if (n > slides.length) slideIndex = 1;

    // test if number of slides is less than 1
    if (n < 1) slideIndex = slides.length;
    
    // slides loop
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = 'none';
        
    }

    // current slide variable
    let currentSlide = slides[ slideIndex - 1 ];
    // toggles class phase on current slide [ animation ]
    currentSlide.toggleAttribute('class', ' phase');

    slides[slideIndex-1].style.display = 'flex';
};

// init [ slideshow ] function
slideshow(slideIndex);



// slideshow image sources
// const slideSources = [

//     {
//         img: 'screens/Planets-landing.PNG',
//         name: 'Planets : Desktop Homepage'
//     },
//     {
//         img: 'screens/bk.jpg',
//         name: 'Nature : Desktop Homepage'
//     },
//     {
//         img: 'screens/Planets-mobile.PNG',
//         name: 'Planets : Mobile Homepage'
//     },
//     {
//         img: 'screens/bk.jpg',
//         name: 'Nature : Desktop Homepage'
//     }

// ];

// let slideImage = currentSlide.querySelector('img');

// // assign [ slideIndex - 1 ] to property flex [ bring into view ]
// slides[ slideIndex - 1 ].style.display = 'flex';

// // test
// console.log('slideshow : slideSources [ For Loop ] :' + src);
// let src = slideSources[i].img;
// slideImage.src = src;