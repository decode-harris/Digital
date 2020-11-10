// array [ projectsArray ] : project information
let projectsArray = [
    // [ projectArray ] information objects
    {
        // project [ ALFHEIM ]
        imageMobile: 'https://i.ibb.co/8sZyK6G/alfheim-mobile.png',
        imageDesktop: 'https://i.ibb.co/9rqM43v/alfheim-desktop.png',
        title: 'alfheim',
        tagline: 'mobile responsive redesign',
        desc: 'responsive redesign of accomodation website located in Queenstown, New Zealand',
        
    },
    {
        // project [ JOTUNHEIM ]
        imageMobile: 'https://i.ibb.co/0VgbWnk/jotunheim-mobile.png',
        imageDesktop: 'https://i.ibb.co/w7DT24C/jotunheim-desktop.png',
        title: 'jotunheim',
        tagline: 'dashboard management system',
        desc: 'projects spreadsheet, timeline, onboard tracking, production & hosting',
        
    },
    {
        // project [ NIFLHEIM ]
        imageMobile: 'https://i.ibb.co/vs1y9Vs/niflheim-mobile.png',
        imageDesktop: 'https://i.ibb.co/54791xR/niflheim-desktop.png',
        title: 'niflheim',
        tagline: 'assistant application tracker',
        desc: 'personal expenses application tracking system with customization',
        
    },
    {
        // project [ VANAHEIM ]
        imageMobile: 'https://i.ibb.co/ZNzwys5/vanaheim-mobile.png',
        imageDesktop: 'https://i.ibb.co/YWkTLP5/vanaheim-desktop.png',
        title: 'vanaheim',
        tagline: 'interactive learning module',
        desc: 'animated interactive solar system planets learning module',
        
    },

];

// slide starting point
let slideIndex = 1;

// function [ currentSlide ]
currentSlide = (n) => {

    // init slideshow, assign slide index to n
    slideshow(slideIndex = n);

}

// function [ controlSlide ]
controlSlide = (n) => {

    // init slideshow, slide index is plus || = to n
    slideshow(slideIndex += n);

}

// function [ slideshow ]
slideshow = (n) => {

    // loop iterator
    let i;
    
    // slideshow [ slides ] element selector
    let slides = document.getElementsByClassName('slides');

    // project information variables
    let projectTitle;
    let projectTag;
    let projectDesc;
    let projectImage;

    // project information output variables
    let slideTitle = document.getElementsByClassName('slideTitle');
    let slideTag = document.getElementsByClassName('slideTag');
    let slideDesc = document.getElementsByClassName('slideDesc');
    
    // controls view button selector
    let controlsView = document.querySelector('.controlsView');

    // if n is greater than slides, assign slide index to 1
    if (n > slides.length) slideIndex = 1;

    // if n is less than 1, assign slide index to slide 
    if (n < 1) slideIndex = slides.length;
    

    // loop [ projects array ]
    for (i = 0; i < projectsArray.length; i++) {

        // get current array projects title & assign to projectTitle variable
        projectTitle = projectsArray[i].title;
    
        // get current array projects desc & assign to projectDesc variable
        projectDesc = projectsArray[i].desc;

        // get current array projects tag * assign to projectTag variable
        projectTag = projectsArray[i].tagline;
    
        // get current array projects image & assign to projectImage variable [ mobile devices ]
        projectImage = projectsArray[i].imageMobile;

        // get current array projects image & assign to projectImage variable [ desktop devices ]
        // let projectImage = projectsArray[i].imageDesktop;
        
        // set media query listener here to switch between mobile & desktop images
        // set media query listener here to switch between mobile & desktop images

        // assign current slide background image to project image value
        slides[i].style.backgroundImage = 'url(' + projectImage + ')';

        // assign current slide id to project title value
        // controlsView.id = projectTitle;

        
        
        // // test
        console.log(projectTitle, projectImage, projectDesc);
    }

    // loop [ title ] class selector
    for (i = 0; i < slideTitle.length; i++) {

        // assign slide title to project title value
        slideTitle[i].innerHTML = projectsArray[i].title;

        // assign [ controlsView ] button id to current projects array object title
        controlsView.id = projectsArray[slideIndex - 1].title;
    }

    // loop [ description ] class selector
    for (i = 0; i < slideDesc.length; i++) {

        // assign slide title to project title value
        slideDesc[i].innerHTML = projectsArray[i].desc;

    }

    // loop [ tagline ] class selector
    for (i = 0; i < slideTag.length; i++) {

        // assign slide tagline to project tagline value
        slideTag[i].innerHTML = projectsArray[i].tagline;
    }

    // loop [ slides ] class selector
    for (i = 0; i < slides.length; i++) {

        // remove all slide elements
        slides[i].style.display = 'none';

    }
    
    // current slide is equal to slides [ slide index - 1 ]
    let current = slides[ slideIndex - 1];
    
    // set slides class to phase
    current.toggleAttribute('class', 'phase');
    
    // set slides display to flex
    slides[ slideIndex - 1 ].style.display = 'flex';
    // current.style.display = 'flex';

    controlsView.id = projectsArray[slideIndex - 1].title;
    // test
    console.log(controlsView);

}

// init [ slideshow ( slideIndex ) ]
slideshow(slideIndex);

// [ controlsNext ] button selector
const controlsNext = document.querySelector('#controlsNext');

// [ controlsPrev ] button selector
const controlsPrev = document.querySelector('#controlsPrev');

// event [ controls : next ] view next slide
controlsNext.addEventListener('click', ()=> {
    
    // init [ controlSlide + 1 ] function 
    controlSlide(1);

});

// event [ controls : prev ] view prev slide
controlsPrev.addEventListener('click', ()=> {
    
    // init [ controlSlide - 1 ] function 
    controlSlide(-1);

});