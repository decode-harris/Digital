// array [ projects ]
let projects = [

    // project objects [ coffeehaus ]
    {
        title: 'coffeehaus',
        tag: 'speciality brewed coffee & gormet pancakes',
        info: 'A modern cafe website styled in a minimalistic design pattern, ...',
        tech: 'developed utilizing responsive web components, automated slideshow & mobile first design principles.',
        href: '',
        repo: '',

    },
    // project objects [ planets ]
    {
        title: 'planets',
        tag: 'to infinity & beyond',
        info: 'An animated education web application, ...',
        tech: 'developed the assets using Adobe photoshop, assigned animation functions with GSAP library, ...',
        live: 'https://github.com/decode-harris/planets',
        repo: 'https://decode-harris.github.io/planets/',

    },
    // project objects [ destinations ]
    {
        title: 'destinations',
        tag: 'a site to see',
        info: 'a personal travel application used to upload and view previous holiday moments.  ...',
        tech: 'Document upload validation, image grouping tools, display grouped items',
        href: 'https://decode-harris.github.io/travel/',
        repo: 'https://github.com/decode-harris/travel',

    },
    // project objects [ games ]
    {
        title: 'games',
        tag: 'high fantasy wizard adventure',
        info: 'a webpage video game utilizing the core web languages to produce an dynamic & interactive side-scroller.  ...',
        tech: 'developed with vanilla javascript, HTML canvas & an asset library for the game sprites',
        href: '',
        repo: '',
    },

];

// modal element selector
let modal = document.querySelector('#modal');
modal.setAttribute('class', 'modal');

const repo = document.querySelector('#modal-repo');
const live = document.querySelector('#modal-live');


// modal content id selectors & onclick events
const modal_coffee = document.querySelector('#modal-coffee');
modal_coffee.addEventListener('click', ()=> {
    
    if (modal.classList != 'modal_active') {
        modal.style.display = 'flex';
        modal.classList = 'modal_active';

        modal_title.innerHTML = projects[0].title;
        modal_tag.innerHTML = projects[0].tag;
        modal_info.innerHTML = projects[0].info;
        modal_tech.innerHTML = projects[0].tech;

        
    }

});

// modal content id selectors & onclick events
const modal_planets = document.querySelector('#modal-planets');
modal_planets.addEventListener('click', ()=> {

    if (modal.classList != 'modal_active') {
        modal.style.display = 'flex';
        modal.classList = 'modal_active';

        modal_title.innerHTML = projects[1].title;
        modal_tag.innerHTML = projects[1].tag;
        modal_info.innerHTML = projects[1].info;
        modal_tech.innerHTML = projects[1].tech;

        repo.href = projects[1].repo;
    }
    
});

// modal content id selectors & onclick events
const modal_travel = document.querySelector('#modal-travel');
modal_travel.addEventListener('click', ()=> {
    if (modal.classList != 'modal_active') {
        modal.style.display = 'flex';
        modal.classList = 'modal_active';

        modal_title.innerHTML = projects[2].title;
        modal_tag.innerHTML = projects[2].tag;
        modal_info.innerHTML = projects[2].info;
        modal_tech.innerHTML = projects[2].tech;

        repo.href = projects[2].repo;
        live.href = projects[2].href;
    }
});

// close modal component
const modal_exit = document.querySelector('#modal-exit');
modal_exit.addEventListener('click', ()=> {

    // validate modal elements display not none
    if (modal.style.display != 'none') {

        // remove modal element
        modal.style.display = 'none';

        // assign modal classlist to modal
        modal.classList = 'modal';

        // test
        console.log('modal inactive');
    }

    

});

let modal_title, modal_tag, modal_info, modal_tech, modal_link;

modal_title = document.querySelector('#modal-title');
modal_tag = document.querySelector('#modal-tag');
modal_info = document.querySelector('#modal-info');
modal_tech = document.querySelector('#modal-tech');
modal_live = document.querySelector('#modal-live');
modal_repo = document.querySelector('#modal-repo');

// https://github.com/decode-harris/planets




