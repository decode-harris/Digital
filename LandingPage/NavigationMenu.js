const menu = document.querySelector('#menu');

// add a click event to the menu button
menu.addEventListener('click', ()=> {

    // validate if the navigation component is initiated ( active )
    if (nav.style.left != '0%') {
        // provide style properties if not initiated ( active )
        nav.style.left = '0%';
        nav.style.height = '100vh';
        nav.style.overflow = 'hidden';
    }
    else {
        // revert the navigation component to default position
        nav.style.left = '-200vw';
    }

});

// select the navigation component
const nav = document.querySelector('.nav');
console.log(nav);

// select all link elements inside the navigation component
let links = document.querySelectorAll('.links');
// loop through all link elements
for ( let i = 0; i < links.length; i++ ) {
    // test the loop data
    console.log(links[i]);

    // apply a click event to all link elements
    links[i].addEventListener('click', ()=> {

        // revert the navigation component to default position after click
        nav.style.left = '-200vw';

    });
};