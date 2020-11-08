// project selectors
let plan = document.querySelector('#plan');
let nifl = document.querySelector('#nifl');
let rntl = document.querySelector('#rntl');
let coff = document.querySelector('#coff');

// let land = document.querySelector('#information');


const addBackground = () => {
    
    // background sources
    let planets = 'screens/planets-desktop.PNG';
    let niflheim = 'screens/niflheim-desktop.PNG';
    let rntlpay = 'screens/rntlpay-desktop.PNG';
    let coffee = 'screens/coffee-desktop.PNG';
    let landing = 'screens/landing-default.PNG';

    // background slide assignments
    plan.style.backgroundImage = 'url(' + planets + ')';
    nifl.style.backgroundImage = 'url(' + niflheim + ')';
    rntl.style.backgroundImage = 'url(' + rntlpay + ')';
    coff.style.backgroundImage = 'url(' + coffee + ')';
    // land.style.backgroundImage = 'url(' + landing + ' )';

}
// init [ addBackground ] function
addBackground(plan, nifl, rntl, coff);