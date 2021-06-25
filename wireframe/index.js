/*

    wireframe for vue js digital portfolio prototype

    components 

        [
            nav {

                img : img-sml

                h4: title
                h6 : tagline

                ul : list
                li : items
            },
            
            header {

                h6 : tagline
                h2 : title

                button : btn

                img : img-med

            },

            main {

                h2 : title

                ul : list
                li : items

                a : links
            },

            section {

                h2 : title

                p : text

                button : btn

                img : img-med
            },

            article {

                h4 : list title

                ul : list [ x 2 ]
                li : items

                i : icons
                div : lines

            },

            footer {

                h2 : title

                img: img-med

                form : form
                label : label
                input : input
                textarea : textarea

            },
        ]

        

*/
// wrapper [ page ] selector
let page = document.querySelector('.page');
// nav [ nav ] selector
let nav = document.querySelector('#nav');
// aside [ navigation ] selector
let navigation = document.querySelector('.navigation');

// media query listener [ 900px ]
let mql = window.matchMedia('(min-width: 900px');
// change event [ mql ] : init if media query has changed
mql.addEventListener('change', ()=> {
    // init [ mediaQueryListener ] function
    mediaQueryListener();
});

/*
    mediaQueryListner function

    validates which media query is in use [ matches ]
    applies either mobile or desktop style properties
    inits mobile or desktop spcific functions
*/

function mediaQueryListener() {


    if (mql.matches) {
        // test [ listener ]
        console.log('MQ : 900px');
        navigation.style.width = '20vw';
        /*
            [ navigation links ] : close aside element on click

            selects all navigation element li [ items ]
            applies a forEach loop to the [ items ]
            attaches a click event to each [ items ]
            validate width of navigation element
            apply appropriate width attributes

        */
        // navigation ul li [ items ] all selector
        let nav_items = document.querySelectorAll('.navigation .items');
        // forEach [ nav items ]
        nav_items.forEach(element => {
            
            // click event [ nav items ] : mobile only
            element.addEventListener('click', ()=> {
                // validate navigation width
                if (navigation.style.width != '20vw') {
                    // apply navigation style to mobile default width [ 0% ]
                    navigation.style.width = '20vw';
                    
                }
            });
        });

        return
    }
    // if mql does not match media query [ 900px ]
    else {
        // apply mobile width [ 0% ] to navigation element
        navigation.style.width = '0%';
        
        /* 
            menuProperties function

            selects the event button [ menu ]
            selects the event button [ menu ] icon
            attaches a click event to [ menu ] button
            validates the width of the navigation element
            applies the appropriate width
            changes [ menu ] button icon on state change
            applies the style property [ overflow : scroll ] to the page element
        */
        // button [ menu ] selector
        let menu = document.querySelector('#menu');
        // button [ menu ] icon selector
        let menu_icon = document.querySelector('#menu').firstElementChild;

        // click event [ menu ] button
        menu.addEventListener('click', ()=> {

            // valiadte width property of [ navigation ] element
            if (navigation.style.width != '100%') {
                // apply a width style of 100% to the navigation element
                navigation.style.width = '100%';
                // assign menu icon class to close [ times ]
                menu_icon.classList = 'fas fa-times';
                // apply the overflow [ scroll ] property to the page element
                page.style.overflow = 'scroll';

                return
            }
            else {
                // return the navigation width to default [ 0% ]
                navigation.style.width = '0%';
                // return menu icon back to default [ bars ]
                menu_icon.classList = 'fas fa-bars';
            }
            // test [ listener ]
            console.log('MQL : active');
        });
        
        /*
            [ navigation links ] : close aside element on click

            selects all navigation element li [ items ]
            applies a forEach loop to the [ items ]
            attaches a click event to each [ items ]
            validate width of navigation element
            apply appropriate width attributes

        */
        // navigation ul li [ items ] all selector
        let nav_items = document.querySelectorAll('.navigation .items');
        // forEach [ nav items ]
        nav_items.forEach(element => {
            
            // click event [ nav items ] : mobile only
            element.addEventListener('click', ()=> {
                // validate navigation width
                if (navigation.style.width != '0%') {
                    // apply navigation style to mobile default width [ 0% ]
                    navigation.style.width = '0%';
                    // return menu icon back to default [ bars ]
                    menu_icon.classList = 'fas fa-bars';
                }
            });
        });
        // test [ listener ]
        console.log('MQ : false');
    }    
}
// init [ mediaQueryListener ] function on load
window.onload = mediaQueryListener();

