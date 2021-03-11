// element selector [ navigation component ]
// const nav = document.querySelector('#nav');


// let navbar_desktop = document.querySelector('.title .desktop');
// navbar_desktop.style.display = 'none';

// function navigation() {
    
//     nav.style.display = 'none';
// };

// navigation();
// // element selector [ menu button ]
// const menu = document.querySelector('#menu');
// let icon = document.querySelector('#icon');
// let pos;

// // event [ menu button ]
// menu.addEventListener('click', ()=> {

//     if (nav.style.display != 'fixed') {

//         nav.removeAttribute('display', 'none');
//         nav.setAttribute('display', 'fixed');
//         nav.style.display = 'fixed';
//         nav.style.top = window.scrollY;
//         nav.style.left = 0;
//         nav.style.width = '100%';
//         nav.style.height = '100%';
//         nav.style.marginTop = '10vh';
//         nav.style.background = 'red';

//         console.log('logged : menu if');
//     }
//     else {
//         // nav.style.display = 'none';

//         console.log('logged : menu else');
//     }
    

//     // if icon is not equal to lines & nav is not equal to flex
//     // if (icon.classList == 'fas fa-bars' && nav.style.display != 'flex') {

//     //     // icon props
//     //     icon.classList = 'fas fa-time';
        
//     //     // nav props
//     //     nav.style.display = 'flex';
//     //     nav.style.position = 'absolute';
//     //     nav.style.top = window.scrollY;
//     //     nav.style.left = 0;
//     //     nav.style.width = '100%';
//     //     nav.style.height = '100%';
//     //     nav.style.marginTop = '10vh';
//     //     nav.style.background = 'red';
        
    
//     // }

//     // if (icon.classList != 'fas fa-times' && nav.style.display != 'none') {
        
//     //     // icon props
//     //     icon.classList = 'fas fa-times';

//     //     // nav props
//     //     // nav.style.display = 'none';

        

        
        
//     // }

// });






    
    
    orderly = () => {

        if (nav.style.width != '0%') {
            nav.style.width = '0%';
        }
        if (logo.style.color != '#FFF') {
            logo.style.color = '#FFF';
        }
        if (navbar.style.background != 'transparent') {
            navbar.style.background = 'transparent';
        }
        if (icon.classList != 'fas fa-bars') {
            icon.classList = 'fas fa-bars';
        }
    };

    
let homepage = document.querySelector('#homepage');
let link_homepage = document.querySelector('#link-homepage');

let overview = document.querySelector('#overview');
let link_overview = document.querySelector('#link-overview');

let introduction = document.querySelector('#introduction');
let link_introduction = document.querySelector('#link-introduction');

let projects = document.querySelector('#projects');
let link_projects = document.querySelector('#link-projects');

let information = document.querySelector('#information');
let link_information = document.querySelector('#link-information');




// navigation links
const links = document.querySelectorAll('.items a');
console.log(links);

// nav component selector
const nav = document.querySelector('#nav');
const navbar = document.querySelector('.nav-bar');

// position variable [ undefined ]
let pos;

// set a min section height for comparison
let sectionHeight = '609px';

// // function [ mql ] : media query listener
window.onload = mql = (e)=> {
    
    // media query [ mq ] variable for devices greater than 700px
    let mq = window.matchMedia('(min-width: 700px)');

    // assign event [ e ] to match media [ mq ] value
    e = mq;

    // validate if page matches media query [ mq ]
    if (e.matches) {

        nav.style.display = 'flex';
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.margin = '0';
        nav.style.width = '5vw';    

        links.forEach(element => {
            
            element.addEventListener('click', ()=> {

                if (nav.style.width != '5vw') {
                    nav.style.width = '5vw';
                    nav.style.position = 'fixed';
                    nav.style.top = '0';
                }

            });

        });
        
        

        
        
        
        menu.style.display = 'none';
        navbar.style.background = '#000';
        // test
        console.log('[ mql ] : desktop media query');

    }

    // default functions for switching to non matched media query [ mobile ]
    else {
        nav.style.width = '0';
        menu.style.display = 'flex';

        // event [ window ] : scroll position listener
        window.addEventListener('scroll', ()=> {
                
            // get current position
            pos = window.scrollY;

            if (pos <= '700px') {
                console.log('pos less than 700px' + pos);
            }
            
            if (nav.style.top > '700px') {

                

                // assign nav top to pos + px value
                nav.style.top = pos + 'px';

                // assign menu btn background to darkgrey
                // menu.style.background = 'rgba(20, 20, 20, 0.822)';

                
                
            }

            if (nav.style.width != '0%') {
                nav.style.width = '0%';
            }

            
            else {

                // get current position
                pos = window.scrollY;
                
                // nav props
                nav.style.top = pos + 'px';
                nav.style.left = '0';
                nav.style.marginTop = '10vh';

                // navbar props
                // navbar.style.top = '0';
                // navbar.style.left = '0';

                

                // test 
                // console.log('[ window Else ] :' + pos + 'px');
            }
        
        });
        
        // test
        console.log('[ mql ] : mobile media query');

    }

    // event [ mq ] listener, run mql function on [ mq ] change
    mq.addEventListener('change', mql);
    
};




// menu button selector
let menu = document.querySelector('#menu');
let icon = document.querySelector('#menu i');

let mail = document.querySelector('#mail');
let logo = document.querySelector('#mail i');

let head = document.querySelector('#head');

// menu button event
menu.addEventListener('click', ()=> {

    menu.style.background = 'rgba(20, 20, 20, 0.822)';
    
    if (icon.classList != 'fas fa-times') {

        // assign navbar background to white
        navbar.style.background = '#FFF';
        navbar.style.color = '#000';

        logo.style.color = '#000';
        head.style.color = '#000';

        // change icon class list to [ X ] close 
        icon.classList = 'fas fa-times';
    }
    if (nav.style.width != '100%') {

        // change nav width to active [ 100% ] 
        nav.style.width = '100%';
    }
    else {
        // change icon class list to [ bars ] menu
        icon.classList = 'fas fa-bars';

        // assign navbar background to transparent
        navbar.style.background = 'transparent';

        // assign navbar background to default [ #000 / black ]
        navbar.style.background = '#000';
        
        // change nav width back to default [ 0% ]
        nav.style.width = '0%';

        logo.style.color = '#FFF';
        head.style.color = '#FFF';
    
    }
    
});