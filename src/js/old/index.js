// article component selectors
let home = document.querySelector('#homepage');
let proj = document.querySelector('#projects');
let info = document.querySelector('#information');
let tech = document.querySelector('#technical');

// navigation component selectors
let navigation = document.querySelector('#nav');
let navigation_open = document.querySelector('#navigation_open');
let navigation_exit = document.querySelector('#navigation_exit');

// navigation button selectors
let button_h = document.querySelector('#button_h');
let button_p = document.querySelector('#button_p');
let button_i = document.querySelector('#button_i');
let button_t = document.querySelector('#button_t');
let button_d = document.querySelector('#button_d');

// header component selectors
let header = document.querySelector('#header');

// mode toggle button selector
let mode_toggle = document.querySelector('#mode_toggle');

// function [ default mobile ] type [ manipulation ] state [ active ]
default_mobile = ()=> {
    
    // set navigation display to none
    navigation.style.display = 'none';

    // set header display to flex
    header.style.display = 'flex';

    // articles selector
    let articles = document.getElementsByClassName('articles');

    // articles loop
    for (let i = 0; i < articles.length; i++) {
        
        // remove all articles on load
        articles[i].style.display = 'none';

    }
};

// function [ default desktop ] type [ manipulation ] state [ active ]
default_desktop = ()=> {

    // set navigation display to grid
    navigation.style.display = 'grid';

    // set header display to none
    header.style.display = 'none';

    // articles selector
    let articles = document.getElementsByClassName('articles');

    // articles loop
    for (let i = 0; i < articles.length; i++) {
        
        // remove all articles on load
        articles[i].style.display = 'none';

    }

};

// function [ content loaded ] type [ properties ] state [ active ]
content_loaded = ()=> {
    
    // display homepage as a grid
    homepage.style.display = 'grid';
    
};

// document.onload(homepage.style.display = 'grid');



// function [ navigation mobile ] type [ events ] state [ active on mobile ]
navigation_mobile = ()=> {

    // init content loaded function
    content_loaded();

    // event [ navigation open ]
    navigation_open.addEventListener('click', ()=> {

        if (navigation.style.display != 'grid') {
            navigation.style.display = 'grid';
        }
        else {
            navigation.style.display = 'none';
        }

    });

    // event [ navigation exit ]
    navigation_exit.addEventListener('click', ()=> {

        if (navigation.style.display != 'none') {
            navigation.style.display = 'none';
        }
        else {
            navigation.style.display = 'grid';
        }

    });

    // event [ button home ]
    button_h.addEventListener('click', ()=> {

        // init content default
        default_mobile();

        // init content loaded
        content_loaded();

    });

    // event [ button projects ]
    button_p.addEventListener('click', ()=> {

        // init content default
        default_mobile();

        // validate views
        if (proj.style.display != 'grid') {
            proj.style.display = 'grid';
        }
        else {
            proj.style.display = 'none';
        }

    });

    // event [ button information ]
    button_i.addEventListener('click', ()=> {

        // init default mobile function
        default_mobile();

        // validate views
        if (info.style.display != 'grid') {
            info.style.display = 'grid';
        }
        else {
            info.style.display = 'none';
        }

    });

    // event [ button technical ]
    button_t.addEventListener('click', ()=> {

        // init default mobile function
        default_mobile();

        // validate views 
        if (tech.style.display != 'grid') { 
            tech.style.display = 'grid';
        }
        else {
            tech.style.display = 'none';
        }

    });

    // event [ button development ]
    button_d.addEventListener('click', ()=> {

        // init default mobile function
        default_mobile();
        
        // validate views
        if (proj.style.display != 'grid') {
            proj.style.display = 'grid';
        }
        else {
            proj.style.display = 'none';
        }

    });

};

// function [ navigation desktop ] type [ events ] state [ active on desktop ]
navigation_desktop = ()=> {

    // set navigation display to grid
    navigation.style.display = 'grid';

    // set header display to none
    header.style.display = 'none';

    // init content loaded function
    content_loaded();

    // event [ button home ]
    button_h.addEventListener('click', ()=> {

        // init default desktop function
        default_desktop();

        // init content loaded function
        content_loaded();

    });

    // event [ button projects ]
    button_p.addEventListener('click', ()=> {

        // init default desktop function
        default_desktop();

        // validate views
        if (proj.style.display != 'grid') {
            proj.style.display = 'grid';
        }
        else {
            proj.style.display = 'none';
        }

    });

    // event [ button information ]
    button_i.addEventListener('click', ()=> {

        // init default desktop function
        default_desktop();

        // validate views
        if (info.style.display != 'grid') {
            info.style.display = 'grid';
        }
        else {
            info.style.display = 'none';
        }

    });

    // event [ button technical ]
    button_t.addEventListener('click', ()=> {

        // init default mobile function
        default_desktop();

        // validate views 
        if (tech.style.display != 'grid') { 
            tech.style.display = 'grid';
        }
        else {
            tech.style.display = 'none';
        }

    });

    // event [ button development ]
    button_d.addEventListener('click', ()=> {

        // init default desktop function
        default_desktop();
        
        // validate views
        if (proj.style.display != 'grid') {
            proj.style.display = 'grid';
        }
        else {
            proj.style.display = 'none';
        }

    });

};

// function [ mql ] type [ listener ] state [ listening ]
mql = (mq)=> {

    if (mq.matches) {
        
        // init content default
        default_desktop();

        // init navigation desktop function
        navigation_desktop();

        // test
        console.log('[ mql ] : desktop media query');

    }
    else {

        // init content default
        default_mobile();
        
        // init navigation mobile function
        navigation_mobile();

        // test
        console.log('[ mql ] : mobile media query');

    }

};

// media query match media
let mq = window.matchMedia('(min-width:700px)');

// init mql function
mql(mq);

// listen for state change
mq.addListener(mql);




// event [ mode toggle ] : toggle between standard color scheme and darkmode color scheme
mode_toggle.addEventListener('click', ()=> {

    // page component selector
    let page = document.querySelector('#page');

    if (page.className != 'darkmode') {
        page.setAttribute('class', 'darkmode');
    }
    else {
        page.setAttribute('class', 'default');
    }
    
    
});
    
