// function [ navigationPropertiesMobileDefault ]
navigationPropertiesMobileDefault = () => {
    
    // validate nav display property
    if (nav.style.display != 'none') {

        // assign nav component display to none
        nav.style.display = 'none';

        // test
        console.log('nav props [ mobile ] : default');
    }
    else {
        
        // init [ navigationPropertiesMobile ] function
        navigationPropertiesMobile();
        
    }
    
};

// function [ navigationPropertiesMobile ]
navigationPropertiesMobile = () => {

    if (nav.style.display != 'grid') {

        // assign nav component display to grid
        nav.style.display = 'grid';

        // test
        console.log('nav props [ mobile ] : active');

    }
    else {

        // assign nav component display to none
        nav.style.display = 'none';
        
        // test
        console.log('nav props [ mobile ] : default');

    }

};

// function [ navigationEventsMobile ]
navigationEventsMobile = () => {

    // nav component selector
    const nav = document.querySelector('#nav');
    
    // validate nav display property
    if (nav.style.display != 'none') {

        // init [ navigationPropertiesMobileDefault ] function
        navigationPropertiesMobileDefault();

        // test
        console.log('nav event [ mobile ] : nav default');
    }
    
    // nav button selectors
    let menu = document.querySelector('#menu');
    let exit = document.querySelector('#exit');

    // event [ nav open ]
    menu.addEventListener('click', ()=> {

        // init [ navigationPropertiesMobile ] function
        navigationPropertiesMobile();
    
    });
    // even [ nav exit ]
    exit.addEventListener('click', ()=> {

        // init [ navigationPropertiesMobile ] function
        navigationPropertiesMobileDefault();
        

    });

};

// init [ navigationEventsMobile ] function
navigationEventsMobile();



