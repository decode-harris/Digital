// project selectors
let plan = document.querySelector('#plan');
let nifl = document.querySelector('#nifl');
let rntl = document.querySelector('#rntl');
let coff = document.querySelector('#coff');


const addBackground = (e) => {
    
    // background sources
    let planets = 'screens/planets-desktop.PNG';
    let niflheim = 'screens/niflheim-desktop.PNG';
    let rntlpay = 'screens/rntlpay-desktop.PNG';
    let coffee = 'screens/coffee-desktop.PNG';

    // background slide assignments
    plan.style.backgroundImage = 'url(' + planets + ')';
    nifl.style.backgroundImage = 'url(' + niflheim + ')';
    rntl.style.backgroundImage = 'url(' + rntlpay + ')';
    coff.style.backgroundImage = 'url(' + coffee + ')';

}
// init [ addBackground ] function
addBackground(plan, nifl, rntl, coff);