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

        // apply default mobile display props
        // nav.style.display = 'none';

        // change nav width to active [ 100% ] 
        nav.style.width = '0';
        exit.style.display = 'none';
        
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
                nav.style.top = pos + 'px';
                nav.style.zIndex = '1';

                // test
                // console.log('current position : ' + pos);
                
                // assign header position to fixed [ from relative ]
                // menu.style.position = 'fixed';
                // mode.style.position = 'fixed';

                
                // menu.style.background = 'var(--mode-background)';
                // menu.style.zIndex = '4';

                // header [ mode ] button position props
                // mode.style.top = '0';
                // mode.style.right = '0';
                // mode.style.background = 'var(--mode-background)';
                
                // test 
                // console.log('[ window Else ] :' + pos + 'px');
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
                
                // apply mobile nav display props
                // nav.style.display = 'flex';

                // change nav width to active [ 100% ] 
                nav.style.width = '100%';

                // set mobile nav to active
                // nav.setAttribute('class', 'active');
                
                // overlap menu btn with exit btn
                exit.style.zIndex = 300;
            }
            
            // menu.style.background = 'rgba(20, 20, 20, 0.822)';
            
            
            // if (nav.style.width != '100%') {
                
            //     // change nav width to active [ 100% ] 
            //     nav.style.width = '100%';
            // }
            // else {
            
            //     // change icon class list to [ bars ] menu
            //     icon.classList = 'fas fa-bars';

            //     // change nav width back to default [ 0% ]
            //     nav.style.width = '0%';
            
            // }
            
        });

        // mobile navigation exit event
        exit.addEventListener('click', ()=> {

            if (nav.style.display != 'none') {
                // nav.style.display = 'none';

                nav.style.width = '0%';
                nav.setAttribute('class', 'nav');

                // overlap menu btn with exit btn
                exit.style.zIndex = 0;

                // change icon class list to [ bars ] menu
                // icon.classList = 'fas fa-bars';
                
            }

            

            // test
            console.log('exit btn : none');
            
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

        // apply default desktop class name
        nav.setAttribute('class', 'nav');
        
        // for each loop [ links ]
        links.forEach(element => {
            
            element.addEventListener('click', ()=> {
                // validate nav display type
                if (nav.style.width != '10vw') {
                    // nav.style.display = 'flex';
                    nav.style.width = '10vw';
                }

            });
        
        });

        // media query test element
        document.body.style.backgroundColor = "pink";
    }

};
  
//   mobile media query
var mob = window.matchMedia("(max-width: 700px)");
  
stateChange(mob); // Call listener function at run time

mob.addEventListener('change', stateChange); // Attach listener function on state changes