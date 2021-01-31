// [ container ] projects wrapper selector
const container = document.querySelector('.container');

let articles = document.querySelectorAll('.projects');

let images = document.querySelectorAll('.projects img');
let i;

console.log(images);



for ( i = 0; i < images.length; i++) {
    
    // images[i].style.background = '#FFF';

    let project_01 = 'darkslategrey';
    let project_02 = 'darkslategrey';
    let project_03 = 'darkslategrey';

    // array [ projectsArray ]
    let projectsArray = [

        // project 01 [ images ]
        {
            img_x0: images[0],
            img_x1: images[1],
            img_x2: images[2],
            img_x3: images[3],
        },
        // project 02 [ images ]
        {
            img_x4: images[4],
            img_x5: images[5],
            img_x6: images[6],
            img_x7: images[7],
        },
        // project 03 [ images ]
        {
            img_x8: images[8],
            img_x9: images[9],
            img_x10: images[10],
            img_x11: images[11],
        },
    ];

    // assign projectArray 00 placeholder images to red
    projectsArray[0].img_x0.style.background = project_01;
    projectsArray[0].img_x1.style.background = project_01;
    projectsArray[0].img_x2.style.background = project_01;
    projectsArray[0].img_x3.style.background = project_01;

    // assign projectArray 01 placeholder images to green
    projectsArray[1].img_x4.style.background = project_02;
    projectsArray[1].img_x5.style.background = project_02;
    projectsArray[1].img_x6.style.background = project_02;
    projectsArray[1].img_x7.style.background = project_02;

    // assign projectArray 02 placeholder images to blue
    projectsArray[2].img_x8.style.background = project_03;
    projectsArray[2].img_x9.style.background = project_03;
    projectsArray[2].img_x10.style.background = project_03;
    projectsArray[2].img_x11.style.background = project_03;

}

// [ profile ] image container
let profile = document.querySelector('.profile');

profileOverlay = () => {

    // position profile as relative
    profile.style.position = 'relative';

    // overlay creator
    let overlay = document.createElement('div');

    overlay.style.height = '100%';
    overlay.style.width = '100%';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.background = 'darkslategrey';
    overlay.style.borderRadius = '50%';

    profile.appendChild(overlay);


}

// profileOverlay();


// function [ projectsCycler ]
projectsCycler = () => {

    // projects selector
    let projects = document.querySelectorAll('.projects');

    // for loop [ projects ]
    for ( i = 0; i < projects.length; i++ ) {

        projects[i].style.display = 'grid';

        // projects[0].style.display = 'grid';

        // test
        console.log(projects[i]);
    }

}

projectsMobileCycler = () => {

    // projects selector
    let projects = document.querySelectorAll('.projects');

    // for loop [ projects ]
    for ( i = 0; i < projects.length; i++ ) {

        projects[i].style.display = 'grid';

        // test
        console.log(projects[i]);
    }

}