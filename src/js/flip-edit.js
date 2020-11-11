let flip = document.querySelector('#slideshow .slides');
let i;

// function []
cardFlipMobile = () => {

    let front = document.querySelector('.front');
    let back = document.querySelector('.back');
    let box = document.querySelector('.box');

    

    if (front.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front flip element to inactive view [ 180 deg ]
        front.style.transform = 'perspective(500px) rotateY(180deg)';
    }
    if (back.style.transform != 'perspective(500px) rotateY(360deg)') {
        // transform [ perspective ] & [ rotate ] back flip element to active view [ 360 deg ]
        back.style.transform = 'perspective(500px) rotateY(360deg)';
    }
    if (box.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front flip element to inactive view [ 180 deg ]
        box.style.transform = 'perspective(500px) rotateY(180deg)';
    }
    else {
        // transform [ perspective ] & [ rotate ] front flip element back to default position [ 0 deg ]
        front.style.transform = 'perspective(500px) rotateY(0deg)';
        // transform [ perspective ] & [ rotate ] back flip element back to default position [ 180 deg ]
        back.style.transform = 'perspective(500px) rotateY(180deg)';
        // transform [ perspective ] & [ rotate ] front flip element back to default position [ 0 deg ]
        box.style.transform = 'perspective(500px) rotateY(0deg)';
    }


};


// event [ flip ] : hover [ mouseover ] state for laptop & desktop devices
cardFlipDesktop = ()=> {
    
    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(180deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(360deg)';
    back.style.backgroundImage = 'url(img.PNG)';

    let box = document.querySelector('.box');
    // transform [ perspective ] & [ rotate ] front flip element to inactive view [ 180 deg ]
    box.style.transform = 'perspective(500px) rotateY(180deg)';

};

// event [ cardflipDefault ] : hover [ mouseleave ] state for laptop & desktop devices
cardFlipDefault = () => {

    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(0deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(180deg)';

    let box = document.querySelector('.box');
    box.style.transform = 'perspective(500px) rotateY(0deg)';


};





 // init card flip mobile function
 flip.addEventListener('click', cardFlipMobile);

 // init card flip desktop function
 flip.addEventListener('mouseover',cardFlipDesktop);

 // init card flip default function
 flip.addEventListener('mouseleave', cardFlipDefault);

    

 
 