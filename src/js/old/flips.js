// current slide selector
let card = document.querySelectorAll('.card');

// function [ flip ] : click for mobile devices
let flip = () => {

    // card face element selectors
    let front = document.querySelectorAll('.front');
    let back = document.querySelectorAll('.back');
    let box = document.querySelectorAll('.box');

    // loop [ front ] 
    for (i = 0; i < front.length; i++) {
        
        if (front[i].style.transform != 'perspective(500px) rotateY(180deg)') {
            // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
            front[i].style.transform = 'perspective(500px) rotateY(180deg)';

            // test
            console.log('front : rotating to back');
        }
        else {

            // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
            front[i].style.transform = 'perspective(500px) rotateY(0deg)';
        }
    }
    // loop [ back ]
    for (i = 0; i < back.length; i++) {
        
        if (back[i].style.transform != 'perspective(500px) rotateY(360deg)') {
            // transform [ perspective ] & [ rotate ] back card element to active view [ 360 deg ]
            back[i].style.transform = 'perspective(500px) rotateY(360deg)';
        }
        else {

            // transform [ perspective ] & [ rotate ] back card element back to default position [ 180 deg ]
            back[i].style.transform = 'perspective(500px) rotateY(180deg)';
        }
    }
    // loop [ box ]
    for (i = 0; i < box.length; i++) {
        
        if (box[i].style.transform != 'perspective(500px) rotateY(180deg)') {
            // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
            box[i].style.transform = 'perspective(500px) rotateY(180deg) translate(0, 0, 85px)';
        }
        else {

            // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
            box[i].style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';

        }
    }

    // test 
    console.log('flip');

};


// event [ card ] : hover [ mouseover ] state for laptop & desktop devices
// card.addEventListener('mouseover', ()=> {
let flip_desktop = () => {

    let front = document.querySelectorAll('.front');
    let back = document.querySelectorAll('.back');
    let box = document.querySelectorAll('.box');

    // loop [ front ] 
    for (i = 0; i < front.length; i++) {
        
        // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
        front[i].style.transform = 'perspective(500px) rotateY(180deg)';
    
    }
    // loop [ back ]
    for (i = 0; i < back.length; i++) {
        
        // transform [ perspective ] & [ rotate ] back card element to active view [ 360 deg ]
        back[i].style.transform = 'perspective(500px) rotateY(360deg)';

    }
    // loop [ box ]
    for (i = 0; i < box.length; i++) {
        
        // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
        box[i].style.transform = 'perspective(500px) rotateY(180deg) translate(0, 0, 85px)';
    
    }

};

// event [ card ] : hover [ mouseleave ] state for laptop & desktop devices
// card.addEventListener('mouseleave', ()=> {
let flip_default = () => {
    let i;
    let front = document.querySelectorAll('.front');
    let back = document.querySelectorAll('.back');
    let box = document.querySelectorAll('.box');


    for (i = 0; i < front.length; i++) {
        front[i].style.transform = 'perspective(500px) rotateY(0deg)';
    }
    for (i = 0; i < back.length; i++) {
        back[i].style.transform = 'perspective(500px) rotateY(180deg)';
    }
    for (i = 0; i < box.length; i++) {
        box[i].style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';
    }
    
};

// init the flip function onclick [ mobile ]
card.forEach(item => {

    // assign item [ all cards ] to init flip function onclick
    item.addEventListener('click', flip);

    // card.addEventListener('click', flip);
    
    // asssign item curssor style to pointer
    item.style.cursor = 'pointer';

    // test item output
    // console.log(item);
    
    });

// init the flip function mouse hover [ desktop ]
card.forEach(item => {

    // assign item [ all cards ] to init flip desktop function mouse over
    item.addEventListener('mouseover', flip_desktop);

    // assign item [ all cards ] to init flip default function mouse leave
    item.addEventListener('mouseleave', flip_default);

    // assign item cursor style to pointer
    item.style.cursor = 'pointer';

    // test item output
    // console.log('mouse events : added');

});

// deviceSpecificFlip = () => {

//     if () {

//         // add flip function to all [ card ] elements
//         card.forEach(item => {

//             // assign item [ all cards ] to init flip function onclick
//             item.addEventListener('click', flip);
            
//             // asssign item curssor style to pointer
//             item.style.cursor = 'pointer';

//             // test item output
//             console.log(item);
        
//         });
//     }
//     else { // desktop
        
//         // add flip function to all [ card ] elements
//         card.forEach(item => {

//             // assign item [ all cards ] to init flip desktop function mouse over
//             item.addEventListener('mouseover', flip_desktop);

//             // assign item [ all cards ] to init flip default function mouse leave
//             item.addEventListener('mouseleave', flip_default);

//             // assign item cursor style to pointer
//             item.style.cursor = 'pointer';

//             // test item output
//             console.log(item);

//         });
//     }
// }
// deviceSpecificFlip();

// // desktop [ front ] props
    // let front = document.querySelectorAll('.front');

    // // loop [ front ] 
    // for (i = 0; i < front.length; i++) {
        
    //     if (front[i].style.transform != 'perspective(500px) rotateY(180deg)') {
    //         // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
    //         front[i].style.transform = 'perspective(500px) rotateY(180deg)';

    //         // test
    //         console.log('front : rotating to back');
    //     }
    //     else {

    //         // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
    //         front[i].style.transform = 'perspective(500px) rotateY(0deg)';
    //     }

    // front.style.transform = 'perspective(500px) rotateY(180deg)';

    // desktop [ back ] props
    // let back = document.querySelector('.back');
    // back.style.transform = 'perspective(500px) rotateY(360deg)';
    
    // desktop [ box ] props
    // let box = document.querySelector('.box');
    // box.style.transform = 'perspective(500px) roatateY(180deg) translate(0, 0, 85px)';