/*
    defaultProperties function

    selects all main ul li [ items ]
    attaches an on click event to each element [ items ]
    validates the element [ ID ]
    assigns the project [ href ] value

    selects the hidden [ container ] element
    removes the hidden [ container ] element
    selects the event button [ more ]
    

*/
function defaultPropreties() {

    // navgation width value [ 0% ]
    // navigation.style.width = '0%';

    // hidden [ container ] element selector
    let container = document.querySelector('.container');
    // remove [ container from view ]
    container.style.display = 'none';

    // select button [ more ]
    let more = document.querySelector('#more');

    // click event [ more ] button
    more.addEventListener('click', ()=> {
        // validate if the container is display [ grid ]
        if (container.style.display != 'grid') {
            // apply display style [ grid ] to container element
            container.style.display = 'grid';
            // change [ more ] button to match state
            more.innerHTML = 'less';
        }
        else {
            // revert [ more ] button back to default
            more.innerHTML = 'more';
            // revert [ container ] element back to default
            container.style.display = 'none';
        }
    });

}
// init [ hidden properties ] function
defaultPropreties();

// ul li [ items ] all selector
let items = document.querySelectorAll('.main .items');
console.log(items);

// forEach [ items ]
items.forEach(element => {

    // click event [ items ]
    element.addEventListener('click', ()=> {

        // display project background as default [ none ]
        element.style.background = 'none';

        // validate project file
        if ( element.id = 'project-one') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if ( element.id = 'project-two') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if ( element.id = 'project-three') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if ( element.id = 'project-four') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if ( element.id = 'project-five') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if ( element.id = 'project-six') {
            // select the link of the currect element
            let link = element.firstElementChild;
            // apply the external page navigation to href [ projects.html ]
            link.href = 'projects.html';
        }
        if (element.style.background != 'black') {
            // apply element background color to [ black ]
            element.style.background = 'black';
        }
        else {
            // remove any background color from element
            element.style.background = 'none';
        }
    
    });
});

/*
    modeProperties function

    selects the event button [ mode ] 
    selects the page element
    validates button [ mode ] class name attributes
    applies darkmode or default to page element
    changes button [ mode ] icon between states
*/
// function modeProperties() {

//     // button [ mode ] selector
//     let mode = document.querySelector('#mode');
//     // button [ mode ] icon selector
//     let mode_icon = document.querySelector('#mode').firstElementChild;
    
//     // click event [ mode ] button
//     mode.addEventListener('click', ()=> {
//         // test
//         console.log(page);

//         // validate [ darkmode ] page class name
//         if (mode.classList != 'btn mode-dark') {
//             // assign class name to mode button [ mode-dark ]
//             mode.classList = 'btn mode-dark';
//             // assign mode icon class name to [ toggle on ] icon value
//             mode_icon.classList = 'fas fa-toggle-on';
//             // assign page wrapper class name to [ darkmode ]
//             page.classList = 'page darkmode';
//         }
//         // revert darkmode properties back to default [ mode-light ]
//         else {
//             // return mode button class name to default [ mode-light ]
//             mode.classList = 'btn mode-light';
//             // return mode icon class name to [ toggle off] default
//             mode_icon.classList = 'fas fa-toggle-off';
//             // return page wrapper class name to [ page ]
//             page.classList = 'page';
//         }
//     });
// }

