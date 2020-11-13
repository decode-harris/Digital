/*
    [ navigation functions ]

    1. navMenuSmall - navMenuFull [ combine into 1 function]
    2. navigation state

    functions for navigation component
        1. mobile open / mobile exit
        2. desktop minimize / desktop fullsize
        3. desktop link == section content
        
*/

navMenuSmall = () => {
    
    // nav component selector
    let nav = document.querySelector('#nav');

    // assign nav class to [ nav_small ]
    nav.classList.toggle('nav_small');

    // remove nav class [ nav_full ]
    nav.classList.remove('nav_full');

    // switch arrow to show content fold
    minimize.innerHTML = '-->';

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
        
        console.log(mini[i]);
    }

    // ul nav_btns li all selector  
    let nav_btns = document.querySelectorAll('.nav_btns li');

    // loop [ nav_btns ] li
    for (i = 0; i < nav_btns.length; i++) {

        if (nav_btns[i].style.gridColumn != 'span 2') {

            nav_btns[i].style.gridColumn = 'span 2';
        }
        else {
            nav_btns[i].style.gridColumn = 'span 1';
        }

    }

    
    // test
    console.log('navigation container : small');
}

let minimize = document.querySelector('#minimize');

// function [ navMenuFull ] 
navMenuFull = () => {
    
    // nav component selector
    let nav = document.querySelector('#nav');
    
    // assign nav display to [ flex ]
    nav.style.display = 'flex';
    
    // assign nav class to [ nav_full ]
    nav.classList.toggle('nav_full');

    // remove nav class [ nav_small ]
    nav.classList.remove('nav_small');

    
    // // validate nav classname
    // if (nav.className != 'nav_small') {
    //     nav.style.width = '300px';
    // }
    // else {
    //     nav.style.width = '100px';
    // }
 
    // ul nav_btns li all selector  
    let nav_btns = document.querySelectorAll('.nav_btns li');

    // loop [ nav_btns ] li
    for (i = 0; i < nav_btns.length; i++) {

        if (nav_btns[i].style.gridColumn != 'span 1') {

            nav_btns[i].style.gridColumn = 'span 1';
        }
        else {
            nav_btns[i].style.gridColumn = 'span 2';
        }

    }

    // switch arrow to show content fold
    minimize.innerHTML = '<--';
    
    // test
    console.log('navigation container : full');

}

navigationState = () => {
    // nav component selector
    let nav = document.querySelector('#nav');

    // test if classlist has been assigned
    if (nav.className == 'nav_small') {

        // assign navMenuFull function to [ minimize ] button
        minimize.addEventListener('click', navMenuFull);

        // test
        console.log('nav class :' + nav.className);
    }
    else {
        
        // assign navMenuSmall function to [ minimize ] button
        minimize.addEventListener('click', navMenuSmall);

        // test
        console.log('nav class :' + nav.className);
    }

}


/*
    [ MOBILE NAVIGATION FUNCTIONS ]

    1. navigationMobileProps
    2. navMobileMenu - initiated via [ mql.js ] : media query listener function
    3. 
*/

// navigationStateMobile = () => {
    
//     // nav component selector
//     let nav = document.querySelector('#nav');

//     // nav props [ mobile ]
//     nav.style.display = 'none';
//     nav.style.width = '0';
//     menu.style.marginLeft = '10px';

// }


navMobileMenu = () => {

    menu.style.marginLeft = '10px';

    // nav component selector
    let nav = document.querySelector('#nav');
    
    // minimize class all selector
    let mini = document.querySelectorAll('.mini');
    
    // loop mini
    for (i = 0; i < mini.length; i++) {

        // assign all mini elements to flex
        mini[i].style.display = 'flex';
    } 

    // validate nav display props
    if (nav.style.display != 'flex') {

        // nav props [ active ]
        nav.style.display = 'flex';
        nav.style.width = '300px';
        menu.style.marginLeft = '300px';
    }
    else {
        //  nav props [ default ]
        nav.style.display = 'none';
        nav.style.width = '0';
        menu.style.marginLeft = '10px';
    }

    
    
};

let menu = document.querySelector('#menu');
menu.addEventListener('click', navMobileMenu);



/*
    [ link - section ] function

    1. loop links 
    2. loop section content
    3. assign all links to all sections
    4. onclick display specific section
*/

