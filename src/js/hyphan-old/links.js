
/*
    [ project link ] events

    1. [ alfheim ] : open alfheim website / application in a new tab
    2. [ niflheim ] : open niflheim website / application in a new tab
    3. [ jotunheim ] : open jotunheim website / application in a new tab
    4. [ vanaheim ] : open vanaheim website / application in a new tab


*/

// let controlsView = document.querySelector('.controlsView');

// controlsView.addEventListener('click', ()=> {

//     if (controlsView.id == 'alfheim') {
        
//         // open [ alfheim ] github hosted website
//         window.open('https://decode-harris.github.io/alfheim/');

//         // test
//         console.log('opening : [ ALFHEIM ]');
//     }
//     if (controlsView.id == 'niflheim') {
        
//         // open [ niflheim ] github hosted website
//         window.open('https://decode-harris.github.io/niflheim/');

//         // test
//         console.log('opening : [ niflheim ]');
//     }
//     if (controlsView.id == 'jotunheim') {

//         // open [ jotunheim ] github hosted website
//         window.open('https://decode-harris.github.io/jotunheim/');        

//         // test
//         console.log('opening : [ jotunheim ]');
//     }
//     if (controlsView.id == 'vanaheim') {
        
//         // open [ vanaheim ] github hosted website
//         window.open('https://decode-harris.github.io/vanaheim/');
        
//         // test
//         console.log('opening : [ vanaheim ]');
//     }

// });

/*
    [ footer component ] events

        1. [ resume ] : open resume pdf file
        2. [ github ] : open github profile
        3. [ email  ] : open email client

*/

// resume selector
let resume = document.querySelector('#contact_resume');

// event [ resume ] : open resume file
resume.addEventListener('click', ()=> {

    // assign resume source file to pdf variable
    // let pdf = 'src/docs/ChristopherHarrisResume.pdf';

    let pdf = 'src/docs/Resume.pdf';

    // open resume in a new window
    window.open(pdf);

});

// github selector
let github = document.querySelector('#contact_github');

// event [ github ] : open github profile
github.addEventListener('click', ()=> {

    // assign github href to git variable
    let git = 'https://github.com/decode-harris';

    // open resume in a new window
    window.open(git);

});

// email selector
let email = document.querySelector('#contact_email');

// event [ email ] : open email client
email.addEventListener('click', ()=> {

    // assign email address to mail variable
    let mail = 'mailto:decode.harris@gmail.com';

    // open mail in same window [ device email client ]
    window.location = mail;

}); 



// // project [ alfheim ] slide selector
// let alfheim = document.querySelector('#alfheim');

// // event [ alfheim ] : open live project in a new tab
// alfheim.addEventListener('click', ()=> {

//     // open [ alfheim ] github hosted website
//     window.open('https://decode-harris.github.io/alfheim/');
    
//     // test
//     console.log('opening...alfheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ niflheim ] slide selector
// let niflheim = document.querySelector('#niflheim');

// // event [ niflheim ] : open live project in a new tab
// niflheim.addEventListener('click', ()=> {

//     // open [ niflheim ] github hosted website
//     window.open('https://decode-harris.github.io/niflheim/');
    
//     // test
//     console.log('opening...niflheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ jotunheim ] slide selector
// let jotunheim = document.querySelector('#jotunheim');

// // event [ jotunheim ] : open live project in a new tab
// jotunheim.addEventListener('click', ()=> {

//     // open [ jotunheim ] github hosted website
//     window.open('https://decode-harris.github.io/jotunheim/');
    
//     // test
//     console.log('opening...jotunheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ vanaheim ] slide selector
// let vanaheim = document.querySelector('#vanaheim');

// // event [ vanaheim ] : open live project in a new tab
// vanaheim.addEventListener('click', ()=> {

//     // open [ vanaheim ] github hosted website
//     window.open('https://decode-harris.github.io/vanaheim/');
    
//     // test
//     console.log('opening...vanaheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });