const nav_mob = () => {

    // nav ul selector [ hidden on default : mobile]
    let nav_ul = document.querySelector('#nav_ul');

    if (nav_ul.style.display != 'flex') {
        // apply active state property
        nav_ul.style.display = 'flex';
    }
    else {
        // return element to default state
        nav_ul.style.display = 'none';
    }
    
    
}

// nav open button : init [ nav mob ] function
let nav_open = document.querySelector('#nav_open');
nav_open.addEventListener('click', nav_mob);


// const nav_des = () => {}