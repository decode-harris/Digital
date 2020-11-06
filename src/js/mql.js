// import { scrollPositionProperties } from './helper.js'

// media query match media
let mq = window.matchMedia('(min-width: 700px)');

// function [ mql ] : media query listener
mql = (e)=> {

    if (e.matches) {
        // init device specific functions [ desktop ]

        // test
        console.log('[ mql ] : desktop media query');

    }
    else {
        
        // init device specific functions [ mobile ]
        
        // test
        console.log('[ mql ] : mobile media query');

    }

};

// listen for state change
mq.addEventListener('change', mql);

