/*
    function [ scrollPositionProperties ] 

    initiated on page load
    validates scrollY position against section hight variable
    

*/

// button mode selector
// let mode = document.querySelector('#mode');

// [ scrollPositionProperties ] function
scrollPositionProperties = () => {

    // header selector
    let header = document.querySelector('#header');

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

            // test
            // console.log('current position : ' + pos);
            
            // assign header position to fixed [ from relative ]
            // menu.style.position = 'fixed';
            // mode.style.position = 'fixed';

            // header [ menu ] button position props
            menu.style.top = '0';
            menu.style.right = '0';
            // menu.style.background = 'var(--mode-background)';
            // menu.style.zIndex = '4';

            // header [ mode ] button position props
            // mode.style.top = '0';
            // mode.style.right = '0';
            // mode.style.background = 'var(--mode-background)';
            
            
            // nav component props
            nav.style.top = pos + 'px';
                        
            // test 
            // console.log('[ window Else ] :' + pos + 'px');
        }
    
    });

}

// init [ scrollPositionProperties ] function
scrollPositionProperties();


/*
    event [ darkmode ] 

    initiated via onclick of button : mode_toggle
    sets page component class to darkmode
    changes the button icon to match the color scheme
    assigns new css variable values via set property

*/

// event [ mode ] : toggle between lightmode & darkmode color schemes
// mode.addEventListener('click', ()=> {

//     // page component selector
//     let page = document.querySelector('#page');

//     // css root variables selector
//     let root = document.documentElement;

//     // darkmode button icon selector
//     let icon = document.querySelector('#mode_icon');

//     // validate if page class is set to darkmode
//     if (page.className != 'darkmode') {

//         // set page component class to darkmode
//         page.setAttribute('class', 'darkmode');

//         // set mode icon class to toggle on [ switch on ]
//         icon.className = 'fas fa-toggle-on';

//         // assign css var [ --mode ] content color to white [ darkmode ]
//         root.style.setProperty('--mode', '#FFF');

//         // assign css var [ --mode-background ] color to black [ darkmode ]
//         root.style.setProperty('--mode-background', '#000');

//         // assign css var [ mode-overlay ] color to black [ darkmode ]
//         root.style.setProperty('--mode-overlay', 'rgba(0,0,0,0.4)');
        
//         // assign css var [ mode-transparen ] border to white
//         root.style.setProperty('--mode-transparent', 'rgba(255, 255, 255, 0.19)')
    
//     }
//     // if conditions are not met, provide page with default styles
//     else {

//         // set page component class to default
//         page.setAttribute('class', 'default');

//         // set mode icon class to toggle off [ switch off ]
//         icon.className = 'fas fa-toggle-off';

//         // assign css var [ --mode ] content color to black [ default ]
//         root.style.setProperty('--mode', '#000');

//         // assign css var [ --mode-background ] color to white [ default ]
//         root.style.setProperty('--mode-background', '#FFF');

//         // assign css var [ mode-overlay ] color to white [ default ]
//         root.style.setProperty('--mode-overlay', 'rgba(241,237,237,0.4)');

//         // assign css var [ mode-transparent ] border to default
//         root.style.setProperty('--mode-transparent', 'rgba(0,0,0,0.19)');

//     }
// });