


// function [ mql ] : media query listener
window.onload = mql = (e)=> {
    
    let mq = window.matchMedia('(min-width: 700px)');

    e = mq;

    
    const nav = document.querySelector('#nav');
    // nav.style.display = 'grid';

    if (e.matches) {
        // init [ navigationDesktopPages ] function
        navigationDesktopPages();
        // nav.style.display = 'flex';
        
        // homepageView();    
        // contentView();

        // navMobileDefault();

        // navigationState();
        // navMenuFull();

        // let links = document.querySelectorAll('.links');
        // links.forEach(item => {
        //     console.log('mql' + item);
        //     // item.removeEventListener('click');
        // });

        
        // test
        console.log('[ mql ] : desktop media query');
    }
    else {

        // init device specific functions [ mobile ]
        // nav.style.display = 'none';

        // mobilepageView();

        // init [ navigationMobilePages ] function from [ nav.js ]
        navigationMobilePages();
        
        // nav
        // test
        console.log('[ mql ] : mobile media query');

    }

    mq.addEventListener('change', mql);
    
    // return;
};

// listen for state change
// window.onload = mq.addEventListener('change', mql);


// // new listener
// const gate = 700;

// listener = ( matches ) => {
//     document.get
// }

