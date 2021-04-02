// array [ projects ]
let projects = [
    

    // project objects [ coffeehaus ]
    {
        title: 'coffeehaus',
        tag: 'speciality brewed coffee & gormet pancakes',

        img0: '../../src/img/c-1-sml.jpeg',
        img1: '../../src/img/c-2-sml.jpeg',
        img2: '../../src/img/c-3-sml.jpeg',
        
        info: 'A modern cafe website styled in a minimalistic design pattern, ...',
        tech: 'developed utilizing responsive web components, automated slideshow & mobile first design principles.',

        tech0: 'fab fa-html5',  // <i class="fab fa-html5"></i>
        tech1: 'fab fa-css3-alt',   // <i class="fab fa-css3-alt"></i>
        tech2: 'fab fa-js-square',  // <i class="fab fa-js-square"></i>
        
        href: '',
        repo: '',

    },

    // project objects [ destinations ]
    {
        title: '[tbc] explorers',
        tag: 'a site to see',

        img0: '../../src/img/d-1-sml.jpeg',
        img1: '../../src/img/d-2-sml.jpeg',
        img2: '../../src/img/d-3-sml.jpeg',

        info: 'a personal travel application used to upload and view previous holiday moments.  ...',
        tech: 'Document upload validation, image grouping tools, display grouped items',

        tech0: 'fab fa-html5',  // <i class="fab fa-html5"></i>
        tech1: 'fab fa-css3-alt',   // <i class="fab fa-css3-alt"></i>
        tech2: 'fab fa-js-square',  // <i class="fab fa-js-square"></i>

        href: 'https://decode-harris.github.io/travel/',
        repo: 'https://github.com/decode-harris/travel',

    },


    // project objects [ manage ]
    {
        title: '[tbc] manage',
        tag: 'dashboard management solutions',

        img0: '../../screens/management-preview.jpeg',
        img1: '../../screens/management-preview.jpeg',
        img2: '../../screens/management-preview.jpeg',

        info: 'resource data management system developed to keep track of holiday destination spending & organisation, ...',
        tech: 'developed the assets using Adobe photoshop, assigned animation functions with GSAP library, ...',

        tech0: 'fab fa-html5',  // <i class="fab fa-html5"></i>
        tech1: 'fab fa-css3-alt',   // <i class="fab fa-css3-alt"></i>
        tech2: 'fab fa-js-square',  // <i class="fab fa-js-square"></i>

        live: 'https://github.com/decode-harris/planets',
        repo: 'https://decode-harris.github.io/planets/',

    },

    
    // project objects [ interact ]
    {
        title: '[tbc] interact',
        tag: 'interactive & educational space website',

        img0: '../../src/img/p-1-sml.jpeg',
        img1: '../../src/img/p-2-sml.jpeg',
        img2: '../../src/img/p-3-sml.jpeg',


        info: 'a webpage video game utilizing the core web languages to produce an dynamic & interactive side-scroller.  ...',
        tech: 'developed with vanilla javascript, HTML canvas & an asset library for the game sprites',

        tech0: 'fab fa-html5',  // <i class="fab fa-html5"></i>
        tech1: 'fab fa-css3-alt',   // <i class="fab fa-css3-alt"></i>
        tech2: 'fab fa-js-square',  // <i class="fab fa-js-square"></i>

        href: '',
        repo: '',
    },

    // project objects [ architect ]
    {
        title: '[tbc] architect',
        tag: 'architectural drawings portfolio',

        img0: '../../src/img/.jpeg',
        img1: '../../src/img/.jpeg',
        img2: '../../src/img/.jpeg',


        info: '.  ...',
        tech: 'developed with vanilla javascript, HTML canvas & an asset library for the game sprites',

        tech0: 'fab fa-html5',  // <i class="fab fa-html5"></i>
        tech1: 'fab fa-css3-alt',   // <i class="fab fa-css3-alt"></i>
        tech2: 'fab fa-js-square',  // <i class="fab fa-js-square"></i>

        href: '',
        repo: '',
    },

];