navigationStateMobile = () => {

    let i;
    let nav = document.querySelector('#nav');
    let links = document.querySelectorAll('.links');
    
    links.forEach(item => {

        item.addEventListener('click', navigationMobile);

            menu.style.marginLeft = '10px';
            nav.style.display = 'none';

        });
        
        console.log(item);

    };

    let sections = document.querySelectorAll('.wrapper_inner');

    for (i = 0; i < sections.length; i++) {
        
        // test
        console.log(sections[i]);
    }
    


}

// // page section selectors
// let homepage = document.querySelector('#page');
// let information = document.querySelector('#about');
// let projects = document.querySelector('#projects');
// let technical = document.querySelector('#technical');

// // link homepage selector
// let link_homepage = document.querySelector('#link_homepage');

// // event [ link homepage ]
// link_homepage.addEventListener('click', ()=> {
//     // add margin to top of section [ height of sticky nav ]
//     homepage.style.paddingTop = '12vh';
//     // scroll the section into view
//     homepage.scrollIntoView();
//     // assign nav to display propety none
//     nav.style.display = 'none';
//     // menu button selector
//     let menu = document.querySelector('#menu');
//     // assign menu button back to default position
//     menu.style.marginLeft = '10px';

//     // test
//     console.log('scrolled to section [ homepage ]');
// });

// // link about selector
// let link_about = document.querySelector('#link_about');

// // event [ link about ]
// link_about.addEventListener('click', ()=> {
//     // add margin to top of section [ height of sticky nav ]
//     about.style.paddingTop = '12vh';
//     // scroll the section into view
//     about.scrollIntoView();
//     // assign nav to display propety none
//     nav.style.display = 'none';
//     // menu button selector
//     let menu = document.querySelector('#menu');
//     // assign menu button back to default position
//     menu.style.marginLeft = '10px';

//     // test
//     console.log('scrolled to section [ about ]');
// });

// // link projects selector
// let link_projects = document.querySelector('#link_projects');
// // event [ link projects ]
// link_projects.addEventListener('click', ()=> {
//     // add margin to top of section [ height of sticky nav ]
//     projects.style.paddingTop = '12vh';
//     // scroll the section into view
//     projects.scrollIntoView();
//     // assign nav to display propety none
//     nav.style.display = 'none';
//     // menu button selector
//     let menu = document.querySelector('#menu');
//     // assign menu button back to default position
//     menu.style.marginLeft = '10px';

//     // test
//     console.log('scrolled to section [ projects ]');
// });

// // link technical selector
// let link_technical = document.querySelector('#link_technical');

// // event [ link technical ]
// link_technical.addEventListener('click', ()=> {
//     // add margin to top of section [ height of sticky nav ]
//     technical.style.paddingTop = '12vh';
//     // scroll the section into view
//     technical.scrollIntoView();
//     // assign nav to display propety none
//     nav.style.display = 'none';
//     // menu button selector
//     let menu = document.querySelector('#menu');
//     // assign menu button back to default position
//     menu.style.marginLeft = '10px';

//     // test
//     console.log('scrolled to section [ technical ]');
// });

// // link footer selector
// let link_footer = document.querySelector('#link_footer');

// // event [ link footer ]
// link_footer.addEventListener('click', ()=> {
//     // add margin to top of section [ height of sticky nav ]
//     footer.style.paddingTop = '12vh';
//     // scroll the section into view
//     footer.scrollIntoView();
//     // assign nav to display propety none
//     nav.style.display = 'none';
//     // menu button selector
//     let menu = document.querySelector('#menu');
//     // assign menu button back to default position
//     menu.style.marginLeft = '10px';

//     // test
//     console.log('scrolled to section [ footer ]');
// });

//  ()=> {
// minimizeNavbar = () => {
//     // minimize class all selector
//     let mini = document.querySelectorAll('.mini');

//     // loop iterator
//     let i;

//     // loop mini
//     for (i = 0; i < mini.length; i++) {

//         if (mini[i].style.display != 'none') {
//             mini[i].style.display = 'none';
//         }
//         else {
//             mini[i].style.display = 'flex';
//         }
        
//         console.log(mini[i]);
//     }

//     // ul nav_btns li all selector  
//     let nav_btns = document.querySelectorAll('.nav_btns li');

