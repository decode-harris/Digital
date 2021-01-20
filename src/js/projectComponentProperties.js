// [ container ] projects wrapper selector
const container = document.querySelector('.container');

let articles = document.querySelectorAll('.projects');

let images = document.querySelectorAll('.projects img');
let i;

console.log(images);



for ( i = 0; i < images.length; i++) {
    
    // images[i].style.background = '#FFF';

    let project_01 = 'red';
    let project_02 = 'green';
    let project_03 = 'blue';

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

