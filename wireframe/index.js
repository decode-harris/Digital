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
let container = document.querySelector('.container');
container.style.display = 'none';

// select button [ more ]
let more = document.querySelector('#more');

// click event [ more ] button
more.addEventListener('click', ()=> {
    if (container.style.display != 'grid') {
        container.style.display = 'grid';
        more.innerHTML = 'less';
    }
    else {
        more.innerHTML = 'more';
        container.style.display = 'none';
    }
});



// main ul [ items ] : project showcase + links
let items = document.querySelectorAll('.main .items');
console.log(items);

// forEach [ items ] : 
items.forEach(element => {
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
        if (element.style.background != 'black') {
            element.style.background = 'black';
            
        }
        else {
            element.style.background = 'none';
        }
        
    })
});


let nav_items = document.querySelectorAll('.navigation .items');

nav_items.forEach(element => {
    element.addEventListener('click', ()=> {

        if (navigation.style.width != '0') {
            navigation.style.width = '0';
            // return menu icon back to default [ bars ]
            menu_icon.classList = 'fas fa-bars';
        }
    });
});



// select the navigation [ menu ] button
let menu = document.querySelector('#menu');

// select the hidden [ navigation ] element
let navigation = document.querySelector('.navigation');
navigation.style.width = '0';

let menu_icon = document.querySelector('#menu').firstElementChild;

console.log(menu_icon + 'as menu icon');

// click event [ menu ] button
menu.addEventListener('click', ()=> {

    if ( navigation.style.width != '100%') {
        // apply a width style of 100% to the navigation element
        navigation.style.width = '100%';
        // assign menu icon class to close [ times ]
        menu_icon.classList = 'fas fa-times';

        page.style.overflow = 'scroll';
    }
    else {
        // return the navigation width to default [ 0% ]
        navigation.style.width = '0';
        // return menu icon back to default [ bars ]
        menu_icon.classList = 'fas fa-bars';
    }

});


let mode = document.querySelector('#mode');
let mode_icon = document.querySelector('#mode').firstElementChild;
let page = document.querySelector('.page');

mode.addEventListener('click', ()=> {

    

    console.log(page);

    if (mode.classList != 'btn mode-dark') {
        // assign class name to mode button [ mode-dark ]
        mode.classList = 'btn mode-dark';
        // assign mode icon class name to [ toggle on ] icon value
        mode_icon.classList = 'fas fa-toggle-on';
        // assign page wrapper class name to [ darkmode ]
        page.classList = 'page darkmode';
    }
    else {
        // return mode button class name to default [ mode-light ]
        mode.classList = 'btn mode-light';
        // return mode icon class name to [ toggle off] default
        mode_icon.classList = 'fas fa-toggle-off';
        // return page wrapper class name to [ page ]
        page.classList = 'page';



    }

})