//     // loop [ nav_btns ] li
//     for (i = 0; i < nav_btns.length; i++) {

//         if (nav_btns[i].style.gridColumn != 'span 2') {

//             nav_btns[i].style.gridColumn = 'span 2';
//         }
//         else {
//             nav_btns[i].style.gridColumn = 'span 1';
//         }

//     }

//     // nav component selector
//     let nav = document.querySelector('#nav');

//     // validate button minimize inner html [ change to icon on live build ]
//     if (minimize.innerHTML != '-->') {
//         minimize.innerHTML = '-->';
//     }
//     // validate nav length
//     if (nav.style.width != '100px') {
        
//         // set nav width to 100px
//         nav.style.width = '100px';

//     }
//     // assign altered elements back to default
//     else {
//         minimize.innerHTML = '<--';
//         // set nav width to 300px [ default ]
//         nav.style.width = '300px';

//     }

// };


// minimize.addEventListener('click', minimizeNavbar);

// home page component selector
// let home = document.querySelector('#wrapper');


















// function [ defaultScreenView ]
// defaultScreenView = () => {

//     // content section all selector
//     let section = document.querySelectorAll('section');
    
//     // nav links all selector
//     let links = document.querySelectorAll('.nav_int li');
    
//     // loop iterator
//     let i;

//     // loop [ section ]
//     for (i = 0; i < section.length; i++) {
        
//         // remove all section components from view
//         section[i].style.display = 'none';
//         // console.log(section[i]);

//         // set first section array item to flex [ homepage ]
//         section[0].style.display = 'flex';

//         // add event to each link
//         links.forEach(item => {

//             item.addEventListener('click', ()=> {
    
//                 if (item.id == 'btn_home') {
                    
//                     // activate current section content
//                     section[0].style.display = 'flex';
                    
//                     // remove inactive section content
//                     section[1].style.display = 'none';
//                     section[2].style.display = 'none';
//                     section[3].style.display = 'none';

//                     // assign current section class to active
//                     section[0].classList.toggle('active');

//                     // test current section
//                     console.log(section[0].innerHTML);

//                 }
//                 if (item.id == 'btn_proj') {

//                     // activate current section content
//                     section[1].style.display = 'flex';

//                     // remove inactive section content
//                     section[0].style.display = 'none';
//                     section[2].style.display = 'none';
//                     section[3].style.display = 'none';

//                     // test current section
//                     console.log(section[1].innerHTML);
//                 }
//                 if (item.id == 'btn_tech') {

//                     // activate current section content
//                     section[2].style.display = 'flex';

//                     // remove inactive section content
//                     section[0].style.display = 'none';
//                     section[1].style.display = 'none';
//                     section[3].style.display = 'none';

//                     // test
//                     console.log(section[2].innerHTML);
//                 }
//                 if (item.id == 'btn_cont') {
                    
//                     // activate current section content
//                     section[3].style.display = 'flex';

//                     // remove inactive section content
//                     section[0].style.display = 'none';
//                     section[1].style.display = 'none';
//                     section[2].style.display = 'none';

//                     // test
//                     console.log(section[3].innerHTML);
//                 }
                
//             });
    
//             // test
//             console.log(item);
    
//         });
    
//     }

// }

// init [ defaultScreenView ] function
// defaultScreenView();










// // function [ navMobileMenuExit ]
// navMobileMenuExit = () => {
    
    
//     let nav = document.querySelector('#nav');

//     if (nav.style.display != 'none') {
//         nav.style.display = 'none';
//     }
//     if (nav.style.width != '0') {
//         nav.style.width = '0';
//     }
//     if (menu.style.marginLeft != '0') {
//         menu.style.marginLeft = '0';
//     }
    
    

// };





// navbar = () => {

//     // minimize class all selector
//     let mini = document.querySelectorAll('.mini');

//     // loop iterator
//     let i;

//     // loop mini
//     for (i = 0; i < mini.length; i++) {

//         menu.style.marginLeft = '0';

//         if (mini[i].style.display != 'flex') {
//             mini[i].style.display = 'flex';
            
//         }
//         else {
//             mini[i].style.display = 'none';
//         }
        
//         // test
//         console.log('navbar : ' +  mini[i]);
//     }

//     let nav = document.querySelector('#nav');
    

    

    
//     // nav.style.display = '0';

// }


// menu.addEventListener('click', navbar);