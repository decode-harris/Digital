/*
    state listener function

    properties :

        listens for state changes between mobile and desktop

        apply mob || des functions as per device module


*/

// navigation component selector
const nav = document.querySelector('.nav');
// navigation link selector all
const links = document.querySelectorAll('.link');
// mobile menu button selector
const menu = document.querySelector('.menu');
// mobile exit button selector
const exit = document.querySelector('.exit');

// function [ stateChange ]
function stateChange(e) {
    
    if (e.matches) { // If media query matches

        // change nav width to active [ 100% ] 
        nav.style.width = '0';
        exit.style.display = 'none';

        let icon = document.querySelectorAll('.icon');

        icon.forEach(element => {
            if (element.style.display != 'none') {
                element.style.display = 'none';
            }    
        });
        

        console.log(icon);
        
        // event [ window ] : scroll position listener
        window.addEventListener('scroll', ()=> {
            
            // position variable [ undefined ]
            let pos;

            // set a min section height for comparison
            let sectionHeight = '100vh';
            
            // if scroll position is less than section height
            if (window.scrollY < sectionHeight) {
                
                // get current position
                pos = window.scrollY;
                
                // assign nav position prop to top of header [ native placement ]
                nav.style.top = '0';
        
                // test 
                // console.log('[ window IF ] :' + pos + 'px');
            }
            else {

                // get current position
                pos = window.scrollY;

                // header [ menu ] button position props
                menu.style.top = '10px';
                menu.style.right = '10px';

                // nav component props
                // nav.style.top = pos + 'px';
                nav.style.zIndex = '1';
            
            }
        
        }); // end [ window ] : scroll position listener

        // const links = document.querySelectorAll('.link');
        links.forEach(element => {

            element.addEventListener('click', (e)=> {
                // prevent default link behavior
                // e.preventDefault();

                if (nav.style.width != '0') {
                    nav.style.width = '0';
                }
                if (exit.style.display != 'none') {
                    exit.style.display = 'none';
                }
            });
            
        });

            
        // event [ menu btn ] mobile
        menu.addEventListener('click', ()=> {

            exit.style.display = 'flex';
            
            // validate nav display props
            if (nav.style.width != '100%') {
                
                // change nav width to active [ 100% ] 
                nav.style.width = '100%';

                // overlap menu btn with exit btn
                exit.style.zIndex = 300;
            }
        
        });

        // mobile navigation exit event
        exit.addEventListener('click', ()=> {

            if (nav.style.display != 'none') {
                
                // nav.style.display = 'none';

                nav.style.width = '0%';
                nav.setAttribute('class', 'nav');

                // overlap menu btn with exit btn
                exit.style.zIndex = 0;
            
            }
            
            // test
            console.log('exit btn : none');
            
            // remove exit button from display
            exit.style.display = 'none';
        });

        // media query test element
        document.body.style.backgroundColor = "yellow";
    }
    else {

        // apply default desktop display props
        nav.style.display = 'flex';
        nav.style.width = '10vw';
        exit.style.display = 'none';

        let icon = document.querySelectorAll('.icon');

        icon.forEach(element => {
            if (element.style.display != 'none') {
                element.style.display = 'inline';
            }    
        });

        // apply default desktop class name
        nav.setAttribute('class', 'nav');
        
        // for each loop [ links ]
        links.forEach(element => {

            if (element.id === 'link-homepage') {
                element.style.background = '#FFF';
                element.style.color = '#000';
            }
            
            element.addEventListener('click', ()=> {

                // init reset elements
                resetElements();

                // validate nav display type
                if (nav.style.width != '10vw') {
                    // nav.style.display = 'flex';
                    nav.style.width = '10vw';
                }

                element.style.background = '#FFF';
                element.style.color = '#000';
            
            });
        
        });

        // media query test element
        document.body.style.backgroundColor = "pink";
    }

};
  
//   mobile media query
var mob = window.matchMedia("(max-width: 1000px)");
  
stateChange(mob); // Call listener function at run time

mob.addEventListener('change', stateChange); // Attach listener function on state changes



// function [ reset elements ]
resetElements = () => {

    // reset desktop navigation link properties
    links.forEach(element => {
        element.style.background = 'none'
        element.style.color = '#FFF';
    });
}