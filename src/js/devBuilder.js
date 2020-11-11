const nav = document.querySelector('#nav');
const info = document.querySelector('#information');
const tech = document.querySelector('#technical');
const head = document.querySelector('#header');
const proj = document.querySelector('#projects');
const foot = document.querySelector('#footer');

let bakc = document.getElementsByClassName('back');


// [ removeComponent ] function
const removeComponent = () => {
    
    // for (let i = 0; i < bakc.length; i++) {
    //     bakc[i].style.display = 'none';
    // }

    // head.style.display = 'none';
    nav.style.display = 'none';
    info.style.display = 'none';
    // proj.style.display = 'none';
    tech.style.display = 'none';
    foot.style.display = 'none';

    
}
// init [ removeComponent ] function
// removeComponent();






