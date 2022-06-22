const icons = { 
    1 : 'fa-solid fa-bars', // menu icon
    2 : 'fa fa-times', // close icon
    3 : 'fa fa-angle-left', // back icon
    4 : 'fa-solid fa-brain'
};

// select the main component
const main = document.querySelector('#main');
// select the header component.
const header = document.querySelector('#header');
// select the navigation component.
const nav = document.querySelector('#nav');
const pro = document.querySelector('#projects');
// select the menu button for event attachment.
const menu = document.querySelector('#menu');
const work = document.querySelector('#work');
const view = document.querySelector('#open');

// select the all header buttons
let buttons = header.getElementsByClassName('btn');
console.log(buttons)
// search for the active class inside the header component.
let active = document.getElementsByClassName('btn-active');

// loop through all buttons elements.
for (let i = 0; i < buttons.length; i++) {
    // attach a click event to all buttons elements
    buttons[i].addEventListener('click', function() {
        
        // if the active class has been set.
        if (active.length > 0) {
            // replace the active class with an empty string.
            active[0].className = active[0].className.replace(' btn-active', '');
        }
        // set this clicked button class to 'btn-active'.
        this.className += ' btn-active';

        // test this selection method.
        let span = this.querySelector('.span');
        console.log(span);
    });
};

/*
    Header State Buttons

        1. Menu Button - Triggers Navigation Component.
        2. Work Button - Triggers Projects Component.

    Functional Methods.

        1.  Validates if opposite state component is active 
            & removes the component before performing the
            assignment action.

        2.  Validates if the clicked button is set to class
            name 'active'. If true, apply the active button
            content.

        3.  Validates if the state component is active. If
            component is not active, assign the active state
            properties to the component. If component is already
            active, revert component properties to default.
            
            Also resets the button content back to default.
    
*/
menu.addEventListener('click', ()=> {

    // validate if the projects component is active.
    if (pro.style.left === '0px') {
        // remove the projects component.
        projectsComponentDefault();
        // assign the project button content to default.
        projectsButtonsDefault();
    }
    // validate if menu button is set to active
    if (menu.className === 'btn btn-active') {
        // set the menu button contents to active ( exit ).
        menu.querySelector('span').innerHTML = 'exit';
        menu.querySelector('i').className = icons[2];
    }
    // validate if navigation component is set to active.
    if (nav.style.right != '0px') {
        // apply active properties to navigation component.
        // nav.style.right = '0';

        // init function that will apply active properties to the navigation component
        navigationComponentActive();
    }
    else {
        // revert the navigation component properties to default.
        nav.style.right = '-100vw';

        // replace the active class with an empty string.
        active[0].className = active[0].className.replace(' btn-active', '');

        // set the menu button contents back to default ( menu ).
        menu.querySelector('span').innerHTML = 'menu';
        menu.querySelector('i').className = icons[1];
    }

});
work.addEventListener('click', ()=> {

    // validate if the navigation component is active.
    if (nav.style.right === '0px') {
        // remove the navigation component
        navigationComponentDefault();
        // assign the navigation button content to default.
        navigationButtonsDefault();
    }

    // validate if work button is set to active
    if (work.className === 'btn btn-active') {
        // set the work button contents to active ( exit ).
        work.querySelector('span').innerHTML = 'back';
        work.querySelector('i').className = icons[3];

        homepageLinkHandler();
    }

    // validate if projects component is set to active.
    if (pro.style.left != '0px') {
        // apply active properties to projects component.
        pro.style.left = '0';
    }
    else {
        // revert the project component properties to default.
        pro.style.left = '-100vw';

        // replace the active class with an empty string.
        active[0].className = active[0].className.replace(' btn-active', '');

        // reset work button contents back to default ( work ).
        work.querySelector('span').innerHTML = 'work';
        work.querySelector('i').className = icons[4];

        homepageLinkHandler();
    }
});
view.addEventListener('click', ()=> {

    if (work.className != 'btn btn-active') {
        work.className += ' btn-active';
    }

    // set the work button contents to active ( exit ).
    work.querySelector('span').innerHTML = 'back';
    work.querySelector('i').className = icons[3];
    pro.style.left = '0';

    homepageLinkHandler();

})


// select all links inside the navigation component
let links = nav.querySelectorAll('.links');

// loop through each navigation component link,
links.forEach(element => {
    
    // select the span element inside the menu button,
    let span = menu.querySelector('span');

    // and attach a click event to each element
    element.addEventListener('click', ()=> {
        // validate if the menu button is active
        if (span.innerHTML != 'menu') {

            // init function to assign default properties to the navigation component ( default ).
            navigationComponentDefault();

            // assign the navigation button content to default.
            navigationButtonsDefault();

            // replace the active class with an empty string.
            active[0].className = active[0].className.replace(' btn-active', '');
        }
    });
});

/*
    Navigation & Project Component Functions.

    Assigns the 'active' or 'default' properties to components depending
    on state.

        Active : assign component property to visible.
        Default : assign component property be located out of view.
*/
navigationComponentActive = () => {
    // test function property assignment.
    console.log('State : Navigation.')
    // set the navigation component to visible ( 0 ).
    nav.style.right = 0;
}
navigationComponentDefault = () => {
    // test function property assignment.
    console.log('State : Navigation Removed.')
    // set the navigation component outside the viewport ( -100 ).
    nav.style.right = '-100vw';
}
projectsComponentActive = () => {
    // test function property assignment.
    console.log('State : Projects.');
    // display the aside projects component.
    projects.style.left = '0';
}
projectsComponentDefault = () => {
    // test function property assignment.
    console.log('State : Portfolio.');
    // set the aside projects component to off screen ( -100 ).
    projects.style.left = '-100vw';
}

navigationButtonsDefault = () => {
    // set the menu button contents back to default ( menu ).
    menu.querySelector('span').innerHTML = 'menu';
    menu.querySelector('i').className = icons[1];
}
projectsButtonsDefault = () => {
    // reset work button contents back to default ( work ).
    work.querySelector('span').innerHTML = 'work';
    work.querySelector('i').className = icons[4];
}