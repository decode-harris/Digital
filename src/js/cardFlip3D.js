
// export let flip = flip();
// current slide selector
let card = document.querySelector('.card');
let i;

// event [ card ] : click card for mobile devices
// card.addEventListener('click', ()=> {
let flip = () => {

   

    // card face element selectors
    let front = document.querySelector('.front');
    let back = document.querySelector('.back');
    let box = document.querySelector('.box');
    // let img = document.querySelector('.small');
    
    // assign cursour mode to pointer
    card.style.cursor = 'pointer';

    if (front.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
        front.style.transform = 'perspective(500px) rotateY(180deg)';
    }
    if (box.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front card element to inactive view [ 180 deg ]
        box.style.transform = 'perspective(500px) rotateY(180deg) translate(0, 0, 85px)';
    }
    if (back.style.transform != 'perspective(500px) rotateY(360deg)') {
        // transform [ perspective ] & [ rotate ] back card element to active view [ 360 deg ]
        back.style.transform = 'perspective(500px) rotateY(360deg)';
    }
    else {
        // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
        front.style.transform = 'perspective(500px) rotateY(0deg)';
    
        // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
        box.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';

        // transform [ perspective ] & [ rotate ] front card element back to default position [ 0 deg ]
        // img.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';
    
        // transform [ perspective ] & [ rotate ] back card element back to default position [ 180 deg ]
        back.style.transform = 'perspective(500px) rotateY(180deg)';

        
    }
    
};
// });

// let hover3D = () => {}
// let default3D = () => {}
// event [ card ] : hover [ mouseover ] state for laptop & desktop devices
card.addEventListener('mouseover', ()=> {
    
    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(180deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(360deg)';
    
    let img = document.querySelector('.small');
    img.style.transform = 'perspective(500px) roatateY(180deg) translate(0, 0, 85px)';
    
    // let box = document.querySelector('.box');
    // box.style.transform = 'perspective(500px) roatateY(180deg) translate(0, 0, 85px)';

});

// event [ card ] : hover [ mouseleave ] state for laptop & desktop devices
card.addEventListener('mouseleave', ()=> {

    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(0deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(180deg)';

    let box = document.querySelector('.box');
    box.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';

    // let img = document.querySelector('.small');
    // img.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';

});

document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('click', flip);
    console.log(item);
});