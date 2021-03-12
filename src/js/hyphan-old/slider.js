// // link IDs array
// let linkIDs = [
        
//     // planets project link id
//     '#planButton',
//     // niflheim project link id
//     '#niflButton',
//     // coffee project link id
//     '#coffButton',
//     // rntlpay project link id
//     '#rntlButton'

// ];


// let viewButton = document.querySelector('.viewButton');


// linkIDs.forEach(function(item, index, array) {
    
//     let id = item;    

//     // control button selectors
//     let controlsNext = document.querySelector('#controlsNext');
//     let controlsPrev = document.querySelector('#controlsPrev');

//     controlsNext.addEventListener('click', ()=> {

        
//         viewButton.toggleAttribute('id', id);
        
//         // test
//         console.log('button id assigned');

//     });

//     controlsPrev.addEventListener('click', ()=> {

        
//         viewButton.id = id;
//         // console.log(viewButton);

//     });


    



//     console.log(viewButton);
    
// });



// set slideIndex value to 1
var slideIndex = 1;

// function [ current ]
function current(n) {

    // init slideshow & assign slideIndex to n
    slideshow(slideIndex = n);
    
}

// function [ controls ]
function controls(n) {

    // plus or minus slide index from slideshow
    slideshow(slideIndex += n);

    // buttons();

}

// function [ slideshow ]
const slideshow = (n) => {

    // loop iterator
    let i;

    // slides selector
    let slides = document.getElementsByClassName('slides');
    // dots selector
    let dots = document.getElementsByClassName('dot');

    // test number of slides
    if (n > slides.length) slideIndex = 1;

    // test if number of slides is less than 1
    if (n < 1) slideIndex = slides.length;
    
    // slides loop
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = 'none';
        
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    
    
    // current slide variable
    let currentSlide = slides[ slideIndex - 1 ];

    console.log(currentSlide);
    
    // toggles class phase on current slide [ animation ]
    currentSlide.toggleAttribute('class', ' phase');

    // display slideIndex - 1 [ current ] to display flex
    slides[slideIndex-1].style.display = 'flex';

    dots[slideIndex-1].className += " active";

};

// init [ slideshow ] function
slideshow(slideIndex);

