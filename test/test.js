// button selectors
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const btnView = document.querySelector('.btnView');

// element ids array
const elementArray = [
    // element id array items
    'id__01',
    'id__02',
    'id__03',
    'id__04',
    'id__05',

    
];

// set index at 0
let elementIndex = 0;

// set btn view id to default [ 0 ]
btnView.id = elementArray[0];

// [ previous ID ] function
const prevID = () => {

    // reverse order of array items
    elementArray.reverse();
    // assign btn view id to prev array item
    btnView.id = elementArray[elementIndex++ % elementArray.length];
    // test
    console.log(btnView);
}

// [ next ID ] function
const nextID = () => {
    // assign btn view id to next array item
    btnView.id = elementArray[elementIndex++ % elementArray.length];
    // test
    console.log(btnView);
}

// events [ control buttons ]
btnNext.addEventListener('click', nextID);
btnPrev.addEventListener('click', prevID);


// let projectInformation = [

//     {
//         img: '../screens/planet-mobile.PNG',
//         title: 'planets',
//         desc: 'soloar system interactive learning module',
//         link: 'https://decode-harris.github.io/planets/',

//     },
//     {
//         img: '../screens/niflheim-mobile.PNG',
//         title: 'dashboard management',
//         desc: 'dashboard application system',
//         link: 'https://decode-harris.github.io/NIFLHEIM/',
//     },
//     {
//         // set image value as image host href
//         img: 'https://i.ibb.co/r57LHhD/IMG20181121150545.jpg',
//         // img: '../screens/rnltpay-mobile.PNG',
//         title: 'rntlpay app',
//         desc: 'personal rental expenses tracker',
//         link: 'https://decode-harris.github.io/rntlpay/',
//     },

//     {
//         img: 'https://i.ibb.co/nnWFmvY/IMG20171224114945.jpg',
//         // img: '../screens/coffee-mobile.PNG',
//         title: 'coffee shop',
//         desc: 'coffee shop responsive redesign',
//         link: 'https://decode-harris.github.io/coffee/',
//     }


// ];

// let i;
// for (i = 0; i < projectInformation.length; i++) {

//     const slider = document.querySelector('.slider');
//     const {img, title, desc, link} = projectInformation[i];
    
//     const slideInfo = () => {

//         let title = document.createElement('h3');
//         let desc = document.createElement('p');
//         let link = document.createElement('a');
//         let background;

//         title.innerHTML = projectInformation[i].title;
//         desc.innerHTML = projectInformation[i].desc;
//         background = projectInformation[i].img;

//         slider.appendChild(title);
//         slider.appendChild(desc);
//         slider.appendChild(link);
//         slider.style.backgroundImage = 'url(' + background + ')';


//         console.log(title);




//     }
//     slideInfo();

//     console.log(projectInformation[i]);
//     // projectImagesMobile++;

//     // slider.style.backgroundImage = 'url(' + projectInformation[0].img + ')';

//     projectInformation[i++];

//     // testing element styles
//     slider.style.width = '700px',
//     slider.style.height = '500px',
//     slider.style.border = '2px solid #000';

//     // test component
//     console.log(slider);
// }


// const btnView = document.querySelector('.btnView');

// test array
// console.log(projectImagesMobile);

// for (let i = 0; i < projectsArray.length; i++) {

//     // [ slides ] element selector
//     let slides = document.getElementsByClassName('slides');

//     // [ projectTitle ] assignment
//     let projectTitle = projectsArray[i].title;

//     // [projectDesc ] assignment
//     let projectDesc = projectsArray[i].desc;

//     // let projectImage = projectsArray[i].imageDesktop;
//     let projectImage = projectsArray[i].imageMobile;
//     // set media query listener here to switch between mobile & desktop images
//     // set media query listener here to switch between mobile & desktop images

//     document.querySelector('#slideTitle').innerHTML = projectTitle;

//     document.querySelector('#slideDesc').innerHTML = projectDesc;

//     slides[i].style.backgroundImage = '(url' + projectImage + ')';

    
//     // test
//     console.log(projectTitle);

//     // test
//     console.log(projectDesc);

//     // test
//     console.log(projectImage);

// }