const page = document.querySelector('.page');
const main = document.querySelector('.main');

// modal element selector
let modal = document.querySelector('#modal');
modal.setAttribute('class', 'modal');

modal.style.display = 'none';

const repo = document.querySelector('#modal-repo');
const live = document.querySelector('#modal-live');

let modalButtons = document.querySelectorAll('.modal-button');

console.log(modalButtons);

// forEach [ modal buttons ]
modalButtons.forEach(element => {

    // event [ modal buttons ] 
    element.addEventListener('click', ()=> {


        // project [ coffeeshop ] properties
        if(element.id == 'modal-coffee') {
            
            // set modal elements as projects array values
            modal_title.innerHTML = projects[0].title;
            modal_tag.innerHTML = projects[0].tag;

            modal_img_0.src = projects[0].img0;
            modal_img_1.src = projects[0].img1;
            modal_img_2.src = projects[0].img2;

            modal_info.innerHTML = projects[0].info;
            modal_tech.innerHTML = projects[0].tech;

            repo.href = projects[0].repo;
            live.href = projects[0].href;
        }

        // project [ travellers ] properties
        if (element.id == 'modal-travel') {

            // set modal elements as projects array values
            modal_title.innerHTML = projects[1].title;
            modal_tag.innerHTML = projects[1].tag;

            modal_img_0.src = projects[1].img0;
            modal_img_1.src = projects[1].img1;
            modal_img_2.src = projects[1].img2;


            modal_info.innerHTML = projects[1].info;
            modal_tech.innerHTML = projects[1].tech;

            repo.href = projects[1].repo;
            live.href = projects[1].href;
        }

        // project [ manage ] properties
        if (element.id == 'modal-manage') {

            // set modal elements as projects array values
            modal_title.innerHTML = projects[2].title;
            modal_tag.innerHTML = projects[2].tag;

            modal_img_0.src = projects[2].img0;
            modal_img_1.src = projects[2].img1;
            modal_img_2.src = projects[2].img2;
            
            modal_info.innerHTML = projects[2].info;
            modal_tech.innerHTML = projects[2].tech;

            repo.href = projects[2].repo;
            live.href = projects[2].href;
        }

        // project [ interact ] properties
        if (element.id == 'modal-interact') {
            modal_title.innerHTML = projects[3].title;
            modal_tag.innerHTML = projects[3].tag;

            modal_img_0.src = projects[3].img0;
            modal_img_1.src = projects[3].img1;
            modal_img_2.src = projects[3].img2;
            
            modal_info.innerHTML = projects[3].info;
            modal_tech.innerHTML = projects[3].tech;
        }

        // project [ interact ] properties
        if (element.id == 'modal-architect') {
            modal_title.innerHTML = projects[4].title;
            modal_tag.innerHTML = projects[4].tag;

            modal_img_0.src = projects[4].img0;
            modal_img_1.src = projects[4].img1;
            modal_img_2.src = projects[4].img2;
            
            modal_info.innerHTML = projects[4].info;
            modal_tech.innerHTML = projects[4].tech;
        }


        // test buttons ID
        console.log('button ID :' + element.id);

        // test buttons
        console.log('modal button clicked');

        // set modal
        modal.style.display = 'flex';

        // restrict page scroll
        main.style.overflowY = 'hidden';
    })
});

// modal content id selectors & onclick events
// const modal_coffee = document.querySelector('#modal-coffee');
// modal_coffee.addEventListener('click', ()=> {
    
//     if (modal.classList != 'modal_active') {
//         modal.style.display = 'flex';
//         modal.classList = 'modal_active';

//         // modal.style.overflow = 'hidden';
        
//         main.style.overflowY = 'hidden';
//         modal_title.innerHTML = projects[0].title;
//         modal_tag.innerHTML = projects[0].tag;

//         modal_img_0.src = projects[0].img0;
//         modal_img_1.src = projects[0].img1;
//         modal_img_2.src = projects[0].img2;

//         modal_info.innerHTML = projects[0].info;
//         modal_tech.innerHTML = projects[0].tech;

