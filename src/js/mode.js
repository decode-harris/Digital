/*
    event [ darkmode ] 

    initiated via onclick of button : mode_toggle
    sets page component class to darkmode
    changes the button icon to match the color scheme
    assigns new css variable values via set property

*/

// button mode selector
let mode = document.querySelector('#mode');

// event [ mode ] : toggle between lightmode & darkmode color schemes
mode.addEventListener('click', ()=> {

    // page component selector
    let page = document.querySelector('#page');

    // css root variables selector
    let root = document.documentElement;

    // darkmode button icon selector
    let icon = document.querySelector('#mode_icon');

    // validate if page class is set to darkmode
    if (page.className != 'darkmode') {

        // set page component class to darkmode
        page.setAttribute('class', 'darkmode');

        // set mode icon class to toggle on [ switch on ]
        icon.className = 'fas fa-toggle-on';

        // assign css var [ --mode ] content color to white [ darkmode ]
        root.style.setProperty('--mode', '#FFF');

        // assign css var [ --mode-background ] color to black [ darkmode ]
        root.style.setProperty('--mode-background', '#000');

        // assign css var [ mode-overlay ] color to black [ darkmode ]
        root.style.setProperty('--mode-overlay', 'rgba(0,0,0,0.4)');
        
    }
    // if conditions are not met, provide page with default styles
    else {

        // set page component class to default
        page.setAttribute('class', 'default');

        // set mode icon class to toggle off [ switch off ]
        icon.className = 'fas fa-toggle-off';

        // assign css var [ --mode ] content color to black [ default ]
        root.style.setProperty('--mode', '#000');

        // assign css var [ --mode-background ] color to white [ default ]
        root.style.setProperty('--mode-background', '#FFF');

        // assign css var [ mode-overlay ] color to white [ default ]
        root.style.setProperty('--mode-overlay', 'rgba(241,237,237,0.4)');
        
    }
});