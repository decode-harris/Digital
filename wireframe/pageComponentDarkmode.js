// [ page ] website wrapper component
const page = document.querySelector('#page');

// array [ darkmode ] properties
let darkmode = [
    
    // object [ properties ]
    {
        background: '#000',
        borderColor: '#FFF', 
        textColor: '#FFF',
    }

];

// array [ lightmode ] properties
let lightmode = [

    // object [ properties ]
    {
        background: '#FFF',
        borderColor: '#000', 
        textColor: '#000',
    }

];


// [ pagemodeButton ] event button selector
const pagemodeButton = document.querySelector('#pagemode-btn');

// event [ pagemodeButton ]
pagemodeButton.addEventListener('click', ()=> {
    
    // validate page mode
    if (page.classList != 'darkmode') {
        applyDarkMode();
    }
    if (page.classList != 'darkmode') {
        ();
    }
    else {
        applyLightMode();
    }
    

});


// function [ assignLightMode ]
applyLightMode = () => {
    page.className = '';
    // assign [ page ] classname lightmode
    page.classList += ' lightmode';
    
}
// function [ assignDarkMode ]
applyDarkMode = () => {
    page.className = '';
    // assign [ page ] classname darkmode
    page.classList += ' darkmode';
}


// test
console.log(page);