//         modal_tech_0.setAttribute('class', projects[0].tech0);
//         modal_tech_1.setAttribute('class', projects[0].tech1);
//         modal_tech_2.setAttribute('class', projects[0].tech2);

//         repo.href = projects[0].repo;
//         live.href = projects[0].href;
//     }

// });

// modal content id selectors & onclick events
// const modal_management = document.querySelector('#modal-management');
// modal_management.addEventListener('click', ()=> {

//     if (modal.classList != 'modal_active') {
//         modal.style.display = 'flex';
//         modal.classList = 'modal_active';

//         modal_title.innerHTML = projects[1].title;
//         modal_tag.innerHTML = projects[1].tag;

//         modal_img_0.src = projects[1].img0;
//         modal_img_1.src = projects[1].img1;
//         modal_img_2.src = projects[1].img2;


//         modal_info.innerHTML = projects[1].info;
//         modal_tech.innerHTML = projects[1].tech;

//         // modal_tech_0.setAttribute('class', projects[1].tech0);
//         // modal_tech_1.setAttribute('class', projects[1].tech1);
//         // modal_tech_2.setAttribute('class', projects[1].tech2);
        
//         repo.href = projects[1].repo;
//         live.href = projects[1].href;
//     }
    
// });

// // modal content id selectors & onclick events
// const modal_travel = document.querySelector('#modal-travel');
// modal_travel.addEventListener('click', ()=> {
//     if (modal.classList != 'modal_active') {
//         modal.style.display = 'flex';
//         modal.classList = 'modal_active';

//         modal_title.innerHTML = projects[2].title;
//         modal_tag.innerHTML = projects[2].tag;

//         modal_img_0.src = projects[2].img0;
//         modal_img_1.src = projects[2].img1;
//         modal_img_2.src = projects[2].img2;


//         modal_info.innerHTML = projects[2].info;
//         modal_tech.innerHTML = projects[2].tech;

//         repo.href = projects[2].repo;
//         live.href = projects[2].href;
//     }
// });

// // modal content id selectors & onclick events
// const modal_animation = document.querySelector('#modal-animation');
// modal_animation.addEventListener('click', ()=> {
//     if (modal.classList != 'modal_active') {
//         modal.style.display = 'flex';
//         modal.classList = 'modal_active';

//         modal_title.innerHTML = projects[3].title;
//         modal_tag.innerHTML = projects[3].tag;

//         modal_img_0.src = projects[3].img0;
//         modal_img_1.src = projects[3].img1;
//         modal_img_2.src = projects[3].img2;


//         modal_info.innerHTML = projects[3].info;
//         modal_tech.innerHTML = projects[3].tech;

//         repo.href = projects[3].repo;
//         live.href = projects[3].href;
//     }
// });

// close modal component
const modal_exit = document.querySelector('#modal-exit');
modal_exit.addEventListener('click', ()=> {

    // validate modal elements display not none
    if (modal.style.display != 'none') {

        // remove modal element
        modal.style.display = 'none';

        // assign modal classlist to modal
        modal.classList = 'modal';

        main.style.overflowY = 'scroll';

        // test
        console.log('modal inactive');
    }

    

});

let modal_title, modal_tag, modal_info, modal_tech, modal_link, modal_img_0, modal_img_1, modal_img_2, modal_tech_0, modal_tech_1, modal_tech_2;

modal_title = document.querySelector('#modal-title');
modal_tag = document.querySelector('#modal-tag');

modal_img_0 = document.querySelector('#modal-img-0');
modal_img_1 = document.querySelector('#modal-img-1');
modal_img_2 = document.querySelector('#modal-img-2');

modal_info = document.querySelector('#modal-info');
modal_tech = document.querySelector('#modal-tech');

modal_tech_0 = document.querySelector('#modal-tech-0');
modal_tech_1 = document.querySelector('#modal-tech-1');
modal_tech_2 = document.querySelector('#modal-tech-2');

modal_live = document.querySelector('#modal-live');
modal_repo = document.querySelector('#modal-repo');

// https://github.com/decode-harris/planets




