/* 
    function [ minimize ]
    
    provide a new width length to the nav element [ 100px ]
    removes all elements with the class name [ minimize ] - nav_list link text
    alters the grid column of each item in the nav_btns list
    assigns an output marker to the minimize button to help users know which way the content opens and closes

*/
minimize = () => {

    // minimize class all selector
    let mini = document.querySelectorAll('.minimize');

    // loop iterator
    let i;

    // loop mini
    for (i = 0; i < mini.length; i++) {

        if (mini[i].style.display != 'none') {
            mini[i].style.display = 'none';
        }
        else {
            mini[i].style.display = 'flex';
        }
        
        console.log(mini[i]);
    }

    // ul nav_btns li all selector  
    let nav_btns = document.querySelectorAll('.nav_btns li');

    // loop [ nav_btns ] li
    for (i = 0; i < nav_btns.length; i++) {

        if (nav_btns[i].style.gridColumn != 'span 2') {

            nav_btns[i].style.gridColumn = 'span 2';
        }
        else {
            nav_btns[i].style.gridColumn = 'span 1';
        }

    }

    // nav component selector
    let nav = document.querySelector('#nav');

    // home page component selector
    let home = document.querySelector('#homepage');

    // validate button minimize inner html [ change to icon on live build ]
    if (button_minimize.innerHTML != '-->') {
        button_minimize.innerHTML = '-->';
    }
    // validate nav length
    if (nav.style.width != '100px') {
        
        // set nav width to 100px
        nav.style.width = '100px';

        // set home width to 100% minus 100px [ calc ]
        home.style.width = 'calc(100% - 100px)';
        home.style.left = '100px';
    }
    // assign altered elements back to default
    else {
        button_minimize.innerHTML = '<--';
        // set nav width to 300px [ default ]
        nav.style.width = '300px';

        // set home width to 100% minus 300px [ calc ]
        home.style.width = 'calc(100% - 300px)';
        home.style.left = '300px';
    }
}

// button minimize id selector
let button_minimize = document.querySelector('#minimize');

// attach [ minimize ] function to [ button_minimize ]
button_minimize.addEventListener('click', minimize);