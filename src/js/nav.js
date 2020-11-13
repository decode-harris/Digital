// nav component selector
const nav = document.querySelector('#nav');

// wrapper container selector
const wrapper = document.querySelector('#wrapper');

// function [ navigationMobileOpen ]
navigationMobileOpen = () => {

    // set menu button left 300px [ nav width ]
    menu.style.marginLeft = '300px';
    
    // set nav class to [ nav_active ]
    nav.classList.toggle('nav_active');
    
    // validate nav class [ nav_active]
    if (nav.className === 'nav_active') {

        // add event [ navigationMobileExit ]
        menu.addEventListener('click', navigationMobileExit);

        // remove [ navigationMobileOpen ] function
        menu.removeEventListener('click', navigationMobileOpen);

        // test
        console.log('nav mob open : IF');
    }

}
// function [ navigationMobileExit ]
navigationMobileExit = () => {
    nav.classList.toggle('nav_active');
    // nav.style.width = '0%';

    // reset menu button to default position
    menu.style.marginLeft = '10px';

    // validate null class
    if (nav.className === '') {
        // remove event [ navigationMobileExit ] function
        menu.removeEventListener('click', navigationMobileExit);

        // add event [ navigationMobileOpen ] function
        menu.addEventListener('click', navigationMobileOpen);

        // test
        console.log('nav mob exit : IF');
    }

}

// navigation menu button selector
let menu = document.querySelector('#menu');
// event [ menu ] init navigationMobileOpen function
menu.addEventListener('click', navigationMobileOpen);

// function [ navigationMobilePages ] 
navigationMobilePages = () => {

    // section all [ wrapper inner ] selector
    let sections = document.querySelectorAll('.wrapper_inner');

    // links all [ links ] selector
    let links = document.querySelectorAll('.links');

    // loop iterator
    let i;
    
    // lopp [ sections ]
    for(i = 0; i < sections.length; i++) {
        sections[i].style.display = 'flex';
    }

    // for each [ links ( item )]
    links.forEach(item => {
        // add event [ sectionContentOpen ] via onclick
        item.addEventListener('click', sectionContentOpen);

        // test
        // console.log(item);
    });

}
// function [ sectionContenOpen ] : initiated via [ links ] event
sectionContentOpen = (item) => {

    // current item variable
    let currentSection = item;
    
    // remove class [ nav_active ] from nav component
    nav.classList.remove('nav_active');

    // set menu button to default position
    menu.style.marginLeft = '10px';

    // test
    console.log(currentSection);

}

// function [ navigationDesktopPages ]
navigationDesktopPages = () => {
    
    // section all [ wrapper inner ] selector
    let sections = document.querySelectorAll('.wrapper_inner');

    // loop iterator
    let i;

    // loop sections
    for(i = 0; i < sections.length; i++) {
        
        // remove all sections from view
        sections[i].style.display = 'none';

        // home page view on default
        sections[0].style.display = 'flex';
    }

    // links all [ links ] selector
    let links = document.querySelectorAll('.links');
    
    // loop [ links ]
    for(i = 0; i < links.length; i++) {

        console.log(links[i]);
    }

    // for each [ links ( item ) ]
    links.forEach(item => {

        // event [ item ] click 
        item.addEventListener('click', ()=> {

            // loop [ sections ]
            for(i = 0; i < sections.length; i++) {

                // remove all sections from view
                sections[i].style.display = 'none';
                
                // validate [ links ] id
                if (item.id == 'link_homepage') {
                    // assign [ home ] variable to section [ 0 ]
                    let home = sections[0];
                    // display [ home ] as flex
                    home.style.display = 'flex';
                    // append home to wrapper container
                    wrapper.appendChild(home);
                    
                    // test
                    console.log(home);
                }
                if (item.id == 'link_about') {
                    // assign [ home ] variable to section [ 1 ]
                    let abot = sections[1];
                    // set abot container to flex
                    abot.style.display = 'flex';
                    // append abot to wrapper container
                    wrapper.appendChild(abot);
                    
                    // test
                    console.log(about);
                }
                if (item.id == 'link_projects') {
                    // assign [ home ] variable to section [ 2 ]
                    let proj = sections[2];
                    // set projects container to flex
                    proj.style.display = 'flex';
                    // append projects to wrapper container
                    wrapper.appendChild(proj);
                    
                    // test
                    console.log(proj);
                }
                if (item.id == 'link_technical') {
                    // assign [ home ] variable to section [ 3 ]
                    let tech = sections[3];
                    // set tech container to grid
                    tech.style.display = 'grid';
                    // append tech to wrapper container
                    wrapper.appendChild(tech);
                    
                    // test
                    console.log(tech);
                }
                if (item.id == 'link_footer') {
                    // assign [ foot ] variable to section [ 4 ]
                    let foot = sections[4];
                    // set footer container display to grid
                    foot.style.display = 'flex';
                    // append footer to wrapper container
                    wrapper.appendChild(foot);
                    
                    // test
                    console.log(foot);
                }
            
            }
        
        });

    });
}


// // assign nav classlist to [ nav_mobile ]
// nav.classList.add('nav_active');

// // test
// console.log(nav.className);

// if (nav.className == 'nav_active') {

//     menu.innerHTML = 'x';
//     menu.style.marginLeft = '300px';

//     //    
//     nav.style.display = 'flex';
        
// }
// else {

//     menu.innerHTML = 'bars';
//     menu.style.marginLeft = '10px';
//     nav.style.display = 'none';
// }


// navigationMobileExit = () => {
//     nav.classList.remove('nav_mobile');
//     menu.style.marginLeft = '10px';

//     if (nav.className != 'nav_mobile') {
//         menu.removeEventListener('click', navigationMobileOpen);
//         menu.addEventListener('click', navigationMobileExit);
//     }
//     else {
//         menu.removeEventListener('click', navigationMobileExit);
//         menu.addEventListener('click', navigationMobileOpen);        
//     }

//     console.log(nav.className);
// }