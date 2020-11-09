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

    // display slideIndex - 1 [ current ] to display flex
    slides[slideIndex-1].style.display = 'flex';

};

// init [ slideshow ] function
slideshow(slideIndex);



buttons = () => {


    // view button selector
    let viewButton = document.querySelector('.viewButton');
    
    // view button id variable
    let id;

    // linkIDs loop
    for (i = 0; i < linkIDs.length; i++) {
        
        console.log(linkIDs[i]);
        
    }

    if (n == 1) {
        
        id = linkIDs[n];
        viewButton.id = id;

        console.log(n);
    }
    if (n == 2) {
        
        id = linkIDs[n];
        viewButton.id = id;

        console.log(n);
    }
    if (n == 3) {
        
        id = linkIDs[n];
        viewButton.id = id;

        console.log(n);
    }
    if (n == 4) {
        
        id = linkIDs[n];
        viewButton.id = id;

        console.log(n);
    }

    
    // loop iterator
    let i;
    
    

    

    

    
    let projectPlanets = linkIDs[0];
    let projectNiflheim = linkIDs[1];
    let projectCoffee = linkIDs[2];
    let projectRntlpay = linkIDs[3];

    console.log(projectPlanets);
    console.log(projectNiflheim);
    console.log(projectCoffee);
    console.log(projectRntlpay);
    
    // console.log(viewButton);
    
    // console.log(buttonID);
    

    

}
// buttons();
// function [ assignProjectID ]
// assignProjectID = (n) => {

//     /*

//         rules

//         1. loop proBtnLinks
//         2. get proBtnLinks value
//         3. assign value to Btn id
//         4. iterate id each click

//     */

    

//     // 1. loop projectBtnLinks
//     let i;
    

    

//     // projectButton.id = id;

    

//     // test
//     // console.log(id);


// let id;

// // project button links loop
// for (i = 0; i < projectButtonLinks.length; i++) {

    
    
//     // set id
//     id = projectButtonLinks[i];

// }

    

    

// }

// assignProjectID();


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



