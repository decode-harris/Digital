// nav component selector
let nav = document.querySelector('#nav');

// function [ menuMobileOpen ] button event
menuMobileOpen = () => {

    // add nav class [ nav_active ]
    nav.classList.add('nav_active');
    
    // test
    console.log(nav);

}

// function [ menuMobileExit ] button event
menuMobileExit = () => {

    // remove nav class [ nav_active ]
    nav.classList.remove('nav_active');
    
    // test
    console.log(nav);

}

// menu button selector
let menu = document.querySelector('#menu');

// menu button event
menu.addEventListener('click', menuMobileOpen);

// exit button selector
let exit = document.querySelector('#exit');

// exit button event
exit.addEventListener('click', menuMobileExit);

// [ sections ] all selector
let sections = document.querySelectorAll('section');


// function [ sectionsDefaultView ]
sectionsDefaultView = () => {

    // for loop [ sections ]
    for ( i = 0; i < sections.length; i++) {

        // remove all sections from tablet, laptop & desktop views
        sections[i].style.display = 'none';

        // test
        console.log('sections Default initiated');
    }

}

// function [ loadMobilePages ]
loadMobilePages = () => {

    // for loop [ section ]
    for ( i = 0; i < sections.length; i++) {

        // assign all sections to display flex
        sections[i].style.display = 'flex';
        
        // test
        console.log('loadMobilePages : ' +  sections[i]);
    }
}

// function [ loadLandingPage ]
loadLandingPage = () => {

    // init [ sectionsDefaultView ] function
    sectionsDefaultView();

    // for loop [ section ]
    for ( i = 0; i < sections.length; i++) {

        // assign node 0 [ homepage ] to display property flex
        sections[0].style.display = 'flex';    
        
        // test
        console.log(sections[0]);
    }
    
}

// section container selectors
let homepageSection = document.querySelector('#homepage');
let developmentSection = document.querySelector('#development');
let technicalSection = document.querySelector('#technical');
let contactSection = document.querySelector('#contact');

// navigation event button selectors
const homepageButton = document.querySelector('#homepage-btn');
const developmentButton = document.querySelector('#development-btn');
const technicalButton = document.querySelector('#technical-btn');
const contactButton = document.querySelector('#contact-btn');

// event [ homepageButton ]
homepageButton.addEventListener('click', ()=> {

    // validate if element is display property flex
    if (homepageSection.style.display != 'flex') {

        // init [ sectionReset ] function
        sectionsDefaultView();

        // assign homepage section to display property [ flex ]
        homepageSection.style.display = 'flex';
    }
    // test
    console.log('homepage button clicked');

});

// event [ developmentButton ]
developmentButton.addEventListener('click', ()=> {

    // validate if element is display property flex
    if (developmentSection.style.display != 'flex') {

        // init [ sectionReset ] function
        sectionsDefaultView();

        developmentSection.style.display = 'flex';
    }
    // test
    console.log('development button clicked');

});

// event [ technicalButton ]
technicalButton.addEventListener('click', ()=> {

    // validate if element is display property flex
    if (technicalSection.style.display != 'flex') {

        // init [ sectionReset ] function
        sectionsDefaultView();

        technicalSection.style.display = 'flex';
    }
    // test
    console.log('technical button clicked');

});

// event [ contactButton ]
contactButton.addEventListener('click', ()=> {

    // validate if element is display property flex
    if (contactSection.style.display != 'flex') {

        // init [ sectionReset ] function
        sectionsDefaultView();

        contactSection.style.display = 'flex';
    }
    // test
    console.log('contact button clicked');

});

// // function [ mql ] : media query listener
window.onload = mql = (e)=> {
    
    let mq = window.matchMedia('(min-width: 700px)');

    e = mq;
    // init [ sectionsDefaultView ] function
    sectionsDefaultView();
    
    // validate if page matches media query [ mq ]
    if (e.matches) {
        
        // init [ sectionReset ] function
        sectionsDefaultView();
        
        // init [ loadLandingPage ] function [ tablet & desktop ]
        loadLandingPage();

        // init [ projectsCycler ] function
        projectsCycler();
        
        // test
        console.log('[ mql ] : desktop media query');
    }
    // default functions for switching to non matched media query [ mobile ]
    else {

        // init [ sectionReset ] function
        sectionsDefaultView();

        // init [ loadMobilePages ] function
        loadMobilePages();

        // init [ projectsMobileCycler ] function
        projectsMobileCycler();
        
        
        // test
        console.log('[ mql ] : mobile media query');

    }

    // event [ mq ] on change of view
    mq.addEventListener('change', mql);
    
};