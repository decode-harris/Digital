// nav component selector
let nav = document.querySelector('#nav');
// wrapper container selector
const wrapper = document.querySelector('#wrapper');

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

/* 

    function [ menuMobileNavigation ]

    selects all elements with classname [ wrapper_inner ( sections )]
    selects all elements with classname [ links ( a tags )]
    loops through [ wrapper_inner ] elements and assigns display flex 
    for each link [ item ] on click remove nav classname [ nav_active ]

*/
menuMobileNavigation = () => {

    // loop iterator
    let i;
    
    // lopp [ sections ]
    for(i = 0; i < sections.length; i++) {
        sections[i].style.display = 'flex';
    }

    // for each [ links ( item )]
    links.forEach(item => {
        // add event [ sectionContentOpen ] via onclick
        item.addEventListener('click', ()=> {
            // remove class [ nav_active ] from nav component
            nav.classList.remove('nav_active');
        });
    
    });

}

/* 
    function [ menuDesktopNavigation ]

    selects all elements with classname [ wrapper_inner ( sections )]
    selects all elements with classname [ links ( a tags )]
    loops through [ wrapper_inner ] elements and assigns display none
    assign [ wrapper_inner]  first child element ( sections[0] ) to flex : homepage || landing


*/
menuDesktopNavigation = () => {
    
    // loop iterator
    let i;

    // loop sections
    for(i = 0; i < sections.length; i++) {
        
        // remove all sections from view
        sections[i].style.display = 'none';

        // home page view on default
        sections[0].style.display = 'flex';
    }

    // loop [ links ]
    for(i = 0; i < links.length; i++) {

        // test
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
                    tech.style.display = 'flex';
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


// section all [ wrapper inner ] selector
let sections = document.querySelectorAll('.wrapper_inner');
// links all [ links ] selector
let links = document.querySelectorAll('.links');








// function [ minimizeNavigation ] : nav component small props [ desktop ]
let minimizeNavigation = ()=> {

    let nav = document.querySelector('#nav');

    

    
        // remove nav class [ nav_full ]
        nav.classList.remove('nav_full');

    
        
        // assign nav class to [ nav_small ]
        nav.classList.add('nav_small');


        if (nav.className != 'nav_full') {
            nav.classList = 'nav_full';
        // } else {
        //     nav.classList = 'nav_small';
        // }

        }




    // minimize class all selector
    let mini = document.querySelectorAll('.mini');

    // loop iterator
    let i;

    // loop mini
    for (i = 0; i < mini.length; i++) {

        if (mini[i].style.display != 'none') {
            mini[i].style.display = 'none';
        }
        else {
            mini[i].style.display = 'flex';
        }

        // test
        // console.log(mini[i]);
    }

    // ul nav_btns li all selector  
    let nav_btns = document.querySelectorAll('.nav_btns li');

    // loop [ nav_btns ] li
    for (i = 0; i < nav_btns.length; i++) {

        nav_btns[i].classList.add('mi');

    }
    
    
    
    // if (minimize.innerHTML != '-->') {
        
    //     // switch arrow to show content fold
    //     minimize.innerHTML = '-->';

    //     // test
    //     console.log(minimize.innerHTML);
    // }

    
    // test
    console.log('navigation container : small');

}


// nav [ minimize ] button selector
let minimize = document.querySelector('#minimize');
minimize.addEventListener('click', minimizeNavigation);



    
    

    


// function [ navMenuFull ] : nav component default props [ desktop ]
// navMenuFull = () => {
    
//     // nav component selector
//     let nav = document.querySelector('#nav');
    
//     // assign nav display to [ flex ]
//     nav.style.display = 'flex';
    
//     // assign nav class to [ nav_full ]
//     nav.classList.toggle('nav_full');

//     // remove nav class [ nav_small ]
//     nav.classList.remove('nav_small');

//     // validate nav classname
//     if (nav.className != 'nav_small') {
//         nav.style.width = '300px';
//     }
//     if (minimize.innerHTML == '-->') {

//         // switch arrow to show content fold
//         minimize.innerHTML = '<--';

//         // test
//         console.log(minimize.innerHTML);
//     }
//     else {
//         nav.style.width = '100px';
//     }
 
//     // ul nav_btns li all selector  
//     let nav_btns = document.querySelectorAll('.nav_btns li');

//     // loop [ nav_btns ] li
//     for (i = 0; i < nav_btns.length; i++) {

//         if (nav_btns[i].style.gridColumn != 'span 1') {

//             nav_btns[i].style.gridColumn = 'span 1';
//         }
//         else {
//             nav_btns[i].style.gridColumn = 'span 2';
//         }

//     }

    

//     // test
//     console.log('navigation container : full');

// }

// // function [ navigationState ] initiated via [ mql.js ] : media query listener
// navigationState = () => {
//     // nav component selector
//     let nav = document.querySelector('#nav');

//     // test if classlist has been assigned
//     if (nav.className == 'nav_small') {

//         // assign navMenuFull function to [ minimize ] button
//         // minimize.addEventListener('click', navMenuFull);

//         // test
//         console.log('nav class :' + nav.className);
//     }
//     else {
        
//         // assign navMenuSmall function to [ minimize ] button
//         // minimize.addEventListener('click', navMenuSmall);

//         // test
//         console.log('nav class :' + nav.classList);
//     }

// }


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