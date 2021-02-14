const content = document.querySelector('.main');

// section content selectors
let homepage = document.querySelector('#homepage');
let informationpage = document.querySelector('#informationpage');
let projectpage = document.querySelector('#projectpage');
let contactpage = document.querySelector('#contactpage');

// navigation button selectors
let nav_homepage = document.querySelector('#nav_homepage');
let nav_informationpage = document.querySelector('#nav_informationpage');
let nav_projectpage = document.querySelector('#nav_projectpage');
let nav_contactpage = document.querySelector('#nav_contactpage');

// all section content 
let sections = document.querySelectorAll('.sections');

// test
console.log(sections);


// function [ pageDefaultProperties ]
pageDefaultProperties = () => {

    // sections loop
    for(let i = 0; i < sections.length; i++) {

        // remove all sections
        sections[i].style.display = 'none';

        // test
        console.log('page default properties applied');
    }

    // onload display the homepage
    homepage.style.display = 'flex';

    // test
    console.log('homepage is loaded');

}
// init [ pageDefaultProperties ] function
pageDefaultProperties();


// event [ homepage ]
nav_homepage.addEventListener('click', ()=> {

    // init [ pageDefaultProperties ] function
    pageDefaultProperties();
 
});

// event [ informationpage ]
nav_informationpage.addEventListener('click', ()=> {

    // init [ hideSections ] function
    hideSections();

    // validate homepage display property
    if (informationpage.style.display != 'flex') {

        // apply active styles
        informationpage.style.display = 'flex';
    }
    
 
});

// event [ projectpage ]
nav_projectpage.addEventListener('click', ()=> {

    // init [ hideSections ] function
    hideSections();

    // validate projectpage display property
    if (projectpage.style.display != 'flex') {

        // apply active styles
        projectpage.style.display = 'flex';
    }
    
 
});

// event [ contactpage ]
nav_contactpage.addEventListener('click', ()=> {

    // init [ hideSections ] function
    hideSections();

    // validate contactpage display property
    if (contactpage.style.display != 'flex') {

        // apply active styles
        contactpage.style.display = 'flex';
    }
    
 
});



// function [ hideSections ]
hideSections = () => {

    // sections loop
    for(let i = 0; i < sections.length; i++) {

        // remove all sections
        sections[i].style.display = 'none';

        // test
        console.log('sections removed');
    }


}